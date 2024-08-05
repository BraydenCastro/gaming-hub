
import useData from "./usedData";

export interface Platform{
    id:number;
    name:string;
    slug: string;

}

export interface Games{
    id: number,
    name: string;
    background_image:string;
    parent_platform: {platform: Platform}[];
    metaCritic:number
 }
 
 
const useGames = () => useData<Games>('/games');



export default useGames 