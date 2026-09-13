# DevStack

## Project Name

React_Assignment, also called DevStack.

## Description

DevStack is a responsive web application that helps developers explore popular technologies and create their own development stack.

## Technologies Used

- React.js
- TypeScript
- Vite
- Tailwind CSS
- React Icons
- React Toastify
- JSON

## Three Features

1. Browse technology cards with icons, categories, ratings, difficulty levels, and badges.
2. Add technologies to a personal stack while preventing duplicate selections.
3. Remove individual technologies or clear the entire stack with toast notifications.



i. What is JSX, and why is it used in React?
Ans: JSX is a syntax where we can write HTML like code in JavaScript. It make creating React UI more easy.

ii. What is the difference between props and state?
Ans: Props are data which passed from parent to child and we normally cannot change it. State is component data that can change and update the UI.

iii. What does the useState hook do, and where did you use it in this project?
Ans: useState is used for storing changing data in a component. In this project I used it for mobile menu and selected technologies.

iv. What does the useEffect hook do, and why did you need it to load the JSON data?
Ans: useEffect runs side effects like fetching data. I did not use it here because Suspense and use is used for loading the JSON data.

v. Why does every item in a .map() list need a unique key prop?
Ans: The key help React to identify every item and update the list correctly when something changes.

vi. What is conditional rendering? Show one place you used it.
Ans: Conditional rendering means showing UI based on a condition. I used it for showing empty message or selected technology list.

vii. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
Ans: Parent send data to child using props. Child can send data back by calling a callback function from the parent.