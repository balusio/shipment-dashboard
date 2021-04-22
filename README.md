# shipment-dashboard
A shipment status and freight forwarding visualization tool 

## Requisites

Node and [NVM](https://github.com/nvm-sh/nvm) 

## Installing

This project is based on 2 main parts
- UI (root folder)
- Server (inside server folder)

### server
to dispose the data on the ui you must go into server folder:
- (be sure you are under the correct node version using `nvm user` will automatically read the .nvmrc file with the node version)
- run `npm install`
- run `npm run server` to start the nodemon development server
- run `npm run build` to build the server , will be disposed on the build folder , be sure after that to run it using `node ./build/index.js`

the server uses an environment variable for PORT, feel free to change the PORT on the environment to use another port

### UI

The front End runs under a webpack app with:
  * Typescript
  * react (and React Router) 
  * Axios for Api calls
  * material ui as style framework

be sure in order to install:
- (be sure you are under the correct node version using `nvm user` will automatically read the .nvmrc file with the node version)
- be sure your `.env` file is setted with the API_URL variable (will be readed and access through webpack)
- build and run the server folder.
- run `npm install` on the root.
- run `npm run start` to be on development mode

## Structure

The entrypoint is the App.tsx file where you will find the context definitions and routes, be sure add new routes in this place.

- Containers: under this folder everything should be an entry point for the routes and api calls
- Components: should be mostly reusable parts of the app and simple components
- Utils: anything related to the general usabilty, here you can find:
  * Context definition (source of truth of the app)
  * Common types
  * constants variables
  * Material ui theme

The main usability of the apps runs under the ShipmentsContext where you can get the data in a centralized way.

