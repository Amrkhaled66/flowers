import { useCallback, useState, useMemo, useEffect } from "react";
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

// Helper function to parse array parameters from URL
const parseArrayParam = (param: string | null): number[] => {
  if (!param) return [];
  return param
    .split(",")
    .map((id) => parseInt(id))
    .filter((id) => !isNaN(id));
};

// Helper function to parse price range from URL
const parsePriceRange = (
  minParam: string | null,
  maxParam: string | null,
): number[] => {
  const min = minParam
    ? parseInt(minParam)
    : INITIAL_FILTER_OPTIONS.price_range[0];
  const max = maxParam
    ? parseInt(maxParam)
    : INITIAL_FILTER_OPTIONS.price_range[1];
  return [
    isNaN(min) ? INITIAL_FILTER_OPTIONS.price_range[0] : min,
    isNaN(max) ? INITIAL_FILTER_OPTIONS.price_range[1] : max,
  ];
};

// Helper function to initialize options from URL parameters
const getInitialOptionsFromURL = (
  searchParams: URLSearchParams,
): FilterOptions => {
  return {
    category_ids: parseArrayParam(searchParams.get("category_ids")),
    occasion_ids: parseArrayParam(searchParams.get("occasion_ids")),
    color_ids: parseArrayParam(searchParams.get("color_ids")),
    price_range: parsePriceRange(
      searchParams.get("price_min"),
      searchParams.get("price_max"),
    ),
  };
};

export const useFilterOptions = () => {
  const [page, setPage] = useState(1);
  const [searchParams] = useSearchParams();

  const [options, setOptions] = useState<FilterOptions>(() => {
    return getInitialOptionsFromURL(searchParams);
  });

  const [appliedOptions, setAppliedOptions] = useState<FilterOptions>(() => {
    return getInitialOptionsFromURL(searchParams);
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

  const updateURLParams = useCallback((newAppliedOptions: FilterOptions) => {
    const newSearchParams = new URLSearchParams();

    // Add array parameters if they have values
    if (newAppliedOptions.category_ids.length > 0) {
      newSearchParams.set(
        "category_ids",
        newAppliedOptions.category_ids.join(","),
      );
    }
    if (newAppliedOptions.occasion_ids.length > 0) {
      newSearchParams.set(
        "occasion_ids",
        newAppliedOptions.occasion_ids.join(","),
      );
    }
    if (newAppliedOptions.color_ids.length > 0) {
      newSearchParams.set("color_ids", newAppliedOptions.color_ids.join(","));
    }

    // Add price range if different from initial
    if (
      newAppliedOptions.price_range[0] !== INITIAL_FILTER_OPTIONS.price_range[0]
    ) {
      newSearchParams.set(
        "price_min",
        newAppliedOptions.price_range[0].toString(),
      );
    }
    if (
      newAppliedOptions.price_range[1] !== INITIAL_FILTER_OPTIONS.price_range[1]
    ) {
      newSearchParams.set(
        "price_max",
        newAppliedOptions.price_range[1].toString(),
      );
    }

    window.history.replaceState(
      {},
      "",
      `${window.location.pathname}?${newSearchParams.toString()}`,
    );
  }, []);

  const applyFilters = useCallback(() => {
    setAppliedOptions(options);
    updateURLParams(options);
    setPage(1);
  }, [options, updateURLParams]);

 useEffect(() => {
  const initialOptions = getInitialOptionsFromURL(searchParams);
  setOptions(initialOptions);
  setAppliedOptions(initialOptions);
  updateURLParams(initialOptions);
  setPage(1);
}, [searchParams.toString(), updateURLParams]);

  return useMemo(
    () => ({
      options,
      appliedOptions,
      handleOptionChange,
      handlePriceRangeChange,
      resetFilters,
      setOptions,
      page,
      setPage,
      applyFilters,
      updateURLParams,
    }),
    [
      options,
      appliedOptions,
      handleOptionChange,
      handlePriceRangeChange,
      resetFilters,
      applyFilters,
      updateURLParams,
    ],
  );
};
