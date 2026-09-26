"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface FitLogContextType {
  plannedWorkouts: number[];
  savedWorkouts: number[];
  completedWorkouts: number[];

  addToPlan: (workoutId: number) => "added" | "duplicate" | "limit";
  saveForLater: (workoutId: number) => "saved" | "duplicate" | "limit";

  removeFromPlan: (workoutId: number) => void;
  removeFromSaved: (workoutId: number) => void;

  markAsDone: (workoutId: number) => void;
}

const FitLogContext = createContext<FitLogContextType | undefined>(undefined);

const FitLogProvider = ({ children }: { children: React.ReactNode }) => {
  const [plannedWorkouts, setPlannedWorkouts] = useState<number[]>([]);
  const [savedWorkouts, setSavedWorkouts] = useState<number[]>([]);
  const [completedWorkouts, setCompletedWorkouts] = useState<number[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const storedPlannedWorkouts = localStorage.getItem(
      "fitlog-planned-workouts",
    );

    const storedSavedWorkouts = localStorage.getItem("fitlog-saved-workouts");

    const storedCompletedWorkouts = localStorage.getItem(
      "fitlog-completed-workouts",
    );

    if (storedPlannedWorkouts) {
      setPlannedWorkouts(JSON.parse(storedPlannedWorkouts));
    }

    if (storedSavedWorkouts) {
      setSavedWorkouts(JSON.parse(storedSavedWorkouts));
    }

    if (storedCompletedWorkouts) {
      setCompletedWorkouts(JSON.parse(storedCompletedWorkouts));
    }

    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (!isInitialized) return;

    localStorage.setItem(
      "fitlog-planned-workouts",
      JSON.stringify(plannedWorkouts),
    );
  }, [plannedWorkouts, isInitialized]);

  useEffect(() => {
    if (!isInitialized) return;

    localStorage.setItem(
      "fitlog-saved-workouts",
      JSON.stringify(savedWorkouts),
    );
  }, [savedWorkouts, isInitialized]);

  useEffect(() => {
    if (!isInitialized) return;

    localStorage.setItem(
      "fitlog-completed-workouts",
      JSON.stringify(completedWorkouts),
    );
  }, [completedWorkouts, isInitialized]);

  const addToPlan = (workoutId: number) => {
    if (plannedWorkouts.includes(workoutId)) {
      return "duplicate" as const;
    }

    if (plannedWorkouts.length >= 5) {
      return "limit" as const;
    }

    setPlannedWorkouts((prev) => [...prev, workoutId]);

    setCompletedWorkouts((prev) => prev.filter((id) => id !== workoutId));

    return "added" as const;
  };
  const saveForLater = (workoutId: number) => {
    if (savedWorkouts.includes(workoutId)) {
      return "duplicate" as const;
    }

    if (savedWorkouts.length >= 5) {
      return "limit" as const;
    }

    setSavedWorkouts((prev) => [...prev, workoutId]);

    return "saved" as const;
  };

  const removeFromPlan = (workoutId: number) => {
    setPlannedWorkouts((prev) => prev.filter((id) => id !== workoutId));
  };

  const removeFromSaved = (workoutId: number) => {
    setSavedWorkouts((prev) => prev.filter((id) => id !== workoutId));
  };

  const markAsDone = (workoutId: number) => {
    setCompletedWorkouts((prev) => {
      if (prev.includes(workoutId)) {
        return prev;
      }

      return [...prev, workoutId];
    });
  };

  return (
    <FitLogContext.Provider
      value={{
        plannedWorkouts,
        savedWorkouts,
        completedWorkouts,
        addToPlan,
        saveForLater,
        removeFromPlan,
        removeFromSaved,
        markAsDone,
      }}
    >
      {children}
    </FitLogContext.Provider>
  );
};

export const useFitLog = () => {
  const context = useContext(FitLogContext);

  if (!context) {
    throw new Error("useFitLog must be used within FitLogProvider");
  }

  return context;
};

export default FitLogProvider;
