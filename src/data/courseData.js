export const courses = [
    {
      id: 1,
      title: "Computer Engineering",
      description: "Course equivalent to a Bachelor's degree in Computer Science Engineering.",
      image: "https://www.accurate.in/img/college/1662107573-bachelor-in-computer-science-engineering.jpg",
      syllabusLink: "/pdfs/web-dev-syllabus.pdf",
      modelQuestionPaperLink: "/pdfs/web-dev-questions.pdf",
      chapters: [
        {
          id: 1,
          title: " Concept of Basic Electrical and Electronics Engineering",
          topics: [
            {
              id: 1,
              title: "Basic concept",
              description: "Ohm´s law, electric voltage current, power and energy, conducting and insulating materials. Series and parallel electric circuits, start-delta and delta-star conversion, Kirchhoff’s law, linear and non-linear circuit, bilateral and unilateral circuits, active and passive circuits",
              videos: [
                {
                  id: 1,
                  title: "HTML Basics - Part 1",
                  url: "https://www.youtube.com/watch?v=abc123"
                },
                {
                  id: 2,
                  title: "HTML Document Structure",
                  url: "https://www.youtube.com/watch?v=def456"
                }
              ],
              pdfs: [
                {
                  id: 1,
                  title: "HTML Cheat Sheet",
                  url: "/pdfs/html-cheatsheet.pdf"
                }
              ],
              externalLinks: [
                {
                  id: 1,
                  title: "MDN HTML Documentation",
                  url: "https://developer.mozilla.org/en-US/docs/Web/HTML"
                }
              ],
              mcqs: [
                {
                  id: 1,
                  question: "Which tag is used to create a hyperlink in HTML?",
                  options: ["<link>", "<a>", "<href>", "<url>"],
                  correctAnswer: "<a>",
                  explanation: "The <a> (anchor) tag is used to create hyperlinks in HTML. The href attribute specifies the URL the link goes to."
                },
                {
                  id: 2,
                  question: "Which HTML element is used to define the title of a document?",
                  options: ["<head>", "<title>", "<header>", "<meta>"],
                  correctAnswer: "<title>",
                  explanation: "The <title> tag defines the title of the document, which appears in the browser's title bar or tab."
                }
              ]
            },
            {
              id: 2,
              title: "Network theorems",
              description: "concept of superposition theorem, Thevenin`s theorem, Norton`s theorem, maximum power transfer theorem. R-L, R-C, R-L-C circuits, resonance in AC series and parallel circuit, active and reactive power",
              videos: [
                {
                  id: 1,
                  title: "Creating HTML Forms",
                  url: "https://www.youtube.com/watch?v=ghi789"
                }
              ],
              pdfs: [
                {
                  id: 1,
                  title: "HTML Forms Guide",
                  url: "/pdfs/html-forms.pdf"
                }
              ],
              externalLinks: [
                {
                  id: 1,
                  title: "HTML Forms Tutorial",
                  url: "https://www.w3schools.com/html/html_forms.asp"
                }
              ],
              mcqs: [
                {
                  id: 1,
                  question: "Which attribute is used to specify the HTTP method in a form?",
                  options: ["method", "type", "action", "http"],
                  correctAnswer: "method",
                  explanation: "The method attribute specifies the HTTP method (GET or POST) to be used when submitting form data."
                }
              ]
            }
          ]
        }
      ]
    },
  ];
  
  export default courses;