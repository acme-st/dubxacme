import BlurImage from "../shared/blur-image";
import MaxWidthWrapper from "../shared/max-width-wrapper";

export default function Logos() {
  return (
    <div className="mt-20">
      <p className="text-center text-lg text-gray-600">
        애크미쇼트너 ACME.ST 와 함께하는 팀을 소개합니다.
      </p>
      <div className="mx-auto mt-8 grid w-full max-w-screen-lg grid-cols-2 items-center gap-5 px-5 sm:grid-cols-4 sm:px-0">
        <BlurImage
          src="/_static/clients/1.svg"
          alt="BIBLIC"
          width={2418}
          height={512}
          className="col-span-1 h-7 sm:h-9"
        />
        <BlurImage
          src="/_static/clients/2.svg"
          alt="SPHASE"
          width={2418}
          height={512}
          className="col-span-1 h-7 sm:h-10"
        />
        <BlurImage
          src="/_static/clients/3.svg"
          alt="LearnED"
          width={2418}
          height={512}
          className="col-span-1 h-8 sm:h-10"
        />
        <BlurImage
          src="/_static/clients/4.svg"
          alt="MARVR"
          width={2418}
          height={512}
          className="col-span-1 h-16 sm:h-24"
        />
      </div>
    </div>
  );
}
