import { ServiceItem, CaseStudy, IndustryItem, JobOpening, Testimonial, HubLocation } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'custom-software',
    title: 'Custom Software Engineering',
    shortDesc: 'Build resilient, scalable, and high-performance bespoke software tailored to your specific business logic and competitive advantages.',
    iconName: 'Code2',
    category: 'Software',
    features: [
      'Modern microservices & event-driven distributed architectures',
      'High-throughput real-time APIs (REST, GraphQL, gRPC)',
      'Legacy software modernizing & cloud re-platforming',
      'Clean Code, TDD, Domain-Driven Design (DDD)'
    ],
    deliverables: [
      'Production-ready backend & frontend codebases',
      'Comprehensive automated test suites (>85% coverage)',
      'CI/CD pipeline configuration & infra scripts',
      'Technical architecture documentation & runbooks'
    ],
    technologies: ['TypeScript', 'Node.js', 'Go', 'Python', 'Rust', 'Java Spring', 'React', 'Next.js'],
    metricHighlight: '3.4x faster time-to-market compared to traditional in-house ramp-up'
  },
  {
    id: 'ai-data',
    title: 'AI, GenAI & Data Intelligence',
    shortDesc: 'Turn raw data into proprietary intelligence with custom LLMs, RAG architectures, vision models, and robust enterprise MLOps.',
    iconName: 'Cpu',
    category: 'AI & Data',
    features: [
      'Enterprise Retrieval-Augmented Generation (RAG) & Vector search',
      'Autonomous AI Agent workflows & Multi-agent orchestration',
      'Domain-specific fine-tuning (Llama 3, Gemini, Mistral)',
      'Scalable real-time streaming data pipelines & lakehouses'
    ],
    deliverables: [
      'Production AI agents with guardrails & latency monitoring',
      'Vector databases (Pinecone, Qdrant, Milvus) deployment',
      'Data extraction & ETL pipelines in dbt and Apache Spark',
      'Compliance & model hallucination evaluation benchmarks'
    ],
    technologies: ['PyTorch', 'Gemini API', 'LangChain', 'LlamaIndex', 'Databricks', 'Snowflake', 'PostgreSQL pgvector', 'Hugging Face'],
    metricHighlight: '62% reduction in manual data processing overhead for clients'
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps Modernization',
    shortDesc: 'Architect zero-downtime, multi-region cloud infrastructures with automated GitOps, infrastructure-as-code, and strict DevSecOps.',
    iconName: 'Cloud',
    category: 'Cloud & DevOps',
    features: [
      'Cloud-native Kubernetes (EKS, GKE, AKS) orchestration',
      'Infrastructure as Code (Terraform, Pulumi, Ansible)',
      'GitOps pipelines with ArgoCD & GitHub Actions',
      'Cloud cost optimization (FinOps) & auto-scaling clusters'
    ],
    deliverables: [
      'Immutable Infrastructure as Code repository',
      'Comprehensive monitoring & observability with Prometheus/Datadog',
      'Disaster recovery & multi-region failover blueprints',
      'Hardened SOC2 / ISO 27001 compliant cloud topology'
    ],
    technologies: ['AWS', 'Google Cloud', 'Microsoft Azure', 'Docker', 'Kubernetes', 'Terraform', 'ArgoCD', 'Datadog'],
    metricHighlight: '40% average cloud infrastructure cost reduction achieved'
  },
  {
    id: 'dedicated-teams',
    title: 'Dedicated Agile Engineering Pods',
    shortDesc: 'Instantly augment your capacity with pre-vetted, top 1% senior engineering teams from Chennai that integrate seamlessly into your workflow.',
    iconName: 'Users2',
    category: 'Teams',
    features: [
      'Autonomous cross-functional pods (Lead, Full-Stack, AI, QA, DevOps)',
      'Time zone aligned delivery across India (IST), Americas (EST/PST), EMEA & APAC',
      'Direct communication in Slack/Teams and Jira integration',
      'Strict transparency, sprint demos, and weekly velocity reports'
    ],
    deliverables: [
      'Zero onboarding friction — team operational in under 10 business days',
      'Dedicated Scrum Master & Technical Delivery Lead',
      'Full IP and code ownership transferred in real-time',
      'Flexible scale-up and scale-down contracts'
    ],
    technologies: ['Agile / Scrum', 'Jira', 'GitHub', 'GitLab', 'Slack', 'Linear'],
    metricHighlight: '98% client team retention rate with 14-day replacement guarantee'
  },
  {
    id: 'product-design',
    title: 'Digital Product Design & UX/UI',
    shortDesc: 'Design intuitive, high-converting digital interfaces backed by deep user research, design systems, and rapid prototyping.',
    iconName: 'Palette',
    category: 'Software',
    features: [
      'Enterprise Design Systems & Tokenized Component Libraries',
      'User Journey Mapping, Customer Persona & Usability Testing',
      'Interactive Figma prototypes and micro-interaction animations',
      'Accessibility audit conforming to WCAG 2.2 AA standards'
    ],
    deliverables: [
      'Production-ready Figma UI component library',
      'Validated usability test reports & heatmaps',
      'Design tokens synced directly to frontend repositories',
      'Responsive design guidelines for Mobile, Tablet, Desktop'
    ],
    technologies: ['Figma', 'Storybook', 'Tailwind CSS', 'Framer Motion', 'Hotjar', 'Miro'],
    metricHighlight: '+140% improvement in user task completion speed'
  }
];

