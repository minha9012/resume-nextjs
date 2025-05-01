import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: 'Kotlin Coroutine 실전',
      subTitle: 'NEXTSTEP',
      startedAt: '2025-04',
      endedAt: '2025-04',
    },
    {
      title: '도커(Dokcer) 컨테이너와 Kubernetes(쿠버네티스) 구축 실무',
      subTitle: '구트아카데미',
      startedAt: '2022-04',
      endedAt: '2022-04',
    },
    {
      title: 'JAVA를 활용한 안드로이드 앱개발',
      subTitle: '이젠아카데미',
      startedAt: '2018-06',
      endedAt: '2018-12',
    },
    {
      title: '가톨릭대학교',
      subTitle: '사회복지학과 졸업',
      startedAt: '2011-03',
      endedAt: '2018-02',
    },
    {
      title: '평촌고등학교',
      subTitle: '문과 졸업 (경기도 안양)',
      startedAt: '2008-03',
      endedAt: '2011-02',
    },
  ],
};

export default education;
