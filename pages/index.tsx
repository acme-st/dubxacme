import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";
import prisma from "@/lib/prisma";
import { useStatsModal } from "@/components/app/modals/stats-modal";
import Background from "@/components/shared/background";
import Demo from "@/components/home/demo";
import Features from "@/components/home/features";
import Globe from "@/components/home/globe";
import Hero from "@/components/home/hero";
import Logos from "@/components/home/logos";
import Pricing from "@/components/home/pricing";
import HomeLayout from "@/components/layout/home";

export default function Home({
  userCount,
  stars,
}: {
  userCount: number;
  stars: number;
}) {
  const router = useRouter();
  const { key: stats } = router.query;
  const { setShowStatsModal, StatsModal } = useStatsModal();

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      router.push("/", undefined, { scroll: false });
    }
  }, []);

  useEffect(() => {
    if (stats) {
      setShowStatsModal(true);
    } else {
      setShowStatsModal(false);
    }
  }, [stats]);

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  return (
    <HomeLayout>
      <StatsModal />
      <div className="z-10">
        <Hero />
        <Demo />
        <Logos />
        <Globe />
        <Features />
        <Pricing />
      </div>
      <Background />
    </HomeLayout>
  );
}