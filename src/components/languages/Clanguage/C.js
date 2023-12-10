export const C = [
  {
    id: 1,
    title: 'Introduction to C',
    definition: '',
    topics: [
      {
        id: 1.1,
        title: 'Introduction',
        isList: false,
        desc:
          'C is a procedural programming language initially developed by Dennis Ritchie in the year 1972 at Bell Laboratories of AT&T Labs. It was mainly developed as a system programming language to write the UNIX operating system.',
      },
      {
        id: 1.2,
        title: 'Features',
        isList: true,
        desc: [
          {
            id: 1,
            title: 'Procedural Language:',
            desc:
              'In a procedural language like C step by step, predefined instructions are carried out. C program may contain more than one function to perform a particular task. New people to programming will think that this is the only way a particular programming language works. There are other programming paradigms as well in the programming world. Most of the commonly used paradigm is an object-oriented programming language. ',
          },
          {
            id: 2,
            title: 'Fast and Efficient:',
            desc:
              'Newer languages like Java, python offer more features than c programming language but due to additional processing in these languages, their performance rate gets down effectively. C programming language as the middle-level language provides programmers access to direct manipulation with the computer hardware but higher-level languages do not allow this. That’s one of the reasons C language is considered the first choice to start learning programming languages. It’s fast because statically typed languages are faster than dynamically typed languages.',
          },
          {
            id: 3,
            title: 'Modularity:',
            desc:
              'The concept of storing C programming language code in the form of libraries for further future uses is known as modularity. This programming language can do very little on its own most of its power is held by its libraries. C language has its own library to solve common problems.',
          },
          {
            id: 4,
            title: 'Statically Type:',
            desc:
              'C programming language is a statically typed language. Meaning the type of variable is checked at the time of compilation but not at run time. This means each time a programmer types a program they have to mention the type of variables used.',
          },
          {
            id: 5,
            title: 'Portability:',
            desc:
              'C language is lavishly portable as programs that are written in C language can run and compile on any system with either no or small changes. ',
          },
        ],
      },
      {
        id: 1.3,
        title: 'History',
        isList: false,
        desc:
          'History of C language is interesting to know. Here we are going to discuss a brief history of the c language.C programming language was developed in 1972 by Dennis Ritchie at bell laboratories of AT& T(American Telephone & Telegraph), located in the U.S.A.Dennis Ritchie is known as the founder of the c language.',
      },
    ],
  },
  {
    id: 2,
    title: 'Variables',
    definition:
      'Variables are containers for storing data values, like numbers and characters. In C, there are different types of variables (defined with different keywords), for example: int - stores integers (whole numbers), without decimals, such as 123 or -123 float - stores floating point numbers, with decimals, such as 19.99 or -19.99 char - stores single characters, such as a or B. Char values are surrounded by single quotes',
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
              'C supports various data types, including: int: Integer type for whole numbers. double: Double- precision floating - point type for decimal numbers. char: Character type for single characters. bool: Boolean type representing true or false values. string: A sequence of characters.',
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
        id: 2.2,
        title: 'Examples',
        isList: false,
        isExample: true,
        examples: [
          'int age = 25; // Declare and initialize an integer variable',
          'float pi = 3.14159; // Declare and initialize a floating-point variable',
          'char initial = "J"; // Declare and initialize a character variable',
          'int monthsInYear = 12; // Declare a constant variable',
          'int x = 10; // Type inference: x is deduced as an integer',
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
        id: 2.6,
        title: 'Importance usages',
        desc:
          'Understanding the different types of variables, their scope, lifetime, and naming conventions is crucial for writing clean, efficient, and maintainable C code. Proper use of variables enables you to manage data effectively, control program flow, and create robust applications.',
      },
    ],
  },
  {
    id: 3,
    title: 'Data Types',
    definition:
      'C supports a variety of data types that define the kind of values a variable can hold and the operations that can be performed on them. Heres an overview of some commonly used data types:',
    topics: [
      {
        id: 3.1,
        title: 'Fundamental Data Types:',
        isList: false,
        isExample: false,
        desc:
          'int: Represents integer values. double: Represents double-precision floating-point numbers. float: Represents single-precision floating-point numbers. char: Represents individual characters. bool: Represents Boolean values (true or false).',
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
          ' const: Used to indicate that a variables value cannot be changed. volatile: Indicates that a variables value can change unexpectedly. mutable: Used within classes to allow modification of variables in const member functions.',
      },
    ],
  },
  {
    id: 4,
    title: 'Keywords',
    definition:
      'Keywords are reserved words that have special meanings in C programming. They cannot be used as identifiers (variable names, function names, etc.). Here are some important keywords in C:',
    topics: [
      {
        id: 4.1,
        title: 'All information about keywords',
        isList: false,
        isExample: true,
        desc:
          'Understanding data types and keywords is fundamental in C programming. Data types allow you to work with different kinds of values, while keywords provide the building blocks for creating logical structures, loops, conditions, and more in your code. A strong grasp of these concepts is essential for writing correct, efficient, and meaningful C programs. Feel free to integrate this information into your educational portal to provide learners with a comprehensive understanding of data types and keywords in C. Adapt the content to suit your websites style and approach, and provide examples to illustrate the concepts effectively.',
        examples: [
          'auto , break , case,  char, const, continue, default, delete, do, double, else, enum, explicit, extern ,false, float, for ,goto, if ,inline, int ,long ,new, nullptr, operator , register , return , short , signed , sizeof ,static, struct, switch, template ,this , throw ,true ,try ,typedef, typename,union ,unsigned, using ,virtual, void, volatile ,while',
        ],
      },
    ],
  },
  {
    id: 5,
    title: 'Operators in C',
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
          '+ (addition), - (subtraction), * (multiplication), / (division), % (modulus).',
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
          '== (equal), != (not equal), < (less than), > (greater than), <= (less than or equal), >= (greater than or equal).',
        ],
      },
      {
        id: 5.3,
        title: 'Logical Operators',
        isList: false,
        isExample: true,
        desc: 'Logical operators perform logical operations on boolean values.',
        examples: ['&& (logical AND), || (logical OR), ! (logical NOT).'],
      },
      {
        id: 5.4,
        title: 'Assignment Operators',
        isList: false,
        isExample: true,
        desc: 'Assignment operators assign values to variables.',
        examples: [
          '= (assignment), += (addition assignment), -= (subtraction assignment), *= (multiplication assignment), /= (division assignment), %= (modulus assignment).',
        ],
      },
      {
        id: 5.5,
        title: 'Increment and Decrement Operators',
        isList: false,
        isExample: false,
        desc:
          'Increment (++) and decrement (--) operators increase or decrease the value of a variable by 1.',
      },
      {
        id: 5.6,
        title: 'Bitwise Operators',
        isList: false,
        isExample: true,
        desc:
          'Bitwise operators perform operations at the binary level on integers.',
        examples: [
          '& (bitwise AND), | (bitwise OR), ^ (bitwise XOR), ~ (bitwise NOT), << (left shift), >> (right shift).',
        ],
      },
      {
        id: 5.7,
        title: 'Conditional (Ternary) Operator',
        isList: false,
        isExample: false,
        desc:
          'The ternary operator (condition ? expr1 : expr2) returns one of two values based on a condition.',
      },
      {
        id: 5.8,
        title: 'Member Access Operators',
        isList: false,
        isExample: true,
        examples: [
          '. (dot) is used to access members of an object.',
          '-> (arrow) is used to access members of a pointer to an object.',
        ],
      },
      {
        id: 5.9,
        title: 'Pointer Operators',
        isList: false,
        isExample: true,
        examples: [
          '* is used to declare a pointer and dereference it to access the value it points to.',
          '& is used to get the address of a variable.',
        ],
      },
      {
        id: 5.11,
        title: 'Conditional Operator (null coalescing)',
        isList: false,
        isExample: false,
        desc:
          '?? provides a default value when the left-hand operand is nullptr or equivalent.',
      },
      {
        id: 5.12,
        title: 'Pointer-to-Member Operators',
        isList: false,
        isExample: false,
        desc:
          '.* and ->* are used to access members of an object through a pointer to a member.',
      },
      {
        id: 5.13,
        title: 'Type Casting Operators',
        isList: false,
        isExample: false,
        desc:
          'static_cast, dynamic_cast, const_cast, and reinterpret_cast are used to perform type conversions.',
      },
    ],
  },
  {
    id: 6,
    title: 'Control Statements',

    topics: [
      {
        id: 6.1,
        title: 'if...else statement',
        isList: false,
        isExample: false,
        desc:
          'The if...else statement is a fundamental control structure in C that allows you to make decisions based on conditions. It enables your program to execute different blocks of code depending on whether a specified condition is true or false.',
        code: '/codes/c_6_1.txt',
      },
      {
        id: 6.2,
        title: 'Nested if...else statement',
        isList: false,
        isExample: false,
        desc:
          'You can nest if...else statements within each other to handle multiple conditions',
        code: '/codes/c_6_2.txt',
      },
      {
        id: 6.3,
        title: 'Switch',
        isList: false,
        isExample: false,
        desc:
          'The switch statement is another powerful control structure in C that provides an efficient way to handle multiple cases or options based on the value of a single expression. Its particularly useful when you want to execute different blocks of code depending on the value of a variable.',
        code: '/codes/c_6_3.txt',
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
            code: '/codes/c_6_4_1.txt',
          },
          {
            id: 2,
            title: 'while loop',
            desc:
              'The while loop repeatedly executes a block of code as long as a given condition is true. Its suitable when the number of iterations is not known beforehand.',
            code: '/codes/c_6_4_2.txt',
          },
          {
            id: 3,
            title: 'do-while loop',
            desc:
              'The do-while loop is similar to the while loop, but it ensures that the code block is executed at least once before checking the condition.',
            code: '/codes/c_6_4_3.txt',
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
              'The break statement is used to exit a loop prematurely when a certain condition is met. It is often employed within loops (such as for, while, or do-while) to terminate the loops execution',
            code: '/codes/c_6_5_1.txt',
          },
          {
            id: 2,
            title: 'continue',
            desc:
              'The continue statement is used to skip the remaining code within the current iteration of a loop and proceed to the next iteration. It allows you to bypass certain code blocks and continue with the next loop iteration.',
            code: '/codes/c_6_5_2.txt',
          },
          {
            id: 3,
            title: 'do-while loop',
            desc:
              'The do-while loop is similar to the while loop, but it ensures that the code block is executed at least once before checking the condition.',
            code: '/codes/c_6_5_3.txt',
          },
        ],
      },
    ],
  },
  {
    id: 7,
    title: 'C Functions',
    definition:
      'Functions are a fundamental building block in C programming. They allow you to encapsulate a block of code that performs a specific task and can be reused throughout your program. Functions help in modularizing your code, improving readability, and promoting code reuse.',
    topics: [
      {
        id: 7.1,
        title: 'Functions syntax',
        isList: false,
        isExample: false,
        desc: 'below is the syntax for C',
        code: '/codes/c_7_1.txt',
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
              'Specifies the type of value the function returns. Use void if the function does not return a value.',
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
              'If the function returns a value, the return statement is used to send that value back to the caller. The return statement can also be omitted for functions with a void return type',
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
        code: '/codes/c_7_3.txt',
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
    title: 'C Arrays',
    definition:
      'Arrays are collections of elements of the same data type, stored in contiguous memory locations. They allow you to store and manipulate multiple values under a single variable name. Arrays are widely used to represent lists, sequences, or collections of data.',
    topics: [
      {
        id: 8.1,
        title: 'Declaring and Initializing Arrays:',
        isList: false,
        isExample: false,
        desc:
          'Arrays are declared by specifying the data type of the elements followed by the array name and the number of elements in square brackets ([]). You can initialize arrays during declaration.',
        code: '/codes/c_8_3.txt',
      },
      {
        id: 8.2,
        title: 'Iterating Over Arrays:',
        isList: false,
        isExample: false,
        desc: 'You can use loops to iterate over array elements.',
        code: '/codes/c_8_3.txt',
      },
      {
        id: 8.3,
        title: 'Multidimensional Arrays: ',
        isList: false,
        isExample: false,
        desc:
          'Arrays can have multiple dimensions, such as 2D (matrix), 3D, etc.',
        code: '/codes/c_8_3.txt',
      },
      {
        id: 8.4,
        title: 'Passing Arrays to Functions:',
        isList: false,
        isExample: false,
        desc:
          'Arrays can be passed to functions as parameters. However, arrays decay into pointers when passed to functions.',
        code: '/codes/c_8_2.txt',
      },
      {
        id: 8.5,
        title: 'Declaring and Initializing Arrays:',
        isList: false,
        isExample: false,
        desc:
          'Arrays are declared by specifying the data type of the elements followed by the array name and the number of elements in square brackets ([]). You can initialize arrays during declaration.',
        code: '/codes/c_8_3.txt',
      },
    ],
  },
  {
    id: 9,
    title: 'C Pointers',
    definition:
      'Pointers are variables that store memory addresses, allowing you to directly access and manipulate data in memory. Pointers are a powerful and essential feature in C, enabling dynamic memory allocation, data manipulation, and efficient handling of complex data structures.',
    topics: [
      {
        id: 9.1,
        title: 'Declaring and Initializing Pointers:',
        isList: false,
        isExample: false,
        desc: 'Syntax and examples',
        code: '/codes/c_9_1.txt',
      },
      {
        id: 9.2,
        title: 'Dereferencing Pointers:',
        isList: false,
        isExample: false,
        dsc:
          'Dereferencing a pointer means accessing the value stored at the memory address pointed to by the pointer. This is done using the dereference operator (*).',
        code: '/codes/c_9_2.txt',
      },
      {
        id: 9.3,
        title: 'Dereferencing Pointers:',
        isList: false,
        isExample: false,
        dsc:
          'Dereferencing a pointer means accessing the value stored at the memory address pointed to by the pointer. This is done using the dereference operator (*).',
        code: '/codes/c_9_3.txt',
      },
      {
        id: 9.4,
        title: 'Pointer Arithmetic:',
        isList: false,
        isExample: false,
        dsc:
          'Pointers can be manipulated using arithmetic operations like addition and subtraction. Pointer arithmetic is based on the size of the data type the pointer points to.',
        code: '/codes/c_9_4.txt',
      },
      {
        id: 9.5,
        title: 'Dynamic Memory Allocation:',
        isList: false,
        isExample: false,
        dsc:
          'C provides operators new and delete for dynamic memory allocation and deallocation. Dynamic memory allows you to allocate memory at runtime and create data structures with varying sizes.',
        code: '/codes/c_9_5.txt',
      },
      {
        id: 9.6,
        title: 'Pointers and Functions: ',
        isList: false,
        isExample: false,
        dsc:
          'You can pass pointers to functions to modify the value of variables outside the function.',
        code: '/codes/c_9_6.txt',
      },
      {
        id: 9.7,
        title: 'Pointers and Arrays: ',
        isList: false,
        isExample: false,
        dsc: 'You can navigate an array using pointer arithmetic.',
        code: '/codes/c_9_7.txt',
      },
      {
        id: 9.8,
        title: 'Pointers and Strings: ',
        isList: false,
        isExample: false,
        dsc: 'Using Pointers with Strings and Pointer Arithmetic with Strings ',
        code: '/codes/c_9_8.txt',
      },
    ],
  },
  {
    id: 10,
    title: 'File Handling',
    definition:
      'File handling in C allows you to read and write data to and from files. Its an essential feature for tasks such as data storage, configuration management, and data processing.',
    topics: [
      {
        id: 10.1,
        title: 'Opening and writing Files',
        isList: false,
        isExample: false,
        desc:
          '- Files can be opened using the std::ifstream (input) or std::ofstream (output) classes. - After use, files should be closed using the close() method.',
        code: '/codes/c_10_1.txt',
      },
      {
        id: 10.2,
        title: 'Run process',
        isList: false,
        isExample: false,
        desc:
          '- Data can be read from files using methods like >> (input stream) for formatted reading. - Data can be written to files using methods like << (output stream) for formatted writing.',
        code: '/codes/c_10_2.txt',
      },
      {
        id: 10.3,
        title: 'Get lines from a file using getline()',
        isList: false,
        isExample: false,
        desc:
          'The POSIX C library defines the getline() function. This function allocates a buffer to hold the line contents and returns the new line, the number of characters in the line, and the size of the buffer',
        code: '/codes/c_10_3.txt',
      },
    ],
  },
  {
    id: 11,
    title: 'Structs',
    definition:
      'Structures provide a way to group a set of related variables of diverse types into a single unit of memory. The   structure as a whole can be referenced by a single name or pointer; the structure members can be accessed   individually too. Structures can be passed to functions and returned from functions. They are defined using the   keyword struct',
    topics: [
      {
        id: 11.1,
        title: 'Type Declaration',
        isList: false,
        isExample: false,
        desc:
          'A structure with at least one member may additionally contain a single array member of unspecified length at the end of the structure. This is called a flexible array member:',
        code: '/codes/c_11_1.txt',
      },
      {
        id: 11.2,
        title: 'Effects on Size and Padding',
        isList: false,
        isExample: false,
        desc:
          'A flexible array member is treated as having no size when calculating the size of a structure, though padding between that member and the previous member of the structure may still exist:',
        code: '/codes/c_11_2.txt',
      },
      {
        id: 11.3,
        title: 'Usage',
        isList: false,
        isExample: false,
        desc:
          'You can declare and initialize an object with a structure type containing a flexible array member, but you must not attempt to initialize the flexible array member since it is treated as if it does not exist. It is forbidden to try to do this, and compile errors will result.',
      },
    ],
  },
  {
    id: 12,
    title: 'Error Handling',
    definition:
      'When a standard library function fails, it often sets errno to the appropriate error code. The C standard requires at  least 3 values for errno be set:',
    topics: [
      {
        id: 12.1,
        title: 'strerror',
        isList: false,
        isExample: false,
        desc:
          'If perror is not flexible enough, you may obtain a user-readable error description by calling strerror from <string.h>.',
        code: '/codes/c_12_1.txt',
      },
      {
        id: 12.2,
        title: 'perror',
        isList: false,
        isExample: false,
        desc:
          'To print a user-readable error message to stderr, call perror from <stdio.h>',
        code: '/codes/c_12_2.txt',
      },
    ],
  },
]
