export const PLACEHOLDER_WEBSITE = "https://your-portfolio-domain.com";

export const PROFILE = {
  name: "Bui The Trung",
  shortName: "Trung",
  brandName: "Bui The Trung",
  jobTitle: "AI Engineer",
  heroTitle: ["AI", "Engineer"],
  typingWords: [
    "NLP and LLM Engineer",
    "Applied Machine Learning Builder",
    "Research-Driven Problem Solver",
  ],
  heroTechStack: ["Python", "PyTorch", "Hugging Face", "Dify", "AWS"],
  email: "trune.naee@gmail.com",
  phoneDisplay: "(+84) 373 104 304",
  phoneHref: "tel:+84373104304",
  github: "https://github.com/Trungnef",
  linkedin: "https://www.linkedin.com/in/trune-nae-606128399/",
  siteUrl: PLACEHOLDER_WEBSITE,
  siteLabel: "your-portfolio-domain.com",
  cvPath: "/CV_Bui_The_Trung_UK.pdf",
  avatar: "/Photo.jpg",
  ogImage: `${PLACEHOLDER_WEBSITE}/Meta.png`,
  location: "Duong Quang Ham, Quan Hoa, Cau Giay, Hanoi, Vietnam",
  summary:
    "AI Engineer with a strong foundation in computer science, natural language processing, and applied machine learning. Focused on turning research into practical systems that improve workflows and solve real-world problems.",
  about:
    "Driven and innovative AI Engineer with hands-on experience in NLP, LLM evaluation, fine-tuning, reasoning research, and AI workflow design. Comfortable working across experimentation, implementation, and deployment while keeping the work grounded in measurable outcomes.",
  quote: "Leveraging AI as a professional tool, not a replacement.",
  seoDescription:
    "Bui The Trung is an AI Engineer focused on NLP, LLM fine-tuning, reasoning research, RAG workflows, and practical machine learning systems.",
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
    value: "FJCAI",
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
      "Developed data and fine-tuning workflows for Japanese administrative writing (Bunko) based on around 120 official rules.",
      "Fine-tuned Tsuzumi-28B to generate compliant administrative documents from bullet-point inputs.",
      "Supported model evaluation using MT-Bench and JGLUE benchmarks.",
    ],
  },
  {
    role: "Student Research",
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
    venue: "FJCAI",
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
  {
    title: "JLPT N4",
    issuer: "Japanese Language Proficiency Test",
    period: "2024",
  },
];

export const SKILL_CATEGORIES = [
  {
    title: "Natural Language Processing",
    description:
      "Experience with text preprocessing, prompt design, and evaluation for NLP tasks.",
  },
  {
    title: "Python / Machine Learning / Deep Learning",
    description:
      "Hands-on experience using Python with PyTorch and Hugging Face for fine-tuning and evaluating language models.",
  },
  {
    title: "LLM Frameworks and Workflows",
    description:
      "Experience integrating LLMs into chatbot and RAG workflows using Dify.",
  },
  {
    title: "Data Analysis and Visualization",
    description:
      "Hands-on data analysis and result inspection for model evaluation and experiments.",
  },
  {
    title: "Tools and Platforms",
    description:
      "Jupyter Notebook, Git, Hugging Face ecosystem, AWS, Dify, and Docker.",
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
    label: "Placeholder - update later",
    value: PROFILE.siteLabel,
    url: PROFILE.siteUrl,
  },
];
