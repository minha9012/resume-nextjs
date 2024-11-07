import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '지마켓(Gmarket)',
      position: 'Web Frontend팀, Web Service Developer',
      startedAt: '2022-05',
      descriptions: [
        'Kotlin/Spring Boot 기반 API 서버 설계 및 개발',
        'Openshift(Red Hat Kubernetes)을 이용한 컨테이너 오케스트레이션',
        '이벤트 플랫폼, 기획전 등 대규모 트래픽 처리 도메인 담당',
        '신규 서비스인 "꿀템"의 기획, 설계, 개발 담당',
        '레거시 개선 및 유지보수 작업',
        'Datadog 모니터링 시스템 연동, 대시보드 생성 및 Alert 체계 구축',
      ],
      skillKeywords: [
        'Kotlin',
        'Spring Boot',
        'Oracle',
        'SQL-Server',
        'Node.js',
        'Express.js',
        'Redis',
        'MongoDB',
        'Jenkins',
        'C#',
        '.NET',
      ],
    },
    {
      title: '아이엠비씨스템(IMB System)',
      position: '기업부설연구소, 연구원',
      startedAt: '2019-06',
      endedAt: '2022-05',
      descriptions: [
        '다양한 SI 프로젝트 참여 및 개발 수주',
        'Spring Framework 기반 자체 솔루션 고도화',
        'DB 설계 및 쿼리 작성',
        'Linux 서버 세팅 및 모니터링',
        '개발 공수 산정, 일정 관리 매니징',
      ],
      skillKeywords: [
        'Java',
        'Spring Framework',
        'Android',
        'Javascript',
        'Oracle',
        'PostgreSQL',
        'Wildfly',
        'Linux',
        'VM Ware',
        'xFrame',
      ],
    },
  ],
};

export default experience;
