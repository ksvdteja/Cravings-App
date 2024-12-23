const parent = React.createElement("h1", {id: "parent"}, [
    React.createElement("div", {id: "child1"}, [
        React.createElement("h1", {}, "Hello world from child1"),
        React.createElement("h2", {}, "Hello world from child1"),
    ]),
    React.createElement("div", {id: "child2"}, 
        React.createElement("h1", {}, "Hello world from child2"),)
]); 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);