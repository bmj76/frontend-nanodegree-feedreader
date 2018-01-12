/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
	/* This is our first test suite - a test suite just contains
	* a related set of tests. This suite is all about the RSS
	* feeds definitions, the allFeeds variable in our application.
	*/
	describe('RSS Feeds', function() {
		/* This is our first test - it tests to make sure that the
		 * allFeeds variable has been defined and that it is not
		 * empty. Experiment with this before you get started on
		 * the rest of this project. What happens when you change
		 * allFeeds in app.js to be an empty array and refresh the
		 * page?
		 */
		it('are defined', function() {
			expect(allFeeds).toBeDefined();
			expect(allFeeds.length).not.toBe(0);
		});

		/*  Write a test that loops through each feed
		 * in the allFeeds object and ensures it has a URL defined
		 * and that the URL is not empty.
		 */

		it ('have non-empty URLs', function() {
			/* Loop through allfeeds and check that url exists and has a length
			 * Custom exception message used because there are two tests bundled together
			 */
			for (var i = 0, feedLength = allFeeds.length; i < feedLength; i++) {
				expect(allFeeds[i].url).toBeDefined('The object at index: ' + i 
					+ ' does not have a url key.');
				expect(allFeeds[i].url.length).not.toBe(0, 'The object at index: ' + i 
					+ ' has an empty url.');
			}
		});


		/* Write a test that loops through each feed
		 * in the allFeeds object and ensures it has a name defined
		 * and that the name is not empty.
		 */
		it ('have non-empty names', function() {
			/* Loop through allfeeds and check that name exists and has a length
			 * Custom exception message used because there are two tests bundled together
			 */
			for (var i = 0, feedLength = allFeeds.length; i < feedLength; i++) {
				expect(allFeeds[i].name).toBeDefined('The object at index: ' + i 
					+ ' does not have a name key.');
				expect(allFeeds[i].name.length).not.toBe(0,'The object at index: ' + i 
					+ ' has an empty name.');
			}
		});
	});


	/* Write a new test suite named "The menu" */
	describe('The menu', function() {
		/* Write a test that ensures the menu element is
		 * hidden by default. You'll have to analyze the HTML and
		 * the CSS to determine how we're performing the
		 * hiding/showing of the menu element.
		 */
		it('is hidden by default', function(){
			expect($('.body').hasClass('menu-hidden')).toBe(false);
		});

		/* Write a test that ensures the menu changes
		 * visibility when the menu icon is clicked. This test
		 * should have two expectations: does the menu display when
		 * clicked and does it hide when clicked again.
		 */
		it('opens and closes on click', function(){
			$('.menu-icon-link').click();
			expect($('body').hasClass('menu-hidden')).toBe(false,'Does not open');
			$('.menu-icon-link').click();
			expect($('body').hasClass('menu-hidden')).toBe(true, 'Does not close');
		});
	});
		 

	/* Write a new test suite named "Initial Entries" */
	describe('Initial Entries', function() {
		/* Write a test that ensures when the loadFeed
		 * function is called and completes its work, there is at least
		 * a single .entry element within the .feed container.
		 * Remember, loadFeed() is asynchronous so this test will require
		 * the use of Jasmine's beforeEach and asynchronous done() function.
		 */

		beforeEach(function(done) {
			//Call loadFeed function with first first index and callback of done
			expect(allFeeds).toBeDefined();
			expect(allFeeds.length).not.toBe(0);
			loadFeed(0,done);
		});

		it('has at least a single entry', function(done){
			// Code Source: https://api.jquery.com/find/
			var allDomFeeds = $('.feed').find('.entry').length;
			// Code Source: https://stackoverflow.com/questions/24090270/how-can-i-test-that-a-value-is-greater-than-or-equal-to-in-jasmine
			expect(allDomFeeds).not.toBeLessThan(1);
			done();
		});
	});
	
	/* Write a new test suite named "New Feed Selection" */	
	describe('New Feed Selection', function() {
		/* Write a test that ensures when a new feed is loaded
		 * by the loadFeed function that the content actually changes.
		 * Remember, loadFeed() is asynchronous.
		 */
		var before,
			after;

		beforeEach(function(done) {
			/* Utilize the callback of loadFeed to stack the async calls
			 * This can easily be tested by setting the index to both 
			 * loadFeed calls to the same index
			 */
			expect(allFeeds).toBeDefined();
			expect(allFeeds.length).not.toBeLessThan(2);			 
			loadFeed(0, function() {
				before = $('.feed').children().html();
				loadFeed(1, function() {
					after = $('.feed').children().html();
					done();
				});
			});
		});
		
		it('changes after loading different feed', function(done) {
			expect(after === before).toBe(false);
			done();
		});
	});
}());