export const CASE_STUDIES_DATA: CaseStudy[] = [
  {
    id: 'finscale-neobank',
    title: 'AI-Powered Financial Analytics & Automated Risk Underwriting Engine',
    client: 'BharatScale Financial Analytics',
    industry: 'FinTech',
    heroMetric: '6.2x',
    heroMetricLabel: 'Faster Financial Modeling & Automated Reconciliation',
    summary: 'nxt info tech engineered an enterprise financial analytics platform and automated AI reconciliation engine that processes multi-currency financial data streams in real-time.',
    challenge: 'Manual reconciliation of millions of ledger entries across disparate accounts created severe operational delays, reporting lags, and high audit overhead.',
    solution: 'Architected an event-driven Go and Python data processing pipeline orchestrated on AWS EKS with Kafka streaming, Redis caching, and real-time ML anomaly detection.',
    results: [
      'Automated 99.4% of daily financial reconciliation with zero manual intervention',
      'Reduced corporate financial report generation time from 6 hours to under 4 minutes',
      'Saved over ₹8 Crore in annual operational and audit compliance overhead',
      'Built to SOC2 Type II, ISO 27001, and Indian DPDP data security standards'
    ],
    techStack: ['Python', 'Go', 'Apache Kafka', 'PostgreSQL', 'AWS EKS', 'Redis', 'React / TypeScript'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    testimonial: {
      quote: 'nxt info tech transformed our financial data architecture. Their Chennai engineering pod delivered an automated, enterprise-grade analytics engine that exceeded our scalability expectations.',
      author: 'Rajesh Nair',
      role: 'Chief Technology Officer, BharatScale',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    }
  },
  {
    id: 'medvanguard-ai',
    title: 'ABDM & HIPAA-Compliant Diagnostic Assistant for 75+ Hospital Chains',
    client: 'MedVanguard Health Informatics',
    industry: 'HealthTech',
    heroMetric: '68%',
    heroMetricLabel: 'Faster Clinical Documentation & Report Turnaround',
    summary: 'Engineered a secure generative AI clinical copilot that ingests electronic health records (EHR) and radiology notes to assist physicians in real-time diagnostics across India and international networks.',
    challenge: 'Physicians were spending over 3.5 hours per day on manual data entry and unstructured documentation, leading to clinician burnout and diagnosis delays.',
    solution: 'Developed an isolated, private LLM pipeline using vector embeddings and FHIR/ABDM data standards with end-to-end cryptographic audit trails and zero data retention.',
    results: [
      'Adopted by 75+ premier hospital networks across India, US, and UK',
      'Reduced physician administrative paperwork by 2.2 hours daily per doctor',
      '100% compliant with India DPDP Act 2023, ABDM standards, HIPAA, and GDPR',
      '99.4% accuracy on medical entity extraction benchmarks'
    ],
    techStack: ['Python', 'FastAPI', 'Gemini Models', 'Qdrant Vector DB', 'React', 'Google Cloud Healthcare API', 'Docker'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    testimonial: {
      quote: 'The precision and safety checks engineered by nxt info tech set a new benchmark in healthcare AI. Our clinical staff adoption rate exceeded 95% within 3 weeks.',
      author: 'Dr. Priya Sundaram',
      role: 'Head of Medical Informatics, MedVanguard',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
    }
  }
];

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: 'fintech',
    name: 'FinTech & Financial Services',
    tagline: 'High-performance financial software & analytics engines',
    description: 'We build enterprise financial dashboards, automated ledger reconciliation systems, algorithmic risk assessment tools, wealth management platforms, and AI fraud prevention.',
    icon: 'Landmark',
    solutions: ['Financial Analytics & BI Dashboards', 'Automated Ledger & Invoice Reconciliation', 'Algorithmic Risk Assessment & Underwriting', 'WealthTech & Portfolio Management', 'AI Fraud Detection & Compliance Automation'],
    impactMetric: 'Over ₹12,000 Crore in portfolio & transaction value managed securely',
    activeClients: 24
  },
  {
    id: 'healthtech',
    name: 'HealthTech & Life Sciences',
    tagline: 'Safe, certified digital healthcare solutions',
    description: 'Empowering hospitals, diagnostic labs, and health platforms with ABDM/HIPAA-compliant telehealth platforms, EHR integrations, and AI clinical diagnostic aids.',
    icon: 'Stethoscope',
    solutions: ['ABDM & FHIR Integration', 'AI Medical Diagnostic Copilots', 'HIPAA & DPDP Compliant Cloud', 'Patient Telemetry IoT', 'Clinical Trial Analytics'],
    impactMetric: 'Over 3.2M patient records handled with 0 security incidents',
    activeClients: 18
  },
  {
    id: 'telecom',
    name: 'Telecom & 5G Connectivity',
    tagline: 'Carrier-grade distributed infrastructure',
    description: 'Supporting Tier-1 telecom providers with 5G orchestration platforms, real-time CDR streaming analytics, OSS/BSS digital transformations, and edge computing architectures.',
    icon: 'Radio',
    solutions: ['5G Network Slicing Management', 'Real-time Streaming Analytics', 'OSS/BSS Modernization', 'Self-service Customer Portals', 'Edge AI Inference'],
    impactMetric: '25M+ daily events processed with sub-second latency',
    activeClients: 12
  },
  {
    id: 'retail',
    name: 'Retail & Quick Commerce',
    tagline: 'High-conversion omnichannel commerce',
    description: 'Modernizing retail with headless architecture, ONDC network integrations, smart warehouse forecasting, real-time visual search, and frictionless UPI checkout flows.',
    icon: 'ShoppingBag',
    solutions: ['Headless eCommerce & ONDC Integration', 'AI Personalized Recommendations', 'Supply Chain Visibility', 'Dynamic Pricing Engines', 'Mobile POS & UPI Integration'],
    impactMetric: '+40% average conversion lift across retail deployments',
    activeClients: 20
  },
  {
    id: 'saas',
    name: 'High-Tech SaaS & Cloud',
    tagline: 'Multi-tenant scale from India to the world',
    description: 'Accelerating venture-backed and enterprise SaaS companies with multi-tenant architectures, usage-based billing, enterprise SSO, and autonomous AI features.',
    icon: 'Layers',
    solutions: ['Multi-tenant Cloud Architecture', 'Stripe & Razorpay Billing Engines', 'SAML/SSO & RBAC', 'AI Feature Integration', 'Automated DevOps & CI/CD'],
    impactMetric: 'Zero downtime achieved across 18 SaaS enterprise migrations',
    activeClients: 28
  },
  {
    id: 'energy',
    name: 'Energy & Smart Utilities',
    tagline: 'IoT monitoring and green tech systems',
    description: 'Engineering smart grid monitoring, predictive maintenance for solar and renewable energy parks, and real-time power distribution analytics for modern utility providers.',
    icon: 'Zap',
    solutions: ['Smart Grid IoT Telemetry', 'Predictive Equipment Maintenance', 'Carbon Tracking Dashboards', 'Renewable Asset Analytics', 'SCADA Modernization'],
    impactMetric: '6.2GW of clean energy monitored across client assets',
    activeClients: 11
  }
];

