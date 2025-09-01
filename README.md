# Airbnb Clone

A full-stack Airbnb clone using the MEN stack (MongoDB, Express, Node.js), EJS templates, Cloudinary for image uploads, and Passport.js for authentication.

## Features

-   User authentication (register/login)
-   Create, edit, and delete property listings
-   Upload property images via Cloudinary
-   Browse and book properties
-   Leave reviews on properties

## Tech Stack

-   **Backend**: Node.js, Express.js
-   **Frontend**: EJS, HTML, CSS, Bootstrap
-   **Database**: MongoDB (with Mongoose)
-   **Auth**: Passport.js (Local Strategy)
-   **Image Storage**: Cloudinary
-   **Mapping**: Mapbox

## Installation

1.  **Clone the repository:**
    ```sh
    https://github.com/astrophileAqsa123/myTravel.git
    cd myTravel
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```

3.  **Create a `.env` file** in the root directory and add the following environment variables:
    ```env
    NODE_ENV=development
    CLOUD_NAME=your_cloud_name
    CLOUD_API_KEY=your_cloud_api_key
    CLOUD_API_SECRET=your_cloud_api_secret
    ATLAS_URL=your_mongodb_atlas_connection_string
    SECRET=your_session_secret
    ```

4.  **Run the application:**
    ```sh
    node app.js
    ```

5.  Visit `http://localhost:8080` in your browser.

## Usage

-   Register for a new account or log in with an existing one.
-   Create and manage your property listings from the dashboard.
-   Browse available rentals on the home page.
-   Click on a property to view details and make a booking.

