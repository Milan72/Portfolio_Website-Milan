export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string[];
  technologies: string[];
}

export interface Contact {
  email: string;
  linkedin?: string;
  github?: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    title: string;
    bio: string;
  };
  projects: Project[];
  experience: Experience[];
  contact: Contact;
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Milan Chaulagain",
    title: "Computer Science Student • AI Researcher • Software Developer",
    bio: "Computer Science student at UNT with a passion for artificial intelligence, computational modeling, and research in graph theory and network science.",
  },
  projects: [
    {
      id: "1",
      title: "Event Management System – One Step Event Builder",
      description: "Full-stack web platform with Python/FastAPI backend and React/TypeScript frontend. Implemented JWT authentication and managed a 5-person development team using Trello, Figma, and Git.",
      technologies: ["Python", "FastAPI", "React", "TypeScript", "JWT", "Git"],
      featured: true,
      githubUrl: "https://github.com/Milan72",
    },
    {
      id: "2",
      title: "SimCity Project",
      description: "Built a city simulation system using C++ with object-oriented programming and dynamic interactions for urban planning research.",
      technologies: ["C++", "OOP", "2D Vector Graphics"],
      featured: true,
      githubUrl: "https://github.com/Milan72",
    },
    {
      id: "3",
      title: "Graph Anonymization Algorithm",
      description: "Designed and implemented a graph anonymization algorithm using NetworkX & SecGraph to mitigate re-identification risks in network data.",
      technologies: ["Python", "NetworkX", "SecGraph", "Graph Algorithms"],
      featured: false,
      githubUrl: "https://github.com/Milan72",
    },
    {
      id: "4",
      title: "Gray–Scott Model FEM Solver",
      description: "Implemented a finite element method (FEM) solver in FreeFEM (C++) for the Gray–Scott model simulation. Presented results at UNT Scholar Day using ParaView for visualization.",
      technologies: ["C++", "FreeFEM", "FEM", "ParaView", "Mathematical Modeling"],
      featured: false,
      githubUrl: "https://github.com/Milan72",
    },
    {
      id: "5",
      title: "EA Sports College Football Enhancement",
      description: "Enhanced EA Sports College Football codebase as part of Forage Virtual Internship (Sept 2025).",
      technologies: ["C++", "Game Development"],
      featured: false,
      githubUrl: "https://github.com/Milan72",
    },
  ],
  experience: [
    {
      id: "1",
      company: "Department of Computer Science, University of North Texas",
      position: "Undergraduate Researcher (UR2PhD Scholar)",
      duration: "Aug 2025 - Present",
      description: [
        "Designed and implemented a graph anonymization algorithm using NetworkX & SecGraph to mitigate re-identification risks",
        "Built an object-oriented city simulation with 2D vector-based dynamics for urban planning research",
        "Conducting research in computational methods and graph algorithms"
      ],
      technologies: ["Python", "NetworkX", "SecGraph", "C++", "OOP", "Research"]
    },
    {
      id: "2",
      company: "Department of Mathematics, University of North Texas",
      position: "Undergraduate Researcher",
      duration: "Feb 2025 - May 2025",
      description: [
        "Implemented a finite element method (FEM) solver in FreeFEM (C++) for the Gray–Scott model simulation",
        "Presented results at UNT Scholar Day using ParaView for visualization",
        "Worked on mathematical modeling and computational simulations"
      ],
      technologies: ["C++", "FreeFEM", "FEM", "ParaView", "Mathematical Modeling"]
    },
    {
      id: "3",
      company: "Shree Kumari Secondary School",
      position: "Science Tutor",
      duration: "Jan 2023 - Apr 2023",
      description: [
        "Tutored high school physics students, improving average test scores by 10%",
        "Developed teaching materials and assessment strategies",
        "Provided one-on-one and group tutoring sessions"
      ],
      technologies: ["Teaching", "Physics", "Education"]
    },
  ],
  contact: {
    email: "milanchaulagain@my.unt.edu",
    linkedin: "https://linkedin.com/in/milanchaulagain",
    github: "https://github.com/Milan72",
  }
};

