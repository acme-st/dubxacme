import Link from "next/link";
import {
  Airplay,
  Chart,
  QR,
  Users,
  Link as LinkIcon,
  Photo,
} from "@/components/shared/icons";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import { useState } from "react";
import Accordion from "@/components/shared/accordion";
import { AnimatePresence, motion } from "framer-motion";
import { useLinkQRModal } from "../app/modals/link-qr-modal";
import { DEFAULT_LINK_PROPS } from "@/lib/constants";
import { useAddEditLinkModal } from "../app/modals/add-edit-link-modal";

const featureList = [
  {
    key: "analytics",
    title: "링크 애널리틱스",
    icon: <Chart className="h-5 w-5 text-gray-600" />,
    description:
      "애크미쇼트너의 강력한 통계 기능은 사용자와 링크 사이의 다양한 정보를 추적하고 관리합니다.",
    cta: (
      <Link
        href={{ pathname: "/", query: { key: "github" } }}
        as="/stats/github"
        shallow
        scroll={false}
        className="block max-w-fit rounded-full border border-black bg-black px-4 py-1.5 text-sm text-white transition-all hover:bg-white hover:text-black"
      >
        데모 보기
      </Link>
    ),
    demo: "https://d2vwwcvoksz7ty.cloudfront.net/analytics.mp4",
    thumbnail: "/_static/features/analytics.png",
  },
  {
    key: "domains",
    title: "당신의 보유 도메인 사용",
    icon: <Airplay className="h-5 w-5 text-gray-600" />,
    description:
      "애크미쇼트너는 커스텀 도메인 연동을 지원합니다. 내 도메인으로 단축주소를 만드세요.",
    cta: (
      <a
        href="https://app.acme.st"
        target="_blank"
        rel="noreferrer"
        className="block max-w-fit rounded-full border border-black bg-black px-4 py-1.5 text-sm text-white transition-all hover:bg-white hover:text-black"
      >
        프로젝트 만들기
      </a>
    ),
    demo: "https://d2vwwcvoksz7ty.cloudfront.net/custom-domain.mp4",
  },
  {
    key: "link",
    title: "고성능 링크 빌더",
    icon: <LinkIcon className="h-5 w-5 text-gray-600" />,
    description:
      "커스텀 해시, UTM파라미터, 비밀번호 보호, 링크 만료, iOS/Andriod 타겟팅을 포함한 강력한 링크빌더",
    cta: "데모 보기", //custom cta
    demo: "https://d2vwwcvoksz7ty.cloudfront.net/link.mp4",
  },
  {
    key: "social",
    title: "커스텀 소셜 미디어 카드",
    icon: <Photo className="h-5 w-5 text-gray-600" />,
    description:
      "링크에 커스텀 오픈그래프(OG) 이미지, 타이틀, 설명을 추가하면 함께 실어서 보내드립니다.",
    cta: "데모 보기", //custom cta
    demo: "https://d2vwwcvoksz7ty.cloudfront.net/og.mp4",
  },
  {
    key: "qr",
    title: "QR코드 생성",
    icon: <QR className="h-5 w-5 text-gray-600" />,
    description:
      "애크미쇼트너 단축주소로 QR코드를 생성하고, 맞춤 디자인 할 수 있습니다.",
    cta: "데모보기", //custom cta
    demo: "https://d2vwwcvoksz7ty.cloudfront.net/qr.mp4",
  },
  {
    key: "team",
    title: "팀멤버와 협업",
    icon: <Users className="h-5 w-5 text-gray-600" />,
    description:
      "모든 팀멤버를 애크미쇼트너에 초대하고 함께 협업하세요. 무제한 초대, 그리고 무료입니다.",
    cta: (
      <a
        href="https://app.acme.st"
        target="_blank"
        rel="noreferrer"
        className="block max-w-fit rounded-full border border-black bg-black px-4 py-1.5 text-sm text-white transition-all hover:bg-white hover:text-black"
      >
        팀멤버 초대
      </a>
    ),
    demo: "https://d2vwwcvoksz7ty.cloudfront.net/team.mp4",
  },
];

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(0);

  const { setShowAddEditLinkModal, AddEditLinkModal } = useAddEditLinkModal({
    props: DEFAULT_LINK_PROPS,
    homepageDemo: true,
  });
  const { setShowLinkQRModal, LinkQRModal } = useLinkQRModal({
    props: {
      key: "github",
      url: "https://github.com/",
    },
  });
  return (
    <div id="features">
      <AddEditLinkModal />
      <LinkQRModal />
      {featureList.map(({ key, demo }) => (
        // preload videos
        <link key={key} rel="preload" as="video" href={demo} />
      ))}
      <MaxWidthWrapper className="py-10">
        <div className="mx-auto max-w-md text-center sm:max-w-xl">
          <h2 className="font-display text-4xl font-extrabold leading-tight text-black sm:text-5xl sm:leading-tight">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              애크미쇼트너
            </span>{" "}
            URL 단축주소{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              ACME
            </span>{" "}
            .ShorTener
          </h2>
          <p className="mt-5 text-gray-600 sm:text-lg">
            Acme.ST에서는 단축 URL을 만들고 강력한 부가 기능을 간편하게 적용할 수 있는
            플랫폼을 제공하여 사용하기 간편하고 신뢰할 수 있는 링크 단축 서비스를 제공합니다.
          </p>
        </div>

        <div className="my-10 h-[840px] w-full overflow-hidden rounded-xl border border-gray-200 bg-white/10 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur lg:h-[630px]">
          <div className="grid grid-cols-1 gap-10 p-5 lg:grid-cols-3">
            <Accordion
              items={featureList.map(
                ({ key, title, icon, description, cta }) => ({
                  trigger: (
                    <div className="flex items-center space-x-3 p-3">
                      {icon}
                      <h3 className="text-base font-semibold text-gray-600">
                        {title}
                      </h3>
                    </div>
                  ),
                  content: (
                    <div className="p-3">
                      <p className="mb-4 text-sm text-gray-500">
                        {description}
                      </p>
                      {key === "link" || key === "social" ? (
                        <button
                          onClick={() => setShowAddEditLinkModal(true)}
                          className="block max-w-fit rounded-full border border-black bg-black px-4 py-1.5 text-sm text-white transition-all hover:bg-white hover:text-black"
                        >
                          데모 보기
                        </button>
                      ) : key === "qr" ? (
                        <button
                          onClick={() => setShowLinkQRModal(true)}
                          className="block max-w-fit rounded-full border border-black bg-black px-4 py-1.5 text-sm text-white transition-all hover:bg-white hover:text-black"
                        >
                          데모 보기
                        </button>
                      ) : (
                        cta
                      )}
                    </div>
                  ),
                }),
              )}
              activeTab={activeFeature}
              setActiveTab={setActiveFeature}
            />
            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                {featureList.map((feature, index) => {
                  if (index === activeFeature) {
                    return (
                      <motion.div
                        key={feature.title}
                        initial={{
                          y: 10,
                          opacity: 0,
                        }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{
                          y: -10,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.15,
                          stiffness: 300,
                          damping: 30,
                        }}
                        className="relative min-h-[600px] w-full overflow-hidden whitespace-nowrap rounded-2xl bg-white shadow-2xl lg:mt-10 lg:w-[800px]"
                      >
                        <video
                          autoPlay
                          muted
                          loop
                          width={800}
                          height={600}
                          poster={feature.thumbnail}
                        >
                          <source src={feature.demo} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </motion.div>
                    );
                  }
                })}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
