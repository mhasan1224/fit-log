import getWorkouts from "@/services/workout.services";
import WorkoutCard from "./WorkoutCard";

const WorkoutSection = async () => {
  const workouts = await getWorkouts();

  return (
    <section id="workouts" className="container mx-auto px-4 py-16">
      <div className="mb-10 text-center">
        <h2 className="font-oswald text-4xl uppercase tracking-wide text-white">
          THE LIBRARY
        </h2>
        <p className="mt-3 text-gray-400">
          Twelve lifts covering every major muscle group.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {workouts.map((workout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
    </section>
  );
};

export default WorkoutSection;
