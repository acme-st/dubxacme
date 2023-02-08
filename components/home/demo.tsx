import { useState } from "react";
import { motion } from "framer-motion";
import { Toaster } from "react-hot-toast";
import LinkCard from "@/components/home/link-card";
import PlaceholderCard from "@/components/home/placeholder-card";
import { Link, LoadingDots } from "@/components/shared/icons";
import Tooltip, { TooltipContent } from "@/components/shared/tooltip";
import { FRAMER_MOTION_LIST_ITEM_VARIANTS } from "@/lib/constants";
import useLocalStorage from "@/lib/hooks/use-local-storage";
import { SimpleLinkProps } from "@/lib/types";

const Demo = () => {
  const [saving, setSaving] = useState(false);
  const [url, setUrl] = useState("");
  const [hashes, setHashes] = useLocalStorage<SimpleLinkProps[]>("hashes", []);
  const [showDefaultLink, setShowDefaultLink] = useState(true);

  return (
    <div className="mx-auto w-full max-w-md px-2.5 sm:px-0">
      <Toaster />
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          setSaving(true);
          fetch(`/api/edge/links?url=${encodeURIComponent(url)}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          }).then(async (response) => {
            setSaving(false);
            if (response.ok) {
              const json = await response.json();
              setHashes([...hashes, json]);
              setUrl("");
            }
          });
        }}
      >
        {hashes.length >= 3 ? (
          <Tooltip
            content={
              <TooltipContent
                title="링크를 더 추가하려면 스와이프하여 링크를 삭제하거나 무료 계정을 만드세요."
                cta="무료 가입"
                ctaLink="https://app.acme.st/register"
              />
            }
          >
            <div className="relative flex w-full items-center">
              <div className="block w-full rounded-md border border-gray-200 bg-white p-2 pl-3 pr-12 text-sm text-gray-400 shadow-lg focus:border-black">
                링크 단축
              </div>
              <div className="absolute inset-y-0 right-0 my-1.5 mr-1.5 flex w-10 cursor-not-allowed items-center justify-center rounded border border-gray-200 font-sans text-sm font-medium text-gray-400">
                <p>↵</p>
              </div>
            </div>
          </Tooltip>
        ) : (
          <div className="relative flex items-center">
            <Link className="absolute inset-y-0 left-0 my-2 ml-3 w-5 text-gray-400" />
            <input
              type="url"
              placeholder="링크 줄이기"
              value={url}
              onInput={(e) => {
                setUrl((e.target as HTMLInputElement).value);
              }}
              required
              className="peer block w-full rounded-md border border-gray-200 bg-white p-2 pl-10 pr-12 text-sm shadow-lg focus:border-black focus:outline-none focus:ring-0"
            />
            <button
              type="submit"
              disabled={saving}
              className={`${
                saving
                  ? "cursor-not-allowed"
                  : "hover:border-gray-700 hover:text-gray-700 peer-focus:border-gray-700 peer-focus:text-gray-700"
              } absolute inset-y-0 right-0 my-1.5 mr-1.5 flex w-10 items-center justify-center rounded border border-gray-200 font-sans text-sm font-medium text-gray-400`}
            >
              {saving ? <LoadingDots color="#e5e7eb" /> : <p>↵</p>}
            </button>
          </div>
        )}
      </form>

      <motion.ul
        key={hashes.length + 1} // workaround for https://github.com/framer/motion/issues/776, add 1 to account for the demo GH link
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        className="mt-3 grid gap-2"
      >
        {showDefaultLink && (
          <LinkCard
            key="biblic"
            _key="biblic"
            url="https://biblic.net/"
            hashes={hashes}
            setHashes={setHashes}
            setShowDefaultLink={setShowDefaultLink}
          />
        )}
        {hashes.map(({ key, url }) => (
          <LinkCard
            key={key}
            _key={key}
            url={url}
            hashes={hashes}
            setHashes={setHashes}
          />
        ))}
        {Array.from({
          length: showDefaultLink ? 3 - hashes.length : 4 - hashes.length,
        }).map((_, i) => (
          <PlaceholderCard key={i} />
        ))}
        <motion.li
          variants={FRAMER_MOTION_LIST_ITEM_VARIANTS}
          className="rounded-md border border-gray-200 bg-white p-3 text-sm text-gray-500 shadow-lg"
        >
          확인 : 공개 링크는 30분 후 자동 삭제됩니다.{" "}
          <a
            href="https://app.acme.st/register"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-gray-700 underline transition-all hover:text-black"
          >
            무료 계정 만들기
          </a>{" "}
          모든 링크를 보관하세요.
        </motion.li>
      </motion.ul>
    </div>
  );
};

export default Demo;
