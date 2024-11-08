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
      title: '이벤트 플랫폼 차세대',
      startedAt: '2024-02',
      where: '지마켓 (Gmarket)',
      descriptions: [
        {
          content:
            '기존에 SP(Stored Procedure)를 호출하는 형태 → JPA를 적용하고 복잡한 쿼리는 queryDSL로 구현',
        },
        {
          content: 'Spring Multi Module 구성 및 CQRS 패턴을 도입하여 비즈니스 로직의 의존성을 분리',
        },
        {
          content: '중복 발급 방지를 위해 Redis 를 활용한 분산락 적용',
          href: 'https://minggu92.tistory.com/137',
        },
        {
          content: 'gRPC를 적용하여 네트워크 비용 절감, api schema spec 확립',
        },
        {
          content: 'Armeria 프레임워크를 도입',
          descriptions: [
            { content: '신규 gRPC와 기존 Restful API 모두 사용 가능하도록 설정' },
            { content: 'Spring framework와 연동하여 러닝커브 감소' },
          ],
        },
        { content: 'Redis 데이터를 protobuf로 저장', href: 'https://minggu92.tistory.com/130' },
        {
          content: '트랜잭션에 의존하고 있어 중복 발급 발생',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                "이벤트 응모 테이블이 워낙 방대해 별도 테이블 'created_at' 컬럼에 unique index 적용으로 해소",
            },
            { content: '동시성 발생을 DB 트랜잭션에 의존하는 것보다 Kafka 도입을 제안' },
          ],
        },
      ],
    },
    {
      title: '기획전 차세대',
      startedAt: '2023-02',
      endedAt: '2023-10',
      where: '지마켓 (Gmarket)',
      descriptions: [
        { content: '기획전은 템플릿화 되어 담당자가 직접 상품 전시 페이지를 만드는 비즈니스.' },
        {
          content: '페인포인트 분석',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '기획전의 이력관리는 이미지 캡쳐를 통해 NAS에 저장하여 담당자가 눈으로 비교 → ',
              descriptions: [
                { content: '이전 데이터와의 diff를 비교해 보여줄 수 있도록 전체 데이터를 저장' },
              ],
            },
            {
              content: '매번 수정할 때마다 해당 기획전의 연관 모듈 테이블에 Write 작업이 발생 → ',
              descriptions: [
                {
                  content: '에디터의 내용 전체를 한 곳에 저장하기 위해 json, BSON 등의 타입을 검토',
                },
              ],
            },
            {
              content: '신규 컬럼이 추가되면 DB 승인 과정이 필요해 애자일한 개발에 허들 →',
              descriptions: [
                { content: 'DB 작업에 드는 리소스를 줄이고 구조변경에 유연한 NoSQL 사용' },
              ],
            },
          ],
        },
        { content: '기획전은 템플릿화 되어 담당자가 직접 상품 전시 페이지를 만드는 비즈니스.' },
        { content: '기획전은 템플릿화 되어 담당자가 직접 상품 전시 페이지를 만드는 비즈니스.' },
      ],
    },
  ],
};

export default project;
