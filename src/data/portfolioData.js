// Portfolio data aligned with resume (Parth_Deshmukh_Resume_DS)

const GITHUB_PROFILE = "https://github.com/0-Parth-D"
const GITHUB_REPOS = {
  satelliteSegmentation: "https://github.com/0-Parth-D/Satellite-Segmentation-SAM3",
  ragAssistant: "https://github.com/0-Parth-D/RAG-Powered-Code-Assistant",
  aslClassification: "https://github.com/0-Parth-D/ASL-Classification-Project",
  datasetExploration: "https://github.com/0-Parth-D/Dataset-Extraction-and-Exploration",
}
const PLACEHOLDER_IMG = "/project-card-placeholder.svg"

export const portfolioData = {
  personal: {
    firstName: "Parth",
    lastName: "Deshmukh",
    fullName: "Parth Sachin Deshmukh",
    title: "ML & Software Engineer · M.S. Computer Science (Data Science & ML)",
    heroSubtitle:
      "HCI-minded UI for analytics — shipping models, RAG systems, and tooling end-to-end.",
    location: "College Station, TX",
    tagline:
      "RAG, computer vision, and data platforms in production shape: PyTorch, LangChain, Docker, CI/CD, and packaged releases.",
    bio:
      "M.S. Computer Science student at Texas A&M with experience in full-stack data visualization (IIT Bombay) and UI/UX for analytics (HTS Tech). I work across deep learning, LangChain/RAG, and production-style packaging with Docker, CI/CD, and cloud deployment.",
    email: "parthdeshmukh321@gmail.com",
    phone: "+1 (979) 492-9902",
    linkedin: "https://linkedin.com/in/parth-deshmukh-a1542b238",
    github: "https://github.com/0-Parth-D",
    website: "https://parthdeshmukh.vercel.app",
    profileImage: "/1720902504174.jpg",
    /** Set to a path under public/ or a Drive URL when you have a PDF; empty hides "View Portfolio" on About */
    portfolioUrl: "",
  },

  seo: {
    siteName: "Parth Deshmukh",
    defaultDescription:
      "Parth Deshmukh — ML engineer and software engineer. RAG, computer vision, data platforms, PyTorch, LangChain, Docker, and product-minded UI for analytics.",
  },

  experience: [
    {
      company: "Indian Institute of Technology (IIT) Bombay",
      position: "Research Intern",
      location: "Mumbai, India",
      startDate: "Feb 2024",
      endDate: "Sept 2024",
      description:
        "Developed a PHP and JavaScript data visualization and theme builder with the Yii Framework for 20+ professors. Built a full-stack Figma-to-HTML parser with drag-and-drop and a reusable reporting theme system for 100+ reports. Optimized MySQL with indexing and AJAX for 500+ layout configurations; collaborated on code reviews.",
      technologies: [
        "PHP",
        "JavaScript",
        "Yii Framework",
        "MySQL",
        "AJAX",
        "HTML/CSS",
        "Git",
      ],
    },
    {
      company: "HTS Tech Solutions",
      position: "UI/UX Design Intern",
      location: "Pune, India",
      startDate: "Jun 2022",
      endDate: "Dec 2022",
      description:
        "Designed interactive data visualization dashboards for analytics products. Created wireframes and prototypes, iterated on feedback, and aligned deliverables with accessibility standards.",
      technologies: ["Figma", "UI/UX", "Wireframing", "Prototyping", "Accessibility"],
    },
  ],

  education: [
    {
      institution: "Texas A&M University",
      degree: "Master of Science",
      field: "Computer Science",
      location: "College Station, TX",
      startDate: "2025",
      endDate: "2027",
      gpa: "",
      achievements: [
        "Coursework: Artificial Intelligence, Analysis of Algorithms, Data Mining",
      ],
    },
    {
      institution: "Vishwakarma Institute of Information Technology (VIIT)",
      degree: "Bachelor of Technology",
      field: "Information Technology",
      location: "Pune, India",
      startDate: "2020",
      endDate: "2024",
      gpa: "9.12 / 10.00",
      achievements: [],
    },
  ],

  skills: {
    programming: ["C++", "Python", "SQL", "JavaScript", "R"],
    frameworks: [
      "LangChain",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "OpenCV",
    ],
    tools: [
      "CMake",
      "scikit-build-core",
      "Docker",
      "Git",
      "GitHub",
      "CI/CD",
      "Conda",
      "PyPI Packaging",
      "ChromaDB",
      "Pandas",
      "NumPy",
      "AWS",
      "Google BigQuery",
      "Figma",
    ],
    methodologies: [
      "Retrieval-Augmented Generation (RAG)",
      "Large Language Models (LLMs)",
      "Deep Learning",
      "NLP",
      "Performance optimization",
      "Machine learning",
      "Data mining",
    ],
    domains: [
      "Data science",
      "Computer vision",
      "MLOps & packaging",
      "Software engineering",
      "Data visualization",
      "UI/UX for analytics",
    ],
  },

  projects: [
    {
      title: "Satellite Image Segmentation Pipeline",
      homeSummary:
        "SAM3 segmentation for buildings, roads, and water in high-res satellite imagery — evaluated in PyTorch with memory-safe GPU inference.",
      description:
        "Semantic and instance segmentation with SAM3 (Segment Anything) to extract structural features — buildings, roads, water — from high-resolution satellite imagery. Custom PyTorch and NumPy evaluation with per-class IoU and pixel accuracy (mIoU 0.62, pixel accuracy 0.78 on 17 test images). Optimized GPU memory using inference-mode execution and CUDA cache management for large images.",
      technologies: ["SAM3", "PyTorch", "NumPy", "Python"],
      image: PLACEHOLDER_IMG,
      link: "",
      github: GITHUB_REPOS.satelliteSegmentation,
      featured: true,
      role: "Solo research / engineering — end-to-end pipeline and evaluation.",
      contributions: [
        "SAM3-based segmentation workflow for multi-class land-cover features",
        "Custom PyTorch/NumPy metrics (IoU, pixel accuracy) on a held-out test set",
        "GPU memory tuning: inference mode, CUDA cache handling for large tiles",
      ],
      problem:
        "Automating reliable extraction of infrastructure and land-cover features from large, high-resolution satellite scenes without running out of GPU memory.",
      approach:
        "SAM3-based segmentation pipeline with a custom evaluation harness in PyTorch/NumPy and memory-conscious inference settings.",
      outcome:
        "Strong segmentation quality on the held-out test set with stable runs on large imagery after OOM-focused optimizations.",
      metrics: [
        { value: "0.62", label: "mIoU" },
        { value: "0.78", label: "Pixel accuracy" },
        { value: "17", label: "Test images" },
      ],
    },
    {
      title: "RAG-Powered Code Assistant",
      homeSummary:
        "LangChain + ChromaDB RAG over 5,000+ doc pages with a local LLM; packaged for PyPI/Conda and shipped with Docker and CI/CD.",
      description:
        "Retrieval-Augmented Generation system using LangChain and a local LLM (Ollama / Llama 3) for semantic search across 5,000+ documentation pages stored in ChromaDB. Packaged for PyPI and Conda with scikit-build-core (Linux/Windows). GitHub Actions CI/CD with Docker; pytest coverage around 85%.",
      technologies: ["LangChain", "ChromaDB", "CMake", "Docker", "CI/CD"],
      image: PLACEHOLDER_IMG,
      link: "",
      github: GITHUB_REPOS.ragAssistant,
      featured: true,
      role: "Lead engineer — retrieval stack, packaging, and CI/CD.",
      contributions: [
        "ChromaDB indexing and LangChain orchestration with a local LLM",
        "PyPI/Conda packages via scikit-build-core; multi-OS build matrix",
        "Docker images and GitHub Actions; pytest suite (~85% coverage)",
      ],
      problem:
        "Making large internal or project documentation searchable in a way that supports accurate, grounded answers for developers.",
      approach:
        "Vector indexing in ChromaDB, LangChain orchestration with a local LLM, and reproducible builds via scikit-build-core, Docker, and multi-OS CI.",
      outcome:
        "Installable packages and automated builds with high automated test coverage.",
      metrics: [{ value: "5,000+", label: "Doc pages indexed" }, { value: "~85%", label: "Test coverage" }],
    },
    {
      title: "ASL Detection Model",
      description:
        "Deep learning CNN for American Sign Language recognition with OpenCV preprocessing. Deployed a containerized model on AWS EC2 using Docker, with GitHub Actions for CI/CD and automated testing.",
      technologies: ["TensorFlow", "Docker", "AWS", "GitHub Actions", "OpenCV"],
      image: PLACEHOLDER_IMG,
      link: "",
      github: GITHUB_REPOS.aslClassification,
      featured: false,
      role: "End-to-end model and deployment.",
      problem: "Reliable gesture recognition under practical preprocessing and deployment constraints.",
      approach: "CNN with OpenCV-based preprocessing, containerized service, and CI/CD on GitHub Actions.",
      outcome: "Scalable inference path on AWS with automated testing in the pipeline.",
    },
    {
      title: "Restaurant Performance Analytics",
      description:
        "Analyzed Grubhub and Uber Eats datasets in Google BigQuery to uncover delivery performance patterns and operational inefficiencies, building KPI dashboards to support data-driven decisions.",
      technologies: ["SQL", "Google BigQuery", "Data Visualization", "Dashboards"],
      image: PLACEHOLDER_IMG,
      link: "",
      github: GITHUB_REPOS.datasetExploration,
      featured: false,
      role: "Data analysis and dashboard design.",
    },
    {
      title: "Devanagari Character Recognition",
      description:
        "Developed a CNN-based character recognition system using OpenCV and transfer learning with ResNet and VGG, achieving high accuracy on handwritten Devanagari characters.",
      technologies: ["Python", "OpenCV", "TensorFlow", "CNN", "Transfer Learning"],
      image: PLACEHOLDER_IMG,
      link: "",
      github: GITHUB_PROFILE,
      featured: true,
      role: "Solo — model design, training, and evaluation.",
      contributions: [
        "CNN pipeline with OpenCV preprocessing for handwritten Devanagari",
        "Transfer learning with ResNet and VGG backbones",
        "Rigorous train/val evaluation and accuracy reporting",
      ],
      problem: "Accurate recognition of handwritten Devanagari under varied stroke styles.",
      approach: "Transfer learning with CNNs, OpenCV preprocessing, and structured train/val splits.",
      outcome: "Strong accuracy on the target character set with a reproducible training recipe.",
    },
    {
      title: "Happy Us — Social Well-being Platform",
      description:
        "Designed and developed a web platform with social media integration, habit tracking, and real-time motivational content using Figma and React.",
      technologies: ["React", "Figma", "UI/UX Design", "Web Development"],
      image: PLACEHOLDER_IMG,
      link: "",
      github: GITHUB_PROFILE,
      featured: false,
      role: "Product design and front-end development.",
    },
    {
      title: "Superstore Sales Analysis",
      description:
        "Built interactive Power BI dashboards to visualize KPIs, profitability, and customer segments, using DAX and automated refresh pipelines for near real-time analytics.",
      technologies: ["Power BI", "DAX", "Data Visualization"],
      image: PLACEHOLDER_IMG,
      link: "",
      github: GITHUB_PROFILE,
      featured: false,
      role: "Analytics and dashboard development.",
    },
    {
      title: "Digital Diary for School",
      description:
        "Designed an intuitive online school diary interface that allows students to access homework, notices, and holidays with clear navigation and user-centered flows.",
      technologies: ["UI/UX Design", "Figma", "Web UI"],
      image: PLACEHOLDER_IMG,
      link: "",
      github: GITHUB_PROFILE,
      featured: false,
      role: "UX and visual design.",
    },
    {
      title: "Online Travel Agency Website Design",
      description:
        "Created an inviting interface for booking flights, buses, trains, and hotels, coordinating key pages to enhance overall usability and visual design.",
      technologies: ["UI/UX Design", "Figma", "Web Design"],
      image: PLACEHOLDER_IMG,
      link: "",
      github: GITHUB_PROFILE,
      featured: false,
      role: "UI/UX design.",
    },
  ],

  certifications: [
    {
      name: "Summer & Spring School on Advanced Engineering and Data Science",
      issuer: "Tokushima University, Japan",
      date: "",
      credentialId: "",
      link: "",
    },
  ],

  awards: [
    {
      title: "Publications",
      issuer: "Springer & IEEE",
      date: "2024",
      description:
        "First author, Springer (Automated GUI Testing, UX); co-author, IEEE (Blockchain for Disaster Relief).",
    },
    {
      title: "Leadership",
      issuer: "Office of International Relations (OIR), VIIT",
      date: "2023",
      description:
        "Led the UI/UX team, coordinating projects involving data visualization and user analytics.",
    },
    {
      title: "International program",
      issuer: "Tokushima University, Japan",
      date: "2023",
      description:
        "Completed the Summer & Spring School on Advanced Engineering and Data Science.",
    },
  ],

  clients: [
    { name: "IIT Bombay", type: "Research institution" },
    { name: "HTS Tech Solutions", type: "Technology company" },
    { name: "Texas A&M University", type: "Academic institution" },
    { name: "VIIT", type: "Academic institution" },
  ],

  testimonials: [
    {
      quote:
        "Parth's data visualization work improved how we built and maintained analytics dashboards and reporting layouts.",
      author: "Research team",
      role: "IIT Bombay",
    },
    {
      quote: "Strong eye for turning complex analytics into clear, accessible interface patterns.",
      author: "Design collaboration",
      role: "HTS Tech Solutions",
    },
  ],
}
