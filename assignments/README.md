# Assignments Part #1

## 

On the **assignment/server** folder, you should be able to see the same API server that you have created from the training plus an additional sequelize model in **models/publisher.js**. For this exercise you have to:

1. Do an: **npm install**
2. Initialize your database + include some dummy data: **npm run initdb**
3. Implement the **publishers** endpoint just like we have in **books** and **authors**
4. Use postman to test your API's

## Creating an Automated Test Script

In this assignment, you will be creating an Automated Testing Script using the API Server that you have created previously. The script should have the following non-functional requirements:

- Don't use any existing test frameworks. This assignment is meant for you to understand the node.js basics and we only require you to use the following libraries only:

  - **request** - https://github.com/request/request
  - **sequelize** - https://github.com/sequelize/sequelize

- You may also utilize the built-in **assert** library for your tests: https://nodejs.org/docs/latest-v8.x/api/assert.html#assert_assert

- Your API tester should be able to connect to the API Server's database in order to check the data integrity (ie. during CREATE/PUT/POST). You may reuse the **sequelize models** that is inside the **models** folder.

- It is recommended that you practice the use of **promises** and **async/await**.

- You will create your own test cases basing from the API Server that you have previously created.

- Use **faker** (https://github.com/marak/Faker.js/) whenever you need to create random input



