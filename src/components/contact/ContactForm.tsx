'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { ArrowRight, Calendar as CalendarIcon, X, Plus, CheckCircle2 } from 'lucide-react';

type FormData = {
  fullName: string;
  company: string;
  requiredService: string;
  projectDetails: string;
  workEmail: string;
  phoneNumber: string;
  projectBudget: string;
  privacyPolicy: boolean;
};

const SERVICE_BUDGET_RANGES: Record<string, { value: string; label: string }[]> = {
  'growth-marketing': [
    { value: '500k-750k', label: '₦500,000 – ₦750,000' },
    { value: '750k-1m', label: '₦750,000 – ₦1,000,000' },
    { value: '1m-1.5m', label: '₦1,000,000 – ₦1,500,000' },
    { value: '1.5m-2m', label: '₦1,500,000 – ₦2,000,000' },
    { value: '2m+', label: '₦2,000,000+' },
    { value: 'custom-enterprise', label: 'Custom / Enterprise' },
    { value: 'need-guidance', label: 'Not sure — I need guidance' },
  ],
  'web-development': [
    { value: '750k-1m', label: '₦750,000 – ₦1,000,000' },
    { value: '1m-1.5m', label: '₦1,000,000 – ₦1,500,000' },
    { value: '1.5m-2m', label: '₦1,500,000 – ₦2,000,000' },
    { value: '2m-3m', label: '₦2,000,000 – ₦3,000,000' },
    { value: '3m+', label: '₦3,000,000+' },
    { value: 'custom-enterprise', label: 'Custom / Enterprise' },
    { value: 'need-guidance', label: 'Not sure — I need guidance' },
  ],
  'qa-testing': [
    { value: '300k-500k', label: '₦300,000 – ₦500,000' },
    { value: '500k-750k', label: '₦500,000 – ₦750,000' },
    { value: '750k-1m', label: '₦750,000 – ₦1,000,000' },
    { value: '1m+', label: '₦1,000,000+' },
    { value: 'custom-enterprise', label: 'Custom / Enterprise' },
    { value: 'need-guidance', label: 'Not sure — I need guidance' },
  ],
  'project-delivery': [
    { value: '400k-500k', label: '₦400,000 – ₦500,000' },
    { value: '500k-750k', label: '₦500,000 – ₦750,000' },
    { value: '750k-1m', label: '₦750,000 – ₦1,000,000' },
    { value: '1m-1.5m', label: '₦1,000,000 – ₦1,500,000' },
    { value: '1.5m+', label: '₦1,500,000+' },
    { value: 'custom-enterprise', label: 'Custom / Enterprise' },
    { value: 'need-guidance', label: 'Not sure — I need guidance' },
  ],
  'creative-services': [
    { value: '350k-500k', label: '₦350,000 – ₦500,000' },
    { value: '500k-750k', label: '₦500,000 – ₦750,000' },
    { value: '750k-1m', label: '₦750,000 – ₦1,000,000' },
    { value: '1m-1.5m', label: '₦1,000,000 – ₦1,500,000' },
    { value: '1.5m+', label: '₦1,500,000+' },
    { value: 'custom-enterprise', label: 'Custom / Enterprise' },
    { value: 'need-guidance', label: 'Not sure — I need guidance' },
  ],
  'field-marketing': [
    { value: '350k-500k', label: '₦350,000 – ₦500,000' },
    { value: '500k-750k', label: '₦500,000 – ₦750,000' },
    { value: '750k-1m', label: '₦750,000 – ₦1,000,000' },
    { value: '1m-1.5m', label: '₦1,000,000 – ₦1,500,000' },
    { value: '1.5m+', label: '₦1,500,000+' },
    { value: 'custom-enterprise', label: 'Custom / Enterprise' },
    { value: 'need-guidance', label: 'Not sure — I need guidance' },
  ],
};

const DEFAULT_BUDGET_RANGES = [
  { value: '300k-500k', label: '₦300,000 – ₦500,000' },
  { value: '500k-1m', label: '₦500,000 – ₦1,000,000' },
  { value: '1m-2m', label: '₦1,000,000 – ₦2,000,000' },
  { value: '2m-3m', label: '₦2,000,000 – ₦3,000,000' },
  { value: '3m+', label: '₦3,000,000+' },
  { value: 'custom-enterprise', label: 'Custom / Enterprise' },
  { value: 'need-guidance', label: 'Not sure — I need guidance' },
];

