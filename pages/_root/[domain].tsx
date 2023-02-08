import prisma from "@/lib/prisma";
import Background from "@/components/shared/background";
import Meta from "@/components/layout/meta";
import { useState } from "react";
import { motion } from "framer-motion";
import { useDebounce } from "use-debounce";
import { STAGGER_CHILD_VARIANTS } from "@/lib/constants";
import Spline from "@splinetool/react-spline";
import { InlineSnippet } from "@/components/app/settings/custom-domain/domain-configuration";

export default function Placeholder({ domain }: { domain: string }) {
  const [loading, setLoading] = useState(true);
  const onLoad = () => {
    setLoading(false);
  };
  // workarouond to avoid the blinking effect when Spline loads
  const [opacity] = useDebounce(loading ? 0 : 1, 200);

  const [showText] = useDebounce(loading ? false : true, 800);

  return (
    <div className="flex h-screen flex-col items-center">
      <Meta
        title={`${domain.toUpperCase()} - ACME.ST 커스텀 도메인`}
        description={`${domain.toUpperCase()} : ACME.ST 커스텀 도메인 - 애크미쇼트너는 콘텐츠와 마케팅 전문팀을 위한 통합 링크 관리 서비스로 링크단축, 생성, 공유, 추적, 통계 모든 과정을 제공합니다.`}
      />
      <Background />
      <motion.div
        className="z-10"
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <div
          className={`${
            loading ? "scale-[25%] blur-md" : "scale-100 blur-0"
          } mt-[7vh] h-[50vh] w-screen object-cover transition-all duration-1000`}
        >
          <Spline
            onLoad={onLoad}
            style={{ opacity: opacity }}
            scene="https://prod.spline.design/cJkq6hsiUPNRHeMf/scene.splinecode"
          />
        </div>
        {showText && (
          <motion.div
            variants={{
              show: {
                transition: {
                  staggerChildren: 0.3,
                },
              },
            }}
            initial="hidden"
            animate="show"
            className="mx-5 flex flex-col items-center space-y-10 text-center sm:mx-auto"
          >
            <motion.h1
              className="font-display text-4xl font-bold text-gray-800 transition-colors sm:text-5xl"
              variants={STAGGER_CHILD_VARIANTS}
            >
              Welcome to ACME.ST
            </motion.h1>
            <motion.p
              className="max-w-xl text-gray-600 transition-colors sm:text-lg"
              variants={STAGGER_CHILD_VARIANTS}
            >
              <InlineSnippet>{domain}</InlineSnippet> : ACME.ST 커스텀 도메인{" "}
              <a
                className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text font-semibold text-transparent decoration-rose-600 hover:underline"
                href={`https://acme.st?utm_source=${domain}&utm_medium=referral&utm_campaign=custom-domain`}
              >
                애크미쇼트너 
              </a>{" "}
              - 콘텐츠와 마케팅 전문팀을 위한 통합 링크 관리 서비스로 링크단축, 생성, 공유, 추적, 통계 모든 과정을 제공합니다.
            </motion.p>
            <motion.a
              variants={STAGGER_CHILD_VARIANTS}
              href={`https://acme.st?utm_source=${domain}&utm_medium=referral&utm_campaign=custom-domain`}
              className="rounded-full bg-gray-800 px-10 py-2 font-medium text-white transition-colors hover:bg-black"
            >
              무료 브랜드 링크 만들기
            </motion.a>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export const getStaticPaths = async () => {
  const domains = await prisma.project.findMany({
    where: {
      domainVerified: true,
      ownerUsageLimit: 1000,
    },
    select: {
      domain: true,
    },
  });
  return {
    paths: domains.map(({ domain }) => ({
      params: {
        domain,
      },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps = async (context) => {
  const { domain } = context.params;
  return {
    props: {
      domain,
    },
  };
};
