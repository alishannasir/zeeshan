export interface Testimonial {
  id: string
  studentName: string
  program: string
  graduationYear: string
  image?: string
  quote: string
  rating: number
}

export const testimonials: Testimonial[] = [
  {
    id: 'test-1',
    studentName: 'Ahmed Ali',
    program: 'Bachelor of Science in Computer Science',
    graduationYear: '2024',
    quote: 'The CS program at Superior University provided me with excellent hands-on experience. The faculty is knowledgeable and the curriculum is industry-relevant. I landed my dream job at a tech company right after graduation!',
    rating: 5
  },
  {
    id: 'test-2',
    studentName: 'Fatima Khan',
    program: 'MBBS',
    graduationYear: '2023',
    quote: 'Studying medicine here was challenging but incredibly rewarding. The clinical rotations and research opportunities prepared me well for my medical career. I\'m now working as a resident at a top hospital.',
    rating: 5
  },
  {
    id: 'test-3',
    studentName: 'Hassan Malik',
    program: 'Master of Business Administration',
    graduationYear: '2024',
    quote: 'The MBA program transformed my career. The case studies, networking opportunities, and mentorship from industry leaders were invaluable. I started my own business after graduation.',
    rating: 5
  },
  {
    id: 'test-4',
    studentName: 'Ayesha Rahman',
    program: 'Bachelor of Fine Arts',
    graduationYear: '2023',
    quote: 'The art program allowed me to explore my creativity while building a strong foundation in art theory. The studio facilities are amazing, and I\'ve had several exhibitions of my work.',
    rating: 5
  },
  {
    id: 'test-5',
    studentName: 'Usman Shah',
    program: 'Master of Science in Data Science',
    graduationYear: '2024',
    quote: 'The data science program is cutting-edge. I learned machine learning, big data technologies, and worked on real-world projects. Now I\'m a data scientist at a leading tech firm.',
    rating: 5
  },
  {
    id: 'test-6',
    studentName: 'Zainab Ahmed',
    program: 'Bachelor of Science in Nursing',
    graduationYear: '2023',
    quote: 'The nursing program provided excellent clinical training and compassionate care education. The faculty supported us throughout, and I feel well-prepared for my nursing career.',
    rating: 5
  },
  {
    id: 'test-7',
    studentName: 'Bilal Hassan',
    program: 'Bachelor of Science in Accounting and Finance',
    graduationYear: '2024',
    quote: 'The finance program gave me a solid understanding of financial markets and accounting principles. I passed my CPA exams and now work at a Big Four accounting firm.',
    rating: 5
  },
  {
    id: 'test-8',
    studentName: 'Sana Iqbal',
    program: 'Master of Science in Cybersecurity',
    graduationYear: '2024',
    quote: 'The cybersecurity program is comprehensive and practical. I learned ethical hacking, digital forensics, and security architecture. I\'m now a security analyst protecting critical infrastructure.',
    rating: 5
  },
  {
    id: 'test-9',
    studentName: 'Omar Farooq',
    program: 'Bachelor of Dental Surgery',
    graduationYear: '2023',
    quote: 'The BDS program provided excellent clinical training. The dental facilities are state-of-the-art, and the faculty is experienced. I opened my own dental practice after graduation.',
    rating: 5
  },
  {
    id: 'test-10',
    studentName: 'Maryam Ali',
    program: 'Master of Arts in Graphic Design',
    graduationYear: '2024',
    quote: 'The design program helped me develop my creative skills and build a strong portfolio. I now work as a senior designer at a leading advertising agency.',
    rating: 5
  },
  {
    id: 'test-11',
    studentName: 'Tariq Mahmood',
    program: 'Bachelor of Science in Software Engineering',
    graduationYear: '2024',
    quote: 'The software engineering program taught me industry best practices and modern development methodologies. I work on exciting projects at a software company now.',
    rating: 5
  },
  {
    id: 'test-12',
    studentName: 'Nida Sheikh',
    program: 'Master of Science in Public Health',
    graduationYear: '2023',
    quote: 'The public health program opened my eyes to global health challenges. I now work with an international health organization making a real difference in communities.',
    rating: 5
  }
]
