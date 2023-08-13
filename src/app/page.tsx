import List from "@/components/List";
import Paginator from "@/components/Paginator";
import { Characters } from "@/types/character";

const getData = async (page = 1): Promise<Characters> => {
  const api = "https://rickandmortyapi.com/api";
  const res = await fetch(`${api}/character/?page=${page}`);
  return res.json();
};

const loadMore = async (page: number) => {
  "use server";
  return getData(page);
};

export default async function Home() {
  const characters = await getData(1);
  return (
    <div className="grid grid-cols-12 min-h-screen gap-4">
      <Paginator action={loadMore}>
        <List characters={characters.results} />
      </Paginator>
    </div>
  );
}
