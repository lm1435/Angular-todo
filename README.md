# Angular Todo Application

This project is an Angular-based todo application with a JSON Server backend. It demonstrates a 'full-stack' setup with a RESTful API and a responsive frontend.

## Installation

1. Clone the repository:
  
2. Install the dependencies:

## Running the Application

This application consists of two parts: the Angular frontend and the JSON Server backend. You need to run both at the same time for the application to store the data properly.

### Start the Backend Server

Open a terminal and run:

```
npm run serve:db
```

This will start JSON Server on `http://localhost:3000`

### Start the Frontend Development Server

Open another terminal and run:

```
npm start
```

This will start the Angular development server. Navigate to `http://localhost:4200/` in your browser to see the application.

## Connecting Frontend to Backend

To see the frontend connecting to the backend:

1. Ensure both servers are running (JSON Server on port 3000 and Angular on port 4200).
2. Open the application in your browser (`http://localhost:4200`).
3. Use the todo application - add, complete, or delete todos.
4. You should see these changes reflected in real-time.
5. You can also check `http://localhost:3000/todos` in your browser to see the raw JSON data changing.


## Thanks for reading