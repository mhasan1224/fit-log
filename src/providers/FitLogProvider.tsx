"use client";

import React, { createContext, useContext, useState } from "react";



interface FitLogContextType {
  plannedWorkouts: number[];
  savedWorkouts: number[];
  addToPlan: (workoutId: number) => "added" | "duplicate" | "limit";
  saveForLater: (workoutId: number) => "saved" | "duplicate" | "limit";
}

const FitLogContext = createContext<FitLogContextType | undefined>(undefined);

const FitLogProvider = ({ children }: { children: React.ReactNode }) => {
  const [plannedWorkouts, setPlannedWorkouts] = useState<number[]>([]);
  const [savedWorkouts, setSavedWorkouts] = useState<number[]>([]);

  const addToPlan = (
    workoutId: number,
  ): "added" | "duplicate" | "limit" => {
    if (plannedWorkouts.includes(workoutId)) {
      return "duplicate";
    }

    if (plannedWorkouts.length >= 5) {
      return "limit";
    }

    setPlannedWorkouts((prev) => [...prev, workoutId]);

    return "added";
  };

  const saveForLater = (
    workoutId: number,
  ): "saved" | "duplicate" | "limit" => {
    if (savedWorkouts.includes(workoutId)) {
      return "duplicate";
    }

    if (savedWorkouts.length >= 5) {
      return "limit";
    }

    setSavedWorkouts((prev) => [...prev, workoutId]);

    return "saved";
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