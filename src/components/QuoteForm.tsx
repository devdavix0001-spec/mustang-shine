import { useEffect, useId, useRef, useState } from "react";

const QUOTEIQ_SCRIPT_SRC = "https://quoteiq-2.web.app/widget/v2/widget.js";

export function QuoteForm({ dark = false }: { dark?: boolean }) {
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const targetRef = useRef<HTMLDivElement>(null);
  const targetId = `qiq-form-${useId().replaceAll(":", "")}`;

  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;

    // QuoteIQ renders its controls inside a Shadow DOM. Searching only the
    // light DOM makes the widget look stuck on “Loading…” even when it has
    // already rendered successfully.
    const hasRealContent = () => {
      const selector = "input, select, textarea, form";
      return (
        target.querySelector(selector) !== null ||
        target.shadowRoot?.querySelector(selector) !== null
      );
    };

    const checkTimer = window.setInterval(() => {
      if (hasRealContent()) {
        setStatus("ready");
        window.clearInterval(checkTimer);
      }
    }, 100);

    const failTimer = window.setTimeout(() => {
      if (!hasRealContent()) setStatus("error");
      window.clearInterval(checkTimer);
    }, 15000);

    // The widget bootstraps only once per script element. A route change can
    // leave the old script in <body>, so reusing it would leave this new target
    // empty until a full page reload. Create a fresh instance for each mount.
    const script = document.createElement("script");
    script.src = QUOTEIQ_SCRIPT_SRC;
    script.async = true;
    script.dataset.formId = "vD5nsAWUKjlRNX5Ocg3l";
    script.dataset.mode = "inline";
    script.dataset.target = targetId;
    document.body.appendChild(script);

    return () => {
      window.clearInterval(checkTimer);
      window.clearTimeout(failTimer);
      script.remove();
    };
  }, [targetId]);

  return (
    <div
      className={`w-full border p-4 sm:p-6 ${dark ? "border-ink-line bg-ink-soft" : "border-border bg-card"}`}
    >
      <div className="relative min-h-24 w-full">
        {status === "loading" && (
          <div className="absolute inset-0 z-10 flex h-24 w-full flex-col items-center justify-center gap-2 bg-inherit text-sm text-muted-foreground">
            <div className="size-5 animate-spin rounded-full border-2 border-current border-t-transparent" />
            <span>Loading quote form…</span>
          </div>
        )}

        {status === "error" && (
          <div className="border border-border bg-muted p-5 text-sm leading-relaxed text-muted-foreground">
            <p className="font-display font-bold text-foreground">
              The online form is temporarily unavailable.
            </p>
            <p className="mt-2">
              Please call{" "}
              <a className="font-semibold text-red underline" href="tel:+18177701867">
                817-770-1867
              </a>{" "}
              or email{" "}
              <a
                className="font-semibold text-red underline"
                href="mailto:info@mustanginsulation.com"
              >
                info@mustanginsulation.com
              </a>{" "}
              and we’ll help with your estimate.
            </p>
          </div>
        )}

        <div id={targetId} ref={targetRef} className="w-full" />
      </div>
    </div>
  );
}
