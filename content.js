/*
  MVG Math Website: all content lives in this file.

  Links: a path like "MVG Y9 Math 26.27/..." points to a file on the Desktop
  (filesBase is prepended). A full https:// link (e.g. Google Drive) is used as is.
  Leave a link as "" to show it as "Coming soon".

  Resource keys, shown in this order on every lesson and material row:
    notes, solutions, assignment, review, practice, investigation,
    answers, markscheme, slides
  Only put student-facing files here: never tests or quizzes themselves.

  Unit status: "done", "now" or "next".
  upcoming: one line per date. Use "week" (the Monday of that week) for lessons and tests,
  or "date" for an exact due date. Past dates hide themselves.
*/

const SITE = {
  updated: "12 Nov 2026",
  draft: false,
  filesBase: "../",

  teacher: {
    name: "Mr. Van Genderen",
    school: "CCS",
    email: "mvangenderen@ccsbali.com",
    helpTimes: "Monday and Wednesday after school, or by appointment",
    toddle: "Grades are on Toddle.",
    howToGetHelp: [
      "Check the lesson's worked solutions and answers first.",
      "Ask a classmate, then ask me in class.",
      "Still stuck? Come to help time or email me with the question number and what you tried."
    ],
    expectations: [
      "Bring your notes packet, a pencil and your calculator to every lesson.",
      "Do the assignment for each lesson, then check it with the answers.",
      "Missed a lesson? Find it on this site and catch up before the next one."
    ]
  },

  classes: [
    /* ───────────────────────── YEAR 9 ───────────────────────── */
    {
      id: "y9",
      name: "Year 9 Math",
      course: "Pre-IB Year 3",
      upcoming: [
        { week: "2026-11-23", what: "Unit 2 review, then Unit 2 test (Friday 27 Nov)" },
        { week: "2026-11-30", what: "Unit 3 begins" },
        { week: "2026-12-14", what: "Unit 3 mid-unit quiz (3.1–3.4)" }
      ],
      units: [
        {
          id: "unit-1", code: "Unit 1", title: "Real Numbers, Powers and Roots", status: "done", dates: "Term 1",
          materials: [
            { title: "Notes and assignments (1.1–1.6)",
              notes: "MVG Pre-IB Drafts/Y9 Math/Y9 Unit 1 - Real Numbers, Powers and Roots/Y9 Unit 1 Notes/Y9 Unit 1 Notes (all).pdf",
              solutions: "MVG Y9 Math 26.27/Student Files/Unit 1 Real Numbers, Powers and Roots/Unit 1 Notes - Worked solutions.pdf",
              assignment: "MVG Pre-IB Drafts/Y9 Math/Y9 Unit 1 - Real Numbers, Powers and Roots/Y9 Unit 1 Assignments/Y9 Unit 1 Assignments (all).pdf",
              answers: "MVG Y9 Math 26.27/Student Files/Unit 1 Real Numbers, Powers and Roots/Unit 1 Assignments - Answer key.pdf" },
            { title: "Quiz review (1.1–1.4)",
              review: "MVG Pre-IB Drafts/Y9 Math/Y9 Unit 1 - Real Numbers, Powers and Roots/Y9 Unit 1 Assessments/Y9 Unit 1 Quiz Review.pdf",
              answers: "MVG Y9 Math 26.27/Student Files/Unit 1 Real Numbers, Powers and Roots/Unit 1 Quiz Review - Answer key.pdf" },
            { title: "Unit review",
              review: "MVG Pre-IB Drafts/Y9 Math/Y9 Unit 1 - Real Numbers, Powers and Roots/Y9 Unit 1 Assessments/Y9 Unit 1 Unit Review.pdf",
              answers: "MVG Y9 Math 26.27/Student Files/Unit 1 Real Numbers, Powers and Roots/Unit 1 Unit Review - Answer key.pdf" },
            { title: "Slides: whole unit", slides: "MVG Pre-IB Drafts/Y9 Math/Y9 Unit 1 - Real Numbers, Powers and Roots/Y9 Unit 1 Slides/Y9 Unit 1 Slides.pdf" }
          ],
          lessons: [
            { code: "1.1", title: "Index Notation and Laws of Indices", ican: [
              "write repeated multiplication in index form, such as 5 × 5 × 5 × 5 = 5⁴",
              "use the product, quotient and power laws, such as 3⁴ × 3² = 3⁶ and (2³)² = 2⁶",
              "explain why 7⁰ = 1 and write negative powers as fractions, such as 2⁻³ = 1/8"] },
            { code: "1.2", title: "Squares, Cubes and Roots", ican: [
              "find square roots and cube roots of perfect squares and cubes, such as √144 and ∛125",
              "explain why a positive number has two square roots but only one cube root",
              "solve equations such as x² = 49 and x³ = −8"] },
            { code: "1.3", title: "Rational and Irrational Numbers", ican: [
              "sort numbers into ℕ, ℤ, ℚ and ℝ, and explain why every integer is rational",
              "explain why numbers such as √2 and π are irrational but 0.333… is rational",
              "estimate an irrational number such as √20 and place it on a number line"] },
            { code: "1.4", title: "Simplifying Surds", ican: [
              "simplify a surd using a square factor, such as √50 = 5√2",
              "add and subtract like surds, such as 3√2 + 5√2 = 8√2",
              "multiply simple surds, such as √3 × √12 and 2√5 × 3√2"] },
            { code: "1.5", title: "Scientific Notation", ican: [
              "write very large and very small numbers in scientific notation, a × 10ᵏ",
              "multiply and divide numbers in scientific notation, with and without a calculator",
              "compare numbers by their order of magnitude, such as 3 × 10⁸ and 4 × 10⁵"] },
            { code: "1.6", title: "Repeated Change with Powers", ican: [
              "model repeated percent change with a multiplier and a power, such as 200 × 1.05³",
              "model repeated doubling or halving with powers, such as 50 × 2ⁿ",
              "explain what the exponent means in context, such as the number of years or halvings"] }
          ].map(l => {
            const n = l.code.replace(".", ".0"), d = "MVG Pre-IB Drafts/Y9 Math/Y9 Unit 1 - Real Numbers, Powers and Roots/Y9 Unit 1 ", s = "MVG Y9 Math 26.27/Student Files/Unit 1 Real Numbers, Powers and Roots/";
            return { ...l,
              notes: `${d}Notes/Y9 ${n} Notes.pdf`,
              solutions: `${s}${n} Notes - Worked solutions.pdf`,
              assignment: `${d}Assignments/Y9 ${n} Assignment.pdf`,
              answers: `${s}${n} Assignment - Answer key.pdf` };
          })
        },
        {
          id: "unit-2", code: "Unit 2", title: "Equations, Systems and Sequences", status: "now", dates: "19 Oct – 27 Nov",
          materials: [
            { title: "Part 1 packet (2.1–2.4)",
              notes: "MVG Pre-IB Drafts/Y9 Math/Y9 Unit 2 - Equations, Systems and Sequences/Y9 Unit 2 Notes/Y9 Unit 2 Notes Part 1.pdf",
              solutions: "MVG Y9 Math 26.27/Student Files/Unit 2 Equations, Systems and Sequences/Unit 2 Notes Part 1 - Worked solutions.pdf",
              assignment: "MVG Pre-IB Drafts/Y9 Math/Y9 Unit 2 - Equations, Systems and Sequences/Y9 Unit 2 Assignments/Y9 Unit 2 Assignments Part 1.pdf",
              answers: "MVG Y9 Math 26.27/Student Files/Unit 2 Equations, Systems and Sequences/Unit 2 Assignments Part 1 - Answer key.pdf" },
            { title: "Part 2 packet (2.5–2.8)",
              notes: "MVG Pre-IB Drafts/Y9 Math/Y9 Unit 2 - Equations, Systems and Sequences/Y9 Unit 2 Notes/Y9 Unit 2 Notes Part 2.pdf",
              solutions: "MVG Y9 Math 26.27/Student Files/Unit 2 Equations, Systems and Sequences/Unit 2 Notes Part 2 - Worked solutions.pdf",
              assignment: "MVG Pre-IB Drafts/Y9 Math/Y9 Unit 2 - Equations, Systems and Sequences/Y9 Unit 2 Assignments/Y9 Unit 2 Assignments Part 2.pdf",
              answers: "MVG Y9 Math 26.27/Student Files/Unit 2 Equations, Systems and Sequences/Unit 2 Assignments Part 2 - Answer key.pdf" },
            { title: "Quiz review (2.1–2.4)",
              review: "MVG Pre-IB Drafts/Y9 Math/Y9 Unit 2 - Equations, Systems and Sequences/Y9 Unit 2 Assessments/Y9 Unit 2 Quiz Review.pdf",
              answers: "MVG Y9 Math 26.27/Student Files/Unit 2 Equations, Systems and Sequences/Unit 2 Quiz Review - Answer key.pdf" },
            { title: "Unit review",
              review: "MVG Pre-IB Drafts/Y9 Math/Y9 Unit 2 - Equations, Systems and Sequences/Y9 Unit 2 Assessments/Y9 Unit 2 Unit Review.pdf",
              answers: "MVG Y9 Math 26.27/Student Files/Unit 2 Equations, Systems and Sequences/Unit 2 Unit Review - Answer key.pdf" },
            { title: "Slides: whole unit", slides: "MVG Pre-IB Drafts/Y9 Math/Y9 Unit 2 - Equations, Systems and Sequences/Y9 Unit 2 Slides/Y9 Unit 2 Slides.pdf" }
          ],
          lessons: [
            { code: "2.1", title: "Equations with Variables on Both Sides", ican: [
              "solve equations with the variable on both sides, such as 5x − 3 = 2x + 9",
              "solve equations with brackets and fractions, such as 3(x − 2) = (x + 4)/2",
              "decide whether an equation has one solution, no solution or infinitely many solutions"] },
            { code: "2.2", title: "Equations from Real-world and Geometric Contexts", ican: [
              "write and solve an equation from a word problem",
              "write and solve an equation from a diagram, such as angles or a perimeter",
              "check that my answer makes sense in the context"] },
            { code: "2.3", title: "Rearranging Formulae, Including Powers and Roots", ican: [
              "rearrange a formula to change its subject, such as v = u + at to make a the subject",
              "rearrange formulae with brackets or fractions, such as A = h(a + b)",
              "rearrange formulae with squares and roots, such as making r the subject of A = πr²"] },
            { code: "2.4", title: "Compound Inequalities and Interval Notation", ican: [
              "solve linear inequalities and show the solution on a number line",
              "solve compound inequalities such as −3 < 2x + 1 ≤ 7",
              "write a solution set in interval notation, such as (2, 5] for 2 < x ≤ 5"] },
            { code: "2.5", title: "Solving Systems by Graphing", ican: [
              "graph two linear equations on the same axes",
              "find the solution of a system from the point where the lines meet",
              "explain what the intersection means in context, and what parallel lines tell me"] },
            { code: "2.6", title: "Solving Systems by Substitution and Elimination", ican: [
              "solve a system of two equations by substitution",
              "solve a system by elimination, multiplying an equation first if needed",
              "check a solution by substituting it into both equations"] },
            { code: "2.7", title: "Modelling with Systems", ican: [
              "define two variables and write a system from a word problem",
              "solve price, mixture and break-even problems with a system",
              "choose a method for a system and explain why it suits it",
              "explain what the solution means in context, with units"] },
            { code: "2.8", title: "Arithmetic Sequences and the nth Term", ican: [
              "find the common difference and the nth term of an arithmetic sequence, such as uₙ = 4n + 3",
              "explain why uₙ = u₁ + (n − 1)d gives any term",
              "plot the terms as points (n, uₙ) and explain why they lie on a straight line",
              "switch between the term-to-term rule and the position-to-term rule"] }
          ].map(l => {
            const n = l.code.replace(".", ".0"), d = "MVG Pre-IB Drafts/Y9 Math/Y9 Unit 2 - Equations, Systems and Sequences/Y9 Unit 2 ", s = "MVG Y9 Math 26.27/Student Files/Unit 2 Equations, Systems and Sequences/";
            return { ...l,
              notes: `${d}Notes/Y9 ${n} Notes.pdf`,
              solutions: `${s}${n} Notes - Worked solutions.pdf`,
              assignment: `${d}Assignments/Y9 ${n} Assignment.pdf`,
              answers: `${s}${n} Assignment - Answer key.pdf`,
              extension: `${d}Extension/Y9 ${n} Extension.pdf` };
          })
        },
        {
          id: "unit-3", code: "Unit 3", title: "Linear Functions and Models", status: "next", dates: "30 Nov – 1 Feb",
          lessons: [
            { code: "3.1", title: "What Is a Function? Function Notation" },
            { code: "3.2", title: "Domain and Range" },
            { code: "3.3", title: "Describing and Sketching Graphs" },
            { code: "3.4", title: "Gradient and Intercept as Rate and Initial Value" },
            { code: "3.5", title: "The Equation y = mx + c" },
            { code: "3.6", title: "Linear Models from Tables and Points" },
            { code: "3.7", title: "Equations of Lines and Parallel Lines" },
            { code: "3.8", title: "Additive and Multiplicative Change" }
          ]
        },
        {
          id: "unit-4", code: "Unit 4", title: "Similarity, Pythagoras and Transformations", status: "next", dates: "Feb – Mar",
          lessons: [
            { code: "4.1", title: "Transformations and Sequences of Transformations" },
            { code: "4.2", title: "Enlargement on the Coordinate Plane" },
            { code: "4.3", title: "Congruence and Similarity" },
            { code: "4.4", title: "Angle Sums, Parallel Lines and Similar Triangles" },
            { code: "4.5", title: "Pythagoras' Theorem and Its Converse" },
            { code: "4.6", title: "Pythagoras in Two and Three Dimensions" },
            { code: "4.7", title: "Distance and Midpoint" },
            { code: "4.8", title: "Volume of Cones and Spheres" }
          ]
        },
        {
          id: "unit-5", code: "Unit 5", title: "Statistics and Correlation", status: "next", dates: "Mar – Apr",
          lessons: [
            { code: "5.1", title: "Grouped Data and Histograms" },
            { code: "5.2", title: "Scatter Graphs and Association" },
            { code: "5.3", title: "Correlation and Lines of Best Fit by Eye" },
            { code: "5.4", title: "Interpreting Linear Models" },
            { code: "5.5", title: "Inquiry: Modelling a Relationship with Data" }
          ]
        },
        {
          id: "unit-6", code: "Unit 6", title: "Sets, Two-way Tables and Probability", status: "next", dates: "Apr – May",
          lessons: [
            { code: "6.1", title: "Set Notation and Venn Diagrams with Three Sets" },
            { code: "6.2", title: "Two-way Tables" },
            { code: "6.3", title: "Probabilities from Venn Diagrams and Two-way Tables" },
            { code: "6.4", title: "Two-stage Events and Tree Diagrams" }
          ]
        }
      ]
    },

    /* ───────────────────────── YEAR 10 STANDARD ───────────────────────── */
    {
      id: "y10",
      name: "Year 10 Standard",
      course: "Pre-IB Year 4",
      upcoming: [
        { week: "2026-11-09", what: "Unit 2 review" },
        { week: "2026-11-16", what: "Unit 2 test (Monday), then Unit 3 Function Families and Models begins" },
        { week: "2026-11-30", what: "Unit 3 mid-unit quiz (3.1–3.4)" },
        { week: "2026-12-14", what: "Unit 3 test" }
      ],
      tools: [
        { label: "Formula booklet", link: "MVG Pre-IB Drafts/Y10 Math/Formula Booklet/Y10 Formula Booklet.pdf" },
        { label: "Getting to know your TI-Nspire", link: "" }
      ],
      units: [
        {
          id: "unit-1", code: "Unit 1", title: "Real Numbers, Indices and Accuracy", status: "done", dates: "Term 1",
          materials: [
            { title: "Unit packet",
              notes: "MVG Y10 Standard 26.27/Student Files/Unit 1 Real Numbers, Indices and Accuracy/Unit 1 Notes.pdf",
              solutions: "MVG Y10 Standard 26.27/Student Files/Unit 1 Real Numbers, Indices and Accuracy/Unit 1 Notes - Worked solutions.pdf",
              assignment: "MVG Y10 Standard 26.27/Student Files/Unit 1 Real Numbers, Indices and Accuracy/Unit 1 Assignments.pdf",
              answers: "MVG Y10 Standard 26.27/Student Files/Unit 1 Real Numbers, Indices and Accuracy/Unit 1 Assignments - Answer key.pdf",
              slides: "MVG Y10 Standard 26.27/Unit 1 Real Numbers, Indices and Accuracy/Y10 Standard 1.Presentation.pdf" },
            { title: "Quiz review (1.1–1.3)",
              review: "MVG Y10 Standard 26.27/Unit 1 Real Numbers, Indices and Accuracy/Assessments/MVG Y10 1.123 Review.pdf",
              answers: "MVG Y10 Standard 26.27/Unit 1 Real Numbers, Indices and Accuracy/Assessments/MVG Y10 1.123 Review KEY.pdf" },
            { title: "Unit review", review: "MVG Y10 Standard 26.27/Unit 1 Real Numbers, Indices and Accuracy/Assessments/MVG Y10 Unit 1 Review.pdf" }
          ],
          lessons: []
        },
        {
          id: "unit-2", code: "Unit 2", title: "Algebra", status: "done", dates: "Term 1 – 16 Nov",
          materials: [
            { title: "Unit packet",
              notes: "MVG Y10 Standard 26.27/Y10 Standard Unit 2 Algebra (2026-27 version)/Notes/Student Versions/Unit 2 Algebra - Notes Student.pdf",
              solutions: "MVG Y10 Standard 26.27/Student Files/Unit 2 Algebra/Unit 2 Notes - Worked solutions.pdf",
              assignment: "MVG Y10 Standard 26.27/Y10 Standard Unit 2 Algebra (2026-27 version)/Assignments/Student Versions/Unit 2 Algebra - Assignments Student.pdf",
              answers: "MVG Y10 Standard 26.27/Student Files/Unit 2 Algebra/Unit 2 Assignments - Answer key.pdf",
              slides: "MVG Y10 Standard 26.27/Y10 Standard Unit 2 Algebra (2026-27 version)/Slides/Y10 Unit 2 Algebra SLIDES.pdf" },
            { title: "Quiz review (2.1–2.4)",
              review: "MVG Y10 Standard 26.27/Y10 Standard Unit 2 Algebra (2026-27 version)/Reviews/Student Versions/Unit 2 Algebra - Quiz Review Student.pdf",
              answers: "MVG Y10 Standard 26.27/Student Files/Unit 2 Algebra/Unit 2 Quiz Review - Answer key.pdf" },
            { title: "Unit review",
              review: "MVG Y10 Standard 26.27/Y10 Standard Unit 2 Algebra (2026-27 version)/Reviews/Student Versions/Unit 2 Algebra - Unit Review Student.pdf",
              answers: "MVG Y10 Standard 26.27/Student Files/Unit 2 Algebra/Unit 2 Unit Review - Answer key.pdf" }
          ],
          lessons: [
            { code: "2.1", title: "Algebraic Manipulation", ican: ["simplify expressions, expand a single bracket and factorise"] },
            { code: "2.2", title: "Expanding Double Brackets", ican: ["expand two brackets and simplify"] },
            { code: "2.3", title: "Factorising Quadratics", ican: ["factorise quadratics such as x² + 5x + 6"] },
            { code: "2.4", title: "Solving Quadratic Equations", ican: ["solve quadratic equations by factorising"] },
            { code: "2.5", title: "Arithmetic Sequences", ican: ["find the common difference, next terms and nth term"] },
            { code: "2.6", title: "Geometric Sequences", ican: ["find the common ratio and the next terms"] },
            { code: "2.7", title: "Finding Sequence Rules", ican: ["find and use the rule for a linear sequence"] },
            { code: "2.8", title: "Rearranging Formulae", ican: ["change the subject of a formula"] },
            { code: "2.9", title: "Algebraic Proof", ican: ["use algebra to show a number fact is always true"] }
          ]
        },
        {
          id: "unit-3", code: "Unit 3", title: "Function Families and Models", status: "now", dates: "16 Nov – 14 Dec",
          materials: [
            { title: "Notes and assignments (3.1–3.7)",
              notes: "MVG Pre-IB Drafts/Y10 Math/Standard/Y10 Std Unit 3 - Function Families and Models/Y10 Std Unit 3 Notes/Y10 Std Unit 3 Notes (all).pdf",
              solutions: "MVG Y10 Standard 26.27/Student Files/Unit 3 Function Families and Models/Unit 3 Notes - Worked solutions.pdf",
              assignment: "MVG Pre-IB Drafts/Y10 Math/Standard/Y10 Std Unit 3 - Function Families and Models/Y10 Std Unit 3 Assignments/Y10 Std Unit 3 Assignments (all).pdf",
              answers: "MVG Y10 Standard 26.27/Student Files/Unit 3 Function Families and Models/Unit 3 Assignments - Answer key.pdf" },
            { title: "Quiz review (3.1–3.4)",
              review: "MVG Pre-IB Drafts/Y10 Math/Standard/Y10 Std Unit 3 - Function Families and Models/Y10 Std Unit 3 Assessments/Y10 Std Unit 3 Quiz Review.pdf",
              answers: "MVG Y10 Standard 26.27/Student Files/Unit 3 Function Families and Models/Unit 3 Quiz Review - Answer key.pdf" },
            { title: "Unit review",
              review: "MVG Pre-IB Drafts/Y10 Math/Standard/Y10 Std Unit 3 - Function Families and Models/Y10 Std Unit 3 Assessments/Y10 Std Unit 3 Unit Review.pdf",
              answers: "MVG Y10 Standard 26.27/Student Files/Unit 3 Function Families and Models/Unit 3 Unit Review - Answer key.pdf" },
            { title: "Slides: whole unit", slides: "MVG Pre-IB Drafts/Y10 Math/Standard/Y10 Std Unit 3 - Function Families and Models/Y10 Std Unit 3 Slides/Y10 Std Unit 3 Slides.pdf" }
          ],
          lessons: [
            { code: "3.1", title: "Reading Key Features of Functions", ican: [
              "read the zeros, intercepts and maximum or minimum point of a graph and say what they mean in context",
              "describe where a function is increasing or decreasing, such as increasing for x < 2",
              "state a sensible domain and range for a function in context, such as 0 ≤ t ≤ 6",
              "calculate an average rate of change between two points and explain it with units"] },
            { code: "3.2", title: "Graphing Calculator and Software Skills", ican: [
              "graph a function on the GDC and choose a window that shows its key features",
              "find zeros, maximum and minimum points and points of intersection with the GDC, to 3 s.f.",
              "graph two models on one screen and use them to answer a question, such as when one overtakes the other"] },
            { code: "3.3", title: "Graphing Quadratic Functions", ican: [
              "describe a parabola: its vertex, axis of symmetry, y-intercept and whether it opens up or down",
              "sketch y = a(x − p)(x − q) from its zeros, and find its vertex",
              "read the vertex of y = a(x − h)² + k, and find the vertex of y = ax² + bx + c using x = −b/(2a)",
              "solve f(x) = g(x) with the GDC by finding the points of intersection"] },
            { code: "3.4", title: "Modelling with Quadratic Functions", ican: [
              "write a quadratic model for a maximum-area problem, such as a fence of fixed length",
              "use a projectile model to find the greatest height and when it lands",
              "explain what the vertex and zeros mean in context and state a sensible domain"] },
            { code: "3.5", title: "Exponential Functions", ican: [
              "graph y = a × bˣ from a table of values and on the GDC",
              "identify the initial value a and say whether b gives growth or decay",
              "describe the horizontal asymptote y = 0 and state the range"] },
            { code: "3.6", title: "Exponential Models from Context", ican: [
              "decide whether a table shows linear, quadratic or exponential change, using differences or ratios",
              "explain why exponential growth eventually overtakes linear growth",
              "write an exponential model such as P = 5000 × 1.03ᵗ from a description and use it to predict",
              "explain what a factor such as 0.92 means (8% lost each year) and find when a model reaches a value with the GDC"] },
            { code: "3.7", title: "Piecewise and Absolute-value Functions", ican: [
              "evaluate a piecewise function, such as a taxi fare or an electricity tariff",
              "graph a piecewise function with open and closed endpoints",
              "graph y = |x − 3| and explain it as the distance from 3",
              "solve |x − a| = d using distance, such as |x − 3| = 5"] }
          ].map(l => {
            const n = l.code.replace(".", ".0"), d = "MVG Pre-IB Drafts/Y10 Math/Standard/Y10 Std Unit 3 - Function Families and Models/Y10 Std Unit 3 ", s = "MVG Y10 Standard 26.27/Student Files/Unit 3 Function Families and Models/";
            return { ...l,
              notes: `${d}Notes/Y10 Std ${n} Notes.pdf`,
              solutions: `${s}${n} Notes - Worked solutions.pdf`,
              assignment: `${d}Assignments/Y10 Std ${n} Assignment.pdf`,
              answers: `${s}${n} Assignment - Answer key.pdf` };
          })
        },
        {
          id: "unit-4", code: "Unit 4", title: "Geometry and Trigonometry", status: "next", dates: "Dec – Feb",
          lessons: [
            { code: "4.1", title: "Congruence and Similarity: Checking with Algebra" },
            { code: "4.2", title: "Trigonometric Ratios" },
            { code: "4.3", title: "Finding Missing Sides and Angles" },
            { code: "4.4", title: "Elevation, Depression and Bearings" },
            { code: "4.5", title: "Parallel and Perpendicular Lines" },
            { code: "4.6", title: "Coordinate Geometry: Distance, Midpoint and Gradient" },
            { code: "4.7", title: "Arc Length and Sector Area" },
            { code: "4.8", title: "Surface Area and Composite Solids" }
          ]
        },
        {
          id: "unit-5", code: "Unit 5", title: "Statistics: Distributions and Models", status: "next", dates: "Feb – Mar",
          lessons: [
            { code: "5.1", title: "Comparing Distributions" },
            { code: "5.2", title: "Cumulative Frequency and Percentiles" },
            { code: "5.3", title: "Standard Deviation and IQR" },
            { code: "5.4", title: "Fitting Models to Data with Technology" },
            { code: "5.5", title: "Surveys, Experiments and Observational Studies" }
          ]
        },
        {
          id: "unit-6", code: "Unit 6", title: "Probability Rules", status: "next", dates: "Mar – Apr",
          lessons: [
            { code: "6.1", title: "Addition Rule and Mutually Exclusive Events" },
            { code: "6.2", title: "Multiplication Rule and Dependent Events" },
            { code: "6.3", title: "Conditional Probability" },
            { code: "6.4", title: "Independence" }
          ]
        }
      ]
    },

    /* ───────────────────────── YEAR 11 EXTENDED ───────────────────────── */
    {
      id: "y11",
      name: "Year 11 Extended",
      course: "Pre-IB Year 5",
      upcoming: [
        { week: "2026-11-23", what: "Probability quiz (2.7–2.12)" },
        { week: "2026-12-14", what: "Term 2 review, then Term 2 test (Units 1–2)" }
      ],
      tools: [
        { label: "Formula booklet", link: "MVG Pre-IB Drafts/Y11 Math/Formula Booklet/Y11 Formula Booklet.pdf" },
        { label: "TI-Nspire scavenger hunt", link: "MVG Y11 Extended 26.27/Resources/MVG TI NSpire Scavenger Hunt.pdf" },
        { label: "Getting to know your TI-Nspire", link: "" }
      ],
      units: [
        {
          id: "unit-1", code: "Unit 1", title: "Functions", status: "done", dates: "Term 1",
          materials: [
            { title: "Quiz review (1.1–1.3)", review: "MVG Y11 Extended 26.27/Unit 1 (Ch 23, 28, 30, 32)/Assessments/MVG Y11 1.123 Quiz Review.pdf" },
            { title: "Quiz review (1.4–1.6)", review: "MVG Y11 Extended 26.27/Unit 1 (Ch 23, 28, 30, 32)/Assessments/MVG Y11 1.456 Quiz REVIEW.pdf" },
            { title: "Practice quiz (1.7–1.9)",
              practice: "MVG Y11 Extended 26.27/Unit 1 (Ch 23, 28, 30, 32)/Assessments/MVG Y11 1.789 Practice Quiz.pdf",
              answers: "MVG Y11 Extended 26.27/Unit 1 (Ch 23, 28, 30, 32)/Assessments/MVG Y11 1.789 Practice Quiz KEY.pdf" },
            { title: "Term 1 practice test",
              practice: "MVG Y11 Extended 26.27/Term 1 Test/Year 11 Term 1 Practice Test.pdf",
              answers: "MVG Y11 Extended 26.27/Term 1 Test/Year 11 Term 1 Practice Test - Answer Key.pdf" }
          ],
          lessons: [
            { code: "1.1", title: "Cubic Functions (23A)", notes: "MVG Y11 Extended 26.27/Unit 1 (Ch 23, 28, 30, 32)/MVG Y11 1.1 Notes.pdf" },
            { code: "1.2", title: "Inverse Functions (23B)", notes: "MVG Y11 Extended 26.27/Unit 1 (Ch 23, 28, 30, 32)/MVG Y11 1.2 Notes.pdf" },
            { code: "1.3", title: "Graphing with a Calculator (23C)", notes: "MVG Y11 Extended 26.27/Unit 1 (Ch 23, 28, 30, 32)/MVG Y11 1.3 Notes.pdf" },
            { code: "1.4", title: "Rational Exponents (28A)", notes: "MVG Y11 Extended 26.27/Unit 1 (Ch 23, 28, 30, 32)/MVG Y11 1.456 Notes.pdf" },
            { code: "1.5", title: "Exponential Functions (28B)", notes: "MVG Y11 Extended 26.27/Unit 1 (Ch 23, 28, 30, 32)/MVG Y11 1.456 Notes.pdf" },
            { code: "1.6", title: "Exponential Equations (28C)", notes: "MVG Y11 Extended 26.27/Unit 1 (Ch 23, 28, 30, 32)/MVG Y11 1.456 Notes.pdf" },
            { code: "1.7–1.9", title: "Variation and Power Modelling (Ch 30)", notes: "MVG Y11 Extended 26.27/Unit 1 (Ch 23, 28, 30, 32)/MVG Y11 1.789 Notes.pdf" },
            { code: "1.12", title: "Solving and Graphing Inequalities (Ch 32)", notes: "MVG Y11 Extended 26.27/Unit 1 (Ch 23, 28, 30, 32)/MVG Y11 1.1213 Notes.pdf" },
            { code: "1.13", title: "Regions Defined by More Than One Inequality (Ch 32)", notes: "MVG Y11 Extended 26.27/Unit 1 (Ch 23, 28, 30, 32)/MVG Y11 1.1213 Notes.pdf" }
          ]
        },
        {
          id: "unit-2", code: "Unit 2", title: "Outcomes and Patterns", status: "now", dates: "19 Oct – 18 Dec",
          materials: [
            { title: "Logarithms packet (2.1–2.3)",
              notes: "MVG Y11 Extended 26.27/Unit 2 Logarithms (Ch 31)/MVG Y11 2.123 Notes.pdf",
              solutions: "MVG Y11 Extended 26.27/Student Files/Unit 2 Outcomes and Patterns/Lessons 2.1–2.3 Notes - Worked solutions.pdf",
              answers: "MVG Y11 Extended 26.27/Student Files/Unit 2 Outcomes and Patterns/Lessons 2.1–2.3 Assignments - Answer key.pdf",
              slides: "MVG Y11 Extended 26.27/Unit 2 Logarithms (Ch 31)/Y11 2.1–2.3 Logarithms.pptx" },
            { title: "Logarithms packet (2.4–2.6)",
              notes: "MVG Y11 Extended 26.27/Unit 2 Logarithms (Ch 31)/MVG Y11 2.456 Notes.pdf",
              solutions: "MVG Y11 Extended 26.27/Student Files/Unit 2 Outcomes and Patterns/Lessons 2.4–2.6 Notes - Worked solutions.pdf",
              answers: "MVG Y11 Extended 26.27/Student Files/Unit 2 Outcomes and Patterns/Lessons 2.4–2.6 Assignments - Answer key.pdf",
              slides: "MVG Y11 Extended 26.27/Unit 2 Logarithms (Ch 31)/Y11 2.4–2.6 Logarithms.pptx" },
            { title: "Logarithms practice quiz (2.1–2.6)",
              practice: "MVG Y11 Extended 26.27/Unit 2 Logarithms (Ch 31)/MVG Y11 2.1-2.6 Practice Quiz.pdf",
              answers: "MVG Y11 Extended 26.27/Unit 2 Logarithms (Ch 31)/MVG Y11 2.1-2.6 Practice Quiz KEY.pdf" },
            { title: "Probability packet (2.7–2.9)",
              notes: "MVG Y11 Extended 26.27/Unit 2 Probability (Ch 25)/MVG Y11 2.789 Notes.pdf",
              solutions: "MVG Y11 Extended 26.27/Student Files/Unit 2 Outcomes and Patterns/Lessons 2.7–2.9 Notes - Worked solutions.pdf",
              answers: "MVG Y11 Extended 26.27/Student Files/Unit 2 Outcomes and Patterns/Lessons 2.7–2.9 Assignments - Answer key.pdf",
              slides: "MVG Y11 Extended 26.27/Unit 2 Probability (Ch 25)/Y11 2.7–2.9 Probability.pptx" },
            { title: "Probability packet (2.10–2.12)",
              notes: "MVG Y11 Extended 26.27/Unit 2 Probability (Ch 25)/MVG Y11 2.101112 Notes.pdf",
              solutions: "MVG Y11 Extended 26.27/Student Files/Unit 2 Outcomes and Patterns/Lessons 2.10–2.12 Notes - Worked solutions.pdf",
              answers: "MVG Y11 Extended 26.27/Student Files/Unit 2 Outcomes and Patterns/Lessons 2.10–2.12 Assignments - Answer key.pdf",
              slides: "MVG Y11 Extended 26.27/Unit 2 Probability (Ch 25)/Y11 2.10–2.12 Probability.pptx" },
            { title: "Probability practice quiz (2.7–2.12)",
              practice: "MVG Y11 Extended 26.27/Unit 2 Probability (Ch 25)/MVG Y11 2.7-2.12 Practice Quiz.pdf",
              answers: "MVG Y11 Extended 26.27/Unit 2 Probability (Ch 25)/MVG Y11 2.7-2.12 Practice Quiz KEY.pdf" }
          ],
          lessons: [
            ...[
              ["2.1", "Logarithms in Base a (31A)", "2.1–2.3"],
              ["2.2", "The Logarithmic Function (31B)", "2.1–2.3"],
              ["2.3", "Rules for Logarithms (31C)", "2.1–2.3"],
              ["2.4", "Logarithms in Base 10 (31D)", "2.4–2.6"],
              ["2.5", "Logarithmic Equations (31E)", "2.4–2.6"],
              ["2.6", "Exponential and Logarithmic Equations (31E)", "2.4–2.6"],
              ["2.7", "Introduction to Probability; Estimating Probability (25A–B)", "2.7–2.9"],
              ["2.8", "Two-way Tables; Expectation (25C–D)", "2.7–2.9"],
              ["2.9", "Combined Events; Theoretical Probability (25E–F)", "2.7–2.9"],
              ["2.10", "Compound Events (25G)", "2.10–2.12"],
              ["2.11", "Tree Diagrams; With and Without Replacement (25H–I)", "2.10–2.12"],
              ["2.12", "Mutually Exclusive Events; Mixed Questions (25J–K)", "2.10–2.12"]
            ].map(([code, title, part]) => {
              const s = "MVG Y11 Extended 26.27/Student Files/Unit 2 Outcomes and Patterns/";
              return { code, title,
                notes: `${s}${code} Notes.pdf`,
                solutions: `${s}${code} Notes - Worked solutions.pdf`,
                assignment: `${s}${code} Assignment.pdf`,
                answers: `${s}Lessons ${part} Assignments - Answer key.pdf` };
            }),
            { code: "2.13", title: "Circle Theorems (27A)" },
            { code: "2.14", title: "Cyclic Quadrilaterals (27B)" },
            { code: "2.15", title: "Number Sequences; Algebraic Rules (26A–B)" },
            { code: "2.16", title: "Geometric Sequences (26C)" },
            { code: "2.17", title: "The Difference Method (26D)" }
          ]
        },
        {
          id: "unit-3", code: "Unit 3", title: "Analysis and Using the Graphing Calculator", status: "next", dates: "Term 3",
          lessons: [
            { code: "3.1", title: "Correlation (22A)" },
            { code: "3.2", title: "Line of Best Fit by Eye (22B)" },
            { code: "3.3", title: "Linear Regression (22C)" },
            { code: "3.4", title: "Directed Line Segments; Vector Equality (24A–B)" },
            { code: "3.5", title: "Vector Addition and Subtraction (24C–D)" },
            { code: "3.6", title: "Vectors in Component Form (24E)" },
            { code: "3.7", title: "Scalar Multiplication; Parallel Vectors (24F–G)" },
            { code: "3.8", title: "Vectors in Geometry (24H)" },
            { code: "3.9", title: "GDC: Graphing Functions and Viewing Windows" },
            { code: "3.10", title: "GDC: Zeros, Intersections and Turning Points" },
            { code: "3.11", title: "GDC: Solving Equations Graphically" },
            { code: "3.12", title: "GDC: Data Lists, Scatter Plots and Regression Models" }
          ]
        },
        {
          id: "unit-4", code: "Unit 4", title: "Further Preparation", status: "next", dates: "Term 4",
          lessons: [
            { code: "4.1", title: "Quadratic Equations; the Null Factor Law (21A–B)" },
            { code: "4.2", title: "The Quadratic Formula (21C)" },
            { code: "4.3", title: "Quadratic Functions and Their Graphs (21D–E)" },
            { code: "4.4", title: "Axes Intercepts; Line of Symmetry and Vertex (21F–G)" },
            { code: "4.5", title: "Finding a Quadratic Function (21H)" },
            { code: "4.6", title: "Using Technology; Problem Solving (21I–J)" },
            { code: "4.7", title: "The Discriminant and the Nature of Roots" },
            { code: "4.8", title: "Quadratic Inequalities" },
            { code: "4.9", title: "Binomial Expansion and Pascal's Triangle" },
            { code: "4.10", title: "The Binomial Theorem and nCr" },
            { code: "4.11", title: "Finding a Specific Term or Coefficient" }
          ]
        }
      ]
    },

    /* ───────────────────────── YEAR 13 IB AA HL ───────────────────────── */
    {
      id: "y13",
      name: "Year 13 IB Math AA HL",
      course: "IB DP Analysis & Approaches HL",
      upcoming: [
        { week: "2026-11-16", what: "Review, then quiz on AHL 5.12–5.14 (Wednesday 18 Nov)" },
        { week: "2026-11-30", what: "Review, then quiz on AHL 5.15–5.18 (Friday 4 Dec)" },
        { date: "2026-12-11", what: "IA final submission due on ManageBac" }
      ],
      tools: [
        { label: "IB formula booklet", link: "" },
        { label: "Getting to know your TI-Nspire", link: "" }
      ],
      units: [
        {
          id: "topic-4", code: "Topic 4", title: "Statistics and Probability", status: "done", dates: "Term 1",
          materials: [
            { title: "Notes Part 1", notes: "MVG Y13 IBDP AA 26.27/Topic 4 HL 2026-27/Notes/IB Maths AA Unit 4 Student Notes (Part 1).pdf" },
            { title: "Notes Part 2", notes: "MVG Y13 IBDP AA 26.27/Topic 4 HL 2026-27/Notes/IB Maths AA Unit 4 Student Notes (Part 2).pdf" },
            { title: "Topic 4 review",
              review: "MVG Y13 IBDP AA 26.27/Topic 4 HL 2026-27/Review/Topic 4 Review - AA HL.pdf",
              markscheme: "MVG Y13 IBDP AA 26.27/Topic 4 HL 2026-27/Review/Topic 4 Review - AA HL - Markscheme_1.pdf" },
            { title: "Review set 2", review: "MVG Y13 IBDP AA 26.27/Topic 4 HL 2026-27/Review/Y13_AAHL_Unit4_Review_Set2.pdf" }
          ],
          lessons: [
            { code: "SL 4.1", title: "Data concepts and sampling" },
            { code: "SL 4.2", title: "Data presentation and cumulative frequency" },
            { code: "SL 4.3", title: "Summary statistics" },
            { code: "SL 4.4", title: "Correlation coefficient and regression foundations" },
            { code: "SL 4.5", title: "Probability concepts" },
            { code: "SL 4.6", title: "Probability diagrams and combined events" },
            { code: "SL 4.7", title: "Discrete random variables" },
            { code: "SL 4.8", title: "Binomial distribution" },
            { code: "SL 4.9", title: "Normal distribution" },
            { code: "SL 4.10", title: "Regression line and prediction" },
            { code: "SL 4.11", title: "Conditional probability and independence" },
            { code: "SL 4.12", title: "Standardization of normal variables" },
            { code: "AHL 4.13", title: "Bayes' theorem" },
            { code: "AHL 4.14", title: "Variance, continuous random variables and PDFs" }
          ]
        },
        {
          id: "topic-5", code: "Topic 5", title: "Calculus (HL)", status: "now", dates: "Term 2",
          materials: [
            { title: "Part 1 packets (AHL 5.12–5.14)",
              notes: "MVG Y13 IBDP AA 26.27/Topic 5 HL 2026-27/Y13 AA HL Topic 5 - Student Files/Part 1 (5.12-5.14) Notes packet.pdf",
              solutions: "MVG Y13 IBDP AA 26.27/Topic 5 HL 2026-27/Y13 AA HL Topic 5 - Student Files/Part 1 (5.12-5.14) Notes packet - Worked solutions.pdf",
              assignment: "MVG Y13 IBDP AA 26.27/Topic 5 HL 2026-27/Y13 AA HL Topic 5 - Student Files/Part 1 (5.12-5.14) Assignments packet.pdf",
              answers: "MVG Y13 IBDP AA 26.27/Topic 5 HL 2026-27/Y13 AA HL Topic 5 - Student Files/Part 1 (5.12-5.14) Assignments packet - Answer key.pdf" },
            { title: "Part 2 packets (AHL 5.15–5.17)",
              notes: "MVG Y13 IBDP AA 26.27/Topic 5 HL 2026-27/Y13 AA HL Topic 5 - Student Files/Part 2 (5.15-5.17) Notes packet.pdf",
              solutions: "MVG Y13 IBDP AA 26.27/Topic 5 HL 2026-27/Y13 AA HL Topic 5 - Student Files/Part 2 (5.15-5.17) Notes packet - Worked solutions.pdf",
              assignment: "MVG Y13 IBDP AA 26.27/Topic 5 HL 2026-27/Y13 AA HL Topic 5 - Student Files/Part 2 (5.15-5.17) Assignments packet.pdf",
              answers: "MVG Y13 IBDP AA 26.27/Topic 5 HL 2026-27/Y13 AA HL Topic 5 - Student Files/Part 2 (5.15-5.17) Assignments packet - Answer key.pdf" },
            { title: "Part 1 practice quiz (AHL 5.12–5.14)",
              practice: "MVG Y13 IBDP AA 26.27/Topic 5 HL 2026-27/Y13 AA HL Topic 5 - Student Files/Part 1 (5.12-5.14) Practice quiz.pdf",
              markscheme: "MVG Y13 IBDP AA 26.27/Topic 5 HL 2026-27/Y13 AA HL Topic 5 - Student Files/Part 1 (5.12-5.14) Practice quiz - Markscheme.pdf" },
            { title: "Part 2 practice quiz (AHL 5.15–5.18)",
              practice: "MVG Y13 IBDP AA 26.27/Topic 5 HL 2026-27/Y13 AA HL Topic 5 - Student Files/Part 2 (5.15-5.18) Practice quiz.pdf",
              markscheme: "MVG Y13 IBDP AA 26.27/Topic 5 HL 2026-27/Y13 AA HL Topic 5 - Student Files/Part 2 (5.15-5.18) Practice quiz - Markscheme.pdf" }
          ],
          lessons: [
            ...[
              ["AHL 5.12", "Continuity, differentiability and limits"],
              ["AHL 5.13", "L'Hôpital's rule and Maclaurin links"],
              ["AHL 5.14", "Implicit differentiation and related rates"],
              ["AHL 5.15", "Further derivatives and integrals"],
              ["AHL 5.16", "Integration by substitution and by parts"],
              ["AHL 5.17", "Areas and volumes of revolution"],
              ["AHL 5.18", "First order differential equations"]
            ].map(([code, title]) => {
              const n = code.replace("AHL ", "");
              const f = "MVG Y13 IBDP AA 26.27/Topic 5 HL 2026-27/Y13 AA HL Topic 5 - Student Files/AHL " + n;
              return {
                code, title,
                notes: f + " Notes.pdf",
                solutions: f + " Notes - Worked solutions.pdf",
                assignment: f + " Assignments.pdf",
                answers: f + " Assignments - Answer key.pdf",
                slides: f + " Slides.pdf"
              };
            }),
            { code: "AHL 5.19", title: "Maclaurin series" }
          ]
        }
      ]
    }
  ]
};
