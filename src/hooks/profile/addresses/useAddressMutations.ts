import {
  getAddresses,
  addAddress,
  deleteAddress,
  updateAddress,
} from "src/api/profile/addresses";
import Address from "src/types/UserInfo/Address";

import { useMutation, useQuery } from "@tanstack/react-query";
export const useGetAddresses = () =>
  useQuery({
    queryKey: ["addresses"],
    queryFn: () => getAddresses(),
    retry: 2,
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
