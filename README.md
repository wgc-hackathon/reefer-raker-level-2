![reefer-raker](https://user-images.githubusercontent.com/519327/109385373-39f5f480-78eb-11eb-9bb6-022c62e01fac.png)
# Reefer Raker

An application to track moving boxes into the reefers

During the pandemic the campus has had to deal with more samples than ever before. We are now processing 20000 samples a week.

The problem is where to store them and how to keep track of them? We don’t have enough freezer space in our buildings so we now have 5 large -20C refrigerated units called reefers which are in the campus car park. Once the samples have been sequenced they need to be moved but we also need to make sure we can find out where they are.

Currently this is done with existing software, spreadsheets and manual checking. It is time consuming and easy to make mistakes especially when our staff are working in cold conditions.

All of the samples are stored in plates with a unique barcode. We need to build them an application that allows them to scan those barcodes and store the location. They also need to be able to double check that they are putting them in the right place. 

This would make the jobs of the reefer teams much easier as well as allowing us to find out where they are. Imagine trying to find a sample amongst thousands of other samples by hand. It would be like trying to find a needle in a haystack!

# Building and running Reefer Raker locally

Building and running Reefer Raker in your local dev environment is very easy. Be sure you have [Git](https://git-scm.com/downloads) and [Node.js](https://nodejs.org/en/), then follow the directions below:

1. Clone the source code

git clone https://github.com/wgc-hackathon/reefer-raker-vue.git

2. Install development dependencies

`npm install`

3. Run a local development server

`npm run dev`

Reefer Raker is now running, and can be accessed by pointing a web browser at http://localhost:3000/

4. This application is built using [Vite](https://github.com/vitejs/vite) so you can also start it locally using the `npx vite` command.

5. To stop the server press `CTRL + C` together

# Mock API

For the purposes of testing the application a mock API has been created using the data in the db.json file

1. To start the API

`npm run api`

The api is now running and can be accessed by pointing a web browser at http://localhost:3001/

2. The following routes are now available

`GET    /reefers`

`GET    /reefers/:id`

`POST   /reefers`

`PUT    /reefers/:id`

`PATCH  /reefers/:id`

`DELETE /reefers/:id`

`GET    /boxes`

`GET    /boxes/:id`

`POST   /boxes`

`PUT    /boxes/:id`

`PATCH  /boxes/:id`

`DELETE /boxes/:id`


3. Please be cautious when running any of the above commands as they will change the db.json file so it is good practise to take a copy of the original file before playing around with the api

# Running the Reefer Raker and the mock API together.

1. To start reefer raker and the mock api together

`npm run start`

Reefer Raker is now running, and can be accessed by pointing a web browser at http://localhost:3000/

The api is now running and can be accessed by pointing a web browser at http://localhost:3001/

2. to stop reefer raker and the mock API

press `CTRL + C` together

# Testing

1. When you are developing real world applications it is good practise to have tests. In our team it is mandatory to have automated test suites to check that the functionality of what you have built works as it should.

2. Our team would usually code review anything that a software developer has created and part of that will be to ensure that tests exist and that they are accurate. Before making anything available to our customers we would check that the automated test suite passes.

3. Also if you were to commit anything to the main repository we would expect it to have tests.

4. We have created a test suite which can be run using the `npm test` command which should show the output below.

![Screen Shot 2021-03-14 at 9 53 47 AM](https://user-images.githubusercontent.com/519327/111064321-42355e80-84ab-11eb-8f5b-6b9ceace0afb.png)

5. There is an example test in the `tests\unit\Home.spec.js` file

6. The testing library used is Jest and you can find out more about it here - [Jest](https://jestjs.io/)

7. You can also find out a bit more about testing with vue.js here [Vue testing](https://v3.vuejs.org/guide/testing.html)

8. Vue also offers an additional library to make testing easier which you can find out about here [Vue test Utils](https://vue-test-utils.vuejs.org/)





