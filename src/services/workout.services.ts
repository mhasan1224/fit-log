import { IWorkout } from "@/types/workout.type";

const API_URL = "https://api.api-store.workers.dev/api/fitlog";

const getWorkouts = async (): Promise<IWorkout[]> => {
  const res = await fetch(API_URL);

  if (!res.ok) {
    throw new Error("Failed to fetch workouts");
  }

  const data = await res.json();

  return data;
};

export const getWorkoutById = async (
  id: string,
): Promise<IWorkout | undefined> => {
  const res = await fetch(`${API_URL}/${id}`);

  if (res.status === 404) {
    return undefined;
  }

  if (!res.ok) {
    throw new Error("Failed to fetch workout");
  }

  const data = await res.json();

  return data;
};

export default getWorkouts;