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
  reactNative,
  linux,
  signal,
  tinder,
  deliveroo,
  uber,
  ups,
  foodApp,
  reddit,
  blogNext,
  learnIt,
  theBand,
  shopee,
  music,
  whatsapp,
  nvim,
  tiktok,
  marc,
  thomas,
  leonardo,
  expo,
  graphql,
  reactNavigation,
  apollo,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'skills',
    title: 'Skills',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
  {
    id: 'github',
    title: 'Github',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React Native Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: ' IDE: Neovim, VS Code',
    icon: creator,
  },
];

const technologies = [
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
    name: 'Expo',
    icon: expo,
  },
  {
    name: 'react-navigation',
    icon: reactNavigation,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'apollo',
    icon: apollo,
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
    name: 'git',
    icon: git,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Frontend Web Development',
    company_name: 'ReactJs',
    icon: reactjs,
    iconBg: '#383E56',
    points: [
      'Languages & frameworks: JavaScript, TypeScript, ReactJs & NextJs',
      'UI: Tailwind Css, Material UI, Chakra UI, Bootstrap',
      'State management: Redux, Swr, Apollo Client with GraphQL',
      'Miscellaneous: react-router-dom, axios, react-hook-form, yup ...',
    ],
  },
  {
    title: 'Backend Developer',
    company_name: 'Node.js',
    icon: nodejs,
    iconBg: '#E6DEDD',
    points: [
      'Languages & frameworks: JavaScript, TypeScript, Node.js, Express.js, Apollo Server, RESTful API & GraphQL',
      'Database: MongoDB, PostgesQL & Firebase',
      'Miscellaneous: Mongoose, Typegoose, Type-graphql, Typeorm, Express-session, Jsonwebtoken, DataLoader, Docker',
    ],
  },
  {
    title: 'Mobile Development',
    company_name: 'React Native',
    icon: reactNative,
    iconBg: '#383E56',
    points: [
      'Languages & frameworks: JavaScript, TypeScript, React Native and Expo',
      'UI: Tailwind Css, Native Base & React Native Elements ',
      'Routing/navigating: @react-navigation, expo-router',
      'State management: Redux, Swr, Apollo Client with GraphQL',
      'Animation/gesture: React Native Reanimated 3, React Native Gesture Handler',
      'Miscellaneous: React Native Maps & Google Places Autocomplete & Directions, Expo Web Browser, Expo Auth Session, ...',
    ],
  },
  {
    title: 'Development Enviroment',
    company_name: 'MacOs/Linux',
    icon: linux,
    iconBg: '#E6DEDD',
    points: [
      'IDE: Neovim & VS Code',
      'Skills: git, docker',
      'Write my own terminal-based Neovim IDE, powered by NvChad pre-configuration, written in Lua, integrated with Tmux multiplexer.',
    ],
  },
];

const testimonials = [
  {
    testimonial: 'The only constant in technology industry is change.',
    name: 'Marc Benioff',
    designation: 'Executive Officer of Salesforce',
    image: marc,
  },

  {
    testimonial: 'Simplicity is the ultimate form of sophistication.',
    name: 'Leonardo DaVinci',
    designation: 'Polymath, Engineer, Scientist',
    image: leonardo,
  },
  {
    testimonial: "I have not failed. I've just found 10,000 ways that won't work.",
    name: 'Thomas Edison',
    designation: 'Inventor, Businessman',
    image: thomas,
  },
];

