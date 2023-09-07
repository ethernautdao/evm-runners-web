import useSWR from "swr";
import useLevels from "./useLevels";
import { useState } from "react";
import useUser from "./useUser";
import Level from "@/model/Level";

export default function useSubmit() {
  const [bytecode, setBytecode] = useState<string>("");
  const [selectedLevel, setSelectedlevel] = useState<Level>();

  const {
    data: levelData,
    isLoading: loadingLevels,
    error: levelsError,
  } = useLevels();
  const {
    data: userData,
    isLoading: loadingUser,
    error: usersError,
  } = useUser();

  const fetcher = (...args: [any]) => {
    return fetch(...args, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${userData.access_token}`,
      },
      body: JSON.stringify({
        bytecode: bytecode,
        user_id: userData?.id,
        level_id: selectedLevel?.id,
        type: "bytecode",
      }),
    }).then((res) => res.json());
  };

  const {
    data: submissionData,
    error: submissionError,
    mutate: submitSolution,
    isLoading: isSubmitting,
  } = useSWR("/api/submit", fetcher, {
    revalidateOnFocus: false,
    revalidateOnMount: false,
    revalidateOnReconnect: false,
  });

  return {
    bytecode,
    selectedLevel,
    submissionData,
    levelData,
    userData,
    isLoading: loadingLevels || loadingUser,
    isSubmitting,
    levelsError,
    usersError,
    submissionError,
    setBytecode,
    setSelectedlevel,
    submitSolution,
  };
}
