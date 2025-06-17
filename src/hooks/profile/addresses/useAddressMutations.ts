import {
  getAddresses,
  addAddress,
  deleteAddress,
  updateAddress,
} from "src/api/profile/addresses";
import Address from "src/types/UserInfo/Address";

import { useMutation, useQuery } from "@tanstack/react-query";
import transformKeysToCamelCase from "src/utils/transformToCamalCase";
export const useGetAddresses = () =>
  useQuery({
    queryKey: ["addresses"],
    queryFn: async () => {
      const data = await getAddresses();
      return transformKeysToCamelCase(data.data)
    },
    enabled: true,
  });

export const useAddAddress = () =>
  useMutation({
    mutationFn: (address: Address) => addAddress(address),
  });

export const useDeleteAddress = () =>
  useMutation({
    mutationFn: (id: number) => deleteAddress(id),
  });

export const useUpdateAddress = () =>
  useMutation({
    mutationFn: ({ address, id }: { address: any; id: number }) =>
      updateAddress(address, id),
  });
