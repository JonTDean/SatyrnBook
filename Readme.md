# MERN VenysBook

## To-Do

### Backend To-Do

- [ ] Refactor The Backend once Finished, separate each of the Route 'router.HTTP_REQ' via SRD (The Single Responsiblity Design Pattern)

### Frontend To-Do

NAVBAR:

- [x] Refactor the NavBar, it keeps shifting to the right once it hits (sub)1200px width

- [ ] Add a hamburger menu to the NavBar, once it hits a specific measurement, switch the navbar to xs stylization.

COMPONENTS:

- [x] Refactor the forms at '/register' and '/login' they look ugly and the styling should be done

- [ ] I have a lot of reusable code in the form of hooks, I can make several custom hooks and I want to use those in place of what is currently in use.

---

## Summary

The MERN VenysBook site is a pet project in order to utilize React and Express in a developmental Setting.

---

## Documentation

Documentation for the site

### Backend

API:

#### Users & Auth

Link: https://documenter.getpostman.com/view/11934869/TVRg6pFy

| Schema | HTTP Request | Parameters                                                  | URL        | Description               |
| ------ | ------------ | ----------------------------------------------------------- | ---------- | ------------------------- |
| User   | POST         | Headers: { <br/> "Content-Type": "application/json" <br/> } | /api/users | Register User to Database |

| Schema | HTTP Request | Parameters                                                  | URL       | Description    |
| ------ | ------------ | ----------------------------------------------------------- | --------- | -------------- |
| Auth   | GET          | Headers: { <br/> "x-auth-token": USER_TOKEN <br/> }         | /api/auth | Authorize User |
| Auth   | POST         | Headers: { <br/> "Content-Type": "application/json" <br/> } | /api/auth | Login User     |

#### Profile

Link: https://documenter.getpostman.com/view/11934869/TVRg6pFx

| Schema  | HTTP Request | Parameters                                                                                    | URL                     | Description                    |
| ------- | ------------ | --------------------------------------------------------------------------------------------- | ----------------------- | ------------------------------ |
| Profile | GET          | Headers: { <br/> "Content-Type": "application/json", <br/> "x-auth-token": USER_TOKEN <br/> } | /api/profile/me         | Get logged in profile data     |
| Profile | GET          | PATH_VARIABLES: { <br/> ":id" : USER_ID <br/> }                                               | /api/profile/user/:id   | Grab profile by user ID        |
| Profile | GET          |                                                                                               | /api/profile            | Grab all Profiles              |
| Profile | POST         | Headers: { <br/> "Content-Type": "application/json", <br/> "x-auth-token": USER_TOKEN <br/> } | /api/profile            | Create and Update Profile      |
| Profile | DELETE       | Headers: { <br/> "x-auth-token": USER_TOKEN <br/> }                                           | /api/profile            | Delete the Specified Profile   |
| Profile | PUT          | Headers: { <br/> "Content-Type": "application/json", <br/> "x-auth-token": USER_TOKEN <br/> } | /api/profile/experience | Add Experience to Profile      |
| Profile | DELETE       | Headers: { <br/> "x-auth-token": USER_TOKEN <br/> }                                           | /api/profile/experience | Delete Experience from profile |
| Profile | PUT          | Headers: { <br/> "Content-Type": "application/json", <br/> "x-auth-token": USER_TOKEN <br/> } | /api/profile/education  | Add Education to profile       |
| Profile | DELETE       | Headers: { <br/> "x-auth-token": USER_TOKEN <br/> }                                           | /api/profile/education  | Delete Education from profile  |

#### Posts

Link: https://documenter.getpostman.com/view/11934869/TVRg6p2d

| Schema | HTTP Request | Parameters                                                                                                                            | URL                                | Description             |
| ------ | ------------ | ------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- | ----------------------- |
| Posts  | GET          | Headers: {<br> "x-auth-token": USER_TOKEN<br>}                                                                                        | /api/posts                         | Get all posts           |
| Posts  | GET          | PATH_VARIABLES:{<br> ":id": POST_ID<br>}<br><br>Headers: {<br> "x-auth-token": USER_TOKEN <br>}                                       | /api/posts/:id                     | Grab post by ID         |
| Posts  | POST         | Headers: {<br> "Content-Type": "application/json",<br> "x-auth-token": USER_TOKEN <br>}                                               | /api/posts                         | Create a Post           |
| Posts  | PUT          | PATH_VARIABLES: {<br> ":id": POST_ID<br>}<br>Headers: {<br> "x-auth-token": USER_TOKEN <br>}                                          | /api/posts/like/:id                | Like Post               |
| Posts  | PUT          | PATH_VARIABLES: {<br> ":id": POST_ID<br>}<br>Headers: {<br> "x-auth-token": USER_TOKEN <br>}                                          | /api/unlike/:id                    | Unlike a Post           |
| Posts  | POST         | PATH_VARIABLES: {<br> ":id": POST_ID<br>}<br>Headers: {<br> "Content-Type": "application/json", <br> "x-auth-token": USER_TOKEN <br>} | /api/posts/comment/:id             | Add a comment to a Post |
| Posts  | DELETE       | PATH_VARIABLES: {<br> ":id": POST_ID,<br> ":comment_id": COMMENT_ID<br>}<br><br>Headers: {<br> "x-auth-token": USER_TOKEN <br>}       | /api/posts/comment/:id/:comment_id | Delete User comment     |

---

### Frontend

API:

## Links

### MaterialUI / Styling

    * https://material-ui.com/getting-started/faq/

    * https://stackoverflow.com/questions/47268652/jss-how-to-change-opacity-for-a-color?rq=1

### React
