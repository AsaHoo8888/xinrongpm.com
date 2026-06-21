"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { countries } from "./countries";

export default function ContactPhoneField({
  label = "Phone Number *",
  phonePlaceholder = "Phone *",
  required = true,
}) {
  const defaultCountry =
    countries.find((country) => country.value === "Hong Kong") || countries[0];
  const phoneId = useId();
  const [selectedCountry, setSelectedCountry] = useState(defaultCountry);
  const [isOpen, setIsOpen] = useState(false);
  const hasManualCountry = useRef(false);

  useEffect(() => {
    const controller = new AbortController();

    async function detectCountry() {
      try {
        const response = await fetch("/api/geo", {
          cache: "no-store",
          signal: controller.signal,
        });

        if (!response.ok || hasManualCountry.current) {
          return;
        }

        const data = await response.json();
        const detectedCountry = countries.find(
          (country) => country.iso === data.country,
        );

        if (detectedCountry && !hasManualCountry.current) {
          setSelectedCountry(detectedCountry);
        }
      } catch {
        // Keep the default country when geolocation is unavailable.
      }
    }

    detectCountry();

    return () => controller.abort();
  }, []);

  return (
    <div className="contact-phone-label grid gap-2 text-sm font-bold text-ink-soft">
      {label ? (
        <label className="contact-phone-label-text" htmlFor={phoneId}>
          {label}
        </label>
      ) : null}
      <div className="contact-phone-field flex min-h-12 overflow-visible rounded border border-slate-300 bg-white focus-within:border-brand-blue focus-within:ring-2 focus-within:ring-brand-blue/20">
        <div className="contact-country-picker relative flex min-h-[46px] basis-[58px] shrink-0 items-center justify-center border-r border-slate-300 text-ink">
          <input name="country" type="hidden" value={selectedCountry.value} />
          <input name="phone_code" type="hidden" value={selectedCountry.code} />
          <button
            aria-expanded={isOpen}
            aria-haspopup="listbox"
            aria-label={`Selected country: ${selectedCountry.label} ${selectedCountry.code}`}
            className="contact-country-toggle inline-flex min-h-[46px] w-full items-center justify-center gap-1 bg-transparent p-0 text-ink"
            type="button"
            onBlur={() => {
              window.setTimeout(() => setIsOpen(false), 120);
            }}
            onClick={() => setIsOpen((open) => !open)}
          >
            <span className="contact-country-flag" aria-hidden="true">
              {selectedCountry.flag}
            </span>
            <ChevronDown size={14} aria-hidden="true" />
          </button>
          {isOpen ? (
            <div
              className="contact-country-menu absolute left-0 top-[calc(100%+8px)] z-30 max-h-[280px] w-[min(320px,calc(100vw-56px))] overflow-y-auto border border-slate-300 bg-white p-1.5 shadow-xl"
              role="listbox"
            >
              {countries.map((country) => (
                <button
                  aria-selected={country.value === selectedCountry.value}
                  className="contact-country-option grid w-full grid-cols-[28px_1fr_auto] items-center gap-2.5 border-0 bg-transparent px-2.5 py-2 text-left text-ink hover:bg-slate-50 aria-selected:bg-slate-50"
                  key={country.value}
                  role="option"
                  type="button"
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={() => {
                    hasManualCountry.current = true;
                    setSelectedCountry(country);
                    setIsOpen(false);
                  }}
                >
                  <span aria-hidden="true">{country.flag}</span>
                  <span>{country.label}</span>
                  <strong>{country.code}</strong>
                </button>
              ))}
            </div>
          ) : null}
        </div>
        <input
          className="contact-phone-input min-h-[46px] min-w-0 flex-1 border-0 bg-transparent px-3.5 py-3 text-base font-normal text-ink outline-none"
          id={phoneId}
          name="phone"
          placeholder={phonePlaceholder}
          required={required}
          type="tel"
        />
      </div>
    </div>
  );
}
