export const Python = [
  {
    id: 1,
    title: 'Introduction to Python',
    definition: '',
    topics: [
      {
        id: 1.1,
        title: 'Introduction',
        isList: false,
        desc:
          'Python is a high-level programming language that is widely used for various purposes, including web development, data analysis, scientific computing, artificial intelligence, machine learning, automation, and more. It was created by Guido van Rossum and was first released in 1991. Python emphasizes readability and simplicity, which makes it a popular choice for both beginners and experienced programmers',
      },
      {
        id: 1.2,
        title: 'Features',
        isList: true,
        desc: [
          {
            id: 1,
            title: 'Readable and Clear Syntax:',
            desc:
              'Python syntax is designed to be easy to read and understand, resembling natural language more closely than other programming languages. This helps in writing clean and maintainable code.',
          },
          {
            id: 2,
            title: 'Dynamically Typed:',
            desc:
              'Python is dynamically typed, meaning you do not need to declare the type of a variable explicitly. The type of a variable is determined at runtime.',
          },
          {
            id: 3,
            title: 'Syntax Simplicity:',
            desc:
              'Javas syntax is derived from C++ but with modifications that make it more accessible and user-friendly. Its syntax is designed to be straightforward and easy to read, which contributes to its learnability and adoption.',
          },
          {
            id: 4,
            title: 'Large Standard Library:',
            desc:
              'Python comes with a comprehensive standard library that provides modules and packages for various tasks like working with files, networking, databases, web services, and more. This reduces the need to write code from scratch for common tasks',
          },
          {
            id: 5,
            title: 'Cross-Platform Compatibility:',
            desc:
              'Python programs can run on different operating systems without modification, thanks to its platform-independent nature.',
          },
          {
            id: 6,
            title: 'Community and Ecosystem:',
            desc:
              'Python has a large and active community of developers, which means you can find extensive documentation, libraries, frameworks, and tools to help you in various programming tasks',
          },
          {
            id: 7,
            title: 'Versatility:',
            desc:
              'Python can be used for a wide range of applications, from simple scripts to complex web applications, scientific computing, data analysis, and machine learning',
          },
          {
            id: 8,
            title: 'Open Source:',
            desc:
              'Python is an open-source language, which means the source code is freely available and can be modified and distributed.',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'Variables',
    definition:
      'Variables are names used to store data values in Python. - They are used to represent and manipulate data during program execution. - Variables can hold different types of data and can be reassigned. ',
    topics: [
      {
        id: 2.1,
        title: 'Key Concepts',
        isList: true,
        desc: [
          {
            id: 1,
            title: 'Data Types:',
            desc:
              'Python has several built-in data types that define the kind of data a variable can hold',
            sub_points: [
              {
                id: 1.1,
                title: 'Numeric Types:',
                desc:
                  '`int`: Integers, e.g., 42, -17. `float`: Floating-point numbers, e.g., 3.14, -0.5.',
              },
              {
                id: 1.2,
                title: 'Text Type:',
                desc:
                  '`str`: Strings, sequences of characters enclosed in single or double quotes, e.g., "Hello, Python!".',
              },
              {
                id: 1.3,
                title: 'Boolean Type:',
                desc:
                  '`bool`: Boolean values, `True` or `False`, used for logical operations.',
              },
              {
                id: 1.4,
                title: 'Sequence Types:',
                desc:
                  '- `list`: Ordered and mutable collections of items, e.g., [1, 2, 3]. - `tuple`: Ordered and immutable collections, e.g., (1, 2, 3). - `range`: Represents a range of numbers',
              },
              {
                id: 1.5,
                title: 'Mapping Type:',
                desc:
                  '- `dict`: Dictionaries, collections of key-value pairs, e.g., {"name": "John", "age": 30}.',
              },
              {
                id: 1.6,
                title: 'Set Types:',
                desc:
                  '- `set`: Unordered and mutable collections of unique items. - `frozenset`: Unordered and immutable collections of unique items.',
              },
              {
                id: 1.7,
                title: 'Binary Types:',
                desc:
                  '- `bytes`: Immutable sequence of bytes, e.g., b"hello". - `bytearray`: Mutable sequence of bytes. - `memoryview`: Provides a view of memory buffers as interpreted bytes.',
              },
            ],
          },
          {
            id: 2,
            title: 'Naming Rules:',
            desc:
              'Variable names must start with a letter, underscore, or dollar sign, followed by letters, digits, or underscores. They are case-sensitive. Meaningful and descriptive names enhance code readability.',
          },
          {
            id: 3,
            title: 'Scope and Lifetime:',
            desc:
              'Variables have a scope (region where they are accessible) and a lifetime (duration they exist in memory). Local variables are limited to their enclosing block, while global variables have a broader scope.',
          },
          {
            id: 4,
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
        ],
      },
      {
        id: 2.3,
        title: 'Importance usages',
        desc:
          'Understanding the different types of variables, their scope, lifetime, and naming conventions is crucial for writing clean, efficient, and maintainable python code. Proper use of variables enables you to manage data effectively, control program flow, and create robust applications.',
      },
    ],
  },
  {
    id: 3,
    title: 'Keywords',
    definition:
      'Keywords are reserved words in Python that have predefined meanings and cannot be used as variable names. Here are some common keywords:',
    topics: [
      {
        id: 3.1,
        title: 'All information about keywords',
        isList: false,
        isExample: true,
        desc:
          'Java keywords are reserved words that have predefined meanings in the Java programming language. They cannot be used as identifiers like variable names, class names, or method names. Here is a comprehensive list of Java keywords along with brief explanations of each:',
        examples: [
          'False, class, finally, is, return, None, continue, for, lambda, try, True, def, from, nonlocal, while, and, del, global, not, with, as, elif, if, or, yield, assert, else, import, pass, break, except, in, raise',
        ],
      },
    ],
  },
  {
    id: 4,
    title: 'Operators in Python',
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
          '`==` (equal), `!=` (not equal), `<` (less than), `>` (greater than), `<=` (less than or equal), `>=` (greater than or equal).',
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
        isExample: false,
        desc:
          'The `if...else` statement is a fundamental control structure in java that allows you to make decisions based on conditions. It enables your program to execute different blocks of code depending on whether a specified condition is true or false.',
        code: '/codes/py_5_1.txt',
      },
      {
        id: 5.2,
        title: 'if, elif, else statement',
        isList: false,
        isExample: false,
        desc:
          'You can nest `if...else` statements within each other to handle multiple conditions',
        code: '/codes/py_5_2.txt',
      },
      {
        id: 5.3,
        title: 'Loops',
        isList: true,
        desc: [
          {
            id: 1,
            title: 'for loop',
            desc: 'used for initialization , condition and increment purpose',
            code: '/codes/py_5_3_1.txt',
          },
          {
            id: 2,
            title: 'while loop',
            desc:
              'The `while` loop repeatedly executes a block of code as long as a given condition is true. Its suitable when the number of iterations is not known beforehand.',
            code: '/codes/py_5_3_2.txt',
          },
          {
            id: 3,
            title: 'do-while loop',
            desc:
              'The `do-while` loop is similar to the `while` loop, but it ensures that the code block is executed at least once before checking the condition.',
            code: '/codes/py_5_3_3.txt',
          },
        ],
      },
      {
        id: 5.4,
        title: 'Break and Continue',
        isList: true,
        desc: [
          {
            id: 1,
            title: 'Break',
            desc:
              'The `break` statement is used to exit a loop prematurely when a certain condition is met. It is often employed within loops (such as `for`, `while`, or `do-while`) to terminate the loops execution',
            code: '/codes/py_5_4_1.txt',
          },
          {
            id: 2,
            title: 'continue',
            desc:
              'The `continue` statement is used to skip the remaining code within the current iteration of a loop and proceed to the next iteration. It allows you to bypass certain code blocks and continue with the next loop iteration.',
            code: '/codes/py_5_4_2.txt',
          },
        ],
      },
    ],
  },
  {
    id: 6,
    title: 'Literals',
    definition:
      'In Python, literals are the constants used to represent fixed values. They directly represent data and are used to assign values to variables or as part of expressions. Python supports various types of literals:',
    topics: [
      {
        id: 6.1,
        title: 'Numeric Literals',
        isList: false,
        isExample: false,
        desc:
          '- Integer literals: Whole numbers, e.g., `42`, `-17`. - Floating-point literals: Decimal numbers, e.g., `3.14`, `-0.5`.',
      },
      {
        id: 6.2,
        title: 'String Literals',
        isList: false,
        isExample: false,
        desc:
          '- String literals: Sequences of characters, enclosed in single and double quotes',
      },
      {
        id: 6.3,
        title: 'Boolean Literals',
        isList: false,
        isExample: false,
        desc: 'Boolean literals: Represent truth values, `True` or `False`.',
      },
      {
        id: 6.4,
        title: 'None Literal',
        isList: false,
        isExample: false,
        desc: '- `None`: Represents the absence of a value or a null value.',
      },
      {
        id: 6.5,
        title: 'Raw String Literals',
        isList: false,
        isExample: false,
        desc: '- `None`: Represents the absence of a value or a null value.',
      },
      {
        id: 6.6,
        title: 'Bytes and Bytearray Literals',
        isList: false,
        isExample: false,
        desc:
          '- Bytes literals: Represent sequences of bytes using the `b` prefix, e.g.,- Bytearray literals: Similar to bytes, but mutable, e.g., `bytearray(b"world")`.',
      },
    ],
  },
  {
    id: 7,
    title: 'Python Tuples',
    definition:
      'A tuple is a collection of ordered and immutable elements. Tuples are similar to lists, but unlike lists, tuples cannot be modified after creation. They are defined using parentheses `()`.',
    topics: [
      {
        id: 7.1,
        title: 'Creating a Tuple:',
        isList: false,
        isExample: false,
        desc:
          'Tuples can be created by enclosing elements in parentheses and separating them with commas.',
        code: '/codes/py_7_1.txt',
      },
      {
        id: 7.2,
        title: 'Accessing Tuple Elements:',
        isList: false,
        isExample: false,
        desc:
          'You can access elements of a tuple using indexing, just like with lists. Indexing starts from 0.',

        code: '/codes/py_7_2.txt',
      },
      {
        id: 7.3,
        title: 'Tuple Slicing:',
        isList: false,
        isExample: false,
        desc: 'You can slice tuples to get a subset of elements.',
        code: '/codes/py_7_3.txt',
      },
      {
        id: 7.4,
        title: 'Immutability of Tuples:',
        isList: false,
        isExample: false,
        desc:
          'Tuples are immutable, meaning their elements cannot be modified, added, or removed after creation. However, you can create new tuples by concatenating or repeating existing tuples.',
        code: '/codes/py_7_4.txt',
      },
    ],
  },
  {
    id: 8,
    title: 'Python Lists',
    definition:
      'A list is a collection of ordered and mutable elements. Lists are one of the most commonly used data structures in Python, and they allow you to store a sequence of values.',
    topics: [
      {
        id: 8.1,
        title: 'Creating a List:',
        isList: false,
        isExample: false,
        desc:
          'Lists can be created by enclosing elements in square brackets `[]` and separating them with commas.',
        code: '/codes/py_8_1.txt',
      },
      {
        id: 8.2,
        title: 'Accessing List Elements:',
        isList: false,
        isExample: false,
        desc:
          'You can access elements of a list using indexing. Indexing starts from 0.',
        code: '/codes/py_8_2.txt',
      },
      {
        id: 8.3,
        title: 'List Slicing:',
        isList: false,
        isExample: false,
        desc: 'You can slice lists to get a subset of elements.',
        code: '/codes/py_8_3.txt',
      },
      {
        id: 8.4,
        title: 'Modifying List Elements:',
        isList: false,
        isExample: false,
        desc:
          'Lists are mutable, meaning you can modify their elements after creation.',
        code: '/codes/py_8_4.txt',
      },
    ],
  },
  {
    id: 9,
    title: 'Object-Oriented Programming (OOP) in Python',
    definition:
      'OOPs is a fundamental paradigm in programming that focuses on organizing code into objects, which are instances of classes. OOP promotes code reusability, modularity, and easier maintenance. Lets explore OOP concepts in Python',
    topics: [
      {
        id: 9.1,
        title: 'Classes and Objects',
        isList: false,
        isExample: false,
        desc:
          'A class is a blueprint for creating objects. An object is an instance of a class. Classes define attributes (variables) and methods (functions) that objects can have.',
        code: '/codes/py_9_1.txt',
      },
      {
        id: 9.2,
        title: 'Encapsulation',
        isList: false,
        isExample: false,
        desc:
          'Encapsulation restricts access to certain components of an object, ensuring that sensitive data is hidden from the outside world.',
      },
      {
        id: 9.3,
        title: 'Abstraction',
        isList: false,
        isExample: false,
        desc:
          'It involves simplifying complex reality by modeling classes based on essential characteristics. Abstraction focuses on what an object does rather than how it does it, allowing you to create models that capture the most important aspects of an objects behavior while hiding the underlying implementation details. Lets explore abstraction in more detail:',
        code: '/codes/py_9_3.txt',
      },
      {
        id: 9.4,
        title: 'Inheritance',
        isList: false,
        isExample: false,
        desc:
          '- Inheritance is a mechanism by which a class can inherit the attributes and behaviors of another class (base or parent class). It promotes code reusability and establishes an "is-a" relationship between classes',
        code: '/codes/py_9_4.txt',
      },
    ],
  },
  {
    id: 10,
    title: 'Custom JSON Encoding and Decoding',
    definition:
      'You can customize how your objects are serialized to JSON strings and deserialized back to Python objects by providing custom functions for encoding and decoding using the `default` and `object_hook` parameters.',
    topics: [
      {
        id: 10.1,
        title: 'For custom encoding:',
        isList: false,
        isExample: false,
        code: '/codes/py_10_1.txt',
      },
      {
        id: 10.2,
        title: 'For custom decoding',
        isList: false,
        isExample: false,
        desc:
          'A parameterized constructor allows you to provide arguments when creating an object, which are used to initialize the objects attributes.',
        code: '/codes/py_10_2.txt',
      },
      {
        id: 10.3,
        title: 'Pretty Printing',
        isList: false,
        isExample: false,
        desc:
          'The `json.dumps()` function accepts an `indent` parameter to control the indentation of the output JSON string for better human readability.',
        code: '/codes/py_10_3.txt',
      },
    ],
  },
  {
    id: 11,
    title: 'Exception Handling',
    definition:
      'Exceptionare a way to handle errors and unexpected situations that can occur during the execution of a program. They allow you to gracefully handle errors instead of causing your program to crash. Lets delve into the details of exceptions in Python:',
    topics: [
      {
        id: 11.1,
        title: 'Basic Exception Handling',
        isList: false,
        isExample: false,
        desc:
          'In Python, exceptions are raised when an error occurs. You can catch and handle exceptions using `try`, `except`, `else`, and `finally` blocks.',
        code: '/codes/py_11_1.txt',
      },
      {
        id: 11.2,
        title: 'Custom Exceptions',
        isList: false,
        isExample: false,
        desc:
          'You can create your own exception classes by subclassing the built-in `Exception` class. This allows you to define custom error types for your application.',
        code: '/codes/py_11_2.txt',
      },
      {
        id: 11.3,
        title: 'Handling Multiple Exceptions',
        isList: false,
        isExample: false,
        desc:
          'You can handle multiple exceptions using multiple `except` blocks or a single `except` block with a tuple of exception types.',
        code: '/codes/py_11_3.txt',
      },
    ],
  },
  {
    id: 12,
    title: 'Strings',
    definition:
      'Strings are one of the fundamental data types in Python. They are used to represent sequences of characters, such as text. In Python, strings are immutable, meaning their values cannot be changed after they are created. Lets explore various aspects of working with strings in Python:',
    topics: [
      {
        id: 12.1,
        title: 'Creating Strings:',
        isList: false,
        isExample: false,
        desc: 'You can create strings using single and double quotes',
        code: '/codes/py_12_1.txt',
      },
      {
        id: 12.2,
        title: 'String Concatenation:',
        isList: false,
        isExample: false,
        desc: 'You can concatenate strings using the `+` operator.',
        code: '/codes/py_12_2.txt',
      },
      {
        id: 12.3,
        title: 'String Repetition:',
        isList: false,
        isExample: false,
        desc: 'You can repeat a string using the `*` operator.',
        code: '/codes/py_12_3.txt',
      },
      {
        id: 12.4,
        title: 'String indexing:',
        isList: false,
        isExample: false,
        desc:
          'Strings are sequences, and you can access individual characters by their index. Indices start from 0 for the first character',
        code: '/codes/py_12_4.txt',
      },
      {
        id: 12.5,
        title: 'String slicing:',
        isList: false,
        isExample: false,
        desc: 'You can extract a portion of a string using slicing.',
        code: '/codes/py_12_5.txt',
      },
      {
        id: 12.6,
        title: 'String Methods:',
        isList: false,
        isExample: false,
        desc:
          'Python provides a wide range of string methods for various operations, such as case conversion, finding substrings, replacing, and more.',
        code: '/codes/py_12_6.txt',
      },
      {
        id: 12.7,
        title: 'String Formatting:',
        isList: false,
        isExample: false,
        desc:
          'String formatting allows you to insert variables or values into strings.',
        code: '/codes/py_12_7.txt',
      },
      {
        id: 12.8,
        title: 'String Manipulation',
        isList: false,
        isExample: false,
        desc:
          'Strings are immutable, so operations like replacing a character require creating a new string.',
        code: '/codes/py_12_8.txt',
      },
    ],
  },
  {
    id: 13,
    title: 'CSV file',
    definition:
      'In Python, the CSV (Comma-Separated Values) format is commonly used for storing tabular data. The `csv` module in Python provides functionalities to read from and write to CSV files. CSV files are often used to exchange data between different applications and are easily readable by both humans and machines. Here is how you can work with CSV files in Python using the `csv` module:',
    topics: [
      {
        id: 13.1,
        title: 'Reading CSV Files:',
        isList: false,
        isExample: false,
        desc:
          'To read data from a CSV file, you can use the `csv.reader` object. This object reads each row as a list of strings, where each value is separated by a comma (or another specified delimiter).',
        code: '/codes/py_13_1.txt',
      },
      {
        id: 13.2,
        title: 'Writing CSV Files:',
        isList: false,
        isExample: false,
        desc:
          'To write data to a CSV file, you can use the `csv.writer` object. This object allows you to write rows of data as lists',
        code: '/codes/py_13_2.txt',
      },
      {
        id: 13.3,
        title: 'Working with Dictionaries:',
        isList: false,
        isExample: false,
        desc:
          'The `csv.DictReader` and `csv.DictWriter` classes allow you to work with CSV files using dictionaries, where the header row provides the keys for the dictionaries',
        code: '/codes/py_13_3.txt',
      },
    ],
  },
  {
    id: 14,
    title: 'JSON Basics',
    definition:
      'JSON is a lightweight format for storing and exchanging data. It consists of key-value pairs, similar to dictionaries in Python, and supports various data types such as strings, numbers, booleans, arrays (lists), and objects (dictionaries).',
    topics: [
      {
        id: 14.1,
        title: 'Encoding (Serialization):',
        isList: false,
        isExample: false,
        desc:
          'You can use the `json.dumps()` function to convert a Python object to a JSON-formatted string.',
        code: '/codes/py_14_1.txt',
      },
      {
        id: 14.2,
        title: 'Decoding (Deserialization)::',
        isList: false,
        isExample: false,
        desc:
          'You can use the `json.loads()` function to convert a JSON string back into a Python object.',
        code: '/codes/py_14_2.txt',
      },
      {
        id: 14.3,
        title: 'Working with JSON Files:',
        isList: false,
        isExample: false,
        desc:
          'You can read JSON data from a file using the `json.load()` function and write JSON data to a file using the `json.dump()` function.',
        code: '/codes/py_14_3.txt',
      },
    ],
  },
  {
    id: 15,
    title: 'Generators',
    definition:
      'Generators are a powerful and memory-efficient way to create iterators in Python. They allow you to generate values one at a time instead of storing all values in memory at once. This is especially useful when dealing with large datasets or infinite sequences. Lets dive into the details',
    topics: [
      {
        id: 15.1,
        title: 'Iterators and Iterables:',
        isList: false,
        isExample: false,
        desc:
          '- An iterable is an object that can be iterated (looped) over. Lists, tuples, dictionaries, strings, and more are examples of iterables. - An iterator is an object that produces the next value in a sequence when the `next()` function is called. Iterators are used to loop through iterables',
      },
      {
        id: 15.2,
        title: 'Generator Functions',
        isList: false,
        isExample: false,
        desc:
          'A generator is a special type of iterator that is created using a generator function. A generator function contains one or more `yield` statements, which temporarily pause the functions execution and yield a value to the caller. The functions state is remembered, so it can be resumed from where it left off.',
        code: '/codes/py_15_2.txt',
      },
      {
        id: 15.3,
        title: 'Generator Expressions',
        isList: false,
        isExample: false,
        desc:
          'Generator expressions provide a concise way to create generators similar to list comprehensions. They are enclosed in parentheses instead of square brackets.',
        code: '/codes/py_15_3.txt',
      },
      {
        id: 15.4,
        title: 'Generator Pipelines',
        isList: false,
        isExample: false,
        desc:
          'Generators can be combined into pipelines using generator expressions and functions.',
        code: '/codes/py_15_4.txt',
      },
      {
        id: 15.5,
        title: 'Chaining Generators',
        isList: false,
        isExample: false,
        desc:
          'You can chain multiple generators together to create more complex processing pipelines.',
        code: '/codes/py_15_5.txt',
      },
    ],
  },
]
