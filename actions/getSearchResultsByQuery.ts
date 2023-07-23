import { SongAPI } from "@/types";

const getSearchResultByQuery = async (query: string): Promise<SongAPI> => {
  if (!query || query?.length < 3) return { data: [], next: "", total: 0 };
  try {
    const BASE_URL = "https://api.deezer.com";

    const res = await fetch(`${BASE_URL}/search?q=${query}`);

    if (!res.ok) throw new Error("Something went wrong!");

    const data = await res.json();
    return (data as any) || [];
  } catch (error) {
    console.log(error);
    throw new Error((error as Error).message);
  }
};
export default getSearchResultByQuery;
