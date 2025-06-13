# use-reducer-learn

## Project Overview

This project demonstrates the use of React's `useReducer` hook for managing complex state logic in a product filtering application. The app displays a list of products and allows users to filter them based on price, discount, and rating using input fields. The state for these filters is managed using a reducer function, making the state transitions predictable and maintainable.

## Key Concepts: useReducer Hook

### What is `useReducer`?

`useReducer` is a React hook used for managing state in functional components, especially when the state logic is complex or involves multiple sub-values. It is an alternative to `useState` and is inspired by Redux-like reducer patterns.

### How It Works in This Project

- **Initial State:**  
  The filter state is initialized with empty values for price, discount, and rating.

- **Reducer Function:**  
  The reducer (`filterReducer`) handles actions to update each filter value based on dispatched actions.

- **Dispatching Actions:**  
  Each input field dispatches an action to update the corresponding filter value in the state.

- **Filtering Logic:**  
  The product list is filtered step-by-step based on the current filter state, ensuring only products matching all criteria are displayed.

### Example Code

```jsx
const initialState = { price: '', discount: '', rating: '' };

function filterReducer(state, action) {
  switch (action.type) {
    case 'PRICE':
      return { ...state, price: action.payload };
    case 'DISCOUNT':
      return { ...state, discount: action.payload };
    case 'RATING':
      return { ...state, rating: action.payload };
    default:
      return state;
  }
}

const [filters, filterDispatch] = useReducer(filterReducer, initialState);
```

### Why Use `useReducer`?

- **Predictable State Transitions:**  
  All state changes are handled in one place (the reducer), making the logic easier to follow and debug.

- **Scalability:**  
  As the number of filters or complexity grows, the reducer pattern keeps the code organized.

- **Separation of Concerns:**  
  UI components dispatch actions without directly mutating state, following best practices.

## How to Use

1. **Install dependencies:**  
   Run `npm install` in the `use-reducer-learn` directory.

2. **Start the app:**  
   Run `npm run dev` to launch the development server.

3. **Interact with the UI:**  
   Use the input fields to set price, discount, and rating filters. The product list updates automatically.

## File Structure

- `src/App.jsx` — Main component implementing the filter logic with `useReducer`.
- `src/reducers/filterReducer.js` — Reducer function for managing filter state.
- `src/db/products.js` — Sample product data.

## Learning Outcomes

- Understand how to use the `useReducer` hook for state management.
- Learn to structure state updates using actions and reducers.
- See a practical example of filtering data in a React app.

---

Happy Learning!