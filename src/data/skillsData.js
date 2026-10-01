// Skills grouped by area. `level` is optional and shown as a badge.
export const skillGroups = [
  {
    category: 'Technical',
    title: 'Programming Languages',
    icon: 'code',
    skills: [
      { name: 'C#', level: 'Proficient' },
      { name: 'Java', level: 'Proficient' },
      { name: 'JavaScript', level: 'Intermediate' },
      { name: 'Python', level: 'Intermediate' },
      { name: 'C++', level: 'Intermediate' },
    ],
  },
  {
    category: 'Technical',
    title: 'Frameworks & Backend',
    icon: 'layers',
    skills: [
      { name: '.NET Web API' },
      { name: 'React' },
      { name: 'REST APIs' },
      { name: 'Backend Development' },
    ],
  },
  {
    category: 'Technical',
    title: 'Databases',
    icon: 'database',
    skills: [
      { name: 'Microsoft SQL Server' },
      { name: 'Oracle SQL' },
      { name: 'SQLite' },
    ],
  },
  {
    category: 'Technical',
    title: 'Computer Science Foundations',
    icon: 'cpu',
    skills: [
      { name: 'Object-Oriented Programming' },
      { name: 'Data Structures & Algorithms' },
    ],
  },
  {
    category: 'Technical',
    title: 'Tools & Version Control',
    icon: 'tool',
    skills: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'Visual Studio' },
      { name: 'VS Code' },
      { name: 'Postman' },
    ],
  },
  {
    category: 'Technical',
    title: 'Cloud & AI',
    icon: 'cloud',
    skills: [{ name: 'Cloud Deployment' }, { name: 'Generative AI Tools' }],
  },
  {
    category: 'Soft',
    title: 'Problem Solving',
    icon: 'bulb',
    skills: [
      { name: 'Critical and Quick Thinking' },
      { name: 'Analysis and Decision Making' },
      { name: 'Problem Solving' },
      { name: 'Creativity' },
    ],
  },
  {
    category: 'Soft',
    title: 'Communication & Teamwork',
    icon: 'users',
    skills: [
      { name: 'Teamwork and Collaboration' },
      { name: 'Communication and Presentation' },
    ],
  },
  {
    category: 'Soft',
    title: 'Work Ethic',
    icon: 'target',
    skills: [
      { name: 'Learning and Working Under Pressure' },
      { name: 'Adaptability and Flexibility' },
      { name: 'Time Management' },
      { name: 'Planning and Organisation' },
      { name: 'Professionalism' },
    ],
  },
];

// Flat list (used by the site-wide search on Home).
export const skills = skillGroups.flatMap((group) =>
  group.skills.map((skill) => ({
    name: skill.name,
    category: group.category,
    group: group.title,
  }))
);
