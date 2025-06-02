import { useCallback, useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";

interface FilterOptions {
  category_id: number[];
  occasion_id: number[];
  color_id: number[];
  price_range: number[];
}

const INITIAL_FILTER_OPTIONS: FilterOptions = {
  category_id: [],
  occasion_id: [],
  color_id: [],
  price_range: [0, 9999],
};

const STRING_ARRAY_KEYS = new Set<keyof FilterOptions>([
  "category_id",
  "occasion_id",
  "color_id",
]);

export const useFilterOptions = () => {
  const [page, setPage] = useState(1);
  const [searchParams] = useSearchParams();
  const [options, setOptions] = useState<FilterOptions>(() => {
    const initialOptions = { ...INITIAL_FILTER_OPTIONS };
    const categoryId = searchParams.get("category_id");
    const occasionId = searchParams.get("occasion_id");

    if (categoryId) {
      initialOptions.category_id = [parseInt(categoryId)];
    }
    if (occasionId) {
      initialOptions.occasion_id = [parseInt(occasionId)];
    }
    return initialOptions;
  });

  const [appliedOptions, setAppliedOptions] = useState<FilterOptions>(() => {
    const initialApplied = { ...INITIAL_FILTER_OPTIONS };
    const categoryId = searchParams.get("category_id");
    const occasionId = searchParams.get("occasion_id");

    if (categoryId) {
      initialApplied.category_id = [parseInt(categoryId)];
    }
    if (occasionId) {
      initialApplied.occasion_id = [parseInt(occasionId)];
    }
    return initialApplied;
  });

  const handleOptionChange = (key: string, value: number) => {
    if (!STRING_ARRAY_KEYS.has(key as keyof FilterOptions)) {
      console.warn(`Invalid filter key: ${key}`);
      return;
    }

    setOptions(prevOptions => {
      const currentValues = prevOptions[key as keyof FilterOptions];
      const valueExists = currentValues.includes(value);
 
      const newValues = valueExists
        ? currentValues.filter(item => item !== value)
        : [...currentValues, value];

      return {
        ...prevOptions,
        [key]: newValues,
      };
    });
  }

  const handlePriceRangeChange = useCallback((value: number[]) => {
    setOptions(prevOptions => {
      if (
        prevOptions.price_range[0] === value[0] &&
        prevOptions.price_range[1] === value[1]
      ) {
        return prevOptions;
      }
      return {
        ...prevOptions,
        price_range: value,
      };
    });
  }, []);

  const resetFilters = useCallback(() => {
    setOptions(INITIAL_FILTER_OPTIONS);
  }, []);

  return useMemo(() => ({
    options,
    appliedOptions,
    handleOptionChange,
    handlePriceRangeChange,
    resetFilters,
    setAppliedOptions,
    setOptions,
    page,
    setPage
  }), [
    options,
    appliedOptions,
    handleOptionChange,
    handlePriceRangeChange,
    resetFilters,
  ]);
};