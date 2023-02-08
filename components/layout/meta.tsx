import Head from "next/head";
import { FAVICON_FOLDER } from "@/lib/constants";

export default function Meta({
  title = "애크미쇼트너 ACME.ST",
  description = "애크미쇼트너는 콘텐츠와 마케팅 전문팀을 위한 통합 링크 관리 서비스로 링크단축, 생성, 공유, 추적, 통계 모든 과정을 제공합니다.",
  image = "https://acme.st/_static/thumbnail.png",
}: {
  title?: string;
  description?: string;
  image?: string;
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`${FAVICON_FOLDER}/apple-touch-icon.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`${FAVICON_FOLDER}/favicon-32x32.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`${FAVICON_FOLDER}/favicon-16x16.png`}
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link
        rel="mask-icon"
        href={`${FAVICON_FOLDER}/safari-pinned-tab.svg`}
        color="#5bbad5"
      />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />

      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta itemProp="image" content={image} />
      <meta property="og:logo" content="https://acme.st/_static/logo.png"></meta>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@" />
      <meta name="twitter:creator" content="@" />
      <meta
        name="twitter:title"
        content="애크미쇼트너 ACME.ST"
      />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
}
