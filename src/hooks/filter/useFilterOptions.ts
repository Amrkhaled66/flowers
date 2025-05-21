import { useCallback, useState } from "react";

interface FilterOptions {
  category_id: string[];
  occasion_id: string[];
  color_id: string[];
  price_range: number[];
}

const INITIAL_FILTER_OPTIONS: FilterOptions = {
  category_id: [],
  occasion_id: [],
  color_id: [],
  price_range: [0, 9999],
};

const STRING_ARRAY_KEYS: (keyof FilterOptions)[] = [
  "category_id",
  "occasion_id",
  "color_id",
];

export const useFilterOptions = () => {
  const [options, setOptions] = useState<FilterOptions>(INITIAL_FILTER_OPTIONS);
  const [appliedOptions, setAppliedOptions] = useState<FilterOptions>(
    INITIAL_FILTER_OPTIONS,
  );
  const handleOptionChange = useCallback((key: string, value: string) => {
    if (!STRING_ARRAY_KEYS.includes(key as keyof FilterOptions)) {
      console.warn(`Invalid filter key: ${key}`);
      return;
    }

    setOptions((prevOptions) => {
      const currentValues = prevOptions[key as keyof FilterOptions] as string[];
      const valueExists = currentValues.includes(value);

      return {
        ...prevOptions,
        [key]: valueExists
          ? currentValues.filter((item) => item !== value)
          : [...currentValues, value],
      };
    });
  }, []);

  const handlePriceRangeChange = useCallback((value: number[]) => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      price_range: value,
    }));
  }, []);

  return {
    options,
    handleOptionChange,
    handlePriceRangeChange,
    appliedOptions,
    setAppliedOptions,
    resetFilters: () => setOptions(INITIAL_FILTER_OPTIONS),
  };
};
