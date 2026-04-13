export const PLACEHOLDER_WEBSITE = "https://trungnef.github.io/";

export const PROFILE = {
  name: "Bui The Trung",
  shortName: "Trung",
  brandName: "Bui The Trung",
  jobTitle: "AI Engineer",
  heroTitle: ["AI", "Engineer"],
  typingWords: [
    "LLM Applications and RAG Engineer",
    "Document Intelligence Builder",
    "Research-Driven AI Product Engineer",
  ],
  heroTechStack: ["Python", "PyTorch", "Hugging Face", "RAG", "n8n", "Azure"],
  email: "trune.naee@gmail.com",
  phoneDisplay: "(+84) 373 104 304",
  phoneHref: "tel:+84373104304",
  github: "https://github.com/Trungnef",
  linkedin: "https://www.linkedin.com/in/trune-nae-606128399/",
  siteUrl: PLACEHOLDER_WEBSITE,
  siteLabel: "trungnef.github.io",
  cvPath: "/CV_Master_Bui_The_Trung.pdf",
  avatar: "/Photo.jpg",
  ogImage: `${PLACEHOLDER_WEBSITE}/Meta.png`,
  location: "Duong Quang Ham, Quan Hoa, Cau Giay, Hanoi, Vietnam",
  summary:
    "AI Engineer with hands-on experience building LLM applications, RAG systems, and document intelligence solutions. Strong in NLP, machine learning, fine-tuning, evaluation, and turning research ideas into practical products.",
  about:
    "Driven AI Engineer with hands-on experience across LLM fine-tuning, conversational AI, document QA, proposal generation workflows, and applied research. Comfortable working from experimentation to backend implementation and product-facing AI features while keeping the work grounded in measurable utility.",
  quote: "Leveraging AI as a professional tool, not a replacement.",
  seoDescription:
    "Bui The Trung is an AI Engineer focused on LLM applications, RAG systems, document intelligence, fine-tuning, and practical AI product development.",
  primaryLinkUrl: "https://github.com/Trungnef",
  primaryLinkLabel: "github.com/Trungnef",
};

export const PROFILE_STATS = [
  {
    label: "GPA",
    value: "3.61/4",
    description: "Bachelor of Computer Science and Engineering",
  },
  {
    label: "IELTS",
    value: "6.5",
    description: "English certification listed in the CV",
  },
  {
    label: "Publication",
    value: "STDJ",
    description: "2026 publication on Vietnamese SLM reasoning",
  },
];

export const EDUCATION = {
  period: "2021 - 2025",
  institution:
    "Vietnam Japan University (VJU) - Vietnam National University, Hanoi",
  degree: "Bachelor of Computer Science and Engineering",
  gpa: "3.61/4",
  coursework: [
    "Algorithms for Data Science",
    "Natural Language Processing",
    "Machine Learning and Deep Learning",
    "Statistical Methods for Data Analysis",
  ],
};

export const EXPERIENCE_ITEMS = [
  {
    role: "AI Engineer",
    company: "Aimesoft Company",
    location: "Hanoi, Vietnam",
    period: "December 2025 - Present",
    project: "NTTEA - Japanese Administrative Text Generation",
    highlights: [
      "Built data preparation and fine-tuning workflows for Japanese administrative writing based on approximately 120 official rules.",
      "Fine-tuned Tsuzumi-28B to generate compliant administrative documents from bullet-point inputs and rewrite informal text into formal administrative style.",
      "Supported model evaluation using MT-Bench and JGLUE benchmarks.",
    ],
  },
  {
    role: "AI Engineer",
    company: "Aimesoft Company",
    location: "Hanoi, Vietnam",
    period: "December 2025 - Present",
    project: "Linebot Meisei - LINE Mini App Ordering Bot",
    highlights: [
      "Developed backend and product features for a LINE-based ordering bot integrated with a mini-app workflow.",
      "Contributed to conversational flow design, order handling logic, and AI-assisted user interaction for product ordering.",
      "Worked on product-facing chatbot behavior that supported smoother order capture and response flow.",
    ],
  },
  {
    role: "AI Engineer",
    company: "Aimesoft Company",
    location: "Hanoi, Vietnam",
    period: "December 2025 - Present",
    project: "Rakuyaku - QC Check / Consistency Check Tool",
    highlights: [
      "Built AI backend services for document consistency checking across one or more PDF files.",
      "Applied RAG to enable semantic retrieval and automated question answering over complex PDF documents.",
      "Designed backend logic supporting consistency verification workflows for document quality control.",
    ],
  },
  {
    role: "AI Engineer",
    company: "Aimesoft Company",
    location: "Hanoi, Vietnam",
    period: "December 2025 - Present",
    project: "RAG (QA Assist)",
    highlights: [
      "Developed a RAG-based QA assistant service that manages documents, chat history, and conversational context for grounded question answering.",
      "Implemented context orchestration for a generative AI API-based system and improved retrieval flow for more relevant responses.",
      "Focused on backend service behavior for multi-document question answering and context-aware response generation.",
    ],
  },
  {
    role: "AI Engineer",
    company: "Aimesoft Company",
    location: "Hanoi, Vietnam",
    period: "December 2025 - Present",
    project: "AimeDoc - Proposal Generation System",
    highlights: [
      "Contributed to an internal product that generates PowerPoint proposal decks from requirement documents, specifications, and reference materials.",
      "Supported document ingestion, content structuring, and generation workflows to reduce manual proposal drafting effort.",
      "Worked on turning scattered requirement inputs into more structured proposal-generation pipelines.",
    ],
  },
  {
    role: "AI Engineer",
    company: "DataCom Corp",
    location: "Japan",
    period: "March 2025 - May 2025",
    project: "Retail Manufacturer Matching Platform",
    highlights: [
      "Contributed to an AI-powered platform connecting manufacturers, brands, and retailers in the CPG industry.",
      "Applied machine learning methods for real-time analysis and market insights.",
      "Implemented predictive analytics features to support faster, data-informed decisions.",
    ],
  },
];

