const defaultChapter = {
  id: 1,
  title: "Introduction",
  topics: [
    {
      id: 1,
      title: "Overview",
      description: "Study materials will be added soon.",
      videos: [],
      pdfs: [],
      externalLinks: [],
      mcqs: [],
    },
  ],
};

export const courses = [
  {
    "id": 1,
    "title": "Computer Engineering",
    "description": "Course equivalent to a Bachelor's degree in Computer Science Engineering.",
    "image": "https://www.accurate.in/img/college/1662107573-bachelor-in-computer-science-engineering.jpg",
    "syllabusLink": "/pdfs/web-dev-syllabus.pdf",
    "modelQuestionPaperLink": "/pdfs/web-dev-questions.pdf",
    "chapters": [
      {
        "id": 1,
        "title": "Concept of Basic Electrical and Electronics Engineering",
        "topics": [
          {
            "id": 1,
            "title": "Basic concept",
            "description": "Ohm´s law, electric voltage current, power and energy, conducting and insulating materials. Series and parallel electric circuits, star-delta and delta-star conversion, Kirchhoff’s law, linear and non-linear circuit, bilateral and unilateral circuits, active and passive circuits.",
            "videos": [
              {
                "id": 1,
                "title": "Ohm's Law Explained",
                "url": "https://www.youtube.com/watch?v=8iSYWzYEDkw"
              },
              {
                "id": 2,
                "title": "Series and Parallel Circuits",
                "url": "https://www.youtube.com/watch?v=APtb6ZvjG-M"
              }
            ],
            "pdfs": [
              {
                "id": 1,
                "title": "Ohm's Law and Circuits Notes",
                "url": "/pdfs/ohms-law.pdf"
              }
            ],
            "externalLinks": [
              {
                "id": 1,
                "title": "Basic Electrical Engineering - Khan Academy",
                "url": "https://www.khanacademy.org/science/electrical-engineering"
              }
            ],
            "mcqs": [
              {
                "id": 1,
                "question": "What does Ohm's Law state?",
                "options": ["V = IR", "P = VI", "I = VR", "V = IR^2"],
                "correctAnswer": "V = IR",
                "explanation": "Ohm's Law relates voltage (V), current (I), and resistance (R) in a linear circuit as V = IR."
              },
              {
                "id": 2,
                "question": "Which circuit type allows current to split and recombine?",
                "options": ["Series", "Open", "Parallel", "Short"],
                "correctAnswer": "Parallel",
                "explanation": "In parallel circuits, current divides across branches and recombines."
              }
            ]
          },
          {
            "id": 2,
            "title": "Network theorems",
            "description": "Concept of superposition theorem, Thevenin’s theorem, Norton’s theorem, maximum power transfer theorem. R-L, R-C, R-L-C circuits, resonance in AC series and parallel circuit, active and reactive power.",
            "videos": [
              {
                "id": 1,
                "title": "Thevenin's Theorem Tutorial",
                "url": "https://www.youtube.com/watch?v=8T9CkszDGxI"
              }
            ],
            "pdfs": [
              {
                "id": 1,
                "title": "Network Theorems Summary",
                "url": "/pdfs/network-theorems.pdf"
              }
            ],
            "externalLinks": [
              {
                "id": 1,
                "title": "Electrical Theorems on Electronics Tutorials",
                "url": "https://www.electronics-tutorials.ws/dccircuits/theorems.html"
              }
            ],
            "mcqs": [
              {
                "id": 1,
                "question": "Thevenin’s theorem is applicable to which kind of circuits?",
                "options": ["Linear", "Non-linear", "Passive", "None of these"],
                "correctAnswer": "Linear",
                "explanation": "Thevenin’s theorem is used to simplify linear circuits."
              }
            ]
          },
          {
            "id": 3,
            "title": "Alternating current fundamentals",
            "description": "Principle of generation of alternating voltages and currents and their equations and waveforms, average, peak and rms values. Three phase system.",
            "videos": [
              {
                "id": 1,
                "title": "AC Voltage and Current - Basics",
                "url": "https://www.youtube.com/watch?v=wCWXbqZ4bBk"
              }
            ],
            "pdfs": [],
            "externalLinks": [
              {
                "id": 1,
                "title": "Three Phase Power - Learn Engineering",
                "url": "https://learnengineering.org/three-phase-power.html"
              }
            ],
            "mcqs": [
              {
                "id": 1,
                "question": "What is the relation between peak and RMS value of AC?",
                "options": ["RMS = Peak", "RMS = 0.707 * Peak", "RMS = 1.41 * Peak", "RMS = 2 * Peak"],
                "correctAnswer": "RMS = 0.707 * Peak",
                "explanation": "RMS value of a sinusoidal AC voltage is 0.707 times its peak value."
              }
            ]
          },
          {
            "id": 4,
            "title": "Semiconductor devices",
            "description": "Semiconductor diode and its characteristics, BJT Configuration and biasing, small and large signal model, working principle and application of MOSFET and CMOS.",
            "videos": [
              {
                "id": 1,
                "title": "Semiconductor Basics",
                "url": "https://www.youtube.com/watch?v=KpIoPcXJZcw"
              }
            ],
            "pdfs": [],
            "externalLinks": [
              {
                "id": 1,
                "title": "All About Circuits - Diodes and Transistors",
                "url": "https://www.allaboutcircuits.com/textbook/semiconductors/"
              }
            ],
            "mcqs": [
              {
                "id": 1,
                "question": "Which device is commonly used for switching and amplification?",
                "options": ["Diode", "Resistor", "Capacitor", "BJT"],
                "correctAnswer": "BJT",
                "explanation": "BJTs are widely used for switching and amplification in electronic circuits."
              }
            ]
          },
          {
            "id": 5,
            "title": "Signal generator",
            "description": "Basic Principles of Oscillator, RC, LC and Crystal Oscillators Circuits. Waveform generators.",
            "videos": [
              {
                "id": 1,
                "title": "RC and LC Oscillators - Explained",
                "url": "https://www.youtube.com/watch?v=rc2UnfvaDoM"
              }
            ],
            "pdfs": [],
            "externalLinks": [
              {
                "id": 1,
                "title": "Oscillator Circuits Tutorial",
                "url": "https://www.electronics-tutorials.ws/oscillator/oscillators.html"
              }
            ],
            "mcqs": [
              {
                "id": 1,
                "question": "Which oscillator provides highly stable frequency output?",
                "options": ["RC", "LC", "Crystal", "Relaxation"],
                "correctAnswer": "Crystal",
                "explanation": "Crystal oscillators use the mechanical resonance of a vibrating crystal for stable frequency."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Civil Engineering",
    description: "Core concepts of civil engineering for the NEC exam.",
    image: "https://via.placeholder.com/400x200?text=Civil+Engineering",
    syllabusLink: "/pdfs/placeholder.pdf",
    modelQuestionPaperLink: "/pdfs/placeholder.pdf",
    chapters: [
      {
        id: 1,
        title: "Engineering Materials",
        topics: [
          {
            id: 1,
            title: "Cement and Concrete",
            description: "Types, properties and uses of cement and concrete.",
            videos: [],
            pdfs: [
              { id: 1, title: "Cement Basics", url: "/pdfs/placeholder.pdf" }
            ],
            externalLinks: [],
            mcqs: [
              {
                id: 1,
                question: "Which ingredient of cement contributes to strength?",
                options: ["Lime", "Silica", "Alumina", "Gypsum"],
                correctAnswer: "Lime",
                explanation: "Lime (CaO) imparts strength and soundness to cement."
              }
            ]
          },
          {
            id: 2,
            title: "Steel and Timber",
            description: "Properties and applications of structural steel and timber.",
            videos: [],
            pdfs: [],
            externalLinks: [],
            mcqs: []
          }
        ]
      },
      {
        id: 2,
        title: "Structural Analysis",
        topics: [
          {
            id: 1,
            title: "Stress and Strain",
            description: "Basic concepts of stress, strain and elastic constants.",
            videos: [],
            pdfs: [],
            externalLinks: [],
            mcqs: []
          },
          {
            id: 2,
            title: "Bending Moment Diagram",
            description: "Shear force and bending moment calculations for beams.",
            videos: [],
            pdfs: [],
            externalLinks: [],
            mcqs: []
          }
        ]
      }
    ],
  },
  {
    id: 3,
    title: "Architecture",
    description: "Fundamentals of architecture and building design.",
    image: "https://via.placeholder.com/400x200?text=Architecture",
    syllabusLink: "/pdfs/placeholder.pdf",
    modelQuestionPaperLink: "/pdfs/placeholder.pdf",
    chapters: [
      {
        id: 1,
        title: "Principles of Design",
        topics: [
          {
            id: 1,
            title: "Design Elements",
            description: "Line, shape, texture and color in architectural design.",
            videos: [],
            pdfs: [],
            externalLinks: [],
            mcqs: []
          },
          {
            id: 2,
            title: "Building Orientation",
            description: "Climate responsive building orientation principles.",
            videos: [],
            pdfs: [],
            externalLinks: [],
            mcqs: []
          }
        ]
      },
      {
        id: 2,
        title: "Building Materials",
        topics: [
          {
            id: 1,
            title: "Sustainable Materials",
            description: "Overview of eco-friendly building materials.",
            videos: [],
            pdfs: [],
            externalLinks: [],
            mcqs: []
          }
        ]
      }
    ],
  },
  {
    id: 4,
    title: "Electrical Engineering",
    description: "Electrical engineering principles and practices.",
    image: "https://via.placeholder.com/400x200?text=Electrical+Engineering",
    syllabusLink: "/pdfs/placeholder.pdf",
    modelQuestionPaperLink: "/pdfs/placeholder.pdf",
    chapters: [
      {
        id: 1,
        title: "Circuit Theory",
        topics: [
          {
            id: 1,
            title: "Kirchhoff's Laws",
            description: "Application of KCL and KVL in electric circuits.",
            videos: [],
            pdfs: [],
            externalLinks: [],
            mcqs: []
          },
          {
            id: 2,
            title: "AC Fundamentals",
            description: "Sinusoidal waveforms and phasor representation.",
            videos: [],
            pdfs: [],
            externalLinks: [],
            mcqs: []
          }
        ]
      },
      {
        id: 2,
        title: "Machines and Power",
        topics: [
          {
            id: 1,
            title: "Transformers",
            description: "Working principle of single phase transformers.",
            videos: [],
            pdfs: [],
            externalLinks: [],
            mcqs: []
          },
          {
            id: 2,
            title: "Synchronous Machines",
            description: "Construction and operation of synchronous generators.",
            videos: [],
            pdfs: [],
            externalLinks: [],
            mcqs: []
          }
        ]
      }
    ],
  },
  {
    id: 5,
    title: "Electronics & Communication Engineering",
    description: "Electronics and communication systems for the NEC exam.",
    image: "https://via.placeholder.com/400x200?text=Electronics+%26+Communication",
    syllabusLink: "/pdfs/placeholder.pdf",
    modelQuestionPaperLink: "/pdfs/placeholder.pdf",
    chapters: [
      {
        id: 1,
        title: "Analog Electronics",
        topics: [
          {
            id: 1,
            title: "Amplifiers",
            description: "Classification and frequency response of amplifiers.",
            videos: [],
            pdfs: [],
            externalLinks: [],
            mcqs: []
          },
          {
            id: 2,
            title: "Oscillators",
            description: "Barkhausen criterion and common oscillator circuits.",
            videos: [],
            pdfs: [],
            externalLinks: [],
            mcqs: []
          }
        ]
      },
      {
        id: 2,
        title: "Digital Communication",
        topics: [
          {
            id: 1,
            title: "Modulation Techniques",
            description: "ASK, FSK and PSK modulation schemes.",
            videos: [],
            pdfs: [],
            externalLinks: [],
            mcqs: []
          }
        ]
      }
    ],
  },
  {
    id: 6,
    title: "Mechanical Engineering",
    description: "Mechanical engineering topics and design.",
    image: "https://via.placeholder.com/400x200?text=Mechanical+Engineering",
    syllabusLink: "/pdfs/placeholder.pdf",
    modelQuestionPaperLink: "/pdfs/placeholder.pdf",
    chapters: [
      {
        id: 1,
        title: "Thermodynamics",
        topics: [
          {
            id: 1,
            title: "First Law",
            description: "Energy conservation in closed and open systems.",
            videos: [],
            pdfs: [],
            externalLinks: [],
            mcqs: []
          },
          {
            id: 2,
            title: "Second Law",
            description: "Entropy and Carnot efficiency.",
            videos: [],
            pdfs: [],
            externalLinks: [],
            mcqs: []
          }
        ]
      },
      {
        id: 2,
        title: "Fluid Mechanics",
        topics: [
          {
            id: 1,
            title: "Bernoulli's Equation",
            description: "Energy balance in flowing fluids.",
            videos: [],
            pdfs: [],
            externalLinks: [],
            mcqs: []
          },
          {
            id: 2,
            title: "Flow Measurement",
            description: "Venturimeter and orifice meter principles.",
            videos: [],
            pdfs: [],
            externalLinks: [],
            mcqs: []
          }
        ]
      }
    ],
  },
  {
    id: 7,
    title: "Industrial & Manufacturing Engineering",
    description: "Industrial processes and manufacturing systems.",
    image: "https://via.placeholder.com/400x200?text=Industrial+%26+Manufacturing",
    syllabusLink: "/pdfs/placeholder.pdf",
    modelQuestionPaperLink: "/pdfs/placeholder.pdf",
    chapters: [defaultChapter],
  },
  {
    id: 8,
    title: "Agricultural Engineering",
    description: "Engineering solutions for agriculture.",
    image: "https://via.placeholder.com/400x200?text=Agricultural+Engineering",
    syllabusLink: "/pdfs/placeholder.pdf",
    modelQuestionPaperLink: "/pdfs/placeholder.pdf",
    chapters: [defaultChapter],
  },
  {
    id: 9,
    title: "Chemical Engineering",
    description: "Chemical processes and technologies.",
    image: "https://via.placeholder.com/400x200?text=Chemical+Engineering",
    syllabusLink: "/pdfs/placeholder.pdf",
    modelQuestionPaperLink: "/pdfs/placeholder.pdf",
    chapters: [defaultChapter],
  },
  {
    id: 10,
    title: "Biomedical Engineering",
    description: "Medical devices and biological engineering.",
    image: "https://via.placeholder.com/400x200?text=Biomedical+Engineering",
    syllabusLink: "/pdfs/placeholder.pdf",
    modelQuestionPaperLink: "/pdfs/placeholder.pdf",
    chapters: [defaultChapter],
  },
  {
    id: 11,
    title: "Geomatics/Survey Engineering",
    description: "Surveying and geomatics technologies.",
    image: "https://via.placeholder.com/400x200?text=Geomatics+Engineering",
    syllabusLink: "/pdfs/placeholder.pdf",
    modelQuestionPaperLink: "/pdfs/placeholder.pdf",
    chapters: [defaultChapter],
  },
  {
    id: 12,
    title: "Hydropower/Water Resources Engineering",
    description: "Hydropower and water resource management.",
    image: "https://via.placeholder.com/400x200?text=Hydropower+Engineering",
    syllabusLink: "/pdfs/placeholder.pdf",
    modelQuestionPaperLink: "/pdfs/placeholder.pdf",
    chapters: [defaultChapter],
  },
  {
    id: 13,
    title: "Environmental Engineering",
    description: "Environmental protection and sustainability.",
    image: "https://via.placeholder.com/400x200?text=Environmental+Engineering",
    syllabusLink: "/pdfs/placeholder.pdf",
    modelQuestionPaperLink: "/pdfs/placeholder.pdf",
    chapters: [defaultChapter],
  },
  {
    id: 14,
    title: "Mining Engineering",
    description: "Exploration and extraction of minerals.",
    image: "https://via.placeholder.com/400x200?text=Mining+Engineering",
    syllabusLink: "/pdfs/placeholder.pdf",
    modelQuestionPaperLink: "/pdfs/placeholder.pdf",
    chapters: [defaultChapter],
  },
  {
    id: 15,
    title: "Automobile Engineering",
    description: "Design and development of automobiles.",
    image: "https://via.placeholder.com/400x200?text=Automobile+Engineering",
    syllabusLink: "/pdfs/placeholder.pdf",
    modelQuestionPaperLink: "/pdfs/placeholder.pdf",
    chapters: [defaultChapter],
  },
  {
    id: 16,
    title: "Metallurgical Engineering",
    description: "Metals and material science engineering.",
    image: "https://via.placeholder.com/400x200?text=Metallurgical+Engineering",
    syllabusLink: "/pdfs/placeholder.pdf",
    modelQuestionPaperLink: "/pdfs/placeholder.pdf",
    chapters: [defaultChapter],
  },
];

export default courses;
