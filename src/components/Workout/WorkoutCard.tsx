"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { toast } from "react-toastify";
import { IWorkout } from "@/types/workout.type";
import { useFitLog } from "@/providers/FitLogProvider";

interface WorkoutCardProps {
  workout: IWorkout;
  variant?: "library" | "plan" | "saved";
}

const WorkoutCard = ({
  workout,
  variant = "library",
}: WorkoutCardProps) => {
  const {
    removeFromPlan,
    removeFromSaved,
    markAsDone,
    completedWorkouts,
  } = useFitLog();

  const isCompleted = completedWorkouts.includes(workout.id);

  const handleRemove = () => {
    if (variant === "plan") {
      removeFromPlan(workout.id);
      toast.success(`${workout.name} removed from your plan.`);
    }

    if (variant === "saved") {
      removeFromSaved(workout.id);
      toast.success(`${workout.name} removed from saved workouts.`);
    }
  };

  const handleMarkAsDone = () => {
    markAsDone(workout.id);
    toast.success(`${workout.name} marked as done.`);
  };

  if (variant === "plan" || variant === "saved") {
    return (
      <article className="overflow-hidden rounded-2xl border border-white/10 bg-[#1b1e25]">
        <div className="flex flex-col md:flex-row">
          <div className="relative h-56 w-full shrink-0 bg-[#222630] md:h-auto md:min-h-64 md:w-64">
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              sizes="(max-width: 768px) 100vw, 256px"
              className="object-cover"
            />
          </div>

          <div className="flex min-w-0 flex-1 flex-col justify-between gap-6 p-5 sm:p-6 md:flex-row md:items-center">
            <div className="min-w-0">
              <div className="flex flex-wrap gap-2">
                {workout.muscleGroups.map((muscle) => (
                  <span
                    key={muscle}
                    className="rounded-full border border-[#ccff00]/30 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#ccff00]"
                  >
                    {muscle}
                  </span>
                ))}
              </div>

              <h2 className="mt-4 font-oswald text-2xl uppercase tracking-wide text-white">
                {workout.name}
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                {workout.equipment}
              </p>

              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm">
                <div className="flex items-center gap-2 text-gray-400">
                  <span>◷</span>
                  <span>{workout.duration} min</span>
                </div>

                <div className="flex items-center gap-2 text-gray-400">
                  <span>🔥</span>
                  <span>{workout.caloriesBurned} kcal</span>
                </div>

                <div className="flex items-center gap-2 text-[#ccff00]">
                  <span>★</span>
                  <span>{workout.rating}</span>
                </div>
              </div>
            </div>

            <div className="flex w-full shrink-0 flex-col gap-3 sm:flex-row md:w-auto md:flex-col lg:flex-row">
              <Link
                href={`/workout/${workout.id}`}
                className="flex items-center justify-center rounded-xl border border-white/15 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/5"
              >
                View Details
              </Link>

              {variant === "plan" && !isCompleted && (
                <button
                  type="button"
                  onClick={handleMarkAsDone}
                  className="flex items-center justify-center gap-2 rounded-xl bg-[#ccff00] px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-[#b8e600]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>

                  Mark as Done
                </button>
              )}

              <button
                type="button"
                onClick={handleRemove}
                aria-label={`Remove ${workout.name}`}
                className="flex h-10 w-full items-center justify-center rounded-xl border border-white/10 text-xl text-gray-500 transition hover:border-red-400/30 hover:text-red-400 sm:w-10"
              >
                ×
              </button>
            </div>
          </div>
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