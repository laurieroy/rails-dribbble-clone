# DRIBBBLE CLONE
(Dribbble is a site for designers to showcase their work, and acts as a portfolio.)

This is a dribbble clone (feed only) that follows a 2017 [tutorial](https://web-crunch.com/posts/lets-build-dribbble-clone-with-ruby-on-rails) by Andy Leverenz. I built in Rails 6 <!--, so used image_processing instead of carrierwave for image uploads. -->

Features: 
- Logged in users can comment on shots and like, 

- I'm working on: view counts, user roles, drag-n-drop photo add

<!-- custom Devise route -->

### GEMS USED

* Bulma UI
* Devise for authentication
<!-- * Dropzone and Stimulus.js for drag and drop -->
<!-- * Active Storage for handling the file/image -->
* CarrierWave and ImageMagick to handle image upload and resize
* Act as votable to allow Shots to be liked/unliked
* Impressionist to log views -Working on


Ruby 2.6.3 | 
Rails 6.1.2 | 
PostgreSql 13.1 | 
ImageMagick

Working on:
* class not being applied to drag-n-drop

