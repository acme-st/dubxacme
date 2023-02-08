import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import { motion } from "framer-motion";
import TextareaAutosize from "react-textarea-autosize";
import BlurImage from "@/components/shared/blur-image";
import { LoadingCircle, UploadCloud } from "@/components/shared/icons";
import { LinkProps } from "@/lib/types";
import Switch from "@/components/shared/switch";
import { FADE_IN_ANIMATION_SETTINGS } from "@/lib/constants";

export default function OGSection({
  props,
  data,
  setData,
  generatingMetatags,
}: {
  props: LinkProps;
  data: LinkProps;
  setData: Dispatch<SetStateAction<LinkProps>>;
  generatingMetatags: boolean;
}) {
  const { title, description, image, proxy } = data;

  const [fileSizeTooBig, setFileSizeTooBig] = useState(false);

  const onChangePicture = useCallback(
    (e) => {
      setFileSizeTooBig(false);
      const file = e.target.files[0];
      if (file) {
        if (file.size / 1024 / 1024 > 1) {
          setFileSizeTooBig(true);
        } else {
          const reader = new FileReader();
          reader.onload = (e) => {
            setData((prev) => ({ ...prev, image: e.target.result as string }));
          };
          reader.readAsDataURL(file);
        }
      }
    },
    [setData],
  );

  useEffect(() => {
    if (proxy && props) {
      // if custom OG is enabled
      setData((prev) => ({
        ...prev,
        title: props.title || title,
        description: props.description || description,
        image: props.image || image,
      }));
    }
  }, [proxy]);

  const randomIdx = Math.floor(Math.random() * 100);

  return (
    <div className="grid gap-5 border-b border-gray-200 pb-5">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-medium text-gray-900">
          커스텀 소셜 미디어 카드
        </h2>
        <Switch
          fn={() => setData((prev) => ({ ...prev, proxy: !proxy }))}
          checked={proxy}
        />
      </div>

      {proxy && (
        <motion.div
          key="og-options"
          {...FADE_IN_ANIMATION_SETTINGS}
          className="grid gap-5"
        >
          <div>
            <div className="flex items-center justify-between">
              <p className="block text-sm font-medium text-gray-700">이미지</p>
              {fileSizeTooBig && (
                <p className="text-sm text-red-500">
                  파일 크기가 너무 큽니다 (최대 1MB)
                </p>
              )}
            </div>
            <label
              htmlFor={`image-${randomIdx}`}
              className="group relative mt-1 flex h-[14rem] cursor-pointer flex-col items-center justify-center rounded-md border border-gray-300 bg-white shadow-sm transition-all hover:bg-gray-50"
            >
              {generatingMetatags && (
                <div className="absolute z-[5] flex h-full w-full items-center justify-center rounded-md bg-white">
                  <LoadingCircle />
                </div>
              )}
              <div
                className={`absolute z-[3] flex h-full w-full flex-col items-center justify-center rounded-md transition-all ${
                  image
                    ? "bg-white/80 opacity-0 hover:opacity-100 hover:backdrop-blur-md"
                    : "bg-white opacity-100 hover:bg-gray-50"
                }`}
              >
                <UploadCloud className="h-7 w-7 text-gray-500 transition-all duration-75 group-hover:scale-110 group-active:scale-95" />
                <p className="mt-2 text-sm text-gray-500">
                  추천 사이즈 : 1200 x 627 픽셀
                </p>
                <span className="sr-only">OG Image 업로드</span>
              </div>
              {image &&
                (image.startsWith("https://res.cloudinary.com") ? (
                  <BlurImage
                    src={image}
                    alt="Preview"
                    width={1200}
                    height={627}
                    className="h-full w-full rounded-md object-cover"
                  />
                ) : (
                  <img
                    src={image}
                    alt="Preview"
                    className="h-full w-full rounded-md object-cover"
                  />
                ))}
            </label>
            <div className="mt-1 flex rounded-md shadow-sm">
              <input
                id={`image-${randomIdx}`}
                name="image"
                type="file"
                accept="image/*"
                className="sr-only"
                onChange={onChangePicture}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <p className="block text-sm font-medium text-gray-700">제목</p>
              <p className="text-sm text-gray-500">{title?.length || 0}/120</p>
            </div>
            <div className="relative mt-1 flex rounded-md shadow-sm">
              {generatingMetatags && (
                <div className="absolute flex h-full w-full items-center justify-center rounded-md border border-gray-300 bg-white">
                  <LoadingCircle />
                </div>
              )}
              <TextareaAutosize
                name="title"
                id={`title-${randomIdx}`}
                minRows={3}
                maxLength={120}
                className="block w-full rounded-md border-gray-300 pr-10 text-sm text-gray-900 placeholder-gray-300 focus:border-gray-500 focus:outline-none focus:ring-gray-500"
                placeholder="Acme.ST - Link Shortening Simplified"
                value={title || ""}
                onChange={(e) => {
                  setData({ ...data, title: e.target.value });
                }}
                aria-invalid="true"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <p className="block text-sm font-medium text-gray-700">
                설명
              </p>
              <p className="text-sm text-gray-500">
                {description?.length || 0}/240
              </p>
            </div>
            <div className="relative mt-1 flex rounded-md shadow-sm">
              {generatingMetatags && (
                <div className="absolute flex h-full w-full items-center justify-center rounded-md border border-gray-300 bg-white">
                  <LoadingCircle />
                </div>
              )}
              <TextareaAutosize
                name="description"
                id={`description-${randomIdx}`}
                minRows={3}
                maxLength={240}
                className="block w-full rounded-md border-gray-300 pr-10 text-sm text-gray-900 placeholder-gray-300 focus:border-gray-500 focus:outline-none focus:ring-gray-500"
                placeholder="애크미쇼트너는 콘텐츠와 마케팅 전문팀을 위한 통합 링크 관리 서비스로 링크단축, 생성, 공유, 추적, 통계 모든 과정을 제공합니다."
                value={description || ""}
                onChange={(e) => {
                  setData({
                    ...data,
                    description: e.target.value,
                  });
                }}
                aria-invalid="true"
              />
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
