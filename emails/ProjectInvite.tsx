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
import { purple } from "./components/theme";

export default function ProjectInvite({
  url,
  projectName,
}: {
  url: string;
  projectName: string;
}): JSX.Element {
  return (
    <Mjml>
      <Head />
      <MjmlBody width={500}>
        <MjmlWrapper cssClass="container">
          <Header title="Your ACME.ST Invite" />
          <MjmlSection cssClass="smooth">
            <MjmlColumn>
              <MjmlText cssClass="paragraph">
                ACME.ST 프로젝트 <strong>{projectName}</strong>{" "}
                초대합니다!
              </MjmlText>
              <MjmlText cssClass="paragraph">
                매직 링크를 눌러서 계정에 로그인하고 
                프로젝트에 참여해 주세요.
              </MjmlText>
              <ButtonPrimary link={url} uiText="프로젝트 참여" />
              <MjmlText cssClass="paragraph">
                링크가 비활성화된 디바이스라면
                링크를 복사해서 브라우저에 넣어주셔도 됩니다.
              </MjmlText>
              <MjmlText cssClass="paragraph">
                <a
                  rel="nofollow"
                  style={{
                    textDecoration: "none",
                    color: `${purple} !important`,
                  }}
                >
                  {url.replace(/^https?:\/\//, "")}
                </a>
              </MjmlText>
              <MjmlText cssClass="paragraph">
                요청한 적이 없다면 이 메일을 무시해 주세요.
              </MjmlText>
              <Divider />
            </MjmlColumn>
          </MjmlSection>
          <Footer footnote={false} />
        </MjmlWrapper>
      </MjmlBody>
    </Mjml>
  );
}
