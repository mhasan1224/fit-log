import getWorkouts from "@/services/workout.services";
import MyPlanContent from "@/app/my-plan/MyPlanContent";

const MyPlanPage = async () => {
  const workouts = await getWorkouts();

  return <MyPlanContent workouts={workouts} />;
};

export default MyPlanPage;