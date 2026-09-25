"use client";

import React, { createContext, useContext, useState } from "react";

interface FitLogContextType {
  plannedWorkouts: number[];
  savedWorkouts: number[];
  addToPlan: (workoutId: number) => void;
  saveForLater: (workoutId: number) => void;
}

const FitLogContext = createContext<FitLogContextType | undefined>(
  undefined,
);

const FitLogProvider = ({ children }: { children: React.ReactNode }) => {
  const [plannedWorkouts, setPlannedWorkouts] = useState<number[]>([]);
  const [savedWorkouts, setSavedWorkouts] = useState<number[]>([]);

  const addToPlan = (workoutId: number) => {
    setPlannedWorkouts((prev) => [...prev, workoutId]);
  };

  const saveForLater = (workoutId: number) => {
    setSavedWorkouts((prev) => [...prev, workoutId]);
  };

  return (
    <FitLogContext.Provider
      value={{
        plannedWorkouts,
        savedWorkouts,
        addToPlan,
        saveForLater,
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