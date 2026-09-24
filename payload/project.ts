import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '광고 전환 로그 검수 자동화 플랫폼 (애즈 탈칵)',
      startedAt: '2026-07',
      where: '비바리퍼블리카 (Viva Republica)',
      descriptions: [
        {
          content:
            '광고주 전환 측정 연동(픽셀, MMP)이 빠지거나 잘못되면 실제로는 토스 광고로 일어난 구매·설치가 광고 기여로 인정되지 않는 문제를 풀기 위해, 팀 리드·서버·PO 겸임으로 신규 플랫폼 설계·구축',
        },
        {
          content:
            '기존 앱 로그 검증 엔진(로그 정의, 파라미터, 정답지)을 광고 전환 도메인으로 확장 재사용, 광고 전용으로는 Hard/Soft 심각도 축만 추가',
        },
        {
          content:
            '소재 승인, 카탈로그 상품세트의 캠페인 연결 이벤트를 Kafka로 받아 검수 대상을 자동 인입, 판정을 가르는 축을 모두 묶어 같은 기준끼리 중복 검수 제거',
        },
        {
          content:
            '검수자가 실기기 미러링 화면으로 광고 클릭부터 구매·설치까지 직접 수행(HITL)하고, 검수 시작 시 발급한 예측 불가능한 추적키를 광고 클릭 ID에 실어 실제 고객 트래픽 속 이번 검수의 전환 로그만 격리해 조인',
        },
        {
          content:
            '광고 목표·하위 유형별 기대 이벤트와 파라미터 규칙을 동적으로 구성하는 정답지 엔진 설계, 미입수는 픽셀·SDK 미검증 / 이벤트 미발송 / MMP 포스트백 미수신으로 원인을 나눠 광고주에게 정확히 안내',
        },
        {
          content:
            '진행·검증 중·판정·미입수·만료·검수 불가 상태를 설계, 검증 중 서버가 끊겨도 재개 예산 안에서는 검증을 이어가고, 랜딩 종료처럼 검수 수단이 없는 건은 검수 불가로 분리해 커버리지 분자·분모 양쪽에서 제외',
        },
        {
          content:
            '광고 프로덕트·캠페인·데이터(DMP)·정책심사·기기 자동화 팀과 판정 기준을 단일 문서(SSOT)로 확정, 카탈로그 검수 방향(인입 시점, 상품 조회 방식, 샘플링 소유)은 여러 조직 협의로 결정',
        },
        {
          content:
            '2026.08.21 라이브 오픈, 첫 주부터 통화·금액·전환 추적 코드 등 요건 불일치 전환을 실광고주 대상으로 처음 검출',
          weight: 'MEDIUM',
        },
        {
          content:
            '흩어져 있던 임시 검수 도구(픽셀 검수 봇, 딥링크 봇)를 흡수, 커버리지 대조로 공백 없음을 확인해 기존 도구 종료를 이끌어냄. 검수 순서를 전환 검수 → 소재 검수로 확정하고 광고 집행 전 사전 검수까지 이 플랫폼이 맡기로 결정',
        },
        {
          content:
            '다음 과제로 광고 노출·클릭·입찰 등 광고 이벤트 로그 검증 설계에 착수 (2026.09~)',
        },
      ],
    },
    {
      title: '앱 로그 검증 자동화 플랫폼 (탈칵)',
      startedAt: '2025-08',
      where: '비바리퍼블리카 (Viva Republica)',
      descriptions: [
        {
          content:
            '토스 앱 로그 검증을 사람이 기기를 손으로 조작하고 눈으로 대조하던 방식에서, 실기기를 자동 조작하고 나온 로그를 실시간으로 비교·판정하는 방식으로 전환. 팀 출범 첫날부터 서버 전담으로 PoC 설계·구현, 라이브 운영, 제품화를 맡았고 이후 팀 리드',
        },
        {
          content:
            'PoC 범위를 로그 20종, 시나리오 5개로 좁혀 2주 만에 원격 실행·시나리오 수행·서버 판정을 통과, 데이터 웨어하우스 SQL 방식은 적재 지연으로 즉시성이 없어 버리고 실기기 실시간 수집으로 방향 전환',
        },
        {
          content:
            '통합 어드민(로그 단위 검증) → 전용 어드민(시나리오 하나에 여러 로그) → 캔버스(DAG, 흐름을 노드·엣지로 그리면 가능한 모든 경로를 자동으로 뽑아 병렬 실행)까지 3세대 제품 고도화',
        },
        {
          content:
            '같은 시나리오를 여러 라운드 돌려 모은 실제 로그 값을 LLM(Flowise)이 보고 정답지 초안과 비교 방식(고정값/형식/범위/존재 여부)을 제안하는 AI 정답지 기능 개발, 신규 파라미터가 생기면 자동 감지해 이어서 생성. 초안은 "시스템 제안" 상태로만 두고 사람이 승인해야 반영',
        },
        {
          content:
            '오토매핑(노드를 실제로 실행해 찍힌 로그로 검증 대상을 자동 연결), 자동 복구 연동(화면이 바뀌어 스텝이 깨지면 실패 경로와 의도를 자연어 UI 자동화 도구에 넘겨 고치고 사람이 승인), A/B 실험군 검수(검수 계정을 특정 실험 변형에 강제 할당)까지 자동화 계층 확장',
        },
        {
          content:
            '비동기 실행을 fire-and-forget 구조에서 DB 선기록 → Kafka → 소비자 실행 + 기동 복구 + 좀비 워치독 구조로 전환, 배포·재시작 시 실행이 유실되던 문제 해결. Outbox·CDC는 팀 규모에 과하다고 보고 배제, 기능 플래그로 되돌릴 수 있게 설계',
        },
        {
          content:
            '앱 로그뿐 아니라 결제·인증 등 서버 도메인 로그까지 검증할 수 있도록 "로그 제공자" 개념으로 일반화, 형식 등록부·대량 등록·로그 식별자 격리 설계',
        },
        {
          content:
            '플랫폼 서버에 MCP를 내장해 AI 에이전트가 플랫폼 기능을 직접 호출, "흐름 구성 → 오토매핑 → AI 정답지 → 반영 → 검수 → 결과 해석"을 대화만으로 끝내는 수준까지 확장. PO, 프론트엔드, 협업 팀이 스스로 디버깅 가능해짐',
        },
        {
          content:
            '검증 방식을 출시 직전 수동 확인에서 하루 2회 자동 검수 + 실패 시 즉시 알림으로 전환, 커버리지는 커머스 핵심 지면(홈·검색·상품 상세) 기준 70%대까지 확보',
          weight: 'MEDIUM',
        },
        {
          content:
            '커머스 검색 조직의 로그 버그 방어 계획에 편입, 경영진 주간 회의에서 커버리지를 정기 보고하는 체계로 확산. 코어 얼라인먼트 데이(2026.07)에서 라이브 데모로 전사 발표',
        },
        {
          content: '로그 자동 검증 관련 특허 2건 출원 (공동 발명자)',
          weight: 'MEDIUM',
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
      endedAt: '2022-12',
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
