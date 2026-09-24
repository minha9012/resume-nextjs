import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    'Kotlin과 Spring Boot를 중심으로 백엔드 아키텍처를 설계·운영해왔습니다. 토스에서는 로그 검증 자동화 플랫폼을 PoC 단계부터 서버 전담으로 만들어 라이브 운영까지 이끈 뒤 팀 리드로 성장했습니다. 0에서 1을 만드는 과정에서 스스로 문제를 정의하고 기술적 방향을 결정하는 역할을 주로 맡아왔습니다.',
    '이어서 광고 전환 로그 검수 플랫폼을 새로 맡으며 팀 리드·서버·PO를 겸임하고 있습니다. 기기 자동화, 로그 명세, 광고 프로덕트·데이터·캠페인 등 여러 조직의 시스템과 이해관계를 엮어 하나의 판정 기준으로 정리하는 데 강점이 있습니다.',
    '검증 기준과 데이터 모델의 모호함을 시스템적으로 정리하는 설계를 지향하며, 관련 특허 2건을 출원했습니다. 협업 결과를 문서로 남기고 공유해 팀이 지속 가능하게 성장할 수 있는 개발 환경을 만드는 것을 중요하게 생각합니다.',
  ],
  sign: 'minggu',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
