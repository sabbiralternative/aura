import { useMutation } from "@tanstack/react-query";
import { AxiosSecure } from "../lib/AxiosSecure";
import { API } from "../api";

export const useBets = () => {
  return useMutation({
    mutationKey: ["bets"],
    mutationFn: async (payload) => {
      const { data } = await AxiosSecure.post(API.bets, payload);
      return data;
    },
    gcTime: 0,
  });
};
