'use client';

import { useForm } from 'react-hook-form';
import { ArrowRight } from 'lucide-react';

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

export default function ContactForm() {
  const {
    register,
    handleSubmit,
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

  const onSubmit = async (data: FormData) => {
    console.log('Form submitted:', data);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    reset();
    alert('Thank you! We will be in touch shortly.');
  };

  const inputClasses = (hasError: boolean) => `
    w-full rounded-t-sm border-b-2 bg-purple-tint px-4 py-3 text-ink placeholder-ink-muted
    focus:outline-none focus:ring-2 focus:ring-purple-mid/50 focus:border-transparent
    ${hasError ? 'border-red-500' : 'border-purple-pale'}
  `;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-surface rounded-radius-card  rounded-sm shadow p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6"
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
          <option value="web-design">Web Design</option>
          <option value="development">Development</option>
          <option value="growth-strategy">Growth Strategy</option>
          <option value="branding">Branding</option>
        </select>
        {errors.requiredService && (
          <p className="mt-1 text-sm text-red-500">{errors.requiredService.message}</p>
        )}
      </div>

      {/* Project Budget */}
      <div>
        <label htmlFor="projectBudget" className="block text-sm font-medium text-ink mb-1">
          Project Budget
        </label>
        <select
          id="projectBudget"
          {...register('projectBudget', { required: 'Please select a budget range' })}
          className={inputClasses(!!errors.projectBudget)}
        >
          <option value="">Select range</option>
          <option value="10k-25k">$10,000 – $25,000</option>
          <option value="25k-50k">$25,000 – $50,000</option>
          <option value="50k-100k">$50,000 – $100,000</option>
          <option value="100k+">$100,000+</option>
        </select>
        {errors.projectBudget && (
          <p className="mt-1 text-sm text-red-500">{errors.projectBudget.message}</p>
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
  );
}