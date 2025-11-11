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

