// Notes on Dom manipulation and events
  
// DOM = Document Object Model
  // A tree-like representation of the contents of a webpage- a tree of "nodes"
  // Element nodes are primarily used for manipulation the DOM

// Targeting nodes with selectors
  // <div id="container">
      // <div class="display"></div>
      // <div class="controls"></div>
  // </div>
  // The following selectors could be used to refer to <div class="display">
    // div.display
    // .display
    // #container > .display
    // div#container > div.display
  // Also using relational selectors (firstElementChild or lastElementChild)
    // const container = document.querySelector(#container");
    //const display = container.firstElementChild;
  
// JavaScript objects
  // Access objects in JavaScript using dot(.) notation container.firstElement
  // A object is a data type that holds properties. ("key: value") pairs
    
// DOM Methods
  // Properties and methods are the primary tools to use and manipulate    webpages with javascript
    
// Query selectors
  // element.querySelector(selector)- Returns a reference to the first match of selector
  // element.querySelectorAll(selectors)- Returns a "NodeList" containing references to all of the matches of the selectors.
    // With querySelectorAll, the return value is not an array although it looks like one. It is a "NodeList".
    // It is possible to convert it to a array using Array.from() or the spread operator
  
// Element creation
  // document.createElement(tagName, [options]) creates a new element of type(tagName.) [options] in this case means you can add optional params to the function.
  // const div = document.createElement("div"); Does NOT put your new element in the DOM - it creates it in memory

// Append elements to place the element into the DOM 
  // parentNode.appendChild(childNode) appends childNode as the last child of parentNode.
  // parenNode.insertBefore(newNode, referenceNode) inserts newNode into parentNode before referenceNode.

// Remove elements
  // parentNode.removeChild(child) removes child from parentNode on the DOM and returns a reference to child.

// Altering elements
  // const div = document.createElement("div");
    
    // Adding inline style
      // Adds the indicated style rule to the element in the div variable
        // div.style.color = "blue"; 
      
      // Adds several style rules
        // div.style.cssText = "color: blue; background: white;"; //
      
      // Adds several style rules
        // div.setAttribute("style", "color: blue; background: white;");
  
        // ** When accessing a kebab-cased CSS property like background-color with JS, you will need to either use camelCase with dot notation or bracket notation. When using bracket notation, you can use either camelCase or kebab-case, but the property name must be a string. **

// Editing attributes 
  // if id exists, update it to "theDiv", else create an id with value "theDiv"
    // div.setAttribute("id", "theDiv");
  
  // returns value of specified attribute, in this case "theDiv"
    // div.getAttribute("id");
  
  // removes specified attribute
    // div.removeAttribute("id");


// Working with classes
  // adds class "new" to your new div
    // div.classList.add("new");
  // removes "new" class from div
    // div.classList.remove("new");
  // if div doesn't have class "active" then add it, else remove it
    // div.classList.toggle("active"); "Often standard to toggle a CSS style"


// Adding text content
  // creates a text node containing "Hello World!" inserts it into the div.'
    // div.textContent = "Hello World!";

// Adding HTML content
  // renders the HTML inside div
    // div.innerHTML = "<span>Hello World!</span>"; *** Security risks ***


// *** TOP EXAMPLE/EXERCISE ***
  const container = document.querySelector("#container"); // <--- Reference that exists in the HTML.

  const content = document.createElement("div"); // <-- Create a new div and store it in the variable content.

  content.classList.add("content"); // <-- Add a class 
  content.textContent = "This is the glorious text-content!"; // <-- And some text

  container.appendChild(content); // <-- append that div to container

  const redText = document.createElement("p");
  redText.textContent = "Hey I'm red!";
  redText.style.color = "red";
  container.appendChild(redText);

  const blueText = document.createElement("h3");
  blueText.textContent = "I'm a blue h3!";
  blueText.style.color = "blue";
  container.appendChild(blueText);

  const div = document.createElement("div");
  div.style.border = "1px solid black";
  div.style.background = "pink";

  const h1 = document.createElement("h1");
  h1.textContent = "I'm in a div";
  div.appendChild(h1);

  const p = document.createElement("p");
  p.textContent = "ME TOO!";
  div.appendChild(p);

  container.appendChild(div)

// Event listener methods 

  // Method 2
  const btn2 = document.querySelector("#btn2");
  btn2.onclick = () => alert("Hello World");

  // Method 3
  const btn3 = document.querySelector("#btn3");
  btn3.addEventListener("click", () => {
    alert("Hello World");
  });

// Method 1 on HTML file
// All 3 methods can be use with named functions
// Using named function can clean up your code and a good idea if you want to do something in multiple places.

// Example of a named function with method 3
  // function alertFunction() {
    // alert("YAY! YOU DID IT!");
  // }

  // const btn.addEventListener("click", alertFunction);

// With a three methods we can access more information about the event by passing a parameter to the function we are calling
 btn3.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    e.target.style.background = "blue"; // Turns the button blue after click
  });

// When we pass in alertFunction or function (e) {...} as an argument that is a called a callback. It is a function passed into another function as an argument.

// (e) references the event itself.

// Attaching listeners to groups of nodes
  // buttons is a node list. Looks and acts like an array.
    //  const buttons = document.querySelectorAll("button");
    
    //  // we use the .forEach method to iterate through each button 
    //  buttons.forEach((button) => {
    // // and for each one we add a "click" listener
    //    button.addEventListener("click", () => {
    //     alert(button.id);
    //    });
    //   });

// USEFUL EVENTS INCLUDE:
  // click, dblclick, keydown, keyup

