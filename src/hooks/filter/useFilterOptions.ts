import { useCallback, useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";

interface FilterOptions {
  category_ids: number[];
  occasion_ids: number[];
  color_ids: number[];
  price_range: number[];
}

const INITIAL_FILTER_OPTIONS: FilterOptions = {
  category_ids: [],
  occasion_ids: [],
  color_ids: [],
  price_range: [0, Math.max(Number.MAX_SAFE_INTEGER, 100)],
};

const STRING_ARRAY_KEYS = new Set<keyof FilterOptions>([
  "category_ids",
  "occasion_ids",
  "color_ids",
]);

export const useFilterOptions = () => {
  const [page, setPage] = useState(1);
  const [searchParams] = useSearchParams();
  const [options, setOptions] = useState<FilterOptions>(() => {
    const initialOptions = { ...INITIAL_FILTER_OPTIONS };
    const categoryId = searchParams.get("category_id");
    const occasionId = searchParams.get("occasion_id");

    if (categoryId) {
      initialOptions.category_ids = [parseInt(categoryId)];
    }
    if (occasionId) {
      initialOptions.occasion_ids = [parseInt(occasionId)];
    }
    return initialOptions;
  });

  const [appliedOptions, setAppliedOptions] = useState<FilterOptions>(() => {
    const initialApplied = { ...INITIAL_FILTER_OPTIONS };
    const categoryId = searchParams.get("category_id");
    const occasionId = searchParams.get("occasion_id");

    if (categoryId) {
      initialApplied.category_ids = [parseInt(categoryId)];
    }
    if (occasionId) {
      initialApplied.occasion_ids = [parseInt(occasionId)];
    }
    return initialApplied;
  });

  const handleOptionChange = (key: string, value: number) => {
    if (!STRING_ARRAY_KEYS.has(key as keyof FilterOptions)) {
      return;
    }

    setOptions((prevOptions) => {
      const currentValues = prevOptions[key as keyof FilterOptions];
      const valueExists = currentValues.includes(value);

      const newValues = valueExists
        ? currentValues.filter((item) => item !== value)
        : [...currentValues, value];

      return {
        ...prevOptions,
        [key]: newValues,
      };
    });
  };

  const handlePriceRangeChange = useCallback((min: number, max: number) => {
    setOptions((prevOptions) => {
      if (
        prevOptions.price_range[0] === min &&
        prevOptions.price_range[1] === max
      ) {
        return prevOptions;
      }
      return {
        ...prevOptions,
        price_range: [min, max],
      };
    });
  }, []);

  const resetFilters = useCallback(() => {
    setOptions(INITIAL_FILTER_OPTIONS);
  }, []);

  return useMemo(
    () => ({
      options,
      appliedOptions,
      handleOptionChange,
      handlePriceRangeChange,
      resetFilters,
      setAppliedOptions,
      setOptions,
      page,
      setPage,
    }),
    [
      options,
      appliedOptions,
      handleOptionChange,
      handlePriceRangeChange,
      resetFilters,
    ],
  );
};
