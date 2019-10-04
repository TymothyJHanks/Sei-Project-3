# MrsRvr

MrsRvr Documentation

THERE IS LIFE ON MARS! It's important to listen to this video while reading the documentation: https://www.youtube.com/watch?v=AZKcl4-tcuo

The data we used for this API was generously proivded by NASA. (Thanks NASA for everything. Seriosly. Thank you.)

You can find NASA's excellent open source API here: https://api.nasa.gov

Deployed Heroku link to the MrsRvr API:

https://mrsrvr.herokuapp.com

Description of MrsRvr:
MrsRvr was intended to be the instagram of MrsRvr pictures. Why? Because the internet needs such a service! This repo is specifically the backend for the MrsRvr website. The deployed API above was used in the frontend of the website.

Features of Backend:

Rover image & mission data
Weather data for Sols 292 - 301 (Sol is a Mars day, but it can't be called a day because it is not 24 hours.)
User Models - Able to register and login
Technology Used:

heroku
Express
mongoose
Node
Tested API using Postman.

Full Stack is MERN

Routes Used:

Rover:

https://mrsrvr.herokuapp.com

Note: Root shows an index of all of the images of from the Mars Rover.
Note: Get Method

https://mrsrvr.herokuapp.com/name/:roverName

Note: This route will show you all of the photos for a specific rover. Note: Get Method

https://mrsrvr.herokuapp.com/

Note: At the root you can create a brand new instance of a rover image. This links up wiht the Create page in the front end. Note: Post method

https://mrsrvr.herokuapp.com/name/update/:id

Note: Using this path and the params :id you can update an existing instance of the rover images. Note: Put method

https://mrsrvr.herokuapp.com/delete/:_id

Note: This path gives a user the ability to delete an instance of a mars rover image. Note: Delete method (of course)

GROUND CONTROL TO MAJOR TOM! WE HAVE WEATHER DATA!

Weather Data:

https://mrsrvr.herokuapp.com/weather

Note: This path provides Mars weather data from for SOL 292 to 301. NASA uses only maintains weather data for 7 Sols at time. This data will not be maintained to keep up with NASA's data. This data was used in the weather graph on the front end.

Note about the Login & Register paths. They both fully functional in the backend, but do not yet work in the frontend. This is due to the worlds dumbest foreach error.

Login:

http://localhost:5060/api/users/login

Note: You know how to do this. Use your email & password. Note: Post method

Register:

http://localhost:5060/api/users/register

Note: Basic stuff. Name, email, password, confirm password Note: Post method

Instaliation Instructions:

Fork & clone repo to your local device.

In terminal navigate to the repo.

Deploy Mongod, Nodemon, and npm install.

npm start should run the server. (Using port 5060)

npm open should open the local host.

Contributions:

Can someone, please (!), help us solve the foreach error that keeps coming up in the frontend when we try implementing the functioanlity for the Login & Register pages.

Main Backend Repo: https://github.com/tiffdawn15/MrsRvr-Backend

Main Frontend Repo: https://github.com/TymothyJHanks/Sei-Project-3/tree/master

For contributons, please, use a pull request from your forked repo.