// --------------- NOTES FROM JavaScript Tutorial on events ---------------
  // HTML -- <button id="btn">Click Me!</button>

  // To define a function that executes when the button is clicked, use addEventListener() method

  // JS -- let btn = document.querySelector("#btn"); <-- Select the btn with querySelector() method
        
        // function handleClick() { <-- define a function called handleClick()
        //    alert("It was clicked!");
        // }

        // btn.addEventListener("click", handleClick); <-- Register a event handler when you click the display() function will execute

        // Shorter way using a anonymous function
        
        // let btn = document.querySelector("#btn");
        
        // btn.addEventListener("click",function() {
        //      alert("It was clicked!");
        // });

        // OR using a arrow function
        
        // let btn = document.querySelector("#btn");
        
        // btn.addEventListener("click",() => {
        //      alert("It was clicked!");
        // });

// EVENT FLOW when you click the button the event can move through the page.

// EVENT BUBBLING
    // Events start at the most specific element and flow upward to the least specific.
    // When the button is clicked event occurs in this order
      // button, div with the id container, body, html, document
    
// EVENT CAPTURING 
  // Events start at the least specific element and flow downward
    
// DOM LEVEL 2 EVENT FLOW
  // Capturing phase moves from the top to bottom of page
  // Target phase the event reaches the element that was clicked
  // Bubbling phase the event moves back up the page

// EVENT OBJECT
  // Occurs when the browser passes an Event object to the event handler.
    // let btn = document.querySelector("#btn");
    
    // btn.addEventListener("click",function(event){
    //      console.log(event.type); // "click"
    // }); 

// preventDefault() -- Stops the behavior of an event 

// stopPropagation() -- Immediately stops the flow of an event, does not stop the default behavior.


// --------------- INTRODUCTION TO JAVASCRIPT MOUSE EVENTS ---------------

// Mouse events fire when you use the mouse to interact with the elements on the page.
// These events include - mousedown, mouseup, click, dblclick, mousemove, mouseover, mouseout, mouseenter, mouseleave, wheel

// MOUSEDOWN, MOUSEUP, AND CLICK EVENTS

  // When clicking an element there are no less than mouse events 
    // The mousedown fires when pressed, the mouseup fires when released, the click fires when one mousedown and mouseup is detected.
    // Element will only fire if the cursor is detected on the element for a mousedown  and mouseup
  
  // dblclick event
    // Takes two click events to cause a dblclick event to fire
  
  // mousemove
    // fires repeatedly whenever you move the mouse around an element.
    // To avoid performance issues only add mousemove event handler when you need and remove it when it's not.
  
  // wheel event
    // Fires when the user scrolls the mouse wheel
      // Example - element.addEventListener("wheel", e => console.log(e.deltay));

  // mouseover
    // when the pointer enters the element -- It bubbles
  
  // mouseout
    // when the pointer leaves the element -- It bubbles
  
  // mouseenter
    // when the pointer enters the element itself -- Does not bubble
  
  // mouseleave
    // when the pointer leaves the element itself -- Does not bubble

// --------------- REGISTERING MOUSE EVENT HANDLERS ---------------

// Registering a mouse event
  
  // first select the element by using querySelector() or getElementById()

  // then register the mouse event using the addEventListener() method

  // --HTML-- <button id="btn">Click Me</button>
  
  // --JS-- let btn = document.querySelector("#btn");
  
  //         btn.addEventListener("click",(event) => {
      //          console.log("clicked");
      //      });


// --------------------- DETECTING MOUSE BUTTONS -------------------

// The event object passed to the mouse event handler has a property called button that indicates which mouse button was pressed on the mouse to trigger the event

// 0: the main mouse button, 1: the aux button is pressed usually middle or wheel, 2: the secondary button is pressed usually right mouse, 3: the fourth button is pressed browser back button, 4: the fifth button is pressed usually the browser forward button.


// -------------------- JAVASCRIPT KEYBOARD EVENTS --------------------

// THREE MAIN KEYBOARD EVENTS
  // keydown - fires when pressing a key and repeatedly while holding
  // keyup - fires when you release a key 
  // keypress - fires when you press a character like a, b, or c also repeatedly

// HANDLING KEYBOARD EVENTS
  // Select the element on which the keyboard event will fire. (text box)
  // Use the element.addEventListener() to register an event handler
  
  // Text box: <input type="text" id="message">

  // How to register keyboard event listeners:
  // let msg = document.getElementById("#message");
  
  // msg.addEventListener("keydown", (event) => {
    //      handle keydown
    // });
  
  // msg.addEventListener("keypress", (event) => {
    //      handle keypress
    // });
  
  // msg.addEventListener("keyup", (event) => {
    //      handle keyup
    // });
  
  // if you press a character key, all three event handlers will be called.

// THE KEYBOARD EVENT PROPERTIES
  // Two important properties key and code.
  // Key returns the character that has been pressed
  // Code returns the physical key code
  // If you press z the event.key returns z and event.code returns KeyZ


// --------------------- JAVASCRIPT EVENT DELEGATION ----------------------

// Adding a single event handler to parent element instead of multiple event handlers

// Having a large amount of event handlers on a page impact performance 
  // Each handler is a function/object which takes up memory. 
  // It takes time to assign all the event handlers which causes a delay

// To solve you can leverage the event bubbling.
  // Instead of multiple handlers you can assign a single event handler for all click events

  // let menu = document.querySelector("#menu");

  // menu.addEventListener("click", (event) => {
  //        let target = event.target;
  
  //        switch(targe.id) {
  //            case "home";
  //                console.log("Home menu was clicked");
  //                break;
  //            case "dashboard":
  //                console.log("Dashboard was clicked");
  //                break;
  //            case "report":
  //                console.log("Report was clicked");
  //                break;
  //        }
  // });