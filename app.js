import React from "react";
import ReactDOM from "react-dom/client";


// JSX - JavaScript XML
// JSX is a syntax extension for JavaScript that allows you to write HTML-like code within your JavaScript code. It is commonly used in React to describe the UI structure and appearance of components. JSX makes it easier to create and visualize the structure of your UI, as it closely resembles HTML, while still allowing you to use JavaScript expressions and logic within it. When you write JSX, it gets transpiled into regular JavaScript function calls that create React elements, which can then be rendered to the DOM.
// JSX allows you to write code that is more readable and maintainable, as it provides a clear and concise way to define the structure of your UI components. It also enables you to easily integrate JavaScript logic and expressions within your UI, making it a powerful tool for building dynamic and interactive web applications with React.
// JSX is not a requirement for using React, but it is widely adopted and recommended for its benefits in improving code readability and maintainability. It allows developers to write code that closely resembles the final output, making it easier to understand and work with the UI structure of their applications.
// JSX (It transpiles before it reaches to javascript) is not supported by browsers, so it needs to be transpiled into regular JavaScript using tools like Babel before it can be executed in the browser. This transpilation process converts JSX syntax into standard JavaScript function calls that create React elements, which can then be rendered to the DOM. The resulting JavaScript code is what browsers can understand and execute to render the UI components defined in JSX.
// Parcel  - Babel - Transpiler - JSX to JavaScript

// Functional Component
const Title = () => {
    return <h1 id="heading_title" className="heading-class"><i>Namaste React</i></h1>;
}
const Heading = () => {
    // this is known as Component Composition, where we can use one component inside another component. Here we are using
   
    return (
    <div>
        <Title />
        <h1 id="heading" className="heading-class">Hello Namaste React</h1>
    </div>);
}

const heading = <h1 id="heading" className="heading-class">Hello Namaste React</h1>;
console.log(heading); // return an object with type, props and key
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(<Heading />);
/***
 * <div id="parent">
 * <div id="child">
 * <h1>I am h1 tag</h1>
 * <h2>I am h2 tag</h2>
 * </div>
 * <div id="child2">
 * <h1>I am h1 tag</h1>
 * <h2>I am h2 tag</h2>
 * </div>
 * </div>
 * 
 * 
 * 
 */

// const parent = React.createElement("div", {id: "parent"},
// [
//         React.createElement("div", {id: "child"},[
//         React.createElement("h1", {}, "I am Nmaste React"),
//         React.createElement("h2", {}, "I am h2 tag")
//     ]),
//         React.createElement("div", {id: "child2"},[
//         React.createElement("h1", {}, "I am h1 tag"),
//         React.createElement("h2", {}, "I am h2 tag")
//     ])
// ]
// );

//const heading = React.createElement("h1", {id: "heading", className: "heading-class"}, "Hello Namaste React");
//console.log( heading); // return an aboject with type, props and key
//const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
//root.render(parent);

