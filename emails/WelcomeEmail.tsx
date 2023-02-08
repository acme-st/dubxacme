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
import { grayDark } from "./components/theme";

export default function WelcomeEmail({ name }: { name?: string }): JSX.Element {
  return (
    <Mjml>
      <Head />
      <MjmlBody width={500}>
        <MjmlWrapper cssClass="container">
          <Header title="Welcome to ACME.ST" />
          <MjmlSection padding="0">
            <MjmlColumn>
              <MjmlImage
                cssClass="hero"
                padding="0"
                align="left"
                src="https://acme.st/_static/thumbnail.png"
              />
            </MjmlColumn>
          </MjmlSection>
          <MjmlSection cssClass="smooth">
            <MjmlColumn>
              <MjmlText cssClass="paragraph">
                어서오세요.{name && `, ${name}`}님!
              </MjmlText>
              <MjmlText cssClass="paragraph">
                애크미쇼트너(ACME.ShorTener)는
                콘텐츠와 마케팅 전문팀을 위한 통합 링크 관리 서비스로 링크단축, 생성, 공유, 추적, 통계 모든 과정을 제공합니다.
              </MjmlText>
              <MjmlText cssClass="paragraph">
                몇 가지 기능을 소개합니다.:
              </MjmlText>
              <MjmlText cssClass="li">
                •&nbsp;&nbsp;나만의 브랜드{" "}
                <a href="https://app.acme.st/links" target="_blank">
                  Acme.st 단축 링크
                </a>
              </MjmlText>
              <MjmlText cssClass="li">
                •&nbsp;&nbsp;새 프로젝트{" "}
                <a href="https://app.acme.st/" target="_blank">
                  만들기
                </a>{" "}
                그리고 나의 보유 도메인 추가하기
              </MjmlText>
              <MjmlText cssClass="li">
                •&nbsp;&nbsp;Star the repo on{" "}
                <a href="https://github.com/" target="_blank">
                  GitHub
                </a>
              </MjmlText>
              <MjmlText cssClass="li">
                •&nbsp;&nbsp;Follow us on{" "}
                <a href="https://twitter.com/" target="_blank">
                  Twitter
                </a>
              </MjmlText>
              <MjmlText cssClass="paragraph">
                피드백과 제안을 항상 기다립니다.
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