export default function ContactForm() {
  const [preferredDates, setPreferredDates] = useState<string[]>([]);
  const [dateInput, setDateInput] = useState('');
  const [dateError, setDateError] = useState<string | null>(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    defaultValues: {
      fullName: '',
      company: '',
      requiredService: '',
      projectDetails: '',
      workEmail: '',
      phoneNumber: '',
      projectBudget: '',
      privacyPolicy: false,
    },
  });

  const selectedService = watch('requiredService');

  // Reset budget if currently selected budget is not valid for newly selected service
  useEffect(() => {
    if (selectedService && SERVICE_BUDGET_RANGES[selectedService]) {
      const validValues = SERVICE_BUDGET_RANGES[selectedService].map((o) => o.value);
      const currentBudget = watch('projectBudget');
      if (currentBudget && !validValues.includes(currentBudget)) {
        setValue('projectBudget', '');
      }
    }
  }, [selectedService, setValue, watch]);

  const handleAddDate = () => {
    setDateError(null);
    if (!dateInput) {
      setDateError('Please select a date');
      return;
    }
    if (preferredDates.length >= 3) {
      setDateError('You can select a maximum of 3 preferred dates');
      return;
    }
    if (preferredDates.includes(dateInput)) {
      setDateError('Date already selected');
      return;
    }
    setPreferredDates([...preferredDates, dateInput]);
    setDateInput('');
  };

  const handleRemoveDate = (index: number) => {
    setPreferredDates(preferredDates.filter((_, i) => i !== index));
    setDateError(null);
  };

  const onSubmit = async (data: FormData) => {
    const payload = {
      ...data,
      preferredDates,
    };
    console.log('Form submitted:', payload);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    reset();
    setPreferredDates([]);
    setDateInput('');
    setShowSuccessModal(true);
  };

  const inputClasses = (hasError: boolean) => `
    w-full rounded-t-sm border-b-2 bg-purple-tint px-4 py-3 text-ink placeholder-ink-muted
    focus:outline-none focus:ring-2 focus:ring-purple-mid/50 focus:border-transparent
    ${hasError ? 'border-red-500' : 'border-purple-pale'}
  `;

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-surface rounded-radius-card rounded-sm shadow p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6"
      >
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-ink mb-1">
            Full Name
          </label>
          <input
            id="fullName"
            type="text"
            placeholder="John Doe"
            {...register('fullName', { required: 'Full name is required' })}
            className={inputClasses(!!errors.fullName)}
          />
          {errors.fullName && (
            <p className="mt-1 text-sm text-red-500">{errors.fullName.message}</p>
          )}
        </div>

        {/* Work Email */}
        <div>
          <label htmlFor="workEmail" className="block text-sm font-medium text-ink mb-1">
            Work Email
          </label>
          <input
            id="workEmail"
            type="email"
            placeholder="john@company.com"
            {...register('workEmail', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
            className={inputClasses(!!errors.workEmail)}
          />
          {errors.workEmail && (
            <p className="mt-1 text-sm text-red-500">{errors.workEmail.message}</p>
          )}
        </div>

        {/* Company */}
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-ink mb-1">
            Company
          </label>
          <input
            id="company"
            type="text"
            placeholder="Agency Inc."
            {...register('company')}
            className={inputClasses(false)}
          />
        </div>

        {/* Phone Number */}
        <div>
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-ink mb-1">
            Phone Number
          </label>
          <input
            id="phoneNumber"
            type="tel"
            placeholder="+1 (555) 000-0000"
            {...register('phoneNumber', {
              required: 'Phone number is required',
              minLength: {
                value: 10,
                message: 'Phone number must be at least 10 digits',
              },
            })}
            className={inputClasses(!!errors.phoneNumber)}
          />
          {errors.phoneNumber && (
            <p className="mt-1 text-sm text-red-500">{errors.phoneNumber.message}</p>
          )}
        </div>

        {/* Required Service */}
        <div>
          <label htmlFor="requiredService" className="block text-sm font-medium text-ink mb-1">
            Required Service
          </label>
          <select
            id="requiredService"
            {...register('requiredService', { required: 'Please select a service' })}
            className={inputClasses(!!errors.requiredService)}
          >
            <option value="">Select a service</option>
            <option value="web-development">Web Development</option>
            <option value="field-marketing">Field Marketing</option>
            <option value="project-delivery">Project Delivery</option>
            <option value="growth-marketing">Growth & Marketing</option>
            <option value="qa-testing">QA & Testing</option>
            <option value="creative-services">Creative Services</option>
          </select>
          {errors.requiredService && (
            <p className="mt-1 text-sm text-red-500">{errors.requiredService.message}</p>
          )}
        </div>

        {/* Project Budget */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <label htmlFor="projectBudget" className="block text-sm font-medium text-ink">
              Project Budget
            </label>
            {selectedService && (
              <span className="text-[11px] font-medium text-purple-mid animate-fadeIn">
                Tailored to service
              </span>
            )}
          </div>
          <select
            id="projectBudget"
            {...register('projectBudget', { required: 'Please select a budget range' })}
            className={inputClasses(!!errors.projectBudget)}
          >
            <option value="">
              {selectedService ? 'Select budget range' : 'Select range (or choose service first)'}
            </option>
            {(selectedService && SERVICE_BUDGET_RANGES[selectedService]
              ? SERVICE_BUDGET_RANGES[selectedService]
              : DEFAULT_BUDGET_RANGES
            ).map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          {errors.projectBudget && (
            <p className="mt-1 text-sm text-red-500">{errors.projectBudget.message}</p>
          )}
        </div>

        {/* Preferred Dates (1-3 dates) */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-ink mb-1">
            Preferred Dates <span className="text-xs text-ink-muted">(Pick 1 to 3 dates)</span>
          </label>
          <div className="flex gap-2 items-center">
            <input
              type="date"
              value={dateInput}
              min={new Date().toISOString().split('T')[0]}
              disabled={preferredDates.length >= 3}
              onChange={(e) => setDateInput(e.target.value)}
              className="flex-1 rounded-t-sm border-b-2 border-purple-pale bg-purple-tint px-4 py-3 text-ink focus:outline-none focus:ring-2 focus:ring-purple-mid/50 focus:border-transparent disabled:opacity-50"
            />
            <button
              type="button"
              onClick={handleAddDate}
              disabled={preferredDates.length >= 3}
              className="px-4 py-3 bg-purple-ink text-surface rounded hover:bg-purple-mid transition-colors disabled:opacity-50 flex items-center gap-1 text-sm font-medium"
            >
              <Plus className="h-4 w-4" /> Add Date
            </button>
          </div>
          {dateError && <p className="mt-1 text-sm text-red-500">{dateError}</p>}

          {/* Date Chips */}
          {preferredDates.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {preferredDates.map((date, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-tint text-purple-ink text-sm font-medium border border-purple-pale"
                >
                  <CalendarIcon className="h-4 w-4 text-purple-mid" />
                  {new Date(date).toLocaleDateString(undefined, {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                  <button
                    type="button"
                    onClick={() => handleRemoveDate(index)}
                    className="hover:text-red-500 transition-colors ml-1 p-0.5 rounded-full"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Project Details — full width */}
        <div className="md:col-span-2">
          <label htmlFor="projectDetails" className="block text-sm font-medium text-ink mb-1">
            Project Details
          </label>
          <textarea
            id="projectDetails"
            rows={4}
            placeholder="Tell us about your goals, timeline, and any specific challenges you're facing..."
            {...register('projectDetails')}
            className="w-full rounded-t-sm border-b-2 border-purple-pale bg-purple-tint px-4 py-3 text-ink placeholder-ink-muted focus:outline-none focus:ring-2 focus:ring-purple-mid/50 focus:border-transparent resize-none"
          />
        </div>

        {/* Footer */}
        <div className="md:col-span-2 pt-2 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="flex items-start gap-3">
              <div className="flex h-6 items-center">
                <input
                  id="privacyPolicy"
                  type="checkbox"
                  {...register('privacyPolicy', {
                    validate: (value) => value === true || 'You must agree to the Privacy Policy',
                  })}
                  className="h-4 w-4 rounded border-purple-pale bg-purple-tint text-purple-ink focus:ring-purple-mid/50 focus:ring-2"
                />
              </div>
              <label htmlFor="privacyPolicy" className="text-xs text-ink-soft max-w-xs">
                By submitting this form, you agree to our{' '}
                <a href="#" className="text-purple-mid hover:underline">
                  Privacy Policy
                </a>{' '}
                and consent to us contacting you about your project.
              </label>
            </div>
            {errors.privacyPolicy && (
              <p className="mt-1 text-sm text-red-500">{errors.privacyPolicy.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="group relative w-full sm:w-auto shrink-0 overflow-hidden rounded bg-purple-ink px-8 py-4 text-surface font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:hover:scale-100"
          >
            <span className="flex items-center justify-center gap-2 whitespace-nowrap">
              {isSubmitting ? (
                'Submitting...'
              ) : (
                <>
                  Launch Project
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </span>
          </button>
        </div>
      </form>

      {/* Submission Success Modal Alert */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-md bg-surface p-6 sm:p-8 rounded-lg shadow-xl border border-purple-pale text-center flex flex-col items-center">
            <button
              onClick={() => setShowSuccessModal(false)}
              className="absolute top-4 right-4 text-ink-muted hover:text-ink transition-colors p-1"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="w-14 h-14 rounded-full bg-purple-tint flex items-center justify-center mb-4 text-purple-mid">
              <CheckCircle2 className="h-8 w-8" />
            </div>

            <h3 className="text-xl font-bold text-ink mb-2">Message Sent Successfully!</h3>
            <p className="text-sm text-ink-muted mb-6">
              Thank you for reaching out. We have received your request and will be in touch shortly to confirm your preferred dates and details.
            </p>

            <button
              onClick={() => setShowSuccessModal(false)}
              className="w-full py-3 bg-purple-ink text-surface font-semibold rounded hover:bg-purple-mid transition-colors shadow-md"
            >
              Got it, thanks!
            </button>
          </div>
        </div>
      )}
    </>
  );
}