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
  ],
};

const frameworksLibraries: ISkill.Skill = {
  category: 'Fameworks & Libraries',
  items: [
    {
      title: 'Spring Boot',
    },
    {
      title: 'JPA',
    },
    {
      title: 'Query DSL',
    },
    {
      title: 'Coroutine',
    },
    {
      title: 'Web Flux',
    },
    {
      title: 'Kafka',
    },
    {
      title: 'Express.js',
    },
    {
      title: 'gRPC',
    },
    {
      title: 'Armeria',
    },
  ],
};

const infraDatabase: ISkill.Skill = {
  category: 'Infrastructure & Databases',
  items: [
    {
      title: 'RDBMS',
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
  category: 'Tools',
  items: [
    {
      title: 'Jenkins',
    },
    {
      title: 'Prometheus',
    },
    {
      title: 'Grafana',
    },
    {
      title: 'Datadog',
    },
    {
      title: 'OpenSearch',
    },
    {
      title: 'Openshift',
    },
    {
      title: 'Rancher',
    },
  ],
};

const misc: ISkill.Skill = {
  category: 'Misc',
  items: [
    {
      title: 'DevOps',
    },
    {
      title: 'Medium',
    },
    {
      title: 'Geeknews',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [programmingLanguages, frameworksLibraries, infraDatabase, toolsIdes, misc],
  // tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
