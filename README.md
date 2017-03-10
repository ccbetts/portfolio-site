# Project #2: Build a Portfolio Site
**by Christopher Betts**

For Udacity’s [Full Stack Web Developer Nanodegree program](https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd004).

---

## Project Description
A static one-page resposive website for displaying images, descriptions, and links to each of the portfolio projects I complete throughout the course of the Nanodegree. It is intended to be modified and added upon as more projects are completed. As of March 9 , 2017, two projects have been done so far.

## Requirements
The only requirement is a web browser for opening and viewing **index.html**.

Optionally, one can use a local HTTP server of choice to serve the website. One simple and easy example is [Python’s](https://www.python.org/) **SimpleHTTPServer** module (more on that below). Of course, this requires Python (any version) to be installed.

## Project Contents
- **index.html** – the sole HTML file that makes up the website.
- **assets/** – directory containing all the necessary local assets used on the webpage.
    - **css/** – local CSS files
    - **fonts/** – locally-hosted fonts; used for serving the _WeblySleek UI_ font
    - **images/** – locally-hosted images
    - **js/** – local JavaScript files
- Various favicon images and related files

## How to View the Site Locally
Clone this repository to any location on your computer, or download this project as a ZIP file and extract it.

Navigate to the site directory. It should be at `portfolio-site/site`. Here you should see the file **index.html**.

To view the site, you can either **a)** open **index.html** directly,, or **b)** serve the directory using a local HTTP server. This latter option gives a more authentic experience (slightly).

To do option **b** using Python, open your command line/terminal of choice. Make sure it’s in the curent directory. Type the following and hit `Enter`:

```console
python -m SimpleHTTPServer 8080
```

This serves HTTP at the current directory on port `8080`. In your web browser, type `localhost:8080` in the address bar, and hit `Enter`. You should see the website in all of its filename-less glory!


## Resources Used
- [Bootstrap 4 alpha](http://v4-alpha.getbootstrap.com/) – CSS framework
- [Font Awesome](http://fontawesome.io/) – icon font
- [WeblySleek UI](http://www.fonts2u.com/weblysleek-ui-normal.font) – webfont
- [ScrollPos-Styler](https://github.com/acch/scrollpos-styler) – JavaScript for changing the style of elements based on scroll position


## Miscellaneous
**Why the picture of Korean _bibimbap_ as a background image?**
Because it’s one of my favorite foods, and it’s as beautiful as it is delicious. If you haven’t tried it before, you definitely should.