export const JOB_OPENINGS: JobOpening[] = [
  {
    id: 'ai-architect',
    title: 'Senior AI & GenAI Solutions Architect',
    department: 'Engineering & AI',
    location: 'Chennai, India',
    workplaceType: 'Chennai HQ',
    employmentType: 'Full-Time',
    experience: '5+ Years',
    salaryRange: '₹28L – ₹45L CTC + ESOPs',
    skills: ['Python', 'LangChain', 'LlamaIndex', 'RAG', 'PyTorch', 'Vector DBs', 'Gemini API', 'FastAPI'],
    description: 'Lead the architecture and production deployment of enterprise Generative AI systems, Multi-Agent pipelines, and RAG architectures for Tier-1 Indian and global clients.',
    responsibilities: [
      'Architect resilient enterprise RAG systems with hybrid vector search and semantic re-ranking',
      'Design multi-agent orchestration frameworks with automated evaluation and guardrails',
      'Collaborate directly with client CTOs and engineering directors on AI roadmaps',
      'Mentor and elevate senior engineers across our Chennai AI engineering pods'
    ],
    requirements: [
      '5+ years of software engineering experience with 2+ years specialized in production LLM/AI systems',
      'Deep hands-on expertise in Python, Vector Databases (Qdrant, Pinecone), and LangChain / LlamaIndex',
      'Strong grasp of model fine-tuning, latency optimization, and compliance (DPDP Act, SOC 2)'
    ]
  },
  {
    id: 'lead-fullstack',
    title: 'Lead Full-Stack Engineer (Go / React / TypeScript)',
    department: 'Engineering & AI',
    location: 'Chennai, India',
    workplaceType: 'Chennai (On-site / Hybrid)',
    employmentType: 'Full-Time',
    experience: '4+ Years',
    salaryRange: '₹22L – ₹36L CTC',
    skills: ['Go', 'TypeScript', 'React', 'Next.js', 'PostgreSQL', 'Redis', 'Kafka', 'GraphQL'],
    description: 'Drive the engineering of high-throughput microservices, sub-second financial transaction switches, and modern web applications with zero technical debt.',
    responsibilities: [
      'Design and build scalable REST, GraphQL, and gRPC APIs handling thousands of req/sec',
      'Develop modern, responsive web apps using React 19, Next.js, and TypeScript',
      'Write clean, modular code with Domain-Driven Design and comprehensive automated test suites',
      'Participate in agile sprint planning, architectural code reviews, and pair programming'
    ],
    requirements: [
      '4+ years building production full-stack systems with strong proficiency in Go or Node.js and React',
      'Demonstrated expertise in relational databases, caching strategies, and event-driven queues',
      'Passion for software craft, clean code, TDD, and CI/CD pipelines'
    ]
  },
  {
    id: 'cloud-devops-eng',
    title: 'Senior Cloud & DevOps Engineer (Kubernetes / IaC)',
    department: 'Cloud & DevOps',
    location: 'Chennai, India',
    workplaceType: 'Chennai HQ',
    employmentType: 'Full-Time',
    experience: '4+ Years',
    salaryRange: '₹20L – ₹34L CTC',
    skills: ['Kubernetes', 'Terraform', 'AWS', 'GCP', 'ArgoCD', 'Docker', 'Prometheus', 'Datadog'],
    description: 'Design and automate zero-downtime, multi-region cloud infrastructures with GitOps pipelines, infrastructure-as-code, and hardened DevSecOps protocols.',
    responsibilities: [
      'Provision and manage multi-cluster Kubernetes environments on AWS (EKS) and GCP (GKE)',
      'Automate cloud infrastructure using Terraform modules and GitOps pipelines with ArgoCD',
      'Implement enterprise observability, synthetic monitoring, and disaster recovery blueprints',
      'Optimize cloud architecture for high reliability, FinOps cost efficiency, and security audits'
    ],
    requirements: [
      '4+ years in Cloud / DevOps / Platform Engineering roles',
      'Deep hands-on experience with Kubernetes, Terraform, Docker, and AWS / GCP services',
      'Solid background in CI/CD automation, security hardening, and Linux systems administration'
    ]
  },
  {
    id: 'product-designer',
    title: 'Senior Digital Product & UI/UX Designer',
    department: 'Design & UX',
    location: 'Chennai, India',
    workplaceType: 'Chennai (On-site / Hybrid)',
    employmentType: 'Full-Time',
    experience: '3+ Years',
    salaryRange: '₹16L – ₹26L CTC',
    skills: ['Figma', 'Design Systems', 'UX Research', 'Prototyping', 'Design Tokens', 'Micro-interactions'],
    description: 'Craft intuitive, high-converting digital interfaces, enterprise SaaS dashboards, and tokenized design systems for web and mobile products.',
    responsibilities: [
      'Lead end-to-end product design from user journey mapping to high-fidelity Figma components',
      'Establish scalable, tokenized Design Systems synced directly with frontend codebases',
      'Conduct usability testing sessions, customer interviews, and heuristic evaluations',
      'Work closely with engineering pods to ensure pixel-perfect implementation'
    ],
    requirements: [
      '3+ years of experience designing complex web apps and digital products with a strong portfolio',
      'Expertise in Figma, component architectures, design tokens, and interactive prototyping',
      'Deep understanding of accessibility (WCAG 2.2 AA) and modern web design aesthetics'
    ]
  },
  {
    id: 'qa-lead',
    title: 'Lead QA & Test Automation Engineer',
    department: 'Quality Engineering',
    location: 'Chennai, India',
    workplaceType: 'Chennai HQ',
    employmentType: 'Full-Time',
    experience: '3+ Years',
    salaryRange: '₹15L – ₹24L CTC',
    skills: ['Playwright', 'Cypress', 'TypeScript', 'k6', 'API Testing', 'Postman', 'CI/CD Gates'],
    description: 'Architect comprehensive automated testing matrices, API stress benchmarks, and continuous integration security gates to guarantee zero-defect releases.',
    responsibilities: [
      'Build and maintain scalable E2E automation frameworks using Playwright and TypeScript',
      'Design automated API load and stress testing scripts with k6 and Postman',
      'Embed automated quality gates into GitHub Actions and GitLab CI pipelines',
      'Collaborate with developers to achieve >85% automated test coverage across services'
    ],
    requirements: [
      '3+ years of experience in test automation and quality engineering',
      'Proficiency in Playwright / Cypress with TypeScript / JavaScript or Python',
      'Hands-on experience with CI/CD integration, API testing, and performance benchmarking'
    ]
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: '1',
    quote: 'nxt info tech is by far the highest quality engineering partner we have collaborated with in India. Their engineers hit the ground running within 48 hours and consistently exceed our sprint velocity targets.',
    clientName: 'Vikramaditya Singhania',
    clientRole: 'Chief Technology Officer',
    company: 'NovaPay Global',
    companyLogoText: 'NOVAPAY',
    rating: 5,
    country: 'Chennai, India',
    projectType: 'FinTech Core UPI Modernization'
  },
  {
    id: '2',
    quote: 'The level of technical rigor, architectural foresight, and transparent communication is unparalleled. Their dedicated pod in Chennai delivered our AI clinical copilot ahead of schedule.',
    clientName: 'Claire Tremblay',
    clientRole: 'Head of Digital Products',
    company: 'Synergy Health Systems',
    companyLogoText: 'SYNERGY',
    rating: 5,
    country: 'Global / India Delivery',
    projectType: 'Generative AI Healthcare Platform'
  },
  {
    id: '3',
    quote: 'Our multi-cloud migration was a high-risk multi-million dollar undertaking. nxt info tech executed the entire transition from their Chennai engineering center seamlessly with zero downtime.',
    clientName: 'Rohan Kapur',
    clientRole: 'VP of Engineering',
    company: 'Verve Logistics International',
    companyLogoText: 'VERVE LOGISTICS',
    rating: 5,
    country: 'India / UK',
    projectType: 'Multi-Cloud Migration & Kubernetes'
  }
];

