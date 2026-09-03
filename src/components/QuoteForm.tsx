import { useState } from "react";

import { cities, services } from "@/lib/site";

type Errors = Partial<Record<"name" | "phone" | "email" | "service" | "city" | "message", string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const digits = (v: string) => v.replace(/\D/g, "");

export function QuoteForm({ dark = false, heading = "Request your free estimate" }) {
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    propertyType: "",
    projectType: "",
    squareFootage: "",
    preferredContact: "",
    timeline: "",
    photos: null as FileList | null,
    city: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const label = `mb-2 block font-display text-[0.7rem] font-bold tracking-[0.16em] uppercase ${
    dark ? "text-white/70" : "text-foreground"
  }`;
  const field = `w-full border px-4 py-3 text-sm outline-none transition-colors focus:border-red ${
    dark
      ? "border-ink-line bg-ink text-white placeholder:text-white/35"
      : "border-input bg-background text-foreground placeholder:text-muted-foreground"
  }`;

  function validate(): Errors {
    const next: Errors = {};
    if (values.name.trim().length < 2) next.name = "Please enter your name.";
    if (values.name.trim().length > 100) next.name = "Name must be under 100 characters.";
    if (digits(values.phone).length < 10) next.phone = "Enter a 10-digit phone number.";
    if (!emailPattern.test(values.email.trim())) next.email = "Enter a valid email address.";
    if (values.email.trim().length > 255) next.email = "Email must be under 255 characters.";
    if (!values.service) next.service = "Select the service you need.";
    if (!values.city.trim()) next.city = "Tell us which city you're in.";
    if (values.message.trim().length > 1000)
      next.message = "Message must be under 1000 characters.";
    return next;
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    setSent(true);
  }

  if (sent) {
    return (
      <div
        className={`border p-8 ${dark ? "border-ink-line bg-ink-soft text-white" : "border-border bg-card"}`}
      >
        <p className="eyebrow text-red">Request received</p>
        <h3 className={`mt-4 text-2xl ${dark ? "text-white" : "text-foreground"}`}>
          Thanks — we'll be in touch.
        </h3>
        <p
          className={`mt-3 text-sm leading-relaxed ${dark ? "text-white/65" : "text-muted-foreground"}`}
        >
          A Mustang team member will reach out shortly to schedule your free evaluation. Need it
          handled today? Call 817-770-1867.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className={`border p-6 sm:p-8 ${dark ? "border-ink-line bg-ink-soft" : "border-border bg-card"}`}
    >
      <h3 className={`text-2xl ${dark ? "text-white" : "text-foreground"}`}>{heading}</h3>
      <p className={`mt-2 text-sm ${dark ? "text-white/60" : "text-muted-foreground"}`}>
        Free estimates and evaluations, every time.
      </p>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="qf-name">
            Name
          </label>
          <input
            id="qf-name"
            className={field}
            maxLength={100}
            value={values.name}
            onChange={(e) => setValues({ ...values, name: e.target.value })}
            placeholder="Full name"
            autoComplete="name"
          />
          {errors.name && <p className="mt-1.5 text-xs text-red">{errors.name}</p>}
        </div>

        <div>
          <label className={label} htmlFor="qf-property-type">
            Property type
          </label>
          <select
            id="qf-property-type"
            className={field}
            value={values.propertyType}
            onChange={(e) => setValues({ ...values, propertyType: e.target.value })}
          >
            <option value="">Select property type</option>
            <option>Residential</option>
            <option>Commercial</option>
            <option>New construction</option>
            <option>Not sure</option>
          </select>
        </div>

        <div>
          <label className={label} htmlFor="qf-project-type">
            Project type
          </label>
          <select
            id="qf-project-type"
            className={field}
            value={values.projectType}
            onChange={(e) => setValues({ ...values, projectType: e.target.value })}
          >
            <option value="">Select project type</option>
            <option>Existing property</option>
            <option>Renovation</option>
            <option>New construction</option>
            <option>Tenant improvement</option>
          </select>
        </div>

        <div>
          <label className={label} htmlFor="qf-square-footage">
            Approximate square footage{" "}
            <span className="font-normal normal-case text-muted-foreground">(optional)</span>
          </label>
          <input
            id="qf-square-footage"
            className={field}
            inputMode="numeric"
            value={values.squareFootage}
            onChange={(e) => setValues({ ...values, squareFootage: e.target.value })}
            placeholder="2,000"
          />
        </div>

        <div>
          <label className={label} htmlFor="qf-timeline">
            Project timeline
          </label>
          <select
            id="qf-timeline"
            className={field}
            value={values.timeline}
            onChange={(e) => setValues({ ...values, timeline: e.target.value })}
          >
            <option value="">Select timeline</option>
            <option>ASAP</option>
            <option>Within 30 days</option>
            <option>1–3 months</option>
            <option>Planning / researching</option>
          </select>
        </div>

        <div>
          <label className={label} htmlFor="qf-phone">
            Phone
          </label>
          <input
            id="qf-phone"
            className={field}
            type="tel"
            maxLength={20}
            value={values.phone}
            onChange={(e) => setValues({ ...values, phone: e.target.value })}
            placeholder="817-000-0000"
            autoComplete="tel"
          />
          {errors.phone && <p className="mt-1.5 text-xs text-red">{errors.phone}</p>}
        </div>

        <div>
          <label className={label} htmlFor="qf-email">
            Email
          </label>
          <input
            id="qf-email"
            className={field}
            type="email"
            maxLength={255}
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
            placeholder="you@email.com"
            autoComplete="email"
          />
          {errors.email && <p className="mt-1.5 text-xs text-red">{errors.email}</p>}
        </div>

        <div>
          <label className={label} htmlFor="qf-city">
            City
          </label>
          <input
            id="qf-city"
            className={field}
            list="qf-cities"
            maxLength={80}
            value={values.city}
            onChange={(e) => setValues({ ...values, city: e.target.value })}
            placeholder="Arlington"
          />
          <datalist id="qf-cities">
            {cities.map((c) => (
              <option key={c} value={c} />
            ))}
          </datalist>
          {errors.city && <p className="mt-1.5 text-xs text-red">{errors.city}</p>}
        </div>

        <div className="sm:col-span-2">
          <label className={label} htmlFor="qf-service">
            Service needed
          </label>
          <select
            id="qf-service"
            className={field}
            value={values.service}
            onChange={(e) => setValues({ ...values, service: e.target.value })}
          >
            <option value="">Select a service…</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Not sure yet">Not sure yet — need an evaluation</option>
          </select>
          {errors.service && <p className="mt-1.5 text-xs text-red">{errors.service}</p>}
        </div>

        <fieldset className="sm:col-span-2">
          <legend className={label}>Preferred contact method</legend>
          <div className="flex flex-wrap gap-5 text-sm text-muted-foreground">
            {["Call", "Text", "Email"].map((method) => (
              <label key={method} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="preferred-contact"
                  value={method}
                  checked={values.preferredContact === method}
                  onChange={(e) => setValues({ ...values, preferredContact: e.target.value })}
                />
                {method}
              </label>
            ))}
          </div>
        </fieldset>

        <div className="sm:col-span-2">
          <label className={label} htmlFor="qf-photos">
            Upload project photos{" "}
            <span className="font-normal normal-case text-muted-foreground">(optional)</span>
          </label>
          <input
            id="qf-photos"
            className={`${field} file:mr-4 file:border-0 file:bg-transparent file:font-display file:text-xs file:font-bold file:tracking-[0.1em] file:uppercase`}
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => setValues({ ...values, photos: e.target.files })}
          />
        </div>

        <div className="sm:col-span-2">
          <label className={label} htmlFor="qf-message">
            Project details
          </label>
          <textarea
            id="qf-message"
            className={`${field} min-h-32 resize-y`}
            maxLength={1000}
            value={values.message}
            onChange={(e) => setValues({ ...values, message: e.target.value })}
            placeholder="Square footage, age of home, what you're noticing (hot rooms, high bills, pests)…"
          />
          {errors.message && <p className="mt-1.5 text-xs text-red">{errors.message}</p>}
        </div>
      </div>

      <button
        type="submit"
        className="mt-7 w-full bg-red px-6 py-4 font-display text-sm font-bold tracking-[0.16em] text-white uppercase transition-colors hover:bg-red-dark"
      >
        Get an Estimate
      </button>
      <p className={`mt-3 text-xs ${dark ? "text-white/40" : "text-muted-foreground"}`}>
        No spam, no sales gimmicks — just a straight answer on your project.
      </p>
    </form>
  );
}
