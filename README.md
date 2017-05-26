# Spotify Search WebApp

A search engine based on Spotify API v1


# Technologies
This web application is realized the following technologies:
- AngularJS v1.6.4
- HTML5
- Less v.2.7.2


# Install and Build
Clone this repo using the command: <br>
  ` git clone https://github.com/jump85/spotify-search.git `
  
Enter in the project dir and install node modules:<br>
` cd spotify-search` <br>
` npm install`

To build the javascript files using Grunt just type:<br>
` ./node_modules/grunt/bin/grunt --force `


# Run tests
Unit tests files are written to run with Karma engine, using Jasmine framework. 
Run tests using the following command:<br>
` ./node_modules/grunt/bin/grunt --force `

Test files are located in `test/` directory.


# User interface
Type your keyword(s) into input text and click on SEARCH button to start.
The results browse both album and artists that match submitted keywords.
Clicking on each item you can see its details:
- Discography for artists
- Tracks list for albums


# Info
For further info please contact me: massafragiovanni@gmail.com
