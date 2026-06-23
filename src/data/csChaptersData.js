// Chapters 4-9 for Computer Engineering (NEC Syllabus)
export const additionalComputerScienceChapters = [
  {
    "id": 4,
    "title": "Computer Architecture and Organization",
    "code": "ACtE04",
    "topics": [
      {
        "id": 1,
        "title": "Computer Organization and CPU Design",
        "description": "Von Neumann architecture, CPU components (ALU, Control Unit, Registers), instruction cycle (Fetch, Decode, Execute), RISC vs CISC architecture, instruction format, register transfer language (RTL), hardwired vs micro-programmed control.",
        "videos": [
          {
            "title": "Computer Organization and Architecture - Full Course",
            "url": "https://www.youtube.com/playlist?list=PLxCzCOWd7aiHMonh3G6QNKq53C6oNXGrX"
          }
        ],
        "externalLinks": [
          {
            "title": "Computer Organization - GeeksforGeeks",
            "url": "https://www.geeksforgeeks.org/computer-organization-and-architecture-tutorials/"
          },
          {
            "title": "RISC vs CISC Architecture",
            "url": "https://www.tutorialspoint.com/computer_logical_organisation/cisc_and_risc.htm"
          }
        ],
        "mcqs": [
          {
            "question": "Von Neumann architecture is characterized by:",
            "options": ["Separate memory for instructions and data", "Shared memory for both programs and data", "Multiple processors", "Parallel instruction execution"],
            "correctAnswer": "Shared memory for both programs and data",
            "explanation": "Von Neumann architecture uses a single shared memory for both instructions and data, accessed via a common bus."
          },
          {
            "question": "The correct order in the instruction cycle is:",
            "options": ["Execute → Fetch → Decode", "Fetch → Execute → Decode", "Decode → Fetch → Execute", "Fetch → Decode → Execute"],
            "correctAnswer": "Fetch → Decode → Execute",
            "explanation": "The instruction cycle consists of: (1) Fetch instruction from memory, (2) Decode the instruction, (3) Execute the operation."
          },
          {
            "question": "RISC architectures differ from CISC mainly by:",
            "options": ["Having more complex instructions", "Requiring fewer clock cycles per instruction", "Using variable-length instructions", "Having fewer registers"],
            "correctAnswer": "Requiring fewer clock cycles per instruction",
            "explanation": "RISC uses simpler, fixed-length instructions that execute in one clock cycle on average, while CISC has complex, variable-length instructions."
          },
          {
            "question": "Which register holds the address of the next instruction?",
            "options": ["Accumulator", "Program Counter (PC)", "Instruction Register (IR)", "Stack Pointer (SP)"],
            "correctAnswer": "Program Counter (PC)",
            "explanation": "The Program Counter (PC) always holds the memory address of the next instruction to be fetched."
          },
          {
            "question": "Register Transfer Language (RTL) is used to:",
            "options": ["Program in assembly language", "Describe data transfer between registers", "Design network protocols", "Optimize compilers"],
            "correctAnswer": "Describe data transfer between registers",
            "explanation": "RTL is a formal notation to describe micro-operations and data flow between CPU registers."
          },
          {
            "question": "A hardwired control unit is:",
            "options": ["Slower but more flexible", "Faster but less flexible", "Uses firmware", "Cannot support complex instructions"],
            "correctAnswer": "Faster but less flexible",
            "explanation": "Hardwired control is implemented in logic gates (hardware), making it fast but requiring hardware changes for modifications."
          },
          {
            "question": "The Memory Address Register (MAR) stores:",
            "options": ["Data to be written or read", "Address of memory location being accessed", "Current instruction", "ALU operation result"],
            "correctAnswer": "Address of memory location being accessed",
            "explanation": "The MAR holds the memory address of the data or instruction being fetched or stored."
          },
          {
            "question": "Harvard architecture advantage over Von Neumann is:",
            "options": ["Lower cost", "Simultaneous instruction and data access", "Simpler design", "Less memory usage"],
            "correctAnswer": "Simultaneous instruction and data access",
            "explanation": "Harvard architecture uses separate buses for instructions and data, allowing simultaneous access."
          },
          {
            "question": "In zero-address instruction format, operands are from:",
            "options": ["General purpose registers", "A stack", "Memory using direct addressing", "An accumulator"],
            "correctAnswer": "A stack",
            "explanation": "Zero-address instructions get operands implicitly from a stack. This is used in stack-based processors."
          },
          {
            "question": "The Instruction Register (IR) holds:",
            "options": ["Next instruction address", "Current instruction being decoded", "Memory data", "CPU status"],
            "correctAnswer": "Current instruction being decoded",
            "explanation": "After fetching, the instruction is stored in IR for decoding and execution."
          }
        ]
      },
      {
        "id": 2,
        "title": "Memory Organization and Hierarchy",
        "description": "Memory hierarchy (registers, cache, RAM, secondary storage), cache memory types (L1, L2, L3), cache mapping (direct, associative, set-associative), cache replacement policies (LRU, FIFO), virtual memory, paging and segmentation, TLB (Translation Lookaside Buffer).",
        "videos": [
          {
            "title": "Memory Hierarchy and Cache - Computer Organization",
            "url": "https://www.youtube.com/watch?v=vjK8-OObMgc"
          }
        ],
        "externalLinks": [
          {
            "title": "Cache Memory - GeeksforGeeks",
            "url": "https://www.geeksforgeeks.org/cache-memory-in-computer-organization/"
          },
          {
            "title": "Virtual Memory - Tutorialspoint",
            "url": "https://www.tutorialspoint.com/operating_system/os_virtual_memory.htm"
          }
        ],
        "mcqs": [
          {
            "question": "Memory hierarchy from fastest to slowest is:",
            "options": ["Cache → RAM → Registers → Disk", "Registers → Cache → RAM → Disk", "RAM → Cache → Registers → Disk", "Disk → RAM → Cache → Registers"],
            "correctAnswer": "Registers → Cache → RAM → Disk",
            "explanation": "Registers are fastest and closest to CPU, followed by Cache (L1, L2, L3), RAM, then secondary storage (disk)."
          },
          {
            "question": "In direct-mapped cache, a memory block can be placed:",
            "options": ["In any cache line", "Only in one specific cache line", "In a set of cache lines", "In any line of the same set"],
            "correctAnswer": "Only in one specific cache line",
            "explanation": "Direct-mapped cache maps each memory block to exactly one cache line using formula: Cache Line = Block Number mod Number of Lines."
          },
          {
            "question": "LRU cache replacement policy replaces:",
            "options": ["The oldest block", "Least frequently used block", "Least recently used block", "Random block"],
            "correctAnswer": "Least recently used block",
            "explanation": "LRU (Least Recently Used) replaces the cache block that was accessed least recently."
          },
          {
            "question": "Translation Lookaside Buffer (TLB) is used to:",
            "options": ["Store disk blocks", "Speed up virtual-to-physical address translation", "Buffer I/O data", "Store process control blocks"],
            "correctAnswer": "Speed up virtual-to-physical address translation",
            "explanation": "TLB is a fast hardware cache storing recent virtual-to-physical page translations, reducing page table lookups."
          },
          {
            "question": "Internal fragmentation in paging occurs when:",
            "options": ["Pages are variable size", "Last page is not fully utilized", "Pages cannot fit in memory", "Too many processes share a page"],
            "correctAnswer": "Last page is not fully utilized",
            "explanation": "Internal fragmentation occurs when a process's last page is not completely filled with data."
          },
          {
            "question": "Segmentation differs from paging by using:",
            "options": ["Fixed-size units", "Variable-size logical units", "Same-size blocks", "Random-size pages"],
            "correctAnswer": "Variable-size logical units",
            "explanation": "Segmentation divides memory into variable-size segments corresponding to logical program units (code, data, stack)."
          },
          {
            "question": "Hit ratio in cache is:",
            "options": ["Cache size to memory size ratio", "Successful cache accesses to total memory accesses", "Cache misses per second", "Main memory to disk accesses ratio"],
            "correctAnswer": "Successful cache accesses to total memory accesses",
            "explanation": "Hit ratio = (Number of hits) / (Total memory accesses). Higher ratio means better cache effectiveness."
          },
          {
            "question": "In k-way set-associative cache, a block can be placed:",
            "options": ["In any cache line", "One specific cache line", "Any of k lines in a specific set", "Any line of any set"],
            "correctAnswer": "Any of k lines in a specific set",
            "explanation": "k-way set-associative maps blocks to specific sets but allows placement in any of k lines within that set."
          },
          {
            "question": "Principle of locality of reference includes:",
            "options": ["Programs access all memory equally", "Programs reuse recent data and access nearby locations", "Programs access memory randomly", "Programs access same location always"],
            "correctAnswer": "Programs reuse recent data and access nearby locations",
            "explanation": "Locality has temporal (recent reuse) and spatial (nearby access) components, which caches exploit."
          },
          {
            "question": "Memory interleaving is used to:",
            "options": ["Reduce cache misses", "Allow simultaneous access to memory banks", "Increase virtual memory", "Reduce TLB misses"],
            "correctAnswer": "Allow simultaneous access to memory banks",
            "explanation": "Memory interleaving divides memory into banks allowing simultaneous or quick successive access, increasing bandwidth."
          }
        ]
      },
      {
        "id": 3,
        "title": "I/O Organization and Interfacing",
        "description": "I/O techniques (programmed I/O, interrupt-driven I/O, DMA), I/O interfaces (serial, parallel, USB, PCI), peripheral devices, handshaking and synchronization, memory-mapped vs I/O-mapped addressing, I/O controllers, buses (ISA, PCI, SCSI).",
        "videos": [
          {
            "title": "I/O Organization in Computer Architecture",
            "url": "https://www.youtube.com/watch?v=F-h_IvF1KDc"
          }
        ],
        "externalLinks": [
          {
            "title": "I/O Organization - GeeksforGeeks",
            "url": "https://www.geeksforgeeks.org/input-output-organization-in-computer-architecture/"
          },
          {
            "title": "DMA Controller - Tutorialspoint",
            "url": "https://www.tutorialspoint.com/what-is-direct-memory-access-dma"
          }
        ],
        "mcqs": [
          {
            "question": "In programmed I/O (polling), the CPU:",
            "options": ["Continuously checks device status", "Receives interrupt when I/O complete", "Delegates I/O to controller", "Transfers data via DMA"],
            "correctAnswer": "Continuously checks device status",
            "explanation": "In polling, CPU repeatedly checks the status register of I/O device to see if ready. Simple but wastes CPU cycles."
          },
          {
            "question": "DMA is preferred over programmed I/O because:",
            "options": ["Simpler to implement", "Allows large transfers without CPU intervention", "Requires no hardware controller", "More accurate"],
            "correctAnswer": "Allows large transfers without CPU intervention",
            "explanation": "DMA transfers data directly between I/O device and memory without continuous CPU involvement."
          },
          {
            "question": "In interrupt-driven I/O, the CPU:",
            "options": ["Polls device repeatedly", "Uses DMA controller", "Is interrupted by device when ready", "Does not participate"],
            "correctAnswer": "Is interrupted by device when ready",
            "explanation": "Device sends interrupt signal when data is ready, allowing CPU to do other tasks instead of polling."
          },
          {
            "question": "Memory-mapped I/O accesses devices using:",
            "options": ["Device-specific address space", "Same address space as memory", "Separate I/O instructions", "Stack memory"],
            "correctAnswer": "Same address space as memory",
            "explanation": "Memory-mapped I/O treats devices as memory locations, using regular memory instructions (LOAD/STORE)."
          },
          {
            "question": "Which bus carries actual data being transferred?",
            "options": ["Address Bus", "Control Bus", "Data Bus", "System Bus"],
            "correctAnswer": "Data Bus",
            "explanation": "Data Bus carries the actual data. Address Bus carries addresses; Control Bus carries control signals."
          },
          {
            "question": "USB is characterized by:",
            "options": ["High-speed parallel transfer", "Hot-pluggable serial interface with multiple devices", "Display-only connection", "Keyboard and mouse only"],
            "correctAnswer": "Hot-pluggable serial interface with multiple devices",
            "explanation": "USB is hot-pluggable, supports up to 127 devices per controller via hubs."
          },
          {
            "question": "In DMA, cycle stealing means:",
            "options": ["CPU steals from DMA", "DMA temporarily takes memory bus control", "Interrupt is stolen", "Cache bypass"],
            "correctAnswer": "DMA temporarily takes memory bus control",
            "explanation": "DMA controller temporarily takes control of memory bus to transfer data; CPU is briefly paused."
          },
          {
            "question": "Handshaking in I/O communication refers to:",
            "options": ["Parallel data transfer", "Sender and receiver exchange status signals", "Network communication standard", "CPU-to-CPU communication"],
            "correctAnswer": "Sender and receiver exchange status signals",
            "explanation": "Handshaking synchronizes data transfer between devices operating at different speeds using status signals."
          },
          {
            "question": "PCI (Peripheral Component Interconnect) is:",
            "options": ["Serial bus for external peripherals", "High-speed parallel internal bus for peripherals", "Wireless interface", "Disk drive interface only"],
            "correctAnswer": "High-speed parallel internal bus for peripherals",
            "explanation": "PCI is a standard for connecting expansion cards (network, graphics, sound cards) internally."
          },
          {
            "question": "Which I/O technique achieves highest data transfer rate?",
            "options": ["Programmed I/O", "Interrupt-driven I/O", "Direct Memory Access (DMA)", "Memory-mapped I/O"],
            "correctAnswer": "Direct Memory Access (DMA)",
            "explanation": "DMA achieves highest rate because data moves directly between device and memory without CPU intervention per word."
          }
        ]
      },
      {
        "id": 4,
        "title": "Pipelining and Parallel Processing",
        "description": "Instruction pipelining stages, pipeline hazards (structural, data, control), hazard resolution (forwarding, stalling, branch prediction), instruction-level parallelism, superscalar architecture, VLIW (Very Long Instruction Word), Flynn's taxonomy (SISD, SIMD, MISD, MIMD), vector processing, multiprocessing.",
        "videos": [
          {
            "title": "Pipelining in Computer Architecture",
            "url": "https://www.youtube.com/watch?v=eVRdfl4zxfI"
          }
        ],
        "externalLinks": [
          {
            "title": "Instruction Pipelining - GeeksforGeeks",
            "url": "https://www.geeksforgeeks.org/computer-organization-and-architecture-pipelining-set-1-execution-stages-and-throughput/"
          },
          {
            "title": "Flynn's Taxonomy - Tutorialspoint",
            "url": "https://www.tutorialspoint.com/parallel_computer_architecture/parallel_computer_architecture_models.htm"
          }
        ],
        "mcqs": [
          {
            "question": "A data hazard occurs when:",
            "options": ["Two instructions need same functional unit", "Instruction needs result not yet produced", "Branch instruction changes program flow", "Pipeline is flushed"],
            "correctAnswer": "Instruction needs result not yet produced",
            "explanation": "Data hazard (RAW - Read After Write) occurs when instruction needs data not yet written by previous instruction."
          },
          {
            "question": "Data forwarding resolves:",
            "options": ["Control hazards", "Structural hazards", "Data hazards (RAW)", "Cache misses"],
            "correctAnswer": "Data hazards (RAW)",
            "explanation": "Forwarding routes ALU output directly to later stages, avoiding pipeline stalls for data dependencies."
          },
          {
            "question": "Control hazard is caused by:",
            "options": ["Instruction writing to same register", "Resource conflicts", "Branch/jump instructions disrupting flow", "Cache misses"],
            "correctAnswer": "Branch/jump instructions disrupting flow",
            "explanation": "Branch instructions cause control hazards because processor doesn't know next instruction until branch resolves."
          },
          {
            "question": "Flynn's taxonomy classifies SIMD as:",
            "options": ["Single instruction, single data", "Single instruction, multiple data", "Multiple instruction, single data", "Multiple instruction, multiple data"],
            "correctAnswer": "Single instruction, multiple data",
            "explanation": "SIMD executes same instruction on multiple data elements simultaneously (vector processors, GPU cores)."
          },
          {
            "question": "An ideal n-stage pipeline speedup for many instructions approaches:",
            "options": ["n (pipeline stages)", "k (number of instructions)", "n × k", "1"],
            "correctAnswer": "n (pipeline stages)",
            "explanation": "With full pipeline and many instructions, speedup approximately equals number of pipeline stages."
          },
          {
            "question": "Structural hazard occurs when:",
            "options": ["Instruction needs previous result", "Branch changes program flow", "Two instructions need same hardware resource", "Cache miss occurs"],
            "correctAnswer": "Two instructions need same hardware resource",
            "explanation": "Resource conflict (structural hazard) happens when hardware cannot support all simultaneous instruction combinations."
          },
          {
            "question": "Branch prediction is used to:",
            "options": ["Eliminate data hazards", "Speculatively execute before branch resolves", "Double pipeline throughput", "Handle cache misses"],
            "correctAnswer": "Speculatively execute before branch resolves",
            "explanation": "Processor guesses branch direction and begins fetching/executing from predicted path, reducing control hazard stalls."
          },
          {
            "question": "Superscalar processor differs from scalar pipeline by:",
            "options": ["Longer pipeline", "Can issue multiple instructions per clock cycle", "Uses VLIW instructions", "Executes only SIMD"],
            "correctAnswer": "Can issue multiple instructions per clock cycle",
            "explanation": "Superscalar dynamically dispatches multiple independent instructions per clock to multiple execution units."
          },
          {
            "question": "VLIW (Very Long Instruction Word) achieves parallelism by:",
            "options": ["Dynamic hardware scheduling", "Packing multiple operations in single instruction at compile time", "Duplicating pipeline stages", "Out-of-order execution"],
            "correctAnswer": "Packing multiple operations in single instruction at compile time",
            "explanation": "Compiler bundles independent operations into single long word; hardware executes all in parallel."
          },
          {
            "question": "Pipeline stalling (bubbling) involves:",
            "options": ["Branch prediction", "Data forwarding", "Inserting NOPs to delay dependent instruction", "Out-of-order execution"],
            "correctAnswer": "Inserting NOPs to delay dependent instruction",
            "explanation": "Stalling inserts no-operation instructions to delay a dependent instruction until required data is available."
          }
        ]
      }
    ]
  },
  {
    "id": 5,
    "title": "Data Structure and Algorithm",
    "code": "ACtE05",
    "topics": [
      {
        "id": 1,
        "title": "Arrays, Linked Lists, Stacks and Queues",
        "description": "Arrays (1D, 2D, multidimensional), array operations, sparse arrays, linked lists (singly, doubly, circular), linked list operations (insertion, deletion, traversal), stacks (LIFO), stack operations (push, pop, peek), queue (FIFO), queue operations, applications (parenthesis matching, expression evaluation, recursion).",
        "videos": [
          {
            "title": "Data Structures Playlist - Arrays, Lists, Stacks, Queues",
            "url": "https://www.youtube.com/playlist?list=PLBlnK6fPqkYuTcUo0lXRt2KzWp7xqwWqM"
          }
        ],
        "externalLinks": [
          {
            "title": "Linear Data Structures - GeeksforGeeks",
            "url": "https://www.geeksforgeeks.org/data-structures/linear-data-structure/"
          },
          {
            "title": "Stack and Queue - Tutorialspoint",
            "url": "https://www.tutorialspoint.com/data_structures_algorithms/stack_and_queues.htm"
          }
        ],
        "mcqs": [
          {
            "question": "The time complexity of accessing an element in array by index is:",
            "options": ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
            "correctAnswer": "O(1)",
            "explanation": "Array access by index is constant time O(1) because arrays use direct memory addressing."
          },
          {
            "question": "Inserting an element at the beginning of a singly linked list takes:",
            "options": ["O(n)", "O(log n)", "O(1)", "O(n²)"],
            "correctAnswer": "O(1)",
            "explanation": "Insertion at the beginning requires only updating pointers, not traversing the list."
          },
          {
            "question": "A stack follows which principle?",
            "options": ["First In First Out (FIFO)", "Last In First Out (LIFO)", "Random access", "Sorted order"],
            "correctAnswer": "Last In First Out (LIFO)",
            "explanation": "Stack is LIFO: last element added is first removed (like a plate stack)."
          },
          {
            "question": "Which operation has O(n) time complexity in a singly linked list?",
            "options": ["Insert at beginning", "Delete from beginning", "Search for element", "Insert at end (without tail pointer)"],
            "correctAnswer": "Search for element",
            "explanation": "Searching requires traversing from head, which is O(n) in worst case."
          },
          {
            "question": "A queue follows which principle?",
            "options": ["Last In First Out (LIFO)", "First In First Out (FIFO)", "Random access", "Sorted order"],
            "correctAnswer": "First In First Out (FIFO)",
            "explanation": "Queue is FIFO: first element added is first removed (like a line)."
          },
          {
            "question": "In a doubly linked list, inserting after a given node takes:",
            "options": ["O(n)", "O(log n)", "O(1)", "O(n²)"],
            "correctAnswer": "O(1)",
            "explanation": "Insertion after a node requires only updating pointers (forward and backward)."
          },
          {
            "question": "Space complexity of a linked list with n elements is:",
            "options": ["O(1)", "O(log n)", "O(n)", "O(n²)"],
            "correctAnswer": "O(n)",
            "explanation": "Linked list requires O(n) space for n elements (node data + pointers)."
          },
          {
            "question": "Deleting an element at the end of a singly linked list takes:",
            "options": ["O(1)", "O(log n)", "O(n)", "O(n²)"],
            "correctAnswer": "O(n)",
            "explanation": "Deletion at end requires traversing to second-last node to update its pointer."
          },
          {
            "question": "In a circular linked list, which pointer points back to the first node?",
            "options": ["Head pointer", "Tail pointer to head", "Middle node", "Each node"],
            "correctAnswer": "Tail pointer to head",
            "explanation": "In circular linked list, the last node's next pointer points back to first node."
          },
          {
            "question": "Which data structure is used for expression evaluation (infix to postfix)?",
            "options": ["Queue", "Stack", "Tree", "Graph"],
            "correctAnswer": "Stack",
            "explanation": "Stack is used in operator precedence parsing and expression evaluation algorithms."
          }
        ]
      },
      {
        "id": 2,
        "title": "Trees and Binary Search Trees",
        "description": "Tree terminology (root, leaf, height, depth), binary trees, binary search trees (BST), tree traversal (inorder, preorder, postorder, level-order), BST operations (insertion, deletion, search), balanced trees (AVL, Red-Black), tree applications, binary heaps.",
        "videos": [
          {
            "title": "Trees and Binary Search Trees - Complete Tutorial",
            "url": "https://www.youtube.com/playlist?list=PLqM7alHXFySGiZlprW464HWLlrwWaOvAV"
          }
        ],
        "externalLinks": [
          {
            "title": "Binary Search Tree - GeeksforGeeks",
            "url": "https://www.geeksforgeeks.org/binary-search-tree-data-structure/"
          },
          {
            "title": "Tree Traversal Methods - Tutorialspoint",
            "url": "https://www.tutorialspoint.com/data_structures_algorithms/tree_traversal.htm"
          }
        ],
        "mcqs": [
          {
            "question": "The height of a binary tree with n nodes is at minimum:",
            "options": ["n", "log₂(n)", "n/2", "1"],
            "correctAnswer": "log₂(n)",
            "explanation": "Minimum height occurs in a balanced binary tree, which is log₂(n)."
          },
          {
            "question": "In a binary search tree, left subtree contains values:",
            "options": ["Greater than parent", "Less than parent", "Equal to parent", "No specific order"],
            "correctAnswer": "Less than parent",
            "explanation": "BST property: left subtree < parent < right subtree."
          },
          {
            "question": "Inorder traversal of a BST produces:",
            "options": ["Root first", "Sorted ascending order", "Level-by-level", "Random order"],
            "correctAnswer": "Sorted ascending order",
            "explanation": "Inorder traversal (left-root-right) of BST outputs elements in sorted order."
          },
          {
            "question": "Search operation in a balanced BST has complexity:",
            "options": ["O(n)", "O(n²)", "O(log n)", "O(1)"],
            "correctAnswer": "O(log n)",
            "explanation": "In balanced BST, each comparison eliminates half of remaining elements."
          },
          {
            "question": "Deletion of a node with two children in BST involves:",
            "options": ["Direct removal", "Replacing with inorder successor", "Replacing with parent", "Clearing all children"],
            "correctAnswer": "Replacing with inorder successor",
            "explanation": "Node with two children is replaced by its inorder successor (smallest in right subtree)."
          },
          {
            "question": "A balanced AVL tree has height difference between left and right subtrees:",
            "options": ["Can be any value", "Maximum 1", "Maximum 2", "Must be 0"],
            "correctAnswer": "Maximum 1",
            "explanation": "AVL trees maintain balance by keeping height difference ≤ 1."
          },
          {
            "question": "Preorder traversal visits nodes in order:",
            "options": ["Root, left, right", "Left, root, right", "Left, right, root", "Bottom-up"],
            "correctAnswer": "Root, left, right",
            "explanation": "Preorder: root first, then recursively traverse left and right subtrees."
          },
          {
            "question": "Postorder traversal is useful for:",
            "options": ["Getting sorted output", "Deleting tree", "Level-order traversal", "Breadth-first search"],
            "correctAnswer": "Deleting tree",
            "explanation": "Postorder (left, right, root) visits children before parent, safe for deletion."
          },
          {
            "question": "A complete binary tree has all levels filled except:",
            "options": ["Root level", "Last level", "Middle level", "No exceptions"],
            "correctAnswer": "Last level",
            "explanation": "Complete binary tree: all levels filled, last level filled left to right."
          },
          {
            "question": "Level-order traversal is also known as:",
            "options": ["Depth-first", "Breadth-first", "Symmetric traversal", "Reverse traversal"],
            "correctAnswer": "Breadth-first",
            "explanation": "Level-order (breadth-first) visits nodes level by level using a queue."
          }
        ]
      },
      {
        "id": 3,
        "title": "Graphs and Graph Algorithms",
        "description": "Graph representations (adjacency matrix, adjacency list), graph terminology (vertex, edge, path, cycle, connected components), graph traversals (DFS, BFS), shortest path algorithms (Dijkstra, Bellman-Ford), spanning trees (Kruskal, Prim), graph coloring, topological sorting, strongly connected components.",
        "videos": [
          {
            "title": "Graph Algorithms Tutorial - Complete Course",
            "url": "https://www.youtube.com/playlist?list=PLqM7alHXFySEaZJftQ-71DdyhdoL1_BaE"
          }
        ],
        "externalLinks": [
          {
            "title": "Graph Data Structure - GeeksforGeeks",
            "url": "https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/"
          },
          {
            "title": "Dijkstra's Algorithm - Tutorialspoint",
            "url": "https://www.tutorialspoint.com/data_structures_algorithms/dijkstra_algorithm.htm"
          }
        ],
        "mcqs": [
          {
            "question": "Adjacency matrix for n vertices requires space complexity:",
            "options": ["O(n)", "O(n log n)", "O(n²)", "O(n³)"],
            "correctAnswer": "O(n²)",
            "explanation": "Adjacency matrix is n×n array, requiring O(n²) space."
          },
          {
            "question": "Adjacency list for sparse graphs is preferred because:",
            "options": ["Takes less space", "Faster traversal", "Easier implementation", "Symmetric representation"],
            "correctAnswer": "Takes less space",
            "explanation": "Adjacency list uses O(V+E) space, better for sparse graphs than O(V²)."
          },
          {
            "question": "Depth-First Search (DFS) uses which data structure:",
            "options": ["Queue", "Stack", "Deque", "Priority Queue"],
            "correctAnswer": "Stack",
            "explanation": "DFS uses stack (LIFO) for traversal, exploring deeply before backtracking."
          },
          {
            "question": "Breadth-First Search (BFS) uses which data structure:",
            "options": ["Stack", "Queue", "Deque", "Linked List"],
            "correctAnswer": "Queue",
            "explanation": "BFS uses queue (FIFO) for level-by-level traversal."
          },
          {
            "question": "Dijkstra's algorithm finds:",
            "options": ["Longest path", "Shortest path in weighted graph", "All cycles", "Minimum spanning tree"],
            "correctAnswer": "Shortest path in weighted graph",
            "explanation": "Dijkstra finds shortest path from source to all other vertices with non-negative weights."
          },
          {
            "question": "Time complexity of BFS/DFS for connected graph:",
            "options": ["O(V)", "O(E)", "O(V+E)", "O(V²)"],
            "correctAnswer": "O(V+E)",
            "explanation": "Both visit each vertex (V) and edge (E) at most once: O(V+E)."
          },
          {
            "question": "Kruskal's algorithm finds:",
            "options": ["Shortest path", "Minimum spanning tree", "Longest cycle", "Topological order"],
            "correctAnswer": "Minimum spanning tree",
            "explanation": "Kruskal's finds MST by adding edges in ascending weight order without creating cycles."
          },
          {
            "question": "Topological sorting is applicable to:",
            "options": ["Undirected graphs", "Directed acyclic graphs (DAG)", "Cyclic graphs", "Complete graphs"],
            "correctAnswer": "Directed acyclic graphs (DAG)",
            "explanation": "Topological sort requires no cycles; output represents dependency order."
          },
          {
            "question": "A graph is connected if:",
            "options": ["It has a cycle", "There's a path between every pair of vertices", "It's a tree", "All vertices have same degree"],
            "correctAnswer": "There's a path between every pair of vertices",
            "explanation": "Connected graph has path between every two vertices."
          },
          {
            "question": "Graph coloring is used for:",
            "options": ["Finding shortest path", "Register allocation and scheduling problems", "Spanning trees", "Topological sort"],
            "correctAnswer": "Register allocation and scheduling problems",
            "explanation": "Coloring assigns colors to vertices so adjacent vertices have different colors (compiler optimization)."
          }
        ]
      },
      {
        "id": 4,
        "title": "Sorting and Searching Algorithms",
        "description": "Sorting algorithms (bubble sort, selection sort, insertion sort, merge sort, quick sort, heap sort, counting sort, radix sort), sorting analysis and stability, searching algorithms (linear search, binary search), comparison-based vs non-comparison sorting, algorithm efficiency and comparison.",
        "videos": [
          {
            "title": "Sorting Algorithms Visualized - Complete Tutorial",
            "url": "https://www.youtube.com/playlist?list=PL_z_8CaSLv_mqsBsF7g33HDNGuVesSMmO"
          }
        ],
        "externalLinks": [
          {
            "title": "Sorting Algorithms - GeeksforGeeks",
            "url": "https://www.geeksforgeeks.org/sorting-algorithms/"
          },
          {
            "title": "Binary Search - Tutorialspoint",
            "url": "https://www.tutorialspoint.com/data_structures_algorithms/binary_search.htm"
          }
        ],
        "mcqs": [
          {
            "question": "Bubble sort has average and worst-case time complexity:",
            "options": ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
            "correctAnswer": "O(n²)",
            "explanation": "Bubble sort compares adjacent elements, worst case is O(n²) with n passes."
          },
          {
            "question": "Merge sort has time complexity:",
            "options": ["O(n)", "O(n²)", "O(n log n)", "O(2ⁿ)"],
            "correctAnswer": "O(n log n)",
            "explanation": "Merge sort divides (log n levels) and merges (n operations), total O(n log n)."
          },
          {
            "question": "Quick sort's worst-case time complexity is:",
            "options": ["O(n)", "O(n log n)", "O(n²)", "O(n³)"],
            "correctAnswer": "O(n²)",
            "explanation": "Worst case occurs when pivot is always smallest/largest element (unbalanced partition)."
          },
          {
            "question": "Binary search requires input to be:",
            "options": ["Linked list", "Sorted array", "Unsorted", "Tree structure"],
            "correctAnswer": "Sorted array",
            "explanation": "Binary search requires sorted input to eliminate half of remaining elements each iteration."
          },
          {
            "question": "Binary search time complexity is:",
            "options": ["O(n)", "O(log n)", "O(n²)", "O(n log n)"],
            "correctAnswer": "O(log n)",
            "explanation": "Each comparison eliminates half remaining elements: O(log n)."
          },
          {
            "question": "Heap sort has time complexity:",
            "options": ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
            "correctAnswer": "O(n log n)",
            "explanation": "Building heap O(n) + n extractions O(n log n) = O(n log n)."
          },
          {
            "question": "A stable sort means:",
            "options": ["It never crashes", "Equal elements maintain relative order", "It sorts in ascending order", "It uses O(1) space"],
            "correctAnswer": "Equal elements maintain relative order",
            "explanation": "Stable sort preserves relative order of equal elements."
          },
          {
            "question": "Counting sort is efficient for:",
            "options": ["Large range of integers", "Small range of integers", "Floating point numbers", "Strings"],
            "correctAnswer": "Small range of integers",
            "explanation": "Counting sort time O(n+k) where k is range; efficient when k is small."
          },
          {
            "question": "Space complexity of merge sort is:",
            "options": ["O(1)", "O(n)", "O(n log n)", "O(n²)"],
            "correctAnswer": "O(n)",
            "explanation": "Merge sort requires O(n) temporary space for merging."
          },
          {
            "question": "Quick sort's average-case time complexity is:",
            "options": ["O(n)", "O(n²)", "O(n log n)", "O(log n)"],
            "correctAnswer": "O(n log n)",
            "explanation": "Average case with good pivot selection gives O(n log n)."
          }
        ]
      }
    ]
  },
  {
    "id": 6,
    "title": "Operating System",
    "code": "ACtE06",
    "topics": [
      {
        "id": 1,
        "title": "Process Management and CPU Scheduling",
        "description": "Process concept, process states, process control block (PCB), context switching, process creation and termination, process scheduling algorithms (FCFS, SJF, Priority, Round Robin, Multilevel Queue), CPU utilization, throughput, turnaround time, waiting time, response time.",
        "videos": [
          {
            "title": "Operating System - Processes and Scheduling",
            "url": "https://www.youtube.com/playlist?list=PLBlnK6fPqkYvLVmTa43V-Y3V4S8gLPr1E"
          }
        ],
        "externalLinks": [
          {
            "title": "Process Scheduling - GeeksforGeeks",
            "url": "https://www.geeksforgeeks.org/cpu-scheduling-in-operating-systems/"
          },
          {
            "title": "CPU Scheduling Algorithms - Tutorialspoint",
            "url": "https://www.tutorialspoint.com/operating_system/os_process_scheduling.htm"
          }
        ],
        "mcqs": [
          {
            "question": "A process is primarily identified by:",
            "options": ["Process name", "Process ID (PID)", "Memory address", "Priority number"],
            "correctAnswer": "Process ID (PID)",
            "explanation": "Process ID uniquely identifies a process in the system."
          },
          {
            "question": "Process states include all except:",
            "options": ["New", "Running", "Waiting", "Deleted"],
            "correctAnswer": "Deleted",
            "explanation": "Standard process states are: New, Ready, Running, Waiting, Terminated."
          },
          {
            "question": "Context switching involves:",
            "options": ["Changing process priority", "Saving current process state and loading another", "Deallocating memory", "Closing files"],
            "correctAnswer": "Saving current process state and loading another",
            "explanation": "Context switch saves CPU context and state of current process, then loads another."
          },
          {
            "question": "FCFS (First Come First Served) scheduling has:",
            "options": ["Low average waiting time", "High context switches", "Convoy effect in some cases", "No starvation"],
            "correctAnswer": "Convoy effect in some cases",
            "explanation": "FCFS can cause convoy effect when long process blocks short processes."
          },
          {
            "question": "Shortest Job First (SJF) scheduling minimizes:",
            "options": ["Response time", "Average waiting time", "CPU utilization", "Context switches"],
            "correctAnswer": "Average waiting time",
            "explanation": "SJF selects shortest burst time job, minimizing average waiting time."
          },
          {
            "question": "Round Robin scheduling uses:",
            "options": ["Priority levels", "Time quantum", "Longest job first", "FCFS order only"],
            "correctAnswer": "Time quantum",
            "explanation": "RR allocates fixed time slice (quantum) to each process, fairly distributing CPU."
          },
          {
            "question": "Priority scheduling can cause:",
            "options": ["Increased throughput", "Starvation of low-priority processes", "Better response time", "More efficient memory use"],
            "correctAnswer": "Starvation of low-priority processes",
            "explanation": "Low-priority processes may never execute if high-priority jobs keep arriving."
          },
          {
            "question": "Turnaround time is defined as:",
            "options": ["Time waiting in queue", "Total time from submission to completion", "CPU execution time", "I/O time"],
            "correctAnswer": "Total time from submission to completion",
            "explanation": "Turnaround time = Completion time - Arrival time."
          },
          {
            "question": "Multilevel Queue scheduling assigns:",
            "options": ["All processes to one queue", "Processes to separate queues by priority", "Time quantum to each process", "Memory blocks"],
            "correctAnswer": "Processes to separate queues by priority",
            "explanation": "Multilevel queues assign processes to different priority queues."
          },
          {
            "question": "Preemptive scheduling means:",
            "options": ["Process runs to completion", "OS can take CPU from running process", "No context switching", "Processes are prioritized at start only"],
            "correctAnswer": "OS can take CPU from running process",
            "explanation": "Preemptive allows OS to interrupt running process to run higher priority task."
          }
        ]
      },
      {
        "id": 2,
        "title": "Memory Management and Virtual Memory",
        "description": "Memory hierarchy, partitioning (fixed, dynamic), fragmentation (internal, external), compaction, paging and segmentation, page replacement algorithms (FIFO, LRU, Optimal), thrashing, working set, page faults, demand paging, virtual memory, memory protection, memory allocation strategies.",
        "videos": [
          {
            "title": "Memory Management in Operating Systems",
            "url": "https://www.youtube.com/playlist?list=PLBlnK6fPqkYu2cVYMOCxFvVe1b3TI7FZv"
          }
        ],
        "externalLinks": [
          {
            "title": "Memory Management - GeeksforGeeks",
            "url": "https://www.geeksforgeeks.org/memory-management-in-operating-system/"
          },
          {
            "title": "Virtual Memory - Tutorialspoint",
            "url": "https://www.tutorialspoint.com/operating_system/os_virtual_memory.htm"
          }
        ],
        "mcqs": [
          {
            "question": "External fragmentation occurs in:",
            "options": ["Paging", "Segmentation", "Fixed partitioning", "Virtual memory"],
            "correctAnswer": "Segmentation",
            "explanation": "Segmentation causes external fragmentation due to variable-size segments."
          },
          {
            "question": "Internal fragmentation occurs in:",
            "options": ["Segmentation", "Paging", "Dynamic partitioning", "Swapping"],
            "correctAnswer": "Paging",
            "explanation": "Paging causes internal fragmentation when last page isn't fully used."
          },
          {
            "question": "Optimal page replacement algorithm requires:",
            "options": ["Knowledge of future page requests", "LRU tracking", "FIFO order", "Page frequency"],
            "correctAnswer": "Knowledge of future page requests",
            "explanation": "Optimal algorithm replaces page not used for longest time in future."
          },
          {
            "question": "LRU (Least Recently Used) page replacement:",
            "options": ["Removes oldest page", "Removes least recently used page", "Is impossible to implement", "Requires future knowledge"],
            "correctAnswer": "Removes least recently used page",
            "explanation": "LRU removes page accessed least recently, approximating optimal algorithm."
          },
          {
            "question": "Thrashing occurs when:",
            "options": ["CPU is fully utilized", "Process constantly pages in and out", "Memory is empty", "All processes are ready"],
            "correctAnswer": "Process constantly pages in and out",
            "explanation": "Thrashing: CPU spends more time on page I/O than actual process execution."
          },
          {
            "question": "Demand paging means:",
            "options": ["All pages loaded at startup", "Pages loaded only when needed", "Fixed number of pages", "Random page loading"],
            "correctAnswer": "Pages loaded only when needed",
            "explanation": "Demand paging loads pages on demand (when page fault occurs)."
          },
          {
            "question": "Working set of a process is:",
            "options": ["All pages ever used", "Set of pages currently in memory", "Set of pages actively used", "Virtual memory size"],
            "correctAnswer": "Set of pages actively used",
            "explanation": "Working set contains pages process frequently accesses within time window."
          },
          {
            "question": "Page fault occurs when:",
            "options": ["Page is corrupted", "Requested page not in physical memory", "Memory is full", "CPU cache miss"],
            "correctAnswer": "Requested page not in physical memory",
            "explanation": "Page fault: CPU requests page not in memory; OS must fetch from disk."
          },
          {
            "question": "Memory protection is achieved through:",
            "options": ["File permissions", "Base and limit registers", "User account", "Disk encryption"],
            "correctAnswer": "Base and limit registers",
            "explanation": "Base register = start address, Limit register = size; prevents illegal memory access."
          },
          {
            "question": "First-Fit memory allocation strategy:",
            "options": ["Allocates smallest possible hole", "Allocates first hole that fits", "Searches entire memory", "Allocates at best location"],
            "correctAnswer": "Allocates first hole that fits",
            "explanation": "First-Fit finds first hole large enough for process; faster than Best-Fit."
          }
        ]
      },
      {
        "id": 3,
        "title": "File System and Disk Scheduling",
        "description": "File concept, file types, file organization (sequential, indexed, hashed), file operations (create, read, write, delete), directory structures (single level, two level, tree, graph), file allocation methods (contiguous, linked, indexed), free space management (bitmap, linked list), disk scheduling algorithms (FCFS, SSTF, SCAN, C-SCAN, LOOK, C-LOOK).",
        "videos": [
          {
            "title": "File Systems and Disk Scheduling",
            "url": "https://www.youtube.com/playlist?list=PLBlnK6fPqkYvyXL2Hc_PB1KBrDgVLtqB5"
          }
        ],
        "externalLinks": [
          {
            "title": "File System - GeeksforGeeks",
            "url": "https://www.geeksforgeeks.org/file-systems/"
          },
          {
            "title": "Disk Scheduling - Tutorialspoint",
            "url": "https://www.tutorialspoint.com/operating_system/os_disk_scheduling.htm"
          }
        ],
        "mcqs": [
          {
            "question": "Contiguous file allocation is efficient for:",
            "options": ["Sequential access", "Random access", "Large files", "Small files"],
            "correctAnswer": "Sequential access",
            "explanation": "Contiguous allocation places file in consecutive disk blocks; efficient for sequential access."
          },
          {
            "question": "Linked file allocation external fragmentation is:",
            "options": ["Eliminated", "Increased", "Unchanged", "Minimized"],
            "correctAnswer": "Eliminated",
            "explanation": "Linked allocation uses any free blocks, eliminating external fragmentation."
          },
          {
            "question": "Indexed file allocation uses:",
            "options": ["Single block for all data", "Index blocks pointing to data", "Linked pointers", "Direct disk addressing"],
            "correctAnswer": "Index blocks pointing to data",
            "explanation": "Index allocation maintains index of all block pointers for efficient random access."
          },
          {
            "question": "Disk scheduling algorithm SCAN works like:",
            "options": ["FCFS order", "Elevator: moves in one direction serving requests", "Shortest seek time", "Random order"],
            "correctAnswer": "Elevator: moves in one direction serving requests",
            "explanation": "SCAN (Elevator) moves disk head in one direction, servicing requests until end, then reverses."
          },
          {
            "question": "SSTF (Shortest Seek Time First) minimizes:",
            "options": ["Head movement distance", "I/O time", "Memory usage", "Queue length"],
            "correctAnswer": "Head movement distance",
            "explanation": "SSTF services request closest to current head position next."
          },
          {
            "question": "C-SCAN differs from SCAN by:",
            "options": ["Serves from current position", "Returns to start after reaching end", "Uses same algorithm", "Processes requests in reverse"],
            "correctAnswer": "Returns to start after reaching end",
            "explanation": "C-SCAN (Circular SCAN) returns to beginning after reaching end; more uniform wait time."
          },
          {
            "question": "File permission in Unix includes:",
            "options": ["File type only", "Read, Write, Execute for owner/group/others", "Disk location", "Creation time"],
            "correctAnswer": "Read, Write, Execute for owner/group/others",
            "explanation": "Unix 3x3 permissions: read, write, execute for owner, group, others."
          },
          {
            "question": "Inode in Unix file system stores:",
            "options": ["File data", "File metadata (permissions, pointers, size)", "Directory entries", "Disk block map"],
            "correctAnswer": "File metadata (permissions, pointers, size)",
            "explanation": "Inode contains file attributes and direct/indirect pointers to data blocks."
          },
          {
            "question": "Directory structure in single-level system has:",
            "options": ["Hierarchical organization", "All files in single directory", "Tree structure", "Graph structure"],
            "correctAnswer": "All files in single directory",
            "explanation": "Single-level directory: one global directory containing all files."
          },
          {
            "question": "FAT (File Allocation Table) is used in:",
            "options": ["Unix systems", "Windows/DOS systems", "Linux systems", "MacOS only"],
            "correctAnswer": "Windows/DOS systems",
            "explanation": "FAT is simple file system used in Windows/DOS; tracks file block chain."
          }
        ]
      },
      {
        "id": 4,
        "title": "Deadlocks and Synchronization",
        "description": "Deadlock definition, necessary and sufficient conditions for deadlock, deadlock prevention, avoidance (Banker's algorithm), detection and recovery, resource allocation graph, synchronization primitives (mutex, semaphore, monitor), critical section, race conditions, mutual exclusion, producer-consumer problem, readers-writers problem.",
        "videos": [
          {
            "title": "Deadlocks and Synchronization in OS",
            "url": "https://www.youtube.com/playlist?list=PLBlnK6fPqkYvlH-AkJ1HiDUNvKqmPEeOO"
          }
        ],
        "externalLinks": [
          {
            "title": "Deadlock in Operating System - GeeksforGeeks",
            "url": "https://www.geeksforgeeks.org/deadlock-in-operating-system/"
          },
          {
            "title": "Synchronization Primitives - Tutorialspoint",
            "url": "https://www.tutorialspoint.com/operating_system/os_synchronization.htm"
          }
        ],
        "mcqs": [
          {
            "question": "Deadlock requires all of the following EXCEPT:",
            "options": ["Mutual exclusion", "Hold and wait", "No preemption", "Synchronization"],
            "correctAnswer": "Synchronization",
            "explanation": "Necessary conditions: mutual exclusion, hold-and-wait, no preemption, circular wait."
          },
          {
            "question": "Circular wait in deadlock means:",
            "options": ["Waiting is circular", "Processes waiting for resources held by others in cycle", "Waiting in loop", "Multiple processes waiting"],
            "correctAnswer": "Processes waiting for resources held by others in cycle",
            "explanation": "Circular wait: P1 waits for R1 (held by P2), P2 waits for R2 (held by P1), etc."
          },
          {
            "question": "Deadlock prevention eliminates one of necessary conditions by:",
            "options": ["Breaking mutual exclusion", "Allowing preemption", "All of above", "Preventing I/O"],
            "correctAnswer": "All of above",
            "explanation": "Prevention: deny mutual exclusion (not always), allow preemption, or prevent hold-and-wait."
          },
          {
            "question": "Banker's algorithm is used for:",
            "options": ["Deadlock prevention", "Deadlock avoidance", "Deadlock detection", "Deadlock recovery"],
            "correctAnswer": "Deadlock avoidance",
            "explanation": "Banker's algorithm safely allocates resources while avoiding deadlock states."
          },
          {
            "question": "Race condition occurs when:",
            "options": ["Multiple threads share resource without synchronization", "Threads race to acquire locks", "Thread creation is fast", "Context switching occurs"],
            "correctAnswer": "Multiple threads share resource without synchronization",
            "explanation": "Race condition: uncontrolled concurrent access to shared data causes unpredictable results."
          },
          {
            "question": "Mutual exclusion ensures:",
            "options": ["Only one process at a time in critical section", "All processes enter critical section", "Resources are shared equally", "No synchronization needed"],
            "correctAnswer": "Only one process at a time in critical section",
            "explanation": "Mutual exclusion prevents simultaneous access to shared resources."
          },
          {
            "question": "Semaphore with value 0 means:",
            "options": ["Resource available", "Resource unavailable", "No processes waiting", "Infinite processes"],
            "correctAnswer": "Resource unavailable",
            "explanation": "Semaphore value 0 indicates resource is unavailable; processes must wait."
          },
          {
            "question": "Monitor is a synchronization construct that includes:",
            "options": ["Only mutex", "Procedures and shared data with mutual exclusion", "Only condition variables", "Only locks"],
            "correctAnswer": "Procedures and shared data with mutual exclusion",
            "explanation": "Monitor encapsulates data + procedures with built-in mutual exclusion."
          },
          {
            "question": "Producer-Consumer problem is solved by:",
            "options": ["Ignoring synchronization", "Using semaphores for buffer synchronization", "No solution possible", "Removing consumers"],
            "correctAnswer": "Using semaphores for buffer synchronization",
            "explanation": "Producer and Consumer use semaphores to synchronize buffer access."
          },
          {
            "question": "Readers-Writers problem fair solution requires:",
            "options": ["Only readers enter first", "Readers and writers take turns", "Priority to shorter operations", "Writer exclusivity respected"],
            "correctAnswer": "Writer exclusivity respected",
            "explanation": "Fair solution ensures readers and writers both get access, with writer exclusivity."
          }
        ]
      }
    ]
  },
  {
    "id": 7,
    "title": "Database Management System",
    "code": "ACtE07",
    "topics": [
      {
        "id": 1,
        "title": "ER Model and Relational Data Model",
        "description": "Entity-Relationship (ER) model, entities, attributes, relationships, cardinality, mapping, ER diagram, relational model concepts (relations, tuples, attributes, domain, keys), relational constraints (primary key, foreign key, unique, not null), relational algebra operations (select, project, join, union, difference, intersection).",
        "videos": [
          {
            "title": "Database Design - ER Model and Relational Model",
            "url": "https://www.youtube.com/playlist?list=PLBlnK6fPqkYsgMqxoP_DfqKnBFlVnZGmH"
          }
        ],
        "externalLinks": [
          {
            "title": "Entity Relationship Model - GeeksforGeeks",
            "url": "https://www.geeksforgeeks.org/entity-relationship-model-in-dbms/"
          },
          {
            "title": "Relational Model - Tutorialspoint",
            "url": "https://www.tutorialspoint.com/dbms/relational_model.htm"
          }
        ],
        "mcqs": [
          {
            "question": "An entity in ER model is:",
            "options": ["A relationship", "An object or thing in the real world", "A constraint", "A query"],
            "correctAnswer": "An object or thing in the real world",
            "explanation": "Entity is anything that has independent existence (person, vehicle, product)."
          },
          {
            "question": "Attribute in ER model represents:",
            "options": ["A relationship", "A property of entity", "A constraint", "A table"],
            "correctAnswer": "A property of entity",
            "explanation": "Attribute describes characteristics of an entity (age, color, name)."
          },
          {
            "question": "Primary key in relational model:",
            "options": ["Can be null", "Uniquely identifies each tuple", "Allows duplicates", "Is optional"],
            "correctAnswer": "Uniquely identifies each tuple",
            "explanation": "Primary key uniquely identifies each record in a table."
          },
          {
            "question": "Foreign key creates:",
            "options": ["Primary key relationship", "Referential integrity constraint", "Unique constraint", "Check constraint"],
            "correctAnswer": "Referential integrity constraint",
            "explanation": "Foreign key references primary key in another table, maintaining referential integrity."
          },
          {
            "question": "Cardinality in ER model describes:",
            "options": ["Number of attributes", "Number of values in domain", "Number of entities in relationship", "Maximum records in table"],
            "correctAnswer": "Number of entities in relationship",
            "explanation": "Cardinality shows one-to-one, one-to-many, or many-to-many relationship."
          },
          {
            "question": "JOIN operation combines:",
            "options": ["Rows from different tables based on common column", "All columns from a table", "Tables with same attributes", "Rows from same table"],
            "correctAnswer": "Rows from different tables based on common column",
            "explanation": "JOIN combines tuples from multiple tables matching a condition."
          },
          {
            "question": "SELECT operation in relational algebra is:",
            "options": ["Choosing columns", "Choosing rows based on condition", "Sorting data", "Grouping data"],
            "correctAnswer": "Choosing rows based on condition",
            "explanation": "SELECT retrieves rows satisfying specified condition (horizontal subset)."
          },
          {
            "question": "PROJECT operation in relational algebra is:",
            "options": ["Choosing rows", "Choosing columns", "Joining tables", "Sorting"],
            "correctAnswer": "Choosing columns",
            "explanation": "PROJECT selects specific attributes/columns (vertical subset)."
          },
          {
            "question": "Weak entity in ER model:",
            "options": ["Has primary key", "Depends on strong entity for identification", "Has many attributes", "Always singular"],
            "correctAnswer": "Depends on strong entity for identification",
            "explanation": "Weak entity cannot exist independently; depends on strong entity."
          },
          {
            "question": "Domain constraint in relational model specifies:",
            "options": ["Allowed values for an attribute", "Primary key rule", "Foreign key rule", "Table structure"],
            "correctAnswer": "Allowed values for an attribute",
            "explanation": "Domain constraint restricts attribute values to valid set (e.g., age: 0-150)."
          }
        ]
      },
      {
        "id": 2,
        "title": "SQL and Query Optimization",
        "description": "SQL basics (DDL, DML, DCL), CREATE, ALTER, DROP statements, INSERT, UPDATE, DELETE operations, SELECT queries, WHERE clause, JOIN types (INNER, LEFT, RIGHT, FULL), aggregate functions (SUM, COUNT, AVG, MAX, MIN), GROUP BY, HAVING, ORDER BY, subqueries, indexes, query optimization techniques.",
        "videos": [
          {
            "title": "SQL Complete Tutorial",
            "url": "https://www.youtube.com/playlist?list=PLBlnK6fPqkYvJz6K1Xq6gvbPfVB6PfgHD"
          }
        ],
        "externalLinks": [
          {
            "title": "SQL Basics - GeeksforGeeks",
            "url": "https://www.geeksforgeeks.org/sql-tutorial/"
          },
          {
            "title": "SQL Queries - Tutorialspoint",
            "url": "https://www.tutorialspoint.com/sql/"
          }
        ],
        "mcqs": [
          {
            "question": "DDL includes:",
            "options": ["INSERT, UPDATE, DELETE", "CREATE, ALTER, DROP", "GRANT, REVOKE", "SELECT, FROM, WHERE"],
            "correctAnswer": "CREATE, ALTER, DROP",
            "explanation": "DDL (Data Definition Language) defines database structure."
          },
          {
            "question": "INNER JOIN returns:",
            "options": ["All rows from both tables", "Matching rows from both tables", "All rows from left table", "All rows from right table"],
            "correctAnswer": "Matching rows from both tables",
            "explanation": "INNER JOIN returns only rows where join condition is satisfied."
          },
          {
            "question": "LEFT JOIN returns:",
            "options": ["Matching rows only", "All rows from left table + matched from right", "All rows from right table", "No duplicates"],
            "correctAnswer": "All rows from left table + matched from right",
            "explanation": "LEFT JOIN keeps all left table rows; right table rows only if matched."
          },
          {
            "question": "COUNT(*) in SQL counts:",
            "options": ["Non-null values", "All rows", "Distinct values", "Null values"],
            "correctAnswer": "All rows",
            "explanation": "COUNT(*) counts all rows including null values."
          },
          {
            "question": "GROUP BY is used with:",
            "options": ["WHERE clause only", "Aggregate functions", "ORDER BY only", "INSERT statement"],
            "correctAnswer": "Aggregate functions",
            "explanation": "GROUP BY groups rows for aggregate calculation (SUM, COUNT, AVG)."
          },
          {
            "question": "HAVING clause is used to:",
            "options": ["Filter rows before grouping", "Filter groups after aggregation", "Sort results", "Limit rows"],
            "correctAnswer": "Filter groups after aggregation",
            "explanation": "HAVING filters groups; WHERE filters individual rows before grouping."
          },
          {
            "question": "Subquery (inner query) is used:",
            "options": ["Only in FROM clause", "Inside another query", "Instead of JOIN only", "For sorting only"],
            "correctAnswer": "Inside another query",
            "explanation": "Subquery is nested inside main query, returning values for outer query."
          },
          {
            "question": "Index in database is created to:",
            "options": ["Increase storage", "Speed up queries", "Reduce data volume", "Add constraints"],
            "correctAnswer": "Speed up queries",
            "explanation": "Index accelerates data retrieval but slows down INSERT/UPDATE/DELETE."
          },
          {
            "question": "DISTINCT keyword removes:",
            "options": ["Foreign keys", "Null values", "Duplicate rows", "Primary keys"],
            "correctAnswer": "Duplicate rows",
            "explanation": "DISTINCT returns unique values, eliminating duplicates."
          },
          {
            "question": "UNION operation combines:",
            "options": ["All rows from both queries", "Matching rows only", "First query rows only", "Joined result"],
            "correctAnswer": "All rows from both queries",
            "explanation": "UNION combines results of two queries, removing duplicates."
          }
        ]
      },
      {
        "id": 3,
        "title": "Normalization and Functional Dependencies",
        "description": "Functional dependency, trivial and non-trivial FD, closure, anomalies (insertion, update, deletion), normalization forms (1NF, 2NF, 3NF, BCNF, 4NF, 5NF), decomposition, lossless decomposition, dependency preservation, Armstrong's axioms.",
        "videos": [
          {
            "title": "Database Normalization - Complete Tutorial",
            "url": "https://www.youtube.com/playlist?list=PLxCzCOWd7aiL9Lgx_nanLkJ0lXPRQh4VR"
          }
        ],
        "externalLinks": [
          {
            "title": "Database Normalization - GeeksforGeeks",
            "url": "https://www.geeksforgeeks.org/normal-forms-in-dbms/"
          },
          {
            "title": "Functional Dependencies - Tutorialspoint",
            "url": "https://www.tutorialspoint.com/dbms/database_normalization.htm"
          }
        ],
        "mcqs": [
          {
            "question": "Functional dependency X → Y means:",
            "options": ["Y is smaller than X", "For each X value there is unique Y value", "X is primary key", "Y is foreign key"],
            "correctAnswer": "For each X value there is unique Y value",
            "explanation": "FD means attribute Y value is determined by attribute X value."
          },
          {
            "question": "First Normal Form (1NF) requires:",
            "options": ["No composite keys", "Atomic attributes", "No transitive dependencies", "BCNF form"],
            "correctAnswer": "Atomic attributes",
            "explanation": "1NF: all attributes must be atomic (single-valued)."
          },
          {
            "question": "Second Normal Form (2NF) requires:",
            "options": ["1NF + no partial dependencies", "No foreign keys", "All keys composite", "BCNF properties"],
            "correctAnswer": "1NF + no partial dependencies",
            "explanation": "2NF: must be in 1NF; non-key attributes depend on entire primary key."
          },
          {
            "question": "Third Normal Form (3NF) requires:",
            "options": ["2NF + no transitive dependencies", "No repeating groups", "BCNF form", "All columns unique"],
            "correctAnswer": "2NF + no transitive dependencies",
            "explanation": "3NF: must be in 2NF; non-key attributes depend on primary key, not other attributes."
          },
          {
            "question": "Insertion anomaly occurs when:",
            "options": ["Deleting data", "Inserting causes unrelated data insertion", "Foreign key is deleted", "Duplicates inserted"],
            "correctAnswer": "Inserting causes unrelated data insertion",
            "explanation": "Insertion anomaly: inserting one entity requires inserting unrelated entity data."
          },
          {
            "question": "Update anomaly occurs when:",
            "options": ["Deleting rows", "Updating one data instance requires updating many", "Adding new column", "Null values"],
            "correctAnswer": "Updating one data instance requires updating many",
            "explanation": "Update anomaly: inconsistency from redundant data requiring multiple updates."
          },
          {
            "question": "Deletion anomaly occurs when:",
            "options": ["Inserting unnecessary data", "Deleting one entity loses unrelated data", "Modifying records", "Primary key deletion"],
            "correctAnswer": "Deleting one entity loses unrelated data",
            "explanation": "Deletion anomaly: removing one fact unintentionally removes other facts."
          },
          {
            "question": "BCNF (Boyce-Codd Normal Form) requires:",
            "options": ["Every FD is trivial", "Every determinant is candidate key", "No composite attributes", "3NF properties"],
            "correctAnswer": "Every determinant is candidate key",
            "explanation": "BCNF: stricter than 3NF; for every FD X → Y, X must be candidate key."
          },
          {
            "question": "Lossless decomposition means:",
            "options": ["Original data is lost", "Relations can be joined to recover original", "Data is duplicated", "No primary key"],
            "correctAnswer": "Relations can be joined to recover original",
            "explanation": "Lossless: joining decomposed tables recovers original table exactly."
          },
          {
            "question": "Transitive dependency occurs when:",
            "options": ["Primary key → attribute", "Attribute → primary key", "Non-key → non-key → primary key chain", "Same attribute twice"],
            "correctAnswer": "Non-key → non-key → primary key chain",
            "explanation": "Transitive: if A → B and B → C, then A → C transitively."
          }
        ]
      },
      {
        "id": 4,
        "title": "Transaction Management and Concurrency Control",
        "description": "Transaction concept, ACID properties (Atomicity, Consistency, Isolation, Durability), transaction states, commit and rollback, concurrency problems (dirty read, lost update, nonrepeatable read, phantom read), serializability (conflict, view), transaction schedules, locking (2PL - Two-Phase Locking), deadlock handling, timestamp-based concurrency control, optimistic concurrency control.",
        "videos": [
          {
            "title": "Transactions and Concurrency Control in DBMS",
            "url": "https://www.youtube.com/playlist?list=PLxCzCOWd7aiEv62BjEDyNKHVjpVB32hQf"
          }
        ],
        "externalLinks": [
          {
            "title": "ACID Properties - GeeksforGeeks",
            "url": "https://www.geeksforgeeks.org/acid-properties-in-dbms/"
          },
          {
            "title": "Concurrency Control - Tutorialspoint",
            "url": "https://www.tutorialspoint.com/dbms/concurrency_control.htm"
          }
        ],
        "mcqs": [
          {
            "question": "Atomicity in ACID means:",
            "options": ["Transaction is visible", "All or nothing: complete or no effect", "Data consistency", "Transaction order"],
            "correctAnswer": "All or nothing: complete or no effect",
            "explanation": "Atomicity: transaction either fully completes or is fully rolled back."
          },
          {
            "question": "Consistency in ACID means:",
            "options": ["Database format stays same", "Data integrity constraints maintained", "Transactions ordered", "Durability"],
            "correctAnswer": "Data integrity constraints maintained",
            "explanation": "Consistency: database moves from valid state to valid state."
          },
          {
            "question": "Isolation in ACID means:",
            "options": ["Transactions are visible", "Concurrent transactions don't interfere", "Data is backed up", "Durability"],
            "correctAnswer": "Concurrent transactions don't interfere",
            "explanation": "Isolation: transactions execute as if alone; effects hidden until committed."
          },
          {
            "question": "Durability in ACID means:",
            "options": ["Transactions don't fail", "Data persists after commit even if failure", "No backups needed", "Isolation"],
            "correctAnswer": "Data persists after commit even if failure",
            "explanation": "Durability: committed data survives failures (power loss, crashes)."
          },
          {
            "question": "Dirty read means:",
            "options": ["Reading garbage data", "Reading uncommitted changes", "Invalid data", "Corrupted data"],
            "correctAnswer": "Reading uncommitted changes",
            "explanation": "Dirty read: transaction reads data written by uncommitted transaction."
          },
          {
            "question": "Nonrepeatable read is:",
            "options": ["Reading same row twice returns same value", "Reading same row twice returns different values", "Data corruption", "Lost update"],
            "correctAnswer": "Reading same row twice returns different values",
            "explanation": "Nonrepeatable read: row values change between reads due to other transaction update."
          },
          {
            "question": "Two-Phase Locking (2PL) has phases:",
            "options": ["Read then Write", "Growing phase and Shrinking phase", "Lock and Unlock", "Begin and End"],
            "correctAnswer": "Growing phase and Shrinking phase",
            "explanation": "2PL: growing (acquire locks), then shrinking (release locks), no interleaving."
          },
          {
            "question": "Deadlock in transactions occurs when:",
            "options": ["Transaction fails", "Two transactions wait for each other's locks", "Data is corrupted", "Memory overflows"],
            "correctAnswer": "Two transactions wait for each other's locks",
            "explanation": "Deadlock: T1 waits for lock held by T2, T2 waits for lock held by T1."
          },
          {
            "question": "Timestamp-based concurrency control uses:",
            "options": ["Locks", "Unique identifier per transaction", "2PL", "Priorities"],
            "correctAnswer": "Unique identifier per transaction",
            "explanation": "Timestamp: each transaction gets unique timestamp; reads/writes validated against it."
          },
          {
            "question": "Optimistic concurrency control checks conflicts:",
            "options": ["Before reading", "During transaction", "After committing (validation phase)", "Never"],
            "correctAnswer": "After committing (validation phase)",
            "explanation": "Optimistic: assumes no conflicts; validates before commit; aborts if conflict detected."
          }
        ]
      }
    ]
  },
  {
    "id": 8,
    "title": "Computer Networks and Security",
    "code": "ACtE08",
    "topics": [
      {
        "id": 1,
        "title": "Network Models and Data Communication",
        "description": "OSI model layers, TCP/IP model, data communication basics (sender, receiver, medium, message), transmission types (simplex, half-duplex, full-duplex), digital and analog transmission, signal propagation, bandwidth and throughput, attenuation and noise, Nyquist theorem, Shannon capacity.",
        "videos": [
          {
            "title": "Computer Networks Full Course",
            "url": "https://www.youtube.com/playlist?list=PLBlnK6fPqkYvpI-0XTq2I6gi4JYrUQLmE"
          }
        ],
        "externalLinks": [
          {
            "title": "OSI Model - GeeksforGeeks",
            "url": "https://www.geeksforgeeks.org/open-systems-interconnection-model-osi-model/"
          },
          {
            "title": "TCP/IP Model - Tutorialspoint",
            "url": "https://www.tutorialspoint.com/internet_technologies/tcp_ip_model.htm"
          }
        ],
        "mcqs": [
          {
            "question": "OSI model has how many layers?",
            "options": ["5", "6", "7", "8"],
            "correctAnswer": "7",
            "explanation": "OSI: Physical, Data Link, Network, Transport, Session, Presentation, Application."
          },
          {
            "question": "TCP/IP model has how many layers?",
            "options": ["5", "7", "4", "6"],
            "correctAnswer": "4",
            "explanation": "TCP/IP: Link, Internet, Transport, Application."
          },
          {
            "question": "Physical layer (Layer 1) deals with:",
            "options": ["Error checking", "Mechanical/electrical specs", "Routing", "Encryption"],
            "correctAnswer": "Mechanical/electrical specs",
            "explanation": "Physical layer defines hardware specs (cables, connectors, voltage)."
          },
          {
            "question": "Data Link layer (Layer 2) handles:",
            "options": ["Routing decisions", "MAC addressing and frame delivery", "Process-to-process communication", "User applications"],
            "correctAnswer": "MAC addressing and frame delivery",
            "explanation": "Data Link layer handles MAC addressing, switching, frames."
          },
          {
            "question": "Network layer (Layer 3) is responsible for:",
            "options": ["Physical transmission", "Frame delivery", "Routing and IP addressing", "User services"],
            "correctAnswer": "Routing and IP addressing",
            "explanation": "Network layer handles routing decisions, logical addressing (IP)."
          },
          {
            "question": "Transport layer (Layer 4) provides:",
            "options": ["Physical connectivity", "Addressing", "End-to-end reliable delivery", "User interface"],
            "correctAnswer": "End-to-end reliable delivery",
            "explanation": "Transport layer (TCP/UDP) ensures reliable end-to-end delivery."
          },
          {
            "question": "Full-duplex transmission means:",
            "options": ["One direction only", "Both directions, not simultaneously", "Both directions, simultaneously", "No transmission"],
            "correctAnswer": "Both directions, simultaneously",
            "explanation": "Full-duplex: simultaneous bidirectional communication (telephone call)."
          },
          {
            "question": "Shannon capacity formula defines:",
            "options": ["Maximum frequency", "Data rate limit with noise", "Bandwidth requirement", "Signal strength"],
            "correctAnswer": "Data rate limit with noise",
            "explanation": "Shannon: C = B × log₂(1 + S/N), theoretical maximum data rate."
          },
          {
            "question": "Attenuation is:",
            "options": ["Signal increase", "Signal strength decrease over distance", "Noise addition", "Frequency change"],
            "correctAnswer": "Signal strength decrease over distance",
            "explanation": "Attenuation: signal weakens as it travels through medium."
          },
          {
            "question": "Bandwidth is measured in:",
            "options": ["Volts", "Watts", "Hertz (cycles per second)", "Meters"],
            "correctAnswer": "Hertz (cycles per second)",
            "explanation": "Bandwidth: range of frequencies; unit is Hz (cycles per second)."
          }
        ]
      },
      {
        "id": 2,
        "title": "Data Link and Network Layer",
        "description": "MAC addressing (Ethernet), framing, error detection (parity, checksum, CRC), error correction (Hamming code), ARP protocol, switching, VLAN, IP addressing (IPv4, IPv6), subnetting, routing protocols (RIP, OSPF, BGP), forwarding, congestion control.",
        "videos": [
          {
            "title": "Data Link and Network Layer Protocols",
            "url": "https://www.youtube.com/playlist?list=PLxCzCOWd7aiGnlV7G8zKsWEZCIEEUdFTm"
          }
        ],
        "externalLinks": [
          {
            "title": "MAC Addressing and Ethernet - GeeksforGeeks",
            "url": "https://www.geeksforgeeks.org/mac-address/"
          },
          {
            "title": "IP Addressing and Subnetting - Tutorialspoint",
            "url": "https://www.tutorialspoint.com/ipv4/ipv4_address_classes.htm"
          }
        ],
        "mcqs": [
          {
            "question": "MAC address length is:",
            "options": ["32 bits", "48 bits", "64 bits", "128 bits"],
            "correctAnswer": "48 bits",
            "explanation": "MAC address is 48-bit (6 bytes), represented as 6 hexadecimal pairs."
          },
          {
            "question": "ARP protocol is used to:",
            "options": ["Find MAC from IP address", "Find IP from domain name", "Find route to destination", "Encrypt data"],
            "correctAnswer": "Find MAC from IP address",
            "explanation": "ARP (Address Resolution Protocol) maps IP address to MAC address."
          },
          {
            "question": "IPv4 address length is:",
            "options": ["32 bits", "64 bits", "128 bits", "48 bits"],
            "correctAnswer": "32 bits",
            "explanation": "IPv4: 32-bit address, represented as 4 octets (dotted decimal)."
          },
          {
            "question": "IPv6 address length is:",
            "options": ["32 bits", "64 bits", "128 bits", "256 bits"],
            "correctAnswer": "128 bits",
            "explanation": "IPv6: 128-bit address, written as 8 groups of hexadecimal."
          },
          {
            "question": "Subnetting is used to:",
            "options": ["Increase bandwidth", "Divide IP network into smaller networks", "Encrypt traffic", "Route packets"],
            "correctAnswer": "Divide IP network into smaller networks",
            "explanation": "Subnetting divides network into subnets using subnet mask."
          },
          {
            "question": "CRC (Cyclic Redundancy Check) is:",
            "options": ["Error correction code", "Error detection code", "Encryption algorithm", "Routing protocol"],
            "correctAnswer": "Error detection code",
            "explanation": "CRC detects transmission errors; can detect but not correct."
          },
          {
            "question": "Hamming code is used for:",
            "options": ["Error detection only", "Error detection and correction", "Encryption", "Compression"],
            "correctAnswer": "Error detection and correction",
            "explanation": "Hamming code can detect and correct single-bit errors."
          },
          {
            "question": "OSPF protocol is:",
            "options": ["Distance-vector routing", "Link-state routing", "BGP variant", "Transport protocol"],
            "correctAnswer": "Link-state routing",
            "explanation": "OSPF (Open Shortest Path First) is link-state routing protocol."
          },
          {
            "question": "Virtual LAN (VLAN) is used to:",
            "options": ["Increase speed", "Logically divide network", "Encrypt data", "Reduce bandwidth"],
            "correctAnswer": "Logically divide network",
            "explanation": "VLAN groups devices logically regardless of physical location."
          },
          {
            "question": "Forwarding decision is made based on:",
            "options": ["MAC address", "IP address", "Port number", "Protocol type"],
            "correctAnswer": "IP address",
            "explanation": "Routers use IP address (routing table) to forward packets."
          }
        ]
      },
      {
        "id": 3,
        "title": "Transport and Application Layer",
        "description": "TCP and UDP protocols, socket programming, port numbers, well-known ports, DNS protocol, HTTP/HTTPS, SMTP, POP3, IMAP, FTP, SSH, Telnet, DHCP, SNMP, QoS (Quality of Service), flow control, congestion control algorithms.",
        "videos": [
          {
            "title": "Transport and Application Layers",
            "url": "https://www.youtube.com/playlist?list=PLxCzCOWd7aiHm2bUqCIStoDo2tW5mrVrJ"
          }
        ],
        "externalLinks": [
          {
            "title": "TCP vs UDP - GeeksforGeeks",
            "url": "https://www.geeksforgeeks.org/differences-between-tcp-and-udp/"
          },
          {
            "title": "Application Layer Protocols - Tutorialspoint",
            "url": "https://www.tutorialspoint.com/internet_technologies/application_layer_protocols.htm"
          }
        ],
        "mcqs": [
          {
            "question": "TCP protocol provides:",
            "options": ["Unreliable delivery", "Reliable, ordered, connection-oriented delivery", "Broadcast only", "Limited bandwidth"],
            "correctAnswer": "Reliable, ordered, connection-oriented delivery",
            "explanation": "TCP ensures all packets arrive in order without loss."
          },
          {
            "question": "UDP protocol provides:",
            "options": ["Reliable delivery", "Unreliable, connectionless delivery", "Only broadcast", "Error correction"],
            "correctAnswer": "Unreliable, connectionless delivery",
            "explanation": "UDP is connectionless, may lose packets, but faster than TCP."
          },
          {
            "question": "Port 80 is used for:",
            "options": ["FTP", "SSH", "HTTP", "HTTPS"],
            "correctAnswer": "HTTP",
            "explanation": "Port 80: HTTP (web); Port 443: HTTPS; Port 21: FTP; Port 22: SSH."
          },
          {
            "question": "DNS protocol resolves:",
            "options": ["IP to MAC", "Domain name to IP", "Port to service", "Host to network"],
            "correctAnswer": "Domain name to IP",
            "explanation": "DNS translates domain names (example.com) to IP addresses."
          },
          {
            "question": "SMTP protocol is used for:",
            "options": ["Receiving email", "Sending email", "File transfer", "Remote login"],
            "correctAnswer": "Sending email",
            "explanation": "SMTP (Simple Mail Transfer Protocol) sends email; POP3/IMAP receive."
          },
          {
            "question": "HTTP request methods include:",
            "options": ["READ, WRITE", "GET, POST, PUT, DELETE", "SEND, RECEIVE", "ENCODE, DECODE"],
            "correctAnswer": "GET, POST, PUT, DELETE",
            "explanation": "HTTP methods: GET (retrieve), POST (create), PUT (update), DELETE (remove)."
          },
          {
            "question": "SSH protocol provides:",
            "options": ["Plain text remote access", "Encrypted remote access", "File sharing", "Email"],
            "correctAnswer": "Encrypted remote access",
            "explanation": "SSH (Secure Shell) provides encrypted remote login (replaces Telnet)."
          },
          {
            "question": "FTP port numbers are:",
            "options": ["21 (control), 22 (data)", "21 (control), 20 (data)", "80, 443", "25, 110"],
            "correctAnswer": "21 (control), 20 (data)",
            "explanation": "FTP uses port 21 for control commands, port 20 for data transfer."
          },
          {
            "question": "DHCP protocol is used to:",
            "options": ["Resolve domain names", "Dynamically assign IP addresses", "Transfer files", "Send emails"],
            "correctAnswer": "Dynamically assign IP addresses",
            "explanation": "DHCP assigns IP addresses automatically to network devices."
          },
          {
            "question": "Quality of Service (QoS) ensures:",
            "options": ["Faster internet", "Required bandwidth for services", "No packet loss", "Unlimited bandwidth"],
            "correctAnswer": "Required bandwidth for services",
            "explanation": "QoS guarantees minimum bandwidth/latency for critical applications."
          }
        ]
      },
      {
        "id": 4,
        "title": "Network Security and Cryptography",
        "description": "Symmetric encryption (DES, AES, 3DES), asymmetric encryption (RSA, ECC), hashing algorithms (MD5, SHA), digital signatures, certificate, PKI (Public Key Infrastructure), TLS/SSL, firewalls, VPN, intrusion detection/prevention, malware, authentication, authorization, access control models (DAC, MAC, RBAC).",
        "videos": [
          {
            "title": "Network Security and Cryptography",
            "url": "https://www.youtube.com/playlist?list=PLxCzCOWd7aiG_31rrCHaKGQjDqnTEqLM5"
          }
        ],
        "externalLinks": [
          {
            "title": "Cryptography Basics - GeeksforGeeks",
            "url": "https://www.geeksforgeeks.org/cryptography/"
          },
          {
            "title": "Network Security - Tutorialspoint",
            "url": "https://www.tutorialspoint.com/network_security/"
          }
        ],
        "mcqs": [
          {
            "question": "Symmetric encryption uses:",
            "options": ["Two different keys", "Same key for encryption and decryption", "Public and private key", "Random keys"],
            "correctAnswer": "Same key for encryption and decryption",
            "explanation": "Symmetric: sender and receiver share same secret key."
          },
          {
            "question": "Asymmetric encryption uses:",
            "options": ["One key", "Public and private key pair", "Shared secret", "Random generation"],
            "correctAnswer": "Public and private key pair",
            "explanation": "Asymmetric: public key encrypts, private key decrypts (RSA, ECC)."
          },
          {
            "question": "RSA encryption is based on:",
            "options": ["Prime factorization difficulty", "XOR operations", "Substitution method", "Frequency analysis"],
            "correctAnswer": "Prime factorization difficulty",
            "explanation": "RSA security relies on difficulty of factoring large primes."
          },
          {
            "question": "Hashing function produces:",
            "options": ["Encrypted text", "Fixed-size digest/fingerprint", "Public key", "Random number"],
            "correctAnswer": "Fixed-size digest/fingerprint",
            "explanation": "Hash output fixed-size (MD5: 128-bit, SHA-1: 160-bit)."
          },
          {
            "question": "Digital signature provides:",
            "options": ["Encryption", "Authentication and non-repudiation", "Compression", "Data validation only"],
            "correctAnswer": "Authentication and non-repudiation",
            "explanation": "Digital signature proves origin and cannot be denied later."
          },
          {
            "question": "TLS/SSL protocol provides:",
            "options": ["Compression", "Secure encrypted communication over network", "File transfer", "Email encryption"],
            "correctAnswer": "Secure encrypted communication over network",
            "explanation": "TLS/SSL establishes secure encrypted channel (HTTPS)."
          },
          {
            "question": "Firewall primarily protects by:",
            "options": ["Detecting viruses", "Controlling network traffic based on rules", "Encrypting data", "Backing up files"],
            "correctAnswer": "Controlling network traffic based on rules",
            "explanation": "Firewall filters inbound/outbound traffic based on security rules."
          },
          {
            "question": "VPN (Virtual Private Network) creates:",
            "options": ["Public network", "Encrypted tunnel through public network", "Local network", "Direct connection"],
            "correctAnswer": "Encrypted tunnel through public network",
            "explanation": "VPN encrypts traffic over public network, appears as private network."
          },
          {
            "question": "Role-Based Access Control (RBAC) assigns:",
            "options": ["Individual permissions per user", "Permissions to user roles", "Random access", "No restrictions"],
            "correctAnswer": "Permissions to user roles",
            "explanation": "RBAC: users assigned roles with predefined permissions."
          },
          {
            "question": "Man-in-the-Middle (MITM) attack is:",
            "options": ["Attacker intercepts communication between parties", "Denial of service", "Malware infection", "Password guessing"],
            "correctAnswer": "Attacker intercepts communication between parties",
            "explanation": "MITM: attacker secretly intercepts and relays communication."
          }
        ]
      }
    ]
  },
  {
    "id": 9,
    "title": "Software Engineering",
    "code": "ACtE09",
    "topics": [
      {
        "id": 1,
        "title": "Software Development Life Cycle and Models",
        "description": "SDLC phases (planning, analysis, design, implementation, testing, deployment, maintenance), SDLC models (Waterfall, Spiral, Agile, Iterative), advantages and disadvantages, project estimation, scheduling, risk management, change management, documentation.",
        "videos": [
          {
            "title": "Software Development Life Cycle - Complete Tutorial",
            "url": "https://www.youtube.com/playlist?list=PLsyeobzWxZZqCxqKpMTPp_D7Q0p4hBbYz"
          }
        ],
        "externalLinks": [
          {
            "title": "SDLC Models - GeeksforGeeks",
            "url": "https://www.geeksforgeeks.org/software-development-life-cycle-sdlc/"
          },
          {
            "title": "Software Development Models - Tutorialspoint",
            "url": "https://www.tutorialspoint.com/sdlc/sdlc_overview.htm"
          }
        ],
        "mcqs": [
          {
            "question": "Waterfall model is best for:",
            "options": ["Changing requirements", "Well-defined requirements", "Research projects", "Rapid prototyping"],
            "correctAnswer": "Well-defined requirements",
            "explanation": "Waterfall: sequential phases, good when requirements are clear and stable."
          },
          {
            "question": "Spiral model emphasizes:",
            "options": ["Speed", "Risk management through iterations", "Sequential flow", "Minimal documentation"],
            "correctAnswer": "Risk management through iterations",
            "explanation": "Spiral: iterative cycles with risk analysis at each iteration."
          },
          {
            "question": "Agile methodology uses:",
            "options": ["Comprehensive documentation", "Fixed requirements", "Iterative development with frequent feedback", "Long release cycles"],
            "correctAnswer": "Iterative development with frequent feedback",
            "explanation": "Agile: short sprints, frequent stakeholder feedback, adaptive to change."
          },
          {
            "question": "COCOMO model estimates:",
            "options": ["Project cost and schedule", "Quality metrics", "Risk probability", "Team size only"],
            "correctAnswer": "Project cost and schedule",
            "explanation": "COCOMO (Constructive Cost Model) predicts effort and cost."
          },
          {
            "question": "Change management process includes:",
            "options": ["Applying all changes immediately", "Evaluating, approving, implementing, documenting", "Ignoring changes", "Manager decision only"],
            "correctAnswer": "Evaluating, approving, implementing, documenting",
            "explanation": "Change management: identify → evaluate → approve → implement → document."
          },
          {
            "question": "Risk management includes:",
            "options": ["Ignoring problems", "Identification, analysis, response planning", "Quick fixes", "No planning"],
            "correctAnswer": "Identification, analysis, response planning",
            "explanation": "Risk management: identify risks → analyze → plan response → monitor."
          },
          {
            "question": "PRINCE2 is:",
            "options": ["Programming language", "Project management methodology", "Testing framework", "Design pattern"],
            "correctAnswer": "Project management methodology",
            "explanation": "PRINCE2: PRojects IN Controlled Environments methodology."
          },
          {
            "question": "Feasibility study examines:",
            "options": ["Technical aspects only", "Economic, technical, operational, schedule feasibility", "Cost only", "Schedule only"],
            "correctAnswer": "Economic, technical, operational, schedule feasibility",
            "explanation": "Feasibility: can it be done? Should it be done? Cost-effective?"
          },
          {
            "question": "Version control is used for:",
            "options": ["Managing project budget", "Tracking code changes over time", "User support", "Hardware management"],
            "correctAnswer": "Tracking code changes over time",
            "explanation": "Version control (Git, SVN) tracks history, branches, merges."
          },
          {
            "question": "Sprint in Agile typically lasts:",
            "options": ["1 day", "1-4 weeks", "6 months", "1 year"],
            "correctAnswer": "1-4 weeks",
            "explanation": "Sprint: fixed-duration iteration, typically 2 weeks."
          }
        ]
      },
      {
        "id": 2,
        "title": "Requirement Engineering and System Design",
        "description": "Requirement types (functional, non-functional), requirement elicitation techniques, requirement analysis and specification, SRS (Software Requirement Specification), system design principles (modularity, cohesion, coupling), design patterns, architectural styles, UML diagrams, design reviews, documentation standards.",
        "videos": [
          {
            "title": "Requirements Engineering and Software Design",
            "url": "https://www.youtube.com/playlist?list=PLsyeobzWxZZrGdnHjH7mfgzJlM-M0i6Gj"
          }
        ],
        "externalLinks": [
          {
            "title": "Requirements Engineering - GeeksforGeeks",
            "url": "https://www.geeksforgeeks.org/software-requirements-specification-srs/"
          },
          {
            "title": "Software Design - Tutorialspoint",
            "url": "https://www.tutorialspoint.com/software_engineering/software_design.htm"
          }
        ],
        "mcqs": [
          {
            "question": "Functional requirement specifies:",
            "options": ["Performance criteria", "What system should do", "Non-functional aspects", "User interface only"],
            "correctAnswer": "What system should do",
            "explanation": "Functional: specific functions, features, behaviors system performs."
          },
          {
            "question": "Non-functional requirement specifies:",
            "options": ["System functions", "How system should perform (speed, security, reliability)", "User stories", "Code structure"],
            "correctAnswer": "How system should perform (speed, security, reliability)",
            "explanation": "Non-functional: performance, security, scalability, usability constraints."
          },
          {
            "question": "SRS (Software Requirement Specification) is:",
            "options": ["Design document", "Complete requirement documentation", "Test plan", "Code repository"],
            "correctAnswer": "Complete requirement documentation",
            "explanation": "SRS: formal document detailing all requirements for the system."
          },
          {
            "question": "Cohesion in design refers to:",
            "options": ["Loose coupling", "Elements grouping together logically", "Dependencies", "Code length"],
            "correctAnswer": "Elements grouping together logically",
            "explanation": "High cohesion: related functions grouped; low cohesion: scattered."
          },
          {
            "question": "Coupling in design refers to:",
            "options": ["Group strength", "Interdependence between modules", "Cohesion", "Performance"],
            "correctAnswer": "Interdependence between modules",
            "explanation": "Low coupling: modules independent; high coupling: tightly dependent."
          },
          {
            "question": "Design pattern is:",
            "options": ["Programming language", "Reusable solution to common problem", "Test framework", "Documentation style"],
            "correctAnswer": "Reusable solution to common problem",
            "explanation": "Design patterns: proven solutions (Singleton, Observer, Factory, etc.)."
          },
          {
            "question": "MVC (Model-View-Controller) is:",
            "options": ["Programming language", "Database", "Architectural pattern separating concerns", "Testing tool"],
            "correctAnswer": "Architectural pattern separating concerns",
            "explanation": "MVC: Model (data), View (UI), Controller (logic) separation."
          },
          {
            "question": "UML use case diagram shows:",
            "options": ["Class relationships", "Actor interactions with system", "Database schema", "Code structure"],
            "correctAnswer": "Actor interactions with system",
            "explanation": "Use case: user (actor) interactions and system functions."
          },
          {
            "question": "Modularity principle states:",
            "options": ["Single large function", "Break system into independent modules", "Minimize functions", "Global variables"],
            "correctAnswer": "Break system into independent modules",
            "explanation": "Modularity: divide system into manageable, independent modules."
          },
          {
            "question": "Interface segregation principle means:",
            "options": ["One large interface", "Multiple specific interfaces instead of general", "No interfaces", "Direct access"],
            "correctAnswer": "Multiple specific interfaces instead of general",
            "explanation": "ISP: clients depend on specific interfaces, not bloated general ones."
          }
        ]
      },
      {
        "id": 3,
        "title": "Software Testing and Quality Assurance",
        "description": "Testing types (unit, integration, system, acceptance), testing methods (white-box, black-box, gray-box), test case design techniques (boundary value, equivalence partitioning, decision table), bug tracking, QA vs QC, code review, code coverage, test automation, regression testing, performance testing.",
        "videos": [
          {
            "title": "Software Testing and QA",
            "url": "https://www.youtube.com/playlist?list=PLsyeobzWxZZr6EUhFWtZHvRJN5o3aOAF4"
          }
        ],
        "externalLinks": [
          {
            "title": "Software Testing - GeeksforGeeks",
            "url": "https://www.geeksforgeeks.org/software-testing/"
          },
          {
            "title": "Testing Methods - Tutorialspoint",
            "url": "https://www.tutorialspoint.com/software_testing/"
          }
        ],
        "mcqs": [
          {
            "question": "Unit testing is performed on:",
            "options": ["Entire system", "Individual functions/modules", "Integration of modules", "User interface"],
            "correctAnswer": "Individual functions/modules",
            "explanation": "Unit test: smallest testable component tested in isolation."
          },
          {
            "question": "Integration testing checks:",
            "options": ["Single function", "Modules working together", "User scenarios", "Performance only"],
            "correctAnswer": "Modules working together",
            "explanation": "Integration test: verify modules interact correctly when combined."
          },
          {
            "question": "System testing validates:",
            "options": ["Code syntax", "Entire system against requirements", "Database only", "Performance only"],
            "correctAnswer": "Entire system against requirements",
            "explanation": "System test: end-to-end testing of complete system."
          },
          {
            "question": "Black-box testing:",
            "options": ["Requires source code", "Tests without knowing internal logic", "Only unit testing", "Requires debugging"],
            "correctAnswer": "Tests without knowing internal logic",
            "explanation": "Black-box: test functionality without internal knowledge."
          },
          {
            "question": "White-box testing requires:",
            "options": ["No knowledge of code", "Knowledge of internal code structure", "Only UI testing", "No programming"],
            "correctAnswer": "Knowledge of internal code structure",
            "explanation": "White-box: test with knowledge of code implementation."
          },
          {
            "question": "Boundary value testing checks:",
            "options": ["Random values", "Valid and invalid values at boundaries", "Performance", "Security only"],
            "correctAnswer": "Valid and invalid values at boundaries",
            "explanation": "Boundary test: test min, max, just inside/outside boundaries."
          },
          {
            "question": "Equivalence partitioning divides:",
            "options": ["Test team", "Input domain into classes", "Modules", "Documentation"],
            "correctAnswer": "Input domain into classes",
            "explanation": "Equivalence: group similar inputs; one test per class."
          },
          {
            "question": "Regression testing is performed:",
            "options": ["Initially only", "After changes to ensure no new failures", "Never needed", "Once per year"],
            "correctAnswer": "After changes to ensure no new failures",
            "explanation": "Regression test: retest to ensure changes don't break existing functionality."
          },
          {
            "question": "QA differs from QC:",
            "options": ["Same thing", "QA: process, QC: product verification", "QC: more important", "QA: only testing"],
            "correctAnswer": "QA: process, QC: product verification",
            "explanation": "QA: quality assurance (process); QC: quality control (testing product)."
          },
          {
            "question": "Code coverage measures:",
            "options": ["Team efficiency", "Percentage of code tested", "Bug severity", "Execution time"],
            "correctAnswer": "Percentage of code tested",
            "explanation": "Code coverage: % of code executed during tests."
          }
        ]
      },
      {
        "id": 4,
        "title": "Software Project Management and Metrics",
        "description": "Project scope, schedule, cost, resource planning, team structure and roles, stakeholder management, communication plan, earned value management (EVM), metrics (LOC, function points, complexity), productivity measurement, quality metrics, schedule adherence, cost control, project closure, lessons learned.",
        "videos": [
          {
            "title": "Software Project Management",
            "url": "https://www.youtube.com/playlist?list=PLsyeobzWxZZqO7Bvjxrt4IkfBd0FN1Q9h"
          }
        ],
        "externalLinks": [
          {
            "title": "Project Management - GeeksforGeeks",
            "url": "https://www.geeksforgeeks.org/software-project-management/"
          },
          {
            "title": "Project Management Metrics - Tutorialspoint",
            "url": "https://www.tutorialspoint.com/software_project_management/"
          }
        ],
        "mcqs": [
          {
            "question": "Project scope management includes:",
            "options": ["Task assignment only", "Define what is/isn't included in project", "Budget control", "Testing plan"],
            "correctAnswer": "Define what is/isn't included in project",
            "explanation": "Scope: clear boundaries of what will/won't be delivered."
          },
          {
            "question": "Critical Path Method (CPM):",
            "options": ["Shortest route only", "Identifies longest task sequence affecting schedule", "Budget planning", "Risk assessment"],
            "correctAnswer": "Identifies longest task sequence affecting schedule",
            "explanation": "CPM: finds critical activities; delay impacts project completion."
          },
          {
            "question": "Earned Value Management (EVM):",
            "options": ["Team salary tracking", "Integrates schedule, cost, scope for performance", "Quality control", "Risk management"],
            "correctAnswer": "Integrates schedule, cost, scope for performance",
            "explanation": "EVM: compares planned work, actual work, actual cost."
          },
          {
            "question": "Function points measure:",
            "options": ["Lines of code", "Functional requirements complexity", "Execution speed", "Bug count"],
            "correctAnswer": "Functional requirements complexity",
            "explanation": "Function points: size metric based on functionality, independent of language."
          },
          {
            "question": "Stakeholder analysis identifies:",
            "options": ["Competitors", "Interested parties and their needs", "Bugs", "Performance issues"],
            "correctAnswer": "Interested parties and their needs",
            "explanation": "Stakeholders: anyone affected by/involved in project."
          },
          {
            "question": "Risk management process:",
            "options": ["Ignore risks", "Identify, analyze, respond, monitor", "Report only", "No prevention"],
            "correctAnswer": "Identify, analyze, respond, monitor",
            "explanation": "Risk: identify → assess → plan response → monitor."
          },
          {
            "question": "Productivity metrics include:",
            "options": ["Team size only", "Output per resource per time", "Budget only", "Schedule only"],
            "correctAnswer": "Output per resource per time",
            "explanation": "Productivity: work completed per unit of resource per time."
          },
          {
            "question": "Defect density is:",
            "options": ["Total defects", "Defects per unit size (KLOC)", "Defect cost", "Critical bugs"],
            "correctAnswer": "Defects per unit size (KLOC)",
            "explanation": "Defect density: number of defects per 1000 lines of code."
          },
          {
            "question": "Schedule performance index (SPI):",
            "options": ["Earned value/planned value", "Earned value/actual cost", "Actual cost/planned cost", "Defects/tasks"],
            "correctAnswer": "Earned value/planned value",
            "explanation": "SPI: ratio of work performed to work planned."
          },
          {
            "question": "Lessons learned documentation:",
            "options": ["Kept secret", "Recorded for future projects", "Discarded", "Only verbal"],
            "correctAnswer": "Recorded for future projects",
            "explanation": "Lessons learned: capture successes/failures for organizational knowledge."
          }
        ]
      }
    ]
  }
];
