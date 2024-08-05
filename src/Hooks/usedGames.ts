
import useData from "./useData";
import { Genre } from "./usedGenres";

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
 
 
const useGames = (selectedGenre: Genre | null) => useData<Games>('/games',{params: {genres: selectedGenre?.id}});



export default useGames 