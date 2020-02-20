# 10UP Tech Challenge

## Running the application locally

#### Clone the repo

```
git clone git@github.com:chinds185a/10up-tech-challenge.git
```

```
cd 10up-tech-challenge
```

#### Install node Module

```
yarn
```

#### Srat the application

```
yarn start
```

The application will be available at `http://localhost:3000/`

# How it all works and decisions dade

The application is build using create react app, this is the simplest way to bootstrap a basic react application.

### App Structure

`src > pages`

The pages directory contains a thye applications top level pages. Each page is in its own directory, this helps with coloacting tests and styles (no tests were written for this technical exercise) it also ensures that all page level logic is kept in one obvious location.

`src > containers`

Containers is where I keep the application layout. Containers would also generally be used to house the business logic for the application i.e. I would write an image container that would handle all of the business logic around rendering responsive images whcih would then call the image component passing in the nessesary props to render an image to the dom.

`src > components`

The components directory holds all of the frontend components e.g. post card, post title, post excert etc. If this were a large application with reusuability in mind I would extract the compoennts into their own repo, backed by storybook.

`src > contexts`

The contexts directory holds the application context providers. This current houses the UserContext Provider

`src > reducers`

This directory holds the applications reducers, this application uses the action, reducer pattern. Global state is only ever updated by the reducer. This way components never actually modify state directly, instead they call a method and pass in the nessesary data, the reducer then updates the application state, components consuming the context apis will re-render where nessesary on state changes.

# Application Overview

### Data fetching

This application, utilises reacts new suspense api. This provides centrally located loading component. Each page transition triggers a network call to fetch the data, when the network call is initiated the application suspends and shows the loading component. Once the promise is resolved the pages update with the newly fetched data.

### Routing

This application uses reactRouter V5. the application routes are setup in the `App.js` if we were handling private routes I would include a higher order components which checks the auth state before rendering a page.

### Authentication

Upon a successful login, the `loginUser` action is dispatched. This action;

- Saves the users details to application state in the UserContext
- Stores the user details and the auth token in local storage
- Redirects back to the home page using the history api

Refresing/reloading the application clears the app state, when reloading the homepage I check for the user details in local storage, if they are set I call the `/validate` api with the auth token. If the token is valid the user is logged back in.

If the token is not valid the users details are removed from local storage.

Clicking Logout in the naviation will reset the application state removing the users details and well as clearing the local storage.

### Error handling

Only very basic error handling has be included in this application i.e. if the wriong login details are entered a alert is shown detailing the error. With more time I would have implimented reacts error boundries to handle the different error states.

### SSR

The spec said not to include SSR buit to think about how it could be added.

If including SSR i would consider using a framework that has it build in, like Next.js or would impoliment a custom soloution, using express, react, custom webpack config for server and client side bundles and react router, using the static router on the server and the browser router on the client. Reacts `renderToString` and `renderToStaticMarkup` methods would be in the express server to return the SSR page.
