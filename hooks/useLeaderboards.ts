import useSWR from "swr";

export default function useLeaderboards() {
  const fetcher = (...args: [any]) => {
    return fetch(...args).then((res) => res.json());
  };

  const { data, error, isLoading } = useSWR("/api/leaderboards/", fetcher, {
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
