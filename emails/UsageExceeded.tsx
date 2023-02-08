import {
  Mjml,
  MjmlBody,
  MjmlColumn,
  MjmlSection,
  MjmlText,
  MjmlWrapper,
} from "mjml-react";
import { getPlanFromUsageLimit } from "@/lib/stripe/constants";
import { nFormatter } from "@/lib/utils";
import ButtonPrimary from "./components/ButtonPrimary";
import Divider from "./components/Divider";
import Footer from "./components/Footer";
import Head from "./components/Head";
import Header from "./components/Header";
import { grayDark } from "./components/theme";

export default function UsageExceeded({
  usage,
  usageLimit,
  type,
}: {
  usage: number;
  usageLimit: number;
  type: "first" | "second";
}): JSX.Element {
  return (
    <Mjml>
      <Head />
      <MjmlBody width={500}>
        <MjmlWrapper cssClass="container">
          <Header title="Usage Limit Exceeded" />
          <MjmlSection cssClass="smooth">
            <MjmlColumn>
              <MjmlText cssClass="paragraph">안녕하세요!</MjmlText>
              <MjmlText cssClass="paragraph">
                애크미쇼트너 어카운트 제한을 초과하였습니다.
                <strong> {getPlanFromUsageLimit(usageLimit)} Plan </strong>
                limit of <strong>{nFormatter(usageLimit)} link clicks</strong>.
                You have used{" "}
                <strong>{nFormatter(usage, 2)} link clicks</strong> across all
                your projects in your current billing cycle.
              </MjmlText>
              <MjmlText cssClass="paragraph">
                데이터는 유지되고 링크는 정상 작동합니다. 
                수정 및 관리, 링크 추가를 위해서는 플랜 업그레이드가 필요합니다.
              </MjmlText>
              <ButtonPrimary
                link={`https://app.acme.st/settings`}
                uiText="플랜 업그레이드"
              />
              <MjmlText cssClass="paragraph">
                To respect your inbox,{" "}
                {type === "first"
                  ? "I will only send you one more email about this in 3 days"
                  : "this will be the last time I'll email you about this"}
                업그레이드 할 계획이 없으시다면 이 메일은 무시해 주세요. 문의사항은 언제든지 연락해 주세요.
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
