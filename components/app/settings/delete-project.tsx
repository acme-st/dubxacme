import { useDeleteProjectModal } from "components/app/modals/delete-project-modal";

export default function DeleteProject() {
  const { setShowDeleteProjectModal, DeleteProjectModal } =
    useDeleteProjectModal();
  return (
    <div className="rounded-lg border border-gray-200 bg-white">
      <DeleteProjectModal />
      <div className="flex flex-col space-y-3 p-5 sm:p-10">
        <h2 className="text-xl font-medium">프로젝트 삭제</h2>
        <p className="text-sm text-gray-500">
        프로젝트, 커스텀 도메인 그리고 모든 링크와 통계가 완전히 삭제됩니다. 다시 되돌릴 수 없습니다. 주의하세요.
        </p>
      </div>
      <div className="border-b border-gray-200" />

      <div className="flex items-center justify-end px-5 py-4 sm:px-10">
        <button
          onClick={() => setShowDeleteProjectModal(true)}
          className="h-9 w-full rounded-md border border-red-600 bg-red-600 text-sm text-white transition-all duration-150 ease-in-out hover:bg-white hover:text-red-600 focus:outline-none sm:w-32"
        >
          프로젝트 삭제
        </button>
      </div>
    </div>
  );
}
