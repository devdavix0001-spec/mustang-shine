import { useEffect, useRef, useState } from "react";

const QUOTEIQ_SCRIPT_SRC = "https://quoteiq-2.web.app/widget/v2/widget.js";

export function QuoteForm({ dark = false }: { dark?: boolean }) {
  const [loaded, setLoaded] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;

    const hasRealContent = () =>
      target.querySelector("input, select, textarea, form") !== null;

    if (hasRealContent()) {
      setLoaded(true);
      return;
    }

    const observer = new MutationObserver(() => {
      if (hasRealContent()) {
        setLoaded(true);
        observer.disconnect();
      }
    });
    observer.observe(target, { childList: true, subtree: true });

    if (!document.querySelector(`script[src="${QUOTEIQ_SCRIPT_SRC}"]`)) {
      const script = document.createElement("script");
      script.src = QUOTEIQ_SCRIPT_SRC;
      script.async = true;
      script.dataset.formId = "vD5nsAWUKjlRNX5Ocg3l";
      script.dataset.mode = "inline";
      script.dataset.target = "qiq-form";
      document.body.appendChild(script);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`w-full border p-4 sm:p-6 ${dark ? "border-ink-line bg-ink-soft" : "border-border bg-card"}`}
    >
      <div className="relative min-h-24 w-full">
        {!loaded && (
          <div className="absolute inset-0 z-10 flex h-24 w-full flex-col items-center justify-center gap-2 bg-inherit text-sm text-muted-foreground">
            <div className="size-5 animate-spin rounded-full border-2 border-current border-t-transparent" />
            <span>Loading quote form…</span>
          </div>
        )}

        <div id="qiq-form" ref={targetRef} className="w-full" />
      </div>
    </div>
  );
}
