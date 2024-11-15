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
          content: '계층 구조를 기반으로 모든 Database Table을 설계 및 생성',
        },
        {
          content: 'Redis를 Cache Layer로 도입하여 캐싱 전략을 설계',
          descriptions: [
            {
              content: 'Look-Aside 패턴을 적용하여 읽기 전략 수립 및 주기적인 Cache Warming 구현',
            },
            {
              content:
                '쓰기 전략은 Write-Back(좋아요 등)과 Write-Around(피드, 댓글 등)을 상황에 따라 혼합 사용',
            },
          ],
        },
        {
          content: 'Spring 멀티 모듈 구조를 적용하여 Admin과 Aggregator를 구성',
        },
        {
          content: 'JPA의 타입 안정성을 강화하기 위해 QueryDSL을 적용',
          descriptions: [
            {
              content:
                '서브쿼리를 FROM 절에 사용할 수 없는 제한을 해결하기 위해 `@SubSelect` 어노테이션으로 Entity 매핑',
            },
          ],
        },
        {
          content: '게시글 조회수 기능 개발',
          href: 'https://minggu92.tistory.com/131',
        },
        {
          content: '실시간 인기 꿀템 추천 기능 개발',
          href: 'https://minggu92.tistory.com/137',
        },
        {
          content: '50%의 구매 전환율 달성',
          weight: 'MEDIUM',
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
            '기존 SP(Stored Procedure) 호출 방식을 JPA로 전환, 복잡한 쿼리는 QueryDSL로 구현',
        },
        {
          content: 'Spring 멀티 모듈 구조와 CQRS 패턴을 도입하여 비즈니스 로직의 의존성을 분리',
        },
        {
          content: 'gRPC를 적용하여 네트워크 비용 절감 및 API 스키마 사양 확립',
        },
        {
          content: 'Armeria 프레임워크 도입',
          descriptions: [
            { content: '신규 gRPC와 기존 RESTful API의 공존 가능하도록 설정' },
            { content: 'Spring Framework와 연동하여 러닝 커브를 최소화' },
          ],
        },
        {
          content: 'Redis 데이터를 Protobuf 형식으로 저장',
          href: 'https://minggu92.tistory.com/130',
        },
        {
          content: '트랜잭션 의존으로 발생한 중복 발급 문제를 개선',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                "방대한 이벤트 응모 테이블의 중복 문제를 해결하기 위해 'created_at' 컬럼에 unique index 적용하여 해결하고 있었음.",
            },
            {
              content: '중복 발급 방지와 같은 동시성 처리를 위해 Redis 기반의 분산 락을 적용',
              href: 'https://minggu92.tistory.com/137',
            },
            {
              content: '시스템 안정성과 고가용성을 위해 Kafka 도입을 제안 및 전략 수립',
            },
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
        {
          content: '빅스마일데이 중 Redis 서버에서 장애 발생',
          descriptions: [
            {
              content:
                '수백 개의 pod가 Roll Out 되며 모든 pod에서 로컬 캐시 생성을 위해 HGETALL 명령어를 실행하는 문제가 발생',
            },
          ],
        },
        {
          content:
            'DeploymentConfig의 Max Surge와 Max Unavailable 값을 조정하여 서버가 순차적으로 Roll Out 되도록 수정',
        },
        {
          content:
            '서버 시작 시 HGETALL로 전체 호출하는 대신, 요청 시점에 HGET으로 필요한 key만 조회하도록 변경',
        },
        {
          content: '조회 결과를 로컬 캐시로 저장하고 TTL을 설정하여 Read-Through 전략을 적용',
        },
        {
          content: 'p95 Latency를 200ms에서 20ms로 개선',
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
        {
          content: '기획전은 템플릿화된 상품 전시 페이지를 담당자가 직접 제작하는 비즈니스',
        },
        {
          content: '페인포인트 분석',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '기획전 이력 관리는 이미지 캡처 후 NAS에 저장해 담당자가 육안으로 비교',
              descriptions: [
                {
                  content:
                    '이전 데이터와의 차이를 비교할 수 있도록 전체 데이터를 저장하여 diff를 제공',
                },
              ],
            },
            {
              content: '기획전 수정 시 연관 모듈 테이블에 Write 작업이 발생',
              descriptions: [
                {
                  content: '에디터 내용을 한 곳에 저장하기 위해 JSON 및 BSON 타입 검토',
                },
              ],
            },
            {
              content: '신규 컬럼 추가 시 DB 승인 과정으로 애자일 개발에 장애 발생',
              descriptions: [
                {
                  content: 'DB 작업 리소스를 줄이고 유연한 구조 변경을 위해 NoSQL 도입 검토',
                },
              ],
            },
          ],
        },
        {
          content: '위 페인포인트를 해결하기 위해 MongoDB 도입',
        },
        {
          content:
            '모듈 Format 변경 가능성을 대비해 Version 필드를 컬렉션별로 설정하여 하위 호환성 확보',
        },
        {
          content: 'NoSQL 정합성을 확보하기 위해 Json Schema로 검증하는 별도 Format 컬렉션 생성',
        },
        {
          content: '웹, 모바일, 태블릿 등 다양한 프론트로 랜딩하기 위해 GraphQL 적용',
        },
      ],
    },
    {
      title: '기획전 a11y(접근성) 개선',
      startedAt: '2022-10',
      endedAt: '2022-12',
      where: '지마켓 (Gmarket)',
      descriptions: [
        {
          content: '기획전에 OCR 모듈 연동 작업 수행',
        },
        {
          content: '다양한 사용자 인터랙션을 바탕으로 다양한 시나리오를 설계 및 검증',
        },
        {
          content:
            '클라이언트에서 동시 요청 시 비동기 응답을 처리하기 위해 `Promise.allSettled()` 사용',
        },
        {
          content: '지마켓 기획전 OCR 테스트 영상',
          href: 'https://www.youtube.com/watch?v=x6buh-JAY60',
        },
        {
          content: '웹 접근성 및 시각장애인 커뮤니티에 소개되어 큰 호응을 얻음',
        },
      ],
    },
    {
      title: '사내 딥링크 시스템 관리',
      startedAt: '2022-08',
      endedAt: '2023-12',
      where: '지마켓 (Gmarket)',
      descriptions: [
        { content: '하루 평균 250만 회 이상의 요청 처리' },
        { content: 'Android 및 iOS Native 코드 소스 분석' },
        { content: '딥링크를 생성할 수 있는 어드민 시스템 개발' },
        {
          content:
            '웹 링크의 Referrer 및 Cookie 등 메트릭을 수집하여 From-To 모니터링 시스템을 Federation 패턴으로 구축',
        },
        { content: 'Android 앱 설치 후 동선 유실 문제 해결' },
        { content: 'iOS 카카오톡 인앱 브라우저 내 딥링크 실패 이슈 해결' },
      ],
    },
    {
      title: "AI 기반 생활기록부 진단 서비스 'Vibe On' 개발",
      startedAt: '2021-03',
      endedAt: '2022-03',
      where: '아이엠비씨스템 (IMB System)',
      descriptions: [
        { content: '웹 개발 PL을 맡아 작업 일정 관리' },
        { content: '전체 데이터베이스 설계' },
        { content: 'OAuth2.0 기반 SNS 간편 회원가입 및 로그인 기능 개발' },
        { content: '리눅스 서버 구축 및 방화벽, 네트워크 설정' },
        { content: 'WAS 설정(Wildfly)' },
        {
          content: '이벤트 중 WAS 서버 다운 현상 발생 →',
          descriptions: [
            {
              content: 'WAS의 DB Connection Pool 설정이 낮아 서버 다운 원인 확인 및 수정',
            },
          ],
        },
        {
          content: 'AI 생기부 분석 텍스트 데이터 DB Insert 문제 발생 →',
          descriptions: [
            {
              content: '텍스트 데이터 크기 과다로 DeadLock 현상 발생 확인',
            },
            {
              content: 'API 호출 시 데이터를 분할하여 Queue 테이블을 통해 순차적 처리로 문제 해결',
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
        { content: '미얀마 신한 MFI 지점에서 사용되는 태블릿 및 웹 프로그램 제작' },
        { content: 'Spring 기반 자체 솔루션으로 웹 개발' },
        { content: '공통 코드 관리 기능 개발' },
        { content: '미얀마어 포팅 및 출력 보고서 개발' },
        { content: '리눅스 서버 구축 및 방화벽, 네트워크 설정' },
        {
          content: 'Android Native App 개발',
          descriptions: [
            { content: '오프라인 저장을 위한 SQLite 내장 사용' },
            { content: 'Sign Pad 기능 개발로 전자 서명 가능' },
            { content: '사진 캡처 및 저장 기능 구현 (Glide 라이브러리 활용)' },
            { content: '웹 서버와 동기화를 위한 HTTP 통신 구현' },
            { content: 'Loading bar 표시를 위해 Kotlin 및 Coroutine 적용' },
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
        { content: 'xFrame 툴을 이용한 100개 이상의 화면 및 데이터 바인딩 작업' },
        { content: '복잡한 쿼리 최적화 및 튜닝 작업 지원' },
        { content: 'Oracle 및 Sybase DGB 레거시 데이터 흐름도 분석' },
        { content: 'Mart 테이블에 적합한 데이터 선별 및 설계 학습' },
        { content: 'TerraStream 툴을 활용한 Batch Job 관리 작업 지원' },
      ],
    },
  ],
};

export default project;
