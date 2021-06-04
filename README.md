#  Build Week - unit 4 - Water My Plants

## Base URL
https://plants-serv.herokuapp.com

## API endpoints

### login/register

| Auth | Endpoint           | Required                  | Restrictions | Notes                                             |
| -----| ------------------ | --------------------------| -------------| ------------------------------------------------- |
| POST | /api/auth/register | username, password, phone | Username must be unique| Creates a new user with auto Id.        |
| POST | /api/auth/login    | username, password        | None         | Returns a welcome message and the JSON Web Token. |


### Users

| Auth | Endpoint              | Required            | Restrictions    | Notes                                       |
| -----| --------------------- | --------------------| ----------------| ------------------------------------------- |
| GET  | /api/users/:id        | None                | None            | Returns the specified user object.          |
| GET  | /api/users/:id/plants | None                | None            | Returns array of users plants.              |
| PUT  | /api/users/:id        | password or phone   | None            | Returns updated user object.                |


### Plants

| Auth   | Endpoint        | Required            | Restrictions          | Notes                                       |
| -------| --------------- | --------------------| ----------------------| ------------------------------------------- |
| GET    | /api/plants/    | None                | None                  | Returns array of All plants.                |
| POST   | /api/plants/    | nickname, species, h2oFrequency, userId   | None         | Returns new plant object.      |
| PUT    | /api/plants/:id | nickname, species, h2oFrequency, OR image | None         | Returns updated plant object.  |
| DELETE | /api/plants/:id | None                | None         | Returns termination message if successfully deleted. |


### Table Keys Used

Users login/register
  -userId
  -username
  -password
  -phone
  
Plants 
  -plantId
  -nickname
  -species
  -h2oFrequency 
  -image
  -userId
