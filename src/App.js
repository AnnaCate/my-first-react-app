// create Pet component
const Pet = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "Henry"), 
        React.createElement("h2", {}, "Dog"), 
        React.createElement("h2", {}, "Weimaraner")
    ])
}

// create App component
const App = () => {
    return React.createElement("div", {}, [ // create array of elements
        React.createElement("h1", {}, "Adopt Me!"),
        React.createElement(Pet),
        React.createElement(Pet),
        React.createElement(Pet),
        React.createElement(Pet)
    ]);
}

// render the App component to the DOM
ReactDOM.render(React.createElement(App), document.getElementById("root"));