export const RESEARCH_ITEMS = [
  {
    type: "Student Research",
    title:
      "Research on the Chain of Thought technique in Large Language Models",
    organization: "Vietnam Japan University",
    location: "Hanoi, Vietnam",
    period: "February 2025 - June 2025",
    highlights: [
      "Compared zero-shot, few-shot, Chain of Thought, self-consistency, and ReAct prompting using local LLMs such as LLaMA, Qwen, and Gemini.",
      "Implemented evaluation metrics with the Groq platform to analyze reasoning performance on traditional Vietnamese problems.",
      "Showed how prompting strategies change the practical problem-solving ability of AI models.",
    ],
  },
  {
    type: "Student Research",
    title:
      "Training a high-performance Vietnamese language model based on the Mamba-2-hybrid architecture",
    organization: "Vietnam Japan University",
    location: "Hanoi, Vietnam",
    period: "July 2024 - November 2024",
    highlights: [
      "Developed a Vietnamese language model using a Mamba-hybrid architecture.",
      "Extended Falcon Mamba 7B to improve Vietnamese vocabulary coverage and syntactic understanding.",
      "Evaluated long-context performance and presented findings in academic and professional forums.",
    ],
  },
];

export const PUBLICATIONS = [
  {
    year: "2026",
    venue: "STDJ",
    title:
      "Bridging the Reasoning Gap in Vietnamese with Small Language Models via Test-Time Scaling",
    authors:
      "Bui The Trung, Do Minh Duc, Nguyen Van Vinh, Bui Nguyen Quoc Trinh",
    highlights: [
      "Studied reasoning limitations of Vietnamese small language models and applied test-time scaling techniques.",
      "Built Vi-S1K for training and Vi-Elementary-Bench for evaluation in Vietnamese mathematical reasoning.",
      "Showed that supervised fine-tuning improved explanation quality by 77% on a 1.7B-parameter model.",
    ],
  },
];

export const HONORS_AND_AWARDS = [
  {
    title: "BIDV Scholarship",
    issuer: "BIDV",
    period: "2021",
  },
  {
    title: "Toshiba Scholarship",
    issuer: "Toshiba",
    period: "2023",
  },
  {
    title: "Outstanding Young Face of VJU",
    issuer: "Vietnam Japan University",
    period: "2023",
  },
  {
    title: "Encouraging Studying Scholarship",
    issuer: "Vietnam Japan University",
    period: "2021 - 2025",
  },
  {
    title: "10th Youth Global Leadership Program",
    issuer: "Seoul, Korea",
    period: "November 2024 - December 2024",
  },
  {
    title: "Certificate of Commendation",
    issuer: "Youth Union of National University of Vietnam - VJU",
    period: "August 2024 - September 2024",
  },
  {
    title: "Encouragement Award - Path of Light VII",
    issuer:
      "Contest on Marxism-Leninism, Ho Chi Minh Thought, and Party History",
    period: "April 2024",
  },
  {
    title: "Second Place - 2023 Law Propagation Contest",
    issuer: "School of Law, National University of Vietnam, Hanoi",
    period: "December 2023",
  },
];

export const CERTIFICATIONS = [
  {
    title: "IELTS 6.5",
    issuer: "IELTS",
    period: "2025",
  },
];

export const SKILL_CATEGORIES = [
  {
    title: "Programming & AI",
    subtitle: "Core technical foundation",
    items: [
      "Python for AI prototyping, backend logic, and experimentation.",
      "Machine Learning and Deep Learning for practical product and research workflows.",
      "Natural Language Processing, LLM fine-tuning, prompt engineering, and RAG.",
    ],
  },
  {
    title: "Frameworks & Libraries",
    subtitle: "Primary model and workflow stack",
    items: [
      "PyTorch for model training and experimentation.",
      "Hugging Face ecosystem for fine-tuning and evaluation pipelines.",
      "n8n and Dify for building and orchestrating LLM workflows.",
    ],
  },
  {
    title: "Tools & Platforms",
    subtitle: "Delivery and experimentation tools",
    items: [
      "Git for version control and collaboration.",
      "Docker for packaging and deployment workflows.",
      "Jupyter Notebook, Azure, and AWS for experimentation and cloud-based work.",
    ],
  },
  {
    title: "Evaluation & Data",
    subtitle: "Measurement and retrieval-oriented work",
    items: [
      "Model evaluation, benchmark-oriented analysis, and experiment workflows.",
      "Semantic search and document question answering over complex files.",
      "Data analysis for retrieval quality, reasoning behavior, and system usefulness.",
    ],
  },
];

export const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    label: "Professional profile",
    value: "trune-nae-606128399",
    url: PROFILE.linkedin,
  },
  {
    name: "GitHub",
    label: "Code and repositories",
    value: "Trungnef",
    url: PROFILE.github,
  },
  {
    name: "Email",
    label: "Direct contact",
    value: PROFILE.email,
    url: `mailto:${PROFILE.email}`,
  },
  {
    name: "Phone",
    label: "Direct phone line",
    value: PROFILE.phoneDisplay,
    url: PROFILE.phoneHref,
  },
  {
    name: "Portfolio Website",
    label: "website",
    value: PROFILE.siteLabel,
    url: PROFILE.siteUrl,
  },
];