const projects = [
  {
    name: 'Signal clone',
    description:
      'A cross-platform chat app for instant messaging one-to-one or for group messaging with database and authentication from Firebase.',
    tags: [
      {
        name: 'reactnative',
        color: 'blue-text-gradient',
      },
      {
        name: 'nativebase',
        color: 'green-text-gradient',
      },
      {
        name: 'firebase',
        color: 'pink-text-gradient',
      },
    ],
    image: signal,
    source_code_link: 'https://github.com/ng-ha/signal',
  },
  {
    name: 'Tinder clone',
    description:
      'Tinder is an online dating application. Users "swipe right" to like or "swipe left" to dislike other users\' profiles. If two users match, they can message each other.',
    tags: [
      {
        name: 'reactnative',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwindcss',
        color: 'green-text-gradient',
      },
      {
        name: 'expo',
        color: 'pink-text-gradient',
      },
    ],
    image: tinder,
    source_code_link: 'https://github.com/ng-ha/tinder',
  },
  {
    name: 'Deliveroo clone',
    description:
      'A cross-platform mobile application with nice interfaces and a friendly experience that allows users to order food online and have their food delivered to their specific location.',
    tags: [
      {
        name: 'reactnative',
        color: 'blue-text-gradient',
      },
      {
        name: 'redux',
        color: 'green-text-gradient',
      },
      {
        name: 'reactnavigation',
        color: 'pink-text-gradient',
      },
    ],
    image: deliveroo,
    source_code_link: 'https://github.com/ng-ha/deliveroo',
  },
  {
    name: 'Uber clone',
    description:
      'Uber provides mobility as a service/ride-hailing, food delivery/package delivery/couriers via Uber Eats and Postmates, and freight transport.',
    tags: [
      {
        name: 'reactnative',
        color: 'blue-text-gradient',
      },
      {
        name: 'typescript',
        color: 'green-text-gradient',
      },
      {
        name: 'maps',
        color: 'pink-text-gradient',
      },
    ],
    image: uber,
    source_code_link: 'https://github.com/ng-ha/uber',
  },
  {
    name: 'Ups clone',
    description:
      'A cross-platform mobile application that provides shipping, receiving and supply chain management, written in Typescript and powered by Expo.',
    tags: [
      {
        name: 'reactnative',
        color: 'blue-text-gradient',
      },
      {
        name: 'apolloclient',
        color: 'green-text-gradient',
      },
      {
        name: 'graphql',
        color: 'pink-text-gradient',
      },
    ],
    image: ups,
    source_code_link: 'https://github.com/ng-ha/ups',
  },
  {
    name: 'Food app',
    description:
      'A comprehensive food delivery platform that allows users to choose restaurants, pick dishes, read reviews and offers curated recommendations for popular restaurants.',
    tags: [
      {
        name: 'reactnative',
        color: 'blue-text-gradient',
      },
      {
        name: 'nativebase',
        color: 'green-text-gradient',
      },
      {
        name: 'redux',
        color: 'pink-text-gradient',
      },
    ],
    image: foodApp,
    source_code_link: 'https://github.com/ng-ha/food-app',
  },
  {
    name: 'Reddit clone',
    description:
      'A small fullstack project with the most advanced technologies: basic CRUD, authentication, forgot password, SSG and SSR, like and dislike posts, pagination posts.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'graphql',
        color: 'green-text-gradient',
      },
      {
        name: 'postgresql',
        color: 'pink-text-gradient',
      },
    ],
    image: reddit,
    source_code_link: 'https://github.com/ng-ha/reddit',
  },
  {
    name: 'Blog',
    description:
      'A personal blog written in Typescipt, supports server-side rendering and static site generation powered by Next.js, styled with Material UI, fully responsive on all devices.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'swr',
        color: 'green-text-gradient',
      },
      {
        name: 'typescript',
        color: 'pink-text-gradient',
      },
    ],
    image: blogNext,
    source_code_link: 'https://github.com/ng-ha/blog-nextjs',
  },
  {
    name: 'Learn It!',
    description:
      'A fullstack MERN (MongoDB, Express.js, ReactJs, Node.js) app using jsonwebtoken-based authentication and basic CRUD operations with RESTful API.',
    tags: [
      {
        name: 'reactjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'expressjs',
        color: 'green-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'pink-text-gradient',
      },
    ],
    image: learnIt,
    source_code_link: 'https://github.com/ng-ha/learnit',
  },
  {
    name: 'WhatsApp clone',
    description:
      'Web application that enables users to instantly message one-to-one with anyone using Google email address.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'material-ui',
        color: 'green-text-gradient',
      },
      {
        name: 'typescript',
        color: 'pink-text-gradient',
      },
    ],
    image: whatsapp,
    source_code_link: 'https://github.com/ng-ha/whatsapp',
  },
  {
    name: 'Tiktok clone',
    description:
      'A small ReactJs web application that replicates Tiktok interfaces with some additional 3D models.',
    tags: [
      {
        name: 'reactjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'scss',
        color: 'green-text-gradient',
      },
      {
        name: 'threejs',
        color: 'pink-text-gradient',
      },
    ],
    image: tiktok,
    source_code_link: 'https://github.com/ng-ha/tiktok',
  },
  {
    name: 'Neovim IDE',
    description:
      'A terminal-based Neovim IDE, powered by NvChad pre-configuration, written in Lua, integrated with Tmux multiplexer.',
    tags: [
      {
        name: 'neovim',
        color: 'blue-text-gradient',
      },
      {
        name: 'tmux',
        color: 'green-text-gradient',
      },
      {
        name: 'nvchad',
        color: 'pink-text-gradient',
      },
    ],
    image: nvim,
    source_code_link: 'https://github.com/ng-ha/dotfiles',
  },
  {
    name: 'Music player',
    description: 'A music player application written in vanilla JavaScript and HTML/CSS.',
    tags: [
      {
        name: 'javascript',
        color: 'blue-text-gradient',
      },
      {
        name: 'html',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: music,
    source_code_link: 'https://github.com/ng-ha/music-player',
  },
  {
    name: 'Shopee clone',
    description: 'A responsive website clone with plain HTML/CSS, works nicely on all devices.',
    tags: [
      {
        name: 'javascript',
        color: 'blue-text-gradient',
      },
      {
        name: 'html',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: shopee,
    source_code_link: 'https://github.com/ng-ha/shopee',
  },
  {
    name: 'The band',
    description: 'A cloned responsive website with plain HTML/CSS and JavaScript.',
    tags: [
      {
        name: 'javascript',
        color: 'blue-text-gradient',
      },
      {
        name: 'html',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: theBand,
    source_code_link: 'https://github.com/ng-ha/the-band',
  },
];

export { services, technologies, experiences, testimonials, projects };
