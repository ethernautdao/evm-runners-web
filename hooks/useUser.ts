import useSWR from "swr";
import { useAccount } from "wagmi";

export default function useUser() {
  const { address } = useAccount();
  const fetcher = (...args: [any]) => {
    if (address) {
      return fetch(...args).then((res) => res.json());
    }
  };

  const { data, error, isLoading } = useSWR(`api/users/${address}`, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return {
    data,
    isLoading,
    error: error || (address && !data?.id),
  };
}
