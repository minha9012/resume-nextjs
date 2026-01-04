import { IArticle } from '../component/article/IArticle';

const article: IArticle.Payload = {
  disable: false,

  list: [
    {
      content: '코프링 톺아보기 강의 제작',
      href: 'https://class101.net/ko/products/67e10094346b8bf2ce8466c2',
    },
    {
      content: 'G마켓 개발자에게 직접 듣는, 화제의 “빅스마일데이 꿀템 피드” 개발 스토리',
      href: 'https://news.gmarket.com/index.php/blog-detail/?pid=1066',
    },
    {
      content: '기획전 a11y 개선 프로젝트',
      href: 'https://dev.gmarket.com/63',
    },
    {
      content: '신규 서비스 "꿀템"을 만들기 위한 여정(네? 다음달까지요?) -1편',
      href: 'https://dev.gmarket.com/110',
    },
    {
      content: '신규 서비스 "꿀템"을 만들기 위한 여정(네? 다음달까지요?) -2편',
      href: 'https://dev.gmarket.com/111',
    },
  ],
};

export default article;
