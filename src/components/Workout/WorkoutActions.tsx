"use client";

import { useFitLog } from "@/providers/FitLogProvider";
import React from "react";
import { toast } from "react-toastify";

interface WorkoutActionsProps {
  workoutId: number;
}

const WorkoutActions = ({ workoutId }: WorkoutActionsProps) => {
  const { addToPlan, saveForLater, plannedWorkouts } = useFitLog();

  const isPlanFull = plannedWorkouts.length >= 5;

  const handleAddToPlan = () => {
    const result = addToPlan(workoutId);

    if (result === "added") {
      toast.success("Workout added to today's plan");
    }

    if (result === "duplicate") {
      toast.info("This workout is already in your plan");
    }

    if (result === "limit") {
      toast.warning("Today's plan can contain maximum 5 workouts");
    }
  };

  const handleSaveForLater = () => {
    const result = saveForLater(workoutId);

    if (result === "saved") {
      toast.success("Workout saved for later");
    }

    if (result === "duplicate") {
      toast.info("This workout is already saved");
    }

    if (result === "limit") {
      toast.warning("You can save maximum 5 workouts");
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-4 pt-2">
      <button
        type="button"
        onClick={handleAddToPlan}
        disabled={isPlanFull}
        className="flex items-center justify-center gap-2 rounded-xl bg-[#ccff00] px-5 py-3 text-sm font-semibold text-black transition hover:bg-[#b8e600] disabled:cursor-not-allowed disabled:bg-gray-700 disabled:text-gray-400 disabled:hover:bg-gray-700"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect width="18" height="18" x="3" y="4" rx="2" />
          <line x1="16" x2="16" y1="2" y2="6" />
          <line x1="8" x2="8" y1="2" y2="6" />
          <line x1="3" x2="21" y1="10" y2="10" />
          <line x1="12" x2="12" y1="14" y2="18" />
          <line x1="10" x2="14" y1="16" y2="16" />
        </svg>

        {isPlanFull ? "Plan Full" : "Add to today's plan"}
      </button>

      <button
        type="button"
        onClick={handleSaveForLater}
        className="flex items-center justify-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
        </svg>

        Save for later
      </button>
    </div>
  );
};

export default WorkoutActions;