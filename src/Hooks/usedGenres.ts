
import useData from "./useData";

export interface Genre{
    image_background: string;
    id: number;
    name:string;
}

const useGenre = () => useData<Genre>('/genres');
export default  useGenre