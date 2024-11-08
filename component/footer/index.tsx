import { Col, Row } from 'reactstrap';
import { PropsWithChildren } from 'react';
import { EmptyRowCol } from '../common';

import { IFooter } from './IFooter';
import { Style } from '../common/Style';

export const Footer = {
  Component,
};

function Component({ payload }: PropsWithChildren<{ payload: IFooter.Payload }>) {
  return (
    <Row>
      <Col style={Style.footerCover}>
        <div style={Style.footer} className="text-center mt-4">
          <EmptyRowCol>
            <small>
              {/* Github 주소는 origin repository 의 주소를 넣는다. */}
              {/* <HrefTargetBlank url="https://github.com/uyu423/resume-nextjs" text="Github" /> */}
              {'읽어주셔서 감사합니다. '}
              {/* Thanks for <HrefTargetBlank url="https://blog.outsider.ne.kr/1234" text="Outsider" /> */}
            </small>
          </EmptyRowCol>
        </div>
      </Col>
    </Row>
  );
}
