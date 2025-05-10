import { useQuery } from "@tanstack/react-query";
import { AxiosSecure } from "../lib/AxiosSecure";
import { API } from "../api";

export const usePNL = (payload) => {
  return useQuery({
    queryKey: ["PNL", payload],
    queryFn: async () => {
      const { data } = await AxiosSecure.post(API.pnl, payload);
      return data;
    },
    gcTime: 0,
  });
};
