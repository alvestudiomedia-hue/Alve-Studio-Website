"use client";

import { useEffect, useState } from "react";
import { X, CheckCircle2, MessageCircle, ArrowRight, Loader2, PackageCheck } from "lucide-react";
import { pricingCategories } from "./pricingData";
import { cn } from "@/lib/cn";

export type QuoteModalProps = {
  isOpen: boolean;
  onClose: () => void;
  initialTierName?: string;
  initialCategoryTitle?: string;
  initialMeta?: string;
};

export function QuoteModal({
  isOpen,
  onClose,
  initialTierName = "",
  initialCategoryTitle = "",
  initialMeta = "",
}: QuoteModalProps) {
  const [selectedPackage, setSelectedPackage] = useState(initialTierName);
  const [selectedCategory, setSelectedCategory] = useState(initialCategoryTitle);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [budgetRange, setBudgetRange] = useState("");
  const [projectNotes, setProjectNotes] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [ticketId, setTicketId] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  // Sync initial selection when opened or when initial props change
  useEffect(() => {
    if (isOpen) {
      if (initialTierName) {
        setSelectedPackage(initialTierName);
      } else if (pricingCategories[0]?.tiers[0]) {
        setSelectedPackage(pricingCategories[0].tiers[0].name);
      }

      if (initialCategoryTitle) {
        setSelectedCategory(initialCategoryTitle);
      } else if (pricingCategories[0]) {
        setSelectedCategory(pricingCategories[0].title);
      }

      setIsSuccess(false);
      setSubmitError(null);
      setFieldErrors({});
    }
  }, [isOpen, initialTierName, initialCategoryTitle]);

  // Lock body scroll and handle Escape key
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePackageChange = (packageName: string) => {
    setSelectedPackage(packageName);
    // Find category for this package
    for (const cat of pricingCategories) {
      if (cat.tiers.some((t) => t.name === packageName)) {
        setSelectedCategory(cat.title);
        break;
      }
    }
    if (fieldErrors.packageName) {
      setFieldErrors((prev) => ({ ...prev, packageName: "" }));
    }
  };

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!fullName.trim()) {
      errors.fullName = "Please enter your full name.";
    }

    if (!email.trim()) {
      errors.email = "Please enter your work email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Please enter a valid email address.";
    }

    const digits = whatsappNumber.replace(/\D/g, "");
    if (!whatsappNumber.trim()) {
      errors.whatsappNumber = "Please enter your WhatsApp number.";
    } else if (digits.length < 7) {
      errors.whatsappNumber = "WhatsApp number must be at least 7 digits.";
    }

    if (!selectedPackage) {
      errors.packageName = "Please select a product or package.";
    }

    if (!budgetRange) {
      errors.budgetRange = "Please select a budget range.";
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          email,
          whatsappNumber,
          budgetRange,
          packageName: selectedPackage,
          categoryTitle: selectedCategory,
          projectNotes,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        if (data.fieldErrors) {
          setFieldErrors(data.fieldErrors);
        }
        throw new Error(data.message || "Failed to submit quote request.");
      }

      setTicketId(data.ticketId || "ALV-QUOTE");
      setIsSuccess(true);
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : "Unable to send your request. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = (hasError: boolean) =>
    cn(
      "w-full rounded-t-sm border-b-2 bg-purple-tint px-4 py-3 text-sm text-ink placeholder-ink-muted",
      "focus:outline-none focus:ring-2 focus:ring-purple-mid/50 focus:border-transparent transition-colors",
      hasError ? "border-red-500" : "border-purple-pale",
    );

  const phoneDigitsClean = whatsappNumber.replace(/\D/g, "");
  const waDirectUrl = `https://wa.me/2349152402995?text=${encodeURIComponent(
    `Hi Alve Studio Team, I just requested a quote for the "${selectedPackage}" package on your website. My name is ${fullName} (Ticket #${ticketId || ""}).`,
  )}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-purple-ink/65 backdrop-blur-sm animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-lg rounded-radius-card bg-surface p-6 sm:p-8 shadow-2xl border border-purple-pale max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close quote modal"
          className="absolute top-5 right-5 rounded-full p-1.5 text-ink-muted hover:text-purple-ink hover:bg-purple-tint transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {!isSuccess ? (
          <div>
            {/* Header */}
            <div className="mb-6 pr-6">
              <span className="font-service text-[0.72rem] font-bold tracking-[0.14em] uppercase text-purple-mid">
                Request a Custom Quote
              </span>
              <h2
                id="quote-modal-title"
                className="mt-1 font-service text-[1.55rem] sm:text-[1.75rem] font-bold tracking-tight text-purple-ink leading-tight"
              >
                Let&apos;s build your project.
              </h2>
              <p className="mt-1.5 text-xs sm:text-sm text-ink-soft">
                Fill in your details below and our team will get back to you with a tailored scope
                and quote within 4 to 12 hours.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Product / Package Auto-Selector */}
              <div>
                <label
                  htmlFor="quotePackage"
                  className="block text-xs font-semibold uppercase tracking-wider text-purple-mid mb-1.5"
                >
                  Selected Product / Package
                </label>
                <div className="relative">
                  <select
                    id="quotePackage"
                    value={selectedPackage}
                    onChange={(e) => handlePackageChange(e.target.value)}
                    className={cn(
                      inputClasses(!!fieldErrors.packageName),
                      "font-semibold text-purple-ink appearance-none cursor-pointer pr-10",
                    )}
                  >
                    {pricingCategories.map((category) => (
                      <optgroup key={category.id} label={category.title}>
                        {category.tiers.map((tier) => (
                          <option key={tier.name} value={tier.name}>
                            {tier.name} — {category.title}
                          </option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                  <PackageCheck className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 size-4 text-purple-mid" />
                </div>
                {selectedCategory ? (
                  <p className="mt-1 text-[11px] text-ink-soft">
                    Category: <strong className="text-purple-ink">{selectedCategory}</strong>
                    {initialMeta ? ` · ${initialMeta}` : ""}
                  </p>
                ) : null}
                {fieldErrors.packageName && (
                  <p className="mt-1 text-xs text-red-500">{fieldErrors.packageName}</p>
                )}
              </div>

              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-xs font-medium text-ink mb-1"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="e.g. Alex Morgan"
                  value={fullName}
                  onChange={(e) => {
                    setFullName(e.target.value);
                    if (fieldErrors.fullName) {
                      setFieldErrors((prev) => ({ ...prev, fullName: "" }));
                    }
                  }}
                  className={inputClasses(!!fieldErrors.fullName)}
                />
                {fieldErrors.fullName && (
                  <p className="mt-1 text-xs text-red-500">{fieldErrors.fullName}</p>
                )}
              </div>

              {/* Work Email */}
              <div>
                <label
                  htmlFor="quoteEmail"
                  className="block text-xs font-medium text-ink mb-1"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="quoteEmail"
                  type="email"
                  placeholder="alex@company.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (fieldErrors.email) {
                      setFieldErrors((prev) => ({ ...prev, email: "" }));
                    }
                  }}
                  className={inputClasses(!!fieldErrors.email)}
                />
                {fieldErrors.email && (
                  <p className="mt-1 text-xs text-red-500">{fieldErrors.email}</p>
                )}
              </div>

              {/* WhatsApp Number */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label
                    htmlFor="whatsappNumber"
                    className="block text-xs font-medium text-ink"
                  >
                    WhatsApp Number <span className="text-red-500">*</span>
                  </label>
                  <span className="text-[11px] text-purple-mid font-medium flex items-center gap-1">
                    <MessageCircle className="size-3 text-[#25D366]" /> Fast responses
                  </span>
                </div>
                <input
                  id="whatsappNumber"
                  type="tel"
                  placeholder="+234 800 000 0000"
                  value={whatsappNumber}
                  onChange={(e) => {
                    setWhatsappNumber(e.target.value);
                    if (fieldErrors.whatsappNumber) {
                      setFieldErrors((prev) => ({ ...prev, whatsappNumber: "" }));
                    }
                  }}
                  className={inputClasses(!!fieldErrors.whatsappNumber)}
                />
                {fieldErrors.whatsappNumber && (
                  <p className="mt-1 text-xs text-red-500">{fieldErrors.whatsappNumber}</p>
                )}
              </div>

              {/* Monthly Budget Range */}
              <div>
                <label
                  htmlFor="budgetRange"
                  className="block text-xs font-medium text-ink mb-1"
                >
                  Monthly Budget Range <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    id="budgetRange"
                    value={budgetRange}
                    onChange={(e) => {
                      setBudgetRange(e.target.value);
                      if (fieldErrors.budgetRange) {
                        setFieldErrors((prev) => ({ ...prev, budgetRange: "" }));
                      }
                    }}
                    className={cn(inputClasses(!!fieldErrors.budgetRange), "appearance-none cursor-pointer pr-10")}
                  >
                    <option value="" disabled>Select a budget range</option>
                    <option value="Under ₦200k">Under ₦200k</option>
                    <option value="₦200k–₦500k">₦200k–₦500k</option>
                    <option value="₦500k–₦1M">₦500k–₦1M</option>
                    <option value="Above ₦1M">Above ₦1M</option>
                    <option value="Prefer to discuss on call">Prefer to discuss on call</option>
                  </select>
                  <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-mid"><path d="m6 9 6 6 6-6"/></svg>
                  </div>
                </div>
                {fieldErrors.budgetRange && (
                  <p className="mt-1 text-xs text-red-500">{fieldErrors.budgetRange}</p>
                )}
              </div>

              {/* Project Notes / Brief Description */}
              <div>
                <label
                  htmlFor="projectNotes"
                  className="block text-xs font-medium text-ink mb-1"
                >
                  Project Details or Goals <span className="text-xs text-ink-muted">(Optional)</span>
                </label>
                <textarea
                  id="projectNotes"
                  rows={3}
                  placeholder="Tell us briefly about your goals, requirements, or desired timeline..."
                  value={projectNotes}
                  onChange={(e) => setProjectNotes(e.target.value)}
                  className={cn(inputClasses(false), "resize-none")}
                />
              </div>

              {/* Submit Error Banner */}
              {submitError && (
                <div className="rounded border border-red-200 bg-red-50 px-3.5 py-2.5 text-xs text-red-700">
                  {submitError}
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 rounded-pill bg-purple-ink px-6 py-3.5 text-surface font-semibold text-sm shadow-md transition-all hover:bg-purple-mid hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="size-4 animate-spin" />
                      <span>Sending Quote Request...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Quote Request</span>
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </div>

              <p className="text-center text-[11px] text-ink-soft pt-1">
                We respect your privacy. No spam — only direct responses from our leadership team.
              </p>
            </form>
          </div>
        ) : (
          /* Success Screen */
          <div className="py-4 text-center flex flex-col items-center animate-fadeIn">
            <div className="w-14 h-14 rounded-full bg-purple-tint flex items-center justify-center mb-4 text-purple-mid shadow-inner">
              <CheckCircle2 className="h-8 w-8 text-purple-mid" />
            </div>

            <span className="font-service text-[0.72rem] font-bold tracking-[0.14em] uppercase text-purple-mid">
              Request Received
            </span>
            <h3 className="mt-1 font-service text-2xl font-bold text-purple-ink">
              Thank you, {fullName}!
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-ink-soft max-w-sm">
              We&apos;ve logged your quote request for{" "}
              <strong className="text-purple-ink">{selectedPackage}</strong>. Our team is preparing
              your proposal and will reach out to you within 4 to 12 hours.
            </p>

            {ticketId ? (
              <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-purple-tint px-3.5 py-1 text-xs font-semibold text-purple-ink border border-purple-pale">
                Ticket Number: #{ticketId}
              </div>
            ) : null}

            {/* Direct WhatsApp Action */}
            <div className="mt-6 w-full space-y-2.5">
              <a
                href={waDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 rounded-pill bg-[#25D366] px-5 py-3 text-white font-semibold text-xs sm:text-sm shadow-md transition-all hover:bg-[#1EBE5D] hover:scale-[1.01]"
              >
                <MessageCircle className="size-4.5" />
                <span>Chat with us on WhatsApp now</span>
              </a>

              <button
                type="button"
                onClick={onClose}
                className="w-full py-2.5 rounded-pill border border-service-line text-xs font-semibold text-service-ink-soft hover:bg-service-paper hover:text-service-ink transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
