// Portfolio content: every number here is measured. Provisional results say so.

const GITHUB_PROFILE = 'https://github.com/0-Parth-D'
const HUGGINGFACE_PROFILE = 'https://huggingface.co/0-Parth-D'
const GITHUB_REPOS = {
  dreamLab: 'https://github.com/0-Parth-D/group-student-simulator',
  realtimeKg: 'https://github.com/0-Parth-D/realtime-multiagent-kg',
  ragAssistant: 'https://github.com/0-Parth-D/RAG-Powered-Code-Assistant',
  clinicalTrials: 'https://github.com/0-Parth-D/Clinical-Trials-Query-To-Visualization-Agent',
  llmFineTuning: 'https://github.com/0-Parth-D/llm-lora-finetuning',
  multiAgent: 'https://github.com/0-Parth-D/Multi-Agent-Research-Assistant',
  satelliteSegmentation: 'https://github.com/0-Parth-D/Satellite-Segmentation-SAM3',
}

export const SITE_ORIGIN = 'https://parthdeshmukh.vercel.app'

export const portfolioData = {
  personal: {
    displayName: 'PARTH DESHMUKH',
    firstName: 'Parth',
    lastName: 'Deshmukh',
    fullName: 'Parth Sachin Deshmukh',
    title: 'Software Engineer · Applied AI Systems',
    tagline: 'Building backend services, agents, and retrieval systems with measured results',
    heroSubtitle: 'Software Engineer · Applied AI Systems',
    location: 'College Station, TX',
    relocation: 'open to relocation',
    email: 'parthdeshmukh321@gmail.com',
    linkedin: 'https://linkedin.com/in/parth-deshmukh-a1542b238',
    github: GITHUB_PROFILE,
    huggingface: HUGGINGFACE_PROFILE,
    website: SITE_ORIGIN,
    resumes: [
      { id: 'backend', label: 'Backend / SWE resume', href: '/resume/parth-deshmukh-backend.pdf' },
      { id: 'applied-ai', label: 'Applied AI resume', href: '/resume/parth-deshmukh-applied-ai.pdf' },
    ],
  },

  seo: {
    siteName: 'Parth Deshmukh',
    defaultDescription:
      'Parth Deshmukh, Software Engineer building backend services, LLM agents, and retrieval systems with measured results. MS Computer Science @ Texas A&M (May 2027) · First Author, Springer 2024.',
  },

  hero: {
    lines: [
      {
        parts: [
          { text: 'I BUILD ' },
          { text: 'AI SYSTEMS', highlight: true },
        ],
      },
      {
        parts: [
          { text: 'THAT SHIP, ' },
          { text: 'WITH', muted: true },
        ],
      },
    ],
    accent: 'curiosity.',
    pills: ['new grad · may 2027', '#backend', '#applied-ai'],
    intro: {
      name: 'Parth Deshmukh',
      role: 'Software Engineer · Applied AI Systems',
      meta: 'MS Computer Science @ Texas A&M · GPA 4.0 · May 2027',
    },
    subtext:
      'Backend services, LLM agents, retrieval and evaluation. Tested, measured, and shipped. First author, Springer 2024.',
  },

  /** What I'm working on right now. Update `updated` whenever the items change. */
  now: {
    updated: 'Oct 2026',
    items: [
      { text: 'LLM student simulators at the TAMU Dream Lab', to: '/work/dream-lab' },
      { text: 'the frontend for my realtime meeting knowledge graph', to: '/work/realtime-kg' },
    ],
  },

  ticker: {
    items: [
      { company: 'TEXAS A&M', role: 'Graduate Assistant' },
      { company: 'TEXAS A&M', role: 'MS Computer Science' },
      { company: 'IIT BOMBAY', role: 'ML/Data Research Intern' },
      { company: 'SPRINGER 2024', role: 'First Author' },
      { company: 'TOKUSHIMA UNIVERSITY', role: 'Exchange Scholar' },
    ],
  },

  stats: {
    lines: [
      { text: 'MEASURED.', dim: true },
      { text: 'TESTED.', dim: true },
      { text: 'SHIPPED', accent: true, suffix: '.' },
    ],
    metrics: '29 pytest modules · 93% test coverage · 0.88 recall@5 · +65% ROUGE-L',
  },

  about: {
    /** Short pull-quote, home preview only */
    journey:
      "from engineering in Pune, research at IIT Bombay, and now building backend and AI systems at Texas A&M. it's always about the problem.",
    /** Expanded narrative, about page only */
    journeyExpanded: [
      'I studied Information Technology at VIIT in Pune, which gave me the foundations. IIT Bombay showed me what building for real users looks like: an analytics platform used by 20+ faculty, not slide decks.',
      "At Texas A&M I'm pursuing an MS in Computer Science (GPA 4.0) and work as a Graduate Assistant at the Graduate and Professional School. Outside class I build backend and applied AI systems: agent pipelines, retrieval with honest evaluation, and services with real test suites.",
    ],
    bio: 'First-author Springer publication. Exchange scholar at Tokushima University. Research in the TAMU Dream Lab, building and evaluating LLM student simulations for teacher training.',
    tagline: '→ Curiosity · Systems thinking · Honest evaluation',
    lookingFor:
      'Open to new-grad Software Engineer, Backend, and Applied AI / ML roles starting May 2027, and to internships before then. Especially teams building agents, retrieval, data platforms, or developer tools.',
    pageLede:
      'The path from Pune to IIT Bombay to Texas A&M: education, craft, and what shaped how I build.',
  },

  work: {
    title: 'SYSTEMS THAT SHIP',
    pageLede:
      'Backend and applied AI systems with real tests and measured results, plus IIT Bombay research and a first-author Springer publication.',
    processBlurb:
      'I start from the problem, build the smallest pipeline that works, then measure it with test suites, eval batteries, and benchmarks. Numbers on this site are measured; where a result is provisional, it says so.',
  },

  philosophy: {
    label: 'How I build',
    lines: [
      "IF IT ISN'T MEASURED,",
      "IT ISN'T DONE. I BUILD FOR",
      { accent: 'people,' },
      'NOT DEMOS, AND SHIP WHAT',
      { accent: 'holds up.' },
    ],
  },

  specialties: ['Backend APIs', 'Agents & RAG', 'LLM Evaluation', 'Fine-Tuning', 'Data Pipelines'],

  projectsSection: {
    heading: 'FEATURED WORK',
    subtext:
      'Agents, retrieval, evaluation, and fine-tuning, with the numbers to back them up.',
    moreHeading: 'MORE WORK',
    moreSubtext: 'Platforms, systems, and earlier builds.',
  },

  experience: [
    {
      company: 'Texas A&M University, Graduate and Professional School',
      position: 'Graduate Assistant (Non-Teaching)',
      location: 'College Station, TX',
      startDate: 'Apr 2026',
      endDate: 'Present',
      description:
        'Configure the Slate CRM and analyze its data for the graduate school, set up events and run mailings and event communications in Slate, and build and maintain pages on the graduate school website. Promoted from Student Intern (CRM) in Sep 2026.',
      technologies: ['Slate CRM', 'Data analysis', 'Event operations', 'Web pages'],
    },
    {
      company: 'Indian Institute of Technology (IIT) Bombay',
      position: 'ML/Data Research Intern',
      location: 'Mumbai, India',
      startDate: 'Feb 2024',
      endDate: 'Sep 2024',
      description:
        'Built and deployed a full-stack analytics platform used by 20+ faculty. A Figma-to-HTML parser powers 100+ reusable report templates and cut dashboard setup time by ~60%. Indexed MySQL across 500+ layout configurations and added AJAX loading, cutting latency by ~40–80%.',
      technologies: ['PHP', 'JavaScript', 'TypeScript', 'Yii Framework', 'MySQL', 'AJAX'],
    },
  ],

  education: [
    {
      institution: 'Texas A&M University',
      degree: 'MS Computer Science',
      field: 'Computer Science',
      location: 'College Station, TX',
      startDate: '2025',
      endDate: 'May 2027',
      gpa: '4.0',
      achievements: [
        'Coursework: Artificial Intelligence, Natural Language Processing, Analysis of Algorithms, Data Mining',
      ],
    },
    {
      institution: 'Vishwakarma Institute of Information Technology (VIIT)',
      degree: 'B.Tech Information Technology',
      field: 'Information Technology',
      location: 'Pune, India',
      startDate: '2020',
      endDate: '2024',
      gpa: '9.12',
      achievements: [],
    },
  ],

  skills: {
    languages: ['Python', 'C++17', 'TypeScript', 'JavaScript', 'SQL'],
    'backend & apis': ['FastAPI', 'Pydantic', 'REST', 'Kafka', 'Temporal', 'React'],
    'ai & llms': ['PyTorch', 'LangGraph', 'LangChain', 'HuggingFace', 'LoRA / QLoRA', 'RAG'],
    'data & storage': ['Neo4j', 'Qdrant', 'ChromaDB', 'Pinecone', 'MySQL', 'SQLite'],
    'testing & devops': ['pytest', 'GoogleTest', 'Docker', 'GitHub Actions', 'CMake', 'OpenTelemetry'],
  },

  projects: [
    {
      id: 'dream-lab',
      tier: 'featured',
      caseStudy: true,
      title: 'Student Simulator for Teacher Training',
      category: 'Research · TAMU Dream Lab',
      date: 'Jun 2026 – Present',
      sortDate: '2026-10',
      cardDescription:
        '5 LLMs benchmarked on 32 scenarios · fine-tuned Llama 3.1 8B at 74.5% · 29 pytest modules',
      image: '/projects/dream-lab.svg',
      imageAlt:
        'Bar chart of judged behavioral consistency for five student models, ranging from 53.6% to 75.0%',
      link: '',
      github: GITHUB_REPOS.dreamLab,
      technologies: ['FastAPI', 'LangGraph', 'QLoRA', 'Qdrant', 'pytest', 'Claude / OpenAI'],
      role: 'Research in the TAMU Dream Lab. I designed the research notebook and own response refinement, personality, group orchestration, context management, and offline evaluation.',
      contributions: [
        'Simulated middle-school students for pre-service teacher practice, grounded in a Grade 6–8 learning progression (7 constructs × 4 levels) and a 26-entry misconception catalog',
        'Benchmarked 5 student LLMs on a 32-scenario battery: all passed 100% of rule checks, while LLM-judged behavioral consistency ranged from 53.6% to 75.0%',
        'Fine-tuned Llama 3.1 8B with 4-bit QLoRA on 768 dialogue examples (~4 hours on TAMU HPRC); it scored 74.5%, within 0.5 points of the best API model',
        'Raised speak-constraint parsing from 81.7% to 91.7% exact match on 60 hand-labeled cases by replacing regex with an LLM parser plus a regex veto',
        'Offline evaluation harness with 29 pytest modules',
      ],
      problem:
        'Pre-service teachers need realistic practice with students who hold real misconceptions, and following rules is not the same as behaving like a real student.',
      approach:
        'A paper-backed knowledge graph and Big Five personality model, Self-Refine reply loops, LangGraph group sessions, and an eval harness that scores behavior, not just rule-following. Grounded in interviews with pre-service and experienced teachers.',
      outcome:
        'Every model passed the rule checks while realism varied by more than 20 points, and a fine-tuned 8B open model came within 0.5 points of the best API model.',
      metrics: [
        { value: '75.0%', label: 'Best judged consistency' },
        { value: '74.5%', label: 'Fine-tuned Llama 3.1 8B' },
        { value: '29', label: 'pytest modules' },
      ],
    },
    {
      id: 'realtime-kg',
      tier: 'featured',
      caseStudy: true,
      title: 'Realtime Multi-Agent Knowledge Graph',
      category: 'Personal · Agents & Streaming',
      date: 'Jun 2026 – Present',
      sortDate: '2026-09',
      cardDescription:
        'Meeting audio → Kafka → Temporal → 4 LangGraph agents → Neo4j + Qdrant GraphRAG',
      image: '/projects/realtime-kg.svg',
      imageAlt:
        'Pipeline diagram: speech-to-text, Kafka, Temporal, four LangGraph agents, then Neo4j and Qdrant',
      link: '',
      github: GITHUB_REPOS.realtimeKg,
      technologies: ['Kafka', 'Temporal', 'LangGraph', 'Neo4j', 'Qdrant', 'FastAPI'],
      role: 'Solo: pipeline design, agents, storage, and observability.',
      contributions: [
        'Speech-to-text bridge (faster-whisper + pyannote diarization) turns meeting audio into speaker-labeled transcript events',
        'Kafka events drive Temporal workflows that process transcript segments concurrently',
        'A LangGraph supervisor routes each segment to decision, task, risk, and topic agents; an MCP write gate reviews changes before they reach Neo4j',
        'A GraphRAG query API picks between Neo4j Cypher and Qdrant semantic search; every stage is traced with Langfuse and OpenTelemetry',
      ],
      problem: 'Decisions, tasks, and risks from meetings get lost in transcripts.',
      approach:
        'An event-driven pipeline: streaming transcripts, durable workflows, specialized agents, and a dual graph + vector store.',
      outcome:
        'The core pipeline runs end to end, from audio to a queryable knowledge graph. The frontend is still in progress.',
      metrics: [{ value: '4', label: 'Specialized agents' }],
    },
    {
      id: 'rag-assistant',
      tier: 'featured',
      caseStudy: true,
      title: 'RAG-Powered Code Assistant',
      category: 'Personal · Retrieval',
      date: 'Mar – Oct 2026',
      sortDate: '2026-10',
      cardDescription:
        'Custom agent loop · hybrid retrieval at 0.88 recall@5 · C++ tokenizer 4.9x faster · 93% coverage',
      image: '/projects/rag-assistant.svg',
      imageAlt:
        'Bar chart of recall@5: hybrid BM25 plus dense retrieval 0.88, BM25 0.80, reranked 0.82, dense only 0.55',
      link: '',
      github: GITHUB_REPOS.ragAssistant,
      technologies: ['FastAPI', 'LangChain', 'Pinecone', 'C++ / pybind11', 'pytest', 'Docker'],
      role: 'Solo: retrieval, agent loop, C++ extension, tests, and CI/CD.',
      contributions: [
        'Replaced the stock LangChain agent executor with a custom tool-calling loop capped at 6 steps and 8 tool calls, with timeouts, an empty-retrieval fallback, and JSON traces',
        'Compared 4 retrievers on 220 auto-generated questions: hybrid BM25 + dense (reciprocal-rank fusion) reached 0.88 recall@5 vs 0.55 for dense alone; a cross-encoder reranker made results worse, so it was rejected',
        'C++ pybind11 tokenizer benchmarked at 4.9x an equivalent pure-Python tokenizer on 4.46M tokens',
        '106 pytest tests at 93% coverage (statements + branches); Docker image deployed to Hugging Face Spaces by GitHub Actions',
      ],
      problem:
        'Developers need grounded answers from large documentation sets, and retrieval quality has to be measured, not assumed.',
      approach:
        'A FastAPI service with a bounded agent loop, hybrid retrieval evaluated on a 5,586-page Python / pandas / NumPy corpus, and a C++ extension for chunking.',
      outcome:
        'Hybrid retrieval beat dense-only by 33 points of recall@5. Provisional: the questions are auto-generated, not yet human-verified.',
      metrics: [
        { value: '0.88', label: 'Recall@5 (hybrid)' },
        { value: '4.9x', label: 'Tokenizer speedup' },
        { value: '93%', label: 'Test coverage' },
      ],
    },
    {
      id: 'clinical-trials',
      tier: 'featured',
      title: 'Clinical Trials Query-to-Visualization Agent',
      category: 'Personal · Data & Agents',
      date: 'Apr 2026',
      sortDate: '2026-04',
      cardDescription:
        'Plain-English questions → ClinicalTrials.gov API v2 → cited charts · counts never come from the LLM',
      image: '/projects/clinical-trials.svg',
      imageAlt:
        'Flow diagram: a natural-language question becomes API filters, deterministic aggregation, and a cited chart',
      link: '',
      github: GITHUB_REPOS.clinicalTrials,
      technologies: ['FastAPI', 'OpenAI API', 'Pydantic', 'React', 'pytest'],
      role: 'Solo: API pipeline, aggregation engine, and frontend.',
      contributions: [
        'POST /v1/query turns natural-language filters into ClinicalTrials.gov API v2 calls, then normalizes and aggregates the results deterministically',
        '6 visualization types, each with deep citations back to the source studies',
        'Counts are computed in code, never taken from LLM output',
        '11 pytest modules covering API contracts, normalization, and the visualization engine',
      ],
      problem: 'Researchers want quick answers about trial landscapes, but LLMs make up numbers.',
      approach:
        'The LLM only parses intent; retrieval, counting, and chart specs are deterministic and cited.',
      outcome: 'Frontend-ready chart specs whose numbers trace back to the source studies.',
      metrics: [
        { value: '6', label: 'Chart types' },
        { value: '11', label: 'pytest modules' },
      ],
    },
    {
      id: 'llm-fine-tuning',
      tier: 'featured',
      title: 'LLM Fine-Tuning: Code Generation',
      category: 'Personal · LLM',
      date: 'Apr 2026',
      sortDate: '2026-04',
      cardDescription: 'LLaMA 3.2 3B + QLoRA · ROUGE-L 0.33 → 0.55 (+65%) · Hugging Face demo',
      image: '/projects/llm-fine-tuning.svg',
      imageAlt:
        'Before and after chart: ROUGE-L rises from 0.33 to 0.55 and BERTScore F1 from 0.78 to 0.89 after fine-tuning',
      link: HUGGINGFACE_PROFILE,
      github: GITHUB_REPOS.llmFineTuning,
      technologies: ['PyTorch', 'QLoRA', 'PEFT', 'HuggingFace', 'Gradio', 'MLflow'],
      role: 'Solo: fine-tuning pipeline, evaluation, and demo deployment.',
      contributions: [
        'Fine-tuned LLaMA 3.2 (3B) on CodeAlpaca-20k with 4-bit QLoRA, training about 1% of the parameters',
        'On 200 held-out samples: ROUGE-L 0.546 vs 0.330 for the base model (+65%), BERTScore F1 0.886 vs 0.784 (+13%)',
        'Tracked runs with MLflow and Weights & Biases; adapter and Gradio demo on Hugging Face, synced by GitHub Actions',
      ],
      problem:
        'General-purpose small LLMs underperform on instruction-following code generation without targeted fine-tuning.',
      approach:
        'Parameter-efficient fine-tuning with QLoRA on a free Colab T4, evaluated on a held-out set with ROUGE-L and BERTScore.',
      outcome: 'A small open model that follows code instructions much better than its base, with a public demo.',
      metrics: [
        { value: '+65%', label: 'ROUGE-L' },
        { value: '+13%', label: 'BERTScore F1' },
      ],
    },
    {
      id: 'multi-agent',
      tier: 'featured',
      title: 'Multi-Agent LLM Research Assistant',
      category: 'Personal · Agents',
      date: 'May 2026 – Present',
      sortDate: '2026-09',
      cardDescription:
        'LangGraph retriever, summarizer, and critic agents over PDFs and arXiv papers · FastAPI',
      image: '/projects/multi-agent.svg',
      imageAlt:
        'Agent graph: a question flows through retriever, summarizer, and critic agents, with a loop back for revision',
      link: '',
      github: GITHUB_REPOS.multiAgent,
      technologies: ['LangGraph', 'OpenAI API', 'ChromaDB', 'FastAPI', 'PyMuPDF'],
      role: 'Solo: agent workflow and API.',
      contributions: [
        'LangGraph workflow with retriever, summarizer, and critic agents for multi-hop research questions',
        'Ingests PDFs (PyMuPDF) and arXiv papers into a ChromaDB index with sentence-transformers embeddings',
        'Runs independent agent steps in parallel; served through FastAPI',
      ],
      problem:
        'Single-pass RAG struggles with research questions that need several rounds of retrieval and synthesis.',
      approach:
        'Specialized agents for retrieval, summarization, and critique, coordinated by a LangGraph graph.',
    },

    {
      id: 'career-ops',
      tier: 'more',
      title: 'Career Ops: Job Ingest & Resume Tooling',
      category: 'Personal · Data Platform',
      date: 'Jun 2026 – Present',
      sortDate: '2026-10',
      cardDescription:
        'Ingests postings from 10+ job boards, dedupes them in SQLite, and generates tailored resumes · 800+ pytest tests',
      link: '',
      github: '',
      technologies: ['Python', 'FastAPI', 'Pydantic', 'SQLite', 'Playwright', 'pytest'],
      role: 'Solo. Private repository.',
      contributions: [
        'FastAPI ingestion from 10+ sources (Greenhouse, Lever, Ashby, Workday, SmartRecruiters, GitHub listings, and a LinkedIn extension)',
        'Pydantic normalization and SQLite deduplication with per-source fault isolation',
        'Resume pack generator (LaTeX) with an ATS parse check on every PDF',
        'Corpus of 190+ logged job descriptions with keyword reports by role family',
        '60+ pytest modules, 800+ tests',
      ],
      metrics: [
        { value: '10+', label: 'Job sources' },
        { value: '800+', label: 'pytest tests' },
      ],
    },
    {
      id: 'buildflow',
      tier: 'more',
      title: 'BuildFlow: C++ Build & Regression Runner',
      category: 'Personal · Systems',
      date: 'Oct 2026',
      sortDate: '2026-10',
      cardDescription:
        'C++17 DAG scheduler · 3.07x faster on 4 workers · 16 GoogleTest + 6 pytest tests, clean under ASan/UBSan',
      link: '',
      github: '',
      technologies: ['C++17', 'CMake', 'GoogleTest', 'Python', 'pytest'],
      role: 'Solo. Repository not public yet.',
      contributions: [
        "Schedules a 32-job, 49-edge build/test DAG with Kahn's topological sort and a priority queue on 4 worker threads: 3.07x faster than 1 worker (median of 5, simulated jobs)",
        'Process-tree timeouts and retries capped at 2; a baseline-vs-candidate diff triaged 8 of 8 seeded failure types',
        'Clean under ASan/UBSan and Valgrind (0 errors), clang-tidy clean, 88.4% library line coverage',
      ],
      metrics: [
        { value: '3.07x', label: '4 workers vs 1' },
        { value: '8/8', label: 'Seeded failures triaged' },
      ],
    },
    {
      id: 'satellite-segmentation',
      tier: 'more',
      title: 'Satellite Image Segmentation Pipeline',
      category: 'Personal · Computer Vision',
      date: 'Feb 2026',
      sortDate: '2026-02',
      cardDescription: 'SAM2 on satellite imagery · mIoU 0.62 · pixel accuracy 0.78 on 17 test images',
      link: '',
      github: GITHUB_REPOS.satelliteSegmentation,
      technologies: ['SAM2', 'PyTorch', 'CUDA', 'OpenCV'],
      role: 'Solo: end-to-end pipeline and evaluation.',
      contributions: [
        'SAM2-based segmentation workflow for land-cover and infrastructure features',
        'Vectorized per-class IoU and pixel-accuracy evaluation across 17 test images',
        'GPU memory tuning (inference mode, CUDA cache handling) for large tiles',
      ],
      metrics: [
        { value: '0.62', label: 'mIoU' },
        { value: '0.78', label: 'Pixel accuracy' },
      ],
    },
    {
      id: 'better-beings',
      tier: 'more',
      title: 'Better Beings: Wellness Booking Platform',
      category: 'Production · Full-Stack',
      date: 'Jun 2026 – Present',
      sortDate: '2026-09',
      cardDescription:
        'Booking site and admin dashboard for a mental health practice · Vue 3 + Supabase · live in production',
      link: '',
      github: '',
      technologies: ['Vue 3', 'Supabase', 'Pinia', 'Vercel'],
      role: 'Solo. Built for a real practice.',
      contributions: [
        'Vue 3 + Supabase booking flow with admin approval and slot management',
        'Content-driven copy, light and dark themes, and accessible UI patterns',
        'Deployed on Vercel with a row-level-security Supabase backend',
      ],
    },
    {
      id: 'iit-bombay-analytics',
      tier: 'more',
      title: 'Analytics Platform @ IIT Bombay',
      category: 'Professional · Full-Stack',
      date: 'Feb – Sep 2024',
      sortDate: '2024-09',
      cardDescription:
        'Used by 20+ faculty · ~60% faster dashboard setup · 100+ templates from a Figma-to-HTML parser',
      link: '',
      github: '',
      technologies: ['PHP', 'MySQL', 'Yii', 'AJAX', 'TypeScript'],
      role: 'ML/Data Research Intern: full-stack analytics platform.',
      contributions: [
        'Data visualization and theme builder for 20+ faculty',
        'Figma-to-HTML parser with drag-and-drop and 100+ reusable report templates',
        'MySQL indexing across 500+ layout configurations plus AJAX loading, cutting latency by ~40–80%',
      ],
      metrics: [
        { value: '20+', label: 'Faculty users' },
        { value: '~60%', label: 'Faster setup' },
        { value: '100+', label: 'Templates' },
      ],
    },

    {
      id: 'gui-testing-survey',
      tier: 'publication',
      title: 'Automated GUI Testing to Enhance UX',
      category: 'Publication · First Author',
      date: 'Springer 2024',
      sortDate: '2024-01',
      cardDescription: 'A Survey of the State of the Art · Springer',
      link: 'https://link.springer.com/chapter/10.1007/978-981-97-6700-5_18',
      github: '',
      isPublication: true,
      technologies: ['Springer', 'First Author', 'GUI Testing', 'UX'],
      problem:
        'No survey connected automated GUI testing methods to their effect on user experience.',
      outcome: 'Published as first author in Springer proceedings, 2024.',
      abstract:
        'A survey of automated GUI testing approaches and their role in improving user experience across modern software applications.',
    },
    {
      id: 'blockchain-donation',
      tier: 'publication',
      title: 'Blockchain Donation Transparency',
      category: 'Publication · Co-Author',
      date: 'IEEE 2024',
      sortDate: '2024-01',
      cardDescription: 'Disaster relief donation tracking on a blockchain · IEEE',
      link: 'https://ieeexplore.ieee.org/document/10499547',
      github: '',
      isPublication: true,
      technologies: ['Blockchain', 'IEEE', 'Smart Contracts'],
      problem:
        'Disaster relief donations lack transparency, which reduces donor trust and aid effectiveness.',
      outcome: 'Published as co-author at IEEE, 2024.',
      abstract:
        'A blockchain system for transparent disaster relief donation tracking, so donors can verify how funds are allocated.',
    },
  ],

  certifications: [
    {
      name: 'Summer & Spring School on Advanced Engineering and Data Science',
      issuer: 'Tokushima University, Japan',
      date: '2023',
    },
  ],

  publications: [
    {
      title: 'Automated GUI Testing to Enhance UX: A Survey of the State of the Art',
      venue: 'Springer',
      role: 'First author',
      date: '2024',
      link: 'https://link.springer.com/chapter/10.1007/978-981-97-6700-5_18',
    },
    {
      title: 'Increasing Donation Transparency in Disaster Relief: A Blockchain-based Solution',
      venue: 'IEEE',
      role: 'Co-author',
      date: '2024',
      link: 'https://ieeexplore.ieee.org/document/10499547',
    },
  ],
}
