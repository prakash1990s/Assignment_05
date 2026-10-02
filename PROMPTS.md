Project Name: DevStack

Description:

DevStack is a modern web application designed to help developers manage and organize their projects, resources, and development activities in one place.

Technologies Used:

 React.js, JavaScript, HTML, CSS, Node-js and  API.

03 Key Features:

1.Project Management – Create, organize, and manage development projects easily.
2.Resource Management – Store and access useful developer tools and resources.
3.User Authentication – Secure user Signup and Sign In system.




 1. What is JSX, and why is it used in React?
    So/n: JSX is a syntax that lets us write HTML-like code inside JavaScript. It makes React UI code easier to write and understand.

2. What is the difference between props and state?
    So/n: Props are data passed from a parent to a child. State is data managed inside a component and can change over time.

3. What does the `useState` Hook do, and where did you use it in this project?
    `useState` manages changing data in a component. I used it to manage things like JSON data, selected items, and UI states.

4. What does the `useEffect` Hook do, and why did you need it to load the JSON data?
    `useEffect` runs side effects after rendering. I used it to fetch and load the JSON data when the component loaded.

5. Why does every item in a `.map()` list need a unique `key` prop?
    The `key` helps React identify each item and efficiently update the list when it changes.

6. What is conditional rendering? Show one place you used it.
    Conditional rendering means showing something based on a condition. For example:\
    `{isLoggedIn ? <Dashboard /> : <Login />}`


7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
    The parent sends data through props. The child can send data back by calling a callback function passed through props.