# Servers
Practicing Node and Express servers from various soruces. Each branch is a different tutorial. Notice, I have used names of different butlers and housekeepers (i.e SERVERS) as the branch names. That shit is clever, dog. Don't front on the boy.
___

## `Alfred`
![`Alfred`](http://cdn.fansided.com/wp-content/blogs.dir/314/files/2014/04/alfred-pennyworth.jpg)  

From [The Node Beginner Book](http://www.nodebeginner.org/).

### A full blown web application with Node.js

The use cases

Let's keep it simple, but realistic:
* The user should be able to use our application with a web browser
* The user should see a welcome page when requesting http://domain/start which displays a file upload form
* By choosing an image file to upload and submitting the form, this image should then be uploaded to http://domain/upload, where it is displayed once the upload is finished

Fair enough. Now, you could achieve this goal by googling and hacking together something. But that's not what we want to do here.

Furthermore, we don't want to write only the most basic code to achieve the goal, however elegant and correct this code might be. We will intentionally add more abstraction than necessary in order to get a feeling for building more complex Node.js applications.
___

## `Belvedere`
![`Belvedere`](http://newsite.annotatedmst.com/tinymce/plugins/moxiemanager/data/files/Operation%20007/mr%20belvedere.png)  

Basic server that uses FS and HTTP modules to serve basic HTTP pages. Very barebones NodeJS server with ony two modules included.

* FS
* HTTP

___

## `Cinderella`
![`Cinderella`](http://studentweb.cortland.edu/SuMin.Son/pic/disney2.jpg)  

Create a folder called bars_and_bats as the root folder for this project.  Within this folder, create:

* app.js - node server.
* folder called views - HTML files
* folder called images - images
* folder called stylesheets - CSS files

Your server handles the following URL requests:
* localhost:7077/bars - HTML page about bars, with pictures stored in images folder
* localhost:7077/cars - HTML page with some cool pictures of cars
* localhost:7077/cars/new - HTML page with a form where the user can add a new car information

The point of this exercise is to build a NodeJS server that serves all types of content
___

## `Duckworth`
![`Duckworth`](http://wondersofdisney.yolasite.com/resources/toondis/ducktales/duckworth.gif)  

Create a survey form that
* renders views/index.ejs that has the form for the user to fill out
* allows user to fill out the form and submit
* sends submitted form to /result
* recognizes when someone posts to /result, grabs information from the POST, and sends the POST data back as it renders views/results.ejs
