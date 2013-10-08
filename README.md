# NAT (Nerdery Assessment Test)
**Author:** Dillon Curry

**Objective:** Convert the Crispin & Mulberry PSD to HTML/CSS/JS

## Notes
* I used HTML5 Boilerplate to get a basic page setup with all the best practices.
* I used normalize.js to save me headaches between browser defined default element styles.
* I wrote a basic jQuery plugin for the carousel, the code isn't very clean or flexible, but it does everything it is supposed to do.
* Checked for near pixel perfection in IE7+, Safari, Firefox, and Chrome.
* I used [ievms](https://github.com/xdissent/ievms) to pull down all of the VMs for IE7+ and then ran them with virtualBox for all of the IE testing.
* I took all the images in photoshop out by converting them to smartobjects and then saving as.
* I used basic CSS to write it all, but would have preferred Sass to make it a lot cleaner with variables and nesting.
* I would have used Sass to build a spritesheet for all of the icon's (header, social, arrows).  Because right now its serving up way too many HTTP requests.
* I used the `<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->` to add the lt-ie8 class to `<html>` to allow me to make minor tweaks on things that were hard to get right.
* I initially started to make everything responsive but decided it was taking far too long, and making that work in older browsers requires the respond.js polyfill.
* Had a fun time rewriting everything at least 4 times to make it work in IE!
* I deployed it to Heroku just by changing index.html to index.php. The site can be found at http://dilloncurry-nat.herokuapp.com/