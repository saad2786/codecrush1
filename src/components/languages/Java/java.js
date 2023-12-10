export const Java = [
  {
    id: 1,
    title: 'Introduction to Java',
    definition: '',
    topics: [
      {
        id: 1.1,
        title: 'Introduction',
        isList: false,
        desc:
          'Java is a powerful, versatile, and widely-used programming language that has made a significant impact on the software development landscape. Developed by Sun Microsystems (now owned by Oracle Corporation), Java was released in 1995 with the goal of providing a platform-independent programming language for building robust and secure applications.',
      },
      {
        id: 1.2,
        title: 'Features',
        isList: true,
        desc: [
          {
            id: 1,
            title: 'Platform Independence:',
            desc:
              'One of Javas most remarkable features is its platform independence. Java code is compiled into an intermediate form called bytecode, which can run on any system equipped with a Java Virtual Machine (JVM). This "write once, run anywhere" capability has been a driving force behind Javas popularity.',
          },
          {
            id: 2,
            title: 'Object-Oriented Nature:',
            desc:
              'Java is a true object-oriented programming (OOP) language. This means that Java programs are structured around classes and objects, promoting modularity, reusability, and easier maintenance of code.',
          },
          {
            id: 3,
            title: 'Syntax Simplicity:',
            desc:
              'Javas syntax is derived from C++ but with modifications that make it more accessible and user-friendly. Its syntax is designed to be straightforward and easy to read, which contributes to its learnability and adoption.',
          },
          {
            id: 4,
            title: 'Memory Management and Garbage Collection:',
            desc:
              'Java simplifies memory management by incorporating automatic memory allocation and garbage collection. This process frees developers from the burden of explicitly deallocating memory, reducing the likelihood of memory leaks and buffer overflows.',
          },
          {
            id: 5,
            title: 'Exception Handling:',
            desc:
              '   Java includes a comprehensive exception handling mechanism that enhances the robustness of applications. This system allows developers to handle various types of runtime errors gracefully, leading to more stable software.',
          },
          {
            id: 6,
            title: 'Multithreading and Concurrency:',
            desc:
              'Java provides built-in support for multithreading, enabling developers to create applications that can efficiently execute multiple tasks concurrently. This is crucial for creating responsive software and utilizing modern multi-core processors effectively.',
          },
          {
            id: 7,
            title: 'Rich Standard Library:',
            desc:
              'Java comes with an extensive standard library, known as the Java API. This library provides pre-built classes and methods that cover a wide range of tasks, from basic I/O operations to advanced data structures and networking.',
          },
          {
            id: 8,
            title: 'Security and Robustness:',
            desc:
              'Javas design emphasizes security and robustness. The languages architecture includes features that help prevent common programming errors like buffer overflows and pointer manipulation, making Java applications less vulnerable to security breaches.',
          },
          {
            id: 9,
            title: 'Vibrant Ecosystem:',
            desc:
              'Java has a thriving ecosystem of tools, frameworks, and libraries that cater to various application domains. From enterprise applications built using the Spring framework to Android app development with the Android SDK, Javas versatility is showcased across different platforms.',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'Variables',
    definition:
      'Variables are fundamental components of any programming language. In Java, variables are used to store and manipulate data. They are named memory locations that can hold values of different types. Here is a comprehensive look at Java variables',
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
              'Java supports various data types, including: int: Integer type for whole numbers. double: Double- precision floating - point type for decimal numbers. char: Character type for single characters. bool: Boolean type representing true or false values. string: A sequence of characters.',
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
        title: 'Scope life time',
        isList: true,
        desc: [
          {
            id: 1,
            title: 'Scope Resolution Operator:',
            desc:
              "When a local variable has the same name as a global variable, the scope resolution operator '::' can be used to differentiate between them.",
          },
          {
            id: 2,
            title: 'Lifetime of Variables:',
            desc:
              "Local variables have a lifetime tied to their scope. Global variables have a lifetime throughout the program's execution. Static variables have a lifetime that extends beyond their scope.",
          },
        ],
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
        id: 2.5,
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
      'Java supports a variety of data types that define the kind of values a variable can hold and the operations that can be performed on them. Heres an overview of some commonly used data types:',
    topics: [
      {
        id: 3.1,
        title: 'Fundamental Data Types:',
        isList: false,
        isExample: false,
        desc:
          'int: Represents integer values. double: Represents double-precision floating-point numbers. float: Represents single-precision floating-point numbers. char: Represents individual characters. bool: Represents Boolean values (`true` or `false`).',
      },
      {
        id: 3.2,
        title: 'Derived Data Types:',
        isList: false,
        isExample: false,
        desc:
          ' Arrays: A collection of elements of the same data type. Pointers: Variables that store memory addresses. References: An alias for an existing variable. Enums: User-defined data types representing a set of named values',
      },
      {
        id: 3.3,
        title: 'User-Defined Data Types:',
        isList: false,
        isExample: false,
        desc:
          ' Structures: Allows grouping of variables of different data types under a single name. Classes: A more advanced version of structures, encapsulating data and methods.',
      },
      {
        id: 3.4,
        title: 'Modifiers:',
        isList: false,
        isExample: false,
        desc:
          ' const: Used to indicate that a variables value cannot be changed. mutable: Used within classes to allow modification of variables in `const` member functions.',
      },
    ],
  },
  {
    id: 4,
    title: 'Keywords',
    definition:
      'Keywords are reserved words that have special meanings in Java programming. They cannot be used as identifiers (variable names, function names, etc.).',
    topics: [
      {
        id: 4.1,
        title: 'All information about keywords',
        isList: false,
        isExample: true,
        desc:
          'Java keywords are reserved words that have predefined meanings in the Java programming language. They cannot be used as identifiers like variable names, class names, or method names. Here is a comprehensive list of Java keywords along with brief explanations of each:',
        examples: [
          '`auto` , `break` , `case`,  `char`,  `class`, `const`, `continue`, `default`, `delete`, `do`, `double`, `else`, `enum`, `explicit`, `extern` ,`false`, `float`, `for`, `friend` ,`goto`, `if `,`inline`, `int` ,`long` ,`mutable`, `namespace` ,`new`, `nullptr`, `operator`, `private` , `protected` , `public` , `register` , `return` , `short` , `signed` , `sizeof` ,`static`, `struct`, `switch`, `template` ,`this` , `throw` ,`true` ,`try`, `typename`,`union` ,`unsigned`, `void`, `volatile` ,`while`',
        ],
      },
    ],
  },
  {
    id: 5,
    title: 'Operators in Java',
    definition:
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
        title: 'Conditional Operator (null coalescing)',
        isList: false,
        isExample: false,
        desc:
          '`??` provides a default value when the left-hand operand is `nullptr` or equivalent.',
      },
    ],
  },
  {
    id: 6,
    title: 'Control Statements',
    definition: '',
    topics: [
      {
        id: 6.1,
        title: 'if...else statement',
        isList: false,
        isExample: false,
        desc:
          'The `if...else` statement is a fundamental control structure in java that allows you to make decisions based on conditions. It enables your program to execute different blocks of code depending on whether a specified condition is true or false.',
        code: '/codes/java_6_1.txt',
      },
      {
        id: 6.2,
        title: 'Nested if...else statement',
        isList: false,
        isExample: false,
        desc:
          'You can nest `if...else` statements within each other to handle multiple conditions',
        code: '/codes/java_6_2.txt',
      },
      {
        id: 6.3,
        title: 'Switch',
        isList: false,
        isExample: false,
        desc:
          'The `switch` statement is another powerful control structure in Java that provides an efficient way to handle multiple cases or options based on the value of a single expression. Its particularly useful when you want to execute different blocks of code depending on the value of a variable.',
        code: '/codes/java_6_3.txt',
      },
      {
        id: 6.4,
        title: 'Loops',
        isList: true,
        desc: [
          {
            id: 1,
            title: 'for loop',
            desc: 'used for initialization , condition and increment purpose',
            code: '/codes/java_6_4_1.txt',
          },
          {
            id: 2,
            title: 'while loop',
            desc:
              'The `while` loop repeatedly executes a block of code as long as a given condition is true. Its suitable when the number of iterations is not known beforehand.',
            code: '/codes/java_6_4_2.txt',
          },
          {
            id: 3,
            title: 'do-while loop',
            desc:
              'The `do-while` loop is similar to the `while` loop, but it ensures that the code block is executed at least once before checking the condition.',
            code: '/codes/java_6_4_3.txt',
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
            title: 'Break',
            desc:
              'The `break` statement is used to exit a loop prematurely when a certain condition is met. It is often employed within loops (such as `for`, `while`, or `do-while`) to terminate the loops execution',
            code: '/codes/java_6_5_1.txt',
          },
          {
            id: 2,
            title: 'continue',
            desc:
              'The `continue` statement is used to skip the remaining code within the current iteration of a loop and proceed to the next iteration. It allows you to bypass certain code blocks and continue with the next loop iteration.',
            code: '/codes/java_6_5_2.txt',
          },
        ],
      },
    ],
  },
  {
    id: 7,
    title: 'Java Functions',
    definition:
      'Functions are a fundamental building block in Java programming. They allow you to encapsulate a block of code that performs a specific task and can be reused throughout your program. Functions help in modularizing your code, improving readability, and promoting code reuse.',
    topics: [
      {
        id: 7.1,
        title: 'Functions syntax',
        isList: false,
        isExample: false,
        desc: 'below is the syntax for Java',
        code: '/codes/java_7_1.txt',
      },
      {
        id: 7.2,
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
        id: 7.3,
        title: 'Recursive Functions',
        isList: false,
        isExample: false,
        desc:
          'A function can call itself, either directly or indirectly through other functions. This is known as recursion.',
        code: '/codes/java_7_3.txt',
      },
      {
        id: 7.4,
        title: 'Importance of Functions',
        isList: true,
        isExample: true,
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
    title: 'Java Array',
    definition:
      'An array in Java is a data structure that allows you to store a fixed number of elements of the same type. Arrays provide a way to efficiently manage and manipulate a collection of related data items.',
    topics: [
      {
        id: 8.1,
        title: 'Declaration and Initialization:',
        isList: false,
        isExample: false,
        desc:
          'Arrays are declared using square brackets `[]`. They can be initialized during declaration or later using the `new` keyword.',
        code: '/codes/java_8_1.txt',
      },
      {
        id: 8.2,
        title: 'Accessing Elements:',
        isList: false,
        isExample: false,
        desc:
          'Array elements are accessed using their index, which starts from 0 and goes up to `length - 1`.',
        code: '/codes/java_8_2.txt',
      },
      {
        id: 8.3,
        title: 'Array Length:',
        isList: false,
        isExample: false,
        desc:
          'The `length` property of an array gives the number of elements in the array.',
        code: '/codes/java_8_3.txt',
      },
      {
        id: 8.4,
        title: 'Iterating Over Arrays:',
        isList: false,
        isExample: false,
        desc:
          'You can use loops like `for` or `foreach` to iterate over array elements',
        code: '/codes/java_8_4.txt',
      },
      {
        id: 8.5,
        title: 'Array of Objects:',
        isList: false,
        isExample: false,
        desc:
          'Arrays are declared by specifying the data type of the elements followed by the array name and the number of elements in square brackets (`[]`). You can initialize arrays during declaration.',
        code: '/codes/java_8_5.txt',
      },
      {
        id: 8.6,
        title: 'Arrays vs. ArrayLists',
        isList: false,
        isExample: false,
        desc:
          'While arrays provide efficient direct access to elements, ArrayLists offer dynamic resizing and additional methods for managing collections. ArrayLists can grow or shrink dynamically, which is useful when the number of elements is not fixed.',
        code: '/codes/java_8_6.txt',
      },
    ],
  },
  {
    id: 9,
    title: 'Object-Oriented Programming (OOP) in Java',
    definition:
      'Object-Oriented Programming is a programming paradigm that emphasizes the use of objects to model real-world entities and their interactions. Java is a powerful object-oriented programming language that implements OOP concepts.',
    topics: [
      {
        id: 9.1,
        title: 'Class',
        isList: false,
        isExample: false,
        desc:
          'A class is a blueprint or template for creating objects. It defines the properties (attributes) and behaviors (methods) that objects of the class will have.',
        code: '/codes/java_9_1.txt',
      },
      {
        id: 9.2,
        title: 'Encapsulation',
        isList: false,
        isExample: false,
        desc:
          '- Encapsulation is the bundling of data (attributes) and methods (functions) that operate on that data into a single unit, known as a class. It helps hide the internal details of a class and provides controlled access through methods',
      },
      {
        id: 9.3,
        title: 'Abstraction',
        isList: false,
        isExample: false,
        desc:
          'Abstraction is the process of simplifying complex reality by modeling classes based on the essential characteristics of an object. It allows you to create abstract classes and interfaces to provide a blueprint for subclasses.',
        code: '/codes/java_9_3.txt',
      },
      {
        id: 9.4,
        title: 'Inheritance',
        isList: false,
        isExample: false,
        desc:
          '- Inheritance is a mechanism by which a class can inherit the attributes and behaviors of another class (base or parent class). It promotes code reusability and establishes an "is-a" relationship between classes',
        code: '/codes/java_9_4.txt',
      },
      {
        id: 9.5,
        title: 'Polymorphism',
        isList: false,
        isExample: false,
        desc:
          '- Polymorphism allows objects of different classes to be treated as objects of a common superclass. It enables dynamic method dispatch, where the appropriate method is chosen based on the runtime type of the object.',
        code: '/codes/java_9_5.txt',
      },
    ],
  },
  {
    id: 10,
    title: 'Constructor and Destructor in Java',
    definition:
      'Constructors and destructors are special member functions in Java that are used to initialize and clean up objects of a class, respectively. They play a crucial role in the lifecycle of objects',
    topics: [
      {
        id: 10.1,
        title: 'Default Constructor',
        isList: false,
        isExample: false,
        desc:
          'A default constructor is automatically called when an object is created without any arguments. It initializes the objects attributes to default values.',
        code: '/codes/java_10_1.txt',
      },
      {
        id: 10.2,
        title: 'Parameterized Constructor',
        isList: false,
        isExample: false,
        desc:
          'A parameterized constructor allows you to provide arguments when creating an object, which are used to initialize the objects attributes.',
        code: '/codes/java_10_2.txt',
      },
      {
        id: 10.3,
        title: 'Destructor',
        isList: false,
        isExample: false,
        desc:
          'A destructor is a special member function that is automatically called when an object is destroyed, typically when it goes out of scope or is explicitly deleted. Destructors are used to perform cleanup operations such as releasing allocated memory.',
      },
      {
        id: 10.4,
        title: 'Garbage Collector',
        isList: false,
        isExample: false,
        desc:
          'The Java Virtual Machine (JVM) includes a garbage collector that automatically manages memory.It identifies objects that are no longer referenced by any part of the program and frees the memory occupied by these objects.',
      },
    ],
  },
  {
    id: 11,
    title: 'Usage of this Keyword',
    definition:
      'The `this` keyword in Java refers to the current instance of the class in which it is used. It is a reference to the object on which the method was invoked or the constructor was called. The primary purpose of `this` is to differentiate between instance variables and local variables that share the same name.',
    topics: [
      {
        id: 11.1,
        title: 'To Access Instance Variables:',
        isList: false,
        isExample: false,
        desc:
          'When an instance variable has the same name as a local variable or parameter, using `this` helps distinguish between them',
        code: '/codes/java_11_1.txt',
      },
      {
        id: 11.2,
        title: 'To Invoke Another Constructor:',
        isList: false,
        isExample: false,
        desc:
          'A constructor can call another constructor using `this()`. This is particularly useful when there are overloaded constructors',
        code: '/codes/java_11_2.txt',
      },
      {
        id: 11.3,
        title: 'To Return the Current Object:',
        isList: false,
        isExample: false,
        desc:
          'In methods that return the current instance (for method chaining), you can return `this`.',
        code: '/codes/java_11_3.txt',
      },
    ],
  },
  {
    id: 12,
    title: 'Usage of Static Keyword',
    definition:
      'In Java, the `static` keyword is used to define class-level members, methods, and blocks that belong to the class itself rather than instances of the class. These members are shared among all instances of the class and can also be accessed without creating an instance.',
    topics: [
      {
        id: 12.1,
        title: 'Static Variables:',
        isList: false,
        isExample: false,
        desc:
          'Static variables are shared among all instances of a class.They are initialized only once, when the class is loaded.They are often used for constants, counters, or attributes shared among all instances',
        code: '/codes/java_12_1.txt',
      },
      {
        id: 12.2,
        title: 'Static Methods:',
        isList: false,
        isExample: false,
        desc:
          '- Static methods belong to the class and are not associated with any specific instance. They can be called using the class name without creating an object. Static methods can only directly access other static members.',
        code: '/codes/java_12_2.txt',
      },
    ],
  },
  {
    id: 13,
    title: 'Inheritance in Java',
    definition:
      'Inheritance is one of the fundamental concepts of object-oriented programming (OOP) that allows a class to inherit the properties and behaviors of another class. The class that inherits is called the subclass (or derived class), and the class being inherited from is called the superclass (or base class).',
    topics: [
      {
        id: 13.1,
        title: 'Access to Members:',
        isList: false,
        isExample: false,
        desc:
          'Subclasses can access public and protected members of the superclass (and package-private members if the subclasses are in the same package).',
      },
      {
        id: 13.2,
        title: 'Overriding Methods:',
        isList: false,
        isExample: false,
        desc:
          'Subclasses can provide their own implementation for methods inherited from the superclass. This is known as method overriding.',
      },
      {
        id: 13.3,
        title: 'Code Reusability:',
        isList: false,
        isExample: false,
        desc:
          'Inheritance promotes code reuse by allowing subclasses to inherit attributes and methods from the superclass. This reduces redundancy and enhances maintainability',
      },
    ],
  },
  {
    id: 14,
    title: 'Aggregation in Java',
    definition:
      'Aggregation is a relationship between two classes that describes a "whole-part" or "has-a" relationship. It is a type of association where one class (the whole) contains objects of another class (the parts) as its attributes. Aggregation represents a looser coupling compared to composition, allowing parts to exist independently of the whole.',
    topics: [
      {
        id: 14.1,
        title: '"Has-A" Relationship:',
        isList: false,
        isExample: false,
        desc:
          'Aggregation models a "has-a" relationship, where a class contains instances of another class.',
      },
      {
        id: 14.2,
        title: 'Loose Coupling:',
        isList: false,
        isExample: false,
        desc:
          'Unlike composition, aggregated objects can exist independently of the containing class.',
      },
      {
        id: 14.3,
        title: 'Shared Ownership:',
        isList: false,
        isExample: false,
        desc:
          'Aggregated objects are typically owned by multiple entities. When the owner is destroyed, the owned objects are not necessarily destroyed.',
      },
      {
        id: 14.4,
        title: 'Multiplicities:',
        isList: false,
        isExample: false,
        desc:
          'Aggregation can have different multiplicities, such as one-to-one, one-to-many, or many-to-many.',
      },
      {
        id: 14.5,
        title: 'Example:',
        isList: false,
        isExample: false,
        desc: '',
        code: '/codes/java_14_5.txt',
      },
    ],
  },
  {
    id: 15,
    title: 'Polymorphism in Java',
    definition:
      'Polymorphism is a key concept in object-oriented programming that allows objects of different classes to be treated as objects of a common superclass. It enables code to work with objects in a more general way, promoting flexibility and code reuse. Polymorphism is achieved through method overriding and method overloading',
    topics: [
      {
        id: 15.1,
        title: 'Method Overloading',
        isList: false,
        isExample: false,
        desc:
          '   Method overloading allows a class to have multiple methods with the same name but different parameter lists. The compiler determines which method to call based on the arguments passed during the method call.',
        code: '/codes/java_15_1.txt',
      },
      {
        id: 15.2,
        title: 'Method Overriding',
        isList: false,
        isExample: false,
        desc:
          'Method overriding occurs when a subclass provides a specific implementation for a method that is already defined in its superclass. The method in the subclass must have the same name, return type, and parameters as the method in the superclass.',
        code: '/codes/java_15_2.txt',
      },
      {
        id: 15.3,
        title: 'Benefits of Polymorphism',
        isList: false,
        isExample: false,
        desc:
          'Code Flexibility: Polymorphism allows you to write code that works with different types of objects without knowing their specific implementations. Code Reusability: Polymorphism encourages reusability through shared interfaces and common behaviors.Extensibility: New classes can be easily added to a program without affecting existing code that relies on polymorphism. ',
      },
    ],
  },
  {
    id: 16,
    title: 'Abstraction in Java',
    definition:
      'Abstraction is a fundamental concept in object-oriented programming that allows you to define the essential characteristics of an object while hiding the unnecessary details. It provides a way to represent real-world entities in a simplified manner.',

    topics: [
      {
        id: 16.1,
        title: 'Abstract Class',
        isList: false,
        isExample: false,
        dsc:
          'An abstract class is a class that cannot be instantiated on its own and is meant to be subclassed. It can contain both abstract and concrete methods. Abstract methods are declared without an implementation and must be overridden by concrete subclasses',
        code: '/codes/java_16_1.txt',
      },
      {
        id: 16.2,
        title: 'Interface',
        isList: false,
        isExample: false,
        dsc:
          'An interface is a collection of abstract methods that define a contract that implementing classes must adhere to. Interfaces are used to achieve multiple inheritance and to provide a common set of methods that classes can implement.',
        code: '/codes/java_16_2.txt',
      },
      {
        id: 16.3,
        title: 'Abstract Class vs Interface',
        isList: false,
        isExample: false,
        dsc:
          'When to Use Abstract Classes - When you want to provide a common base with shared functionality for a group of related subclasses. - When you want to provide default implementations for some methods in addition to abstract methods. When to Use Interfaces:- When you want to define a contract that multiple unrelated classes can adhere to- When you want to achieve multiple inheritance, as a class can implement multiple interfaces',
      },
    ],
  },
  {
    id: 17,
    title: 'Java Strings',
    definition:
      'A string in Java is a sequence of characters. Strings are widely used to represent text-based data and provide various methods for manipulating and processing text.',
    topics: [
      {
        id: 17.1,
        title: 'String Declaration',
        isList: false,
        isExample: false,
        desc:
          'Strings can be declared using the `String` class. You can initialize strings using double quotes.',
        code: '/codes/java_17_1.txt',
      },
      {
        id: 17.2,
        title: 'String Concatenation',
        isList: false,
        isExample: false,
        desc:
          'You can concatenate strings using the `+` operator or the `concat()` method.',
        code: '/codes/java_17_2.txt',
      },
      {
        id: 17.3,
        title: 'String Indexing',
        isList: false,
        isExample: false,
        desc:
          'Characters in a string can be accessed using zero-based indexing.',
        code: '/codes/java_17_3.txt',
      },
      {
        id: 17.4,
        title: 'String Case Conversion',
        isList: false,
        isExample: false,
        desc:
          'Strings can be converted to uppercase and lowercase using `toUpperCase()` and `toLowerCase()` methods.',
        code: '/codes/java_17_4.txt',
      },
      {
        id: 17.5,
        title: 'String Substring',
        isList: false,
        isExample: false,
        desc:
          'You can extract substrings using the `substring()` method, which takes a start and optionally an end index.',
        code: '/codes/java_17_5.txt',
      },
      {
        id: 17.6,
        title: 'String Splitting',
        isList: false,
        isExample: false,
        desc:
          'The `split()` method splits a string into an array of substrings based on a delimiter.',
        code: '/codes/java_17_6.txt',
      },
      {
        id: 17.7,
        title: 'String Formatting',
        isList: false,
        isExample: false,
        desc:
          'Strings can be formatted using the `String.format()` method or the newer `printf()` method.',
        code: '/codes/java_17_7.txt',
      },
      {
        id: 17.8,
        title: 'StringBuilder',
        isList: false,
        isExample: false,
        desc:
          '`StringBuilder` is a non-thread-safe class introduced in Java 5. It provides fast and efficient string manipulation operations. Because it is not synchronized, it is recommended to use `StringBuilder` in single-threaded scenarios',
        code: '/codes/java_17_8.txt',
      },
      {
        id: 17.9,
        title: 'StringBuffer',
        isList: false,
        isExample: false,
        desc:
          '`StringBuffer` is a thread-safe class that performs the same functions as `StringBuilder`. It was introduced in Java 1.0 and is synchronized, making it suitable for multi-threaded scenarios where thread safety is important',
        code: '/codes/java_17_9.txt',
      },
      {
        id: 17.11,
        title: 'StringTokenizer',
        isList: false,
        isExample: false,
        desc:
          'The `StringTokenizer` class allows you to break a string into tokens based on specified delimiters. It is helpful when you need to split a string into parts for processing.',
        code: '/codes/java_17_11.txt',
      },
    ],
  },
  {
    id: 18,
    title: 'Exception Handling',
    definition:
      'Exception handling is a mechanism in Java that helps you deal with unexpected or exceptional situations that can occur during program execution. It allows you to gracefully handle errors, recover from them, and prevent your program from crashing.',
    topics: [
      {
        id: 18.1,
        title: 'Types of Exceptions',
        isList: false,
        isExample: false,
        desc:
          'Java has two main types of exceptions: checked exceptions and unchecked exceptions (also known as runtime exceptions). - Checked Exceptions: These are exceptions that the compiler forces you to handle using `try-catch` blocks or declaring them in the methods `throws` clause. Examples include `IOException` and `SQLException`.- Unchecked Exceptions (Runtime Exceptions): These are exceptions that occur at runtime and dont need to be explicitly caught or declared. Examples include `NullPointerException` and `ArrayIndexOutOfBoundsException`.',
      },
      {
        id: 18.2,
        title: 'try-catch Blocks',
        isList: false,
        isExample: false,
        desc:
          'A `try` block contains the code that might raise an exception, and a `catch` block contains the code to handle the exception if it occurs.',
        code: '/codes/java_18_2.txt',
      },
      {
        id: 18.3,
        title: 'Multiple catch Blocks',
        isList: false,
        isExample: false,
        desc:
          'You can use multiple `catch` blocks to handle different types of exceptions.',
        code: '/codes/java_18_3.txt',
      },
      {
        id: 18.4,
        title: 'finally Block',
        isList: false,
        isExample: false,
        desc:
          'The `finally` block is used to write code that will be executed regardless of whether an exception occurred or not. It is often used for cleanup tasks.',
        code: '/codes/java_18_4.txt',
      },
      {
        id: 18.5,
        title: 'Throwing Exceptions',
        isList: false,
        isExample: false,
        desc:
          'You can use the `throw` statement to manually throw an exception. This is useful when you want to create custom exceptions or handle exceptional cases in your code.',
        code: '/codes/java_18_5.txt',
      },
      {
        id: 18.6,
        title: 'Custom Exception Classes',
        isList: false,
        isExample: false,
        desc:
          'In addition to using Javas built-in exception classes, you can create your own custom exception classes by extending the `Exception` class (or one of its subclasses). This allows you to define specific exceptions that are relevant to your applications domain',
        code: '/codes/java_18_6.txt',
      },
    ],
  },
  {
    id: 19,
    title: 'Java Networking',
    definition:
      'Networking in Java allows you to create applications that communicate over networks using various protocols. It empowers you to build client-server applications, access remote resources, and establish communication between different devices.',
    topics: [
      {
        id: 19.1,
        title: 'Socket Programming',
        isList: false,
        isExample: false,
        desc:
          'Sockets are the fundamental building blocks of network communication. Java provides two types of sockets: `Socket` for clients and `ServerSocket` for servers. - Client Socket (`Socket`): A client socket connects to a server socket to initiate communication.',
        code: '/codes/java_19_1.txt',
      },
      {
        id: 19.2,
        title: 'Networking Protocols',
        isList: false,
        isExample: false,
        desc:
          'Java supports various networking protocols, including TCP (Transmission Control Protocol) and UDP (User Datagram Protocol), which provide different levels of reliability and speed. - TCP Communication: TCP ensures reliable, ordered, and error-checked communication.',
        code: '/codes/java_19_2.txt',
      },
      {
        id: 19.3,
        title: 'URL and URLConnection',
        isList: false,
        isExample: false,
        desc:
          'Javas `URL` class represents a Uniform Resource Locator and can be used to access resources over the internet. `URLConnection` provides a way to establish a connection to the resource.',
        code: '/codes/java_19_3.txt',
      },
      {
        id: 19.4,
        title: 'Sockets and Threads',
        isList: false,
        isExample: false,
        desc:
          'Networking operations can block, so it is common to use threads to handle networking tasks without blocking the main application thread.',
        code: '/codes/java_19_4.txt',
      },
      {
        id: 19.5,
        title: 'HTTP Communication',
        isList: false,
        isExample: false,
        desc:
          'Java provides libraries for making HTTP requests and handling responses, making it easy to interact with web services and APIs.',
        code: '/codes/java_19_5.txt',
      },
      {
        id: 19.6,
        title: 'Networking Security',
        isList: false,
        isExample: false,
        desc:
          'Java provides classes and libraries for implementing secure network communication using protocols like SSL/TLS. Benefits of Java Networking: - Enables communication between devices over networks, including the internet. - Empowers the creation of client-server applications and distributed systems. - Provides tools for accessing web resources and interacting with remote services. ',
      },
    ],
  },
  {
    id: 20,
    title: 'Java Swing',
    definition:
      'Swing is a part of the Java Foundation Classes (JFC) and provides a rich set of GUI components for creating interactive and user-friendly desktop applications. It offers a consistent look and feel across different platforms and allows you to create complex graphical interfaces',
    topics: [
      {
        id: 20.1,
        title: 'Swing Components',
        isList: false,
        isExample: false,
        desc:
          'Swing provides a wide range of components, such as buttons, labels, text fields, checkboxes, radio buttons, lists, tables, and more.',
      },
      {
        id: 20.2,
        title: 'Containers',
        isList: false,
        isExample: false,
        desc:
          'Containers like `JFrame`, `JPanel`, and `JScrollPane` are used to hold and organize multiple components.- JFrame: The main window of a Swing application.',
        code: '/codes/java_20_2.txt',
      },
      {
        id: 20.3,
        title: 'Layout Managers',
        isList: false,
        isExample: false,
        desc:
          'Swing provides layout managers to control how components are arranged within containers. Common layout managers include `FlowLayout`, `BorderLayout`, `GridLayout`, and `GridBagLayout`.',
        code: '/codes/java_20_3.txt',
      },
      {
        id: 20.4,
        title: 'Listeners and Event Handling',
        isList: false,
        isExample: false,
        code: '/codes/java_20_4.txt',
        desc:
          'Swing components generate events (e.g., button clicks, mouse movements), and you can attach listeners to handle these events.',
      },
      {
        id: 20.6,
        title: 'Model-View-Controller (MVC)',
        isList: false,
        isExample: false,
        desc:
          'Swing follows the MVC design pattern, where components are separated into models (data), views (visual representation), and controllers (event handling).',
      },
      {
        id: 20.5,
        title: 'SwingWorker for Concurrency',
        isList: false,
        isExample: false,
        desc:
          '`SwingWorker` is used for performing lengthy tasks in the background while updating the GUI thread. It helps maintain application responsiveness.',
        code: '/codes/java_20_5.txt',
      },
    ],
  },
  {
    id: 21,
    title: 'Java Applets',
    definition:
      'Java applets are small Java programs that are designed to be embedded within HTML pages and run within a web browser. They were a popular way to add interactive content to websites in the past, but their usage has significantly decreased due to security concerns and the rise of modern web technologies.',
    topics: [
      {
        id: 21.1,
        title: 'Applet Lifecycle',
        isList: false,
        isExample: false,
        desc:
          'An applet follows a lifecycle that includes several methods that are automatically called by the browser: - `init()`: Initializes the applet, called once when the applet is loaded. - `start()`: Starts the execution of the applet. - `stop()`: Pauses the execution of the applet. - `destroy()`: Cleans up resources when the applet is no longer needed. - `paint(Graphics g)`: Called whenever the applet needs to be redrawn.',
      },
      {
        id: 21.2,
        title: 'Embedding Applets:',
        isList: false,
        isExample: false,
        desc:
          'Applets are embedded within HTML pages using the `<applet>` tag or, in more recent browsers, the `<object>` or `<embed>` tag. The applet is code is typically packaged as a JAR file.',
      },
      {
        id: 21.3,
        title: 'Applet Security',
        isList: false,
        isExample: false,
        desc:
          'Applets run in a sandboxed environment within the browser to prevent malicious activities. They have restricted access to system resources to ensure security.',
      },
      {
        id: 21.4,
        title: 'Communication with JavaScript',
        isList: false,
        isExample: false,
        desc:
          'Applets can communicate with JavaScript code on the web page using the `JSObject` class. This allows integration with the surrounding web content.',
      },
      {
        id: 21.5,
        title: 'Deprecated and Restricted',
        isList: false,
        isExample: false,
        desc:
          'Applet support has been deprecated in modern browsers due to security vulnerabilities. As of Java 9, the `Applet` class has been marked as deprecated, and Java applets are no longer supported in many major browsers',
      },
    ],
  },
  {
    id: 22,
    title: 'Database Connectivity (JDBC)',
    definition:
      'Swing is a part of the Java Foundation Classes (JFC) and provides a rich set of GUI components for creating interactive and user-friendly desktop applications. It offers a consistent look and feel across different platforms and allows you to create complex graphical interfaces',
    topics: [
      {
        id: 22.0,
        title: 'JDBC Drivers',
        isList: false,
        isExample: false,
        desc:
          'JDBC drivers are platform-specific implementations that enable Java applications to communicate with different types of databases. There are four types of JDBC drivers: - Type 1: JDBC-ODBC Bridge driver (using ODBC drivers) - Type 2: Native-API/partly Java driver (native calls + Java) - Type 3: Network Protocol driver (middleware) - Type 4: Thin driver (direct communication with the database)',
      },
      {
        id: 22.2,
        title: 'JDBC Connections',
        isList: false,
        isExample: false,
        desc:
          'Connection connection = DriverManager.getConnection(url, username, password);',
        code: '/codes/java_22_2.txt',
      },
      {
        id: 22.3,
        title: 'Executing Queries',
        isList: false,
        isExample: false,
        desc:
          'You can execute SQL queries using the `Statement` and `PreparedStatement` interfaces. `PreparedStatement` is preferred for parameterized queries to prevent SQL injection.',
        code: '/codes/java_22_3.txt',
      },
      {
        id: 22.4,
        title: 'Transaction Management',
        isList: false,
        isExample: false,
        desc:
          'JDBC supports transaction management to ensure data integrity. You can use the `Connection` interface is methods to commit or roll back transactions.',
        code: '/codes/java_22_4.txt',
      },
      {
        id: 22.5,
        title: 'ResultSet',
        isList: false,
        isExample: false,
        desc:
          'The `ResultSet` interface represents the result of a query. It allows you to iterate through the query results and retrieve data.',
        code: '/codes/java_22_5.txt',
      },
      {
        id: 22.6,
        title: 'Batch Processing',
        isList: false,
        isExample: false,
        desc:
          'JDBC supports batch processing, where you can group multiple SQL statements into a batch and execute them together. This can improve performance.',
        code: '/codes/java_22_6.txt',
      },
      {
        id: 22.7,
        title: 'Connection Pooling',
        isList: false,
        isExample: false,
        desc:
          'Connection pooling is a technique used to efficiently manage database connections. Instead of creating a new connection for each database operation, a connection pool maintains a pool of reusable connections, improving performance and resource utilization.',
        code: '/codes/java_22_7.txt',
      },
      {
        id: 22.8,
        title: 'JDBC Batch Updates:',
        isList: false,
        isExample: false,
        desc:
          'Batch updates allow you to group multiple DML (Data Manipulation Language) statements into a single batch and execute them in one go. This can significantly improve performance by reducing network round-trips.',
        code: '/codes/java_22_8.txt',
      },
      {
        id: 22.9,
        title: 'Database Metadata:',
        isList: false,
        isExample: false,
        desc:
          'JDBC provides the `DatabaseMetaData` interface, which allows you to retrieve information about the database, such as supported features, schemas, tables, and column types.',
        code: '/codes/java_22_9.txt',
      },
      {
        id: 22.1,
        title: 'Advanced Connection Configuration',
        isList: false,
        isExample: false,
        desc:
          'You can fine-tune your database connections by configuring properties related to connection timeouts, auto-commit behavior, and character encoding.',
        code: '/codes/java_22_1.txt',
      },
    ],
  },
]
