export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  image: string;
  details: string;
  status: 'completed' | 'in-progress' | 'planned';
}

export interface Skill {
  category: string;
  items: Array<{
    name: string;
    level: number;
    icon: string;
  }>;
}

export const projects: Project[] = [
  {
    id: 'CLI-portfolio',
    name: 'CLI Portfolio',
    description: ' Interactive terminal-themed portfolio website',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Web Audio API'],
    github: 'https://github.com/user/terminal-portfolio',
    demo: 'https://dezmilscliportfolio.netlify.app',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg',
    details: `A fully interactive terminal-themed portfolio website featuring:
    
    • Real-time command processing
    • Multiple theme support (Matrix, Amber, Blue, White)
    • Responsive design with mobile support
    • Accessibility features and screen reader compatibility
    • Sound effects and animations
    • Command history and man pages
    • Virtual keyboard for mobile devices
    
    Built with React, TypeScript, and modern web technologies.`,
    status: 'completed'
  },
  {
    id: 'ScoreYetu',
    name: 'ScoreYetu Sports Management System',
    description: ' Unified platform for managing sports leagues and tournaments in local High Schools',
    technologies: ['vite', 'Express js', 'React', 'Mongo DB', 'Node js'],
    github: 'https://github.com/Dezmils-Tech-Company/scoreYetuFrontend.git',
    demo: 'https://scoreyetu.netlify.app',
    image: 'https://i.ibb.co/F4TNhJRM/Screenshot-2026-01-31-145656.png',
    details: `Sports management system offering:
    
    • Realtime score updates
    • Team and player management
    • Match scheduling and notifications
    • Statistics tracking and reporting
    • User roles and permissions
    • Mobile-friendly interface
    • Integration with third-party APIs
    
    Handles 10k+ conversations daily with 95% accuracy.`,
    status: 'completed'
  },
  {
    id: 'Bitvestor',
    name: 'Bitvestor Sacco Analytics Dashboard ',
    description: ' A sacco analytics dashboard for investment insights and investment plans',
    technologies: ['React.js', 'Express.js', 'Node.js', 'CSS', 'MongoDB'],
    github: 'https://github.com/Dezmils-Tech-Company/Bitvest-client.git',
    demo: 'https://bit-vestor-investments.netlify.app',
    image: 'https://i.ibb.co/zhvGMKxz/Screenshot-2026-01-31-152919.png',
    details: `Investment analytics dashboard featuring:
    
    • deposit and withdrawal tracking
    • Investment plan management
    • Real-time financial data visualization
    • Refferral program tracking
    • Profit gain per investment plan
    • User-friendly interface with responsive design
    • Secure authentication and data protection
    
     over 20k Active Users.`,
    status: 'completed'
  },
  {
    id: 'mucisa',
    name: 'MUCISA Organization Website',
    description: 'This Student-led organization website for Maseno University students',
    technologies: ['React', 'express.js', 'node.js', 'css', 'MongoDB'],
    github: 'https://github.com/Dezmils-Tech-Company/mucisaFrontend.git',
    demo: 'https://mucisa.netlify.app',
    image: 'https://i.ibb.co/SYw5Mq6/Screenshot-2026-01-31-154725.png',
    details: `Student-led organization website for Maseno University students:
    
    • Responsive design for all devices
    • Dynamic content management system
    • User registration and login system
    • Event calendar and announcements
    • Gallery and media management
    • peer-to-peer communication features
    • Integration with social media platforms
    
    Engages over 5k students monthly.`,
    status: 'completed'
  },
    
];

export const skills: Skill[] = [
 {
  category: 'Machine Learning & AI',
  items: [
    { name: 'Natural Language Processing (NLP)', level: 67, icon: '💬' },
    { name: 'Automatic Speech Recognition (ASR)', level: 61, icon: '🎙️' },
    { name: 'Computer Vision', level: 68, icon: '👁️' },
    { name: 'Neural Networks', level: 55, icon: '🧠' },
    { name: 'Reinforcement Learning', level: 50, icon: '🎮' }
  ]
},
  {
    category: 'Frontend',
    items: [
      { name: 'React', level: 95, icon: '⚛️' },
      { name: 'TypeScript', level: 75, icon: '📘' },
      { name: 'Vanilla.js', level: 85, icon: '💚' },
      { name: 'vite.js', level: 88, icon: '🎨' },
      { name: 'Tailwind CSS', level: 92, icon: '🌊' }
    ]
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', level: 88, icon: '🟢' },
      { name: 'Express', level: 85, icon: '🐍' },
      { name: 'Php', level: 82, icon: '🐘' },
      { name: 'MongoDB', level: 80, icon: '🍃' },
      { name: 'Redis', level: 75, icon: '🔴' }
    ]
  },
  {
    category: 'DevOps',
    items: [
      { name: 'Docker', level: 85, icon: '🐳' },
      { name: 'Kubernetes', level: 78, icon: '⚙️' },
      { name: 'AWS', level: 82, icon: '☁️' },
      { name: 'GitHub Actions', level: 88, icon: '🔄' },
      { name: 'Terraform', level: 72, icon: '🏗️' }
    ]
  },
  {
    category: 'Tools',
    items: [
      { name: 'Git', level: 95, icon: '📝' },
      { name: 'VS Code', level: 98, icon: '💻' },
      { name: 'Figma', level: 75, icon: '🎯' },
      { name: 'Jest', level: 15, icon: '🧪' },
      { name: 'Webpack', level: 80, icon: '📦' }
    ]
  }
];

export const asciiArt = {
  welcome: `
██╗    ██╗███████╗██╗      ██████╗ ██████╗ ███╗   ███╗███████╗
██║    ██║██╔════╝██║     ██╔════╝██╔═══██╗████╗ ████║██╔════╝
██║ █╗ ██║█████╗  ██║     ██║     ██║   ██║██╔████╔██║█████╗  
██║███╗██║██╔══╝  ██║     ██║     ██║   ██║██║╚██╔╝██║██╔══╝  
╚███╔███╔╝███████╗███████╗╚██████╗╚██████╔╝██║ ╚═╝ ██║███████╗
 ╚══╝╚══╝ ╚══════╝╚══════╝ ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝
`,
  
  error404: ` 
███████╗██████╗ ██████╗  ██████╗ ██████╗ ██╗  ██╗ ██████╗ ██╗  ██╗
██╔════╝██╔══██╗██╔══██╗██╔═══██╗██╔══██╗██║  ██║██╔═████╗██║  ██║
█████╗  ██████╔╝██████╔╝██║   ██║██████╔╝███████║██║██╔██║███████║
██╔══╝  ██╔══██╗██╔══██╗██║   ██║██╔══██╗╚════██║████╔╝██║╚════██║
███████╗██║  ██║██║  ██║╚██████╔╝██║  ██║     ██║╚██████╔╝     ██║
╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝     ╚═╝ ╚═════╝      ╚═╝
                                                                  

`,

  whois: `
██╗    ██╗██╗  ██╗ ██████╗  █████╗ ███╗   ███╗██╗
██║    ██║██║  ██║██╔═══██╗██╔══██╗████╗ ████║██║
██║ █╗ ██║███████║██║   ██║███████║██╔████╔██║██║
██║███╗██║██╔══██║██║   ██║██╔══██║██║╚██╔╝██║██║
╚███╔███╔╝██║  ██║╚██████╔╝██║  ██║██║ ╚═╝ ██║██║
 ╚══╝╚══╝ ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚═╝     ╚═╝╚═╝
`
};