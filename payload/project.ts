import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '앱 로그 검증 자동화 시스템',
      startedAt: '2025-08',
      endedAt: '진행중',
      where: '토스 (Toss)',
      descriptions: [
        {
          content:
            '사내 앱 로그 검증 과정에서 검증 기준의 불명확성과 로그 미입수로 인한 신뢰도 저하를 핵심 문제로 정의',
          weight: 'MEDIUM',
        },
        {
          content:
            'PoC를 통해 실행 성공 / 검증 성공 / 로그 입수 기준을 재정의하고 QA 흐름을 구조적으로 개선',
        },
        {
          content: 'run과 ValidationResult 개념을 분리하여 검증 결과 모델을 명확히 정리',
        },
        {
          content: 'ElasticSearch 및 Kibana 분석으로 동일 시나리오 내 로그 미입수 원인을 규명',
        },
        {
          content:
            '스케줄 실행 단위 추적을 위해 scheduleExecutionUuid를 도입하여 실행·검증·로그 간 연관성 확보',
        },
        {
          content:
            'PoC 검증 결과를 바탕으로 운영 서비스를 전제로 한 구조로 전환하고 배포·운영 체계를 정립',
        },
        {
          content: '통합 어드민 및 Flowise 기반 LLM 연동으로 검증 자동화와 운영 효율성 확대',
        },
      ],
    },
    {
      title: '디지털키 시스템 고도화',
      startedAt: '2025-01',
      endedAt: '2025-07',
      where: '현대오토에버 (Hyundai Autoever)',
      descriptions: [
        {
          content: '디지털키1 레거시 환경 개선 작업 진행',
          descriptions: [
            {
              content: '현대차 자체 프레임웍(able framework) to Spring Boot',
            },
            {
              content: 'Jeus WAS to Nginx, Tomcat',
            },
          ],
        },
        {
          content: '디지털키1 GC 수행 개선',
          descriptions: [
            {
              content: 'Heap 메모리 비정상적인 GC 수행 패턴 확인',
            },
            {
              content: '리눅스 서버에서 jvm 덤프 통해 소스 코드상 메모리 누수 로직 확인',
            },
            {
              content: 'Parallel GC를 G1 GC로 수행 알고리즘 변경',
            },
          ],
        },
        {
          content: '차량생산정보 외부 DB 배치 작업을 Kafka 메세지 송수신할 수 있도록 변경 ',
        },
        {
          content: '디지털키2 모니터링 고도화',
          descriptions: [
            {
              content: 'OpenSearch의 Anomaly Detector 기능 활용한 비정상 인입 탐지',
            },
          ],
        },
      ],
    },
    {
      title: '꿀템 서비스 개발',
      startedAt: '2024-03',
      endedAt: '2024-12',
      where: '지마켓 (Gmarket)',
      descriptions: [
        {
          content: '모든 DB 테이블 및 인덱스 설계 주도',
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
          content: '75%의 구매 전환율 달성',
          weight: 'MEDIUM',
        },
      ],
    },
    {
      title: '이벤트 플랫폼 차세대 개편',
      startedAt: '2024-02',
      endedAt: '2024-10',
      where: '지마켓 (Gmarket)',
      descriptions: [
        {
          content: 'SP(Stored Procedure) → JPA 전환, QueryDSL로 복잡 쿼리 대응',
        },
        {
          content: '멀티 모듈 구조와 CQRS 패턴 적용으로 비즈니스 의존성을 분리',
        },
        {
          content:
            'gRPC 도입을 통해 네트워크 비용을 절감하고 API 스펙의 일관성을 강제하여 클라이언트-서버 간 통신 안정성을 강화.',
          descriptions: [
            {
              content:
                '외주 개발자가 코어 비즈니스 로직에 접근하지 못하도록 인터페이스 기반의 호출만 허용하고, 요청 전후 확장 로직만 구현 가능하도록 설계',
            },
          ],
        },
        {
          content:
            'Armeria 프레임워크를 도입해 gRPC와 RESTful API를 통합적으로 제공하며, 점진적인 기술 전환을 지원',
          descriptions: [
            {
              content:
                '기존 RESTful API를 사용하는 클라이언트의 호환성을 유지하면서 신규 gRPC API를 병렬적으로 운영',
            },
            {
              content:
                'Spring Framework와의 연동을 통해 러닝 커브를 최소화하고, 기존 개발 방식과의 호환성을 유지',
            },
          ],
        },
        {
          content: 'Redis 데이터를 Protobuf 형식으로 저장',
          href: 'https://minggu92.tistory.com/130',
          descriptions: [
            {
              content:
                '가시적인 Redis 데이터 확인이 필요할때에는 Armeria에서 제공하는 DocService를 이용하여 역직렬화 후 확인',
            },
          ],
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
            'DeploymentConfig의 Max Surge를 1로 설정하여 한 번에 한 Pod만 배포되도록 했고, Max Unavailable을 0으로 설정하여 기존 Pod가 제거되지 않도록 보장',
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
      title: '기획전 차세대 개편',
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
          content: 'GraphQL 도입으로 다양한 클라이언트 대응',
        },
      ],
    },
    {
      title: '기획전 a11y(접근성) 개선',
      startedAt: '2022-10',
      endedAt: '12',
      where: '지마켓 (Gmarket)',
      descriptions: [
        {
          content: '기획전에 OCR 모듈 연동 작업 수행',
        },
        {
          content: '웹 접근성을 고려한 사용자 인터랙션을 바탕으로 다양한 시나리오를 설계 및 검증',
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
          content:
            '이벤트 중 WAS의 DB Connection Pool 고갈로 인해 요청 처리 지연 및 응답 실패 발생 →',
          descriptions: [
            {
              content:
                'DB Connection Pool의 최대 연결 수가 트래픽을 감당하지 못한 원인으로 확인 후 설정값 조정 및 문제 해결',
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
