export const coursesData = [
    {
      id: 1,
      title: "Computer Science Engineering",
      description: "Course equivalent to a Bachelor's degree in Computer Science Engineering.",
      image: "https://www.accurate.in/img/college/1662107573-bachelor-in-computer-science-engineering.jpg",
      chapters: [
        {
          id: 101,
          title: "Computational Thinking",
          content: "Computational thinking is the process of understanding a problem and expressing its solutions in a way that a computer can effectively execute.",
          questions: [
            {
              id: 1001,
              question: "What is computational thinking?",
              answer: "Computational thinking is a problem-solving approach that involves breaking down complex problems into smaller, more manageable parts, recognizing patterns, creating algorithms, and formulating solutions that can be effectively executed by computers."
            },
            {
              id: 1002,
              question: "Name the four key components of computational thinking.",
              answer: "The four key components are decomposition (breaking down problems), pattern recognition, abstraction (focusing on essential details), and algorithm design (creating step-by-step solutions)."
            }
          ]
        },
        {
          id: 102,
          title: "Introduction to Programming",
          content: "This chapter introduces basic programming concepts and paradigms essential for software development.",
          questions: [
            {
              id: 1003,
              question: "What is a variable in programming?",
              answer: "A variable is a named storage location in computer memory used to hold data that can be modified during program execution."
            },
            {
              id: 1004,
              question: "Explain the difference between compiled and interpreted languages.",
              answer: "Compiled languages translate the entire source code into machine code before execution, while interpreted languages translate and execute code line by line during runtime. Compiled languages typically run faster but require a compilation step, while interpreted languages offer more flexibility but may run slower."
            }
          ]
        },
        {
          id: 103,
          title: "Data Structures",
          content: "This chapter covers fundamental data structures used to organize and store data efficiently in programming.",
          questions: [
            {
              id: 1005,
              question: "What is an array?",
              answer: "An array is a collection of elements of the same data type stored at contiguous memory locations, accessed using indices."
            },
            {
              id: 1006,
              question: "What is the difference between a stack and a queue?",
              answer: "A stack follows Last-In-First-Out (LIFO) principle where the last element added is the first one to be removed, while a queue follows First-In-First-Out (FIFO) principle where the first element added is the first one to be removed."
            }
          ]
        }
      ],
      syllabus: "/sample-syllabus.pdf",
      questionPaper: "/sample-question-paper.pdf"
    },
    {
      id: 2,
      title: "Data Structures and Algorithms",
      description: "Learn efficient data organization and algorithmic problem solving.",
      image: "/api/placeholder/400/250",
      chapters: [
        {
          id: 201,
          title: "Arrays and Linked Lists",
          content: "This chapter explores the implementation and operations of arrays and linked lists, comparing their performance characteristics.",
          questions: [
            {
              id: 2001,
              question: "What is the time complexity of accessing an element in an array?",
              answer: "The time complexity of accessing an element in an array is O(1) because array elements are stored at contiguous memory locations and can be directly accessed using their index."
            },
            {
              id: 2002,
              question: "What are the advantages of linked lists over arrays?",
              answer: "Linked lists offer dynamic size allocation, efficient insertion and deletion operations (O(1) when position is known), and better memory utilization as they allocate memory as needed rather than pre-allocating a fixed block."
            }
          ]
        },
        {
          id: 202,
          title: "Trees and Graphs",
          content: "This chapter covers hierarchical and network data structures, including binary trees, balanced trees, and various graph representations.",
          questions: [
            {
              id: 2003,
              question: "What is a binary search tree?",
              answer: "A binary search tree is a binary tree data structure where each node has at most two children, and for each node, all elements in its left subtree are less than the node's value, and all elements in its right subtree are greater than the node's value."
            },
            {
              id: 2004,
              question: "What is the difference between BFS and DFS traversal in graphs?",
              answer: "Breadth-First Search (BFS) explores all neighbors at the current depth before moving to nodes at the next depth level, typically using a queue. Depth-First Search (DFS) explores as far as possible along a branch before backtracking, typically using recursion or a stack."
            }
          ]
        }
      ],
      syllabus: "/dsa-syllabus.pdf",
      questionPaper: "/dsa-question-paper.pdf"
    },
    {
      id: 3,
      title: "Web Development Fundamentals",
      description: "Master the core technologies of modern web development.",
      image: "/api/placeholder/400/250",
      chapters: [
        {
          id: 301,
          title: "HTML and CSS Basics",
          content: "This chapter introduces the fundamental building blocks of web pages: HTML for structure and CSS for presentation.",
          questions: [
            {
              id: 3001,
              question: "What is the difference between HTML and CSS?",
              answer: "HTML (HyperText Markup Language) defines the structure and content of web pages using elements and tags, while CSS (Cascading Style Sheets) controls the presentation, formatting, and layout of HTML elements."
            },
            {
              id: 3002,
              question: "Explain the CSS box model.",
              answer: "The CSS box model describes the rectangular boxes generated for elements in the document tree. It consists of content, padding, border, and margin areas. The content area contains the actual content, padding creates space around the content, border surrounds the padding, and margin creates space outside the border."
            }
          ]
        },
        {
          id: 302,
          title: "JavaScript and DOM Manipulation",
          content: "This chapter covers client-side scripting with JavaScript and how to dynamically interact with web page content through the Document Object Model (DOM).",
          questions: [
            {
              id: 3003,
              question: "What is the DOM in web development?",
              answer: "The Document Object Model (DOM) is a programming interface for web documents. It represents the page as a tree of objects that can be manipulated with JavaScript, allowing dynamic changes to the content, structure, and style of documents."
            },
            {
              id: 3004,
              question: "What is the difference between let, const, and var in JavaScript?",
              answer: "var has function scope and is hoisted, let has block scope and is not hoisted to the top, and const is similar to let but its value cannot be reassigned after initialization. Both let and const were introduced in ES6 to address issues with var."
            }
          ]
        }
      ],
      syllabus: "/webdev-syllabus.pdf",
      questionPaper: "/webdev-question-paper.pdf"
    }
  ];