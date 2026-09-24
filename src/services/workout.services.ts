import { IWorkout } from "@/types/workout.type"



const getWorksout = async (): Promise<IWorkout[]> => {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
    const data = await res.json();
    return data;
};


export default getWorksout;