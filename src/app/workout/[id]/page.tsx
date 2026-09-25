import Image from "next/image";
import Link from "next/link";
import { getWorkoutById } from "@/services/workout.services";
import WorkoutActions from "@/components/Workout/WorkoutActions";

interface WorkoutDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const WorkoutDetailsPage = async ({ params }: WorkoutDetailsPageProps) => {
  const paramsData = await params;
  const id = paramsData.id;

  const workout = await getWorkoutById(id);

  if (!workout) {
    return (
      <main className="container mx-auto px-4 py-20">
        <h1 className="font-oswald text-4xl uppercase text-white">
          Workout Not Found
        </h1>

        <Link
          href="/"
          className="mt-6 inline-block rounded-full bg-[#ccff00] px-6 py-3 font-semibold text-gray-900"
        >
          Back to Library
        </Link>
      </main>
    );
  }

 return (
    <main className="container mx-auto px-4 py-12 lg:py-16">
      <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch">
        <div className="relative min-h-100 w-full overflow-hidden rounded-3xl bg-[#1b1e25] lg:h-full">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
            className="object-cover"
          />
        </div>

        {/* Right - Content */}
        <div className="flex flex-col justify-between space-y-6">
          <div>
            {/* Title & Description */}
            <h1 className="font-oswald text-4xl uppercase tracking-wide text-white sm:text-5xl">
              {workout.name}
            </h1>
            <p className="mt-3 leading-relaxed text-white">
              {workout.description}
            </p>

            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {workout.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="rounded-full bg-[#ccff00] px-3 py-1 text-xs font-semibold text-black"
                >
                  {muscle}
                </span>
              ))}
            </div>

            {/* Specs List */}
            <div className="mt-6 divide-y divide-white/5 rounded-2xl bg-[#13151a] px-6 py-1">
              <div className="flex items-center justify-between py-3">
                <span className="text-xs font-medium uppercase tracking-wider text-white">
                  Equipment
                </span>
                <span className="text-sm font-medium text-white">
                  {workout.equipment}
                </span>
              </div>

              <div className="flex items-center justify-between py-3">
                <span className="text-xs font-medium uppercase tracking-wider text-white">
                  Difficulty
                </span>
                <span className="text-sm font-medium text-white">
                  {workout.difficulty}
                </span>
              </div>

              <div className="flex items-center justify-between py-3">
                <span className="text-xs font-medium uppercase tracking-wider text-white">
                  Sets
                </span>
                <span className="text-sm font-medium text-white">
                  {workout.sets}
                </span>
              </div>

              <div className="flex items-center justify-between py-3">
                <span className="text-xs font-medium uppercase tracking-wider text-white">
                  Reps
                </span>
                <span className="text-sm font-medium text-white">
                  {workout.reps}
                </span>
              </div>

              <div className="flex items-center justify-between py-3">
                <span className="text-xs font-medium uppercase tracking-wider text-white">
                  Duration
                </span>
                <span className="text-sm font-medium text-white">
                  {workout.duration} min
                </span>
              </div>

              <div className="flex items-center justify-between py-3">
                <span className="text-xs font-medium uppercase tracking-wider text-white">
                  Calories
                </span>
                <span className="text-sm font-medium text-white">
                  {workout.caloriesBurned} kcal
                </span>
              </div>

              <div className="flex items-center justify-between py-3">
                <span className="text-xs font-medium uppercase tracking-wider text-white">
                  Rating
                </span>
                <span className="text-sm font-medium text-white">
                  {workout.rating}
                </span>
              </div>
            </div>

            {/* Instructions */}
            <section className="mt-6">
              <h2 className="font-oswald text-xl uppercase tracking-wide text-white">
                Instructions
              </h2>

              <ol className="mt-3 space-y-2 text-sm leading-relaxed text-gray-300">
                {workout.instructions.map((instruction, index) => (
                  <li key={index} className="flex gap-2">
                    <span className="shrink-0 text-white">{index + 1}.</span>
                    <span>{instruction}</span>
                  </li>
                ))}
              </ol>
            </section>
          </div>

          {/* Action Buttons */}

          <WorkoutActions workoutId={workout.id} />
        </div>

      </div>
    </main>
  );
};

export default WorkoutDetailsPage;
