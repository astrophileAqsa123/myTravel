Airbnb Clone

A full-stack Airbnb clone using MEN stack (MongoDB, Express, Node.js), EJS templates, Cloudinary for image uploads, and Passport.js for authentication.

Features

User authentication (register/login)

Create, edit, delete property listings

Upload property images via Cloudinary

Browse and book properties

Tech Stack

Backend: Node.js, Express.js

Frontend: EJS, HTML, CSS

Database: MongoDB (Atlas)

Auth: Passport.js

Storage: Cloudinary

Installation

https://github.com/astrophileAqsa123/myTravel.git
cd myTravel
npm install


Create a .env file in the root directory:

NODE_ENV=development
CLOUD_NAME=your_cloud_name
CLOUD_API_KEY=your_cloud_api_key
CLOUD_API_SECRET=your_cloud_api_secret
ATLAS_URL=your_mongodb_atlas_connection_string
SECRET=your_session_secret


Run the app:

npm start


Visit http://localhost:8080 in your browser.
