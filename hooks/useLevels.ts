import useSWR from "swr";

export default function useLevels() {
  const fetcher = (...args: [any]) => {
    return fetch(...args).then((res) => res.json());
  };

  const { data, error, isLoading } = useSWR("/api/levels/", fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return {
    data,
    isLoading,
    error,
  };
}
