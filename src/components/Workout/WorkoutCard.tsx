
"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IWorkout } from "@/types/workout.type";
import { useFitLog } from "@/providers/FitLogProvider";

interface WorkoutCardProps {
  workout: IWorkout;
  variant?: "library" | "plan";
}

const WorkoutCard = ({
  workout,
  variant = "library",
}: WorkoutCardProps) => {
  const {
    addToPlan,
    saveForLater,
    removeFromPlan,
    markAsDone,
    completedWorkouts,
  } = useFitLog();

  const isCompleted = completedWorkouts.includes(workout.id);

  const handleAddToPlan = () => {
    addToPlan(workout.id);
  };

  const handleSaveForLater = () => {
    saveForLater(workout.id);
  };

  const handleRemove = () => {
    removeFromPlan(workout.id);
  };

  const handleMarkAsDone = () => {
    markAsDone(workout.id);
  };

  if (variant === "plan") {
    return (
      <article className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-[#181b22] p-4 sm:flex-row sm:items-center">
        <div className="relative h-48 w-full shrink-0 overflow-hidden rounded-xl sm:h-28 sm:w-40">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover"
            sizes="160px"
          />
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="font-oswald text-2xl uppercase tracking-wide text-white">
            {workout.name}
          </h3>

          <p className="mt-2 text-sm text-gray-400">
            {workout.equipment}
          </p>

          <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-gray-400">
            <span>⏱ {workout.duration} min</span>
            <span>🔥 {workout.caloriesBurned} kcal</span>
            <span>⭐ {workout.rating}</span>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-3">
          <Link
            href={`/workout/${workout.id}`}
            className="rounded-xl border border-white/15 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/5"
          >
            View Details
          </Link>

          {!isCompleted && (
            <button
              type="button"
              onClick={handleMarkAsDone}
              className="rounded-xl bg-[#ccff00] px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-[#b8e600]"
            >
              Mark as Done
            </button>
          )}

          <button
            type="button"
            onClick={handleRemove}
            aria-label={`Remove ${workout.name}`}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 text-xl text-gray-500 transition hover:border-red-400/30 hover:text-red-400"
          >
            ×
          </button>
        </div>
      </article>
    );
  }

  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-[#181b22] transition hover:-translate-y-1 hover:border-white/20">
      <Link href={`/workout/${workout.id}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        <div className="p-5">
          <div className="mb-3 flex flex-wrap gap-2">
            {workout.muscleGroups.map((muscleGroup) => (
              <span
                key={muscleGroup}
                className="rounded-full border border-[#ccff00]/20 bg-[#ccff00]/10 px-3 py-1 text-xs font-medium text-[#ccff00]"
              >
                {muscleGroup}
              </span>
            ))}
          </div>

          <h3 className="font-oswald text-2xl uppercase tracking-wide text-white">
            {workout.name}
          </h3>

          <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-400">
            {workout.description}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-4 border-t border-white/10 pt-4 text-sm text-gray-400">
            <span>⏱ {workout.duration} min</span>
            <span>🔥 {workout.caloriesBurned} kcal</span>
            <span>⭐ {workout.rating}</span>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default WorkoutCard;
