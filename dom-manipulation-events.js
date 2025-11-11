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
  
