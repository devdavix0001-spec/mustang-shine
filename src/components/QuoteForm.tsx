export function QuoteForm({ dark = false }: { dark?: boolean }) {
  return (
    <div
      className={`w-full border p-4 sm:p-6 ${dark ? "border-ink-line bg-ink-soft" : "border-border bg-card"}`}
    >
      <div id="qiq-form" className="min-h-24 w-full" />
      <script
        src="https://quoteiq-2.web.app/widget/v2/widget.js"
        data-form-id="vD5nsAWUKjlRNX5Ocg3l"
        data-mode="inline"
        data-target="qiq-form"
      />
    </div>
  );
}
