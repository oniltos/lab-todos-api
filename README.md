<span>At the end of the page, you can find the original guidelines for this lab.</span>

<h1 align="center">✅ To Do List ✅</h1>

<h2>💻 Overview</h2>

<p>Application created to apply the initial back-end knowledge.</p>


<h2>⚙️ Used Technologies</h2>
<ul>
  <li>ExpressJS</li>
  <li>MongoDB</li>
  <li>Mongoose</li>
  <li>ReactJS</li>
  <li>Bootstrap</li>
  <li>HTML</li>
  <li>CSS</li>
</ul>


<h2>▶️ Application's Presentation ⏸</h2>
  
https://user-images.githubusercontent.com/111170704/215362461-7a86a183-b216-4d3f-840e-d921d5201d2a.mov


<h2>💡 Learn More</h2>
<p>To learn more about ExpressJS, check out the <a href="https://expressjs.com/en/5x/api.html#express" >ExpressJS documentation</a>.</p>
<p>To learn more about MongoDB, check out the <a href="https://www.mongodb.com/docs/atlas/" >MongoDB documentation</a>.</p>
<p>To learn more about Mongoose, check out the <a href="https://mongoosejs.com/docs/guide.html" >Mongoose documentation</a>.</p>
<p>To learn React, check out the <a href="https://reactjs.org/" >React documentation</a>.</p>
<p>You can learn more in the <a href="https://create-react-app.dev/docs/getting-started/" target="_blank">Create React App documentation</a>.</p>
<p>To learn more about Bootstrap, check out the <a href="https://getbootstrap.com/docs/5.3/getting-started/introduction/" >Bootstrap</a>.</p>
<p>To learn more about HTML and CSS, check out the <a href="https://developer.mozilla.org/pt-BR/" >MDN Web Docs</a>.</p>


<h2>🧑🏼‍🦰 About Developer</h2>
<p>Brazilian, animal lover, passionate about the Canadian weather and an ongoing web developer. After gaining enormous experience and skills in project management and quality reliability testing in the electronics sector working for 13 years at Foxconn manufacturing Apple products, I decided to accept the challenge of restarting my life in Canada by venturing into a new college and learning web development from the scratch. Currently living in Victoria, BC, I love to hike, discover new places and create new memories with every new adventure. I am always looking for continuous improvement from the most superficial details to the final project delivery.</p>


<h1>ORIGINAL INSTRUCTIONS</h1>

![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# Todos Api

## Introduction


## Requirements

- Api for complete CRUD on Todo Models

## Start your api Project

- run the following commands:

  ```
  mkdir todos-api
  cd todos-api
  git init
  npm init -y
  npm i mongoose express
  touch .gitignore
  ```

- Includes node_modules on .gitignore file

## Instructions

### Iteration 1 - Setting your folder structure

You will need:

- app.js file -> To be our server, and have all the routes we need

- config folder > db.connection.js -> With a function that handle with our mongo connection

- models folder > Todo.model.js -> create an Schema instance and export our model Todo


### Iteration 2 - Todo Schema

Create a `Todo` model . The schema should have the following fields:

- **title** - Type `String`. It should be required.
- **completed** - Type `Boolean`, should have default `false` 
- **timestamps** - use, timstamps config of mongoose

### Iteration 3 - Api Routes

Ok, with the model created lets start to create our routes, for complete CRUD.

| Method | Endpoint   | Payload                                | Response  | Action                     |
| ------ | ---------- | -------------------------------------- | --------- | -------------------------- |
| GET    | /todos     | \-                                     | \[todos\] | Get All Todos form DB      |
| POST   | /todos     | {"title":String, "completed": Boolean} | {todo}    | Create New Todo            |
| PUT    | /todos/:id | {"title":String, "completed": Boolean} | {todo}    | Update Existing Todo by Id |
| DELETE | /todos/:id | \-                                     | \-        | Deletes todo               |


Test every single route using `postman` or `insomnia`



### Iteration 4 - Create Front-End React

  Now use what we learn on module 2 to create a React UI that consumes our routes on Api.
  
  This is a chalenge, you need to have your express server running in some port to be able to connect your react application using axios
  
![small](https://user-images.githubusercontent.com/26174871/132945098-6abe8ba4-e623-474a-9fa5-914842e3e622.gif)

Happy coding! 💙
