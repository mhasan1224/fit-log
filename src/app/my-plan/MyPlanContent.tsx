"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import WorkoutCard from "@/components/Workout/WorkoutCard";
import { useFitLog } from "@/providers/FitLogProvider";
import { IWorkout } from "@/types/workout.type";

interface MyPlanContentProps {
  workouts: IWorkout[];
}

const MyPlanContent = ({ workouts }: MyPlanContentProps) => {
  const { plannedWorkouts, savedWorkouts } = useFitLog();
  const searchParams = useSearchParams();

  const tabParam = searchParams.get("tab");

  const [sortBy, setSortBy] = useState<
    "duration" | "calories" | "difficulty"
  >("duration");

  const activeTab: "today" | "saved" =
    tabParam === "saved" ? "saved" : "today";

  const currentWorkoutIds =
    activeTab === "today" ? plannedWorkouts : savedWorkouts;

  const currentWorkouts = useMemo(() => {
    return currentWorkoutIds
      .map((id) => workouts.find((workout) => workout.id === id))
      .filter((workout): workout is IWorkout => Boolean(workout));
  }, [currentWorkoutIds, workouts]);

  const totalMinutes = currentWorkouts.reduce(
    (total, workout) => total + workout.duration,
    0,
  );

  const totalCalories = currentWorkouts.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0,
  );

  const sortedWorkouts = [...currentWorkouts].sort((a, b) => {
    if (sortBy === "duration") {
      return a.duration - b.duration;
    }

    if (sortBy === "calories") {
      return a.caloriesBurned - b.caloriesBurned;
    }

    const difficultyOrder = {
      Beginner: 1,
      Intermediate: 2,
      Advanced: 3,
    };

    return (
      difficultyOrder[a.difficulty as keyof typeof difficultyOrder] -
      difficultyOrder[b.difficulty as keyof typeof difficultyOrder]
    );
  });

  return (
    <main className="min-h-screen bg-[#0e1015] px-4 py-8 text-white sm:px-8 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8">
          <h1 className="font-oswald text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl">
            MY PLAN
          </h1>

          <p className="mt-1 text-sm text-gray-400">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </header>

        <div className="grid grid-cols-3 rounded-2xl border border-white/5 bg-[#14171f] p-6 text-left shadow-lg">
          <div className="pr-4">
            <p className="text-xs font-medium text-gray-400">Exercises</p>

            <p className="mt-2 font-oswald text-3xl font-bold text-[#ccff00]">
              {currentWorkouts.length}
            </p>
          </div>

          <div className="border-l border-white/5 px-6">
            <p className="text-xs font-medium text-gray-400">Minutes</p>

            <p className="mt-2 font-oswald text-3xl font-bold text-white">
              {totalMinutes}
            </p>
          </div>

          <div className="border-l border-white/5 pl-6">
            <p className="text-xs font-medium text-gray-400">Calories</p>

            <p className="mt-2 font-oswald text-3xl font-bold text-white">
              {totalCalories}
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <div className="inline-flex rounded-xl border border-white/5 bg-[#14171f] p-1">
            <Link
              href="/my-plan?tab=plan"
              className={`rounded-lg px-5 py-2 text-xs font-semibold transition-colors ${
                activeTab === "today"
                  ? "bg-[#1f2430] text-[#ccff00]"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Today&apos;s Plan
            </Link>

            <Link
              href="/my-plan?tab=saved"
              className={`rounded-lg px-5 py-2 text-xs font-semibold transition-colors ${
                activeTab === "saved"
                  ? "bg-[#1f2430] text-[#ccff00]"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Saved
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-gray-400">
              Sort By
            </span>

            <select
              value={sortBy}
              onChange={(event) =>
                setSortBy(
                  event.target.value as
                    | "duration"
                    | "calories"
                    | "difficulty",
                )
              }
              className="select select-sm w-36 rounded-xl border border-white/10 bg-[#14171f] text-xs font-medium text-white focus:border-[#ccff00] focus:outline-none"
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="difficulty">Difficulty</option>
            </select>
          </div>
        </div>

        <div className="mt-6 space-y-5">
          {sortedWorkouts.length > 0 ? (
            sortedWorkouts.map((workout) => (
              <WorkoutCard
                key={workout.id}
                workout={workout}
                variant={activeTab === "today" ? "plan" : "saved"}
              />
            ))
          ) : (
            <div className="rounded-2xl border border-white/5 bg-[#14171f] px-6 py-14 text-center">
              <h2 className="font-oswald text-2xl font-bold uppercase tracking-wide text-white">
                NOTHING HERE YET
              </h2>

              <p className="mx-auto mt-2 max-w-md text-sm text-gray-400">
                Browse the library and add a lift to get today moving.
              </p>

              <Link
                href="/"
                className="mt-5 inline-flex rounded-xl bg-[#ccff00] px-5 py-2.5 text-xs font-bold text-black transition hover:bg-[#b8e600]"
              >
                Go to workouts
              </Link>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default MyPlanContent;