"use client";

import { useId, useState } from "react";
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

  return (
    <div className="contact-phone-label">
      {label ? (
        <label className="contact-phone-label-text" htmlFor={phoneId}>
          {label}
        </label>
      ) : null}
      <div className="contact-phone-field">
        <div className="contact-country-picker">
          <input name="country" type="hidden" value={selectedCountry.value} />
          <input name="phone_code" type="hidden" value={selectedCountry.code} />
          <button
            aria-expanded={isOpen}
            aria-haspopup="listbox"
            aria-label={`Selected country: ${selectedCountry.label} ${selectedCountry.code}`}
            className="contact-country-toggle"
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
            <div className="contact-country-menu" role="listbox">
              {countries.map((country) => (
                <button
                  aria-selected={country.value === selectedCountry.value}
                  className="contact-country-option"
                  key={country.value}
                  role="option"
                  type="button"
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={() => {
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
          className="contact-phone-input"
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
