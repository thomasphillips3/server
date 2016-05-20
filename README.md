# Servers
Practicing Node and Express servers from various soruces. Each branch is a different tutorial. Notice, I have used names of different butlers and housekeepers (i.e SERVERS) as the branch names. That shit is clever, dog. Don't front on the boy.
___

## `Edgar`
<img src="http://photos.auctionanything.com/x/9186/w447a.jpg" width="250">

Create a [socket](http://socket.io/) application that
* renders `views/index.ejs` that has the form for the user to fill out
* allows user to fill out the form and submit
* form information is EMITTED to the server with the event name `posting_form`
* server listens for an event `posting_form` and when this event gets triggered, organizes all the emitted information to form a single message and sends this single message with the event called `updated_message`. It also EMITs an event called `random_number` with random number between 1-1000.
* client listens for an event called `random_number` and when this event gets triggered, shows the number in the HTML.
The client listens for an event called `updated_message` and when this event gets triggered, displays the message somewhere in the HTML
