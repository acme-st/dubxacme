import {
  Mjml,
  MjmlBody,
  MjmlColumn,
  MjmlSection,
  MjmlText,
  MjmlWrapper,
} from "mjml-react";
import ButtonPrimary from "./components/ButtonPrimary";
import Divider from "./components/Divider";
import Footer from "./components/Footer";
import Head from "./components/Head";
import Header from "./components/Header";
import { grayDark, purple } from "./components/theme";

export default function InvalidDomain({
  domain,
  projectSlug,
  invalidDays,
}: {
  domain: string;
  projectSlug: string;
  invalidDays: number;
}): JSX.Element {
  return (
    <Mjml>
      <Head />
      <MjmlBody width={500}>
        <MjmlWrapper cssClass="container">
          <Header title="Invalid Domain Configuration" />
          <MjmlSection cssClass="smooth">
            <MjmlColumn>
              <MjmlText cssClass="paragraph">안녕하세요!</MjmlText>
              <MjmlText cssClass="paragraph">
                고객님의{" "}
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
                </code>{" "}
                ACME.ST 프로젝트{" "}
                <a href={`https://app.acme.st/${projectSlug}`} target="_blank">
                  {projectSlug}↗
                </a>{" "}
                커스텀 도메인이 {invalidDays} 일 동안 완료되지 않았습니다.
              </MjmlText>
              <MjmlText cssClass="paragraph">
                연결을 시도한 도메인이 제대로 설정되지 않고 30일이 경과하면
                프로젝트와 모든 설정 데이터가 자동으로 삭제됩니다.
                아래 링크에서 설정을 완료해 주세요.
              </MjmlText>
              <ButtonPrimary
                link={`https://app.acme.st/${projectSlug}/settings`}
                uiText="내 도메인 설정"
              />
              <MjmlText cssClass="paragraph">
                ACME.ST 프로젝트가 필요하지 않다면{" "}
                <a
                  href={`https://app.acme.st/${projectSlug}/settings`}
                  target="_blank"
                >
                  삭제
                </a>{" "}
                  하거나 또는 이 메일을 무시하고 그냥 두셔도 됩니다.{" "}
                {invalidDays < 28
                  ? `I will only send you one more email about this in ${
                      28 - invalidDays
                    } days.`
                  : "this will be the last time I'll email you about this."}
              </MjmlText>
              <MjmlText cssClass="paragraph" color={grayDark}>
                애크미쇼트너 ACME.ST
              </MjmlText>
              <Divider />
            </MjmlColumn>
          </MjmlSection>
          <Footer />
        </MjmlWrapper>
      </MjmlBody>
    </Mjml>
  );
}
