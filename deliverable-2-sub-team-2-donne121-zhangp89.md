# Deliverable 2 Report
## Sub-Team 2: Backend Scheduler API

### Summary of Decisions and Options considered for components
We decided to build the backend ‘Scheduler API’ using the Node.JS programming language due to its extensive web framework support and its wide-spread industry usage for similar backend APIs. The native use of JSON as a data format is particularly helpful as entity classes in use case logic can be seamlessly used as JSON response objects when fulfilling API calls. Python and Java were both considered as candidate languages. However, Python is a substantially less popular choice in the industry for web applications due to relatively less framework support and less efficient processing capabilities. Furthermore, Node.JS code is generally more readable and simple to write than Java and so Java was not pursued.

We leveraged the Express.JS framework to handle the basic server handling, routing of HTTP methods and parsing of requests. Some alternatives to this framework were considered such as Fastify and SailsJS, however, neither options rivalled the community support afforded to Express.JS. By using this industry-standard web application framework, we were able to set up a fast, reliable server with a scalable architecture to handle asynchronous API calls as needed. Moreover, we made use of Morgan as a logging middleware that is commonly coupled with Express.JS. This enabled us to to efficiently debug and test our software, proving particularly useful during the deployment process, during which standard debuggers were not accessible.

For testing, we made use of the Mocha testing framework for developing unit tests for both entities and service functions (i.e. the use case logic for an API call). We pursued Mocha as its syntax and structure are very similar to unit testing libraries that we had encountered before in other languages (such as PyTest for Python). Many alternatives that were explored, such as Jest, featured less familiar approaches to writing tests. Mocha was also decided upon for its native support of testing asynchronous workflows (something we plan to leverage in the future) and produces a readable summary test results, highlighting clearly which assertions failed. We also made use of Postman for carrying out manual end-to-end tests on the API calls.

We pursued AWS as a platform for hosting the Scheduler API, using the Elastic Compute Cloud (EC2) service. This service charges a minimal cost for low-demand instances such as ours (less than $3 per week) while supporting a wide range of deployment and security features. We decided to install Amazon Linux on the EC2 instance as it is cited as having the best performance of any major OS on EC2. The Scheduler API was deployed as a continuous process using the PM2 process manager.

We loosely followed a CLEAN service-based architecture for the backend API. API calls corresponding to use cases are grouped into relevant “service modules”. Each service module handles related requests and consists of a router (found in /api/routers/) for defining API routes, a controller (found in /api/controllers/) for unpacking raw request objects and preparing response object, and a service (found in /api/services/) where the use case logic is implemented. The routers are all inserted as depends in the ./app.js file which handles the general server setup. A client’s request is first received by the router, passed to the controller which then passes the unpacked parameters to the service. The service function carries out use case logic involving entities and then returns an output to the controller which will then prepare an appropriate response object to be sent to the client by the router. Unit tests have been written to test each service and entity comprehensively.

### Individual Contributions
- Harvey Donnelly planned the backend architecture and implemented the Express.JS server (i.e. the scaffolding for the API workflow). He implemented the generateSchedule API call and the related entities: Schedule, ScheduleBlock and Activity. He also wrote Mocha unit tests for this API call. Harvey developed the interactive frontend demo and was responsible for deploying the Scheduler API on the AWS EC2 instance. He was also responsible for writing the instructions and summary of decisions and options sections of the deliverable report.
- Peifeng Zhang wrote all other entities related to campus and people profile that will be used later. He implemented API call about getting camp and user account: login, signup, and logout. He also wrote Mocha unit tests for all entities. He also wrote part of the group report.

### Instructions
#### Deployed Application
We have deployed a primitive UI to demonstrate the Generate Schedule use case API call. This is deployed on AWS and can be accessed via the following link:

[http://ec2-13-59-187-237.us-east-2.compute.amazonaws.com:5000/demo/](http://ec2-13-59-187-237.us-east-2.compute.amazonaws.com:5000/demo/)

Since the scope of our sub-team is restricted to the backend API,  we have replaced all methods that are used within the DB plugin with placeholders that return dummy data (as confirmed with TA). Therefore, the API is in a fixed state and only *pretends* to query and submit to the DB. Notably, the use case logic is implemented such that only this DB plugin needs replaced during integration of the sub-teams' work; we are specifically demonstrating the implementation of the entities and use cases for specific API calls.

The fixed state of the API is such that a camp has been registered (with a camp ID `f307479d-262e-423a-a681-a043c2577b0b`) and 6 activities have been registered belonging to this camp. Sending the Generate Schedule request with the default data will succesfully generate a "STEM CAMP Schedule" that starts at 9:30am on 01/01/2024. Altering the camp ID will return an error response indicating that there is no camp registered with the provided camp ID. Altering the start_time field will alter the timings of the ScheduleBlock objects which represent the components of the schedule. 

#### Running Tests

 1. Ensure the latest version of [Node.JS](https://nodejs.org/en) with NPM is installed.
 2. Clone the sub-team repository: `git clone https://github.com/csc301-2023-fall/deliverable-2-48-2-donne121-zhangp89.git`
 3. Navigate to the 'scheduler_api' directory and install dependencies: `npm install`.
 4. Ensure Mocha is installed globally: `npm install mocha --global`
 5. Run all service and entity tests: `mocha ./api/tests/*`
