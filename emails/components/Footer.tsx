import { MjmlColumn, MjmlSection, MjmlText } from "mjml-react";

export default function Footer({
  unsubscribe,
  footnote = true,
}: {
  unsubscribe?: boolean;
  footnote?: boolean;
}): JSX.Element {
  return (
    <MjmlSection cssClass="smooth">
      <MjmlColumn>
        <MjmlText cssClass="footer">
          © {new Date().getFullYear()} Acme.st
          {unsubscribe && (
            <>
              &nbsp;&nbsp;·&nbsp;&nbsp;
              <a href="{{{ pm:unsubscribe }}}" target="_blank">
                수신거부
              </a>
            </>
          )}
        </MjmlText>
        {footnote && (
          <MjmlText cssClass="footer">
            피드백, 문의는 언제라도 답장으로 보내 주세요.
          </MjmlText>
        )}
      </MjmlColumn>
    </MjmlSection>
  );
}
