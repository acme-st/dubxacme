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

export default function ProjectDeleted({
  domain,
  projectSlug,
}: {
  domain: string;
  projectSlug: string;
}): JSX.Element {
  return (
    <Mjml>
      <Head />
      <MjmlBody width={500}>
        <MjmlWrapper cssClass="container">
          <Header title="Project Deleted" />
          <MjmlSection cssClass="smooth">
            <MjmlColumn>
              <MjmlText cssClass="paragraph">안녕하세요!</MjmlText>
              <MjmlText cssClass="paragraph">
                ACME.ST 프로젝트 및 연결된 도메인에 대해 알려드릴 것이 있씁니다.{" "}
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
                30일간 설정이 완료되지 않았거나, 활동이 없습니다.
                따라서 프로젝트가 삭제됩니다.
              </MjmlText>
              <MjmlText cssClass="paragraph">
                프로젝트를 복구하고 싶다면
                아래 링크에서 프로젝트를 다시 만들어 주세요.
              </MjmlText>
              <ButtonPrimary
                link={`https://app.acme.st/`}
                uiText="새 프로젝트 만들기"
              />
              <MjmlText cssClass="paragraph">
                더이상 이 프로젝트를 ACME.ST에서 유지할 필요가 없다면
                이 메일은 무시해 주세요.
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
