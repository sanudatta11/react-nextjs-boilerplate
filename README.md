This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to use
Install it and run:

### `npm install`
### `npm run dev`

# or

### `yarn`
### `yarn dev`

### Rematch

**Note: Contains state management using Rematch (which is a wrapper for redux). (https://github.com/rematch/rematch) under shared/**

The Redux-Next Connector is implemented in `lib/`.
On the server side every request initializes a new store, because otherwise different user data can be mixed up. On the client side the same store is used, even between page changes.
The example under `shared/components/counter.js`, shows a simple incremental counter implementing a common Redux pattern of mapping state to props.