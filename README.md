# ToDo App with React+Django


# Project Overview

## What is the project about?

The project is a To-Do application that integrates a Django backend with a React frontend. The primary goal is to build a dynamic and interactive web application where users can create, manage, and track their to-do tasks. The backend handles data management,  and business logic, while the frontend provides a user-friendly interface for interacting with the application.

## Technology did use for that?

The project utilizes the following technologies:
- **Backend**: Django, a high-level Python web framework that simplifies the development of secure and maintainable websites.
- **Frontend**: React, a JavaScript library for building user interfaces, which allows for creating a dynamic and responsive user experience.
- **Additional Tools**: Bootstrap and Reactstrap for UI components and styling, and Axios for making HTTP requests between the frontend and backend.

## Q3: What did you learn after implementing this?

Through implementing this project, I gained valuable insights into:
- **Integration of Frontend and Backend**: How to effectively connect a React frontend with a Django backend, including setting up RESTful APIs and handling data flow between the two.
- **State Management**: Managing application state and user interactions in a React application, including handling asynchronous operations with Axios.
- **UI/UX Design**: Enhancing user experience by using libraries like Bootstrap and Reactstrap to build responsive and visually appealing interfaces.
- **Full-Stack Development**: Understanding the full lifecycle of a web application from server-side logic to client-side rendering and user interaction.

## Q4: What are the business benefits?

The business benefits of this project include:
- **Increased Productivity**: Users can efficiently manage their tasks, leading to better organization and time management.
- **Scalability**: The modular design of the project allows for easy expansion and addition of new features, making it adaptable to future needs.
- **Enhanced User Experience**: A dynamic and responsive interface improves user engagement and satisfaction, potentially leading to higher user retention.
- **Cost Efficiency**: By leveraging open-source technologies like Django and React, the project minimizes development costs while maximizing functionality.

## Q5: What are the challenges you faced on this project?

The challenges faced during the project include:
- **Integration Issues**: Ensuring seamless communication between the Django backend and the React frontend, particularly with API endpoints and data synchronization.
- **State Management Complexity**: Handling complex state transitions and ensuring that the UI accurately reflects the current state of the application.
- **UI/UX Consistency**: Maintaining a consistent and responsive user interface across different devices and screen sizes, requiring careful design and testing.
- **Error Handling**: Implementing robust error handling and validation both on the server side and client side to ensure data integrity and a smooth user experience.


# Usage & Implementation
#### Setting Up the Backend
- Open a new terminal window :
- Next, navigate into the directory:
<pre><code>cd backend</code></pre>
- Now install requirements using pip:
<pre><code>pip install -r requirements.txt</code></pre>
- Run migrations:
<pre><code>python manage.py migrations todo</code></pre>
- Migrate:
<pre><code>python manage.py migrate</code></pre>
- And start up the server:
<pre><code>python manage.py runserver</code></pre>
Navigate to http://localhost:8000 in your web browser:
<br>

#### Setting Up the Frontend
- Open a new terminal window:
- Navigate into the frontend directory:
 <pre><code>cd frontend</code></pre>
- Install the required dependencies:
- Run the following command:
 <pre><code>npm install</code></pre>
- Once the dependencies are installed, you can start the application:
- Then, start the application:
 <pre><code>npm start</code></pre>


Navigate to http://localhost:3000 in your web browser:
