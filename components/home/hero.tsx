import Link from "next/link";

const Hero = () => {
  return (
    <div className="mx-auto mt-20 mb-10 max-w-md px-2.5 text-center sm:max-w-lg sm:px-0">
      <a
        href="https://acme.st/launch"
        target="_blank"
        rel="noreferrer"
        className="mx-auto flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-all hover:bg-blue-200"
      >
        <p className="text-sm font-semibold text-[#1d9bf0]">
          Introducing 애크미쇼트너
        </p>
      </a>

      <h1 className="mt-5 font-display text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl sm:leading-[1.15]">
        URL 주소 단축 With
        <br />
        <span className="bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent">
        애크미쇼트너 ACME.ST
        </span>
      </h1>
      <h2 className="mt-5 text-lg text-gray-600 sm:text-xl">
        애크미쇼트너는 콘텐츠와 마케팅 전문팀을 위한 통합 링크 관리 서비스로
        링크단축, 생성, 공유, 추적, 통계 모든 과정을 제공합니다.
      </h2>

      <div className="mx-auto mt-10 flex max-w-fit space-x-4">
        <Link
          href="https://app.acme.st/register"
          className="rounded-full border border-black bg-black py-2 px-5 text-sm text-white shadow-lg transition-all hover:bg-white hover:text-black"
        >
          무료로 시작하기
        </Link>
        <Link
          href="https://app.acme.st/register"
          className="flex items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white py-2 px-5 shadow-lg transition-all hover:border-gray-800"
        >
          시작하지 않기
        </Link>
      </div>
    </div>
  );
};

export default Hero;
