# PlatziVideos-Backend

PlatziVideos backend API built in NodeJS using MongoDB Atlas

## Install dependencies

To use you'll have to install all dependencies

```node
npm install
```

## Environment variables

You'll need to create a `.env` file using the `.env.example` file as a guide to fill your MongoDB Atlas data. The port is set to 3001 by default, if you want to work on another port, change it's value on the `.env`.

## Commands

There are some base commands to work with the app, you'll free to change or add more. On the `package.json` you'll find the next commands:

- To start on dev mode: `npm run dev`.
- To start on production mode: `npm run start`.
- To run tests: `npm run test`
- I used nyc to check the veracity of my tests, use the command: `npm run coverage`. This will tell you at what point the app is tested.
- If you want to build an html report with nyc to see the test results better presented use: `npm run report`.

## Using Docker

The app is set to work with docker. All you have to do is follow the next steps:

- Install docker (in case yo don't have it already).
- Build the image: `npm run docker:build`. The image will be named "platzivideos-api by default, you are free to change it.
- Wrap the app on a docker container: `npm run docker:run`. It will start on detached mode on the port 49160 and the app on the port 3000.
