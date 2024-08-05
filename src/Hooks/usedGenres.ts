
import useData from "./usedData";

export interface Genre{
    image_background: string;
    id: number;
    name:string;
}

const useGenre = () => useData<Genre>('/genres');
export default  useGenre