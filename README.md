# Project name: node-task-planner
(backend app)

# Description
"node-task-planner" was created as a service for othe big applications.
Main idea is to plan/schedule some activity. For example: clean up notifications on the backend, send email to users or invoke bot messaging.

# Dependencies
0. OS
    - OS X 10.14.6
1. node -v
    - v14.6.0
2. npm -v:
    - 6.14.6
3. firebase --version
    - 8.10.0

# Installation (dev)
0. Get copy of sourcess
    - git clone "this repo"

1. Install dependencies
    - npm install
    - cd functions && npm install

2. Setup local Firebase project
	- firebase init
	- verify
		- functions/firebase-adminsdk.json
		- .firebaserc

3. Setup .env file
	- (no .env is required at this moment)

4. Run development server
    - npm run serve

5. Test application manually
    - http://localhost:5001/(firebase-project-id)/us-central1/

# Usage
1. Create new schedule item
    - send POST request to "/schedule" endpoint

2. If "schedule" item was successfully added, webhook would be triggered soon

# Features
1. CI/CD
    - (..Pending..)

2. Hosting
    - Firebase Functions

3. Testing
    - (..Pending..)

4. Tech stack
    - Firebase Functions
    - express handlers
    - Firebase Firestore

5. Backend app features
    - versioning
    - protected routes
    - custom "action" system

# Activity diagram
![activity diagram png](https://imgur.com/GjvTyBR)

# API documentation
1. Postman docs
	- (..Pending..)

# Examples
1. Live
    - (..Pending..)

2. Screenshots
    - (..Pending..)

# License
MIT

