# Simple Blogs Website - Backend

Welcome to the backend repository of the Simple Blogs Website. This application allows users to create and view blogs, providing a basic platform for blogging. 
The backend is built using Node.js with Express, following the MVC (Model-View-Controller) pattern. Data is stored in JSON format, and EJS is used for rendering views.

## Installation

### Clone the Repository

```
git clone https://github.com/Puskass/blogs-backend.git
```
### Navigate to the Project Directory

```
cd blogs-backend
```
### Install Dependencies
```
npm i
```
### Start the Server
```
npm run dev
```
The server will be running on http://localhost:5000.

## Usage

- Add a Blog:
Send a POST request to /add-blog with the blog details (title, description, etc.).

- View Blogs:
Send a GET request to /blogs to retrieve a list of all blogs.

- View a Specific Blog:
Send a GET request to /blogs/:id, replacing :id with the blog's ID.

- Add a Comment:
Send a POST request to /blogs/:id/comments with the comment details (text, blogId).

## Project Structure
The project follows the MVC pattern:

models/: Contains data models (e.g., Blog, Comment).
controllers/: Handles business logic and interacts with models.
routes/: Defines API routes.
views/: Contains EJS templates for rendering views.
public/: Stores static assets (stylesheets, images).

## Dependencies

* Express: Web application framework.
* EJS: Embedded JavaScript templating.
