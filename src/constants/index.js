import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  fashion_apparel,
  apartment_management,
  online_group_study,
  threejs,
  nextjs,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'Frontend Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Tech Enthusiast',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Next JS',
    icon: nextjs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'React.js Developer',
    company_name: 'Starbucks',
    icon: starbucks,
    iconBg: '#383E56',
    date: 'March 2020 - April 2021',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'React Native Developer',
    company_name: 'Tesla',
    icon: tesla,
    iconBg: '#E6DEDD',
    date: 'Jan 2021 - Feb 2022',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Web Developer',
    company_name: 'Shopify',
    icon: shopify,
    iconBg: '#383E56',
    date: 'Jan 2022 - Jan 2023',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Full stack Developer',
    company_name: 'Meta',
    icon: meta,
    iconBg: '#E6DEDD',
    date: 'Jan 2023 - Present',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
];
const topProjects = [
  {
    title: 'Apartment Management',
    sub_title: 'A Full Stack Apartment Management Website with Admin Panel',
    icon: starbucks,
    iconBg: '#383E56',
    complete_duration: 'March 2020 - April 2021',
    features: [
      'Firebase Authentication with User Roles',
      'Stripe Payment Integration for Monthly Rent',
      'Admin Dashboard for User and Payment Management',
      'Responsive Design for Cross-Device Compatibility',
    ],
    technologies: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongoose',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
      {
        name: 'firebase',
        color: 'orange-text-gradient',
      },
      {
        name: 'stripe',
        color: 'blue-text-gradient',
      },
    ],
    live_link: 'https://linden-apartment-management.web.app/',
    client_link:
      'https://github.com/muhammad-shahin/apartment-management-client',
    server_link:
      'https://github.com/muhammad-shahin/apartment-management-server',
  },
  {
    title: 'Online Group Study',
    sub_title:
      'Submit Your Assignment and Get Feedback. Give Feedback to Other Users.',
    icon: tesla,
    iconBg: '#a4a4a4',
    complete_duration: 'March 2020 - April 2021',
    features: [
      'Firebase Authentication with Social Logins',
      'CRUD Operations for Assignments (Create, Read, Update, Delete)',
      'JWT Token Authentication for Securing API',
      'Additional Features: Resource Preview, Pagination, Validation, Responsiveness',
    ],
    technologies: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    live_link: 'https://ratemy-project.web.app/',
    client_link: 'https://github.com/muhammad-shahin/rate-my-project-client',
    server_link: 'https://github.com/muhammad-shahin/rate-my-project-server',
  },
  {
    title: 'Fashion & Apparel E-Commerce',
    sub_title: 'A Simple E-Commerce Site With Stripe Payment Integration',
    icon: shopify,
    iconBg: '#383E56',
    complete_duration: 'March 2020 - April 2021',
    features: [
      'Firebase Authentication with Google and Email/Password',
      'Admin Panel for Product and Content Management',
      'Responsive Design for Seamless Cross-Device Experience',
      'Cart Management with Dynamic Price Calculation',
    ],
    technologies: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
      {
        name: 'stripe',
        color: 'blue-text-gradient',
      },
    ],
    live_link: 'https://fashion-and-apparel-house.web.app/',
    client_link:
      'https://github.com/muhammad-shahin/apparel-and-fashion-client',
    server_link:
      'https://github.com/muhammad-shahin/apparel-and-fashion-server',
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];
const socialLinks = [
  {
    message:
      "Excited to connect with you on Facebook! Check out my updates and let's stay in touch.",
    name: 'ShahinMuhammad2',
    note: 'ADD ME ON FACEBOOK',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png',
    link: 'https://www.facebook.com/ShahinMuhammad2/',
  },
  {
    message:
      "Let's connect on LinkedIn! Explore my professional journey and feel free to reach out.",
    name: 'shahin-muhammad',
    note: 'CONNECT ON LINKEDIN',
    image:
      'https://static-00.iconduck.com/assets.00/linkedin-icon-2048x2048-ya5g47j2.png',
    link: 'https://www.linkedin.com/in/shahin-muhammad/',
  },
  {
    message:
      'Discover my projects and contributions on GitHub. Excited to share my works with you!',
    name: 'muhammad-shahin',
    note: 'MY WORKS ON GITHUB',
    image:
      'https://seeklogo.com/images/G/github-logo-2E3852456C-seeklogo.com.png',
    link: 'https://github.com/muhammad-shahin',
  },
];

const projects = [
  {
    name: 'Fashion & Apparel House 👗',
    description:
      'Explore the latest trends in fashion through this cutting-edge e-commerce web application. Built with React and backed by Node.js and MongoDB, the platform offers a user-friendly navigation experience, an exclusive admin panel for content management, and seamless cart management with dynamic price calculation.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
      {
        name: 'firebase',
        color: 'orange-text-gradient',
      },
    ],
    image: fashion_apparel,
    source_code_link:
      'https://github.com/muhammad-shahin/apparel-and-fashion-client',
  },
  {
    name: 'Apartment Management 🏠',
    description:
      'A comprehensive apartment management solution that leverages React, Node.js, Express.js, and MongoDB. Users can submit rent requests, make monthly payments via Stripe integration, and access user-specific dashboards. Admins enjoy role management, rent request handling, and coupon management, all within a responsive and secure environment.',
    tags: [
      {
        name: 'mongoose',
        color: 'blue-text-gradient',
      },
      {
        name: 'firebase',
        color: 'orange-text-gradient',
      },
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: apartment_management,
    source_code_link:
      'https://github.com/muhammad-shahin/apartment-management-client',
  },
  {
    name: 'Online Group Study 📚',
    description:
      'A collaborative online platform where users can create, complete, and grade assignments within study groups. Featuring Firebase authentication for secure user management and dynamic assignment management functionalities, it fosters a seamless and engaging group study experience.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
      {
        name: 'firebase',
        color: 'orange-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'blue-text-gradient',
      },
    ],
    image: online_group_study,
    source_code_link:
      'https://github.com/muhammad-shahin/rate-my-project-client',
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  topProjects,
  socialLinks,
};
