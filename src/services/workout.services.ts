import { IWorkout } from "@/types/workout.type";

const getWorkouts = async (): Promise<IWorkout[]> => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");

  if (!res.ok) {
    throw new Error("Failed to fetch workouts");
  }

  const data = await res.json();

  return data;
};

export const getWorkoutById = async (
  id: string,
): Promise<IWorkout | undefined> => {
  const workouts = await getWorkouts();

  return workouts.find((workout) => workout.id === Number(id));
};

export default getWorkouts;