import { ISkill } from '../component/skill/ISkill';

const programmingLanguages: ISkill.Skill = {
  category: 'Languages',
  items: [
    {
      title: 'Kotlin',
    },
    {
      title: 'Java',
    },
    {
      title: 'Javascript',
    },
    {
      title: 'Node.js',
    },
    {
      title: 'HTML/CSS',
    },
    {
      title: 'C#',
    },
  ],
};

const frameworksLibraries: ISkill.Skill = {
  category: 'Fameworks & Libraries',
  items: [
    {
      title: 'Spring Boot',
    },
    {
      title: 'Express.js',
    },
    {
      title: 'JPA',
    },
    {
      title: 'Android',
    },
    {
      title: 'Coroutine',
    },
    {
      title: 'gRPC',
    },
    {
      title: 'React.js',
    },
  ],
};

const infraDatabase: ISkill.Skill = {
  category: 'Infrastructure & Databases',
  items: [
    {
      title: 'Oracle',
    },
    {
      title: 'PostgreSQL',
    },
    {
      title: 'Redis',
    },
    {
      title: 'MongoDB',
    },
    {
      title: 'Linux',
    },
    {
      title: 'Openshift',
    },
    {
      title: 'AWS',
    },
    {
      title: 'Kubernetes',
    },
    {
      title: 'Docker',
    },
  ],
};

const toolsIdes: ISkill.Skill = {
  category: 'Tools & IDEs',
  items: [
    {
      title: 'IDEA',
    },
    {
      title: 'VS Code',
    },
    {
      title: 'Git',
    },
    {
      title: 'Jenkins',
    },
    {
      title: 'Jira',
    },
    {
      title: 'Confluence',
    },
  ],
};

const misc: ISkill.Skill = {
  category: 'Misc',
  items: [
    {
      title: 'Taekwondo',
    },
    {
      title: 'Escape Room Cafe',
    },
    {
      title: 'See a Musical',
    },
    {
      title: 'Drinking',
    },
    {
      title: 'Foodie',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [programmingLanguages, frameworksLibraries, infraDatabase, toolsIdes, misc],
  // tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
