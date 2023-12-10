export const Javascript = [
  {
    id: 1,
    title: 'Introduction to JavaScript',
    definition: '',
    topics: [
      {
        id: 1.1,
        title: 'Introduction',
        isList: false,
        desc:
          'JavaScript is a high-level, interpreted programming language primarily used for adding interactivity and behavior to websites. It was created by Brendan Eich at Netscape in 1995 and has since become an essential tool for front-end and even back-end web development',
      },
      {
        id: 1.2,
        title: 'Features',
        isList: true,
        desc: [
          {
            id: 1,
            title: 'Dynamic Typing:',
            desc:
              'JavaScript is dynamically typed, which means you dont need to declare the data type of a variable explicitly. Its determined at runtime.',
          },
          {
            id: 2,
            title: 'Event-Driven:',
            desc:
              'JavaScript is heavily used in creating interactive elements on web pages by responding to events like clicks, form submissions, and more.',
          },
          {
            id: 3,
            title: 'Functions as First-Class Citizens:',
            desc:
              'Functions in JavaScript can be assigned to variables, passed as arguments, and returned from other functions.',
          },
          {
            id: 4,
            title: 'Prototypal Inheritance:',
            desc:
              'JavaScript uses prototypal inheritance, allowing objects to inherit properties and methods from other objects.',
          },
          {
            id: 5,
            title: 'Closures:',
            desc:
              'Closures allow functions to "remember" the environment in which they were created, even after they are called outside of that environment',
          },
          {
            id: 6,
            title: 'Asynchronous Programming:',
            desc:
              'JavaScript is well-suited for asynchronous tasks like fetching data from servers and updating the UI without blocking other processes.',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'JavaScript Variables',
    definition:
      'In JavaScript, variables are declared using the `var`, `let`, or `const` keyword, followed by the variable name. It is recommended to use `let` and `const` over `var` due to their better scoping rules and features.',
    topics: [
      {
        id: 2.1,
        title: 'Key Concepts',
        isList: true,
        desc: [
          {
            id: 1,
            title: 'Naming Conventions:',
            desc:
              'When naming variables, adhere to these conventions: - Variable names must start with a letter, underscore (`_`), or dollar sign (`$`). - Subsequent characters can be letters, numbers, underscores, or dollar signs. - Variables are case-sensitive (`myVariable` is different from `myvariable`) ',
          },
          {
            id: 2,
            title: 'Scope of Variables:',
            desc:
              'JavaScript has two types of scope: global scope and local (function) scope. Variables declared outside of any function have global scope, while variables declared within a function are only accessible within that function.',
            code: '/codes/js_2_1_2.txt',
          },
          {
            id: 3,
            title: 'Hoisting:',
            desc:
              'In JavaScript, variable declarations are "hoisted" to the top of their containing scope during compilation, but their assignments are not. This means you can use a variable before it is declared, but its value will be `undefined` until assigned.',
            code: '/codes/js_2_1_2.txt',
          },
          {
            id: 4,
            title: 'Data Manipulation:',
            desc:
              'Variables are often used to store and manipulate data. You can perform operations on variables based on their data types:',
            code: '/codes/js_2_1_4.txt',
          },
          {
            id: 5,
            title: 'Type Coercion:',
            desc:
              'JavaScript performs automatic type conversion, also known as type coercion, when you use operators with different data types.',
            code: '/codes/js_2_1_5.txt',
          },
          {
            id: 6,
            title: 'Template Literals',
            desc:
              'Template literals (introduced in ES6) provide an elegant way to interpolate variables into strings.',
            code: '/codes/js_2_1_6.txt',
          },
        ],
      },
      {
        title: 'Types of variables',
        id: 2.2,
        isList: true,
        desc: [
          {
            id: 1,
            title: 'Local variables:',
            desc:
              'Local variables are declared within a specific scope, such as a function or a block of code. They are only accessible within that scope and have a limited lifetime.',
          },
          {
            id: 2,
            title: 'Global Variables:',
            desc:
              'Global variables are declared outside of any function and are accessible throughout the entire program. They have a longer lifetime compared to local variables.',
          },
          {
            id: 3,
            title: 'Static Variables:',
            desc:
              'Static variables have their value persist across function calls. They are initialized only once and retain their value across calls.',
          },
          {
            id: 4,
            title: 'Const Variables:',
            desc:
              "Constants are variables whose value cannot be changed after initialization. They are declared using the 'const' keyword.",
          },
          {
            id: 5,
            title: 'Mutable Variables:',
            desc:
              "In the context of objects, 'mutable' allows modification of variables even within const methods.",
          },
        ],
      },
      {
        id: 2.3,
        title: 'Importance usages',
        desc:
          'Understanding the different types of variables, their scope, lifetime, and naming conventions is crucial for writing clean, efficient, and maintainable C++ code. Proper use of variables enables you to manage data effectively, control program flow, and create robust applications.',
      },
    ],
  },
  {
    id: 3,
    title: 'Data Types',
    definition:
      'JavaScript has several primitive and composite data types that are used to store and represent different kinds of values.',
    topics: [
      {
        id: 3.1,
        title: 'Primitive Data Types:',
        isList: true,
        isExample: false,
        desc: [
          {
            id: 1,
            title: 'number',
            desc: 'Represents both integer and floating-point numbers',
            code: '/codes/js_3_1_1.txt',
          },
          {
            id: 2,
            title: 'string',
            desc:
              'Represents a sequence of characters, enclosed in single and double quotes',
            code: '/codes/js_3_1_2.txt',
          },
          {
            id: 3,
            title: 'Boolean',
            desc: ' Represents true or false values.',
            code: '/codes/js_3_1_3.txt',
          },
          {
            id: 4,
            title: 'Null',
            desc: 'Represents the intentional absence of any value.',
            code: '/codes/js_3_1_4.txt',
          },
          {
            id: 5,
            title: 'Undefined',
            desc: 'Represents an uninitialized or undefined value.',
            code: '/codes/js_3_1_5.txt',
          },
          {
            id: 6,
            title: 'Symbol',
            desc:
              'Introduced in ES6, represents a unique and immutable value, often used as object property keys.',
            code: '/codes/js_3_1_6.txt',
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: 'Operators in JavaScript',
    definition:
      'Operators are symbols that perform specific operations on one or more operands. They are used to manipulate variables and values in expressions.',
    topics: [
      {
        id: 4.1,
        title: 'Arithmetic Operators',
        isList: false,
        isExample: true,
        desc: 'Arithmetic operators perform basic mathematical operations.',
        examples: [
          '`+` (addition), `-` (subtraction), `*` (multiplication), `/` (division), `%` (modulus).',
        ],
      },
      {
        id: 4.2,
        title: 'Comparison Operators',
        isList: false,
        isExample: true,
        desc:
          'Comparison operators compare two values and return a boolean result.',
        examples: [
          '`==` (equal to type coercion), `===` (Equal to strict equality), `!=` (not equal), `<` (less than), `>` (greater than), `<=` (less than or equal), `>=` (greater than or equal).',
        ],
      },
      {
        id: 4.3,
        title: 'Logical Operators',
        isList: false,
        isExample: true,
        desc: 'Logical operators perform logical operations on boolean values.',
        examples: ['`&&` (logical AND), `||` (logical OR), `!` (logical NOT).'],
      },
      {
        id: 4.4,
        title: 'Assignment Operators',
        isList: false,
        isExample: true,
        desc: 'Assignment operators assign values to variables.',
        examples: [
          '`=` (assignment), `+=` (addition assignment), `-=` (subtraction assignment), `*=` (multiplication assignment), `/=` (division assignment), `%=` (modulus assignment).',
        ],
      },
      {
        id: 4.5,
        title: 'Increment and Decrement Operators',
        isList: false,
        isExample: false,
        desc:
          'Increment (`++`) and decrement (`--`) operators increase or decrease the value of a variable by 1.',
      },
      {
        id: 4.6,
        title: 'Bitwise Operators',
        isList: false,
        isExample: true,
        desc:
          'Bitwise operators perform operations at the binary level on integers.',
        examples: [
          '`&` (bitwise AND), `|` (bitwise OR), `^` (bitwise XOR), `~` (bitwise NOT), `<<` (left shift), `>>` (right shift).',
        ],
      },
      {
        id: 4.7,
        title: 'Conditional (Ternary) Operator',
        isList: false,
        isExample: false,
        desc:
          'The ternary operator (`condition ? expr1 : expr2`) returns one of two values based on a condition.',
      },
      {
        id: 4.8,
        title: 'Conditional Operator (null coalescing)',
        isList: false,
        isExample: false,
        desc:
          '`??` provides a default value when the left-hand operand is `nullptr` or equivalent.',
      },
    ],
  },
  {
    id: 5,
    title: 'Control Statements',
    definition: '',
    topics: [
      {
        id: 5.1,
        title: 'if...else statement',
        isList: false,
        isExample: true,
        desc:
          'The `if...else` statement is a fundamental control structure in java that allows you to make decisions based on conditions. It enables your program to execute different blocks of code depending on whether a specified condition is true or false.',
        code: '/codes/js_5_1.txt',
      },
      {
        id: 5.2,
        title: 'Nested if...else statement',
        isList: false,
        isExample: true,
        desc:
          'You can nest `if...else` statements within each other to handle multiple conditions',
        code: '/codes/js_5_2.txt',
      },
      {
        id: 5.3,
        title: 'Switch',
        isList: false,
        isExample: false,
        desc:
          'The `switch` statement is another powerful control structure in Java that provides an efficient way to handle multiple cases or options based on the value of a single expression. Its particularly useful when you want to execute different blocks of code depending on the value of a variable.',
        code: '/codes/js_5_3.txt',
      },
      {
        id: 5.4,
        title: 'Loops',
        isList: true,
        desc: [
          {
            id: 1,
            title: 'for loop',
            desc: 'used for initialization , condition and increment purpose',
            code: '/codes/js_5_4_1.txt',
          },
          {
            id: 2,
            title: 'while loop',
            desc:
              'The `while` loop repeatedly executes a block of code as long as a given condition is true. Its suitable when the number of iterations is not known beforehand.',
            code: '/codes/js_5_4_2.txt',
          },
          {
            id: 3,
            title: 'do-while loop',
            desc:
              'The `do-while` loop is similar to the `while` loop, but it ensures that the code block is executed at least once before checking the condition.',
            code: '/codes/js_5_4_3.txt',
          },
        ],
      },
    ],
  },
  {
    id: 6,
    title: 'JS Functions',
    definition:
      'Functions are a fundamental building block in C++ programming. They allow you to encapsulate a block of code that performs a specific task and can be reused throughout your program. Functions help in modularizing your code, improving readability, and promoting code reuse.',
    topics: [
      {
        id: 6.1,
        title: 'Functions syntax',
        isList: false,
        isExample: false,
        desc: 'below is the syntax for C++',
        code: '/codes/js_6_1.txt',
      },
      {
        id: 6.2,
        title: 'Functions different terminology',
        isList: true,
        isExample: false,
        desc: [
          {
            id: 1,
            title: 'Return Type: ',
            desc:
              'Specifies the type of value the function returns. Use `void` if the function does not return a value.',
          },
          {
            id: 2,
            title: 'Function Name: ',
            desc:
              'A meaningful name that describes the purpose of the function.',
          },
          {
            id: 3,
            title: 'Parameters: ',
            desc:
              'Inputs to the function enclosed in parentheses. Parameters are placeholders for values that you pass when calling the function.',
          },
          {
            id: 4,
            title: 'Function Body: ',
            desc: 'Contains the actual code that performs the desired task',
          },
          {
            id: 5,
            title: 'Return Statement: ',
            desc:
              'If the function returns a value, the `return` statement is used to send that value back to the caller. The `return` statement can also be omitted for functions with a `void` return type',
          },
        ],
      },
      {
        id: 6.3,
        title: 'Recursive Functions',
        isList: false,
        isExample: false,
        desc:
          'A function can call itself, either directly or indirectly through other functions. This is known as recursion.',
        code: '/codes/js_6_3.txt',
      },
      {
        id: 6.4,
        title: 'Importance of Functions',
        isList: true,
        isExample: false,
        desc: [
          {
            id: 1,
            title: 'Modularity',
            desc:
              'Functions allow you to break down complex tasks into smaller, manageable parts, making your code easier to understand and maintain.',
          },
          {
            id: 2,
            title: 'Resuability',
            desc:
              'Functions can be reused across different parts of your program, reducing code duplication.',
          },
          {
            id: 3,
            title: 'Readibility',
            desc:
              'Well-named functions with clear purposes enhance code readability.',
          },
          {
            id: 4,
            title: 'Abstraction',
            desc:
              'Functions hide implementation details, allowing you to focus on high-level logic.',
          },
        ],
      },
    ],
  },
  {
    id: 7,
    title: 'Object-Oriented Programming (OOP) in JS',
    definition:
      'Object-Oriented Programming is a programming paradigm that emphasizes the use of objects to model real-world entities and their interactions. Java is a powerful object-oriented programming language that implements OOP concepts.',
    topics: [
      {
        id: 7.1,
        title: 'Class',
        isList: false,
        isExample: false,
        desc:
          'In JavaScript, classes are templates for creating objects. They provide a blueprint that defines the structure and behavior of objects. Classes encapsulate data (properties) and methods (functions) that operate on the data. ES6 (ECMAScript 2015) introduced a more structured syntax for creating classes.',
        code: '/codes/js_7_1.txt',
      },
      {
        id: 7.2,
        title: 'Encapsulation',
        isList: false,
        isExample: false,
        desc:
          'Encapsulation is one of the core principles of Object-Oriented Programming (OOP) and involves bundling data (properties) and methods (functions) that operate on the data into a single unit, i.e., an object. It provides a way to control the access to an object is internal state, ensuring that the data is accessed and modified only through defined methods.',
        code: '/codes/js_7_2.txt',
      },
      {
        id: 7.3,
        title: 'Abstraction',
        isList: false,
        isExample: false,
        desc:
          'Abstraction is a fundamental principle in Object-Oriented Programming (OOP) that involves simplifying complex reality by modeling classes based on real-world entities. It hides the complex implementation details and exposes only the relevant parts, allowing developers to focus on high-level interactions without needing to know the intricate internal workings.',
        code: '/codes/js_7_3.txt',
      },
      {
        id: 7.4,
        title: 'Inheritance',
        isList: false,
        isExample: false,
        desc:
          'Inheritance is a fundamental concept in Object-Oriented Programming (OOP) that allows a new class (subclass or derived class) to inherit properties and methods from an existing class (superclass or base class). In JavaScript, inheritance is achieved through prototype chains, where objects can inherit properties and methods from their prototype objects.',
        code: '/codes/js_7_4.txt',
      },
      {
        id: 7.5,
        title: 'Polymorphism',
        isList: false,
        isExample: false,
        desc:
          'Polymorphism is a key concept in Object-Oriented Programming (OOP) that allows objects of different classes to be treated as objects of a common superclass. It enables the same interface (methods or properties) to be used for objects of different types, providing flexibility and code reusability.',

        code: '/codes/js_7_5.txt',
      },
    ],
  },
  {
    id: 8,
    title: 'JavaScript DOM ',
    definition:
      ' The Document Object Model (DOM) is a crucial concept in web development, particularly when working with JavaScript. It represents the structured, hierarchical arrangement of elements in an HTML or XML document and provides a way to interact with and manipulate these elements dynamically. Here is a comprehensive overview of the JavaScript DOM:',
    topics: [
      {
        id: 8.1,
        title: 'What is the DOM',
        isList: false,
        isExample: false,
        desc:
          '- The DOM is a programming interface for web documents. It represents the structure of a web page as a tree-like structure of objects.  - Each element in an HTML document, such as headings, paragraphs, images, and links, is represented as a node in the DOM tree.',
      },
      {
        id: 8.2,
        title: 'Key Point',
        isList: false,
        isExample: false,
        desc:
          '- Nodes: Elements, attributes, and text content are represented as nodes in the DOM.   - Parent and Child Nodes: Nodes are organized hierarchically, with parent nodes containing child nodes.   - Properties and Methods: Nodes have properties that expose information and methods to interact with them.',
      },
      {
        id: 8.3,
        title: 'Accessing DOM Elements',
        isList: false,
        isExample: false,
        desc:
          ' - Query Selectors: Use`document.querySelector()` or `document.querySelectorAll()` to select elements based on CSS selectors.   - getElement Methods: `getElementById()`, `getElementsByClassName()`, and`getElementsByTagName()`.',
      },
      {
        id: 8.4,
        title: 'Modifying DOM Elements',
        isList: false,
        isExample: false,
        desc:
          '   - Changing Content: Update text content and attributes using properties like `textContent` and `setAttribute()`.  - Adding and Removing Elements: Create new elements with `createElement()` and remove elements with `remove()`.',
      },
      {
        id: 8.5,
        title: 'Event Handling',
        isList: false,
        isExample: false,
        desc:
          '   - Events: User actions like clicks and keyboard inputs trigger events.   - Event Listeners: Attach event listeners using methods like `addEventListener()` to execute code in response to events.',
      },
      {
        id: 8.6,
        title: 'DOM Manipulation Best Practices',
        isList: false,
        isExample: false,
        desc:
          '- Minimize DOM Manipulation: Excessive manipulation can impact performance.     - Use Event Delegation: Attach events to a parent element to handle multiple child elements efficiently.     - Cache DOM References: Store frequently accessed elements in variables to avoid repeated queries.',
      },
      {
        id: 8.7,
        title: 'DOM Traversal',
        isList: false,
        isExample: false,
        desc:
          '- Moving through Nodes: Traverse the DOM tree using properties like `parentNode`, `childNodes`, `nextSibling`, and`previousSibling`.',
      },
      {
        id: 8.8,
        title: 'getElementById()',
        isList: true,
        isExample: false,
        desc: [
          {
            id: 1,
            title: 'Purpose of `getElementById()`',
            desc:
              '- The `getElementById()` method allows you to access a specific element in the DOM by providing the elements unique `id` attribute.  - It is one of the simplest and most efficient ways to select a single element from the DOM.',
          },
          {
            id: 2,
            title: 'Syntax',
            desc: 'const element = document.getElementById("elementId");',
          },
          {
            id: 3,
            title: 'Usage:',
            desc:
              '- Replace `"elementId"` with the actual `id` attribute value of the HTML element you want to select.   - The method returns the DOM element as an object, which you can then interact with using JavaScript.',
          },
          {
            id: 4,
            title: 'Benefits',
            desc:
              '- Speed and Efficiency: Since IDs are unique, selecting an element by ID is faster compared to other selection methods.  - Direct Access: You can directly reference and manipulate the selected element without iterating through a collection.',
          },
          {
            id: 5,
            title: 'Use Cases',
            desc:
              '- Accessing Specific Elements: When you need to manipulate a specific element, such as updating its content or changing its style.  - Form Handling: Retrieving form elements to access their values or validate user inputs.  - Event Handling: Attaching event listeners to individual elements.',
          },
        ],
      },
      {
        id: 8.9,
        title: 'getElementsByClassName()',
        isList: true,
        isExample: false,
        desc: [
          {
            id: 1,
            title: 'Purpose of `getElementsByClassName()`:',
            desc:
              '   - The `getElementsByClassName()` method allows you to select multiple elements in the DOM that share a common class name.   - It returns a live HTMLCollection or NodeList that represents the selected elements.',
          },
          {
            id: 2,
            title: 'Syntax',
            desc:
              '  const elements = document.getElementsByClassName("className");',
          },
          {
            id: 3,
            title: 'Usage:',
            desc:
              '   - Replace `"className"` with the actual class name you want to select elements by.   - The method returns a collection of DOM elements, which you can access and manipulate using JavaScript.',
          },
          {
            id: 4,
            title: 'Benefits',
            desc:
              '- Grouping Elements: You can easily group and manipulate multiple elements with the same class.   - Dynamic Selection: Since the collection is live, changes to the DOM are reflected in the collection.',
          },
          {
            id: 5,
            title: 'Use Cases',
            desc:
              '- Styling Elements: Apply consistent styles to a group of elements, such as setting a common background color or font size.   - Event Handling: Attach event listeners to a set of elements, such as buttons, within a specific section of the page.   - Batch Manipulation: Perform batch operations on a collection of elements, such as adding or removing classes.',
          },
        ],
      },
      {
        id: 8.11,
        title: 'getElementsByName()',
        isList: true,
        isExample: false,
        desc: [
          {
            id: 1,
            title: '. Purpose of `getElementsByName()`:',
            desc:
              '- The `getElementsByName()` method allows you to select multiple elements in the DOM that share a common `name` attribute.  - It returns a live HTMLCollection or NodeList that represents the selected elements.',
          },
          {
            id: 2,
            title: 'Syntax',
            desc:
              'const elements = document.getElementsByName("nameAttribute");',
          },
          {
            id: 3,
            title: 'Usage:',
            desc:
              '- Replace `"nameAttribute"` with the actual `name` attribute you want to select elements by. - The method returns a collection of DOM elements, which you can access and manipulate using JavaScript.',
          },
          {
            id: 4,
            title: 'Benefits',
            desc:
              '- Grouping Elements: You can conveniently group and manipulate elements with the same `name` attribute. - Useful for Form Elements: Particularly useful for form elements like radio buttons and checkboxes that need to share a common name to establish a group.',
          },
          {
            id: 5,
            title: 'Use Cases',
            desc:
              '- Form Handling: Accessing and managing form elements like radio buttons, checkboxes, and select options.   - Batch Manipulation: Perform actions on a group of related form elements, such as resetting a group of checkboxes.',
          },
        ],
      },
      {
        id: 8.12,
        title: 'JS innerHTML property :',
        isList: true,
        isExample: false,
        desc: [
          {
            id: 1,
            title: 'Purpose of innerHTML',
            desc:
              '   - The `innerHTML` property provides a way to access or manipulate the HTML content within an element.  - It can be used to retrieve the HTML content as a string or replace the existing content with new HTML.',
          },
          {
            id: 2,
            title: 'Syntax',
            desc: '   const elementContent = element.innerHTML;',
          },
          {
            id: 3,
            title: 'Usage to Access Content',
            desc:
              '- Use the `innerHTML` property to retrieve the HTML content of an element as a string.',
          },
          {
            id: 4,
            title: 'Usage to Modify Content',
            desc:
              '- Use the `innerHTML` property to replace the HTML content of an element.',
          },
          {
            id: 5,
            title: 'Benefits',
            desc:
              '   - Dynamic Content: You can dynamically update the content of an element without completely reconstructing it.   - Convenience: `innerHTML` provides a straightforward way to add, replace, or manipulate HTML content.',
          },
          {
            id: 6,
            title: 'Real-Time Examples',
            desc:
              ' - Showcase practical scenarios where `innerHTML` is used, such as updating a blog post content, creating interactive quizzes, or building a dynamic comment section.',
          },
          {
            id: 7,
            title: 'Syntax',
            desc: '   const elementContent = element.innerHTML;',
          },
          {
            id: 8,
            title: 'Syntax',
            desc: '   const elementContent = element.innerHTML;',
          },
        ],
      },
    ],
  },
  {
    id: 9,
    title: 'JS Cookies :',
    definition:
      '. Cookies are small pieces of data that websites can store on a users browser. They are commonly used for various purposes such as session management, user authentication, and tracking user preferences. Here is an overview of working with cookies in JavaScript: ',
    topics: [
      {
        id: 9.1,
        title: 'Creating a Cookie',
        isList: false,
        isExample: false,
        desc:
          '- Use the `document.cookie` property to create or modify a cookie.   - Cookies are set as strings in the format: `"name=value; expires=expirationDate; path=path; domain=domain; secure"`.',
        code: '/codes/js_9_1.txt',
      },
      {
        id: 9.2,
        title: 'Reading Cookies:',
        isList: false,
        isExample: false,
        desc:
          'Access the `document.cookie` property to read all cookies as a single string.  - Use JavaScript to parse and extract the desired cookie values.',
        code: '/codes/js_9_2.txt',
      },
      {
        id: 9.3,
        title: 'Setting Expiration and Other Options',
        isList: false,
        isExample: false,
        desc:
          'The `expires` attribute specifies when the cookie will expire (in UTC format).  - Other attributes include `path`, `domain`, and `secure`, which determine the cookies scope and security.',
      },
      {
        id: 9.4,
        title: 'Deleting a Cookie',
        isList: false,
        isExample: false,
        desc:
          'To delete a cookie, set its `expires` attribute to a date in the past.',
        code: '/codes/js_9_4.txt',
      },
      {
        id: 9.5,
        title: 'Limitations and Considerations',
        isList: false,
        isExample: false,
        desc:
          '- Cookies have size limitations (usually around 4KB) and should not store sensitive information.  - Modern web development often prefers using more secure and flexible options like `localStorage` or `sessionStorage`.',
      },
    ],
  },
  {
    id: 10,
    title: 'JS Events ',
    definition:
      'Events are interactions or occurrences that happen in the browser, such as a user clicking a button, moving the mouse, or pressing a key. JavaScript provides a way to handle and respond to these events, making your web applications interactive and dynamic. Here is a comprehensive overview of JavaScript events:',
    topics: [
      {
        id: 10.1,
        title: 'Event Basics:',
        isList: false,
        isExample: false,
        desc:
          '- Events are actions or occurrences that happen in the browser.    - Examples of events: click, mouseover, keydown, submit, load, and many more.',
      },
      {
        id: 10.2,
        title: 'Event Handling:',
        isList: false,
        isExample: false,
        desc:
          '- Event handling involves defining functions (event handlers) that are executed when an event occurs.  - Use the `addEventListener` method to attach event handlers to elements.',
      },
      {
        id: 10.3,
        title: 'Event Listener Syntax:',
        isList: false,
        isExample: false,
        code: '/codes/js_10_3.txt',
      },
      {
        id: 10.4,
        title: 'Event Object:',
        isList: false,
        isExample: false,
        desc:
          '   - When an event occurs, an event object is created and passed to the event handler.  - The event object contains information about the event, such as the type, target element, and additional data.',
      },
      {
        id: 10.5,
        title: 'addEventListener()',
        isList: false,
        isExample: false,
        desc:
          'The `addEventListener()` method in JavaScript is used to attach an event handler function to an element. This method allows you to respond to various types of events, such as clicks, mouse movements, keyboard interactions, and more. Here is a comprehensive guide to using `addEventListener()`:',
        code: '/codes/js_10_5.txt',
      },
    ],
  },
  {
    id: 11,
    title: 'JS Exception Handling ',
    definition:
      'Exception handling in JavaScript involves dealing with runtime errors or exceptional conditions that may occur during the execution of your code. Effective exception handling ensures that your program can gracefully handle errors without crashing. Here is a comprehensive guide to exception handling in JavaScript:',
    topics: [
      {
        id: 11.1,
        title: 'Types of Errors:',
        isList: false,
        isExample: false,
        desc:
          '- Syntax Errors: Errors that occur due to incorrect syntax in your code, preventing it from being executed.   - Runtime Errors: Errors that occur during program execution, such as trying to access an undefined variable or calling a non-existent function.   - Logical Errors: Errors where your code runs but produces incorrect results due to a flaw in your algorithm or logic.',
      },
      {
        id: 11.2,
        title: 'The `try...catch` Statement:',
        isList: false,
        isExample: false,
        desc:
          '- Use the `try...catch` statement to handle runtime errors gracefully.   - The `try` block contains the code that may throw an exception, and the `catch` block handles the exception if one is thrown.',
        code: '/codes/js_11_2.txt',
      },
      {
        id: 11.3,
        title: 'The `finally` Block:',
        isList: false,
        isExample: false,
        desc:
          '- You can use the `finally` block along with `try...catch` to execute code that should run regardless of whether an exception is thrown or caught.',
        code: '/codes/js_11_3.txt',
      },
      {
        id: 11.4,
        title: 'Throwing Custom Errors',
        isList: false,
        isExample: false,
        desc:
          'Use the `throw` statement to create and throw custom errors.  - Custom errors can provide more context and information about the error.',
        code: '/codes/js_11_4.txt',
      },
    ],
  },
  {
    id: 12,
    title: 'JS Debugging :',
    definition: '',
    topics: [
      {
        id: 12.1,
        title: 'Browser Developer Tools:',
        isList: false,
        isExample: false,
        desc:
          'Most modern browsers come with built-in developer tools that include debugging capabilities.   - Open the developer tools using `F12` or `Ctrl + Shift + I` (Windows/Linux) or `Cmd + Option + I` (Mac).   - Common browsers like Chrome, Firefox, Edge, and Safari have similar developer tools.',
      },
      {
        id: 12.2,
        title: 'Using the Console:',
        isList: false,
        isExample: false,
        desc:
          'The console is a powerful tool for printing messages, debugging information, and evaluating expressions.  - Use `console.log()` to print values and messages to the console.',
      },
      {
        id: 12.3,
        title: 'Breakpoints:',
        isList: false,
        isExample: false,
        desc:
          'Set breakpoints in your code to pause execution and inspect variables and call stacks at specific points.  - You can set breakpoints directly in the browsers developer tools by clicking on line numbers.',
      },
      {
        id: 12.4,
        title: 'Stepping Through Code:',

        isList: false,
        isExample: false,
        desc:
          'Debuggers allow you to step through your code line by line using buttons like "Step Into," "Step Over," and "Step Out."  - This helps you understand the flow of your program and identify errors',
      },
      {
        id: 12.5,
        title: 'Watches and Expressions:',
        isList: false,
        isExample: false,
        desc:
          'While debugging, you can add variables and expressions to the watch panel to monitor their values as you step through the code.',
      },
    ],
  },
  {
    id: 13,
    title: 'JS Hoisting ',
    definition:
      'Hoisting is an important concept in JavaScript that affects how variables and function declarations are processed during the execution of code. Hoisting can sometimes lead to unexpected behavior, so it is important to understand how it works. Here is a comprehensive guide to hoisting in JavaScript:',
    topics: [
      {
        id: 13.1,
        title: 'Hoisting Definition',
        isList: false,
        isExample: false,
        desc:
          '- Hoisting is a behavior in JavaScript where variable and function declarations are moved (or "hoisted") to the top of their containing scope during the compilation phase, before code execution',
      },
      {
        id: 13.2,
        title: 'Variable Hoisting',
        isList: false,
        isExample: false,
        desc:
          'Variable declarations using `var` are hoisted, but their assignments are not.',
        code: '/codes/js_13_2.txt',
      },
      {
        id: 13.3,
        title: 'Function Hoisting',
        isList: false,
        isExample: false,
        desc:
          'Function declarations are entirely hoisted, allowing you to call a function before its declaration in the code.',
        code: '/codes/js_13_3.txt',
      },
      {
        id: 13.4,
        title: 'Hoisting with `let` and `const',
        isList: false,
        isExample: false,
        desc:
          'Variables declared with `let` and `const` are also hoisted, but they are not initialized and cannot be accessed before the declaration',
        code: '/codes/js_13_4.txt',
      },
      {
        id: 13.5,
        title: 'Function Expressions and Arrow Functions',
        isList: false,
        isExample: false,
        desc:
          'Function expressions (anonymous functions) and arrow functions are not hoisted like function declarations.',
        code: '/codes/js_13_5.txt',
      },
    ],
  },
  {
    id: 14,
    title: 'Promises in JavaScript',
    definition:
      'A Promise in JavaScript is an object that represents the eventual completion or failure of an asynchronous operation. It is a way to handle asynchronous operations more easily and avoid callback hell. Promises have become a fundamental part of modern JavaScript and are used extensively for dealing with asynchronous code',

    topics: [
      {
        id: 14.1,
        title: 'Promise States:',
        isList: false,
        isExample: false,
        dsc:
          '1. Pending: Initial state, neither fulfilled nor rejected.   2. Fulfilled: The operation completed successfully, and the promise has a resulting value.   3. Rejected: The operation failed, and the promise has a reason for the failure.',
      },
      {
        id: 14.2,
        title: 'Creating a Promise',
        isList: false,
        isExample: false,
        dsc: '',
        code: '/codes/js_14_2.txt',
      },
      {
        id: 14.3,
        title: 'Async/Await:',
        isList: false,
        isExample: false,
        desc:
          'Introduced in ES2017, async/await is built on top of Promises and provides a more readable way to write asynchronous code',

        code: '/codes/js_14_3.txt',
      },
    ],
  },
  {
    id: 15,
    title: 'Callbacks in JavaScript',
    definition:
      'A callback is a function that is passed as an argument to another function and is executed after the completion of an asynchronous operation or some other task. Callbacks are a fundamental concept in JavaScript and are often used to handle asynchronous operations, such as fetching data from a server or handling user interactions.',
    topics: [
      {
        id: 15.1,
        title: 'Example of Using Callbacks:',
        isList: false,
        isExample: false,
        desc: '',
        code: '/codes/js_15_1.txt',
      },
      {
        id: 15.2,
        title: 'Handling Errors with Callbacks:',
        isList: false,
        isExample: false,
        desc:
          'You can concatenate strings using the `+` operator or the `concat()` method.',
        code: '/codes/js_15_2.txt',
      },
      {
        id: 15.3,
        title: 'Callback Hell (Pyramid of Doom):',
        isList: false,
        isExample: false,
        desc:
          'When dealing with multiple nested callbacks, code readability and maintainability can degrade. This is known as "callback hell" or the "pyramid of doom." Promises and async/await were introduced to mitigate this issue.',

        code: '/codes/js_15_3.txt',
      },
    ],
  },
]
