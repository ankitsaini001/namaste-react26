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
 */ const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {}, "I am h1 tag"),
        React.createElement("h2", {}, "I am h2 tag")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h1", {}, "I am h1 tag"),
        React.createElement("h2", {}, "I am h2 tag")
    ])
]);
//const heading = React.createElement("h1", {id: "heading", className: "heading-class"}, "Hello Namaste React");
//console.log( heading); // return an aboject with type, props and key
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(parent);

//# sourceMappingURL=Namaste React_26.7c0ccee6.js.map
