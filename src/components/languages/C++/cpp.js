export const Cpp = [
  {
    id: 1,
    title: 'Introduction to C++',
    defination: '',
    topics: [
      {
        id: 1.1,
        title: 'Introduction',
        isList: false,
        desc:
          'C++ is a versatile and powerful programming language that builds upon the foundation of the C programming language. It was developed by Bjarne Stroustrup at Bell Labs in the early 1980s as an extension of C to support object-oriented programming (OOP) principles and provide additional features. C++ allows developers to write efficient and high-performance code while also enabling them to work with complex systems and applications.',
      },
      {
        id: 1.2,
        title: 'Features',
        isList: true,
        desc: [
          {
            id: 1,
            title: 'Object-Oriented Programming (OOP):',
            desc:
              'C++ supports the creation of classes and objects, promoting modularity, reusability, and better organization of code.',
          },
          {
            id: 2,
            title: 'Inheritance:',
            desc:
              'C++ allows classes to inherit properties and behaviors from other classes, facilitating code reuse and hierarchical structure.',
          },
          {
            id: 3,
            title: 'Polymorphism:',
            desc:
              'Through polymorphism, C++ enables objects of different classes to be treated as objects of a common base class, enhancing flexibility and extensibility.',
          },
          {
            id: 4,
            title: 'Encapsulation:',
            desc:
              'C++ provides mechanisms to encapsulate data and methods within classes, preventing unauthorized access and promoting data security.',
          },
          {
            id: 5,
            title: 'Templates:',
            desc:
              'C++ templates enable the creation of generic classes and functions, allowing code to work with different data types without sacrificing performance.',
          },
          {
            id: 6,
            title: 'Standard Template Library (STL):',
            desc:
              'The STL offers a collection of classes and functions for common data structures (vectors, lists, queues, etc.) and algorithms (sorting, searching, etc.), streamlining development and enhancing efficiency.',
          },
          {
            id: 7,
            title: 'Operator Overloading:',
            desc:
              'C++ permits operators to be redefined for user-defined types, enhancing code readability and expressiveness.',
          },
          {
            id: 8,
            title: 'Exception Handling:',
            desc:
              'C++ supports exception handling, allowing developers to manage and recover from runtime errors gracefully.',
          },
          {
            id: 9,
            title: 'Low-Level Memory Manipulation:',
            desc:
              'C++ provides features like pointers and manual memory management, granting developers control over memory allocation and deallocation.',
          },
        ],
      },
      {
        id: 1.3,
        title: 'History',
        isList: true,
        desc: [
          {
            id: 1,
            title: 'Early Origins:',
            desc:
              'Bjarne Stroustrup started developing C++ in the late 1970s while at Bell Labs. His goal was to enhance the C language by adding OOP capabilities.',
          },
          {
            id: 2,
            title: 'First Release:',
            desc:
              'The first commercial release of C++ was in 1985. It included classes, virtual functions, and other essential features of C++.',
          },
          {
            id: 3,
            title: 'Standardization:',
            desc:
              'C++ underwent several iterations and revisions. The first official C++ standard, known as C++98, was published in 1998. Subsequent standards (C++03, C++11, C++14, C++17, and C++20) brought new features and improvements.',
          },
          {
            id: 4,
            title: 'Adoption and Popularity:',
            desc:
              'C++ gained popularity due to its performance and versatility, becoming a favored language for various applications, including system programming, game development, and scientific computing.',
          },
          {
            id: 5,
            title: 'Modern Development:',
            desc:
              'C++ continues to evolve, with each new standard introducing enhancements and addressing community needs. It remains a vital language in modern software development.',
          },
          {
            id: 6,
            title: '',
            desc:
              "By incorporating these insights into your educational portal, you can provide learners with a comprehensive understanding of C++'s introduction, features, and historical development. Remember, the information provided is crafted to be original and informative, so feel free to adapt and expand it to create unique content for your website.",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'Variables',
    defination:
      'In C++, variables are fundamental entities that store and manage data. They provide a way to represent values and manipulate information within your C++ programs. Variables have different data types, which determine the kind of data they can hold and the operations that can be performed on them.',
    topics: [
      {
        id: 2.1,
        title: 'Key Concepts',
        isList: true,
        desc: [
          {
            id: 1,
            title: 'Declaration and Initialization:',
            desc:
              'To use a variable, you need to declare its data type and optionally assign an initial value.',
          },
          {
            id: 2,
            title: 'Data Types:',
            desc:
              'JavaScript supports various data types, including: int: Integer type for whole numbers. double: Double- precision floating - point type for decimal numbers. char: Character type for single characters. bool: Boolean type representing true or false values. string: A sequence of characters.',
          },
          {
            id: 3,
            title: 'Naming Rules:',
            desc:
              'Variable names must start with a letter, underscore, or dollar sign, followed by letters, digits, or underscores. They are case-sensitive. Meaningful and descriptive names enhance code readability.',
          },
          {
            id: 4,
            title: 'Scope and Lifetime:',
            desc:
              'Variables have a scope (region where they are accessible) and a lifetime (duration they exist in memory). Local variables are limited to their enclosing block, while global variables have a broader scope.',
          },
          {
            id: 5,
            title: 'Constants:',
            desc:
              "You can define constants using the 'const' keyword. Constants are values that cannot be changed after initialization.",
          },
          {
            id: 6,
            title: 'Type Inference:',
            desc:
              'In modern C++, type inference using the `auto` keyword allows the compiler to deduce the variables type from its initialization',
          },
        ],
      },
      {
        id: 2,
        title: 'Examples',
        isList: false,
        isExample: true,
        examples: [
          'const age = 25; // Declare and initialize an integer variable',
          'const pi = 3.14159; // Declare and initialize a floating-point variable',
          "const initial = 'J'; // Declare and initialize a character variable",
          'const isStudent = true; // Declare and initialize a boolean variable',
          "const name = 'John'; // Declare and initialize a string variable",
          'const monthsInYear = 12; // Declare a constant variable',
          'const x = 10; // Type inference: x is deduced as an integer',
        ],
      },

      {
        title: 'Types of variables',
        id: 2.3,
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
            title: 'Volatile Variables:',
            desc:
              "The 'volatile' keyword is used to indicate that a variable's value might change at any time, even if it doesn't appear to be modified by the program.",
          },
          {
            id: 6,
            title: 'Mutable Variables:',
            desc:
              "In the context of objects, 'mutable' allows modification of variables even within const methods.",
          },
        ],
      },
      {
        id: 2.4,
        title: 'Scope life time',
        isList: true,
        desc: [
          {
            id: 7,
            title: 'Scope Resolution Operator:',
            desc:
              "When a local variable has the same name as a global variable, the scope resolution operator '::' can be used to differentiate between them.",
          },
          {
            id: 8,
            title: 'Lifetime of Variables:',
            desc:
              "Local variables have a lifetime tied to their scope. Global variables have a lifetime throughout the program's execution. Static variables have a lifetime that extends beyond their scope.",
          },
        ],
      },
      {
        id: 2.5,
        title: "Type Inference and 'auto'",
        desc:
          "C++11 introduced the `auto` keyword for type inference. It allows the compiler to deduce the variable's type from its initializer, reducing the need for explicit type declarations. For example: `auto value = 42;` (here, `value` is deduced as an integer).",
      },
      {
        id: 2.6,
        title: 'Naming Conventions',
        isList: false,
        isExample: true,
        examples: [
          'Choose meaningful names that reflect the purpose of the variable.',
          'Use camelCase convention or underscores for multi-word names.',
          'Examples: totalAmount, studentCount, userName, max_value.',
        ],
      },
      {
        id: 2.7,
        title: 'Importance usages',
        desc:
          'Understanding the different types of variables, their scope, lifetime, and naming conventions is crucial for writing clean, efficient, and maintainable C++ code. Proper use of variables enables you to manage data effectively, control program flow, and create robust applications.',
      },
    ],
  },
  {
    id: 3,
    title: 'Data Types',
    defination:
      'C++ supports a variety of data types that define the kind of values a variable can hold and the operations that can be performed on them. Heres an overview of some commonly used data types:',
    topics: [
      {
        id: 3.1,
        title: 'Fundamental Data Types:',
        isList: true,
        isExample: false,
        desc: [
          { id: 1, title: 'int:', desc: ' Represents integer values.' },
          {
            id: 2,
            title: 'double:',
            desc: ' Represents double-precision floating-point numbers.',
          },
          {
            id: 3,
            title: 'float:',
            desc: ' Represents single-precision floating-point numbers.',
          },
          { id: 4, title: 'char: ', desc: 'Represents individual characters.' },
          {
            id: 5,
            title: 'bool:',
            desc: ' Represents Boolean values (`true` or `false`).',
          },
        ],
      },
      {
        id: 3.2,
        title: 'Derived Data Types:',
        isList: true,
        isExample: false,

        desc: [
          {
            id: 1,
            title: 'Arrays:',
            desc: 'A collection of elements of the same data type.',
          },
          {
            id: 2,
            title: 'Pointers:',
            desc: 'Variables that store memory addresses.',
          },
          {
            id: 3,
            title: 'References:',
            desc: ' An alias for an existing variable.',
          },
          {
            id: 4,
            title: ' Enums:',
            desc: 'User-defined data types representing a set of named values',
          },
        ],
      },
      {
        id: 3.3,
        title: 'User-Defined Data Types:',
        isList: true,
        isExample: false,

        desc: [
          {
            id: 1,
            title: 'Structures:',
            desc:
              'Allows grouping of variables of different data types under a single name.',
          },
          {
            id: 2,
            title: 'Classes:',
            desc:
              'A more advanced version of structures, encapsulating data and methods.',
          },
        ],
      },
      {
        id: 3.4,
        title: 'Modifiers:',
        isList: true,
        isExample: false,
        desc: [
          {
            id: 1,
            title: 'const:',
            desc: 'Used to indicate that a variables value cannot be changed.',
          },
          {
            id: 2,
            title: 'volatile:',
            desc: 'Indicates that a variables value can change unexpectedly.',
          },
          {
            id: 2,
            title: 'mutable:',
            desc:
              'Used within classes to allow modification of variables in `const` member functions.',
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: 'Keywords',
    defination:
      'Keywords are reserved words that have special meanings in C++ programming. They cannot be used as identifiers (variable names, function names, etc.). Here are some important keywords in C++:',
    topics: [
      {
        id: 4.1,
        title: 'All information about keywords',
        isList: false,
        isExample: true,
        desc:
          'Understanding data types and keywords is fundamental in C++ programming. Data types allow you to work with different kinds of values, while keywords provide the building blocks for creating logical structures, loops, conditions, and more in your code. A strong grasp of these concepts is essential for writing correct, efficient, and meaningful C++ programs. Feel free to integrate this information into your educational portal to provide learners with a comprehensive understanding of data types and keywords in C++. Adapt the content to suit your websites style and approach, and provide examples to illustrate the concepts effectively.',
        examples: [
          '`auto` , `break` , `case`,  `char`,  `class`, `const`, `continue`, `default`, `delete`, `do`, `double`, `else`, `enum`, `explicit`, `extern` ,`false`, `float`, `for`, `friend` ,`goto`, `if `,`inline`, `int` ,`long` ,`mutable`, `namespace` ,`new`, `nullptr`, `operator`, `private` , `protected` , `public` , `register` , `return` , `short` , `signed` , `sizeof` ,`static`, `struct`, `switch`, `template` ,`this` , `throw` ,`true` ,`try` ,`typedef`, `typename`,`union` ,`unsigned`, `using` ,`virtual`, `void`, `volatile` ,`while`',
        ],
      },
    ],
  },
  {
    id: 5,
    title: 'Operators in C++',
    defination:
      'Operators are symbols that perform specific operations on one or more operands. They are used to manipulate variables and values in expressions.',
    topics: [
      {
        id: 5.1,
        title: 'Arithmetic Operators',
        isList: false,
        isExample: true,
        desc: 'Arithmetic operators perform basic mathematical operations.',
        examples: [
          '`+` (addition), `-` (subtraction), `*` (multiplication), `/` (division), `%` (modulus).',
        ],
      },
      {
        id: 5.2,
        title: 'Comparison Operators',
        isList: false,
        isExample: true,
        desc:
          'Comparison operators compare two values and return a boolean result.',
        examples: [
          '`==` (equal), `!=` (not equal), `<` (less than), `>` (greater than), `<=` (less than or equal), `>=` (greater than or equal).',
        ],
      },
      {
        id: 5.3,
        title: 'Logical Operators',
        isList: false,
        isExample: true,
        desc: 'Logical operators perform logical operations on boolean values.',
        examples: ['`&&` (logical AND), `||` (logical OR), `!` (logical NOT).'],
      },
      {
        id: 5.4,
        title: 'Assignment Operators',
        isList: false,
        isExample: true,
        desc: 'Assignment operators assign values to variables.',
        examples: [
          '`=` (assignment), `+=` (addition assignment), `-=` (subtraction assignment), `*=` (multiplication assignment), `/=` (division assignment), `%=` (modulus assignment).',
        ],
      },
      {
        id: 5.5,
        title: 'Increment and Decrement Operators',
        isList: false,
        isExample: false,
        desc:
          'Increment (`++`) and decrement (`--`) operators increase or decrease the value of a variable by 1.',
      },
      {
        id: 5.6,
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
        id: 5.7,
        title: 'Conditional (Ternary) Operator',
        isList: false,
        isExample: false,
        desc:
          'The ternary operator (`condition ? expr1 : expr2`) returns one of two values based on a condition.',
      },
      {
        id: 5.8,
        title: 'Member Access Operators',
        isList: false,
        isExample: true,
        examples: [
          '`.` (dot) is used to access members of an object.',
          '`->` (arrow) is used to access members of a pointer to an object.',
        ],
      },
      {
        id: 5.9,
        title: 'Pointer Operators',
        isList: false,
        isExample: true,
        examples: [
          '`*` is used to declare a pointer and dereference it to access the value it points to.',
          '`&` is used to get the address of a variable.',
        ],
      },
      {
        id: 5.11,
        title: 'Conditional Operator (null coalescing)',
        isList: false,
        isExample: false,
        desc:
          '`??` provides a default value when the left-hand operand is `nullptr` or equivalent.',
      },
      {
        id: 5.12,
        title: 'Pointer-to-Member Operators',
        isList: false,
        isExample: false,
        desc:
          '`.*` and `->*` are used to access members of an object through a pointer to a member.',
      },
      {
        id: 5.13,
        title: 'Type Casting Operators',
        isList: false,
        isExample: false,
        desc:
          '`static_cast`, `dynamic_cast`, `const_cast`, and `reinterpret_cast` are used to perform type conversions.',
      },
      {
        id: 5.14,
        title: 'Operator Overloading',
        isList: false,
        isExample: false,
        desc:
          'You can define custom behavior for operators with user-defined types.',
      },
    ],
  },
  {
    id: 6,
    title: 'Control Statements',
    defination: '',
    topics: [
      {
        id: 6.1,
        title: 'if...else statement',
        isList: false,
        isExample: false,
        desc:
          'The `if...else` statement is a fundamental control structure in C++ that allows you to make decisions based on conditions. It enables your program to execute different blocks of code depending on whether a specified condition is true or false.',

        code: '/codes/cpp_6_1.txt',
      },
      {
        id: 6.2,
        title: 'Nested if...else statement',
        isList: false,
        isExample: false,
        desc:
          'You can nest `if...else` statements within each other to handle multiple conditions',
        code: '/codes/cpp_6_2.txt',
      },
      {
        id: 6.3,
        title: 'Switch',
        isList: false,
        isExample: false,
        desc:
          'The `switch` statement is another powerful control structure in C++ that provides an efficient way to handle multiple cases or options based on the value of a single expression. Its particularly useful when you want to execute different blocks of code depending on the value of a variable.',
        code: '/codes/cpp_6_3.txt',
      },
      {
        id: 6.4,
        title: 'Loops',
        isList: true,
        desc: [
          {
            id: 1,
            title: 'for loop:',
            desc: 'used for initialization , condition and increment purpose',
            code: '/codes/cpp_6_4_1.txt',
          },
          {
            id: 2,
            title: 'while loop:',
            desc:
              'The `while` loop repeatedly executes a block of code as long as a given condition is true. Its suitable when the number of iterations is not known beforehand.',
            code: '/codes/cpp_6_4_2.txt',
          },
          {
            id: 3,
            title: 'do-while loop:',
            desc:
              'The `do-while` loop is similar to the `while` loop, but it ensures that the code block is executed at least once before checking the condition.',
            code: '/codes/cpp_6_4_3.txt',
          },
        ],
      },
      {
        id: 6.5,
        title: 'Break and Continue',
        isList: true,
        desc: [
          {
            id: 1,
            title: 'Break:',
            desc:
              'The `break` statement is used to exit a loop prematurely when a certain condition is met. It is often employed within loops (such as `for`, `while`, or `do-while`) to terminate the loops execution',
            code: '/codes/cpp_6_5_1.txt',
          },
          {
            id: 2,
            title: 'continue:',
            desc:
              'The `continue` statement is used to skip the remaining code within the current iteration of a loop and proceed to the next iteration. It allows you to bypass certain code blocks and continue with the next loop iteration.',
            code: '/codes/cpp_6_5_2.txt',
          },
          {
            id: 3,
            title: 'do-while loop:',
            desc:
              'The `do-while` loop is similar to the `while` loop, but it ensures that the code block is executed at least once before checking the condition.',
            code: '/codes/cpp_6_5_3.txt',
          },
        ],
      },
    ],
  },
  {
    id: 7,
    title: 'C++ Functions',
    defination:
      'Functions are a fundamental building block in C++ programming. They allow you to encapsulate a block of code that performs a specific task and can be reused throughout your program. Functions help in modularizing your code, improving readability, and promoting code reuse.',
    topics: [
      {
        id: 7.1,
        title: 'Functions syntax',
        isList: false,
        isExample: false,
        desc: 'below is the syntax for C++',
        code: '/codes/cpp_7_1.txt',
      },
      {
        id: 7.2,
        title: 'Functions different terminology',
        isList: true,
        isExample: false,
        desc: [
          {
            id: 1,
            title: 'Return Type:',
            desc:
              ' Specifies the type of value the function returns. Use `void` if the function does not return a value.',
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
        id: 7.3,
        title: 'Recursive Functions',
        isList: false,
        isExample: false,
        desc:
          'A function can call itself, either directly or indirectly through other functions. This is known as recursion.',
        code: '/codes/cpp_7_3.txt',
      },
      {
        id: 7.4,
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
    id: 8,
    title: 'C++ Arrays',
    defination:
      'Arrays are collections of elements of the same data type, stored in contiguous memory locations. They allow you to store and manipulate multiple values under a single variable name. Arrays are widely used to represent lists, sequences, or collections of data.',
    topics: [
      {
        id: 8.1,
        title: 'Declaring and Initializing Arrays:',
        isList: false,
        isExample: false,
        desc:
          'Arrays are declared by specifying the data type of the elements followed by the array name and the number of elements in square brackets (`[]`). You can initialize arrays during declaration.',
        code: '/codes/cpp_8_1.txt',
      },
      {
        id: 8.2,
        title: 'Iterating Over Arrays:',
        isList: false,
        isExample: false,
        desc: 'You can use loops to iterate over array elements.',
        code: '/codes/cpp_8_2.txt',
      },
      {
        id: 8.3,
        title: 'Multidimensional Arrays: ',
        isList: false,
        isExample: false,
        desc:
          'Arrays can have multiple dimensions, such as 2D (matrix), 3D, etc.',
        code: '/codes/cpp_8_3.txt',
      },
      {
        id: 8.4,
        title: 'Passing Arrays to Functions:',
        isList: false,
        isExample: false,
        desc:
          'Arrays can be passed to functions as parameters. However, arrays decay into pointers when passed to functions.',
        code: '/codes/cpp_8_4.txt',
      },
      {
        id: 8.5,
        title: 'Declaring and Initializing Arrays:',
        isList: false,
        isExample: false,
        desc:
          'Arrays are declared by specifying the data type of the elements followed by the array name and the number of elements in square brackets (`[]`). You can initialize arrays during declaration.',
        code: '/codes/cpp_8_5.txt',
      },
    ],
  },
  {
    id: 9,
    title: 'C++ Pointers',
    defination:
      'Pointers are variables that store memory addresses, allowing you to directly access and manipulate data in memory. Pointers are a powerful and essential feature in C++, enabling dynamic memory allocation, data manipulation, and efficient handling of complex data structures.',
    topics: [
      {
        id: 9.1,
        title: 'Declaring and Initializing Pointers:',
        isList: false,
        isExample: false,
        desc: 'Syntax and examples',
        code: '/codes/cpp_9_1.txt',
      },
      {
        id: 9.2,
        title: 'Dereferencing Pointers:',
        isList: false,
        isExample: false,
        dsc:
          'Dereferencing a pointer means accessing the value stored at the memory address pointed to by the pointer. This is done using the dereference operator (`*`).',

        code: '/codes/cpp_9_2.txt',
      },
      {
        id: 9.3,
        title: 'Dereferencing Pointers:',
        isList: false,
        isExample: false,
        dsc:
          'Dereferencing a pointer means accessing the value stored at the memory address pointed to by the pointer. This is done using the dereference operator (`*`).',
        code: '/codes/cpp_9_3.txt',
      },
      {
        id: 9.4,
        title: 'Pointer Arithmetic:',
        isList: false,
        isExample: false,
        dsc:
          'Pointers can be manipulated using arithmetic operations like addition and subtraction. Pointer arithmetic is based on the size of the data type the pointer points to.',
        code: '/codes/cpp_9_4.txt',
      },
      {
        id: 9.5,
        title: 'Dynamic Memory Allocation:',
        isList: false,
        isExample: false,
        dsc:
          'C++ provides operators `new` and `delete` for dynamic memory allocation and deallocation. Dynamic memory allows you to allocate memory at runtime and create data structures with varying sizes.',
        code: '/codes/cpp_9_5.txt',
      },
      {
        id: 9.6,
        title: 'Pointers and Functions: ',
        isList: false,
        isExample: false,
        dsc:
          'You can pass pointers to functions to modify the value of variables outside the function.',
        code: '/codes/cpp_9_6.txt',
      },
      {
        id: 9.7,
        title: 'Pointers and Arrays: ',
        isList: false,
        isExample: false,
        dsc: 'You can navigate an array using pointer arithmetic.',
        code: '/codes/cpp_9_7.txt',
      },
      {
        id: 9.8,
        title: 'Pointers and Strings: ',
        isList: false,
        isExample: false,
        dsc: 'Using Pointers with Strings and Pointer Arithmetic with Strings ',
        code: '/codes/cpp_9_8.txt',
      },
    ],
  },
  {
    id: 10,
    title: 'OOP',
    defination: '',
    topics: [
      {
        id: 10.1,
        title: 'Class',
        isList: false,
        isExample: false,
        desc:
          'A class is a blueprint or template for creating objects. It defines the properties (attributes) and behaviors (methods) that objects of the class will have.',
        code: '/codes/cpp_10_1.txt',
      },
      {
        id: 10.2,
        title: 'Object',
        isList: false,
        isExample: false,
        desc:
          'An object is an instance of a class. It represents a real-world entity and encapsulates data and behavior.',
        code: '/codes/cpp_10_2.txt',
      },
      {
        id: 10.3,
        title: 'Encapsulation',
        isList: false,
        isExample: false,
        desc:
          'Encapsulation is the principle of bundling data (attributes) and methods (functions) that operate on that data into a single unit (class).',
      },
      {
        id: 10.4,
        title: 'Abstraction',
        isList: false,
        isExample: false,
        desc:
          'Abstraction is the process of simplifying complex reality by modeling classes based on relevant attributes and behaviors.',
        code: '/codes/cpp_10_4.txt',
      },
      {
        id: 10.5,
        title: 'Inheritance',
        isList: false,
        isExample: false,
        desc:
          'Inheritance allows you to create a new class (derived class) based on an existing class (base class). The derived class inherits attributes and behaviors from the base class and can also add its own.',
        code: '/codes/cpp_10_5.txt',
      },
      {
        id: 10.6,
        title: 'Polymorphism',
        isList: false,
        isExample: false,
        desc:
          'Polymorphism enables you to use a single interface (method or function) to represent different types of objects. It includes compile-time (function overloading) and runtime (virtual functions) polymorphism',
        code: '/codes/cpp_10_6.txt',
      },
    ],
  },
  {
    id: 11,
    title: 'Constructor and Destructor in C++',
    defination:
      'Constructors and destructors are special member functions in C++ that are used to initialize and clean up objects of a class, respectively. They play a crucial role in the lifecycle of objects',
    topics: [
      {
        id: 11.1,
        title: 'Default Constructor',
        isList: false,
        isExample: false,
        desc:
          'A default constructor is automatically called when an object is created without any arguments. It initializes the objects attributes to default values.',
        code: '/codes/cpp_11_1.txt',
      },
      {
        id: 11.2,
        title: 'Parameterized Constructor',
        isList: false,
        isExample: false,
        desc:
          'A parameterized constructor allows you to provide arguments when creating an object, which are used to initialize the objects attributes.',
        code: '/codes/cpp_11_2.txt',
      },
      {
        id: 11.3,
        title: 'Copy Constructor',
        isList: false,
        isExample: false,
        desc:
          'A copy constructor is used to create a new object that is a copy of an existing object. It is called when an object is initialized with another object of the same class.',
        code: '/codes/cpp_11_3.txt',
      },
      {
        id: 11.4,
        title: 'Destructor',
        isList: false,
        isExample: false,
        desc:
          'A destructor is a special member function that is automatically called when an object is destroyed, typically when it goes out of scope or is explicitly deleted. Destructors are used to perform cleanup operations such as releasing allocated memory.',
        code: '/codes/cpp_11_4.txt',
      },
    ],
  },
  {
    id: 12,
    title: 'Usage of this Keyword',
    defination:
      'The `this` pointer is a special keyword in C++ that represents a pointer to the current instance of the class. It is automatically created and available within non-static member functions. The `this` pointer allows you to access the objects attributes and methods from within the member functions.',
    topics: [
      {
        id: 12.1,
        title: 'Disambiguation:',
        isList: false,
        isExample: false,
        desc:
          'When a member function parameter has the same name as a class attribute, the `this` pointer helps disambiguate between the local parameter and the class attribute.',
        code: '/codes/cpp_12_1.txt',
      },
      {
        id: 12.2,
        title: 'Accessing Attributes:',
        isList: false,
        isExample: false,
        desc:
          'The `this` pointer is used to access the attributes of the current object.',
        code: '/codes/cpp_12_2.txt',
      },
      {
        id: 12.3,
        title: 'Returning Current Object:',
        isList: false,
        isExample: false,
        desc:
          'The `this` pointer is returned by member functions to allow method chaining (also known as cascading).',
        code: '/codes/cpp_12_3.txt',
      },
    ],
  },
  {
    id: 13,
    title: 'Usage of Static Keyword',
    defination:
      'The `static` keyword is a versatile modifier in C++ that is used to define static members, control variable scope, and more.It has different meanings depending on where and how its used.',
    topics: [
      {
        id: 13.1,
        title: 'Static Data Members:',
        isList: false,
        isExample: false,
        desc:
          'A static data member is shared among all objects of the class - It is associated with the class itself, rather than with individual objects. - It is declared with the `static` keyword inside the class declaration.',
        code: '/codes/cpp_13_1.txt',
      },
      {
        id: 13.2,
        title: 'Static Member Functions:',
        isList: false,
        isExample: false,
        desc:
          'A static member function is associated with the class, not with individual objects. - It can be called using the class name without creating objects.- It can only access static data members and other static member functions',
        code: '/codes/cpp_13_2.txt',
      },
    ],
  },
  {
    id: 14,
    title: 'Friend Functions',
    defination:
      'In C++, a friend function is a function that is not a member of a class but is granted access to its private and protected members. Friend functions can be used to enhance encapsulation and allow certain external functions to work closely with a class.',
    topics: [
      {
        id: 14.1,
        title: 'Declaring a Friend Function',
        isList: false,
        isExample: false,
        desc:
          'To declare a friend function, it is usually listed in the class defination using the `friend` keyword.',
        code: '/codes/cpp_14_1.txt',
      },
      {
        id: 14.2,
        title: 'Defining a Friend Function',
        isList: false,
        isExample: false,
        desc:
          'The friend function is defined outside the class, and it can access private members of the class.',
        code: '/codes/cpp_14_2.txt',
      },
      {
        id: 14.3,
        title: 'Accessing Private Members',
        isList: false,
        isExample: false,
        desc:
          'The friend function is defined outside the class, and it can access private members of the class.',
        code: '/codes/cpp_14_3.txt',
      },
    ],
  },
  {
    id: 15,
    title: 'Inheritance in C++',
    defination:
      'Inheritance is a fundamental concept in object-oriented programming that allows a new class (derived class) to inherit properties and behaviors from an existing class (base class). Inheritance promotes code reuse, extensibility, and hierarchical organization of classes.',
    topics: [
      {
        id: 15.1,
        title: 'Base and Derived Classes:',
        isList: false,
        isExample: false,
        desc:
          'The base class is the class whose attributes and methods are inherited by the derived class. - The derived class is the class that inherits the attributes and methods from the base class.',
        code: '/codes/cpp_15_1.txt',
      },
      {
        id: 15.2,
        title: 'Access Control and Inheritance:',
        isList: false,
        isExample: false,
        desc:
          'Inheritance supports access control: `public`, `protected`, and `private` inheritance. - Public inheritance allows derived classes to access public members of the base class.',
        code: '/codes/cpp_15_2.txt',
      },
      {
        id: 15.3,
        title: 'Constructors and Destructors in Inheritance:',
        isList: false,
        isExample: false,
        desc:
          'Constructors and destructors are inherited, but they are not automatically called. - Base class constructors are called before derived class constructors. - Destructors are called in the reverse order of constructors.',
        code: '/codes/cpp_15_3.txt',
      },
      {
        id: 15.4,
        title: 'Order of Constructor Calls with Multiple Inheritance: ',
        isList: false,
        isExample: false,
        desc:
          'When a class inherits from multiple base classes, the order of constructor calls is determined by the order of inheritance in the derived class.',
        code: '/codes/cpp_15_4.txt',
      },
    ],
  },
  {
    id: 16,
    title: 'Aggregation in C++',
    defination:
      'Aggregation is a type of association in object-oriented programming where one class contains or is composed of other classes. It represents a "has-a" relationship, where one class encapsulates another class as a part of its implementation. Aggregation is a form of composition but with a weaker relationship, as the contained class can exist independently of the container class',
    topics: [
      {
        id: 16.1,
        title: 'Aggregation Relationships',
        isList: false,
        isExample: false,
        desc:
          'In aggregation, one class is a part of another class, but it can exist independently. - Aggregation represents a weaker coupling compared to composition.',
        code: '/codes/cpp_16_1.txt',
      },
      {
        id: 16.2,
        title: 'Accessing Aggregated Objects:',
        isList: false,
        isExample: false,
        desc:
          'Objects within an aggregation relationship are accessed directly from the containing object.',
        code: '/codes/cpp_16_2.txt',
      },
      {
        id: 16.3,
        title: 'Lifetime Management:',
        isList: false,
        isExample: false,
        desc:
          'Aggregated objects are managed by the containing object. - They are typically created and destroyed together with the containing object.',
        code: '/codes/cpp_16_3.txt',
      },
    ],
  },
  {
    id: 17,
    title: 'Overloading in C++',
    defination: 'It is type of Polymorphism',
    topics: [
      {
        id: 17.1,
        title: 'Function Overloading',
        isList: false,
        isExample: false,
        desc:
          'Function overloading is a feature in C++ that allows multiple functions in the same scope to have the same name but different parameter lists. This enables you to define multiple functions with the same name that perform different tasks based on the number or types of arguments.',
        code: '/codes/cpp_17_1.txt',
      },
    ],
  },
  {
    id: 18,
    title: 'Overriding in C++',
    defination: 'Next type of polymorphism',
    topics: [
      {
        id: 18.1,
        title: 'Function Overriding',
        isList: false,
        isExample: false,
        desc:
          'To override a method from the base class, the method in the derived class must have the same name, return type, and parameters (including const qualifiers). - Use the `virtual` keyword in the base class method declaration to indicate that it can be overridden.',
        code: '/codes/cpp_18_1.txt',
      },
      {
        id: 18.2,
        title: 'Invoking Overridden Methods:',
        isList: false,
        isExample: false,
        desc:
          'Overridden methods can be invoked using base class pointers or references. - The method implementation of the derived class will be called based on the actual object type.',
        code: '/codes/cpp_18_2.txt',
      },
      {
        id: 18.3,
        title: 'Using `virtual` Destructors',
        isList: false,
        isExample: false,
        desc:
          'When using polymorphism and function overriding, its important to define a virtual destructor in the base class. - This ensures that the correct destructor is called for objects of derived classes when they are deleted through a base class pointer',
        code: '/codes/cpp_18_3.txt',
      },
    ],
  },
  {
    id: 19,
    title: 'Virtual Functions',
    defination:
      'A virtual function is a function declared in a base class with the `virtual` keyword, indicating that it can be overridden by derived classes. Virtual functions enable dynamic polymorphism, allowing the appropriate method to be called based on the actual object type at runtime.',

    topics: [
      {
        id: 19.1,
        title: 'Defining Virtual Functions',
        isList: false,
        isExample: false,
        desc:
          'Virtual functions are declared in the base class and optionally overridden in derived classes.- The `virtual` keyword is used in both the base and derived class methods.',
        code: '/codes/cpp_19_1.txt',
      },
      {
        id: 19.2,
        title: 'Invoking Virtual Functions',
        isList: false,
        isExample: false,
        desc:
          'Virtual functions are invoked through base class pointers or references. - The method implementation of the derived class is called based on the actual object type.',
        code: '/codes/cpp_19_2.txt',
      },
      {
        id: 19.3,
        title: 'Late Binding and Dynamic Polymorphism',
        isList: false,
        isExample: false,
        desc:
          'Virtual functions support late binding, also known as dynamic binding. - The appropriate function implementation is determined at runtime based on the objects actual type.',
        code: '/codes/cpp_19_3.txt',
      },
    ],
  },
  {
    id: 20,
    title: 'C++ Abstraction',
    defination:
      'Abstraction is a key principle in object-oriented programming that involves hiding complex implementation details and exposing only the essential features of an object. It allows you to focus ',
    topics: [
      {
        id: 20.1,
        title: 'Data Abstraction',
        isList: false,
        isExample: false,
        desc:
          'Data abstraction involves representing essential properties and behaviors of an object while hiding the underlying implementation details. - It is achieved through classes and their access specifiers(`public`, `protected`, `private`).',
        code: '/codes/cpp_20_1.txt',
      },
      {
        id: 20.2,
        title: 'Interfaces',
        isList: false,
        isExample: false,
        desc:
          'An interface defines a contract that classes must adhere to by implementing its methods. - C++ does not have native support for interfaces, but they can be emulated using abstract classes with pure virtual functions',
        code: '/codes/cpp_20_2.txt',
      },
    ],
  },
  {
    id: 21,
    title: 'Namespaces in C++',
    defination:
      'A namespace is a feature in C++ that helps organize code by grouping related classes, functions, and variables under a common name. Namespaces prevent naming conflicts and provide a way to create modular and organized code.',
    topics: [
      {
        id: 21.1,
        title: 'Defining a Namespace',
        isList: false,
        isExample: false,
        desc:
          'A namespace is defined using the `namespace` keyword, followed by the namespace name.',
        code: '/codes/cpp_21_1.txt',
      },
      {
        id: 21.2,
        title: 'Using a Namespace',
        isList: false,
        isExample: false,
        desc:
          'Members of a namespace are accessed using the `namespace::member` syntax.',
        code: '/codes/cpp_21_2.txt',
      },
      {
        id: 21.3,
        title: 'Nested Namespaces',
        isList: false,
        isExample: false,
        desc:
          'Namespaces can be nested within other namespaces to create a hierarchical organization.',
        code: '/codes/cpp_21_3.txt',
      },
    ],
  },
  {
    id: 22,
    title: 'Strings in C++',
    defination:
      'A string is a sequence of characters that represents text in C++. The Standard C++ library provides the `std::string` class to handle strings, making string manipulation and manipulation much easier compared to C-style character arrays.',
    topics: [
      {
        id: 22.1,
        title: 'Creating and Initializing Strings:',
        isList: false,
        isExample: false,
        desc:
          'Strings can be created using the `std::string` class.- They can be initialized using C-style strings, character arrays, or other `std::string` objects.',
        code: '/codes/cpp_22_1.txt',
      },
      {
        id: 22.2,
        title: 'Accessing and Modifying Strings:',
        isList: false,
        isExample: false,
        desc:
          'Individual characters within a string can be accessed using the subscript operator `[]`. - The `at()` function can be used for bounds checking. - Strings can be modified by assigning new values or using string manipulation functions.',
        code: '/codes/cpp_22_2.txt',
      },
      {
        id: 22.3,
        title: 'String Functions and Methods:',
        isList: false,
        isExample: false,
        desc:
          'The `std::string` class provides a wide range of methods for string manipulation, such as finding substrings, concatenation, comparison, and more.',
        code: '/codes/cpp_22_3.txt',
      },
    ],
  },
  {
    id: 23,
    title: 'Exception Handling',
    defination:
      'Exception handling is a mechanism in C++ that allows you to handle runtime errors and abnormal situations in a structured and controlled manner. It enables you to gracefully handle errors, prevent program crashes, and provide meaningful feedback to users.',
    topics: [
      {
        id: 23.1,
        title: 'Throwing Exceptions',
        isList: false,
        isExample: false,
        desc:
          'Exceptions are thrown using the `throw` keyword. You can throw various types of objects, including built-in types and custom classes.',
        code: '/codes/cpp_23_1.txt',
      },
      {
        id: 23.2,
        title: 'Catching Exceptions',
        isList: false,
        isExample: false,
        desc:
          'Exceptions are caught using `try` and `catch` blocks. Use `catch` blocks to handle specific exceptions or their base classes.',
        code: '/codes/cpp_23_2.txt',
      },
      {
        id: 23.3,
        title: 'Creating Custom Exceptions',
        isList: false,
        isExample: false,
        desc:
          'You can create custom exception classes by deriving from `std::exception` or its subclasses.',
        code: '/codes/cpp_23_3.txt',
      },
    ],
  },
  {
    id: 24,
    title: 'File Handling',
    defination:
      'File handling in C++ allows you to read and write data to and from files. Its an essential feature for tasks such as data storage, configuration management, and data processing.',
    topics: [
      {
        id: 24.1,
        title: 'Opening and Closing Files',
        isList: false,
        isExample: false,
        desc:
          'Files can be opened using the `std::ifstream` (input) or `std::ofstream` (output) classes. After use, files should be closed using the `close()` method.',
        code: '/codes/cpp_24_1.txt',
      },
      {
        id: 24.2,
        title: 'Reading and Writing Data',
        isList: false,
        isExample: false,
        desc:
          'Data can be read from files using methods like `>>` (input stream) for formatted reading.Data can be written to files using methods like `<<` (output stream) for formatted writing.',
        code: '/codes/cpp_24_2.txt',
      },
      {
        id: 24.3,
        title: 'Checking End of File',
        isList: false,
        isExample: false,
        desc:
          'Use the `eof()` function to check for the end of the file while reading.',
        code: '/codes/cpp_24_3.txt',
      },
    ],
  },
  {
    id: 25,
    title: 'C++ STL',
    defination:
      'The Standard Template Library (STL) is a collection of template classes and functions in C++ that provide commonly used data structures, algorithms, and utilities. The STL promotes code reusability, efficiency, and maintainability.',
    topics: [
      {
        id: 25.1,
        title: 'Containers',
        isList: false,
        isExample: false,
        desc:
          'Containers are data structures that store and manage collections of objects. Examples include `std::vector`, `std::list`, `std::map`, and `std::set`.',
        code: '/codes/cpp_25_1.txt',
      },
      {
        id: 25.2,
        title: 'Algorithms',
        isList: false,
        isExample: false,
        desc:
          'Algorithms are generic functions that perform various operations on containers. Examples include `std::sort`, `std::find`, `std::count`, and `std::for_each`.',
        code: '/codes/cpp_25_2.txt',
      },
      {
        id: 25.3,
        title: 'Iterators',
        isList: false,
        isExample: false,
        desc:
          'Iterators provide a way to access and traverse elements in containers.They work similarly to pointers and can be used with algorithms.',
        code: '/codes/cpp_25_3.txt',
      },
      {
        id: 25.4,
        title: 'Sequence Containers',
        isList: false,
        isExample: false,
        desc:
          'Sequence containers store elements in a linear order, providing various insertion and deletion operations. Examples include `std::vector`, `std::deque`, and `std::list`.',
        code: '/codes/cpp_25_4.txt',
      },
      {
        id: 25.5,
        title: 'Stacks and Queues',
        isList: false,
        isExample: false,
        desc:
          '`std::stack` and `std::queue` are adapters built on top of sequence containers.They provide specialized interfaces for stack (Last-In-First-Out) and queue (First-In-First-Out) operations.',
        code: '/codes/cpp_25_5.txt',
      },
      {
        id: 25.6,
        title: 'Priority Queues',
        isList: false,
        isExample: false,
        desc:
          '`std::priority_queue` is an adapter for implementing a priority queue using a heap. It maintains elements in a way that allows efficient retrieval of the highest priority element.',
        code: '/codes/cpp_25_6.txt',
      },
      {
        id: 25.7,
        title: 'Benefits of STL',
        isList: false,
        isExample: false,
        desc:
          'The STL promotes code reuse, efficiency, and maintainability. It provides a consistent framework for data manipulation, regardless of the underlying data structure.- STL components are well-tested, optimized, and adhere to best practices.',
      },
    ],
  },
]
