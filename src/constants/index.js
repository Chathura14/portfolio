import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate and dedicated Full Stack Developer and a 4th-year IT undergraduate at SLIIT. With hands-on experience in front-end technologies like React, Next.js, and Tailwind CSS, along with back-end expertise in Spring Boot and Node.js, I specialize in building scalable and efficient applications. My knowledge extends to databases like MySQL and MongoDB, and I have a strong interest in AI/ML. I thrive on solving complex problems, learning new technologies, and creating innovative solutions that enhance user experiences and drive business growth.`;

export const ABOUT_TEXT = `I am a dedicated and versatile Full Stack Developer and a 4th-year IT undergraduate at SLIIT with a CGPA above 3.0. With hands-on experience in technologies like React, Next.js, Tailwind CSS, Node.js, Spring Boot, MySQL, PostgreSQL, and MongoDB, I specialize in developing efficient and user-friendly web applications. I have completed two internships, one for 6 months and another for 3 months, where I gained valuable industry experience and honed my problem-solving skills. My journey in web development started with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy exploring new technologies, staying active, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024 Sept - 2025 March",
    role: "Intern Software Engineer",
    company: "Gamage Recruiters",
    description: `As an Intern Software Engineer, I contributed to the development, maintenance, and bug fixes of web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). I collaborated closely with the team to ensure seamless development workflows, optimized application performance, and delivered high-quality solutions. Additionally, I actively participated in discussions to refine project requirements and improve overall application functionality.`,
    technologies: ["Express.js", "React.js", "Node.js", "MongoDB"],
  },
  {
    year: "2024 Dec - 2025 March",
    role: "Intern Software Engineer (Project Based)",
    company: "Cypso Labs",
    description: `As an Intern Software Engineer, I contributed to the development, maintenance, and bug fixes of web applications using Spring Boot, Next.js, Node.js, and Tailwind CSS. I collaborated with the team to streamline development workflows, enhance application performance, and ensure the delivery of high-quality solutions. Additionally, I actively used ClickUp for project updates, task tracking, and efficient communication, ensuring smooth project execution and timely delivery.`,
    technologies: ["SpringBoot", "Next.js", "Node.js", "Tailwind CSS", "MongoDB", "React.js"],
  },
];

export const PROJECTS = [
  {
    title: "Social Media Application",
    image: project1,
    description:
      "Developed a fitness platform with CRUD functionality for meal plans and workout routines. Integrated Google OAuth for secure authentication and enabled user profile creation with fitness goal tracking. Added interactive features like liking, commenting, and sharing to enhance user engagement.",
    technologies: ["SpringBoot", "React", "MongoDB"],
    GitHub:"https://github.com/Chathura14/SocialMediaApp.git",
  },
  {
    title: "Speech to Text Transcriber",
    image: project2,
    description:
      "Developed a speech-to-text transcription app using Spring Boot, Spring AI, and React. Designed to process previously recorded audio files, converting speech into accurate text transcriptions. Integrated AI-powered speech recognition for improved accuracy and usability.",
    technologies: ["SpringBoot", "React", "SpringAI"],
    GitHub:"https://github.com/Chathura14/AudioToText.git",
  },
  {
    title: "Space Game",
    image: project3,
    description:
      "Developed a simple space game using Pygame, featuring player-controlled movement, obstacle avoidance, and score tracking. Implemented smooth gameplay mechanics and interactive elements to enhance user experience.",
    technologies: ["Python"],
    GitHub:"https://github.com/Chathura14/spacegame.git",
  },
  {
    title: "Weather Tracking Application",
    image: project4,
    description:
      "Developed a weather tracking app using Node.js, React, and MongoDB. The application provides a 7-day weather forecast for user-searched cities, allows users to subscribe for hourly weather updates via email, and displays the latest weather news for real-time insights.",
    technologies: ["MongoDB", "React", "Node"],
    GitHub:"https://github.com/Chathura14/weather-app.git",
  },
];

export const CONTACT = {
  address: "Malabe, Sri Lanka",
  email: "chathuramadhushan23@gmail.com",
};
