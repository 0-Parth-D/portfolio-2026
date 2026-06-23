// Portfolio data — Harshal-style single-page layout (design doc + resume)

const GITHUB_PROFILE = 'https://github.com/0-Parth-D'
const HUGGINGFACE_PROFILE = 'https://huggingface.co/0-Parth-D'
const GITHUB_REPOS = {
  llmFineTuning: 'https://github.com/0-Parth-D',
  ragAssistant: 'https://github.com/0-Parth-D/RAG-Powered-Code-Assistant',
  multiAgent: 'https://github.com/0-Parth-D',
  satelliteSegmentation: 'https://github.com/0-Parth-D/Satellite-Segmentation-SAM3',
}
const PLACEHOLDER_IMG = '/project-card-placeholder.svg'

export const portfolioData = {
  personal: {
    displayName: 'PARTH DESHMUKH',
    firstName: 'Parth',
    lastName: 'Deshmukh',
    fullName: 'Parth Sachin Deshmukh',
    title: 'ML Engineer',
    tagline:
      'Building LLM fine-tuning pipelines, RAG systems, and computer vision models',
    heroSubtitle:
      'ML Engineer · LLM fine-tuning · RAG systems · Computer Vision',
    location: 'Bryan, Texas',
    email: 'parthdeshmukh321@gmail.com',
    phone: '+1 (979) 492-9902',
    linkedin: 'https://linkedin.com/in/parth-deshmukh-a1542b238',
    github: GITHUB_PROFILE,
    huggingface: HUGGINGFACE_PROFILE,
    website: 'https://parthdeshmukh.vercel.app',
    profileImage: '/1720902504174.jpg',
    portfolioUrl: '',
  },

  seo: {
    siteName: 'Parth Deshmukh',
    defaultDescription:
      'Parth Deshmukh — ML Engineer building LLM fine-tuning pipelines, RAG systems, and computer vision models. MS Computer Science @ Texas A&M · First Author, Springer 2024.',
  },

  hero: {
    lines: [
      { parts: [{ text: 'BEYOND' }] },
      { parts: [{ text: 'MODELS' }] },
      {
        parts: [
          { text: 'BUILDING ' },
          { text: 'INTELLIGENCE', highlight: true },
          { text: ', ' },
          { text: 'NOT JUST WITH', muted: true },
          { text: ' CODE' },
        ],
      },
      { parts: [{ text: 'BUT WITH', muted: true }] },
    ],
    accent: 'curiosity',
    pills: ['portfolio 2026', '#ml-engineer', '#first-author'],
    subtext:
      'ML Engineer · LLM fine-tuning · RAG systems · Computer Vision — MS Computer Science @ Texas A&M · GPA 4.0 · First Author, Springer 2024',
  },

  ticker: {
    items: [
      { company: 'IIT BOMBAY', role: 'ML Research Intern' },
      { company: 'TEXAS A&M', role: 'MS Computer Science' },
      { company: 'SPRINGER 2024', role: 'First Author' },
      { company: 'TOKUSHIMA UNIVERSITY', role: 'Exchange Scholar' },
    ],
  },

  stats: {
    lines: [
      { text: 'RESEARCH THAT', dim: true },
      { text: 'SHIPS.', dim: false },
      { text: 'FIRST AUTHOR,', dim: true },
      { text: 'SPRINGER', accent: true, suffix: ' 2024' },
    ],
    metrics: '+65% ROUGE-L · 5,000+ docs indexed · 85% test coverage · 10,000-doc corpus',
  },

  about: {
    /** Short pull-quote — home preview only */
    journey:
      "from engineering in Pune, research at IIT Bombay, and now building AI systems at Texas A&M — it's always about the problem.",
    /** Expanded narrative — about page only */
    journeyExpanded: [
      'I grew up in Pune writing code before I knew what ML engineering meant. VIIT gave me the foundations; IIT Bombay showed me what research at scale looks like — full-stack analytics for 20+ faculty, not slide decks.',
      'At Texas A&M I am pursuing an MS in Computer Science (GPA 4.0), focused on LLM fine-tuning, retrieval systems, and computer vision. I care about models that ship: reproducible pipelines, honest evaluation, and tools people actually use.',
    ],
    bio: 'First-author Springer publication. Exchange scholar at Tokushima University. I build where curiosity meets systems thinking — always asking whether the model solves a real problem.',
    tagline: '→ Curiosity · Systems Thinking · Research that ships',
    lookingFor:
      'Open to ML Engineer and Research Engineer internships and full-time roles starting May 2027 — especially teams building LLM infrastructure, RAG products, or applied computer vision.',
    skills: [
      'PyTorch',
      'LangChain',
      'HuggingFace',
      'FastAPI',
      'Docker',
      'LangGraph',
      'ChromaDB',
      'AWS',
    ],
    pageLede:
      'The path from Pune to IIT Bombay to Texas A&M — education, craft, and what shaped how I build.',
  },

  work: {
    pageLede:
      'First-author Springer publication, IIT Bombay research, and production ML systems — from fine-tuning pipelines to full-stack analytics platforms.',
    processBlurb:
      'From LoRA fine-tuning and LangGraph agents to SAM2 segmentation and full-stack analytics — I ship end-to-end ML systems with rigorous evaluation, reproducible builds, and production-minded tooling.',
  },

  philosophy: {
    label: 'Intuition',
    lines: [
      'MY INTUITION IS THE SIGNAL.',
      'I BUILD NOT FOR DEMOS, BUT FOR',
      { accent: 'impact,' },
      'ENSURING EVERY MODEL CUTS THROUGH THE NOISE AND DELIVERS',
      { accent: 'results.' },
    ],
  },

  specialties: [
    'LLM Fine-Tuning',
    '(1) RAG Systems',
    'Computer Vision',
    'Multi-Agent',
    'MLOps',
  ],

  projectsSection: {
    heading: 'FEATURED WORK',
    subtext:
      'LLM fine-tuning, RAG pipelines, multi-agent systems, computer vision — and research that ships.',
  },

  experience: [
    {
      company: 'Indian Institute of Technology (IIT) Bombay',
      position: 'Research Intern',
      location: 'Mumbai, India',
      startDate: 'Feb 2024',
      endDate: 'Sept 2024',
      description:
        'Developed a PHP and JavaScript data visualization and theme builder with the Yii Framework for 20+ professors. Built a full-stack Figma-to-HTML parser with drag-and-drop and a reusable reporting theme system for 100+ reports. Optimized MySQL with indexing and AJAX for 500+ layout configurations.',
      technologies: ['PHP', 'JavaScript', 'Yii Framework', 'MySQL', 'AJAX', 'HTML/CSS', 'TypeScript'],
    },
    {
      company: 'HTS Tech Solutions',
      position: 'UI/UX Design Intern',
      location: 'Pune, India',
      startDate: 'Jun 2022',
      endDate: 'Dec 2022',
      description:
        'Designed interactive data visualization dashboards for analytics products. Created wireframes and prototypes, iterated on feedback, and aligned deliverables with accessibility standards.',
      technologies: ['Figma', 'UI/UX', 'Wireframing', 'Prototyping', 'Accessibility'],
    },
  ],

  education: [
    {
      institution: 'Texas A&M University',
      degree: 'MS Computer Science',
      field: 'Computer Science',
      location: 'College Station, TX',
      startDate: '2025',
      endDate: '2027',
      gpa: '4.0',
      achievements: [
        'Coursework: Artificial Intelligence, Analysis of Algorithms, Data Mining',
      ],
    },
    {
      institution: 'VIIT',
      degree: 'BS Information Technology',
      field: 'Information Technology',
      location: 'Pune, India',
      startDate: '2020',
      endDate: '2024',
      gpa: '9.12',
      achievements: [],
    },
  ],

  skills: {
    programming: ['C++', 'Python', 'SQL', 'JavaScript', 'R'],
    frameworks: ['LangChain', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV'],
    tools: ['Docker', 'Git', 'GitHub', 'CI/CD', 'ChromaDB', 'AWS', 'FastAPI', 'LangGraph'],
    methodologies: [
      'Retrieval-Augmented Generation (RAG)',
      'Large Language Models (LLMs)',
      'Deep Learning',
      'Multi-Agent Systems',
      'MLOps',
    ],
  },

  projects: [
    {
      id: 'llm-fine-tuning',
      title: 'LLM Fine-Tuning: Code Generation',
      category: 'Personal · LLM',
      date: 'Apr 2026',
      cardDescription: 'LLaMA 3.2 + LoRA · +65% ROUGE-L · HuggingFace Hub demo',
      image: PLACEHOLDER_IMG,
      link: HUGGINGFACE_PROFILE,
      github: GITHUB_REPOS.llmFineTuning,
      featured: true,
      featuredSpan: false,
      technologies: ['PyTorch', 'LoRA', 'QLoRA', 'Gradio', 'HuggingFace'],
      role: 'Solo — fine-tuning pipeline, evaluation, and demo deployment.',
      contributions: [
        'Fine-tuned LLaMA 3.2 with LoRA/QLoRA for code generation tasks',
        'Achieved +65% ROUGE-L improvement over baseline',
        'Published interactive Gradio demo on HuggingFace Hub',
      ],
      problem:
        'Generic LLMs underperform on domain-specific code generation without targeted fine-tuning and efficient training methods.',
      approach:
        'Parameter-efficient fine-tuning with LoRA/QLoRA on LLaMA 3.2, rigorous ROUGE-L evaluation, and HuggingFace Hub deployment.',
      outcome:
        'Significant quality gains on code generation benchmarks with a publicly accessible demo.',
      metrics: [{ value: '+65%', label: 'ROUGE-L' }],
    },
    {
      id: 'rag-assistant',
      title: 'RAG-Powered Code Assistant',
      category: 'Production · RAG',
      date: 'Mar 2026',
      cardDescription:
        'LangChain + LLaMA 3 · 5,000+ docs · sub-second latency · PyPI published',
      image: PLACEHOLDER_IMG,
      link: '',
      github: GITHUB_REPOS.ragAssistant,
      featured: true,
      featuredSpan: false,
      technologies: ['LangChain', 'ChromaDB', 'Docker', 'FastAPI', 'LLaMA 3'],
      role: 'Lead engineer — retrieval stack, packaging, and CI/CD.',
      contributions: [
        'ChromaDB indexing and LangChain orchestration with a local LLM',
        'PyPI/Conda packages via scikit-build-core; multi-OS build matrix',
        'Docker images and GitHub Actions; pytest suite (~85% coverage)',
      ],
      problem:
        'Making large project documentation searchable with accurate, grounded answers for developers.',
      approach:
        'Vector indexing in ChromaDB, LangChain with LLaMA 3, reproducible builds via Docker and multi-OS CI.',
      outcome: 'Installable packages with sub-second retrieval latency and high test coverage.',
      metrics: [
        { value: '5,000+', label: 'Docs indexed' },
        { value: '~85%', label: 'Test coverage' },
      ],
    },
    {
      id: 'multi-agent',
      title: 'Multi-Agent LLM Research Assistant',
      category: 'Research · Agents',
      date: 'Jan 2026',
      cardDescription:
        'LangGraph · 10K docs · 40% latency reduction · FastAPI microservice',
      image: PLACEHOLDER_IMG,
      link: '',
      github: GITHUB_REPOS.multiAgent,
      featured: true,
      featuredSpan: false,
      technologies: ['LangGraph', 'OpenAI', 'ChromaDB', 'FastAPI'],
      role: 'Solo — multi-agent orchestration and API design.',
      contributions: [
        'LangGraph agent workflow for research synthesis across 10K documents',
        '40% latency reduction via parallel agent execution',
        'FastAPI microservice with ChromaDB vector store',
      ],
      problem:
        'Single-agent RAG systems struggle with complex research queries requiring multi-step reasoning.',
      approach:
        'LangGraph multi-agent architecture with specialized agents for retrieval, synthesis, and validation.',
      outcome: '40% faster responses with improved answer quality on multi-hop queries.',
      metrics: [
        { value: '10K', label: 'Doc corpus' },
        { value: '40%', label: 'Latency reduction' },
      ],
    },
    {
      id: 'satellite-segmentation',
      title: 'Satellite Image Segmentation Pipeline',
      category: 'Computer Vision · CV',
      date: 'Feb 2026',
      cardDescription: 'SAM2 · mIoU 0.62 · pixel acc. 0.78 · CUDA GPU inference',
      image: PLACEHOLDER_IMG,
      link: '',
      github: GITHUB_REPOS.satelliteSegmentation,
      featured: true,
      featuredSpan: false,
      technologies: ['SAM2', 'PyTorch', 'CUDA', 'OpenCV'],
      role: 'Solo research / engineering — end-to-end pipeline and evaluation.',
      contributions: [
        'SAM2-based segmentation workflow for multi-class land-cover features',
        'Custom PyTorch/NumPy metrics (IoU, pixel accuracy) on a held-out test set',
        'GPU memory tuning: inference mode, CUDA cache handling for large tiles',
      ],
      problem:
        'Automating reliable extraction of infrastructure and land-cover features from large satellite scenes.',
      approach:
        'SAM2-based segmentation pipeline with custom evaluation harness and memory-conscious inference.',
      outcome: 'Strong segmentation quality with stable runs on large imagery.',
      metrics: [
        { value: '0.62', label: 'mIoU' },
        { value: '0.78', label: 'Pixel accuracy' },
      ],
    },
    {
      id: 'iit-bombay-analytics',
      title: 'Analytics Platform @ IIT Bombay (Asia Top-5)',
      category: 'Professional · Full-Stack',
      date: 'Sep 2024',
      cardDescription:
        'Deployed to 20+ faculty · 60% faster setup · 100+ templates via Figma-to-HTML parser · 40% UI response improvement',
      image: PLACEHOLDER_IMG,
      link: '',
      github: '',
      featured: true,
      featuredSpan: true,
      technologies: ['PHP', 'MySQL', 'Yii', 'AJAX', 'TypeScript'],
      role: 'Research intern — full-stack analytics platform.',
      contributions: [
        'PHP/JavaScript data visualization and theme builder for 20+ professors',
        'Figma-to-HTML parser with drag-and-drop and 100+ report templates',
        'MySQL optimization with indexing and AJAX for 500+ layout configurations',
      ],
      problem:
        'Faculty needed a flexible analytics platform with rapid dashboard setup and reusable reporting themes.',
      approach:
        'Yii Framework full-stack platform with Figma-to-HTML parser, drag-and-drop builder, and optimized MySQL backend.',
      outcome:
        '60% faster setup, 100+ templates, 40% UI response improvement across 20+ faculty deployments.',
      metrics: [
        { value: '20+', label: 'Faculty users' },
        { value: '60%', label: 'Faster setup' },
        { value: '100+', label: 'Templates' },
      ],
    },
    {
      id: 'gui-testing-survey',
      title: 'Automated GUI Testing to Enhance UX',
      category: 'Publication · First Author',
      date: 'Springer 2024',
      cardDescription: 'Survey of the State of the Art — Springer',
      image: PLACEHOLDER_IMG,
      link: 'https://link.springer.com/chapter/10.1007/978-981-97-6700-5_18',
      github: '',
      featured: false,
      featuredSpan: false,
      isPublication: true,
      technologies: ['Springer', 'First Author', 'GUI Testing', 'UX'],
      role: 'First author — literature survey and analysis.',
      problem:
        'Lack of comprehensive survey connecting automated GUI testing methods to UX outcomes.',
      approach:
        'Systematic survey of state-of-the-art automated GUI testing techniques and their UX impact.',
      outcome: 'Published as first author in Springer proceedings, 2024.',
      abstract:
        'A comprehensive survey examining automated GUI testing approaches and their role in enhancing user experience across modern software applications.',
    },
    {
      id: 'blockchain-donation',
      title: 'Blockchain Donation Transparency',
      category: 'Publication · Co-Author',
      date: 'IEEE 2024',
      cardDescription: 'Disaster Relief transparency via blockchain — IEEE',
      image: PLACEHOLDER_IMG,
      link: 'https://ieeexplore.ieee.org/document/10499547',
      github: '',
      featured: false,
      featuredSpan: false,
      isPublication: true,
      technologies: ['Blockchain', 'IEEE', 'Smart Contracts'],
      role: 'Co-author — system design and implementation.',
      problem:
        'Disaster relief donations lack transparency, reducing donor trust and aid effectiveness.',
      approach:
        'Blockchain-based donation tracking system ensuring end-to-end transparency for disaster relief funds.',
      outcome: 'Published co-author paper at IEEE, 2024.',
      abstract:
        'A blockchain solution for transparent disaster relief donation tracking, ensuring donors can verify fund allocation and impact.',
    },
  ],

  certifications: [
    {
      name: 'Summer & Spring School on Advanced Engineering and Data Science',
      issuer: 'Tokushima University, Japan',
      date: '2023',
      credentialId: '',
      link: '',
    },
  ],

  awards: [
    {
      title: 'Publications',
      issuer: 'Springer & IEEE',
      date: '2024',
      description:
        'First author, Springer (Automated GUI Testing, UX); co-author, IEEE (Blockchain for Disaster Relief).',
    },
  ],
}
