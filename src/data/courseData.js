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
  ];
  
  export default courses;