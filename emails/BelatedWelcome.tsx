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

export default function WelcomeEmail({
  domains,
}: {
  domains?: string[];
}): JSX.Element {
  return (
    <Mjml>
      <Head />
      <MjmlBody width={500}>
        <MjmlWrapper cssClass="container">
          <Header title="애크미쇼트너 ACME.ST의 환영 인사" />
          <MjmlSection padding="0">
            <MjmlColumn>
              <MjmlImage
                cssClass="hero"
                padding="0"
                align="left"
                src="https://og-image.acme.st/**Welcome**%20to%20Acme.ST.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fog-image.acme.st%2Fimg%2Fbiblic.svg"
              />
            </MjmlColumn>
          </MjmlSection>
          <MjmlSection cssClass="smooth">
            <MjmlColumn>
              <MjmlText cssClass="paragraph">
                애크미쇼트너 ACME.ST의 환영 인사 
              </MjmlText>
              {domains ? (
                <MjmlText cssClass="paragraph">
                  애크미쇼트너 ACME.ST 프로젝트에서
                  커스텀 도메인 설정이 완료되었습니다.
                  {domains.length > 1 ? "s" : ""}{" "}
                  {domains.map((domain) => (
                    <span key={domain}>
                      <code>
                        <a
                          rel="nofollow"
                          style={{
                            textDecoration: "none",
                            color: `${purple} !important`,
                          }}
                        >
                          {domain}
                        </a>
                      </code>
                      {", "}
                    </span>
                  ))}{" "}
                  💌 피드백과 제안을 항상 기다립니다.
                </MjmlText>
              ) : (
                <MjmlText cssClass="paragraph">
                  애크미쇼트너에 최근 가입하셨지만
                  아직 커스텀 도메인 기능을 사용하지 않고계셔서 안내해 드립니다.
                  혹시 ACME.ST의 플랜을 확인해 보셨나요?
                </MjmlText>
              )}
              <MjmlText cssClass="paragraph">
                확인 전이라면 커스텀 도메인 연결이 무료라는 점을 다시 한 번 확인해 주세요.
                더 자세한 내용은 링크를 참고해 주세요.{" "}
                <a
                  href="https://twitter.com/"
                  target="_blank"
                >
                  여기
                </a>
                .
              </MjmlText>
              <MjmlText cssClass="paragraph">
                아래 내용들도 기억해 주세요:
              </MjmlText>
              <MjmlText cssClass="li">
                •&nbsp;&nbsp;Follow us on{" "}
                <a href="https://twitter.com/" target="_blank">
                  Twitter
                </a>
              </MjmlText>
              <MjmlText cssClass="li">
                •&nbsp;&nbsp;Star the repo on{" "}
                <a href="https://github.com/" target="_blank">
                  GitHub
                </a>
              </MjmlText>
              {domains ? (
                <MjmlText cssClass="paragraph" color={grayDark}>
                  🎁🎁🎁🎁🎁
                </MjmlText>
              ) : (
                <MjmlText cssClass="paragraph">
                  💌 피드백과 제안을 항상 기다립니다.
                </MjmlText>
              )}
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
