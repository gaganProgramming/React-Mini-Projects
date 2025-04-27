# React Redux

## Redux documentation
#### `Definition:`
   React Redux is the official React binding for Redux, a state management library. It allows React components to interact with the Redux store, enabling them to access application state and dispatch actions to update it. 
   
   React Redux eliminates the need for manual store interaction logic within components, providing optimized performance and a predictable data flow. 


#### Types/Components
- store - holds the data of your application uses
- Reducer -> Manipulates the dom when it receives an action
- Action -> Tells reducer to manipulate the store data, it carries the name and some data

#### UseCase
It is widely used for managing complex application states in React applications.

## `Install`
`Url:` https://react-redux.js.org/tutorials/quick-start

1. Install Redux toolkit & React Redux

`````````````````cmd
npm install @reduxjs/toolkit react-redux
````````````````````
Start the dev server

`````````````````````cmd
npm run dev
``````````````````````````
Follow the documentation:

Create a file named `src/app/store.js.`
`````````````````````````````js
import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
  reducer: {},
})
````````````````````````````````````````
## Provide the Redux Store to React
Once the store is created, we can make it available to our React components by putting a React Redux `<Provider>` around our application in `src/main.js.` Import the Redux store we just created, put a `<Provider>` around your <App>, and pass the store as a prop:

````````````````````````````jsx
import store from './redux/store'
import { Provider } from 'react-redux'

<React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>,
<React.StrictMode>
`````````````````````````````
## Create a Redux State Slice
Add a new file named `counter/counterSlice.js`

````````````````````````````js

import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
```````````````````````````````````

## Add Slice Reducers to the Store

````````````````````````````````js
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})
``````````````````````````````````

## Use Redux State and Actions in React Components

Now we can use the React Redux hooks to let React components interact with the Redux store. We can read data from the store with `useSelector`, and dispatch actions using `useDispatch`. Create a file with a `/counter/Counter.js`  `<Counter>` component inside, then import that component into `App.js `and render it inside of `<App>`.


`````````````````````````````````````````````js

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'
import styles from './Counter.module.css'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}



``````````````````````````````````````````````````````````


















