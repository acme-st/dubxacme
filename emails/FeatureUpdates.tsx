import {
  Mjml,
  MjmlBody,
  MjmlColumn,
  MjmlImage,
  MjmlSection,
  MjmlText,
  MjmlWrapper,
} from "mjml-react";
import Divider from "./components/Divider";
import Footer from "./components/Footer";
import Head from "./components/Head";
import Header from "./components/Header";
import { grayDark, purple } from "./components/theme";

export default function FeatureUpdates(): JSX.Element {
  return (
    <Mjml>
      <Head />
      <MjmlBody width={500}>
        <MjmlWrapper cssClass="container">
          <Header title="New Features from ACME.ST" />
          <MjmlSection padding="0">
            <MjmlColumn>
              <MjmlImage
                cssClass="hero"
                padding="0"
                align="left"
                src="https://d2vwwcvoksz7ty.cloudfront.net/email-assets/features.gif"
              />
            </MjmlColumn>
          </MjmlSection>
          <MjmlSection cssClass="smooth">
            <MjmlColumn>
              <MjmlText cssClass="paragraph">
                안녕하세요?! 새로운 기능이 추가되었습니다.{" "}
                <a
                  href="#"
                  target="_blank"
                >
                  새로운 기능 업데이트
                </a>{" "}
                최근에 ACME.ST에 추가된 새로운 기능:
              </MjmlText>
              <Divider bottomPadding />
              <MjmlText cssClass="subtitle">1. 링크 고급 설정</MjmlText>

              <MjmlText cssClass="paragraph">
                애크미쇼트너와 함께라면:
              </MjmlText>
              <MjmlText cssClass="li">
                •&nbsp;&nbsp;커스텀 소셜 카드 (OG-오픈그래프 태그)
              </MjmlText>
              <MjmlText cssClass="li">•&nbsp;&nbsp;UTM 파라메터</MjmlText>
              <MjmlText cssClass="li">
                •&nbsp;&nbsp;비밀번호 접근제한
              </MjmlText>
              <MjmlText cssClass="li">•&nbsp;&nbsp;만료일 지정</MjmlText>
              <MjmlText cssClass="paragraph">
                확인하기{" "}
                <a href="https://acme.st#features" target="_blank">
                  기능 소개
                </a>
                .
              </MjmlText>

              <Divider bottomPadding />
              <MjmlText cssClass="subtitle">
                2. 커스텀 도메인으로 나만의 브랜드 단축 링크
              </MjmlText>
              <MjmlText cssClass="paragraph">
              애크미쇼트너 커스텀 도메인 기능을 활용해서
              보유하고 있는 도메인에 단축링크 기능을 추가하세요.
              </MjmlText>
              <MjmlText cssClass="paragraph">
                ACME.ST와 함께라면 지금 무료로 구현할 수 있습니다.
              </MjmlText>
              <MjmlText cssClass="paragraph">
               당신의 도메인으로{" "}
                <a href="https://app.acme.st" target="_blank">
                  링크 단축을
                </a>{" "}
                시작하세요
              </MjmlText>

              <Divider bottomPadding />
              <MjmlText cssClass="subtitle">3. Analytics that matter</MjmlText>
              <MjmlText cssClass="paragraph">
                애크미쇼트너의 강력한 통계 기능은 사용자와 링크 사이의 다양한 정보를 추적하고 관리합니다.:
              </MjmlText>
              <MjmlText cssClass="li">
                •&nbsp;&nbsp;위치 (국가, 도시)
              </MjmlText>
              <MjmlText cssClass="li">•&nbsp;&nbsp;디바이스 타입</MjmlText>
              <MjmlText cssClass="li">•&nbsp;&nbsp;브라우저 타입</MjmlText>
              <MjmlText cssClass="li">•&nbsp;&nbsp;운영체제 타입</MjmlText>
              <MjmlText cssClass="li">
                •&nbsp;&nbsp;리퍼러 웹사이트 (Twitter, LinkedIn)
              </MjmlText>
              <MjmlText cssClass="paragraph">
                라이브 데모 확인하기{" "}
                <a href="https://acme.st/stats/github" target="_blank">
                  확인
                </a>
                .
              </MjmlText>

              <Divider bottomPadding />
              <MjmlText cssClass="subtitle">4. Free QR code generator</MjmlText>
              <MjmlText cssClass="paragraph">
                애크미쇼트너 단축주소로 QR코드를 생성하고, 커스텀 할 수 있습니다.
              </MjmlText>
              <MjmlText cssClass="paragraph">
                유입 한도가 초과하더라도 (무료 플랜 1,000/월) QR코드 연결은 정상 작동합니다.
                📈 통계확인을 위해서는 플랜 업그레이드가 필요합니다.
              </MjmlText>
              <MjmlText cssClass="paragraph">
                연결성이 보장되는 안정적인 QR코드.
              </MjmlText>

              <Divider bottomPadding />
              <MjmlText cssClass="subtitle">
                5. 팀멤버와 협업하세요.
              </MjmlText>

              <MjmlText cssClass="paragraph">
                팀멤버 초대기능은 ACME.ST 프로젝트로 
                바로 초대하고 즉시 협업할 수 있습니다.
              </MjmlText>
              <MjmlText cssClass="paragraph">
                애크미쇼트너 프로젝트에 무제한으로 멤버를 초대하고
                모든 멤버가 본인의 계정으로 접근해서 협업이 가능합니다.
              </MjmlText>

              <Divider bottomPadding />
              <MjmlText cssClass="paragraph">
                아직 애크미쇼트너의 플랜을 확인하지 않았다면{" "}
                <a
                  href="https://twitter.com/"
                  target="_blank"
                >
                  확인
                </a>
                .
              </MjmlText>
              <MjmlText cssClass="paragraph" color={grayDark}>
                애크미쇼트너 ACME.ST
              </MjmlText>
              <Divider />
            </MjmlColumn>
          </MjmlSection>
          <Footer unsubscribe />
        </MjmlWrapper>
      </MjmlBody>
    </Mjml>
  );
}
