export interface News {
  id: string
  title: string
  date: string
  category: string
  image?: string
  excerpt: string
  content: string
  author: string
}

export const news: News[] = [
  {
    id: 'news-1',
    title: 'Superior University Leads Fall 2023 Quality Assurance Review Session',
    date: 'January 23, 2024',
    category: 'Academic Excellence',
    excerpt: 'The university successfully completed its quality assurance review, demonstrating commitment to academic excellence and continuous improvement.',
    content: 'Superior University has successfully completed its comprehensive quality assurance review for Fall 2023. The review session evaluated various aspects of academic programs, faculty performance, student services, and institutional effectiveness. The university received commendations for its innovative teaching methods, research initiatives, and student support services.',
    author: 'University Communications'
  },
  {
    id: 'news-2',
    title: 'Are you Ready for an Electrifying Music Night at Superior University?',
    date: 'January 23, 2024',
    category: 'Campus Events',
    excerpt: 'Join us for an unforgettable evening with Falak Shabir and other talented artists at our annual music night celebration.',
    content: 'Superior University is thrilled to announce its annual music night featuring renowned artist Falak Shabir. The event promises an electrifying evening of music, entertainment, and celebration. Students, faculty, and alumni are all invited to join this spectacular event that showcases the vibrant campus culture and musical talent.',
    author: 'Student Affairs Office'
  },
  {
    id: 'news-3',
    title: 'Rector Prof. Dr. Sumaira Rahman Honoured with Pakistan Entrepreneur Award 2023',
    date: 'January 23, 2024',
    category: 'Achievements',
    excerpt: 'Our esteemed Rector has been recognized for outstanding contributions to education and entrepreneurship in Pakistan.',
    content: 'Prof. Dr. Sumaira Rahman, Rector of Superior University, has been honored with the prestigious Pakistan Entrepreneur Award 2023. This recognition celebrates her visionary leadership, innovative educational initiatives, and significant contributions to higher education in Pakistan. Under her leadership, the university has achieved remarkable growth and excellence.',
    author: 'University Communications'
  },
  {
    id: 'news-4',
    title: 'AI Breakthrough in Early Lung Cancer Detection | LungNet-SVM Saves Lives',
    date: 'January 10, 2024',
    category: 'Research',
    excerpt: 'Researchers at Superior University develop groundbreaking AI system for early detection of lung cancer with remarkable accuracy.',
    content: 'A team of researchers from Superior University\'s Medical Sciences and Computer Science departments has developed LungNet-SVM, an innovative AI system that can detect early-stage lung cancer with unprecedented accuracy. This breakthrough technology has the potential to save thousands of lives through early diagnosis and intervention.',
    author: 'Research Department'
  },
  {
    id: 'news-5',
    title: 'Early Alzheimer\'s Detection with AI & Quantum Computing - A Breakthrough in NeuroTech',
    date: 'January 10, 2024',
    category: 'Research',
    excerpt: 'Revolutionary research combines artificial intelligence and quantum computing to detect Alzheimer\'s disease in its earliest stages.',
    content: 'Superior University researchers have made a significant breakthrough in neurodegenerative disease detection. By combining advanced AI algorithms with quantum computing techniques, the team has developed a system capable of identifying early signs of Alzheimer\'s disease with remarkable precision, potentially enabling earlier treatment and better patient outcomes.',
    author: 'Research Department'
  },
  {
    id: 'news-6',
    title: 'AI Detects Hate Speech with 96% Accuracy - Breakthrough Social Media Safety',
    date: 'January 10, 2024',
    category: 'Research',
    excerpt: 'New AI technology developed at Superior University can identify and filter hate speech on social media platforms with exceptional accuracy.',
    content: 'Researchers at Superior University have developed an advanced AI system that can detect hate speech on social media platforms with 96% accuracy. This technology represents a significant step forward in creating safer online environments and protecting users from harmful content. The system uses natural language processing and machine learning to identify various forms of hate speech across multiple languages.',
    author: 'Research Department'
  },
  {
    id: 'news-7',
    title: 'Superior University Ranked Among Top 5 Universities in Pakistan',
    date: 'December 15, 2023',
    category: 'Achievements',
    excerpt: 'The university achieves a prestigious ranking, placing it among the top educational institutions in the country.',
    content: 'Superior University has been ranked among the top 5 universities in Pakistan according to the latest national university rankings. This achievement reflects the university\'s commitment to academic excellence, research innovation, and student success. The ranking considers factors such as teaching quality, research output, graduate employability, and international recognition.',
    author: 'University Communications'
  },
  {
    id: 'news-8',
    title: 'New State-of-the-Art Research Lab Opens',
    date: 'December 1, 2023',
    category: 'Infrastructure',
    excerpt: 'The university inaugurates a cutting-edge research facility equipped with the latest technology and equipment.',
    content: 'Superior University has officially opened its new state-of-the-art research laboratory, featuring advanced equipment and technology for cutting-edge research across multiple disciplines. The facility will support research in computer science, medical sciences, engineering, and other fields, providing students and faculty with world-class resources for innovation and discovery.',
    author: 'Facilities Management'
  },
  {
    id: 'news-9',
    title: 'International Student Exchange Program Launched',
    date: 'November 20, 2023',
    category: 'International',
    excerpt: 'New exchange program offers students opportunities to study at partner universities around the world.',
    content: 'Superior University has launched an exciting new international student exchange program in partnership with leading universities across Asia, Europe, and North America. This program allows students to spend a semester or year studying abroad, gaining international experience and cultural exposure while earning credits toward their degree.',
    author: 'International Office'
  },
  {
    id: 'news-10',
    title: 'Scholarship Program Expands to Support More Students',
    date: 'November 10, 2023',
    category: 'Financial Aid',
    excerpt: 'The university announces expansion of scholarship programs to make quality education more accessible.',
    content: 'Superior University has significantly expanded its scholarship program, increasing funding to support more deserving students. The expanded program includes merit-based scholarships, need-based financial aid, and special scholarships for students from underrepresented backgrounds. This initiative reflects the university\'s commitment to making quality education accessible to all.',
    author: 'Financial Aid Office'
  },
  {
    id: 'news-11',
    title: 'Graduate Employment Rate Reaches 95%',
    date: 'October 25, 2023',
    category: 'Career Services',
    excerpt: 'Outstanding employment outcomes demonstrate the value of a Superior University education.',
    content: 'Superior University celebrates an impressive 95% graduate employment rate, with graduates securing positions at leading companies and organizations. The university\'s career services office, industry partnerships, and practical curriculum prepare students for successful careers in their chosen fields.',
    author: 'Career Services Office'
  },
  {
    id: 'news-12',
    title: 'Faculty Member Wins Prestigious Research Award',
    date: 'October 15, 2023',
    category: 'Achievements',
    excerpt: 'Dr. Ahmed Khan receives national recognition for groundbreaking research in artificial intelligence.',
    content: 'Dr. Ahmed Khan, Professor of Computer Science at Superior University, has been awarded the prestigious National Research Excellence Award for his groundbreaking work in artificial intelligence and machine learning. His research has contributed significantly to the field and has been published in top-tier international journals.',
    author: 'Research Department'
  }
]
