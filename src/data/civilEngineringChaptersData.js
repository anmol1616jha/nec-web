// Comprehensive Civil Engineering Chapters for NEC Exam (Chapters 3-12)
export const additionalCivilEngineeringChapters = [
  {
    "id": 3,
    "title": "Surveying and Levelling",
    "code": "ACvE03",
    "topics": [
      {
        "id": 1,
        "title": "Principles of Surveying",
        "description": "Classification of surveys, principles of surveying (working from whole to part, simple to complex), surveying instruments (chain, tape, compass, transit, theodolite, level), measurement of distances (chaining, taping), corrections (temperature, tension, slope, sag).",
        "videos": [
          {
            "title": "Surveying Fundamentals - Complete Course",
            "url": "https://www.youtube.com/playlist?list=PLBlnK6fPqkYvLVmTa43V-Y3V4S8gLPr1E"
          }
        ],
        "externalLinks": [
          {
            "title": "Surveying Principles - GeeksforGeeks",
            "url": "https://www.geeksforgeeks.org/surveying-and-levelling/"
          },
          {
            "title": "Surveying Methods - Tutorialspoint",
            "url": "https://www.tutorialspoint.com/surveying/"
          }
        ],
        "mcqs": [
          {
            "question": "Which surveying method is used for large areas?",
            "options": ["Chain surveying", "Traverse surveying", "Triangulation", "Levelling"],
            "correctAnswer": "Triangulation",
            "explanation": "Triangulation is used for surveying large areas and mountainous regions."
          },
          {
            "question": "The principle 'working from whole to part' means:",
            "options": ["Start from small areas", "Start from large framework", "Random starting point", "No specific order"],
            "correctAnswer": "Start from large framework",
            "explanation": "Surveying starts with major control points and progressively reduces to smaller details."
          },
          {
            "question": "Standard length of surveying chain is:",
            "options": ["10 m", "20 m", "30 m", "50 m"],
            "correctAnswer": "20 m",
            "explanation": "Standard Gunter's chain is 20 meters (66 feet) long, divided into 100 links."
          },
          {
            "question": "Correction for sag in chain surveying is:",
            "options": ["Added", "Subtracted", "Positive correction", "Negative correction"],
            "correctAnswer": "Negative correction",
            "explanation": "Sag correction is always negative as the chain hangs in a catenary curve."
          },
          {
            "question": "Theodolite is used to measure:",
            "options": ["Distances only", "Angles only", "Heights only", "Both distances and angles"],
            "correctAnswer": "Both distances and angles",
            "explanation": "Theodolite measures both horizontal and vertical angles."
          },
          {
            "question": "Ranging is the process of:",
            "options": ["Measuring distance", "Setting intermediate points", "Measuring angle", "Recording data"],
            "correctAnswer": "Setting intermediate points",
            "explanation": "Ranging involves placing markers along a survey line between two stations."
          },
          {
            "question": "Plumbing refers to:",
            "options": ["Fixing pipes", "Setting vertical alignment", "Measuring depth", "Reading level"],
            "correctAnswer": "Setting vertical alignment",
            "explanation": "Plumbing is the vertical alignment of instruments above a survey station."
          },
          {
            "question": "Offset is measured:",
            "options": ["Parallel to survey line", "Perpendicular to survey line", "At an angle", "Randomly"],
            "correctAnswer": "Perpendicular to survey line",
            "explanation": "Offsets are perpendicular distances from survey line to features."
          },
          {
            "question": "Temporary adjustment of theodolite includes:",
            "options": ["Focus", "Centering", "Levelling", "All of above"],
            "correctAnswer": "All of above",
            "explanation": "Temporary adjustments include levelling, centering, and focusing for each set-up."
          },
          {
            "question": "Least count of a theodolite is:",
            "options": ["1° or larger", "1' (1 minute)", "5 or 20 seconds", "Depends on vernier"],
            "correctAnswer": "5 or 20 seconds",
            "explanation": "Least count depends on the vernier scale; typically 20 or 10 seconds."
          }
        ]
      },
      {
        "id": 2,
        "title": "Levelling and Contouring",
        "description": "Principles of levelling, levelling instruments (level, staff, telescope), methods of levelling (simple, differential, trigonometric), bench marks, reduced levels, level booking and reduction, contour mapping, uses of contours.",
        "videos": [
          {
            "title": "Levelling in Surveying",
            "url": "https://www.youtube.com/watch?v=wK_RlwqY0V0"
          }
        ],
        "externalLinks": [
          {
            "title": "Levelling and Contouring - GeeksforGeeks",
            "url": "https://www.geeksforgeeks.org/levelling-and-contouring-in-surveying/"
          }
        ],
        "mcqs": [
          {
            "question": "Simple levelling is used when:",
            "options": ["Distance is very long", "Distance is short", "Difference in level is large", "Area is hilly"],
            "correctAnswer": "Distance is short",
            "explanation": "Simple levelling is used for short distances where level can be set-up in one position."
          },
          {
            "question": "Bench mark (BM) is:",
            "options": ["Height reference only", "Starting point for levelling", "Error correction point", "Random mark"],
            "correctAnswer": "Starting point for levelling",
            "explanation": "BM is a permanent reference point with known elevation used as starting point."
          },
          {
            "question": "Back sight (BS) reading is:",
            "options": ["Reading on new point", "Reading on previous point", "Difference in heights", "Staff reading on BM"],
            "correctAnswer": "Staff reading on BM",
            "explanation": "BS is the reading taken on known elevation (BM or previous point)."
          },
          {
            "question": "Fore sight (FS) reading is:",
            "options": ["Reading on known point", "Reading on new point ahead", "Average reading", "Error reading"],
            "correctAnswer": "Reading on new point ahead",
            "explanation": "FS is the reading taken on new point where elevation is to be determined."
          },
          {
            "question": "Reduced level (RL) is calculated as:",
            "options": ["HI - FS", "HI - BS", "BS - FS", "FS + BS"],
            "correctAnswer": "HI - FS",
            "explanation": "RL = Height of Instrument (HI) - Fore Sight reading."
          },
          {
            "question": "Contour interval is:",
            "options": ["Horizontal distance between contours", "Vertical distance between contours", "Line connecting equal elevation", "Survey method"],
            "correctAnswer": "Vertical distance between contours",
            "explanation": "Contour interval is the vertical difference between consecutive contours."
          },
          {
            "question": "Contour lines always form:",
            "options": ["Straight lines", "Right angles", "Closed curves", "Parallel lines only"],
            "correctAnswer": "Closed curves",
            "explanation": "Contour lines are continuous and form closed curves (may extend beyond map)."
          },
          {
            "question": "Interpolation of contours is done:",
            "options": ["Mechanically only", "By estimation between surveyed points", "Using formula only", "Never"],
            "correctAnswer": "By estimation between surveyed points",
            "explanation": "Contours between surveyed points are estimated by interpolation."
          },
          {
            "question": "Tachymetry uses:",
            "options": ["Only theodolite", "Theodolite and staff", "Only staff", "Only level"],
            "correctAnswer": "Theodolite and staff",
            "explanation": "Tachymetry uses theodolite with stadia hairs to measure distances and heights simultaneously."
          },
          {
            "question": "Trigonometric levelling is used for:",
            "options": ["Short distances only", "Long distances and heights", "Plane areas only", "Vertical angles only"],
            "correctAnswer": "Long distances and heights",
            "explanation": "Used when direct levelling is not possible (mountains, long distances)."
          }
        ]
      },
      {
        "id": 3,
        "title": "Traverse and Triangulation",
        "description": "Traverse surveying (open, closed, complicated), check lines, latitude and departure, traverse closure, error of closure, adjustment of traverse, triangulation principles, base line measurement, angle measurement, station marks, computation of triangulation.",
        "videos": [
          {
            "title": "Traverse and Triangulation Surveying",
            "url": "https://www.youtube.com/watch?v=L3j_mXKFcpk"
          }
        ],
        "externalLinks": [
          {
            "title": "Traverse Surveying - GeeksforGeeks",
            "url": "https://www.geeksforgeeks.org/traverse-surveying/"
          }
        ],
        "mcqs": [
          {
            "question": "Closed traverse is one where:",
            "options": ["Starting point is not known", "End point is same as starting point", "Only open paths", "Single straight line"],
            "correctAnswer": "End point is same as starting point",
            "explanation": "Closed traverse forms a closed polygon; start and end points coincide."
          },
          {
            "question": "Latitude in traverse is:",
            "options": ["North-South component", "East-West component", "Horizontal distance", "Vertical distance"],
            "correctAnswer": "North-South component",
            "explanation": "Latitude = Distance × cos(bearing)."
          },
          {
            "question": "Departure in traverse is:",
            "options": ["North-South component", "East-West component", "Diagonal distance", "Height difference"],
            "correctAnswer": "East-West component",
            "explanation": "Departure = Distance × sin(bearing)."
          },
          {
            "question": "Linear error of closure in traverse should be:",
            "options": ["As large as possible", "As small as possible", "Equal to distance", "1:1000"],
            "correctAnswer": "As small as possible",
            "explanation": "Error of closure should be minimized; acceptable limit is typically 1 in 1000."
          },
          {
            "question": "Check line in traverse is used to:",
            "options": ["Start traverse", "End traverse", "Check accuracy of traverse", "Measure base line"],
            "correctAnswer": "Check accuracy of traverse",
            "explanation": "Check lines are independent measurements between traverse points to verify accuracy."
          },
          {
            "question": "Base line in triangulation is:",
            "options": ["First line measured carefully", "Any line", "Shortest line", "Longest line"],
            "correctAnswer": "First line measured carefully",
            "explanation": "Base line is measured with precision as foundation for entire triangulation."
          },
          {
            "question": "Primary triangulation uses angles:",
            "options": ["Less than 30°", "30° to 60°", "Greater than 90°", "Exactly 60°"],
            "correctAnswer": "30° to 60°",
            "explanation": "For accurate triangulation, angles should ideally be between 30° and 60°."
          },
          {
            "question": "Station mark (trig pillar) is:",
            "options": ["Temporary marking", "Permanent reference mark at station", "Height measurement only", "Bearing only"],
            "correctAnswer": "Permanent reference mark at station",
            "explanation": "Station marks are permanent structures at triangulation stations."
          },
          {
            "question": "Intersection method is used for:",
            "options": ["Inaccessible heights", "Nearby points", "Open areas", "All points"],
            "correctAnswer": "Inaccessible heights",
            "explanation": "Intersection (and resection) used to locate inaccessible points using angles."
          },
          {
            "question": "Resection method locates:",
            "options": ["Known point", "Unknown point using observations", "Only horizontal distances", "Only angles"],
            "correctAnswer": "Unknown point using observations",
            "explanation": "Resection determines position of a point by taking angles to known points."
          }
        ]
      },
      {
        "id": 4,
        "title": "Remote Sensing and GIS Basics",
        "description": "Remote sensing principles, satellite imagery, aerial photography, sensors (passive, active), bands and wavelengths, ground resolution, GIS concepts, data collection, map projections, coordinate systems, application in civil engineering.",
        "videos": [
          {
            "title": "Remote Sensing and GIS Basics",
            "url": "https://www.youtube.com/watch?v=9BX3Fa9gSBM"
          }
        ],
        "externalLinks": [
          {
            "title": "Remote Sensing - GeeksforGeeks",
            "url": "https://www.geeksforgeeks.org/remote-sensing/"
          }
        ],
        "mcqs": [
          {
            "question": "Remote sensing is:",
            "options": ["Measuring objects directly", "Collecting data without physical contact", "Only aerial photography", "Ground surveying"],
            "correctAnswer": "Collecting data without physical contact",
            "explanation": "Remote sensing uses sensors to collect data from distance (satellites, aircraft)."
          },
          {
            "question": "Passive remote sensing uses:",
            "options": ["Radar signals", "Thermal energy", "Sun's radiation", "Laser pulses"],
            "correctAnswer": "Sun's radiation",
            "explanation": "Passive sensors detect natural electromagnetic radiation (sunlight reflection)."
          },
          {
            "question": "Active remote sensing uses:",
            "options": ["Only visible light", "Own energy source (radar, lidar)", "Thermal cameras", "Passive detection"],
            "correctAnswer": "Own energy source (radar, lidar)",
            "explanation": "Active sensors emit their own radiation and detect reflections (radar, lidar, sonar)."
          },
          {
            "question": "GIS stands for:",
            "options": ["Global Internet System", "Geographic Information System", "Ground Imaging System", "Geodetic Survey"],
            "correctAnswer": "Geographic Information System",
            "explanation": "GIS: integrated system for capturing, analyzing, and displaying spatial data."
          },
          {
            "question": "Map projection is needed because:",
            "options": ["Earth is flat", "Convert 3D sphere to 2D map", "For faster rendering", "No real reason"],
            "correctAnswer": "Convert 3D sphere to 2D map",
            "explanation": "Projection converts spherical Earth surface to 2D map (with some distortion)."
          },
          {
            "question": "Spatial resolution in remote sensing refers to:",
            "options": ["Number of colors", "Size of pixel (smallest detail)", "File size", "Image quality only"],
            "correctAnswer": "Size of pixel (smallest detail)",
            "explanation": "Resolution indicates smallest detectable feature size (smaller pixel = better resolution)."
          },
          {
            "question": "Multispectral imagery captures:",
            "options": ["Only visible light", "Multiple wavelength bands", "Single color only", "Thermal data only"],
            "correctAnswer": "Multiple wavelength bands",
            "explanation": "Multispectral sensors record data in multiple bands (visible, infrared, thermal)."
          },
          {
            "question": "Orthophoto is:",
            "options": ["Vertical aerial photo", "Geometrically corrected aerial photo", "Thermal photo", "Simple map"],
            "correctAnswer": "Geometrically corrected aerial photo",
            "explanation": "Orthophoto has geometric corrections for relief displacement; can be used like map."
          },
          {
            "question": "Vector data in GIS represents:",
            "options": ["Satellite images only", "Discrete features (points, lines, polygons)", "Continuous surfaces", "Raster grids"],
            "correctAnswer": "Discrete features (points, lines, polygons)",
            "explanation": "Vector data uses points, lines, polygons to represent geographic features."
          },
          {
            "question": "UTM coordinate system divides Earth into:",
            "options": ["100 zones", "60 zones", "180 zones", "360 zones"],
            "correctAnswer": "60 zones",
            "explanation": "UTM divides Earth into 60 zones, each 6° longitude wide."
          }
        ]
      }
    ]
  },
  {
    "id": 4,
    "title": "Engineering Mechanics",
    "code": "ACvE04",
    "topics": [
      {
        "id": 1,
        "title": "Statics and Force Systems",
        "description": "Concept of force, types of forces, resultant and components, equilibrium of forces, moment (torque), couples, free body diagram, conditions of equilibrium (translational, rotational), support reactions, analysis of trusses (method of joints, method of sections).",
        "videos": [
          {
            "title": "Engineering Mechanics - Statics",
            "url": "https://www.youtube.com/playlist?list=PLBlnK6fPqkYuTcUo0lXRt2KzWp7xqwWqM"
          }
        ],
        "externalLinks": [
          {
            "title": "Statics - GeeksforGeeks",
            "url": "https://www.geeksforgeeks.org/engineering-mechanics/"
          },
          {
            "title": "Free Body Diagram - Tutorialspoint",
            "url": "https://www.tutorialspoint.com/what-is-a-free-body-diagram"
          }
        ],
        "mcqs": [
          {
            "question": "A force is completely defined by:",
            "options": ["Magnitude only", "Direction only", "Magnitude, direction, and point of application", "Time duration"],
            "correctAnswer": "Magnitude, direction, and point of application",
            "explanation": "Force is a vector requiring magnitude, direction, and point of application."
          },
          {
            "question": "Resultant of two forces at angle θ is:",
            "options": ["F₁ + F₂", "F₁ - F₂", "√(F₁² + F₂² + 2F₁F₂cosθ)", "F₁F₂"],
            "correctAnswer": "√(F₁² + F₂² + 2F₁F₂cosθ)",
            "explanation": "Resultant R = √(F₁² + F₂² + 2F₁F₂cosθ) by parallelogram law."
          },
          {
            "question": "Moment of a force about a point is:",
            "options": ["Force magnitude", "Force × perpendicular distance", "Force × time", "Force / distance"],
            "correctAnswer": "Force × perpendicular distance",
            "explanation": "Moment M = F × d (force times perpendicular distance from point)."
          },
          {
            "question": "A couple consists of:",
            "options": ["Single force", "Two parallel forces of equal magnitude opposite direction", "Two forces at angle", "Distributed force"],
            "correctAnswer": "Two parallel forces of equal magnitude opposite direction",
            "explanation": "Couple produces rotation without translation; equal opposite parallel forces."
          },
          {
            "question": "For equilibrium, sum of forces should be:",
            "options": ["Maximum", "Minimum", "Zero", "Equal to applied force"],
            "correctAnswer": "Zero",
            "explanation": "Translational equilibrium: ΣF = 0; no acceleration."
          },
          {
            "question": "For rotational equilibrium, sum of moments should be:",
            "options": ["Maximum", "Minimum", "Zero", "Equal to torque"],
            "correctAnswer": "Zero",
            "explanation": "Rotational equilibrium: ΣM = 0; no angular acceleration."
          },
          {
            "question": "Free body diagram shows:",
            "options": ["All forces on isolated object", "Only applied forces", "Deformations only", "Stresses only"],
            "correctAnswer": "All forces on isolated object",
            "explanation": "FBD includes all external forces and moments acting on isolated object."
          },
          {
            "question": "In method of joints, we analyze:",
            "options": ["Entire truss", "Each joint individually", "Only external forces", "Stresses in members"],
            "correctAnswer": "Each joint individually",
            "explanation": "Method of joints isolates each joint and applies equilibrium equations."
          },
          {
            "question": "Method of sections is used to find:",
            "options": ["Support reactions", "Forces in specific members", "Deformations", "Material properties"],
            "correctAnswer": "Forces in specific members",
            "explanation": "Section method cuts through members of interest to find internal forces."
          },
          {
            "question": "Support reactions are found using:",
            "options": ["Only FBD", "Conditions of equilibrium", "Material properties", "Strain measurements"],
            "correctAnswer": "Conditions of equilibrium",
            "explanation": "Reactions determined using ΣF = 0 and ΣM = 0 equations."
          }
        ]
      },
      {
        "id": 2,
        "title": "Kinematics and Dynamics",
        "description": "Motion concepts (displacement, velocity, acceleration), equations of motion, kinetic energy, potential energy, work and energy, power, coefficient of restitution, collisions, friction (static, kinetic, angle of repose), rotational motion, angular momentum.",
        "videos": [
          {
            "title": "Kinematics and Dynamics - Complete Course",
            "url": "https://www.youtube.com/playlist?list=PLBlnK6fPqkYvDvhvGJJYaHn6zQb2dIgLq"
          }
        ],
        "externalLinks": [
          {
            "title": "Kinematics - GeeksforGeeks",
            "url": "https://www.geeksforgeeks.org/kinematics/"
          }
        ],
        "mcqs": [
          {
            "question": "Velocity is:",
            "options": ["Speed only", "Rate of change of displacement", "Acceleration", "Distance covered"],
            "correctAnswer": "Rate of change of displacement",
            "explanation": "Velocity is vector quantity; v = ds/dt."
          },
          {
            "question": "Acceleration is:",
            "options": ["Same as velocity", "Rate of change of velocity", "Distance / time", "Force × mass"],
            "correctAnswer": "Rate of change of velocity",
            "explanation": "Acceleration a = dv/dt or dv/dt = Δv/Δt."
          },
          {
            "question": "Newton's second law states:",
            "options": ["Every action has reaction", "F = ma", "Acceleration is constant", "Energy is conserved"],
            "correctAnswer": "F = ma",
            "explanation": "F = ma: force equals mass times acceleration."
          },
          {
            "question": "Kinetic energy is:",
            "options": ["Mgh", "½mv²", "Gravitational potential", "Elastic energy"],
            "correctAnswer": "½mv²",
            "explanation": "KE = ½mv² (energy of motion)."
          },
          {
            "question": "Potential energy is:",
            "options": ["Kinetic energy", "Mgh (at height h)", "Energy of motion", "Spring energy"],
            "correctAnswer": "Mgh (at height h)",
            "explanation": "PE = mgh (gravitational potential at height h)."
          },
          {
            "question": "Work is defined as:",
            "options": ["Force only", "Force × distance", "Energy / time", "Power only"],
            "correctAnswer": "Force × distance",
            "explanation": "W = F × d (force times distance in direction of force)."
          },
          {
            "question": "Power is:",
            "options": ["Force", "Energy only", "Rate of doing work", "Distance / time"],
            "correctAnswer": "Rate of doing work",
            "explanation": "Power P = W/t (work done per unit time); unit: Watt."
          },
          {
            "question": "Coefficient of friction is:",
            "options": ["Measured in degrees", "Dimensionless ratio of friction to normal force", "Same as angle", "Velocity dependent"],
            "correctAnswer": "Dimensionless ratio of friction to normal force",
            "explanation": "μ = f/N (friction force divided by normal force)."
          },
          {
            "question": "Angle of repose is:",
            "options": ["Maximum angle of slope", "Angle when object starts sliding", "Friction angle = tan⁻¹(μ)", "All above"],
            "correctAnswer": "All above",
            "explanation": "Angle of repose α = tan⁻¹(μ); object slides when incline exceeds this angle."
          },
          {
            "question": "Angular momentum L is:",
            "options": ["Linear momentum", "Mass × velocity", "Moment of inertia × angular velocity (Iω)", "Torque"],
            "correctAnswer": "Moment of inertia × angular velocity (Iω)",
            "explanation": "L = Iω (angular momentum in rotational motion)."
          }
        ]
      },
      {
        "id": 3,
        "title": "Stress and Strain",
        "description": "Normal stress and strain, shear stress and strain, elasticity, Hooke's law, elastic moduli (Young's, Bulk, Shear), Poisson's ratio, combined stresses, principal stresses, Mohr's circle, stress transformation.",
        "videos": [
          {
            "title": "Stress and Strain - Engineering Mechanics",
            "url": "https://www.youtube.com/watch?v=p50S5KqPsGE"
          }
        ],
        "externalLinks": [
          {
            "title": "Stress and Strain - GeeksforGeeks",
            "url": "https://www.geeksforgeeks.org/stress-and-strain/"
          }
        ],
        "mcqs": [
          {
            "question": "Normal stress is:",
            "options": ["Shear force / area", "Normal force / area", "Deformation", "Elastic property"],
            "correctAnswer": "Normal force / area",
            "explanation": "σ = P/A (normal stress = force perpendicular to area / area)."
          },
          {
            "question": "Normal strain is:",
            "options": ["Stress / area", "Change in length / original length", "Angle change", "Lateral deformation"],
            "correctAnswer": "Change in length / original length",
            "explanation": "ε = ΔL/L (normal strain = deformation / original length)."
          },
          {
            "question": "Shear strain is measured in:",
            "options": ["Units of length", "Force per area", "Angle in radians", "Percentage"],
            "correctAnswer": "Angle in radians",
            "explanation": "Shear strain γ is angular deformation, measured in radians."
          },
          {
            "question": "Hooke's law states:",
            "options": ["Stress is always equal to strain", "Stress is proportional to strain", "Strain is independent of stress", "Stress = constant"],
            "correctAnswer": "Stress is proportional to strain",
            "explanation": "σ = Eε within elastic limit (E is Young's modulus)."
          },
          {
            "question": "Young's modulus (E) measures:",
            "options": ["Elasticity in tension/compression", "Elasticity in shear", "Elasticity in volume", "Lateral deformation"],
            "correctAnswer": "Elasticity in tension/compression",
            "explanation": "E = σ/ε (tensile or compressive elasticity)."
          },
          {
            "question": "Poisson's ratio is:",
            "options": ["Lateral strain / longitudinal strain", "Longitudinal strain / lateral strain", "Stress / strain", "Always positive"],
            "correctAnswer": "Lateral strain / longitudinal strain",
            "explanation": "ν = lateral strain / longitudinal strain; typically 0.25-0.33 for materials."
          },
          {
            "question": "Bulk modulus (K) measures:",
            "options": ["Tensile elasticity", "Shear elasticity", "Volume change resistance", "All elasticity types"],
            "correctAnswer": "Volume change resistance",
            "explanation": "Bulk modulus: material's resistance to volume change under pressure."
          },
          {
            "question": "Principal stresses are:",
            "options": ["Maximum and minimum stresses", "Applied stresses only", "Shear stresses", "Any stresses"],
            "correctAnswer": "Maximum and minimum stresses",
            "explanation": "Principal stresses are extreme normal stresses at planes with zero shear."
          },
          {
            "question": "Mohr's circle graphically represents:",
            "options": ["Strain only", "Stress transformation and principal stresses", "Material properties", "Time variation"],
            "correctAnswer": "Stress transformation and principal stresses",
            "explanation": "Mohr's circle shows stress transformation; principal stresses at top/bottom."
          },
          {
            "question": "For a 2D stress state, number of independent stress components:",
            "options": ["1", "2", "3", "4"],
            "correctAnswer": "3",
            "explanation": "2D stress: σₓ, σᵧ, τₓᵧ (shear stress is same in both directions)."
          }
        ]
      },
      {
        "id": 4,
        "title": "Centre of Gravity and Moment of Inertia",
        "description": "Centre of gravity (centroid) for regular and composite shapes, theorems of Pappus, moment of inertia about axes, parallel axis theorem, perpendicular axis theorem, product of inertia, radius of gyration, second moment of area.",
        "videos": [
          {
            "title": "Centre of Gravity and Moment of Inertia",
            "url": "https://www.youtube.com/watch?v=9PZ9Q1n3NAw"
          }
        ],
        "externalLinks": [
          {
            "title": "Centroid and Moment of Inertia - GeeksforGeeks",
            "url": "https://www.geeksforgeeks.org/moment-of-inertia/"
          }
        ],
        "mcqs": [
          {
            "question": "Centre of gravity is the point where:",
            "options": ["All mass is concentrated", "All forces balance", "Resultant weight acts", "All above"],
            "correctAnswer": "All above",
            "explanation": "CG is the point where entire weight acts; all mass conceptually concentrated."
          },
          {
            "question": "For a symmetrical section, centroid is at:",
            "options": ["Any point", "Centre of symmetry", "One end", "Random location"],
            "correctAnswer": "Centre of symmetry",
            "explanation": "For symmetric shapes, centroid lies at the geometric center."
          },
          {
            "question": "Moment of inertia is:",
            "options": ["Same as mass", "Resistance to rotational acceleration", "Resistance to bending", "All above"],
            "correctAnswer": "All above",
            "explanation": "I measures distribution of mass about axis; resists rotation and bending."
          },
          {
            "question": "Parallel axis theorem states:",
            "options": ["All axes are same", "Iₓ = Ixc + Ad²", "Moment of inertia is constant", "d is arbitrary"],
            "correctAnswer": "Iₓ = Ixc + Ad²",
            "explanation": "I about any axis = I about centroidal axis + Area × (distance)²."
          },
          {
            "question": "Perpendicular axis theorem applies to:",
            "options": ["All objects", "Planar sections about perpendicular axes", "3D objects only", "No objects"],
            "correctAnswer": "Planar sections about perpendicular axes",
            "explanation": "For planar section: Iz = Ix + Iy (about perpendicular axes in plane)."
          },
          {
            "question": "Radius of gyration (k) is defined as:",
            "options": ["Area / inertia", "√(I/A)", "Moment of inertia only", "Distance only"],
            "correctAnswer": "√(I/A)",
            "explanation": "k = √(I/A); represents equivalent distance where all mass acts for I."
          },
          {
            "question": "Second moment of area is:",
            "options": ["Same as centroid", "∫y²dA (integral of distance squared)", "First moment", "Force"],
            "correctAnswer": "∫y²dA (integral of distance squared)",
            "explanation": "Second moment I = ∫y²dA or ∫x²dA about respective axes."
          },
          {
            "question": "For a rectangle (b × d), moment of inertia about centroidal axis is:",
            "options": ["bd³/12", "bd²/12", "b²d/12", "bd"],
            "correctAnswer": "bd³/12",
            "explanation": "For rectangle: Ix = bd³/12 (about horizontal centroidal axis)."
          },
          {
            "question": "For a circle radius r, moment of inertia about diameter is:",
            "options": ["πr³/4", "πr⁴/4", "πr⁴/2", "πr²"],
            "correctAnswer": "πr⁴/4",
            "explanation": "Circle: I = πr⁴/4 about any diametral axis."
          },
          {
            "question": "Product of inertia is:",
            "options": ["I multiplied", "∫xy dA (not zero for unsymmetric sections)", "Always zero", "Only for circles"],
            "correctAnswer": "∫xy dA (not zero for unsymmetric sections)",
            "explanation": "Ixy = ∫xy dA; zero for symmetric sections about axes, non-zero otherwise."
          }
        ]
      }
    ]
  },
  {
    "id": 5,
    "title": "Strength of Materials",
    "code": "ACvE05",
    "topics": [
      {
        "id": 1,
        "title": "Tensile and Compressive Strength",
        "description": "Stress-strain diagram, elastic region, plastic region, ultimate stress, breaking stress, factor of safety, types of failures (brittle, ductile), testing methods, proof stress, ductility and brittleness, stress concentration.",
        "videos": [
          {
            "title": "Strength of Materials - Tensile Testing",
            "url": "https://www.youtube.com/watch?v=5XqILxJ6hfQ"
          }
        ],
        "externalLinks": [
          {
            "title": "Tensile Strength - GeeksforGeeks",
            "url": "https://www.geeksforgeeks.org/tensile-strength/"
          }
        ],
        "mcqs": [
          {
            "question": "Ultimate tensile strength (UTS) is:",
            "options": ["Maximum load before fracture / area", "Yield stress", "Breaking stress", "Elastic limit"],
            "correctAnswer": "Maximum load before fracture / area",
            "explanation": "UTS is the maximum stress the material can withstand before failure."
          },
          {
            "question": "Yield stress is:",
            "options": ["Maximum stress", "Stress at plastic deformation begins", "Stress at rupture", "Proportional limit"],
            "correctAnswer": "Stress at plastic deformation begins",
            "explanation": "Yield stress (Sy) is where material begins permanent plastic deformation."
          },
          {
            "question": "Factor of safety is:",
            "options": ["Stress / allowable stress", "Failure stress / working stress", "Always 1", "Design choice"],
            "correctAnswer": "Failure stress / working stress",
            "explanation": "FOS = Ultimate stress / Allowable working stress; typically 1.5-3."
          },
          {
            "question": "Ductile material shows:",
            "options": ["No plastic deformation", "Large plastic deformation before failure", "Immediate brittle failure", "No warning"],
            "correctAnswer": "Large plastic deformation before failure",
            "explanation": "Ductile materials exhibit plastic strain; fail after warning (deformation)."
          },
          {
            "question": "Brittle material fails:",
            "options": ["After yielding", "Suddenly without warning", "With large deformation", "Elastically"],
            "correctAnswer": "Suddenly without warning",
            "explanation": "Brittle materials fracture suddenly with little or no plastic deformation."
          },
          {
            "question": "Proof stress is:",
            "options": ["Ultimate stress", "Stress producing permanent set of 0.1-0.2%", "Yield stress", "Elastic limit"],
            "correctAnswer": "Stress producing permanent set of 0.1-0.2%",
            "explanation": "Proof stress: stress causing specified permanent deformation (e.g., 0.2%)."
          },
          {
            "question": "Elastic limit is:",
            "options": ["Maximum stress", "Highest stress without permanent deformation", "Plastic region", "Failure point"],
            "correctAnswer": "Highest stress without permanent deformation",
            "explanation": "Beyond elastic limit, material retains permanent deformation after unloading."
          },
          {
            "question": "Stress concentration factor (Kt) accounts for:",
            "options": ["Material weakness", "Geometric discontinuities (holes, notches)", "Temperature", "Time"],
            "correctAnswer": "Geometric discontinuities (holes, notches)",
            "explanation": "Kt: ratio of local stress to nominal stress due to geometric stress raisers."
          },
          {
            "question": "Resilience is:",
            "options": ["Ability to absorb energy elastically", "Ability to sustain load", "Toughness", "Brittleness"],
            "correctAnswer": "Ability to absorb energy elastically",
            "explanation": "Resilience: energy absorbed per unit volume in elastic region."
          },
          {
            "question": "Toughness measures:",
            "options": ["Elastic capacity", "Total energy absorbed before failure", "Hardness", "Brittleness"],
            "correctAnswer": "Total energy absorbed before failure",
            "explanation": "Toughness: total work (area under stress-strain curve) before fracture."
          }
        ]
      },
      {
        "id": 2,
        "title": "Bending and Shear",
        "description": "Types of beams and loads, bending moment and shear force diagrams, relations between load, shear force and bending moment, stresses in beams (bending stress, shear stress), combined stresses, deflection of beams, slope of beams.",
        "videos": [
          {
            "title": "Bending Stress and Shear Stress in Beams",
            "url": "https://www.youtube.com/watch?v=KHMfIbJsS5A"
          }
        ],
        "externalLinks": [
          {
            "title": "Bending Moment Diagram - GeeksforGeeks",
            "url": "https://www.geeksforgeeks.org/bending-moment-diagram/"
          }
        ],
        "mcqs": [
          {
            "question": "Bending moment is:",
            "options": ["Shear force", "Load on beam", "Internal moment causing bending", "Reaction only"],
            "correctAnswer": "Internal moment causing bending",
            "explanation": "BM = internal moment that bends the beam; causes curvature."
          },
          {
            "question": "Shear force is:",
            "options": ["Bending moment", "Internal force parallel to section", "Reaction only", "Applied load"],
            "correctAnswer": "Internal force parallel to section",
            "explanation": "SF is internal force parallel to cross-section; resists shear."
          },
          {
            "question": "The relationship dV/dx = -w means:",
            "options": ["Load doesn't affect shear", "Shear changes due to distributed load", "Shear is constant", "No connection"],
            "correctAnswer": "Shear changes due to distributed load",
            "explanation": "Rate of change of SF = -load intensity; load causes SF change."
          },
          {
            "question": "For a cantilever beam with load at free end, maximum BM occurs at:",
            "options": ["Free end", "Fixed end", "Mid-span", "Any point"],
            "correctAnswer": "Fixed end",
            "explanation": "Cantilever: BM is zero at free end and maximum at fixed support."
          },
          {
            "question": "Bending stress formula is:",
            "options": ["σ = P/A", "σ = M/I × y", "σ = F/A", "σ = τ"],
            "correctAnswer": "σ = M/I × y",
            "explanation": "Bending stress σ = M/I × y (moment/inertia × distance from NA)."
          },
          {
            "question": "Shear stress distribution in rectangular section is:",
            "options": ["Uniform", "Parabolic", "Linear", "Triangular"],
            "correctAnswer": "Parabolic",
            "explanation": "Shear stress varies parabolically; maximum at neutral axis, zero at top/bottom."
          },
          {
            "question": "Neutral axis is where:",
            "options": ["Stress is maximum", "Stress is zero", "Bending moment is zero", "Shear force is zero"],
            "correctAnswer": "Stress is zero",
            "explanation": "Neutral axis (NA) in bending has zero normal stress; at centroid of section."
          },
          {
            "question": "Maximum deflection in simply supported beam (UDL) occurs at:",
            "options": ["Support", "Mid-span", "End", "Depends on load"],
            "correctAnswer": "Mid-span",
            "explanation": "For symmetric loading on SS beam, maximum deflection is at center."
          },
          {
            "question": "Deflection of cantilever with end load P is:",
            "options": ["PL²/2EI", "PL³/3EI", "PL⁴/8EI", "Depends on section"],
            "correctAnswer": "PL³/3EI",
            "explanation": "Cantilever deflection: δ = PL³/3EI at free end."
          },
          {
            "question": "Combined bending and axial stress occurs:",
            "options": ["Bending only", "Axial load with eccentric application", "Shear only", "Never"],
            "correctAnswer": "Axial load with eccentric application",
            "explanation": "Eccentric load causes both axial and bending stresses; combined analysis needed."
          }
        ]
      },
      {
        "id": 3,
        "title": "Torsion",
        "description": "Torque and shear stress, angle of twist, polar moment of inertia, torsion formula, stresses in circular and hollow shafts, power transmission, combined stresses (bending and torsion), shear stress distribution, equivalent bending moment.",
        "videos": [
          {
            "title": "Torsion in Shafts - Strength of Materials",
            "url": "https://www.youtube.com/watch?v=7N6Yjqd5k_w"
          }
        ],
        "externalLinks": [
          {
            "title": "Torsion Formula - GeeksforGeeks",
            "url": "https://www.geeksforgeeks.org/torsion/"
          }
        ],
        "mcqs": [
          {
            "question": "Torsion causes:",
            "options": ["Bending", "Twisting and shear stress", "Compression", "No stress"],
            "correctAnswer": "Twisting and shear stress",
            "explanation": "Torsion: twisting action causes shear stress in shaft material."
          },
          {
            "question": "Angle of twist is given by:",
            "options": ["θ = TL/GJ", "θ = T/G", "θ = L/J", "θ = T×L"],
            "correctAnswer": "θ = TL/GJ",
            "explanation": "Angle of twist θ = TL/GJ (torque × length / shear modulus × polar moment)."
          },
          {
            "question": "Polar moment of inertia (J) for solid circular shaft is:",
            "options": ["πd³/32", "πd⁴/32", "πd⁴/64", "πd²/16"],
            "correctAnswer": "πd⁴/32",
            "explanation": "Solid shaft: J = πd⁴/32 or πr⁴/2 (polar moment about axis)."
          },
          {
            "question": "Shear stress in torsion is:",
            "options": ["τ = T/J", "τ = Tr/J", "τ = T/A", "τ = J/T"],
            "correctAnswer": "τ = Tr/J",
            "explanation": "τ = Tr/J; maximum at outer surface (r = R for solid shaft)."
          },
          {
            "question": "For hollow circular shaft, polar moment J is:",
            "options": ["π(d₀⁴)/32", "π(d₀⁴ - dᵢ⁴)/32", "π(d₀² - dᵢ²)/16", "π(d₀ - dᵢ)⁴/32"],
            "correctAnswer": "π(d₀⁴ - dᵢ⁴)/32",
            "explanation": "Hollow: J = π(D⁴ - d⁴)/32 (outer and inner diameters)."
          },
          {
            "question": "Power transmission by shaft: P = ",
            "options": ["T × L", "T × ω", "ω / T", "T / ω"],
            "correctAnswer": "T × ω",
            "explanation": "Power P = T × ω (torque × angular velocity)."
          },
          {
            "question": "Maximum shear stress in shaft with combined bending and torsion:",
            "options": ["Shear stress only", "Bending stress + Torsional stress", "Larger of two stresses", "Combined equivalent stress"],
            "correctAnswer": "Combined equivalent stress",
            "explanation": "Combined: use equivalent stress theories (von Mises, Tresca) for design."
          },
          {
            "question": "At the neutral axis of bending combined with torsion:",
            "options": ["Bending stress is maximum", "Torsional shear is maximum", "Both are maximum", "Stress is minimum"],
            "correctAnswer": "Torsional shear is maximum",
            "explanation": "At NA, bending normal stress = 0; torsional shear is maximum."
          },
          {
            "question": "Shear modulus (G) relates to Young's modulus (E) by:",
            "options": ["G = 2E", "G = E/2(1+ν)", "G = E/(1+ν)", "G = E(1+ν)"],
            "correctAnswer": "G = E/2(1+ν)",
            "explanation": "G = E/2(1+ν) where ν is Poisson's ratio."
          },
          {
            "question": "Critical section for shaft design with combined loading is where:",
            "options": ["Torque is maximum", "Bending moment is maximum", "Combined equivalent stress is maximum", "Stress is zero"],
            "correctAnswer": "Combined equivalent stress is maximum",
            "explanation": "Design at section with maximum equivalent combined stress."
          }
        ]
      },
      {
        "id": 4,
        "title": "Pressure Vessels and Columns",
        "description": "Thin-walled pressure vessels, hoop stress and longitudinal stress, thick-walled cylinders, columns (Euler's formula), slenderness ratio, buckling, eccentrically loaded columns, Johnson's formula, design of columns.",
        "videos": [
          {
            "title": "Pressure Vessels and Column Buckling",
            "url": "https://www.youtube.com/watch?v=6HJZbY2qzeg"
          }
        ],
        "externalLinks": [
          {
            "title": "Pressure Vessels - GeeksforGeeks",
            "url": "https://www.geeksforgeeks.org/pressure-vessel/"
          }
        ],
        "mcqs": [
          {
            "question": "Hoop stress in thin-walled pressure vessel (diameter D, pressure P) is:",
            "options": ["σh = PD/4t", "σh = PD/2t", "σh = PD/t", "σh = P/t"],
            "correctAnswer": "σh = PD/2t",
            "explanation": "Hoop stress (circumferential) σh = PD/2t (pressure × diameter / 2 × thickness)."
          },
          {
            "question": "Longitudinal stress in thin-walled cylinder is:",
            "options": ["σl = PD/4t", "σl = PD/2t", "σl = PD/t", "Half of hoop stress"],
            "correctAnswer": "σl = PD/4t",
            "explanation": "Longitudinal stress σl = PD/4t (half of hoop stress)."
          },
          {
            "question": "For thin-walled vessel: hoop stress is ___ times longitudinal stress:",
            "options": ["1", "2", "3", "1/2"],
            "correctAnswer": "2",
            "explanation": "Hoop stress = 2 × Longitudinal stress in thin-walled cylinders."
          },
          {
            "question": "Euler's formula for column buckling (hinged ends) is:",
            "options": ["Pcr = π²EI/L²", "Pcr = π²EI/4L²", "Pcr = π²EI/2L²", "Pcr = EI/L²"],
            "correctAnswer": "Pcr = π²EI/L²",
            "explanation": "Euler: Pcr = π²EI/L² (for both ends hinged/free to rotate)."
          },
          {
            "question": "Slenderness ratio is defined as:",
            "options": ["L/r", "L²/r", "r/L", "L × r"],
            "correctAnswer": "L/r",
            "explanation": "Slenderness ratio λ = L/r (length / radius of gyration)."
          },
          {
            "question": "Column buckling mode is:",
            "options": ["Tensile failure", "Lateral instability leading to failure", "Crushing only", "No failure"],
            "correctAnswer": "Lateral instability leading to failure",
            "explanation": "Buckling: sudden lateral deflection and collapse under critical load."
          },
          {
            "question": "For column with fixed ends, effective length is:",
            "options": ["L", "L/2", "2L", "L/√2"],
            "correctAnswer": "L/2",
            "explanation": "Fixed-fixed: effective length Le = L/2 (more stable than hinged ends)."
          },
          {
            "question": "Johnson's formula is used when:",
            "options": ["Slenderness ratio is very high", "Slenderness ratio is low to moderate", "Column is very thin", "Always"],
            "correctAnswer": "Slenderness ratio is low to moderate",
            "explanation": "Johnson formula used for intermediate columns; Euler for very slender."
          },
          {
            "question": "Eccentrically loaded column fails due to:",
            "options": ["Axial load only", "Bending only", "Combined axial + bending stress", "Shear only"],
            "correctAnswer": "Combined axial + bending stress",
            "explanation": "Eccentric load: combined direct and bending stresses; analysis needed."
          },
          {
            "question": "Core or kern of a section is:",
            "options": ["Entire section", "Region where load produces compression throughout", "Center only", "Outer fibers"],
            "correctAnswer": "Region where load produces compression throughout",
            "explanation": "Kern: area where axial load causes only compressive stress (no tension)."
          }
        ]
      }
    ]
  }
];
