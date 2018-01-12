# Udacity Feed Reader Project

This is a single page RSS feed reader application provided by Udacity.  The feeds are defined within the app.js file:

```
var allFeeds = [
	{
		name: 'Udacity Blog',
		url: 'http://blog.udacity.com/feed'
	}, {
		name: 'CSS Tricks',
		url: 'http://feeds.feedburner.com/CssTricks'
	}, {
		name: 'HTML5 Rocks',
		url: 'http://feeds.feedburner.com/html5rocks'
	}, {
		name: 'Linear Digressions',
		url: 'http://feeds.feedburner.com/udacity-linear-digressions'
	}
];
```

The Feeds load automatically when the page loads.  To change the feed, open the "hamburger menu" item in the top left, and select the feed you wish to view.  Clicking any of the articles should take you directly to the article at the source location.

I modified this project by adding a Jasmine test suite with 7 specifications.  These are displayed at the bottom of the screen.  All tests should pass.  If a test fails it should be clear as to why it failed.

## Getting Started

Download or clone this repository to any folder on your system.  
Start the python simple server web server fromt he same folder as the repository (this will become the webroot when you start the http server).

`python -m SimpleHTTPServer 8000`

Open a browser window and navigate to localhost:8000

## Jasmine Test Specifications

- RSS Feeds - The allFeeds variable is defined
- RSS Feeds - The allFeeds variable is not empty
- RSS Feeds - All feeds have names
- RSS Feeds - All feeds have urls

- The Menu - Is hidden by default when the page loads
- The Menu - Opens and closes when the hamburger menu is clicked

- Initial Entries - Upon the running the loadFeed function, there is at least 1 article displayed

- New Feed Selection - When a new feed is loaded, the content changes
