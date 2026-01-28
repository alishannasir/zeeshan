export interface Program {
  id: string
  title: string
  category: 'cs' | 'medical' | 'finance' | 'art'
  level: 'undergraduate' | 'master'
  duration: string
  description: string
  credits: number
}

export const undergraduatePrograms: Program[] = [
  // Computer Science Programs
  {
    id: 'ug-cs-1',
    title: 'Bachelor of Science in Computer Science',
    category: 'cs',
    level: 'undergraduate',
    duration: '4 years',
    description: 'Comprehensive program covering programming, algorithms, data structures, and software engineering.',
    credits: 130
  },
  {
    id: 'ug-cs-2',
    title: 'Bachelor of Science in Software Engineering',
    category: 'cs',
    level: 'undergraduate',
    duration: '4 years',
    description: 'Focus on software development lifecycle, project management, and quality assurance.',
    credits: 130
  },
  {
    id: 'ug-cs-3',
    title: 'Bachelor of Science in Information Technology',
    category: 'cs',
    level: 'undergraduate',
    duration: '4 years',
    description: 'IT infrastructure, networking, database management, and system administration.',
    credits: 130
  },
  {
    id: 'ug-cs-4',
    title: 'Bachelor of Science in Data Science',
    category: 'cs',
    level: 'undergraduate',
    duration: '4 years',
    description: 'Data analysis, machine learning, statistics, and big data technologies.',
    credits: 130
  },
  {
    id: 'ug-cs-5',
    title: 'Bachelor of Science in Cybersecurity',
    category: 'cs',
    level: 'undergraduate',
    duration: '4 years',
    description: 'Network security, cryptography, ethical hacking, and digital forensics.',
    credits: 130
  },
  {
    id: 'ug-cs-6',
    title: 'Bachelor of Science in Artificial Intelligence',
    category: 'cs',
    level: 'undergraduate',
    duration: '4 years',
    description: 'Machine learning, neural networks, natural language processing, and robotics.',
    credits: 130
  },
  // Medical Programs
  {
    id: 'ug-med-1',
    title: 'Bachelor of Medicine, Bachelor of Surgery (MBBS)',
    category: 'medical',
    level: 'undergraduate',
    duration: '5 years',
    description: 'Comprehensive medical education covering all aspects of human health and disease.',
    credits: 200
  },
  {
    id: 'ug-med-2',
    title: 'Bachelor of Dental Surgery (BDS)',
    category: 'medical',
    level: 'undergraduate',
    duration: '5 years',
    description: 'Dental health, oral surgery, orthodontics, and preventive dentistry.',
    credits: 200
  },
  {
    id: 'ug-med-3',
    title: 'Bachelor of Science in Nursing',
    category: 'medical',
    level: 'undergraduate',
    duration: '4 years',
    description: 'Patient care, medical procedures, healthcare management, and clinical practice.',
    credits: 130
  },
  {
    id: 'ug-med-4',
    title: 'Bachelor of Pharmacy',
    category: 'medical',
    level: 'undergraduate',
    duration: '4 years',
    description: 'Pharmaceutical sciences, drug development, pharmacology, and pharmacy practice.',
    credits: 130
  },
  {
    id: 'ug-med-5',
    title: 'Bachelor of Science in Medical Laboratory Technology',
    category: 'medical',
    level: 'undergraduate',
    duration: '4 years',
    description: 'Laboratory diagnostics, pathology, microbiology, and clinical chemistry.',
    credits: 130
  },
  {
    id: 'ug-med-6',
    title: 'Bachelor of Science in Physiotherapy',
    category: 'medical',
    level: 'undergraduate',
    duration: '4 years',
    description: 'Physical rehabilitation, exercise therapy, and movement science.',
    credits: 130
  },
  // Finance Programs
  {
    id: 'ug-fin-1',
    title: 'Bachelor of Business Administration (BBA)',
    category: 'finance',
    level: 'undergraduate',
    duration: '4 years',
    description: 'Business fundamentals, management, marketing, and entrepreneurship.',
    credits: 130
  },
  {
    id: 'ug-fin-2',
    title: 'Bachelor of Science in Accounting and Finance',
    category: 'finance',
    level: 'undergraduate',
    duration: '4 years',
    description: 'Financial accounting, auditing, taxation, and corporate finance.',
    credits: 130
  },
  {
    id: 'ug-fin-3',
    title: 'Bachelor of Science in Economics',
    category: 'finance',
    level: 'undergraduate',
    duration: '4 years',
    description: 'Microeconomics, macroeconomics, econometrics, and economic policy.',
    credits: 130
  },
  {
    id: 'ug-fin-4',
    title: 'Bachelor of Science in Banking and Finance',
    category: 'finance',
    level: 'undergraduate',
    duration: '4 years',
    description: 'Banking operations, financial markets, risk management, and investment analysis.',
    credits: 130
  },
  {
    id: 'ug-fin-5',
    title: 'Bachelor of Science in Business Analytics',
    category: 'finance',
    level: 'undergraduate',
    duration: '4 years',
    description: 'Data-driven decision making, business intelligence, and predictive analytics.',
    credits: 130
  },
  {
    id: 'ug-fin-6',
    title: 'Bachelor of Science in Actuarial Science',
    category: 'finance',
    level: 'undergraduate',
    duration: '4 years',
    description: 'Risk assessment, insurance mathematics, and financial modeling.',
    credits: 130
  },
  // Art Programs
  {
    id: 'ug-art-1',
    title: 'Bachelor of Fine Arts',
    category: 'art',
    level: 'undergraduate',
    duration: '4 years',
    description: 'Painting, sculpture, drawing, and visual arts fundamentals.',
    credits: 130
  },
  {
    id: 'ug-art-2',
    title: 'Bachelor of Arts in Graphic Design',
    category: 'art',
    level: 'undergraduate',
    duration: '4 years',
    description: 'Digital design, typography, branding, and visual communication.',
    credits: 130
  },
  {
    id: 'ug-art-3',
    title: 'Bachelor of Arts in Interior Design',
    category: 'art',
    level: 'undergraduate',
    duration: '4 years',
    description: 'Space planning, color theory, materials, and sustainable design.',
    credits: 130
  },
  {
    id: 'ug-art-4',
    title: 'Bachelor of Arts in Fashion Design',
    category: 'art',
    level: 'undergraduate',
    duration: '4 years',
    description: 'Fashion illustration, pattern making, textiles, and fashion marketing.',
    credits: 130
  },
  {
    id: 'ug-art-5',
    title: 'Bachelor of Arts in Multimedia Arts',
    category: 'art',
    level: 'undergraduate',
    duration: '4 years',
    description: 'Digital media, animation, video production, and interactive design.',
    credits: 130
  },
  {
    id: 'ug-art-6',
    title: 'Bachelor of Arts in Music',
    category: 'art',
    level: 'undergraduate',
    duration: '4 years',
    description: 'Music theory, composition, performance, and music technology.',
    credits: 130
  }
]

