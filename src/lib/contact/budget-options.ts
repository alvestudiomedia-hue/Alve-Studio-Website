export type BudgetOption = {
  value: string;
  label: string;
};

export const SERVICE_BUDGET_RANGES: Record<string, BudgetOption[]> = {
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

export const DEFAULT_BUDGET_RANGES: BudgetOption[] = [
  { value: '300k-500k', label: '₦300,000 – ₦500,000' },
  { value: '500k-1m', label: '₦500,000 – ₦1,000,000' },
  { value: '1m-2m', label: '₦1,000,000 – ₦2,000,000' },
  { value: '2m-3m', label: '₦2,000,000 – ₦3,000,000' },
  { value: '3m+', label: '₦3,000,000+' },
  { value: 'custom-enterprise', label: 'Custom / Enterprise' },
  { value: 'need-guidance', label: 'Not sure — I need guidance' },
];

export function getBudgetOptions(requiredService: string): BudgetOption[] {
  return SERVICE_BUDGET_RANGES[requiredService] ?? DEFAULT_BUDGET_RANGES;
}

export function getBudgetLabel(value: string): string | undefined {
  const options = [
    ...DEFAULT_BUDGET_RANGES,
    ...Object.values(SERVICE_BUDGET_RANGES).flat(),
  ];
  return options.find((option) => option.value === value)?.label;
}
