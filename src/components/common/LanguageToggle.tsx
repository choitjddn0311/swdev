"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { setLocale } from "@/actions/locale";

const LanguageToggle = ({ currentLocale }: { currentLocale: string }) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const toggle = () => {
    const next = currentLocale === "ko" ? "en" : "ko";
    startTransition(async () => {
      await setLocale(next);
      router.refresh();
    });
  };

  return (
    <button
      onClick={toggle}
      disabled={isPending}
      className="text-xs font-bold px-2 rounded  disabled:opacity-50"
    >
      {currentLocale === "ko" ? "EN" : "KO"}
    </button>
  );
};

export default LanguageToggle;
