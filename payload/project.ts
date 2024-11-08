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
          content: '50%의 구매전환율 달성',
          weight: 'MEDIUM',
          // descriptions: [
          //   { content: '30% improvement in system resource efficiency' },
          //   { content: 'Job Scheduler Refactor and Optimization' },
          // ],
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
      title: '지마켓/옥션 전시 상품 API 개선',
      startedAt: '2023-11',
      endedAt: '2023-12',
      where: '지마켓 (Gmarket)',
      descriptions: [
        { content: '빅스마일데이 중 Redis 서버에서 장애 발생' },
        {
          content:
            '수백개의 pod가 roll out 되면서 모든 pod에서 로컬 캐시 생성 위해 HGETALL 커맨드 실행되는 이슈',
        },
        {
          content:
            '서버가 순차적으로 roll out 될 수 있도록 DeploymentConfig의 Max Surge와 Max unavailable값 수정',
        },
        {
          content:
            '서버 시작시 HGETALL 커맨드로 전체 호출하는 것이 아니라 요청이 발생 할 때 HGET 으로 필요한 key만 조회 ',
        },
        {
          content: '조회한 결과에 대해 로컬 캐시를 생성하고 TTL 설정하여 Read Through 전략을 채택',
        },
        {
          content: 'p95 latency 200ms → 20ms 개선',
          weight: 'MEDIUM',
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
        { content: '위 페인포인트를 해결하기 위해 MongoDB 적용' },
        {
          content:
            '모듈의 Format 변경이 발생할 수 있으므로 Version 필드를 컬렉션마다 설정해 하위 호환성 확보',
        },
        {
          content:
            'NoSQL의 DB 정합성 확보를 위해 Format이라는 별도 컬렉션을 만들어 Json Schema로 검증',
        },
        {
          content: '웹, 모바일, 태블릿 등 다양한 Front에 랜딩하기 위해 GraphQL 적용',
        },
      ],
    },
    {
      title: '기획전 a11y(접근성) 개선',
      startedAt: '2022-10',
      endedAt: '2022-12',
      where: '지마켓 (Gmarket)',
      descriptions: [
        { content: '기획전 내에서 OCR 모듈을 연동 작업' },
        {
          content: '유저 인터랙션을 통해 다양한 시나리오 상정',
        },
        {
          content:
            '클라이언트에서 동시에 요청을 보내면 비동기로 응답할 수 있도록 `Promise.allSettled()` 사용',
        },
        {
          content: '지마켓 기획전 OCR 테스트 영상',
          href: 'https://www.youtube.com/watch?v=x6buh-JAY60',
        },
        {
          content: '웹 접근성, 시각장애인 커뮤니티에 많이 소개됨.',
        },
      ],
    },
    {
      title: '사내 딥링크 시스템 관리',
      startedAt: '2022-08',
      endedAt: '2023-12',
      where: '지마켓 (Gmarket)',
      descriptions: [
        { content: '하루 평균 250만회 이상의 요청 수행' },
        { content: 'Android, iOS Native 코드 소스 분석' },
        { content: '딥링크를 생성할 수 있는 어드민 시스템 개발' },
        {
          content:
            '웹 링크의 Referrer, Cookie 등의 메트릭을 수집해 from - To 모니터링 시스템을 Federation 패턴으로 구축',
        },
        { content: 'Android 앱 설치 후 동선이 유실 되는 케이스 해결' },
        { content: 'iOS 카카오톡 인앱 브라우저내 딥링크 집행 실패 이슈 해결' },
      ],
    },
    {
      title: 'AI 기반 생활기록부 진단 서비스 "Vibe On" 개발',
      startedAt: '2021-03',
      endedAt: '2022-03',
      where: '아이엠비씨스템 (IMB System)',
      descriptions: [
        { content: '웹 개발 PL을 맡아 모든 작업 일정 관리' },
        { content: '전체 데이터베이스 설계' },
        { content: 'OAuth2.0 기반의 sns 간편 회원가입, 로그인 기능 개발' },
        { content: '리눅스 서버 구축, 방화벽 및 네트워크 설정' },
        { content: 'WAS 설정(Wildfly)' },
        {
          content: '이벤트 진행 중 WAS가 server down되는 현상 발생 →',
          descriptions: [
            {
              content:
                'Application 의 Connectio pool은 이상없었으나 WAS의 DB Connection Pool이 낮게 설정되어 있어 WAS가 down되는 것을 확인',
            },
          ],
        },
        {
          content: 'AI가 생기부를 분석한 텍스트 데이터를 DB로 Insert 안되는 상황 발생 →',
          descriptions: [
            {
              content:
                'PSQL로 접속해 확인하니 텍스트 데이터가 너무 길고 방대해 insert 하는 동안Exclusive Lock으로 인해 Writing 작업에 대기열이 쌓이고 결국 DeadLock 현상 발생',
            },
            {
              content:
                ' 데이터를 api 호출 한번에 insert 하는 것이 아니라 타겟 테이블을 분할하고 Queue 테이블을 만들어 요청이 순차적으로 처리 될 수 있도록 작업',
            },
          ],
        },
      ],
    },
    {
      title: '신한 MFI 영업지원 시스템',
      startedAt: '2020-08',
      endedAt: '2021-02',
      where: '아이엠비씨스템 (IMB System)',
      descriptions: [
        { content: '미얀마 신한 MFI 지점에서 사용되는 태블릿 & 웹 프로그램 제작' },
        { content: 'Spring 기반 자체 솔루션으로 웹 개발' },
        { content: '공통코드 관리' },
        { content: '미얀마어로 포팅 후 출력되는 보고서 개발' },
        { content: '리눅스 서버 구축, 방화벽 및 네트워크 설정' },
        {
          content: 'Android Native App 개발',
          descriptions: [
            { content: '오프라인 상태에서도 저장할 수 있도록 내장 SQLite 사용' },
            { content: '서명 할 수 있는 Sign Pad 기능 개발' },
            { content: '사진 캡쳐 및 저장기능(Glide 라이브러리 활용)' },
            { content: '웹 서버와 Sync 기능 (htttp 통신)' },
            { content: 'Loading bar 표시를 위해 코틀린으로 migration 및 Coroutine 적용' },
          ],
        },
      ],
    },
    {
      title: '하나은행 외국환 플랫폼 개편',
      startedAt: '2019-09',
      endedAt: '2020-08',
      where: '아이엠비씨스템 (IMB System)',
      descriptions: [
        { content: 'xFrame이라는 툴을 이용해 100개 이상의 화면 및 데이터 바인딩 작업' },
        { content: '오래되고 복잡한 쿼리의 최적화 및 튜닝 작업 보조' },
        { content: 'Oracle 및 Sybase DGB에 있는 레거시 데이터 흐름도 파악 및 분석' },
        { content: '어떤 데이터들이 Mart 테이블에 들어가야 하는지 배움' },
        { content: 'TerraStream 툴을 이용하여 Batch job 관리 작업을 보조' },
      ],
    },
  ],
};

export default project;
