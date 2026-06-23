import { additionalComputerScienceChapters } from './csChaptersData';
import { additionalCivilEngineeringChapters } from './civilEngineringChaptersData';

export const courses = [
  {
    id: 2,
    title: "Civil Engineering",
    description: "Core concepts of civil engineering for the NEC exam.",
    image: "https://ik.imagekit.io/necweb/nec-web/civil-engineering.png?updatedAt=1759572965959",
    syllabusLink: "/pdfs/civil-engineering-syllabus.pdf",
    // modelQuestionPaperLink: "/pdfs/civil-engineering-model-question-paper.pdf",
    chapters: [
      {
        id: 1,
        title: "Basic Civil Engineering",
        topics: [
          {
            id: 1,
            title: "Engineering materials",
            description: "Properties (physical, chemical, mechanical and thermal); types, characteristics, composition, selection, and usage/function of engineering materials (stones, bricks, tiles, cement, lime, timber, metals/alloys, paints/varnishes, and asphalt/bitumen/tar).",
            videos: [],
            pdfs: [
              // { id: 1, title: "Cement Basics", url: "/pdfs/placeholder.pdf" }
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
      },
      ...additionalCivilEngineeringChapters
    ],
  },
  {
    "id": 1,
    "title": "Computer Engineering",
    "description": "Course equivalent to a Bachelor's degree in Computer Science Engineering.",
    "image": "https://ik.imagekit.io/necweb/nec-web/computer-engineering.png?updatedAt=1759573111993",
    "syllabusLink": "/pdfs/computer-engineering-syllabus.pdf",
    // "modelQuestionPaperLink": "/pdfs/computer-engineering-model-question-paper.pdf",
    "chapters": [
      {
        "id": 1,
        "title": "Concept of Basic Electrical and Electronics Engineering",
        "code": "AExE01",
        "topics": [
          {
            "id": 1,
            "title": "Basic concept",
            "description": "Ohm´s law, electric voltage current, power and energy, conducting and insulating materials. Series and parallel electric circuits, star-delta and delta-star conversion, Kirchhoff’s law, linear and non-linear circuit, bilateral and unilateral circuits, active and passive circuits.",
            "videos": [
              {
                "id": 1,
                "title": "Basic Electrical Engineering (Whole course Playlist 1)",
                "url": "https://www.youtube.com/playlist?list=PL3qvHcrYGy1v2kJX4SSsurE3_GdVe0ZD5"
              },
            ],
            "pdfs": [],
            "externalLinks": [
              {
                "id": 1,
                "title": "Kirchhoff's Laws Explained - All About Circuits",
                "url": "https://www.allaboutcircuits.com/textbook/direct-current/chpt-6/kirchhoffs-current-voltage-laws/"
              },
              {
                "id": 2,
                "title": "Basic Electrical Engineering - Khan Academy",
                "url": "https://www.khanacademy.org/science/electrical-engineering"
              },
              {
                "id": 3,
                "title": "MCQs on Simple DC Networks - Sanfoundry",
                "url": "https://www.sanfoundry.com/1000-basic-electrical-engineering-questions-answers/"
              },
              {
                "id": 4,
                "title": "Ohm’s Law — Wikipedia",
                "url": "https://en.wikipedia.org/wiki/Ohm%27s_law"
              },
              {
                "id": 5,
                "title": "Circuit Bread — Circuits 101",
                "url": "https://www.circuitbread.com/tutorials/series/circuits-101"
              },
            ],
            "mcqs": [
              {
                "id": 1,
                "question": "What is the relationship between voltage, current, and resistance in a linear resistor?",
                "options": ["V = IR", "I = VR", "R = V + I", "V = I^2R"],
                "correctAnswer": "V = IR",
                "explanation": "Ohm’s Law: voltage (V) = current (I) × resistance (R)."
              },
              {
                "id": 2,
                "question": "If current through a resistor is doubled and resistance remains constant, what happens to voltage?",
                "options": ["It halves", "It doubles", "It remains same", "It becomes zero"],
                "correctAnswer": "It doubles",
                "explanation": "V = I × R, so if I doubles, V doubles (for constant R)."
              },
              {
                "id": 3,
                "question": "Which of the following is a conductor?",
                "options": ["Copper", "Glass", "Rubber", "Wood"],
                "correctAnswer": "Copper",
                "explanation": "Copper has low resistivity and allows current flow easily."
              },
              {
                "id": 4,
                "question": "In a series circuit of resistors, how does current behave?",
                "options": ["Same through all resistors", "Splits across branches", "Inversely with voltage", "Zero through middle resistor"],
                "correctAnswer": "Same through all resistors",
                "explanation": "In series, current is common for all components."
              },
              {
                "id": 5,
                "question": "What is equivalent resistance of two resistors 4 Ω and 6 Ω in parallel?",
                "options": ["10 Ω", "2.4 Ω", "1.5 Ω", "24 Ω"],
                "correctAnswer": "2.4 Ω",
                "explanation": "1/R_eq = 1/4 + 1/6 = (3 + 2)/12 =5/12 → R_eq =12/5 =2.4 Ω."
              },
              {
                "id": 6,
                "question": "Which law states that sum of voltages around a closed loop equals zero?",
                "options": ["Kirchhoff’s Voltage Law", "Kirchhoff’s Current Law", "Ohm’s Law", "Thevenin’s Theorem"],
                "correctAnswer": "Kirchhoff’s Voltage Law",
                "explanation": "KVL: algebraic sum of voltages in closed loop = 0."
              },
              {
                "id": 7,
                "question": "Which is a non-linear circuit element?",
                "options": ["Resistor (constant)", "Linear resistor", "Diode (in forward region)", "Ideal inductor (linear)"],
                "correctAnswer": "Diode (in forward region)",
                "explanation": "A diode’s I–V curve is non-linear (not proportional)."
              },
              {
                "id": 8,
                "question": "A bilateral device is one that:",
                "options": ["Behaves same in both directions", "Allows current only one way", "Is non-linear", "Is active"],
                "correctAnswer": "Behaves same in both directions",
                "explanation": "Bilateral: response same in both current directions (e.g. resistor)."
              },
              {
                "id": 9,
                "question": "Which of the following is an active device?",
                "options": ["Battery", "Resistor", "Capacitor", "Switch"],
                "correctAnswer": "Battery",
                "explanation": "Active devices can inject energy (battery), passive ones absorb."
              },
              {
                "id": 10,
                "question": "If voltage is 12 V and current is 3 A through a resistor, what is the resistance?",
                "options": ["4 Ω", "36 Ω", "0.25 Ω", "9 Ω"],
                "correctAnswer": "4 Ω",
                "explanation": "R = V / I = 12 / 3 = 4 Ω."
              },
              {
                "id": 11,
                "question": "Ohm's Law states that current (I) is directly proportional to:",
                "options": ["Resistance (R)", "Voltage (V)", "Power (P)", "Energy (E)"],
                "correctAnswer": "Voltage (V)",
                "explanation": "Ohm’s law: V=IR. For a fixed resistance, current is directly proportional to voltage."
              },
              {
                "id": 12,
                "question": "Kirchhoff's Current Law (KCL) is based on the principle of conservation of:",
                "options": ["Energy", "Charge", "Momentum", "Mass"],
                "correctAnswer": "Charge",
                "explanation": "KCL states that the algebraic sum of currents entering a junction is zero, implying charge conservation."
              },
              {
                "id": 13,
                "question": "Which type of circuit components have the same current flowing through them?",
                "options": ["Parallel", "Series", "Star-connected", "Delta-connected"],
                "correctAnswer": "Series",
                "explanation": "In a series circuit, there is only one path for the current to flow, so it is the same everywhere."
              },
              {
                "id": 14,
                "question": "An ideal voltage source is an example of a/an:",
                "options": ["Passive circuit", "Unilateral circuit", "Active circuit", "Non-linear circuit"],
                "correctAnswer": "Active circuit",
                "explanation": "Active circuits contain sources of energy (like voltage or current sources)."
              },
              {
                "id": 15,
                "question": "A circuit whose parameters do not change with the change in the direction of current is known as a:",
                "options": ["Unilateral circuit", "Bilateral circuit", "Non-linear circuit", "Active circuit"],
                "correctAnswer": "Bilateral circuit",
                "explanation": "Bilateral circuits allow the same relationship between voltage and current regardless of the direction of the current."
              },
              {
                "id": 16,
                "question": "Which of the following elements is a non-linear circuit element?",
                "options": ["Resistor", "Inductor", "Diode", "Capacitor"],
                "correctAnswer": "Diode",
                "explanation": "A diode's V-I characteristic is not a straight line, making it a non-linear component."
              },
              {
                "id": 17,
                "question": "Kirchhoff's Voltage Law (KVL) is applied to:",
                "options": ["Junctions", "Loops/Meshes", "Open circuits only", "Series circuits only"],
                "correctAnswer": "Loops/Meshes",
                "explanation": "KVL is based on the conservation of energy and states that the sum of all voltages around any closed loop is zero."
              },
              {
                "id": 18,
                "question": "The reciprocal of resistance is called:",
                "options": ["Conductance", "Inductance", "Reactance", "Impedance"],
                "correctAnswer": "Conductance",
                "explanation": "Conductance (G) is the measure of how easily current flows, defined as G = 1/R."
              },
              {
                "id": 19,
                "question": "What is the equivalent resistance of three 6Ω resistors connected in parallel?",
                "options": ["18 Ω", "3 Ω", "2 Ω", "0.5 Ω"],
                "correctAnswer": "2 Ω",
                "explanation": "1/Req = 1/6 + 1/6 + 1/6 = 3/6 = 1/2. Therefore, Req = 2Ω."
              },
              {
                "id": 20,
                "question": "Power (P) dissipated by a resistor can be calculated using which formula?",
                "options": ["P = I/R", "P = V/I", "P = V²R", "P = I²R"],
                "correctAnswer": "P = I²R",
                "explanation": "Power is calculated as P = VI, and substituting V=IR yields P = I²R."
              },
              {
                "id": 21,
                "question": "Conversion from Delta (Δ) to Star (Y) is primarily used to simplify which type of circuit?",
                "options": ["Purely series circuits", "Simple parallel circuits", "Complex bridge circuits", "AC circuits only"],
                "correctAnswer": "Complex bridge circuits",
                "explanation": "Δ-Y transformation helps reduce complex bridge circuits or networks into simpler series-parallel configurations for analysis."
              }
            ]
          },
          {
            "id": 2,
            "title": "Network theorems",
            "description": "Concept of superposition theorem, Thevenin’s theorem, Norton’s theorem, maximum power transfer theorem. R-L, R-C, R-L-C circuits, resonance in AC series and parallel circuit, active and reactive power.",
            "videos": [
              {
                "id": 2,
                "title": "Playlist 1",
                "url": "https://www.youtube.com/playlist?list=PLF_7kfnwLFCELMB-TfYgbfAN2nuP-z4t5"
              },
              {
                "id": 3,
                "title": "Playlist 2",
                "url": "https://www.youtube.com/playlist?list=PLDN15nk5uLiBneL0CmKeI_LaVGR-fiC1j"
              },
            ],
            "pdfs": [],
            "externalLinks": [
              {
                "id": 1,
                "title": "All About Circuits – Thevenin & Norton",
                "url": "https://www.allaboutcircuits.com/textbook/direct-current/chpt-10/thevenins-theorem/"
              },
              {
                "id": 2,
                "title": "GeeksforGeeks – Network Analysis in Electric Circuits",
                "url": "https://www.geeksforgeeks.org/electrical-engineering/network-analysis-in-electric-circuits/"
              },
              {
                "id": 3,
                "title": "Wikipedia – Network analysis (electrical circuits)",
                "url": "https://en.wikipedia.org/wiki/Network_analysis_(electrical_circuits)"
              },
              {
                "id": 4,
                "title": "Thevenin's Theorem Questions with Answers - BYJU'S",
                "url": "https://byjus.com/physics/thevenins-theorem-questions/"
              },
              {
                "id": 5,
                "title": "Network Theorems Explained - Electronics Tutorials",
                "url": "https://www.electronics-tutorials.ws/dccircuits/theorems.html"
              },
              {
                "id": 6,
                "title": "MCQ on Thevenin's Theorem - Testbook",
                "url": "https://testbook.com/objective-questions/mcq-on-thevenins-theorem--5eea6a0e39140f30f369e58d"
              }
            ],
            "mcqs": [
              {
                "id": 1,
                "question": "Which theorem states that in a linear circuit, the response is the algebraic sum of responses caused by each independent source acting alone?",
                "options": ["Superposition theorem", "Norton’s theorem", "Thevenin’s theorem", "Maximum power transfer theorem"],
                "correctAnswer": "Superposition theorem",
                "explanation": "Superposition: consider one source at a time, sum responses (valid for linear circuits)."
              },
              {
                "id": 2,
                "question": "Under which condition does maximum power transfer occur in a load?",
                "options": ["Load resistance = source internal resistance", "Load resistance > source resistance", "Load resistance < source resistance", "Load resistance = 0"],
                "correctAnswer": "Load resistance = source internal resistance",
                "explanation": "Maximum power when R_load = R_source (for resistive circuits)."
              },
              {
                "id": 3,
                "question": "Thevenin’s theorem reduces a network to:",
                "options": ["Single voltage source + series resistance", "Single current source + series resistance", "Single current source + parallel resistance", "Single voltage source + parallel resistance"],
                "correctAnswer": "Single voltage source + series resistance",
                "explanation": "Thevenin equivalent is V_th in series with R_th."
              },
              {
                "id": 4,
                "question": "Norton’s equivalent circuit is:",
                "options": ["Current source in parallel with resistance", "Voltage source in series with resistance", "Current source in series with resistance", "Voltage source in parallel with resistance"],
                "correctAnswer": "Current source in parallel with resistance",
                "explanation": "Norton: I_N in parallel with R_N equivalent."
              },
              {
                "id": 5,
                "question": "Source transformation allows conversion between:",
                "options": ["Voltage-series form and current-parallel form", "Series and series only", "Parallel and parallel only", "Neither"],
                "correctAnswer": "Voltage-series form and current-parallel form",
                "explanation": "You can convert V_th + R to I_N || R and vice versa."
              },
              {
                "id": 6,
                "question": "When using superposition, how do you treat other independent sources?",
                "options": ["Turn off (set to zero)", "Double them", "Invert them", "Keep them"],
                "correctAnswer": "Turn off (set to zero)",
                "explanation": "Set voltage sources to zero (short) and current sources to zero (open) when superposing."
              },
              {
                "id": 7,
                "question": "If a circuit is non-linear, which theorem cannot be applied?",
                "options": ["Superposition theorem", "Thevenin’s theorem", "Norton’s theorem", "All of above"],
                "correctAnswer": "Superposition theorem",
                "explanation": "Superposition holds only for linear circuits (homogeneous, proportional)."
              },
              {
                "id": 8,
                "question": "Which theorem is best to simplify varying load analysis?",
                "options": ["Thevenin’s theorem", "KCL", "Kirchhoff’s laws", "None"],
                "correctAnswer": "Thevenin’s theorem",
                "explanation": "Thevenin equivalent simplifies reanalysis when load changes."
              },
              {
                "id": 9,
                "question": "In converting Thevenin to Norton, what is the relation between I_N and V_th?",
                "options": ["I_N = V_th / R_th", "I_N = V_th × R_th", "I_N = V_th^2 / R_th", "I_N = R_th / V_th"],
                "correctAnswer": "I_N = V_th / R_th",
                "explanation": "I_N = V_th / R_th for equivalent conversion."
              },
              {
                "id": 10,
                "question": "If R_th = 5 Ω and V_th = 10 V, what is I_N in Norton equivalent?",
                "options": ["2 A", "0.5 A", "50 A", "5 A"],
                "correctAnswer": "2 A",
                "explanation": "I_N = V_th / R_th = 10 / 5 = 2 A."
              },
              {
                "id": 11,
                "question": "Which of the following network theorems is applicable to any network, linear or non-linear?",
                "options": ["Thevenin’s Theorem", "Norton’s Theorem", "Superposition Theorem", "None of the above"],
                "correctAnswer": "None of the above",
                "explanation": "All major network theorems (Superposition, Thevenin, Norton) are only applicable to linear, bilateral circuits."
              },
              {
                "id": 12,
                "question": "Thevenin’s equivalent circuit consists of a voltage source in series with a resistor. What is this voltage source called?",
                "options": ["Load Voltage (VL)", "Thevenin Voltage (Vth)", "Norton Current (IN)", "Open Circuit Current (Io)"],
                "correctAnswer": "Thevenin Voltage (Vth)",
                "explanation": "Vth is the open-circuit voltage across the terminals."
              },
              {
                "id": 13,
                "question": "In the Maximum Power Transfer theorem, the load resistance should be equal to the equivalent resistance looking back into the source. What is this equivalent resistance?",
                "options": ["Load Resistance (RL)", "Thevenin Resistance (Rth)", "Norton Current (IN)", "Input Resistance (Rin)"],
                "correctAnswer": "Thevenin Resistance (Rth)",
                "explanation": "Maximum power transfer occurs when $R_L = R_{Th}$."
              },
              {
                "id": 14,
                "question": "To find Norton’s equivalent resistance ($R_N$) in a circuit with independent sources, what must be done to the voltage sources?",
                "options": ["Open-circuited", "Short-circuited", "Left as is", "Replaced by their internal resistance"],
                "correctAnswer": "Short-circuited",
                "explanation": "To find Rth (which equals RN), independent voltage sources are shorted, and independent current sources are opened."
              },
              {
                "id": 15,
                "question": "Norton’s equivalent circuit uses a current source in parallel with a resistor. What is the current source called?",
                "options": ["Thevenin Voltage (Vth)", "Open Circuit Voltage (Voc)", "Short Circuit Current (IN)", "Load Current (IL)"],
                "correctAnswer": "Short Circuit Current (IN)",
                "explanation": "The Norton Current (IN) is the short-circuit current across the terminals."
              },
              {
                "id": 16,
                "question": "At series resonance in an R-L-C circuit, the net reactance is:",
                "options": ["Inductive", "Capacitive", "Zero", "Maximum"],
                "correctAnswer": "Zero",
                "explanation": "At series resonance, the inductive reactance ($X_L$) equals the capacitive reactance ($X_C$), leading to zero net reactance."
              },
              {
                "id": 17,
                "question": "The apparent power in an AC circuit is the product of:",
                "options": ["V and I", "V and I multiplied by Power Factor", "V and I multiplied by sin($\phi$)", "Only Real Power"],
                "correctAnswer": "V and I",
                "explanation": "Apparent Power (S) = V_{rms} * I_{rms}, measured in Volt-Amperes (VA)."
              },
              {
                "id": 18,
                "question": "The unit of Reactive Power is:",
                "options": ["Watts (W)", "Volt-Amperes (VA)", "Volt-Amperes Reactive (VAR)", "Joules (J)"],
                "correctAnswer": "Volt-Amperes Reactive (VAR)",
                "explanation": "Reactive power (Q) is measured in VAR, while Active power (P) is measured in Watts."
              },
              {
                "id": 19,
                "question": "The Thevenin and Norton equivalent resistances are always:",
                "options": ["Inversely proportional", "Equal", "Independent of each other", "Dependent on the load"],
                "correctAnswer": "Equal",
                "explanation": "$R_{Th}$ and $R_N$ are the same resistance, found by zeroing all independent sources."
              },
              {
                "id": 20,
                "question": "Superposition theorem is applicable only when all circuit components are:",
                "options": ["Linear and passive", "Non-linear and bilateral", "Linear and bilateral", "Non-linear and unilateral"],
                "correctAnswer": "Linear and bilateral",
                "explanation": "Superposition requires linearity (output is proportional to input) and bilateral nature."
              },
              {
                "id": 21,
                "question": "For maximum power transfer, the efficiency of the circuit is typically:",
                "options": ["100%", "50%", "75%", "Less than 25%"],
                "correctAnswer": "50%",
                "explanation": "The source resistance dissipates half the total power, making the efficiency of transfer 50%."
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
                "title": "Playlist 1",
                "url": "https://www.youtube.com/playlist?list=PLPIwNooIb9viRyhruszVfjIusfF2b5TTn"
              }
            ],
            "pdfs": [],
            "externalLinks": [
              {
                "id": 1,
                "title": "Wikipedia – RMS value",
                "url": "https://en.wikipedia.org/wiki/Root_mean_square"
              },
              {
                "id": 2,
                "title": "RMS Value of AC - Formula, Meaning & Examples - Vedantu",
                "url": "https://www.vedantu.com/physics/rms-value-alternating-current"
              },
              {
                "id": 3,
                "title": "All About Circuits – AC Basics",
                "url": "https://www.allaboutcircuits.com/textbook/alternating-current/"
              },
              {
                "id": 4,
                "title": "Electrical4U – Three Phase System",
                "url": "https://www.electrical4u.com/three-phase-system/"
              },

              {
                "id": 5,
                "title": "Three Phase Power - Learn Engineering",
                "url": "https://learnengineering.org/three-phase-power.html"
              },
              {
                "id": 6,
                "title": "Average & RMS Values of AC MCQs - Sanfoundry",
                "url": "https://www.sanfoundry.com/basic-electrical-engineering-questions-answers-average-rms-values-alternating-current/"
              }
            ],
            "mcqs": [
              {
                "id": 1,
                "question": "What is the RMS value of a sinusoidal AC voltage with peak voltage Vₚ?",
                "options": ["Vₚ", "Vₚ / 2", "Vₚ / √2", "2 Vₚ"],
                "correctAnswer": "Vₚ / √2",
                "explanation": "For sine wave, RMS = peak / √2 ≈ 0.707 × peak."
              },
              {
                "id": 2,
                "question": "If peak voltage is 170 V, what is its RMS value (approx)?",
                "options": ["170 V", "120 V", "240 V", "85 V"],
                "correctAnswer": "120 V",
                "explanation": "170 / √2 ≈ 120 V."
              },
              {
                "id": 3,
                "question": "Which waveform has same average and RMS values?",
                "options": ["DC (constant)", "Sine wave", "Square wave (symmetrical)", "Triangle wave"],
                "correctAnswer": "DC (constant)",
                "explanation": "For constant DC, average = RMS = same value."
              },
              {
                "id": 4,
                "question": "What is the relation between peak and zero-to-peak voltage?",
                "options": ["Peak = 2 × zero-to-peak", "Zero-to-peak = 2 × peak", "They are equal", "Zero-to-peak = peak/2"],
                "correctAnswer": "Zero-to-peak = 2 × peak",
                "explanation": "Zero-to-peak is full swing from +peak to −peak = 2 × peak."
              },
              {
                "id": 5,
                "question": "In a balanced three-phase system, the line voltage is √3 times the phase voltage (for Y connection)?",
                "options": ["True", "False", "Only for Δ connection", "Only for single phase"],
                "correctAnswer": "True",
                "explanation": "In Y, V_line = √3 × V_phase in balanced system."
              },
              {
                "id": 6,
                "question": "For pure resistive AC circuit, how is current relative to voltage?",
                "options": ["In phase", "Leads by 90°", "Lags by 90°", "No current flows"],
                "correctAnswer": "In phase",
                "explanation": "In pure resistance, voltage and current waveforms are in phase."
              },
              {
                "id": 7,
                "question": "In a pure inductive circuit, current lags voltage by:",
                "options": ["90°", "45°", "0°", "180°"],
                "correctAnswer": "90°",
                "explanation": "In ideal inductor, current lags voltage by 90°."
              },
              {
                "id": 8,
                "question": "Active power in AC circuit is given by P = VI cos ϕ. What is cos ϕ called?",
                "options": ["Power factor", "Efficiency", "Phase angle", "Admittance"],
                "correctAnswer": "Power factor",
                "explanation": "cos ϕ = power factor (real power to apparent power ratio)."
              },
              {
                "id": 9,
                "question": "If voltage = 230 V, current = 5 A, and power factor = 0.8, what is active power (P)?",
                "options": ["900 W", "1150 W", "920 W", "600 W"],
                "correctAnswer": "920 W",
                "explanation": "P = V × I × pf = 230 × 5 × 0.8 = 920 W."
              },
              {
                "id": 10,
                "question": "Which quantity represents reactive power (Q)?",
                "options": ["VI sin ϕ", "VI cos ϕ", "V/I", "V + I"],
                "correctAnswer": "VI sin ϕ",
                "explanation": "Reactive power Q = V × I × sin ϕ."
              },
              {
                "id": 11,
                "question": "The effective value of an alternating current is also known as the:",
                "options": ["Peak value", "Average value", "RMS value", "Instantaneous value"],
                "correctAnswer": "RMS value",
                "explanation": "The RMS (Root Mean Square) value is the heating-equivalent of a DC current, hence it is the effective value."
              },
              {
                "id": 12,
                "question": "For a sinusoidal voltage wave, the relationship between RMS voltage ($V_{rms}$) and Peak voltage ($V_{peak}$) is:",
                "options": ["$V_{rms} = V_{peak} / \sqrt{2}$", "$V_{rms} = V_{peak} \times \sqrt{2}$", "$V_{rms} = V_{peak} / 2$", "$V_{rms} = 2 \times V_{peak} / \pi$"],
                "correctAnswer": "$V_{rms} = V_{peak} / \sqrt{2}$",
                "explanation": "For a sinusoidal waveform, the RMS value is approximately 0.707 times the peak value."
              },
              {
                "id": 13,
                "question": "The average value of a symmetrical AC voltage waveform over one complete cycle is:",
                "options": ["$V_{peak} / \sqrt{2}$", "$2 V_{peak} / \pi$", "Zero", "Always positive"],
                "correctAnswer": "Zero",
                "explanation": "Due to symmetry, the positive half-cycle cancels the negative half-cycle over a full period."
              },
              {
                "id": 14,
                "question": "The ratio of RMS value to the Average value of an AC waveform is called the:",
                "options": ["Crest Factor", "Peak Factor", "Form Factor", "Quality Factor"],
                "correctAnswer": "Form Factor",
                "explanation": "Form Factor = RMS Value / Average Value."
              },
              {
                "id": 15,
                "question": "If the peak value of a sinusoidal current is 10 A, its RMS value is approximately:",
                "options": ["14.14 A", "10 A", "7.07 A", "6.37 A"],
                "correctAnswer": "7.07 A",
                "explanation": "$I_{rms} = 10 / \sqrt{2} \approx 7.07 A$."
              },
              {
                "id": 16,
                "question": "The frequency of the alternating current in the Indian power supply is:",
                "options": ["40 Hz", "50 Hz", "60 Hz", "100 Hz"],
                "correctAnswer": "50 Hz",
                "explanation": "Most of Asia and Europe use a 50 Hz standard."
              },
              {
                "id": 17,
                "question": "In a three-phase star (Y) connection, the Line Voltage ($V_L$) and Phase Voltage ($V_P$) relationship is:",
                "options": ["$V_L = V_P$", "$V_L = \sqrt{3} V_P$", "$V_L = V_P / \sqrt{3}$", "$V_L = 3 V_P$"],
                "correctAnswer": "$V_L = \sqrt{3} V_P$",
                "explanation": "In a star connection, the Line Voltage is $\sqrt{3}$ times the Phase Voltage, while the Line Current equals the Phase Current."
              },
              {
                "id": 18,
                "question": "An ideal pure inductor connected to an AC source will dissipate how much power?",
                "options": ["Maximum power", "Zero power", "A constant power", "Reactive power only"],
                "correctAnswer": "Zero power",
                "explanation": "For a pure inductor, the phase angle $\phi$ is $90^\circ$. Real power $P = V_{rms}I_{rms} \cos(90^\circ) = 0$."
              },
              {
                "id": 19,
                "question": "RMS stands for:",
                "options": ["Root Maximum Sum", "Root Mean Square", "Resistance Measurement Standard", "Radial Mean Summation"],
                "correctAnswer": "Root Mean Square",
                "explanation": "It's the square root of the mean (average) of the squares of the instantaneous values."
              },
              {
                "id": 20,
                "question": "If the RMS value of a square wave is 10 V, what is its Peak value?",
                "options": ["14.14 V", "7.07 V", "10 V", "20 V"],
                "correctAnswer": "10 V",
                "explanation": "For a square wave, $V_{rms} = V_{peak}$."
              },
              {
                "id": 21,
                "question": "The ratio of Peak value to RMS value is known as the:",
                "options": ["Peak Factor or Crest Factor", "Form Factor", "Power Factor", "Form Factor"],
                "correctAnswer": "Peak Factor or Crest Factor",
                "explanation": "Peak Factor = $V_{peak} / V_{rms}$."
              }
            ]
          },
          {
            "id": 4,
            "title": "Semiconductor devices",
            "description": "Semiconductor diode and its characteristics, BJT Configuration and biasing, small and large signal model, working principle and application of MOSFET and CMOS.",
            "videos": [],
            "pdfs": [],
            "externalLinks": [
              {
                "id": 1,
                "title": "All About Circuits – Semiconductors",
                "url": "https://www.allaboutcircuits.com/textbook/semiconductors/"
              },
              {
                "id": 2,
                "title": "Electronics Tutorials – Diodes & Transistors",
                "url": "https://www.electronics-tutorials.ws/diode/diode_2.html"
              },
              {
                "id": 3,
                "title": "Khan Academy – Semiconductor devices",
                "url": "https://www.khanacademy.org/science/electrical-engineering/semiconductors"
              }],
            "mcqs": [
              {
                "id": 1,
                "question": "Which device allows current flow more easily in one direction than the other?",
                "options": ["Diode", "Resistor", "Inductor", "Capacitor"],
                "correctAnswer": "Diode",
                "explanation": "A diode is a unidirectional semiconductor device."
              },
              {
                "id": 2,
                "question": "In forward bias, a semiconductor diode’s barrier potential typically is about:",
                "options": ["0.7 V (silicon)", "5 V", "0 V", "10 V"],
                "correctAnswer": "0.7 V (silicon)",
                "explanation": "Silicon diode barrier ~0.7 V when forward biased."
              },
              {
                "id": 3,
                "question": "Which BJT configuration has highest input impedance?",
                "options": ["Emitter follower", "Common base", "Common collector", "Common emitter"],
                "correctAnswer": "Emitter follower",
                "explanation": "Common collector (emitter follower) has high input impedance."
              },
              {
                "id": 4,
                "question": "What is the main advantage of CMOS technology?",
                "options": ["Low power consumption", "High power consumption", "High leakage current", "Slow switching"],
                "correctAnswer": "Low power consumption",
                "explanation": "CMOS uses both NMOS and PMOS so static power is low."
              },
              {
                "id": 5,
                "question": "Which region does a MOSFET operate as a switch (on or off)?",
                "options": ["Cutoff and Saturation", "Linear only", "Triode only", "None"],
                "correctAnswer": "Cutoff and Saturation",
                "explanation": "MOSFET acts as switch in cutoff (off) and saturation (on) regions."
              },
              {
                "id": 6,
                "question": "Which transistor model is used for small signal AC analysis?",
                "options": ["Small-signal model", "Large-signal model", "Switching model", "Saturation model"],
                "correctAnswer": "Small-signal model",
                "explanation": "Small-signal model linearizes around bias point for AC."
              },
              {
                "id": 7,
                "question": "Which of the following is a major characteristic of intrinsic semiconductor?",
                "options": ["Pure, no doping", "Heavy doping", "Always insulating", "No electrons"],
                "correctAnswer": "Pure, no doping",
                "explanation": "Intrinsic means undoped semiconductor."
              },
              {
                "id": 8,
                "question": "Which mode does BJT operate when both junctions forward biased?",
                "options": ["Saturation", "Active", "Cutoff", "Reverse"],
                "correctAnswer": "Saturation",
                "explanation": "In saturation, both base-emitter and base-collector are forward-biased."
              },
              {
                "id": 9,
                "question": "Which of the following is correct about a MOSFET gate current in steady state (ideal)?",
                "options": ["Zero", "Very high", "Equal to drain current", "Equal to source current"],
                "correctAnswer": "Zero",
                "explanation": "MOSFET gate is insulated (oxide), so steady-state gate current ≈ 0."
              },
              {
                "id": 10,
                "question": "What happens if base-emitter junction of BJT is reverse biased?",
                "options": ["No base current flows", "Normal forward operation", "Collector current increases", "Device breaks down always"],
                "correctAnswer": "No base current flows",
                "explanation": "Reverse bias prevents base-emitter injection; no conduction in normal mode."
              },
              {
                "id": 11,
                "question": "For a BJT to operate in the Active Region (used for amplification), the Emitter-Base junction must be:",
                "options": ["Reverse biased", "Forward biased", "Breakdown", "Cut-off"],
                "correctAnswer": "Forward biased",
                "explanation": "The Active Region requires the Emitter-Base junction to be Forward Biased and the Collector-Base junction to be Reverse Biased."
              },
              {
                "id": 12,
                "question": "The typical forward voltage drop across a Silicon P-N junction diode is approximately:",
                "options": ["0.3 V", "0.7 V", "1.5 V", "2.0 V"],
                "correctAnswer": "0.7 V",
                "explanation": "Silicon diodes typically require around 0.7V to overcome the potential barrier and conduct."
              },
              {
                "id": 13,
                "question": "Which of the following semiconductor devices is a unipolar (majority carrier) device?",
                "options": ["BJT", "SCR", "Diode", "MOSFET"],
                "correctAnswer": "MOSFET",
                "explanation": "MOSFETs (and JFETs) are Field-Effect Transistors, which are controlled by voltage and use only one type of charge carrier (majority carrier)."
              },
              {
                "id": 14,
                "question": "In a BJT, the base region is generally:",
                "options": ["Heavily doped and thick", "Lightly doped and thick", "Heavily doped and thin", "Lightly doped and thin"],
                "correctAnswer": "Lightly doped and thin",
                "explanation": "A lightly doped and thin base allows most carriers from the emitter to pass directly to the collector, ensuring high current gain ($\beta$)."
              },
              {
                "id": 15,
                "question": "A Zener diode is primarily used as a:",
                "options": ["Rectifier", "Filter", "Amplifier", "Voltage regulator"],
                "correctAnswer": "Voltage regulator",
                "explanation": "Zener diodes operate in the reverse breakdown region to maintain a constant voltage across the load."
              },
              {
                "id": 16,
                "question": "CMOS logic gates utilize which type of transistor pair?",
                "options": ["Two NPN transistors", "Two PNP transistors", "N-channel MOSFET and P-channel MOSFET", "NPN and PNP BJT"],
                "correctAnswer": "N-channel MOSFET and P-channel MOSFET",
                "explanation": "CMOS (Complementary MOS) uses a complementary pair of n-MOS and p-MOS transistors for low power consumption."
              },
              {
                "id": 17,
                "question": "The BJT operating mode used when the transistor acts as an 'ON' switch (perfect short-circuit) is the:",
                "options": ["Active region", "Cut-off region", "Saturation region", "Inverse Active region"],
                "correctAnswer": "Saturation region",
                "explanation": "In saturation, both junctions are forward biased, $V_{CE}$ is minimum (near 0), and maximum current flows (closed switch)."
              },
              {
                "id": 18,
                "question": "A diode's ability to convert AC to pulsating DC is known as:",
                "options": ["Amplification", "Modulation", "Rectification", "Filtration"],
                "correctAnswer": "Rectification",
                "explanation": "A rectifier circuit uses diodes to convert alternating current (AC) into direct current (DC)."
              },
              {
                "id": 19,
                "question": "What is the relation between Collector current ($I_C$) and Base current ($I_B$) in the active region of a BJT?",
                "options": ["$I_C = \alpha I_E$", "$I_C = \beta I_B$", "$I_C = I_E$", "$I_C = I_B$"],
                "correctAnswer": "$I_C = \beta I_B$",
                "explanation": "Beta ($\beta$) is the current gain of the BJT in the common emitter configuration, where $\beta = I_C / I_B$."
              },
              {
                "id": 20,
                "question": "A MOSFET is controlled by:",
                "options": ["Base current", "Gate current", "Gate-Source voltage", "Drain-Source current"],
                "correctAnswer": "Gate-Source voltage",
                "explanation": "MOSFETs are voltage-controlled devices, where the voltage between the Gate and Source controls the channel conductivity."
              },
              {
                "id": 21,
                "question": "When a P-N junction is reverse biased, the depletion region:",
                "options": ["Narrows", "Widems", "Disappears", "Remains unchanged"],
                "correctAnswer": "Widems",
                "explanation": "Reverse bias increases the potential barrier, causing the depletion region to widen."
              }
            ]
          },
          {
            "id": 5,
            "title": "Signal generator",
            "description": "Basic Principles of Oscillator, RC, LC and Crystal Oscillators Circuits. Waveform generators.",
            "videos": [],
            "pdfs": [],
            "externalLinks": [
              {
                "id": 1,
                "title": "Electronics Tutorials – Oscillators",
                "url": "https://www.electronics-tutorials.ws/oscillator/oscillators.html"
              },
            ],
            "mcqs": [
              {
                "id": 1,
                "question": "Which condition must be satisfied for sustained oscillations (Barkhausen criteria)?",
                "options": ["Loop gain = 1 and net phase shift = 0 or 360°", "Loop gain < 1", "Negative feedback only", "Gain = 0"],
                "correctAnswer": "Loop gain = 1 and net phase shift = 0 or 360°",
                "explanation": "Barkhausen: |Aβ| = 1 and phase shift = 0° (or multiple of 360°)."
              },
              {
                "id": 2,
                "question": "Which oscillator gives the most stable frequency?",
                "options": ["Crystal oscillator", "RC oscillator", "LC oscillator", "Relaxation oscillator"],
                "correctAnswer": "Crystal oscillator",
                "explanation": "Crystal oscillators use quartz resonance → high stability."
              },
              {
                "id": 3,
                "question": "In an RC phase shift oscillator using 3 RC sections, what is the total phase shift introduced by the network?",
                "options": ["180°", "60°", "360°", "120°"],
                "correctAnswer": "180°",
                "explanation": "3 RC stages each ~60° produce ~180° shift; amplifier gives additional 180° → 360° total."
              },
              {
                "id": 4,
                "question": "Which oscillator works on positive feedback principle?",
                "options": ["Hartley oscillator", "Inverting amplifier", "Rectifier", "Comparator"],
                "correctAnswer": "Hartley oscillator",
                "explanation": "Oscillators require positive feedback to sustain oscillations."
              },
              {
                "id": 5,
                "question": "What type of waveform does a relaxation oscillator typically produce?",
                "options": ["Square or sawtooth", "Pure sine", "Random noise", "Exponential decay only"],
                "correctAnswer": "Square or sawtooth",
                "explanation": "Relaxation oscillators produce non-sinusoidal waveforms (square, ramp)."
              },
              {
                "id": 6,
                "question": "Which component is essential in a crystal oscillator circuit to control frequency?",
                "options": ["Quartz crystal", "Resistor", "Inductor", "Capacitor only"],
                "correctAnswer": "Quartz crystal",
                "explanation": "Quartz crystal provides stable resonance frequency in oscillator."
              },
              {
                "id": 7,
                "question": "In LC oscillator, oscillation frequency is determined by:",
                "options": ["1 / (2π √(LC))", "L × C", "L / C", "2π √(LC)"],
                "correctAnswer": "1 / (2π √(LC))",
                "explanation": "Resonant frequency f = 1 / (2π √(L C))."
              },
              {
                "id": 8,
                "question": "Which oscillator is easiest to implement at low frequencies (audio range)?",
                "options": ["RC oscillator", "LC oscillator", "Crystal oscillator", "Relaxation oscillator"],
                "correctAnswer": "RC oscillator",
                "explanation": "RC circuits are simpler and cost-effective at low frequency (audio)."
              },
              {
                "id": 9,
                "question": "Which is a drawback of LC oscillator compared to crystal oscillator?",
                "options": ["Lower frequency stability", "Larger size always", "Cannot produce sine wave", "Needs digital circuit always"],
                "correctAnswer": "Lower frequency stability",
                "explanation": "LC oscillators drift more with temperature, loading vs crystal is more stable."
              },
              {
                "id": 10,
                "question": "Which oscillator uses negative resistance concept in some designs?",
                "options": ["Gunn diode oscillator", "RC oscillator", "Hartley", "Wien-bridge"],
                "correctAnswer": "Gunn diode oscillator",
                "explanation": "Gunn diodes exhibit negative resistance region used in microwave oscillators."
              },
              {
                "id": 11,
                "question": "What kind of feedback is required for a circuit to operate as an oscillator?",
                "options": ["Negative feedback", "Positive feedback", "Unity feedback", "Differential feedback"],
                "correctAnswer": "Positive feedback",
                "explanation": "Oscillators require positive (regenerative) feedback to sustain oscillations without an external input signal."
              },
              {
                "id": 12,
                "question": "The frequency of oscillation for an LC circuit is inversely proportional to the square root of:",
                "options": ["L only", "C only", "LC product", "R only"],
                "correctAnswer": "LC product",
                "explanation": "The resonant frequency $f = 1 / (2 \pi \sqrt{LC})$."
              },
              {
                "id": 13,
                "question": "Which type of oscillator provides the highest frequency stability?",
                "options": ["RC Phase Shift Oscillator", "Colpitts Oscillator (LC)", "Wein Bridge Oscillator (RC)", "Crystal Oscillator"],
                "correctAnswer": "Crystal Oscillator",
                "explanation": "Crystal oscillators use the piezoelectric effect of quartz crystals, providing an extremely high Q-factor and stable frequency."
              },
              {
                "id": 14,
                "question": "The two conditions of the Barkhausen Criterion for sustained oscillations are:",
                "options": ["Loop gain $\beta A < 1$ and phase shift $0^\circ$", "Loop gain $\beta A = 1$ and phase shift $360^\circ$ (or $0^\circ$)", "Loop gain $\beta A > 1$ and phase shift $180^\circ$", "Loop gain $\beta A = 0$ and phase shift $180^\circ$"],
                "correctAnswer": "Loop gain $\beta A = 1$ and phase shift $360^\circ$ (or $0^\circ$)",
                "explanation": "The magnitude of the loop gain must be unity, and the total phase shift must be $0^\circ$ or an integer multiple of $360^\circ$."
              },
              {
                "id": 15,
                "question": "RC phase shift oscillators are typically used for generating signals in which frequency range?",
                "options": ["RF (Radio Frequencies)", "VHF (Very High Frequencies)", "AF (Audio Frequencies) and low frequencies", "Microwaves"],
                "correctAnswer": "AF (Audio Frequencies) and low frequencies",
                "explanation": "Due to the practical size limitations of R and C components, RC oscillators are better suited for lower frequency ranges (up to a few hundred kHz)."
              },
              {
                "id": 16,
                "question": "In a Colpitts oscillator, the feedback section is a:",
                "options": ["Tapped inductor", "Tapped capacitor", "Tapped resistor", "Only a transformer"],
                "correctAnswer": "Tapped capacitor",
                "explanation": "A Colpitts oscillator uses two capacitors in series parallel to an inductor in the tank circuit."
              },
              {
                "id": 17,
                "question": "How many minimum RC sections are required in an RC Phase Shift Oscillator to achieve the required $180^\circ$ phase shift in the feedback network?",
                "options": ["Two", "Three", "Four", "Five"],
                "correctAnswer": "Three",
                "explanation": "Each RC section can provide a maximum of $90^\circ$ phase shift, but due to loading effects, three sections are required to get the necessary $180^\circ$ while maintaining the gain criterion."
              },
              {
                "id": 18,
                "question": "Which effect is responsible for the operation of a crystal oscillator?",
                "options": ["Hall effect", "Doppler effect", "Piezoelectric effect", "Thermoelectric effect"],
                "correctAnswer": "Piezoelectric effect",
                "explanation": "The piezoelectric effect causes a mechanical vibration in the crystal when an electrical field is applied, which acts as a highly selective RLC circuit."
              },
              {
                "id": 19,
                "question": "An oscillator is a device that converts:",
                "options": ["AC energy into DC energy", "DC energy into AC energy", "Voltage into current", "Resistance into conductance"],
                "correctAnswer": "DC energy into AC energy",
                "explanation": "It takes DC power from the supply and converts it into a repetitive AC signal at a specific frequency."
              },
              {
                "id": 20,
                "question": "In the electrical equivalent circuit of a crystal, the shunt capacitance ($C_p$) is due to:",
                "options": ["The crystal's mass", "The mounting holder", "The lead resistance", "The internal doping"],
                "correctAnswer": "The mounting holder",
                "explanation": "The shunt capacitance $C_p$ is formed by the metal plates holding the crystal and the crystal's dielectric."
              },
              {
                "id": 21,
                "question": "Which component in an LC tank circuit is responsible for storing magnetic energy?",
                "options": ["Resistor", "Capacitor", "Inductor", "Transistor"],
                "correctAnswer": "Inductor",
                "explanation": "The inductor stores energy in its magnetic field, while the capacitor stores energy in its electric field."
              }
            ]
          }
        ]
      },
      {
        "chapter": 2,
        "title": "Digital Logic and Microprocessor",
        "code": "AExE02",
        "topics": [
          {
            "title": "Digital Logic Fundamentals",
            "description": "Introduction to digital systems, number systems (binary, octal, decimal, hexadecimal) and their conversions, and the fundamentals of Boolean algebra, including postulates, theorems, and logic gates (AND, OR, NOT, NAND, NOR, XOR, XNOR) as the basic building blocks of digital circuits.",
            "videos": [
              {
                "title": "Boolean Logic & Logic Gates: Crash Course Computer Science #3",
                "url": "https://www.youtube.com/watch?v=gI-qXk7XojA"
              },
              {
                "title": "Digital Electronics Course Playlist (Number Systems, Logic Gates)",
                "url": "https://www.youtube.com/playlist?list=PLBlnK6fEyqRjMH3mWf6kwqiTbT798eAOm"
              }
            ],
            "externalLinks": [
              {
                "title": "Boolean Algebra Laws and Rules - GeeksforGeeks",
                "url": "https://www.geeksforgeeks.org/boolean-algebra-laws-rules/"
              },
              {
                "title": "Logic Gates - Symbols, Truth Tables and Types - Tutorialspoint",
                "url": "https://www.tutorialspoint.com/logic_gates/index.htm"
              }
            ],
            "mcqs": [
              {
                "question": "Which logic gate is known as a universal gate?",
                "options": ["AND, OR", "XOR, XNOR", "NAND, NOR", "NOT, Buffer"],
                "correctAnswer": "NAND, NOR",
                "explanation": "NAND and NOR gates are called universal gates because any logic function can be implemented using only one type of these gates."
              },
              {
                "question": "The decimal equivalent of the binary number (10110)₂ is:",
                "options": ["20", "22", "24", "26"],
                "correctAnswer": "22",
                "explanation": "$(1 \times 2^4) + (0 \times 2^3) + (1 \times 2^2) + (1 \times 2^1) + (0 \times 2^0) = 16 + 0 + 4 + 2 + 0 = 22$"
              },
              {
                "question": "De Morgan's First Theorem states that:",
                "options": ["$(A+B)' = A'B'$", "$(AB)' = A'+B'$", "$A+A' = 1$", "$A \cdot A' = 0$"],
                "correctAnswer": "$(A+B)' = A'B'$",
                "explanation": "De Morgan's First Theorem states that the complement of a sum of variables is equal to the product of the complements of the variables."
              },
              {
                "question": "The largest decimal number that can be represented by a 12-bit binary number (unsigned) is:",
                "options": ["1023", "2047", "4095", "8191"],
                "correctAnswer": "4095",
                "explanation": "For an n-bit number, the largest value is $2^n - 1$. For $n=12$, $2^{12} - 1 = 4096 - 1 = 4095$."
              },
              {
                "question": "The process of converting a Boolean expression to its simplest form is called:",
                "options": ["Canonicalization", "Normalization", "Minimization", "Standardization"],
                "correctAnswer": "Minimization",
                "explanation": "Minimization (often done using K-Maps or Boolean algebra theorems) reduces the number of literals and terms, simplifying the circuit."
              },
              {
                "question": "The output of an XOR gate is 1 only when:",
                "options": ["Both inputs are 1", "Both inputs are 0", "Inputs are different", "Inputs are same"],
                "correctAnswer": "Inputs are different",
                "explanation": "An XOR gate (Exclusive OR) outputs 1 only if the two inputs are not equal."
              },
              {
                "question": "The hexadecimal number A3H is equivalent to the decimal number:",
                "options": ["163", "165", "160", "159"],
                "correctAnswer": "163",
                "explanation": "$A3_{16} = (10 \times 16^1) + (3 \times 16^0) = 160 + 3 = 163_{10}$."
              },
              {
                "question": "Which of the following is an incorrect Boolean algebra property?",
                "options": ["$A+1 = 1$", "$A \cdot 0 = 0$", "$A + \overline{A} = 1$", "$A \cdot A = 0$"],
                "correctAnswer": "$A \cdot A = 0$",
                "explanation": "The correct property is $A \cdot A = A$. The property $A \cdot A = 0$ is incorrect."
              },
              {
                "question": "A three-input NAND gate output is 0 if:",
                "options": ["All inputs are 0", "Any one input is 1", "All inputs are 1", "Two inputs are 1"],
                "correctAnswer": "All inputs are 1",
                "explanation": "A NAND gate is the complement of an AND gate. The output is 0 only when the AND operation of all inputs is 1 (i.e., all inputs are 1)."
              },
              {
                "question": "The expression for Sum of Products (SOP) is derived using:",
                "options": ["Minterms", "Maxterms", "Don't care terms", "Literal terms"],
                "correctAnswer": "Minterms",
                "explanation": "SOP uses Minterms (terms that make the function output 1), while Product of Sums (POS) uses Maxterms (terms that make the function output 0)."
              }
            ]
          },
          {
            "title": "Combinational Logic Circuits",
            "description": "Design and analysis of combinational circuits; K-Map simplification techniques (up to 4 variables); Arithmetic circuits (Half/Full Adder, Half/Full Subtractor); and Data processing circuits (Multiplexer, Demultiplexer, Encoder, Decoder).",
            "videos": [
              {
                "title": "Combinational Logic - Multiplexers",
                "url": "https://www.youtube.com/watch?v=kpGEL7Xynjc"
              },
              {
                "title": "Combinational Logic Circuits Playlist (Adders, Mux, Demux)",
                "url": "https://www.youtube.com/playlist?list=PLHhCOhnyK0J4T2Sl4K6QHUCLUWBBFiKHd"
              }
            ],
            "externalLinks": [
              {
                "title": "Karnaugh Maps (K-Map) Tutorial - Electronics Tutorials",
                "url": "https://www.electronics-tutorials.ws/combinational/karnaugh-map.html"
              },
              {
                "title": "Combinational Circuits Explained (Encoder, Decoder, MUX) - GeeksforGeeks",
                "url": "https://www.geeksforgeeks.org/combinational-circuits/"
              }
            ],
            "mcqs": [
              {
                "question": "How many select lines are required for a 16-to-1 Multiplexer?",
                "options": ["2", "4", "8", "16"],
                "correctAnswer": "4",
                "explanation": "A multiplexer with 'N' inputs requires 'n' select lines, where $N = 2^n$. For $16 = 2^4$, $n=4$."
              },
              {
                "question": "A Full Adder circuit is primarily constructed using:",
                "options": ["Two Half Adders and an OR gate", "Two Half Subtractors and an AND gate", "One Half Adder and one OR gate", "Two XOR gates and a NOT gate"],
                "correctAnswer": "Two Half Adders and an OR gate",
                "explanation": "A Full Adder requires two Half Adders to sum the two input bits and the carry-in bit, with an OR gate to combine the carry-out from the two Half Adders."
              },
              {
                "question": "A circuit whose output depends only on the present input values, and not on past input values, is a:",
                "options": ["Sequential Circuit", "Synchronous Circuit", "Memory Circuit", "Combinational Circuit"],
                "correctAnswer": "Combinational Circuit",
                "explanation": "Combinational circuits, like adders and multiplexers, do not have memory elements and their output is determined solely by the current inputs."
              },
              {
                "question": "The function of a Decoder is to:",
                "options": ["Convert $2^n$ inputs to $n$ outputs", "Convert $n$ inputs to $2^n$ outputs", "Select one of $2^n$ data inputs", "Perform arithmetic operations"],
                "correctAnswer": "Convert $n$ inputs to $2^n$ outputs",
                "explanation": "A decoder generates $2^n$ unique output lines based on $n$ input lines. For example, a 3-to-8 decoder takes 3 inputs and has 8 outputs."
              },
              {
                "question": "The number of cells in a 4-variable K-Map is:",
                "options": ["8", "16", "32", "64"],
                "correctAnswer": "16",
                "explanation": "For an $n$-variable K-Map, the number of cells is $2^n$. For 4 variables, $2^4 = 16$ cells."
              },
              {
                "question": "In a Half Subtractor, the 'Difference' output is equivalent to which gate?",
                "options": ["AND", "OR", "XOR", "NOR"],
                "correctAnswer": "XOR",
                "explanation": "The Difference (D) output of a Half Subtractor is $D = A \oplus B$, which is the XOR operation."
              },
              {
                "question": "A Demultiplexer is functionally the opposite of a:",
                "options": ["Encoder", "Decoder", "Multiplexer", "Comparator"],
                "correctAnswer": "Multiplexer",
                "explanation": "A Multiplexer (MUX) is a 'Many-to-One' selector, while a Demultiplexer (DEMUX) is a 'One-to-Many' distributor."
              },
              {
                "question": "Which combinational circuit is used to convert BCD to 7-segment display code?",
                "options": ["Encoder", "Decoder", "Multiplexer", "Priority Encoder"],
                "correctAnswer": "Decoder",
                "explanation": "A BCD-to-7-segment display decoder is a common type of decoder that converts a 4-bit BCD input into the appropriate 7-segment output signals."
              },
              {
                "question": "Which term in K-Map minimization represents a group of $2^k$ adjacent minterms?",
                "options": ["Literal", "Term", "Implicant", "Quine"],
                "correctAnswer": "Implicant",
                "explanation": "A group of adjacent 1's in a K-Map is called an implicant. A Prime Implicant is an implicant that cannot be combined with any other term to form a larger implicant."
              },
              {
                "question": "A carry look-ahead adder is faster than a ripple-carry adder because:",
                "options": ["It uses fewer gates", "It uses JK Flip-flops", "It calculates carry in parallel", "It operates asynchronously"],
                "correctAnswer": "It calculates carry in parallel",
                "explanation": "The Carry Look-Ahead Adder (CLA) speeds up addition by generating carries simultaneously, rather than waiting for the carry to ripple through from one stage to the next."
              }
            ]
          },
          {
            "title": "Sequential Logic Circuits",
            "description": "Difference between combinational and sequential circuits; memory elements: Latches (SR, D), Flip-Flops (SR, JK, D, T) and their operation (level vs. edge triggering); Counters (Synchronous/Asynchronous, Up/Down, Modulo-N); and Registers (Shift Registers, Parallel Load Registers).",
            "videos": [
              {
                "title": "Sequential Logic Circuits Playlist (Latches, Flip-Flops, Counters)",
                "url": "https://www.youtube.com/playlist?list=PLHhCOhnyK0J46gcz3GvHnYnX73Kr9xKQQ"
              },
              {
                "title": "Mastering Sequential Circuits: Flip-Flops, Registers, and Counters",
                "url": "https://www.youtube.com/watch?v=UEKSLb20ARw"
              }
            ],
            "externalLinks": [
              {
                "title": "Flip-Flops in Digital Electronics – Types, Truth Table, Circuit, and Uses",
                "url": "https://www.electronicsforu.com/technology-trends/learn-electronics/flip-flop-rs-jk-t-d"
              },
              {
                "title": "Sequential Circuits, Flip Flops, and Counters - Tutorialspoint",
                "url": "https://www.tutorialspoint.com/digital_electronics/digital_electronics_sequential_circuits.htm"
              }
            ],
            "mcqs": [
              {
                "question": "What is the primary difference between a Latch and a Flip-Flop?",
                "options": ["Latches are edge-triggered; Flip-Flops are level-triggered", "Latches are asynchronous; Flip-Flops are synchronous", "Latches have one stable state; Flip-Flops have two", "Latches are level-triggered; Flip-Flops are edge-triggered"],
                "correctAnswer": "Latches are level-triggered; Flip-Flops are edge-triggered",
                "explanation": "Latches change state when the enable signal is HIGH/LOW (level), while Flip-Flops change state only at the rising or falling edge of the clock signal."
              },
              {
                "question": "The 'race-around' condition is associated with which type of Flip-Flop?",
                "options": ["T Flip-Flop", "D Flip-Flop", "SR Flip-Flop", "JK Flip-Flop"],
                "correctAnswer": "JK Flip-Flop",
                "explanation": "The race-around condition occurs in an edge-triggered JK Flip-Flop when both J and K inputs are 1, causing the output to toggle multiple times during the active clock pulse."
              },
              {
                "question": "A register capable of shifting its stored bits one position to the right or left is called a:",
                "options": ["Parallel Register", "Shift Register", "Counter", "Memory Address Register"],
                "correctAnswer": "Shift Register",
                "explanation": "Shift registers are used for serial data transfer, serial-to-parallel conversion, and other sequential operations."
              },
              {
                "question": "The minimum number of Flip-Flops required to build a MOD-10 (Decade) counter is:",
                "options": ["3", "4", "5", "10"],
                "correctAnswer": "4",
                "explanation": "A counter with $N$ states requires $n$ Flip-Flops such that $2^{n-1} < N \le 2^n$. For $N=10$, $2^3 < 10 \le 2^4$, so $n=4$."
              },
              {
                "question": "The characteristic equation of a D Flip-Flop is:",
                "options": ["$Q_{n+1} = J\overline{Q} + \overline{K}Q$", "$Q_{n+1} = \overline{D}Q + D\overline{Q}$", "$Q_{n+1} = D$", "$Q_{n+1} = T \oplus Q$"],
                "correctAnswer": "$Q_{n+1} = D$",
                "explanation": "In a D Flip-Flop, the next state ($Q_{n+1}$) is always equal to the current input (D)."
              },
              {
                "question": "In an Asynchronous Counter, the clock input to all Flip-Flops is applied:",
                "options": ["Simultaneously", "Sequentially", "Only to the first Flip-Flop", "Only to the last Flip-Flop"],
                "correctAnswer": "Only to the first Flip-Flop",
                "explanation": "In an Asynchronous (Ripple) Counter, the output of the preceding Flip-Flop serves as the clock input for the next Flip-Flop."
              },
              {
                "question": "A **Serial-in Parallel-out (SIPO)** shift register is primarily used for:",
                "options": ["Data storage", "Frequency division", "Serial-to-Parallel data conversion", "Parallel-to-Serial data conversion"],
                "correctAnswer": "Serial-to-Parallel data conversion",
                "explanation": "SIPO registers accept data one bit at a time (serially) and output all bits simultaneously (in parallel)."
              },
              {
                "question": "What happens when the J and K inputs of a JK Flip-Flop are held at logic 0?",
                "options": ["The output resets", "The output sets", "The output toggles", "The output holds its current state"],
                "correctAnswer": "The output holds its current state",
                "explanation": "The J=0, K=0 condition is the 'No Change' or 'Hold' state for a JK Flip-Flop."
              },
              {
                "question": "Which Flip-Flop is typically used for frequency division by two?",
                "options": ["SR Flip-Flop", "D Flip-Flop", "T Flip-Flop", "RS Latch"],
                "correctAnswer": "T Flip-Flop",
                "explanation": "When the T input of a T Flip-Flop is held at 1 (Toggle mode), it divides the clock frequency by two."
              },
              {
                "question": "The number of states in a Johnson Counter with $N$ Flip-Flops is:",
                "options": ["$N$", "$2^N$", "$2N$", "$N^2$"],
                "correctAnswer": "$2N$",
                "explanation": "A Johnson (or twisted-ring) counter with N Flip-Flops has $2N$ distinct states, which is half the number of states of a standard ring counter."
              }
            ]
          },
          {
            "title": "Microprocessor Architecture and Bus Structure",
            "description": "Introduction to microprocessors (8085/8086), block diagram and functional units (ALU, Control Unit, Register Array, Program Counter, Stack Pointer, Instruction Register). Detailed explanation of the Bus Structure (Address, Data, and Control Buses) and their functionality.",
            "videos": [
              {
                "title": "ARCHITECTURE OF 8085 MICROPROCESSOR",
                "url": "https://www.youtube.com/watch?v=HDbkz-HqO1w"
              },
              {
                "title": "Learn Intel 8085 Microprocessor Architecture Step - By - Step",
                "url": "https://www.youtube.com/watch?v=4pTiujyY4IM"
              }
            ],
            "externalLinks": [
              {
                "title": "8085 Microprocessor Architecture - Tutorialspoint",
                "url": "https://www.tutorialspoint.com/microprocessor/microprocessor_8085_architecture.htm"
              },
              {
                "title": "Microprocessor System Bus Structure - GeeksforGeeks",
                "url": "https://www.geeksforgeeks.org/microprocessor-system-bus-structure/"
              }
            ],
            "mcqs": [
              {
                "question": "The 8085 Microprocessor has a 16-bit address bus and an 8-bit data bus. How much memory can it access?",
                "options": ["32 KB", "64 KB", "1 MB", "1 GB"],
                "correctAnswer": "64 KB",
                "explanation": "The memory capacity is calculated as $2^{\text{Address Bus Width}}$. For 16 bits, $2^{16} = 65,536$ bytes or 64 KB."
              },
              {
                "question": "Which component in the CPU performs arithmetic and logical operations?",
                "options": ["Control Unit (CU)", "Register Array", "Arithmetic Logic Unit (ALU)", "Program Counter (PC)"],
                "correctAnswer": "Arithmetic Logic Unit (ALU)",
                "explanation": "The ALU is the core of the CPU that executes all mathematical and logical functions."
              },
              {
                "question": "Which register is used to store the memory address of the next instruction to be fetched?",
                "options": ["Accumulator", "Instruction Register", "Program Counter (PC)", "Stack Pointer (SP)"],
                "correctAnswer": "Program Counter (PC)",
                "explanation": "The PC is a 16-bit register that keeps track of the memory location of the next instruction to be executed."
              },
              {
                "question": "The Address Bus is typically:",
                "options": ["Bidirectional", "Unidirectional (outward from CPU)", "Unidirectional (inward to CPU)", "Multiplexed"],
                "correctAnswer": "Unidirectional (outward from CPU)",
                "explanation": "The CPU only sends memory or I/O addresses, it does not receive addresses."
              },
              {
                "question": "The purpose of the Stack Pointer (SP) register in a microprocessor is to:",
                "options": ["Store the data being executed", "Store the top address of the stack memory", "Store the address of the current instruction", "Store the results of ALU operations"],
                "correctAnswer": "Store the top address of the stack memory",
                "explanation": "The Stack Pointer is a 16-bit register that holds the address of the most recently stored data item in the stack memory."
              },
              {
                "question": "The Control Bus carries signals that:",
                "options": ["Specify the memory address", "Transfer data between devices", "Coordinate the activities of the processor and other devices", "Carry interrupt requests only"],
                "correctAnswer": "Coordinate the activities of the processor and other devices",
                "explanation": "The control bus carries timing, read/write, and command signals to manage the flow of information."
              },
              {
                "question": "In the 8085, the lower 8 bits of the address are multiplexed with the:",
                "options": ["Data bus", "Control bus", "Status signals", "Higher 8 bits of the address"],
                "correctAnswer": "Data bus",
                "explanation": "The 8085 uses the lines AD0–AD7 to carry both the lower 8 bits of the address and the 8 bits of data, a technique called multiplexing."
              },
              {
                "question": "The Instruction Register (IR) holds:",
                "options": ["The result of an arithmetic operation", "The address of the operand", "The instruction currently being executed", "The address of the next instruction"],
                "correctAnswer": "The instruction currently being executed",
                "explanation": "After fetching an instruction from memory, it is temporarily stored in the IR before being decoded by the Control Unit."
              },
              {
                "question": "What is the function of the Accumulator in the 8085?",
                "options": ["General purpose storage only", "Temporarily storing data for I/O", "Used for storing addresses", "Mandatory operand and destination for arithmetic/logic operations"],
                "correctAnswer": "Mandatory operand and destination for arithmetic/logic operations",
                "explanation": "The Accumulator (Register A) is the main 8-bit register for most arithmetic, logical, and I/O operations."
              },
              {
                "question": "The sequence of steps a CPU follows to execute an instruction is known as the:",
                "options": ["Instruction Cycle", "Data Transfer Cycle", "Machine Cycle", "Clock Cycle"],
                "correctAnswer": "Instruction Cycle",
                "explanation": "The Instruction Cycle involves two main phases: Fetch (getting the instruction) and Execute (performing the operation)."
              }
            ]
          },
          {
            "title": "Microprocessor Addressing Modes and Instruction Set",
            "description": "Different types of addressing modes (Immediate, Direct, Register, Register Indirect, Implied) for accessing data/operands. Classification of the Instruction Set (Data Transfer, Arithmetic, Logical, Branch, Control) and examples of their common instructions in 8085/8086.",
            "videos": [
              {
                "title": "8086 Addressing Modes and Instructions Playlist",
                "url": "https://www.youtube.com/playlist?list=PLXj4XH7LcRfDeZMvr1EYux5HhZ94dRL1X"
              },
              {
                "title": "8085 instruction set with opcodes | arithmetic and data transfer",
                "url": "https://www.youtube.com/watch?v=B9RoFRXqt3k"
              }
            ],
            "externalLinks": [
              {
                "title": "8085 Instruction Set and Programming - Sanfoundry",
                "url": "https://www.sanfoundry.com/8085-microprocessor-questions-answers-instruction-set/"
              },
              {
                "title": "Addressing Modes in 8085 Microprocessor - GeeksforGeeks",
                "url": "https://www.geeksforgeeks.org/addressing-modes-in-8085-microprocessor/"
              }
            ],
            "mcqs": [
              {
                "question": "The instruction `MVI A, 30H` uses which addressing mode?",
                "options": ["Direct", "Register", "Immediate", "Register Indirect"],
                "correctAnswer": "Immediate",
                "explanation": "In Immediate addressing, the operand data is specified within the instruction itself. (30H is the data)."
              },
              {
                "question": "In the 8085 instruction `LDA 2050H`, the memory address is specified directly in the instruction. This is an example of:",
                "options": ["Immediate Addressing", "Register Addressing", "Direct Addressing", "Implied Addressing"],
                "correctAnswer": "Direct Addressing",
                "explanation": "Direct addressing mode uses a 16-bit address explicitly provided in the instruction to access the operand in memory."
              },
              {
                "question": "Which category of instruction controls the flow of program execution?",
                "options": ["Data Transfer", "Arithmetic", "Logical", "Branch/Control"],
                "correctAnswer": "Branch/Control",
                "explanation": "Branch instructions (e.g., JMP, CALL, RET, conditional Jumps) change the sequence of instruction execution."
              },
              {
                "question": "Which addressing mode is used for the instruction `CMA` (Complement Accumulator)?",
                "options": ["Direct", "Register", "Immediate", "Implied/Implicit"],
                "correctAnswer": "Implied/Implicit",
                "explanation": "Implied addressing means the operand (the Accumulator) is fixed and implied by the opcode itself, requiring no further specification."
              },
              {
                "question": "The 8085 instruction `MOV B, C` is an example of:",
                "options": ["Data Transfer Instruction", "Arithmetic Instruction", "Logical Instruction", "Branch Instruction"],
                "correctAnswer": "Data Transfer Instruction",
                "explanation": "The `MOV` instruction moves the contents of the source register (C) to the destination register (B)."
              },
              {
                "question": "What is the result of the Logical instruction `ORA B` if the Accumulator (A) contains `55H` and Register B contains `AAH`?",
                "options": ["AAH", "FFH", "00H", "55H"],
                "correctAnswer": "FFH",
                "explanation": "`ORA B` performs a bitwise OR operation: $55H (01010101) | AAH (10101010) = FFH (11111111)$."
              },
              {
                "question": "Which of the following is an Arithmetic instruction in the 8085?",
                "options": ["XCHG", "SBB", "RAL", "PCHL"],
                "correctAnswer": "SBB",
                "explanation": "SBB stands for Subtract with Borrow, which is an Arithmetic instruction. XCHG is Data Transfer, RAL is Logical/Rotate, and PCHL is Branch/Control."
              },
              {
                "question": "In Register Indirect Addressing mode, the address of the operand is:",
                "options": ["Contained in the instruction itself", "Contained in a general-purpose register pair", "Contained in the Program Counter", "Implicitly defined by the opcode"],
                "correctAnswer": "Contained in a general-purpose register pair",
                "explanation": "For example, in 8085, `MOV A, M` (where M refers to the memory location pointed to by the H-L register pair)."
              },
              {
                "question": "The instruction used to push the contents of a register pair onto the stack is:",
                "options": ["POP", "PUSH", "SPHL", "XTHL"],
                "correctAnswer": "PUSH",
                "explanation": "The PUSH instruction saves the contents of a register pair onto the stack memory, decremented by the Stack Pointer."
              },
              {
                "question": "The maximum number of machine cycles required by any instruction in the 8085 instruction set is:",
                "options": ["3", "4", "5", "6"],
                "correctAnswer": "5",
                "explanation": "The longest instruction in 8085 (e.g., CALL) takes 5 machine cycles."
              }
            ]
          }
        ]
      },
      {
        "chapter": 3,
        "title": "Programming Language and Its Applications",
        "code": "ACtE03",
        "topics": [
          {
            "title": "Introduction to C programming",
            "description": "C Tokens, Operators, Formatted/Unformatted Input/output, Control Statements, Looping, User-defined functions, Recursive functions, Array (1-D, 2-D, Multidimensional), and String manipulations",
            "code": "C programming",
            "videos": [
              {
                "id": 1,
                "title": "C Programming - Playlist 1",
                "url": "https://www.youtube.com/playlist?list=PL98qAXLA6aftD9ZlnjpLhdQAOFI8xIB6e"
              },
              {
                "id": 2,
                "title": "C Programming - Playlist 2",
                "url": "https://www.youtube.com/playlist?list=PLxCzCOWd7aiGmiGl_DOuRMJYG8tOVuapB"
              }
            ],
            "externalLinks": [
              {
                "id": 1,
                "title": "C programming MCQs (sanfoundry)",
                "url": "https://www.sanfoundry.com/c-interview-questions-answers/"
              },
              {
                "id": 2,
                "title": "C programming MCQs (GeeksforGeeks)",
                "url": "https://www.geeksforgeeks.org/quizzes/50-c-language-mcqs-with-answers/"
              },
              {
                "id": 3,
                "title": "Learn C programming (GeeksforGeeks)",
                "url": "https://www.geeksforgeeks.org/c/c-programming-language/"
              }
            ],
            "mcqs": [
              {
                "question": "Which of the following is NOT a valid C token?",
                "options": ["Identifier", "Keyword", "Constant", "Loop"],
                "correctAnswer": "Loop",
                "explanation": "C tokens are the smallest elements of a program and include keywords, identifiers, constants, strings, and operators. 'Loop' is not a token type."
              },
              {
                "question": "What is the result of the expression 5 + 2 * 3 in C?",
                "options": ["21", "11", "13", "15"],
                "correctAnswer": "11",
                "explanation": "Operator precedence rules apply: Multiplication has higher precedence than addition, so 2 * 3 = 6, and then 5 + 6 = 11."
              },
              {
                "question": "Which format specifier is used to read a single character input in C?",
                "options": ["%c", "%s", "%d", "%lf"],
                "correctAnswer": "%c",
                "explanation": "The format specifier '%c' is used in scanf() and printf() to read or display a single character."
              },
              {
                "question": "Which of the following functions is used for unformatted input in C?",
                "options": ["scanf()", "fgets()", "getchar()", "printf()"],
                "correctAnswer": "getchar()",
                "explanation": "Unformatted input/output functions handle data without any formatting. 'getchar()' reads a single character from standard input."
              },
              {
                "question": "What will be the output of the following code?\n\nint x = 10;\nif(x = 0)\n  printf(\"Zero\");\nelse\n  printf(\"Non-zero\");",
                "options": ["Zero", "Non-zero", "Compilation Error", "Runtime Error"],
                "correctAnswer": "Non-zero",
                "explanation": "The statement 'x = 0' assigns 0 to x, which evaluates to false. So the else block executes and prints 'Non-zero'."
              },
              {
                "question": "How many times will the following loop execute?\n\nfor(int i = 0; i < 5; i++);\nprintf(\"%d\", i);",
                "options": ["4", "5", "6", "1"],
                "correctAnswer": "5",
                "explanation": "The semicolon after the for loop makes it an empty loop. It runs 5 times (i = 0 to 4), then prints i = 5."
              },
              {
                "question": "Which of the following statements is TRUE about user-defined functions in C?",
                "options": ["They cannot return any value", "They can be called before definition", "They must be defined before main()", "They cannot have parameters"],
                "correctAnswer": "They can be called before definition",
                "explanation": "User-defined functions can be called before their definition if a proper function prototype is declared."
              },
              {
                "question": "What is the output of the recursive function 'fact(3)' defined as: int fact(int n){ if(n==0) return 1; else return n*fact(n-1); }",
                "options": ["3", "6", "9", "0"],
                "correctAnswer": "6",
                "explanation": "The recursion works as 3*fact(2) → 3*2*fact(1) → 3*2*1*fact(0) = 6."
              },
              {
                "question": "What is the correct way to declare a 2D array in C?",
                "options": ["int arr[2,3];", "int arr[2][3];", "int arr(2,3);", "int arr{2,3};"],
                "correctAnswer": "int arr[2][3];",
                "explanation": "A two-dimensional array is declared with two pairs of square brackets, e.g., int arr[2][3];"
              },
              {
                "question": "Which library function is used to find the length of a string in C?",
                "options": ["strlen()", "sizeof()", "strlength()", "length()"],
                "correctAnswer": "strlen()",
                "explanation": "The function 'strlen()' from <string.h> returns the number of characters in a string (excluding the null terminator)."
              },
              {
                "question": "Which of the following is NOT classified as a C Token?",
                "options": [
                  "Keyword",
                  "Identifier",
                  "Preprocessor Directive",
                  "String Literal"
                ],
                "correctAnswer": "Preprocessor Directive",
                "explanation": "C Tokens are the smallest individual units in a C program. These include Keywords, Identifiers, Constants, Strings, Operators, and Special Symbols. Preprocessor directives (like #include) are handled before tokenization."
              },
              {
                "question": "What is the output of the following C expression: `10 + 5 * 2 / 2`?",
                "options": [
                  "15",
                  "10",
                  "20",
                  "14"
                ],
                "correctAnswer": "15",
                "explanation": "The order of precedence is: Multiplication (`*`) and Division (`/`) have equal precedence and are evaluated left-to-right, before Addition (`+`).\n1. `5 * 2` is 10.\n2. `10 / 2` is 5.\n3. `10 + 5` is 15."
              },
              {
                "question": "Which standard C library function is used for unformatted string input from the console and is generally considered unsafe due to buffer overflow risks?",
                "options": [
                  "scanf()",
                  "gets()",
                  "printf()",
                  "fgets()"
                ],
                "correctAnswer": "gets()",
                "explanation": "`gets()` is an unformatted input function specifically for strings, but it doesn't check array bounds, making it dangerous. `scanf()` is formatted input. `fgets()` is the safer alternative to `gets()`."
              },
              {
                "question": "In C programming, which control statement is used to bypass the remaining statements in the current iteration of a loop and continue to the next iteration?",
                "options": [
                  "break",
                  "return",
                  "exit",
                  "continue"
                ],
                "correctAnswer": "continue",
                "explanation": "The `continue` statement skips the rest of the loop's body for the current iteration and forces the control to the test condition for the next iteration. The `break` statement terminates the entire loop."
              },
              {
                "question": "How many times will the `printf()` statement execute in the following C code snippet?\n```c\nfor (int i = 0; i < 10; i = i + 2) {\n  printf(\"Hello\\n\");\n}\n```",
                "options": [
                  "9 times",
                  "10 times",
                  "5 times",
                  "6 times"
                ],
                "correctAnswer": "5 times",
                "explanation": "The loop starts at `i=0` and increments by 2 in each iteration. The values of `i` will be 0, 2, 4, 6, and 8. When `i` becomes 10, the condition `i < 10` is false, and the loop terminates. This results in 5 executions."
              },
              {
                "question": "What is the primary way that C handles function arguments by default (without using pointers)?",
                "options": [
                  "Pass by reference",
                  "Pass by value",
                  "Pass by array",
                  "Pass by variable"
                ],
                "correctAnswer": "Pass by value",
                "explanation": "By default, C uses 'Pass by Value', where a copy of the argument's value is passed to the function. Changes inside the function do not affect the original variable in the calling function. 'Pass by Reference' requires the use of pointers."
              },
              {
                "question": "Which of the following is essential for a recursive function to terminate without causing a stack overflow?",
                "options": [
                  "A global variable",
                  "A loop structure",
                  "A base case",
                  "A void return type"
                ],
                "correctAnswer": "A base case",
                "explanation": "A base case (or termination condition) is a non-recursive path in the function that provides a condition under which the function stops calling itself. Without it, the function enters infinite recursion, leading to a stack overflow."
              },
              {
                "question": "Given the declaration `int matrix[5][10];`, what is the total number of elements in the 2-D array?",
                "options": [
                  "5",
                  "10",
                  "15",
                  "50"
                ],
                "correctAnswer": "50",
                "explanation": "For a two-dimensional array declared as `type arrayName[R][C]`, where R is the number of rows and C is the number of columns, the total number of elements is R * C. Here, 5 * 10 = 50."
              },
              {
                "question": "Which C standard library function is used to concatenate (join) two strings?",
                "options": [
                  "strcpy()",
                  "strcmp()",
                  "strcat()",
                  "strlen()"
                ],
                "correctAnswer": "strcat()",
                "explanation": "`strcat()` appends the second string to the end of the first string. `strcpy()` copies one string over another. `strcmp()` compares two strings. `strlen()` returns the length of a string."
              },
              {
                "question": "Which of the following correctly declares and initializes a single-dimensional integer array named `data` of size 4 to hold the values 10, 20, 30, and 40?",
                "options": [
                  "int data[] = {10, 20, 30, 40};",
                  "int data[4]; data = {10, 20, 30, 40};",
                  "data[4] = 10, 20, 30, 40;",
                  "array int data[4] = (10, 20, 30, 40);"
                ],
                "correctAnswer": "int data[] = {10, 20, 30, 40};",
                "explanation": "Option A uses an initializer list. The size is automatically determined as 4, and the values are correctly assigned. Option B attempts assignment after declaration, which is invalid for arrays. Options C and D use incorrect syntax."
              }
            ]
          },
          {
            "title": "Pointers, structure and data files in C programming",
            "description": "Pointer Arithmetic, Pointer and array, passing pointer to function, Structure vs Union, array of structure, passing structure to function, structure and pointer, Input/output operations on files, and Sequential and Random Access to File.",
            "code": "Advanced C",
            "videos": [
              {
                "id": 1,
                "title": "C Programming - Playlist 1",
                "url": "https://www.youtube.com/playlist?list=PL98qAXLA6aftD9ZlnjpLhdQAOFI8xIB6e"
              },
              {
                "id": 2,
                "title": "C Programming - Playlist 2",
                "url": "https://www.youtube.com/playlist?list=PLxCzCOWd7aiGmiGl_DOuRMJYG8tOVuapB"
              }
            ],
            "externalLinks": [
              {
                "id": 1,
                "title": "Notes",
                "url": "https://bcanotesnepal.com/wp-content/uploads/2019/07/c-note.pdf"
              },
              {
                "id": 2,
                "title": "C programming MCQs (sanfoundry)",
                "url": "https://www.sanfoundry.com/c-mcqs-dynamic-memory-allocation/"
              },
            ],
            "mcqs": [
              {
                "question": "If `int a = 5; int *p = &a;` then what does `p + 1` represent?",
                "options": ["Address of next byte", "Address of next int location", "Value of a + 1", "Invalid operation"],
                "correctAnswer": "Address of next int location",
                "explanation": "Pointer arithmetic depends on the data type. For an int pointer, `p + 1` moves to the next integer location (typically 4 bytes ahead)."
              },
              {
                "question": "In C, the name of an array acts as ________.",
                "options": ["A constant pointer", "A variable pointer", "A function name", "An integer value"],
                "correctAnswer": "A constant pointer",
                "explanation": "The array name represents the address of the first element and behaves as a constant pointer that cannot be modified."
              },
              {
                "question": "What will be the output of the following code?\n\nint arr[] = {1, 2, 3};\nint *p = arr;\nprintf(\"%d\", *(p + 2));",
                "options": ["1", "2", "3", "Garbage value"],
                "correctAnswer": "3",
                "explanation": "Pointer arithmetic with arrays allows element access. `*(p + 2)` points to the third element of the array, which is 3."
              },
              {
                "question": "Which of the following correctly passes a pointer to a function?",
                "options": ["func(&x);", "func(*x);", "func(x);", "func(**x);"],
                "correctAnswer": "func(&x);",
                "explanation": "To pass a pointer to a function, you use the address-of operator '&'. Inside the function, the parameter should be declared as a pointer type."
              },
              {
                "question": "Which of the following is TRUE about structure and union in C?",
                "options": ["Structure uses shared memory, union does not", "Union allocates memory equal to sum of all members", "Structure allocates separate memory for each member", "Both structure and union share same memory for all members"],
                "correctAnswer": "Structure allocates separate memory for each member",
                "explanation": "In structures, each member has its own memory, while in unions all members share the same memory space."
              },
              {
                "question": "How do you declare an array of structures in C?",
                "options": ["struct Student s[10];", "Student s = [10];", "struct Student[10] s;", "struct s[10] Student;"],
                "correctAnswer": "struct Student s[10];",
                "explanation": "To declare an array of 10 structures, use `struct Student s[10];` assuming `Student` is a defined structure type."
              },
              {
                "question": "When passing a structure to a function, which method avoids copying the entire structure?",
                "options": ["Pass by value", "Pass by reference using pointer", "Pass by array", "None of the above"],
                "correctAnswer": "Pass by reference using pointer",
                "explanation": "Passing a structure by reference using a pointer avoids copying large structures and improves performance."
              },
              {
                "question": "Which of the following correctly declares a pointer to a structure?",
                "options": ["struct student *ptr;", "student ptr;", "struct *ptr student;", "student *struct ptr;"],
                "correctAnswer": "struct student *ptr;",
                "explanation": "The correct syntax for a structure pointer is `struct structure_name *pointer_name;`."
              },
              {
                "question": "Which function is used to read a single character from a file in C?",
                "options": ["scanf()", "fgetc()", "getchar()", "gets()"],
                "correctAnswer": "fgetc()",
                "explanation": "`fgetc(FILE *stream)` reads a single character from the specified file. It is used for sequential file reading."
              },
              {
                "question": "What is the key difference between sequential and random file access in C?",
                "options": ["Sequential uses fseek(), random does not", "Random access allows direct movement using fseek()", "Sequential can only write files", "There is no difference"],
                "correctAnswer": "Random access allows direct movement using fseek()",
                "explanation": "Sequential access reads/writes data in order, while random access allows repositioning within the file using `fseek()` or `ftell()`."
              },
              {
                "question": "If an integer pointer `p` is pointing to the base address 1000, and `sizeof(int)` is 4 bytes, what will be the new address after executing `p++`?",
                "options": [
                  "1001",
                  "1004",
                  "1008",
                  "1000"
                ],
                "correctAnswer": "1004",
                "explanation": "Pointer arithmetic in C increments the pointer by the size of the data type it points to. Since the pointer `p` is an integer pointer and `sizeof(int)` is 4 bytes, `p++` advances the address by 4 bytes (1000 + 4 = 1004)."
              },
              {
                "question": "In the declaration `int arr[5];` and a pointer `int *p = arr;`, which of the following expressions is NOT equivalent to accessing the third element of the array (at index 2)?",
                "options": [
                  "arr[2]",
                  "*(p + 2)",
                  "*(arr + 2)",
                  "p[2]"
                ],
                "correctAnswer": "All are equivalent",
                "explanation": "All four options are standard ways to access the element at index 2 in C. `arr[2]` is standard array notation. `*(p + 2)` and `*(arr + 2)` use pointer arithmetic to dereference the address 2 positions (8 bytes for int) away from the base. `p[2]` is also valid because array indexing is internally handled using pointer arithmetic."
              },
              {
                "question": "When an array is passed as an argument to a function, how is it typically handled in C?",
                "options": [
                  "By value (a copy of the entire array is created)",
                  "By reference (the base address of the array is passed)",
                  "By reference only if the `&` operator is used",
                  "It can only be passed if its size is explicitly provided"
                ],
                "correctAnswer": "By reference (the base address of the array is passed)",
                "explanation": "When an array is passed to a function, the array name decays into a pointer to its first element. The function receives the starting memory address, making it a call-by-reference mechanism, where changes within the function affect the original array."
              },
              {
                "question": "What is the key difference in memory allocation between a `structure` and a `union` in C?",
                "options": [
                  "A structure allocates space for only one member at a time, while a union allocates space for all members.",
                  "A structure allocates space for all its members, while a union allocates space for only the largest member.",
                  "A union can only contain pointers, but a structure can contain any data type.",
                  "There is no difference in memory allocation; the difference is only in access method."
                ],
                "correctAnswer": "A structure allocates space for all its members, while a union allocates space for only the largest member.",
                "explanation": "A `structure` reserves memory for *all* its members. A `union` reserves a single block of memory large enough to hold only the *largest* member, as its members share the same memory location."
              },
              {
                "question": "Consider a `struct Employee` defined. Which is the correct way to declare an array of 50 such structures?",
                "options": [
                  "struct Employee[50] employees;",
                  "array struct Employee employees[50];",
                  "Employee employees[50];",
                  "struct Employee employees[50];"
                ],
                "correctAnswer": "struct Employee employees[50];",
                "explanation": "The correct syntax for declaring an array of structures is `struct structName arrayName[size];`. In C, the keyword `struct` is often necessary when declaring a variable of the structure type unless a `typedef` is used."
              },
              {
                "question": "If a function receives a structure by value, and the structure is modified inside the function, what happens to the original structure in the calling function?",
                "options": [
                  "The original structure is also modified.",
                  "The original structure remains unchanged.",
                  "The compiler generates an error.",
                  "The structure's memory is deallocated."
                ],
                "correctAnswer": "The original structure remains unchanged.",
                "explanation": "When a structure is passed by value, a complete copy of the structure is created for the function. Modifications are made to this copy, leaving the original structure in the calling function unaffected."
              },
              {
                "question": "Given the declaration `struct point *ptr;` where `ptr` points to a structure variable `p`, which operator is used to access the member `x` of the structure through the pointer `ptr`?",
                "options": [
                  ". (dot operator)",
                  "* (dereference operator)",
                  "-> (arrow operator)",
                  ":: (scope resolution operator)"
                ],
                "correctAnswer": "-> (arrow operator)",
                "explanation": "The arrow operator (`->`) is a shorthand used to access a member of a structure or union using a pointer to that structure/union. It is equivalent to `(*ptr).x`."
              },
              {
                "question": "Which file handling function is used to move the file pointer to a specific location within a file, enabling random access?",
                "options": [
                  "ftell()",
                  "fseek()",
                  "rewind()",
                  "fgetc()"
                ],
                "correctAnswer": "fseek()",
                "explanation": "The `fseek()` function sets the file pointer associated with a stream to a new position. This allows for non-sequential (random) reading or writing of data in a file."
              },
              {
                "question": "What is the primary purpose of the `fprintf()` function in C?",
                "options": [
                  "To read formatted data from a file.",
                  "To write formatted output to the console.",
                  "To write formatted output to a specified file stream.",
                  "To move the file pointer to the end of the file."
                ],
                "correctAnswer": "To write formatted output to a specified file stream.",
                "explanation": "`fprintf()` is the file equivalent of `printf()`. It takes a file pointer (`FILE *`) as its first argument and writes formatted data to the file associated with that stream."
              },
              {
                "question": "Which of the following modes is used to open a file for both reading and writing, but starts by creating an empty file (or truncating an existing one)?",
                "options": [
                  "\"r+\"",
                  "\"w+\"",
                  "\"a+\"",
                  "\"rb\""
                ],
                "correctAnswer": "\"w+\"",
                "explanation": "The `w+` mode opens a text file for both reading and writing. If the file already exists, its contents are discarded (truncated). If it does not exist, a new empty file is created. `r+` opens for reading/writing without truncating. `a+` opens for reading/writing, with writing only occurring at the end (appending)."
              }
            ]
          },
          {
            "title": "C++ language constructs with objects and classes",
            "description": "Namespace, Function Overloading, Inline functions, Default Argument, Pass/Return by reference, introduction to Class and object, Access Specifiers, Objects and the Member Access, Defining Member Function, Constructor and its type, and Destructor, Dynamic memory allocation for objects and object array, this Pointer, static Data Member and static Function, Constant Member Functions and Constant Objects, Friend Function and Friend Classes",
            "code": "C++",
            "videos": [
              {
                "id": 1,
                "title": "C++ in one video",
                "url": "https://www.youtube.com/watch?v=mlIUKyZIUUU"
              }
            ],
            "externalLinks": [
              {
                "id": 1,
                "title": "C++ programming MCQs (sanfoundry)",
                "url": "https://www.sanfoundry.com/cplusplus-interview-questions-answers/"
              },
              {
                "id": 2,
                "title": "C++ programming MCQs (GeeksforGeeks)",
                "url": "https://www.geeksforgeeks.org/cpp/c-programming-multiple-choice-questions/"
              },
            ],
            "mcqs": [
              {
                "question": "Which keyword is used to define a namespace in C++?",
                "options": ["namespace", "package", "module", "group"],
                "correctAnswer": "namespace",
                "explanation": "Namespaces in C++ are declared using the 'namespace' keyword to organize code and prevent name conflicts."
              },
              {
                "question": "Which of the following best describes function overloading?",
                "options": ["Defining multiple functions with the same name but different return types only", "Defining multiple functions with the same name but different parameter lists", "Defining functions inside another function", "Using default parameters in functions"],
                "correctAnswer": "Defining multiple functions with the same name but different parameter lists",
                "explanation": "Function overloading allows multiple functions to share the same name as long as their parameter types or counts differ."
              },
              {
                "question": "What is the main purpose of an inline function in C++?",
                "options": ["To make the function private", "To reduce function call overhead", "To overload operators", "To allocate memory dynamically"],
                "correctAnswer": "To reduce function call overhead",
                "explanation": "Inline functions request the compiler to replace the function call with the actual code, thus eliminating call overhead."
              },
              {
                "question": "If a function parameter has a default argument, it must be ______.",
                "options": ["Defined first in the parameter list", "Defined last in the parameter list", "Defined in any order", "Defined outside the function"],
                "correctAnswer": "Defined last in the parameter list",
                "explanation": "Default arguments must appear at the end of the parameter list to avoid ambiguity during function calls."
              },
              {
                "question": "Which of the following correctly passes a variable by reference to a function?",
                "options": ["void func(int x);", "void func(int *x);", "void func(int &x);", "void func(ref int x);"],
                "correctAnswer": "void func(int &x);",
                "explanation": "In C++, the '&' symbol after the type denotes that the argument is passed by reference, allowing modification of the original variable."
              },
              {
                "question": "Which of the following is NOT an access specifier in C++?",
                "options": ["private", "protected", "public", "global"],
                "correctAnswer": "global",
                "explanation": "C++ supports three access specifiers: public, private, and protected. 'global' is not an access specifier."
              },
              {
                "question": "Which of the following statements about constructors is TRUE?",
                "options": ["Constructors have a return type of void", "Constructors cannot be overloaded", "Constructors have the same name as the class", "Constructors are called manually using new keyword"],
                "correctAnswer": "Constructors have the same name as the class",
                "explanation": "Constructors in C++ have the same name as the class and are automatically invoked when an object is created."
              },
              {
                "question": "Which operator is used to dynamically allocate memory for an object in C++?",
                "options": ["malloc", "alloc", "new", "create"],
                "correctAnswer": "new",
                "explanation": "In C++, the 'new' operator dynamically allocates memory for objects or arrays at runtime."
              },
              {
                "question": "What does the 'this' pointer represent in C++?",
                "options": ["It holds the class name", "It points to the class definition", "It points to the current object invoking the member function", "It points to the base class object"],
                "correctAnswer": "It points to the current object invoking the member function",
                "explanation": "The 'this' pointer is an implicit pointer passed to all non-static member functions, referring to the current object."
              },
              {
                "question": "Which of the following statements about friend functions is TRUE?",
                "options": ["They are members of a class", "They can access private and protected members of a class", "They cannot access any class members", "They must be defined inside the class"],
                "correctAnswer": "They can access private and protected members of a class",
                "explanation": "Friend functions are not class members but have access to private and protected members of the class they are declared friends with."
              },
              {
                "question": "Which C++ feature allows a single function name to be used for different functions that perform similar tasks on different data types or number of arguments?",
                "options": [
                  "Function Overriding",
                  "Function Overloading",
                  "Function Hiding",
                  "Operator Overloading"
                ],
                "correctAnswer": "Function Overloading",
                "explanation": "Function Overloading is a compile-time polymorphism feature where multiple functions can have the same name but must differ in the number or type of their parameters."
              },
              {
                "question": "In C++, which access specifier makes class members accessible only from within the class itself and to friend classes/functions?",
                "options": [
                  "public",
                  "protected",
                  "private",
                  "friend"
                ],
                "correctAnswer": "private",
                "explanation": "The `private` access specifier restricts access to the class members, allowing them to be used only by member functions and friend entities of that class. `protected` allows access by derived classes as well."
              },
              {
                "question": "What is the primary benefit of declaring a short, frequently called function as an `inline` function in C++?",
                "options": [
                  "It allows the function to be overloaded more easily.",
                  "It ensures dynamic binding at runtime.",
                  "It suggests to the compiler to replace the function call with the function body at compile time, reducing function call overhead.",
                  "It guarantees the function will be executed in a separate thread."
                ],
                "correctAnswer": "It suggests to the compiler to replace the function call with the function body at compile time, reducing function call overhead.",
                "explanation": "The `inline` keyword is a suggestion to the compiler to perform inline expansion, which replaces the function call with the actual code of the function body. This reduces the overhead associated with function calls, particularly for small functions."
              },
              {
                "question": "Which pointer holds the address of the current object and is implicitly passed to every non-static member function of a C++ class?",
                "options": [
                  "null pointer",
                  "this pointer",
                  "base pointer",
                  "void pointer"
                ],
                "correctAnswer": "this pointer",
                "explanation": "The `this` pointer is a constant pointer that holds the memory address of the object on which the member function is currently being executed. It is used to access members of the current object."
              },
              {
                "question": "A C++ constructor with no arguments or one that has default values for all its arguments is known as a:",
                "options": [
                  "Copy Constructor",
                  "Parameterized Constructor",
                  "Move Constructor",
                  "Default Constructor"
                ],
                "correctAnswer": "Default Constructor",
                "explanation": "A Default Constructor is a constructor that can be called without any arguments. This includes a constructor with no parameters or one where all parameters have default values."
              },
              {
                "question": "What is the consequence of declaring a member variable of a class as `static`?",
                "options": [
                  "Each object will have its own copy of the variable.",
                  "The variable can only be accessed by static member functions.",
                  "Only one copy of the variable is shared by all objects of the class.",
                  "The variable must be initialized within the class definition."
                ],
                "correctAnswer": "Only one copy of the variable is shared by all objects of the class.",
                "explanation": "A static data member is a class variable that is shared by all objects of the class. It is initialized only once, outside the class definition, and exists even if no objects of the class are created."
              },
              {
                "question": "What C++ keyword is used for dynamic memory allocation of a single object from the heap (free store)?",
                "options": [
                  "malloc",
                  "calloc",
                  "new",
                  "allocate"
                ],
                "correctAnswer": "new",
                "explanation": "The `new` operator is used in C++ to dynamically allocate memory for an object or an array of objects on the heap. The corresponding `delete` operator is used to deallocate the memory."
              },
              {
                "question": "Which concept in C++ allows the derivation of a new class from an existing class, thereby acquiring the properties and behaviors of the base class?",
                "options": [
                  "Encapsulation",
                  "Abstraction",
                  "Inheritance",
                  "Polymorphism"
                ],
                "correctAnswer": "Inheritance",
                "explanation": "Inheritance is an OOP mechanism that allows a new class (derived or child class) to inherit members from an existing class (base or parent class), promoting code reuse."
              },
              {
                "question": "What is the purpose of a **pure virtual function** in a C++ class?",
                "options": [
                  "To prevent the class from being inherited.",
                  "To ensure the class is used for static binding only.",
                  "To make the base class an abstract class that cannot be instantiated.",
                  "To define a function that must not be overridden in derived classes."
                ],
                "correctAnswer": "To make the base class an abstract class that cannot be instantiated.",
                "explanation": "A pure virtual function (`= 0` in the declaration) makes the class an abstract class. Abstract classes cannot be instantiated, and any derived class must provide an implementation for the pure virtual function or become abstract itself."
              },
              {
                "question": "In C++, which block is used to enclose the code that might throw an exception?",
                "options": [
                  "catch",
                  "throw",
                  "finally",
                  "try"
                ],
                "correctAnswer": "try",
                "explanation": "The `try` block encloses the section of code that is monitored for exceptions. If an exception occurs in the `try` block, it is thrown and can be handled by a corresponding `catch` block."
              }


            ]
          },
          {
            "title": "Features of object-oriented programming",
            "description": "Operator overloading (unary, binary), data conversion, Inheritance (single, multiple, multilevel, hybrid, multipath), constructor/destructor in single/multilevel inheritances",
            "videos": [
              {
                "id": 1,
                "title": "Fundamental Concepts of Object Oriented Programming",
                "url": "https://www.youtube.com/watch?v=m_MQYyJpIjg"
              }
            ],
            "externalLinks": [],
            "mcqs": [
              {
                "question": "Which operator cannot be overloaded in C++?",
                "options": ["+", "=", "::", "=="],
                "correctAnswer": "::",
                "explanation": "The scope resolution operator (::) cannot be overloaded in C++. Other operators like +, =, and == can be overloaded."
              },
              {
                "question": "Which of the following correctly overloads the unary minus operator for a class?",
                "options": [
                  "void operator-(int a)",
                  "void operator-()",
                  "int operator-(int)",
                  "void operator--(int)"
                ],
                "correctAnswer": "void operator-()",
                "explanation": "Unary operators are overloaded with no arguments. For example, 'void operator-()' can define a custom behavior for unary minus."
              },
              {
                "question": "Which keyword is used to perform type conversion in C++?",
                "options": ["convert", "typecast", "static_cast", "transform"],
                "correctAnswer": "static_cast",
                "explanation": "C++ uses casting operators like static_cast, dynamic_cast, const_cast, and reinterpret_cast for safe and explicit type conversion."
              },
              {
                "question": "What is function of operator overloading?",
                "options": [
                  "To define new operators in C++",
                  "To give additional meaning to existing operators for user-defined types",
                  "To perform implicit type conversions",
                  "To define polymorphism"
                ],
                "correctAnswer": "To give additional meaning to existing operators for user-defined types",
                "explanation": "Operator overloading allows operators like +, -, *, etc., to work with user-defined objects such as complex numbers or vectors."
              },
              {
                "question": "Which type of inheritance involves a single base class and multiple derived classes?",
                "options": ["Single Inheritance", "Multilevel Inheritance", "Multiple Inheritance", "Hierarchical Inheritance"],
                "correctAnswer": "Hierarchical Inheritance",
                "explanation": "In hierarchical inheritance, multiple derived classes inherit from a single base class."
              },
              {
                "question": "In multiple inheritance, if two base classes have a function with the same name, how is ambiguity resolved?",
                "options": ["Using virtual keyword", "Using scope resolution operator", "By redefining the function", "By using friend keyword"],
                "correctAnswer": "Using scope resolution operator",
                "explanation": "Ambiguity in multiple inheritance is resolved using the scope resolution operator, e.g., Base1::display() or Base2::display()."
              },
              {
                "question": "Which type of inheritance may lead to the diamond problem in C++?",
                "options": ["Single", "Multiple", "Multilevel", "Hybrid"],
                "correctAnswer": "Hybrid",
                "explanation": "Hybrid inheritance (combination of multiple and multilevel) can lead to the diamond problem, which is resolved using virtual base classes."
              },
              {
                "question": "In single inheritance, the constructor of which class is called first?",
                "options": ["Derived class", "Base class", "Both simultaneously", "Depends on access specifier"],
                "correctAnswer": "Base class",
                "explanation": "In inheritance, the base class constructor executes before the derived class constructor, ensuring proper initialization order."
              },
              {
                "question": "In multilevel inheritance, which order do destructors follow when objects are destroyed?",
                "options": ["Base → Derived → Most derived", "Most derived → Derived → Base", "Parallel destruction", "Random order"],
                "correctAnswer": "Most derived → Derived → Base",
                "explanation": "Destructors are executed in reverse order of construction—starting from the most derived class back to the base class."
              },
              {
                "question": "When a derived class inherits from two base classes having the same member, what is the best way to avoid ambiguity?",
                "options": ["Use friend class", "Use virtual base classes", "Use multiple constructors", "Use inline functions"],
                "correctAnswer": "Use virtual base classes",
                "explanation": "Virtual base classes ensure that only one copy of a shared base class is inherited when using multiple inheritance, avoiding ambiguity."
              },
              {
                "question": "Which of the following operators CANNOT be overloaded as a unary operator in C++?",
                "options": [
                  "++ (Increment)",
                  "-- (Decrement)",
                  "= (Assignment)",
                  "! (Logical NOT)"
                ],
                "correctAnswer": "= (Assignment)",
                "explanation": "C++ reserves four operators that cannot be overloaded: the dot operator (`.`), the scope resolution operator (`::`), the size of operator (`sizeof`), and the conditional operator (`?:`). The assignment operator (`=`) can be overloaded, but it is typically handled as a binary operator, although its behavior is unique."
              },
              {
                "question": "When a binary operator like `+` is overloaded as a member function of a class, how many arguments does the function signature require?",
                "options": [
                  "Zero",
                  "One",
                  "Two",
                  "Three"
                ],
                "correctAnswer": "One",
                "explanation": "If a binary operator is overloaded as a member function, it takes one explicit argument (the right-hand operand). The left-hand operand is implicitly passed using the `this` pointer."
              },
              {
                "question": "What kind of inheritance structure involves a derived class inheriting from two or more distinct base classes?",
                "options": [
                  "Single Inheritance",
                  "Multilevel Inheritance",
                  "Multiple Inheritance",
                  "Hybrid Inheritance"
                ],
                "correctAnswer": "Multiple Inheritance",
                "explanation": "Multiple Inheritance is the process where a child class inherits properties from multiple parent classes (e.g., Class C inherits from Class A and Class B)."
              },
              {
                "question": "In a multilevel inheritance structure (A -> B -> C), in which order are the destructors called when an object of Class C goes out of scope?",
                "options": [
                  "A's Destructor, B's Destructor, C's Destructor",
                  "C's Destructor, B's Destructor, A's Destructor",
                  "A's Destructor, C's Destructor, B's Destructor",
                  "B's Destructor, A's Destructor, C's Destructor"
                ],
                "correctAnswer": "C's Destructor, B's Destructor, A's Destructor",
                "explanation": "Destructors are executed in the reverse order of constructor execution (and reverse order of inheritance). The derived class (C) destructor is called first, followed by its immediate base (B), and finally the highest base class (A)."
              },
              {
                "question": "The automatic conversion of an object of a class type to a basic data type (e.g., `ClassType` to `int`) is typically achieved by implementing a/an:",
                "options": [
                  "Type casting operator function",
                  "Conversion constructor",
                  "Explicit keyword function",
                  "Friend conversion function"
                ],
                "correctAnswer": "Type casting operator function",
                "explanation": "A type casting operator function (e.g., `operator int()`) is a special member function used to convert an object of a class type into a primitive type. Conversion from a primitive type to a class type is handled by a conversion constructor."
              },
              {
                "question": "What is the major problem or ambiguity that the `virtual` keyword is primarily used to resolve in C++ inheritance (specifically for the scenario involving two paths to a single base class)?",
                "options": [
                  "Multilevel Inheritance",
                  "Multiple Inheritance",
                  "Diamond Problem",
                  "Hybrid Inheritance"
                ],
                "correctAnswer": "Diamond Problem",
                "explanation": "The Diamond Problem occurs in multiple inheritance when a class D inherits from B and C, and both B and C inherit from A. This leads to D having two copies of A's members. The `virtual` keyword used during inheritance (Virtual Base Class) solves this by ensuring D has only one shared copy of A."
              },
              {
                "question": "Which type of data conversion in C++ uses a single-argument constructor in the destination class to convert an object of the source class?",
                "options": [
                  "Class to Basic Type",
                  "Basic to Class Type",
                  "Class to Class Type (via casting operator)",
                  "Class to Class Type (via conversion constructor)"
                ],
                "correctAnswer": "Class to Class Type (via conversion constructor)",
                "explanation": "A conversion constructor (a constructor that takes a single argument of another class type) allows for the implicit or explicit conversion from the source class object to the destination class object."
              },
              {
                "question": "In single inheritance, when a derived class object is created, in what order are the constructors of the base class (B) and the derived class (D) executed?",
                "options": [
                  "B's constructor, then D's constructor",
                  "D's constructor, then B's constructor",
                  "They are executed simultaneously",
                  "Only D's constructor is executed"
                ],
                "correctAnswer": "B's constructor, then D's constructor",
                "explanation": "When a derived class object is created, the base class constructor is always executed first to initialize the inherited base part of the object, followed by the derived class constructor."
              },
              {
                "question": "Operator overloading as a **non-member (friend) function** requires how many arguments for a unary operator like `++`?",
                "options": [
                  "Zero",
                  "One",
                  "Two",
                  "Three"
                ],
                "correctAnswer": "One",
                "explanation": "When overloaded as a friend function, a unary operator takes one explicit argument (the object it is operating on). When overloaded as a friend function, a binary operator takes two explicit arguments."
              },
              {
                "question": "A type of inheritance that combines aspects of two or more other inheritance types (e.g., Single and Multiple) is generally referred to as:",
                "options": [
                  "Linear Inheritance",
                  "Virtual Inheritance",
                  "Hybrid Inheritance",
                  "Multilevel Inheritance"
                ],
                "correctAnswer": "Hybrid Inheritance",
                "explanation": "Hybrid inheritance is a combination of two or more types of inheritance, such as combining multiple inheritance and multilevel inheritance. Multipath inheritance is a form of hybrid inheritance where there is more than one path for a derived class to inherit from a base class (like the Diamond Problem)."
              }
            ]
          },
        ]
      },
      ...additionalComputerScienceChapters
    ]
  },
  {
    id: 4,
    title: "Electrical Engineering",
    description: "Electrical engineering principles and practices.",
    image: "https://ik.imagekit.io/necweb/nec-web/electrical-engineering.png?updatedAt=1759573045244",
    syllabusLink: "/pdfs/electrical-engineering-syllabus.pdf",
    // modelQuestionPaperLink: "/pdfs/electrical-engineering-model-question-paper.pdf",
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
  // {
  //   id: 5,
  //   title: "Electronics & Communication Engineering",
  //   description: "Electronics and communication systems for the NEC exam.",
  //   image: "https://www.acsce.edu.in/blog/wp-content/uploads/2023/12/ACSCE-ECE.jpg",
  //   syllabusLink: "/pdfs/placeholder.pdf",
  //   modelQuestionPaperLink: "/pdfs/placeholder.pdf",
  //   chapters: [
  //     {
  //       id: 1,
  //       title: "Analog Electronics",
  //       topics: [
  //         {
  //           id: 1,
  //           title: "Amplifiers",
  //           description: "Classification and frequency response of amplifiers.",
  //           videos: [],
  //           pdfs: [],
  //           externalLinks: [],
  //           mcqs: []
  //         },
  //         {
  //           id: 2,
  //           title: "Oscillators",
  //           description: "Barkhausen criterion and common oscillator circuits.",
  //           videos: [],
  //           pdfs: [],
  //           externalLinks: [],
  //           mcqs: []
  //         }
  //       ]
  //     },
  //     {
  //       id: 2,
  //       title: "Digital Communication",
  //       topics: [
  //         {
  //           id: 1,
  //           title: "Modulation Techniques",
  //           description: "ASK, FSK and PSK modulation schemes.",
  //           videos: [],
  //           pdfs: [],
  //           externalLinks: [],
  //           mcqs: []
  //         }
  //       ]
  //     }
  //   ],
  // },
  {
    id: 6,
    title: "Mechanical Engineering",
    description: "Mechanical engineering topics and design.",
    image: "https://ik.imagekit.io/necweb/nec-web/mechanical-engineering.png?updatedAt=1759573044358",
    syllabusLink: "/pdfs/mechanical-engineering-syllabus.pdf",
    // modelQuestionPaperLink: "/pdfs/mechanical-engineering-model-question-paper.pdf",
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
  // {
  //   id: 7,
  //   title: "Industrial & Manufacturing Engineering",
  //   description: "Industrial processes and manufacturing systems.",
  //   image: "https://www.pct.edu/sites/default/files/styles/medium_4_3_crop_/public/2019-06/man_engineer_tech_careers.jpg?itok=E0_K9PbH",
  //   syllabusLink: "/pdfs/placeholder.pdf",
  //   modelQuestionPaperLink: "/pdfs/placeholder.pdf",
  //   chapters: [defaultChapter],
  // },
  // {
  //   id: 8,
  //   title: "Agricultural Engineering",
  //   description: "Engineering solutions for agriculture.",
  //   image: "https://www.rathinamcollege.edu.in/wp-content/uploads/2020/08/agri-blog-1.png",
  //   syllabusLink: "/pdfs/placeholder.pdf",
  //   modelQuestionPaperLink: "/pdfs/placeholder.pdf",
  //   chapters: [defaultChapter],
  // },
  // {
  //   id: 9,
  //   title: "Chemical Engineering",
  //   description: "Chemical processes and technologies.",
  //   image: "https://cgu-odisha.ac.in/wp-content/uploads/2023/05/Chemical_Engineer_1920X10180.jpg",
  //   syllabusLink: "/pdfs/placeholder.pdf",
  //   modelQuestionPaperLink: "/pdfs/placeholder.pdf",
  //   chapters: [defaultChapter],
  // },
  // {
  //   id: 10,
  //   title: "Biomedical Engineering",
  //   description: "Medical devices and biological engineering.",
  //   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXWfnCyq4CnSCL0tp8AqGxy7MuBuTfKpV5Vw&s",
  //   syllabusLink: "/pdfs/placeholder.pdf",
  //   modelQuestionPaperLink: "/pdfs/placeholder.pdf",
  //   chapters: [defaultChapter],
  // },
  // {
  //   id: 11,
  //   title: "Geomatics/Survey Engineering",
  //   description: "Surveying and geomatics technologies.",
  //   image: "https://www.sait.ca/assets/image/programs/credit-programs-600x400/pr-geomatics-engineering-technology-600x400.jpg",
  //   syllabusLink: "/pdfs/placeholder.pdf",
  //   modelQuestionPaperLink: "/pdfs/placeholder.pdf",
  //   chapters: [defaultChapter],
  // },
  // {
  //   id: 12,
  //   title: "Hydropower/Water Resources Engineering",
  //   description: "Hydropower and water resource management.",
  //   image: "https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image/v1638886585/EducationHub/photos/picote-dam.jpg",
  //   syllabusLink: "/pdfs/placeholder.pdf",
  //   modelQuestionPaperLink: "/pdfs/placeholder.pdf",
  //   chapters: [defaultChapter],
  // },
  // {
  //   id: 13,
  //   title: "Environmental Engineering",
  //   description: "Environmental protection and sustainability.",
  //   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR90KSTW4rAyPOCazQniFpvnq_hN5Zp4zFyQ&s",
  //   syllabusLink: "/pdfs/placeholder.pdf",
  //   modelQuestionPaperLink: "/pdfs/placeholder.pdf",
  //   chapters: [defaultChapter],
  // },
  // {
  //   id: 14,
  //   title: "Mining Engineering",
  //   description: "Exploration and extraction of minerals.",
  //   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmq0gGP13fLde9d4iLMDLtTvLLMhFZUBKt2w&s",
  //   syllabusLink: "/pdfs/placeholder.pdf",
  //   modelQuestionPaperLink: "/pdfs/placeholder.pdf",
  //   chapters: [defaultChapter],
  // },
  // {
  //   id: 15,
  //   title: "Automobile Engineering",
  //   description: "Design and development of automobiles.",
  //   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEZsrXfeg5Tuh55VlFMfuSjTkzZCvcQeR7Mw&s",
  //   syllabusLink: "/pdfs/placeholder.pdf",
  //   modelQuestionPaperLink: "/pdfs/placeholder.pdf",
  //   chapters: [defaultChapter],
  // },
  // {
  //   id: 16,
  //   title: "Metallurgical Engineering",
  //   description: "Metals and material science engineering.",
  //   image: "https://exploreengineering.ca/sites/default/files/2020-02/NEM_metallurgical.jpg",
  //   syllabusLink: "/pdfs/placeholder.pdf",
  //   modelQuestionPaperLink: "/pdfs/placeholder.pdf",
  //   chapters: [defaultChapter],
  // },
];

export default courses;