export const HUB_LOCATIONS: HubLocation[] = [
  {
    city: 'Chennai',
    country: 'India',
    region: 'Tamil Nadu',
    address: '5/79, Perumal Koil Street, Sadanandapuram, Thandalam, Tamil Nadu 600128',
    engineers: 380,
    timeZone: 'IST',
    isHQ: true
  }
];

export const TECH_RADAR_CATEGORIES = [
  {
    name: 'Frontend & Mobile',
    items: ['React 19', 'Next.js 15', 'TypeScript', 'Tailwind CSS', 'Vue 3', 'React Native', 'Flutter', 'Swift', 'Kotlin']
  },
  {
    name: 'Backend & APIs',
    items: ['Node.js', 'Go (Golang)', 'Python / FastAPI', 'Rust', 'Java Spring Boot', 'GraphQL', 'gRPC', 'Kafka']
  },
  {
    name: 'AI, LLM & Data',
    items: ['PyTorch', 'Gemini 2.5/3.0', 'LangChain', 'LlamaIndex', 'Pinecone', 'Qdrant', 'Snowflake', 'Databricks']
  },
  {
    name: 'Cloud & Infrastructure',
    items: ['AWS', 'Google Cloud', 'Microsoft Azure', 'Kubernetes (K8s)', 'Docker', 'Terraform', 'ArgoCD', 'Datadog']
  },
  {
    name: 'Databases & Storage',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'ClickHouse', 'DynamoDB', 'Supabase', 'Elasticsearch', 'BigQuery']
  }
];

export const TRUST_PARTNERS = [
  { name: 'AWS Premier Tier', badge: 'AWS Partner' },
  { name: 'Google Cloud Partner', badge: 'GCP Certified' },
  { name: 'Microsoft Azure Partner', badge: 'Azure Solutions' },
  { name: 'NPCI / UPI FinTech Partner', badge: 'FinTech Stack' },
  { name: 'Snowflake Elite', badge: 'Data Cloud' },
  { name: 'Databricks Partner', badge: 'AI & Data' },
  { name: 'ISO 27001 Certified', badge: 'Security First' },
  { name: 'SOC 2 Type II & DPDP', badge: 'Audited' }
];
