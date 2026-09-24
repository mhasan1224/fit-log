import Image from "next/image";
import Link from "next/link";
import { IWorkout } from "@/types/workout.type";

interface WorkoutCardProps {
  workout: IWorkout;
}

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  return (
    <Link
      href={`/workout/${workout.id}`}
      className="group block overflow-hidden rounded-2xl border border-white/10 bg-[#1b1e25] transition duration-300 hover:-translate-y-1 hover:border-[#ccff00]/40"
    >
      <div className="relative aspect-4/3 overflow-hidden bg-[#222630]">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-5">
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

        <h3 className="mt-4 font-oswald text-2xl uppercase tracking-wide text-white">
          {workout.name}
        </h3>

        <p className="mt-2 text-sm text-gray-400">
          {workout.equipment}
        </p>

        <div className="mt-5 grid grid-cols-3 border-t border-white/10 pt-4">
          <div>
            <p className="text-xs text-gray-500">Duration</p>
            <p className="mt-1 text-sm font-semibold text-white">
              {workout.duration} min
            </p>
          </div>

          <div className="border-x border-white/10 px-3">
            <p className="text-xs text-gray-500">Calories</p>
            <p className="mt-1 text-sm font-semibold text-white">
              {workout.caloriesBurned} kcal
            </p>
          </div>

          <div className="pl-3">
            <p className="text-xs text-gray-500">Rating</p>
            <p className="mt-1 text-sm font-semibold text-[#ccff00]">
              ★ {workout.rating}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;