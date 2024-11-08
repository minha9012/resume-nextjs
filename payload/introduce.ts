import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '웹 서비스 백엔드 개발에 전문성을 가지고 있습니다. Kotlin과 Spring Boot를 중심으로 백엔드 환경에서 안정성과 성능을 고려한 아키텍처 설계를 경험하며 성장해왔습니다. 지마켓에서 다양한 도메인을 관리하며 API 서버 설계 및 개발을 맡아왔고, 이벤트 플랫폼과 같은 고성능 서비스를 운영하며 최신 기술 스택을 적용한 경험이 있습니다.',
    '비개발 직군과의 원활한 소통을 위해 노력하며, 팀원들과는 기술 공유 스터디를 주도해 함께 성장하고 있습니다. 스타트업과 SI 프로젝트 경험을 통해 쌓은 비즈니스와 기술의 균형 잡힌 시각으로 문제를 해결하며, 문서화를 통해 누구나 쉽게 이해할 수 있는 개발 환경을 구축하는 데 중점을 둡니다.',
    '기술 트렌드에 민감하게 반응하며 매일 학습하고 성장하기 위해 노력하는 개발자입니다, 더욱 나은 사용자 경험과 가치를 제공하기 위해 끊임없이 공유하며 발전하고 있습니다.',
  ],
  sign: 'minggu',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
