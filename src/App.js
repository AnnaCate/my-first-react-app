// 

// create Pet component 
const Pet = props => {
    return React.createElement("div", {}, [ // create array of elements
        React.createElement("h1", {}, props.name), 
        React.createElement("h2", {}, props.animal), 
        React.createElement("h2", {}, props.breed)
    ])
}

// create App component
const App = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "Adopt Me!"),
        React.createElement(Pet, {name: "Henry", animal: "Dog", breed: "Weimaraner"}),
        React.createElement(Pet, {name: "Bear", animal: "Dog", breed: "English Shepherd"}),
        React.createElement(Pet, {name: "Piper", animal: "Dog", breed: "English Shepherd"}),
        React.createElement(Pet, {name: "Jack", animal: "Dog", breed: "Dachshund"})
    ]);
}

// render the App component to the DOM
ReactDOM.render(React.createElement(App), document.getElementById("root"));