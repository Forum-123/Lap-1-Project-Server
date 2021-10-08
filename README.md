# Server Side

Caffeine Newswire is a social networking, blogging website, where users can share interesting news articles with others from various devices. Users can comment on and react to the entries of other users.

This README will guide you through how to setup the server side of the application and our experiences during this project.

The repo for the client side of the application can be found [here](https://github.com/Forum-123/Lap-1-Project-Client). The client website can be viewed [here](https://caffeine-overflow-client.netlify.app/).

## Installation & Usage

### Installation

1. Clone or download the repository.
2. Run `npm install` to install the dependencies.

### Usage

* Run `npm run dev` to start the server.

## Technologies

* Heroku for deploying the server side
* HTML, CSS and JavaScript
* Supertest library to test HTTP requests
* VSCode, which was our code editor
* Github for version control
* Slack for collaboration and communication between team members

## Process

* Started by creating two different repositories for both the client and server.
* Created an initial file structure for both repositories.
* Inside each of these repositories, we created a Kanban board with all the tasks required.
* Initially we started working on separate tasks including the tests for the server side, setting up the Giphy API and creating the RESTful routes (CRUD).
* Stored the example data within a JS object and created a matching class so that we could later add to this data.
* Added JS to the client side to fetch data from our server and generate posts on our website.
* Finished by adding styling to the client side to improve the user interface and fixed up test suites.

## Wins & Challenges

### Wins

* Worked seamlessly as a team.
* Website successfully deployed on Netlify.
* Server successfully deployed on Heroku.
* Managed to get a coverage of more than 95%.
* Implemented the Giphy API.
* Routes and HTTP requests provided us with the output we intended.
* Successfully managed to produce a site which met all of the basic requirements.

### Challenges

* Experienced a few merge conflicts and Git issues when pulling from the repo. The solution was to apply the Driver and Navigator approach when a specific task was being worked on by more than one team member.

## Future Features

* Add user identification and log in features
* Implement the ability to update posts and comments using PUT routes

## Bugs

* Coverage of the client side testing does not display for each file