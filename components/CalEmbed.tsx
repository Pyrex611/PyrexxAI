"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function CalEmbed() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", { 
        styles: { branding: { brandColor: "#2563EB" } }, 
        hideEventTypeDetails: false, 
        layout: "month_view" 
      });
    })();
  }, []);

  return (
    <div className="w-full h-[650px] overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xl bg-white dark:bg-[#0A0B0D]">
      <Cal 
        calLink="clifford-bulya/15min" 
        style={{ width: "100%", height: "100%", overflow: "scroll" }}
        config={{ theme: "auto" }}
      />
    </div>
  );
}
