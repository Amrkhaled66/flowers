import { getCategories, getOccasions } from "src/api/category";
import { useQuery } from "@tanstack/react-query";


const useGetCategories = () => {
    return useQuery({
        queryKey: ["categories"],
        queryFn: getCategories,
    });
}

const useGetOccasions = () => {
    return useQuery({
        queryKey: ["occasions"],
        queryFn: getOccasions,
    });
}

export {
    useGetCategories,
    useGetOccasions
}
