export const resumeData = {
  name: "Yeshwanth Soma",
  title: "Staff Software Engineer",
  tagline: "I build enterprise-scale systems, AI automation pipelines, and intelligent distributed architectures.",
  location: "Austin, Texas",
  email: "soma.yeshwanth1@gmail.com",
  phone: "813-539-8834",
  linkedin: "https://linkedin.com/in/soma-yeshwanth",
  github: "https://github.com/yeshwanthsoma",

  about: `Solution-driven Staff Software Engineer with 5+ years of professional experience and a Master's degree in Business Analytics. I specialize in architecting enterprise-scale applications with advanced AI/ML automation, microservices, and cloud infrastructure.

I've engineered intelligent agents using LangGraph and LangChain, built payment platforms processing 25K+ transactions per minute, and led cross-functional engineering teams. My work spans from low-level distributed systems to high-level AI orchestration — always focused on eliminating manual overhead and improving developer experience.

When I'm not building systems at Visa, I'm exploring multi-agent AI architectures and full-stack applications.`,

  experience: [
    {
      company: "Visa Inc.",
      location: "Austin, TX",
      role: "Staff Software Engineer",
      period: "August 2022 — Present",
      url: "https://visa.com",
      highlights: [
        "Engineered AI-powered Development Automation System using Claude Agent SDK and multi-agent orchestration, automating the full SDLC from LLD to Git PR — reducing feature dev time by 70%",
        "Architected MCP server ecosystem (Jira, GitHub, Bitbucket, Artifactory, SonarQube) with CLI integration, cutting developer onboarding effort by 50% across 200+ engineers",
        "Built intelligent Security Fix Agent using LangGraph and LangChain, reducing security patch time from days to under 1 hour across 80+ repositories with 90% reduction in manual overhead",
        "Developed Sanitization Agent using OpenAI LLMs and ChromaDB vector search to redact PII from Jira tickets — 75% reduction in manual review time at 98% accuracy",
        "Implemented scalable payment platform using Java Spring Boot microservices, Kafka, and Temporal, processing 25K transactions/minute with 99.9% accuracy and 35% latency reduction",
        "Implemented active-active multi-regional architecture using Azure Load Balancer and Traffic Manager, achieving near-zero downtime across data centers",
        "Optimized performance with Hazelcast distributed caching (45% latency reduction) and PostgreSQL BDR for 99.99% data availability",
        "Established monitoring framework with Prometheus, Grafana, and Alertmanager, reducing MTTR by 40%",
      ],
      tech: ["Java", "Spring Boot", "LangGraph", "LangChain", "Claude SDK", "Kafka", "Kubernetes", "Docker", "PostgreSQL", "Azure", "Python"],
    },
    {
      company: "BlackRock",
      location: "Atlanta, GA",
      role: "Aladdin Client Services Summer Analyst",
      period: "June 2022 — August 2022",
      url: "https://blackrock.com",
      highlights: [
        "Delivered comprehensive Aladdin product demonstrations using SQL and UNIX, improving client understanding and platform adoption",
        "Developed product enhancement proposal streamlining client inquiries, increasing employee productivity through optimized support workflows",
        "Conducted stakeholder analysis through interviews and surveys guiding strategic product decisions",
      ],
      tech: ["SQL", "UNIX", "Aladdin"],
    },
    {
      company: "NCR Corp.",
      location: "Hyderabad, India",
      role: "Professional Services Software Engineer",
      period: "July 2019 — December 2020",
      url: "https://ncr.com",
      highlights: [
        "Developed end-to-end POS application managing front-end and middleware components for enterprise retail solutions",
        "Delivered high-impact POS solution using C#, HTML, and MS SQL, achieving 80% success rate in resolving critical issues",
        "Accelerated development by 60% through comprehensive documentation and standardized practices",
        "Designed fault-tolerant database schema enhancing reliability in high-volume transaction processing",
      ],
      tech: ["C#", "HTML", "MS SQL", "REST API"],
    },
  ],

  projects: [
    {
      name: "Debunker",
      subtitle: "AI-Powered Misinformation Combat Platform",
      description:
        "Production-grade multi-modal fact-checking platform processing text and audio content with 78% accuracy. Integrates 4 major AI APIs for comprehensive real-time verification with sub-2 second response times.",
      url: "https://www.de-bunker.com",
      github: "",
      tech: ["FastAPI", "React", "PostgreSQL", "OpenAI GPT-4", "Anthropic Claude", "Grok Live Search", "OpenAI Whisper", "Railway"],
      highlights: [
        "Processes 1000+ daily fact-check requests at 95% uptime",
        "Advanced audio intelligence pipeline with sarcasm and emotional context detection",
        "Multi-source intelligence synthesis with weighted confidence scoring",
        "Real-time social media intelligence via X/Twitter Grok Live Search integration",
      ],
    },
  ],

  skills: {
    "Programming Languages": ["Java", "Python", "C#", "JavaScript", "TypeScript", "SQL", "C++", "NodeJS"],
    "AI/ML & LLMs": ["LangGraph", "LangChain", "Claude SDK", "OpenAI API", "RAG", "ChromaDB", "Vector Databases", "LLM Integration", "Hugging Face"],
    "Backend & Frameworks": ["Spring Boot", "FastAPI", "Kafka", "Temporal", "REST API", "GraphQL", "Apache Tomcat"],
    "Cloud & Infrastructure": ["AWS (Lambda, EC2, S3)", "Azure (Load Balancer, Traffic Manager)", "GCP", "Docker", "Kubernetes", "CI/CD", "Blue-Green Deployments"],
    "Databases": ["PostgreSQL", "Redis", "MongoDB", "MySQL", "ElasticSearch", "PgBouncer", "Oracle SQL"],
    "Monitoring & Security": ["Prometheus", "Grafana", "Splunk", "SonarQube", "Checkmarx", "JMeter", "Alertmanager"],
  },

  education: [
    {
      degree: "Master of Science in Business Analytics and Information Systems",
      school: "University of South Florida",
      gpa: "3.6/4.0",
      year: "August 2022",
    },
    {
      degree: "Bachelor of Technology in Computer Science",
      school: "VNRVJIET",
      gpa: "3.6/4.0",
      year: "May 2019",
    },
  ],
};
