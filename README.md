# tacos-backend 

🚫 Note: All lines that start with 🚫 are instructions and should be deleted before this is posted to your portfolio. This is intended to be a guideline. Feel free to add your own flare to it.

🚫 The numbers 1️⃣ through 3️⃣ next to each item represent the week that part of the docs needs to be comepleted by.  Make sure to delete the numbers by the end of Labs.

🚫 Each student has a required minimum number of meaningful PRs each week per the rubric.  Contributing to docs does NOT count as a PR to meet your weekly requirements.

# API Documentation

#### 1️⃣ Backend deployed at [🚫name service here](🚫add URL here) <br>

## 1️⃣ Getting started

To get the server running locally:

🚫 adjust these scripts to match your project

- Clone this repo
- **yarn install** to install all required dependencies
- **yarn server** to start the local server
- **yarn test** to start server using testing environment

### Backend framework goes here

🚫 Why did you choose this framework?

-    Point One
-    Point Two
-    Point Three
-    Point Four

## 2️⃣ Endpoints

🚫This is a placeholder, replace the endpoints, access controll, and descriptioin to match your project

#### Auth Routes

| Method | Endpoint                | Access Control | Description                                  |
| ------ | ----------------------- | -------------- | -------------------------------------------- |
| POST    | `/api/auth/register` | all users      | If user signs in and isn't on the table, this adds them. |
| POST   | `/api/auth/login` | all users         | If user signs in and is on the table, this sends back their info |


#### User Routes

| Method | Endpoint                | Access Control      | Description                                        |
| ------ | ----------------------- | ------------------- | -------------------------------------------------- |
| GET    | `/api/users`        ````| all users           | Returns info for all users.               |
| GET    | `/api/users/:id`    | all users | Returns info for a single user.           |
| POST  | `/api/users`        | all users | Adds a new user                   |
| PUT   | `/api/users/:id` | all users                | Updates a user's info. |
| DELETE | `api/users/:id`        | all users |          deletes a user                                          |

#### TacoLog Routes

| Method | Endpoint                | Access Control | Description                                  |
| ------ | ----------------------- | -------------- | -------------------------------------------- |
| GET    | `/tacolog/` | all users      | Returns all tacologs. |
| GET    | `/tacolog/:id` | all users         | Returns a tacolog by its tacolog id.             |
| GET | `/tacolog/user/:userId` | all users          | Returns all tacologs created by a user by user id.                     |
| POST | `/tacolog` | all users          | Adds a new tacolog.                     |
| PUT | `/tacolog/:id` | all users       | Update a tacolog by tacolog id.                     |
| DELETE | `/tacolog/:id` | all users        | Delete a tacolog by tacolog id.                    |

# Data Model

🚫This is just an example. Replace this with your data model

#### 2️⃣ ORGANIZATIONS

---

```
{
  id: UUID
  name: STRING
  industry: STRING
  paid: BOOLEAN
  customer_id: STRING
  subscription_id: STRING
}
```

#### USERS

---

```
{
  id: UUID
  organization_id: UUID foreign key in ORGANIZATIONS table
  first_name: STRING
  last_name: STRING
  role: STRING [ 'owner', 'supervisor', 'employee' ]
  email: STRING
  phone: STRING
  cal_visit: BOOLEAN
  emp_visit: BOOLEAN
  emailpref: BOOLEAN
  phonepref: BOOLEAN
}
```

## 2️⃣ Actions

🚫 This is an example, replace this with the actions that pertain to your backend

## Taco Model 

// add a taco -- this must have a tacolog Id on the taco object  
``` async function add(taco) ```

// return all tacos  
```function find()```

// find taco by id  
```function findById(id)```

// updates taco by id  
```function update(id, changes)```

// Finds all tacos belonging to a tacolog by tacolog Id  
```function findMyTacologTacos(tacologId)```

// deletes taco by Id  
```async function remove(id)```



## Tacolog Model

// add a tacolog   
```async function add(tacolog)```

// return all tacologs  
```function find()```

// find tacolog by id  
```function findById(id)```

// updates tacolog by id  
```function update(id, changes)```

// Finds all tacologs by User Id   
```function findUserTacosById(firebaseId)```

// Finds all tacologs belonging to signed in user   
```function findMyTacos(firebaseId)```

// deletes tacolog by id  
```async function remove(id)```


## User Model

// add a user  
```async function add(user)``` 

// find all users  
```function find()``` 

// find user by id  
```function findById(firebaseId)``` 

// find user by integer ID  
```function findByIntId(id)``` 

// update user  
```function update(firebaseId, changes)```

// remove a user  
```async function removeUser(firebaseId)``` 

// get user by firebase ID  
```function getUserByFirebaseID(firebaseId)``` 


## 3️⃣ Environment Variables

In order for the app to function correctly, the user must set up their own environment variables.

create a .env file that includes the following:

🚫 These are just examples, replace them with the specifics for your app
    
    *  STAGING_DB - optional development db for using functionality not available in SQLite
    *  NODE_ENV - set to "development" until ready for "production"
    *  JWT_SECRET - you can generate this by using a python shell and running import random''.join([random.SystemRandom().choice('abcdefghijklmnopqrstuvwxyz0123456789!@#\$%^&amp;*(-*=+)') for i in range(50)])
    *  SENDGRID_API_KEY - this is generated in your Sendgrid account
    *  stripe_secret - this is generated in the Stripe dashboard
    
## Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./code_of_conduct.md). Please follow it in all your interactions with the project.

### Issue/Bug Request

 **If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**
 - Check first to see if your issue has already been reported.
 - Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
 - Create a live example of the problem.
 - Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes,  where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Documentation

See [Frontend Documentation](🚫link to your frontend readme here) for details on the fronend of our project
🚫 Add DS iOS and/or Andriod links here if applicable.
