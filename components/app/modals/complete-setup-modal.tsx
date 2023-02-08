import { useRouter } from "next/router";
import Link from "next/link";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
  useState,
} from "react";
import BlurImage from "@/components/shared/blur-image";
import Modal from "@/components/shared/modal";
import { CheckCircleFill, ExpandingArrow } from "@/components/shared/icons";

function CompleteSetupModal({
  showCompleteSetupModal,
  setShowCompleteSetupModal,
}: {
  showCompleteSetupModal: boolean;
  setShowCompleteSetupModal: Dispatch<SetStateAction<boolean>>;
}) {
  const router = useRouter();
  const { slug } = router.query as { slug: string };

  const tasks = [
    { display: "커스텀 도메인 설정", cta: `/${slug}/settings` },
    { display: "팀멤버 초대", cta: `/${slug}/settings/people` },
    { display: "링크 만들기 또는 일괄 등록", cta: "closeModal" },
  ];

  return (
    <Modal
      showModal={showCompleteSetupModal}
      setShowModal={setShowCompleteSetupModal}
    >
      <div className="inline-block w-full transform overflow-hidden bg-white align-middle shadow-xl transition-all sm:max-w-md sm:rounded-2xl sm:border sm:border-gray-200">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 px-4 py-4 pt-8 sm:px-16">
          <BlurImage
            src={`/_static/logo.png`}
            alt={"팀멤버 초대"}
            className="h-10 w-10 rounded-full"
            width={20}
            height={20}
          />
          <h3 className="text-lg font-medium">거의 다 되었습니다!</h3>
          <p className="text-center text-sm text-gray-500">
            다음 단계만 완료하면 커스텀 도메인으로 브랜드 단축링크를 사용할 수 있습니다.
          </p>
        </div>
        <div className="flex flex-col space-y-6 bg-gray-50 px-4 py-8 text-left sm:px-12">
          <div className="grid divide-y divide-gray-200 rounded-lg border border-gray-200 bg-white">
            {tasks.map(({ display, cta }) => {
              const contents = (
                <div className="group flex items-center justify-between p-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircleFill className="h-5 w-5 text-gray-400" />
                    <p className="text-sm">{display}</p>
                  </div>
                  <div className="mr-5">
                    <ExpandingArrow />
                  </div>
                </div>
              );
              if (cta === "closeModal") {
                return (
                  <button
                    key={display}
                    onClick={() => setShowCompleteSetupModal(false)}
                  >
                    {contents}
                  </button>
                );
              }
              return (
                <a key={display} target="_blank" rel="noreferrer" href={cta}>
                  {contents}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </Modal>
  );
}

export function useCompleteSetupModal() {
  const [showCompleteSetupModal, setShowCompleteSetupModal] = useState(false);

  const CompleteSetupModalCallback = useCallback(() => {
    return (
      <CompleteSetupModal
        showCompleteSetupModal={showCompleteSetupModal}
        setShowCompleteSetupModal={setShowCompleteSetupModal}
      />
    );
  }, [showCompleteSetupModal, setShowCompleteSetupModal]);

  return useMemo(
    () => ({
      setShowCompleteSetupModal,
      CompleteSetupModal: CompleteSetupModalCallback,
    }),
    [setShowCompleteSetupModal, CompleteSetupModalCallback],
  );
}
