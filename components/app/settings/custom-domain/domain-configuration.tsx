import { useState } from "react";
import { DomainVerificationStatusProps } from "@/lib/types";
import { getSubdomain } from "@/lib/utils";

export const InlineSnippet = ({ children }: { children: string }) => {
  return (
    <span className="inline-block rounded-md bg-blue-100 px-1 py-0.5 font-mono text-blue-900">
      {children}
    </span>
  );
};

export default function DomainConfiguration({
  data,
}: {
  data: { status: DomainVerificationStatusProps; response: any };
}) {
  const { domainJson } = data.response;
  const subdomain = getSubdomain(domainJson.name, domainJson.apexName);
  const [recordType, setRecordType] = useState(!!subdomain ? "CNAME" : "A");

  if (data.status === "Pending Verification") {
    const txtVerification = domainJson.verification.find(
      (x: any) => x.type === "TXT",
    );
    return (
      <div className="border-t border-gray-200 pt-5">
        <p className="text-sm">
          <InlineSnippet>{domainJson.name}</InlineSnippet> 도메인 소유 확인을 위해 다음 정보를{" "}
          <InlineSnippet>{domainJson.apexName}</InlineSnippet> TXT 레코드에 추가 :
        </p>
        <div className="my-5 flex items-start justify-start space-x-10 rounded-md bg-gray-50 p-2">
          <div>
            <p className="text-sm font-bold">타입</p>
            <p className="mt-2 font-mono text-sm">{txtVerification.type}</p>
          </div>
          <div>
            <p className="text-sm font-bold">이름</p>
            <p className="mt-2 font-mono text-sm">
              {txtVerification.domain.slice(
                0,
                txtVerification.domain.length - domainJson.apexName.length - 1,
              )}
            </p>
          </div>
          <div>
            <p className="text-sm font-bold">값</p>
            <p className="mt-2 font-mono text-sm">
              <span className="text-ellipsis">{txtVerification.value}</span>
            </p>
          </div>
        </div>
        <p className="text-sm">
          주의: 이 도메인을 다른 사이트에 사용하면 설정한 TXT 레코드의 소유권 확인이 사라집니다.
          TXT 레코드 설정 시 유의하세요.
        </p>
      </div>
    );
  }

  if (data.status === "Unknown Error") {
    return (
      <div className="border-t border-gray-200 pt-5">
        <p className="mb-5 text-sm">{data.response.domainJson.error.message}</p>
      </div>
    );
  }

  return (
    <div className="border-t border-gray-200 pt-5">
      <div className="flex justify-start space-x-4">
        <button
          onClick={() => setRecordType("A")}
          className={`${
            recordType == "A"
              ? "border-black text-black"
              : "border-white text-gray-400"
          } ease border-b-2 pb-1 text-sm transition-all duration-150`}
        >
          A 레코드{!subdomain && " (recommended)"}
        </button>
        <button
          onClick={() => setRecordType("CNAME")}
          className={`${
            recordType == "CNAME"
              ? "border-black text-black"
              : "border-white text-gray-400"
          } ease border-b-2 pb-1 text-sm transition-all duration-150`}
        >
          CNAME 레코드{subdomain && " (recommended)"}
        </button>
      </div>
      <div className="my-3 text-left">
        <p className="my-5 text-sm">
          설정을 위해 {recordType === "A" ? "apex domain" : "subdomain"} (
          <InlineSnippet>
            {recordType === "A" ? domainJson.apexName : domainJson.name}
          </InlineSnippet>
          ), 다음 {recordType} 값을 DNS 제공사에서
          추가하세요:
        </p>
        <div className="flex items-center justify-start space-x-10 rounded-md bg-gray-50 p-2">
          <div>
            <p className="text-sm font-bold">타입</p>
            <p className="mt-2 font-mono text-sm">{recordType}</p>
          </div>
          <div>
            <p className="text-sm font-bold">이름</p>
            <p className="mt-2 font-mono text-sm">
              {recordType === "A" ? "@" : subdomain ?? "www"}
            </p>
          </div>
          <div>
            <p className="text-sm font-bold">값</p>
            <p className="mt-2 font-mono text-sm">
              {recordType === "A" ? `76.76.21.21` : `cname.acme.st`}
            </p>
          </div>
          <div>
            <p className="text-sm font-bold">TTL</p>
            <p className="mt-2 font-mono text-sm">86400</p>
          </div>
        </div>
        <p className="mt-5 text-sm">
          참고: TTL값으로 <InlineSnippet>86400</InlineSnippet> 설정이 어렵다면
          가장 높은 값을 설정해 주세요. 또한 도메인 정보 전파는 1시간 이상 소요될 수 있습니다.
        </p>
      </div>
    </div>
  );
}
