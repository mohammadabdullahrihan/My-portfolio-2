import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/Coderammer.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Coderammer It Solution",
    image: project4,
    description:
      "Coderammer IT Solution is a dynamic and innovative software development company committed to delivering cutting-edge technology solutions. With a focus on quality, scalability, and client satisfaction, we specialize in web and mobile development, custom software solutions, and digital transformation projects.",
    technologies: ["HTML", "CSS", "React","Typescript", "Node.js", "MongoDB",],
  },
  {
    id: 2,
    title: "Coupon Web",
    image: project1,
    description:
      "A comprehensive e-commerce platform that offers unbeatable deals and discounts through a wide range of coupons for products and services. Features include real-time coupon updates, category-based searches, and personalized recommendations to help users save money effortlessly while shopping online.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    id: 3, 
    title: "Chill Gamer",
    image: project2,
    description:
      "A dynamic gaming platform offering the latest reviews, trending news, and engaging content for gamers worldwide. Features include game walkthroughs, gameplay videos, leaderboards, and a thriving community of passionate gamers. Perfect for casual players and hardcore enthusiasts alike to stay updated and connect with others in the gaming universe.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    id: 4,
    title: "Blogs ",
    image: project3,
    description:
      "An elegant and user-friendly blog website designed for sharing insights, stories, and expertise across various topics like technology, lifestyle, health, travel, and more. The platform supports multimedia-rich posts, reader comments, and social sharing to create an interactive experience for readers and writers.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  
];