export const masterPrograms: Program[] = [
  // Computer Science Master Programs
  {
    id: 'ms-cs-1',
    title: 'Master of Science in Computer Science',
    category: 'cs',
    level: 'master',
    duration: '2 years',
    description: 'Advanced topics in algorithms, distributed systems, and research methodologies.',
    credits: 36
  },
  {
    id: 'ms-cs-2',
    title: 'Master of Science in Software Engineering',
    category: 'cs',
    level: 'master',
    duration: '2 years',
    description: 'Advanced software architecture, DevOps, and enterprise software development.',
    credits: 36
  },
  {
    id: 'ms-cs-3',
    title: 'Master of Science in Data Science',
    category: 'cs',
    level: 'master',
    duration: '2 years',
    description: 'Advanced machine learning, deep learning, and big data analytics.',
    credits: 36
  },
  {
    id: 'ms-cs-4',
    title: 'Master of Science in Cybersecurity',
    category: 'cs',
    level: 'master',
    duration: '2 years',
    description: 'Advanced security protocols, penetration testing, and security architecture.',
    credits: 36
  },
  {
    id: 'ms-cs-5',
    title: 'Master of Science in Artificial Intelligence',
    category: 'cs',
    level: 'master',
    duration: '2 years',
    description: 'Deep learning, computer vision, NLP, and AI ethics.',
    credits: 36
  },
  {
    id: 'ms-cs-6',
    title: 'Master of Science in Information Systems',
    category: 'cs',
    level: 'master',
    duration: '2 years',
    description: 'Enterprise information systems, IT strategy, and digital transformation.',
    credits: 36
  },
  // Medical Master Programs
  {
    id: 'ms-med-1',
    title: 'Master of Science in Public Health',
    category: 'medical',
    level: 'master',
    duration: '2 years',
    description: 'Epidemiology, health policy, biostatistics, and community health.',
    credits: 36
  },
  {
    id: 'ms-med-2',
    title: 'Master of Science in Clinical Research',
    category: 'medical',
    level: 'master',
    duration: '2 years',
    description: 'Clinical trial design, regulatory affairs, and evidence-based medicine.',
    credits: 36
  },
  {
    id: 'ms-med-3',
    title: 'Master of Science in Medical Imaging',
    category: 'medical',
    level: 'master',
    duration: '2 years',
    description: 'Radiology, MRI, CT scanning, and diagnostic imaging technologies.',
    credits: 36
  },
  {
    id: 'ms-med-4',
    title: 'Master of Science in Pharmacology',
    category: 'medical',
    level: 'master',
    duration: '2 years',
    description: 'Drug discovery, pharmacokinetics, and pharmacodynamics.',
    credits: 36
  },
  {
    id: 'ms-med-5',
    title: 'Master of Science in Healthcare Administration',
    category: 'medical',
    level: 'master',
    duration: '2 years',
    description: 'Healthcare management, policy, and healthcare systems.',
    credits: 36
  },
  {
    id: 'ms-med-6',
    title: 'Master of Science in Biotechnology',
    category: 'medical',
    level: 'master',
    duration: '2 years',
    description: 'Molecular biology, genetic engineering, and biopharmaceuticals.',
    credits: 36
  },
  // Finance Master Programs
  {
    id: 'ms-fin-1',
    title: 'Master of Business Administration (MBA)',
    category: 'finance',
    level: 'master',
    duration: '2 years',
    description: 'Strategic management, leadership, finance, and entrepreneurship.',
    credits: 36
  },
  {
    id: 'ms-fin-2',
    title: 'Master of Science in Finance',
    category: 'finance',
    level: 'master',
    duration: '2 years',
    description: 'Corporate finance, investment analysis, and financial markets.',
    credits: 36
  },
  {
    id: 'ms-fin-3',
    title: 'Master of Science in Accounting',
    category: 'finance',
    level: 'master',
    duration: '2 years',
    description: 'Advanced accounting principles, auditing, and financial reporting.',
    credits: 36
  },
  {
    id: 'ms-fin-4',
    title: 'Master of Science in Economics',
    category: 'finance',
    level: 'master',
    duration: '2 years',
    description: 'Advanced economic theory, econometrics, and policy analysis.',
    credits: 36
  },
  {
    id: 'ms-fin-5',
    title: 'Master of Science in Financial Engineering',
    category: 'finance',
    level: 'master',
    duration: '2 years',
    description: 'Quantitative finance, derivatives, risk management, and algorithmic trading.',
    credits: 36
  },
  {
    id: 'ms-fin-6',
    title: 'Master of Science in International Business',
    category: 'finance',
    level: 'master',
    duration: '2 years',
    description: 'Global markets, cross-cultural management, and international trade.',
    credits: 36
  },
  // Art Master Programs
  {
    id: 'ms-art-1',
    title: 'Master of Fine Arts',
    category: 'art',
    level: 'master',
    duration: '2 years',
    description: 'Advanced studio practice, art theory, and creative research.',
    credits: 36
  },
  {
    id: 'ms-art-2',
    title: 'Master of Arts in Design',
    category: 'art',
    level: 'master',
    duration: '2 years',
    description: 'Advanced design theory, user experience, and design innovation.',
    credits: 36
  },
  {
    id: 'ms-art-3',
    title: 'Master of Arts in Art History',
    category: 'art',
    level: 'master',
    duration: '2 years',
    description: 'Art criticism, museum studies, and cultural heritage.',
    credits: 36
  },
  {
    id: 'ms-art-4',
    title: 'Master of Arts in Digital Media',
    category: 'art',
    level: 'master',
    duration: '2 years',
    description: 'Interactive media, digital storytelling, and new media art.',
    credits: 36
  },
  {
    id: 'ms-art-5',
    title: 'Master of Arts in Musicology',
    category: 'art',
    level: 'master',
    duration: '2 years',
    description: 'Music history, ethnomusicology, and music analysis.',
    credits: 36
  },
  {
    id: 'ms-art-6',
    title: 'Master of Arts in Film and Media Studies',
    category: 'art',
    level: 'master',
    duration: '2 years',
    description: 'Cinema studies, media theory, and film production.',
    credits: 36
  }
]

export const allPrograms = [...undergraduatePrograms, ...masterPrograms]
