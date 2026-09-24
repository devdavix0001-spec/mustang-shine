import { useEffect, useState } from "react";

const QUOTEIQ_SCRIPT_SRC = "https://quoteiq-2.web.app/widget/v2/widget.js";

export function QuoteForm({ dark = false }: { dark?: boolean }) {
  const [loaded, setLoaded] = useState(
    () => typeof document !== "undefined" && !!document.querySelector(`script[src="${QUOTEIQ_SCRIPT_SRC}"]`),
  );

  useEffect(() => {
    if (document.querySelector(`script[src="${QUOTEIQ_SCRIPT_SRC}"]`)) {
      setLoaded(true);
      return;
    }

    const script = document.createElement("script");
    script.src = QUOTEIQ_SCRIPT_SRC;
    script.async = true;
    script.dataset.formId = "vD5nsAWUKjlRNX5Ocg3l";
    script.dataset.mode = "inline";
    script.dataset.target = "qiq-form";
    script.onload = () => setLoaded(true);
    document.body.appendChild(script);

    // don't remove on unmount — keep it cached for next visit
  }, []);

  return (
    <div
      className={`w-full border p-4 sm:p-6 ${dark ? "border-ink-line bg-ink-soft" : "border-border bg-card"}`}
    >
      <div id="qiq-form" className="min-h-24 w-full">
        {!loaded && (
          <div className="flex h-24 w-full animate-pulse items-center justify-center text-sm text-muted-foreground">
            Loading quote form…
          </div>
        )}
      </div>
    </div>
  );
}
