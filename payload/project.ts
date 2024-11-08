import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '꿀템 서비스 개발',
      startedAt: '2024-03',
      where: '지마켓 (Gmarket)',
      descriptions: [
        {
          content: '계층 구조로 모든 Database Table을 설계 및 생성',
        },
        {
          content: 'Redis를 Cache Layer로 도입해서 캐싱 전략을 설계',
          descriptions: [
            { content: 'Look aside 패턴으로 읽기 전략 수립' },
            { content: 'Job Scheduler Refactor and Optimization' },
          ],
        },
        {
          content: 'Spring 멀티 모듈을 적용하여 Admin, Aggregator를 구성',
        },
        {
          content: '게시글 조회수 기능 개발',
          href: 'https://minggu92.tistory.com/131',
        },
        {
          content: '실시간 인기 꿀템 추천 개발',
          href: 'https://minggu92.tistory.com/137',
        },
        {
          content: 'n%의 구매전환율 달성',
          weight: 'MEDIUM',
          descriptions: [
            { content: '30% improvement in system resource efficiency' },
            { content: 'Job Scheduler Refactor and Optimization' },
          ],
        },
      ],
    },
    {
      title: '꿀템 서비스 개발',
      startedAt: '2024-03',
      endedAt: '2019-12',
      where: '지마켓 (Gmarket)',
      descriptions: [
        {
          content:
            'Initiated and lead a collaborative project aimed at optimizing the Linux Kernel for various hardware architectures.',
        },
        {
          content:
            'Achieved significant improvements in system performance and resource management.',
          weight: 'MEDIUM',
          descriptions: [
            { content: '30% improvement in system resource efficiency' },
            { content: 'Job Scheduler Refactor and Optimization' },
          ],
        },
      ],
    },
  ],
};

export default project;
