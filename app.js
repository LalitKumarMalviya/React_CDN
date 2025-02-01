/**
 * 
 * <div id="parent">
 *    <div id="childOne">
 *      <h1>I'm a first h1 tag</h1>
 *    </div>
 * 
 *    <div id="childTwo">
 *      <h1>I'm a second h1 tag</h1>
 *      <p>I'm a p tag</p>
 *    </div> 
 * </div>
 * 
 * 
*/

// Nested Elements
const parent = React.createElement("div", { id: "parent" },
    // 1.
    React.createElement("div", { id: "childOne" },
        React.createElement("h1", {}, "I'm a first h1 tag")
    ),

    // 2.
    React.createElement("div", { id: "childTwo" },
        [
            React.createElement("h1", {}, "I'm a second h1 tag"),
            React.createElement("p", {}, "I'm a p tag")
        ]
    )
);

// Single Element
const heading = React.createElement("h1",
    { id: "heading", xyz: "abc" },
    "Hello world from Namste Javascript..."
);

// Root
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering the element
root.render(parent);