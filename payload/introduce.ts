import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    'Kotlin과 Spring Boot를 중심으로 웹 서비스 백엔드 아키텍처를 설계·운영해왔으며, 대규모 트래픽과 복잡한 도메인 환경에서 안정성과 확장성을 고려한 시스템을 구축해왔습니다.',
    '단순 기능 구현을 넘어 문제를 정의하고 기준과 구조를 재설계하는 데 강점이 있습니다. 검증 기준, 데이터 모델, 운영 흐름의 모호함을 정리하고 이를 시스템적으로 해결하는 방향으로 설계 결정을 내려왔습니다.',
    '개발, 기획, 운영 조직과의 협업을 통해 기술을 실제 서비스와 운영 맥락에 맞게 연결하는 데 집중하며, 문서화와 공유를 통해 팀의 지속 가능한 개발 환경을 만드는 것을 중요하게 생각합니다.',
  ],
  sign: 'minggu',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
