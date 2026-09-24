import { useEffect, useState } from "react";

const QUOTEIQ_SCRIPT_SRC = "https://quoteiq-2.web.app/widget/v2/widget.js";

export function QuoteForm({ dark = false }: { dark?: boolean }) {
  const [loaded, setLoaded] = useState(
    () =>
      typeof document !== "undefined" &&
      !!document.querySelector(`script[src="${QUOTEIQ_SCRIPT_SRC}"]`),
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
  }, []);

  return (
    <div
      className={`w-full border p-4 sm:p-6 ${dark ? "border-ink-line bg-ink-soft" : "border-border bg-card"}`}
    >
      <div id="qiq-form" className="relative min-h-24 w-full">
        {!loaded && (
          <div className="flex h-24 w-full flex-col items-center justify-center gap-2 text-sm text-muted-foreground">
            <div className="size-5 animate-spin rounded-full border-2 border-current border-t-transparent" />
            <span>Loading quote form…</span>
          </div>
        )}
      </div>
    </div>
  );
}
