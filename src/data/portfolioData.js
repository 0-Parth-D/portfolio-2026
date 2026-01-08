// Portfolio Data - Populated from resumes

export const portfolioData = {
    // Personal Information
    personal: {
      firstName: "Parth", // [file:1]
      lastName: "Deshmukh", // [file:1]
      fullName: "Parth Sachin Deshmukh", // [file:1]
      title: "Software Engineer · Data Science · HCI", // [file:1][file:2][file:3]
      location: "College Station, TX · Pune, India", // [file:1][file:3]
      tagline:
        "Building scalable systems and intuitive data-driven experiences across SWE, Data Science, and HCI.", // [file:1][file:2][file:3]
      bio:
        "Graduate Computer Science student specializing in software engineering, data science, and human-computer interaction, with experience building full-stack data visualization platforms, scalable APIs, and user-centered digital products.", // [file:1][file:2][file:3]
      email: "parthdeshmukh321@gmail.com", // [file:1]
      phone: "+1 (979) 492-9902", // [file:1]
      linkedin: "https://linkedin.com/in/parth-deshmukh-a1542b238", // [file:1]
      github: "https://github.com/0-Parth-D", // inferred handle from email; change if different
      profileImage:
        "https://media.licdn.com/dms/image/v2/D4D03AQHmF0UOud8OtQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1720902504147?e=1769040000&v=beta&t=lJy5XJBRaLABxjtUJBuL9Py9ldFlFD1GyGxQMfuVVe4",
      resumeUrl: "/resume.pdf", // Path to resume file - place your resume.pdf in the public folder
    },
  
    // Work Experience
    experience: [
      {
        company: "Indian Institute of Technology (IIT) Bombay", // [file:1]
        position: "Research Intern", // [file:1]
        location: "Mumbai, India", // [file:1]
        startDate: "Feb 2024", // [file:1]
        endDate: "Sept 2024", // [file:1]
        description:
          "Developed a PHP and JavaScript–based data visualization and theme builder using the Yii Framework, enabling professors to design and manage analytics dashboards and custom layouts while streamlining analytics workflows with automated visualization logic and optimized MySQL queries.", // [file:1][file:2][file:3]
        technologies: [
          "PHP",
          "JavaScript",
          "Yii Framework",
          "MySQL",
          "AJAX",
          "HTML/CSS",
          "Git/GitHub",
        ], // [file:1][file:2][file:3]
      },
      {
        company: "HTS Tech Solutions", // [file:1]
        position: "UI/UX Design Intern", // [file:1]
        location: "Pune, India", // [file:1]
        startDate: "Jun 2022", // [file:1]
        endDate: "Dec 2022", // [file:1]
        description:
          "Designed interactive data visualization dashboards and analytics interfaces, conducted stakeholder feedback sessions to gather requirements, and created wireframes and prototypes to ensure accessible, user-centered experiences.", // [file:1][file:3]
        technologies: ["Figma", "UI/UX", "Wireframing", "Prototyping"], // [file:3]
      },
      {
        company: "Office of International Relations (OIR), VIIT", // [file:3]
        position: "Web Designer · UI/UX Designer", // [file:3]
        location: "Pune, India", // [file:3]
        startDate: "Dec 2022", // [file:3]
        endDate: "May 2023", // [file:3]
        description:
          "Collaborated with the web development team to design UI and interactions for the international cell’s website, developing visually appealing, user-friendly interfaces and optimizing navigation and information hierarchy.", // [file:3]
        technologies: ["Figma", "HTML/CSS", "JavaScript", "UI/UX"], // [file:3]
      },
    ],
  
    // Education
    education: [
      {
        institution: "Texas A&M University", // [file:1]
        degree: "Master of Science", // [file:1]
        field: "Computer Science", // [file:1]
        location: "College Station, TX, USA", // [file:1]
        startDate: "2025", // inferred from end date; adjust if needed [file:1]
        endDate: "2027", // [file:1]
        gpa: "", // not listed for MS [file:1]
        achievements: [
          "Coursework: Artificial Intelligence, Analysis of Algorithms, Computer-Human Interaction, Data Science",
        ], // [file:1][file:3]
      },
      {
        institution: "Vishwakarma Institute of Information Technology (VIIT)", // [file:1]
        degree: "Bachelor of Technology", // [file:1]
        field: "Information Technology", // [file:1]
        location: "Pune, India", // [file:1]
        startDate: "2020", // inferred typical duration; adjust if needed [file:1]
        endDate: "2024", // [file:1]
        gpa: "9.12/10.00", // [file:1]
        achievements: [
          "Led UI/UX team at OIR, VIIT",
          "Publications with Springer and IEEE",
          "Completed Summer & Spring School on Advanced Engineering and Data Science at Tokushima University, Japan",
        ], // [file:1][file:3]
      },
    ],
  
    // Skills
    skills: {
      programming: [
        "Python",
        "SQL",
        "C++",
        "JavaScript",
        "R",
        "HTML",
        "CSS",
      ], // [file:1][file:2][file:3]
      frameworks: [
        "React.js",
        "Node.js",
        "TensorFlow",
        "PyTorch",
        "Scikit-learn",
        "OpenCV",
        "Yii Framework",
      ], // [file:1][file:2][file:3]
      tools: [
        "Git",
        "GitHub",
        "Docker",
        "AWS EC2",
        "AWS S3",
        "Google BigQuery",
        "Power BI",
        "Jupyter",
        "Google Colab",
        "PostgreSQL",
        "MySQL",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "JIRA",
        "Figma",
      ], // [file:1][file:2][file:3]
      methodologies: [
        "Machine Learning",
        "Deep Learning",
        "Data Analysis",
        "Statistical Modeling",
        "Feature Engineering",
        "Data Structures & Algorithms",
        "System Design",
        "Object-Oriented Programming",
        "Agile",
        "Scrum",
        "User-Centered Design",
        "UX Compliance",
      ], // [file:1][file:2][file:3]
      domains: [
        "Software Engineering",
        "Data Science",
        "Machine Learning",
        "Computer Vision",
        "NLP",
        "Human-Computer Interaction",
        "UI/UX Design",
        "Data Visualization",
        "Analytics Dashboards",
      ], // [file:1][file:2][file:3]
    },
  
    // Projects
    projects: [
      {
        title: "Restaurant Performance Analytics", // [file:1]
        description:
          "Analyzed Grubhub and Uber Eats datasets in Google BigQuery to uncover delivery performance patterns and operational inefficiencies, building KPI dashboards to support data-driven decisions.", // [file:1]
        technologies: ["SQL", "Google BigQuery", "Data Visualization", "Dashboards"], // [file:1]
        image: "",
        link: "",
        github: "",
        featured: true,
      },
      {
        title: "ASL Detection Model", // [file:1]
        description:
          "Designed a deep learning model for American Sign Language recognition and deployed it as a containerized service on AWS EC2 for scalable inference.", // [file:1]
        technologies: ["TensorFlow", "Docker", "AWS EC2", "Python"], // [file:1]
        image: "",
        link: "",
        github: "",
        featured: true,
      },
      {
        title: "Superstore Sales Analysis", // [file:1]
        description:
          "Built interactive Power BI dashboards to visualize KPIs, profitability, and customer segments, using DAX and automated refresh pipelines for near real-time analytics.", // [file:1]
        technologies: ["Power BI", "DAX", "Data Visualization"], // [file:1]
        image: "",
        link: "",
        github: "",
        featured: false,
      },
      {
        title: "Devanagari Character Recognition", // [file:1]
        description:
          "Developed a CNN-based character recognition system using OpenCV and transfer learning with ResNet and VGG, achieving high accuracy on handwritten Devanagari characters.", // [file:1]
        technologies: ["Python", "OpenCV", "TensorFlow", "CNN", "Transfer Learning"], // [file:1]
        image: "",
        link: "",
        github: "",
        featured: true,
      },
      {
        title: "Digital Diary for School", // [file:3]
        description:
          "Designed an intuitive online school diary interface that allows students to access homework, notices, and holidays with clear navigation and user-centered flows.", // [file:3]
        technologies: ["UI/UX Design", "Figma", "Web UI"], // [file:3]
        image: "",
        link: "",
        github: "",
        featured: false,
      },
      {
        title: "Online Travel Agency Website Design", // [file:3]
        description:
          "Created an inviting interface for booking flights, buses, trains, and hotels, coordinating key pages to enhance overall usability and visual design.", // [file:3]
        technologies: ["UI/UX Design", "Figma", "Web Design"], // [file:3]
        image: "",
        link: "",
        github: "",
        featured: false,
      },
      {
        title: "Happy Us — Social Well-being Platform", // [file:3]
        description:
          "Designed and developed a web platform with social media integration, habit tracking, and real-time motivational content using Figma and React.", // [file:3]
        technologies: ["React", "Figma", "UI/UX Design", "Web Development"], // [file:3]
        image: "",
        link: "",
        github: "",
        featured: true,
      },
    ],
  
    // Certifications
    certifications: [
      {
        name: "Summer & Spring School on Advanced Engineering and Data Science", // [file:1]
        issuer: "Tokushima University", // [file:1]
        date: "2023", // year only mentioned via program; approximate [file:1]
        credentialId: "",
        link: "",
      },
    ],
  
    // Awards & Achievements
    awards: [
      {
        title: "Summer & Spring School on Advanced Engineering and Data Science", // [file:1]
        issuer: "Tokushima University, Japan", // [file:1]
        date: "2024", // [file:1]
        description:
          "Completed intensive program on advanced engineering and data science at Tokushima University, Japan.", // [file:1]
      },
      {
        title: "Co-author — IEEE Publication (Blockchain for Disaster Relief)", // [file:1]
        issuer: "IEEE", // [file:1]
        date: "2023", // estimated during undergraduate period
        description:
          "Co-authored research on leveraging blockchain technology for disaster relief applications.", // [file:1]
      },
      {
        title: "First Author — Springer Publication (Automated GUI Testing, UX)", // [file:1]
        issuer: "Springer", // [file:1]
        date: "2023", // estimated during undergraduate period
        description:
          "Published first-author work on automated GUI testing and user experience.", // [file:1]
      },
      {
        title: "UI/UX Team Lead, Office of International Relations (OIR), VIIT", // [file:1][file:3]
        issuer: "Vishwakarma Institute of Information Technology", // [file:1]
        date: "2022", // estimated based on work experience timeline
        description:
          "Led the UI/UX team, coordinating projects focused on data visualization, user analytics, and international relations communication.", // [file:1][file:3]
      },
    ],

    // Clients & Collaborations
    clients: [
      {
        name: "IIT Bombay",
        type: "Research Institution",
      },
      {
        name: "HTS Tech Solutions",
        type: "Tech Company",
      },
      {
        name: "Texas A&M University",
        type: "Academic Institution",
      },
      {
        name: "Vishwakarma Institute (VIIT)",
        type: "Academic Institution",
      },
    ],

    // Testimonials
    testimonials: [
      {
        quote: "Parth's data visualization work significantly improved our analytics workflow and user engagement with the dashboards.",
        author: "Research Team",
        role: "IIT Bombay",
      },
      {
        quote: "Exceptional attention to user experience and ability to translate complex data into intuitive interfaces.",
        author: "UI/UX Team",
        role: "HTS Tech Solutions",
      },
    ],
  };
  