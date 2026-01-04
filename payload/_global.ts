import favicon from '../asset/favicon.ico';
import previewImage from '../asset/preview.jpg';
import { IGlobal } from '../component/common/IGlobal';

const title = '이민하 이력서';
const description = '7년차 백엔드 개발자';

export const _global: IGlobal.Payload = {
  favicon,
  headTitle: title,
  seo: {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: previewImage,
          width: 800,
          height: 600,
          alt: '귀여운 이리',
        },
      ],
      type: 'profile',
      profile: {
        firstName: 'Lee',
        lastName: 'Minha',
        username: 'minggu',
        gender: 'male',
      },
    },
  },
};
