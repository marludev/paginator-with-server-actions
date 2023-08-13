import { Character } from "@/types/character";
import Image from "next/image";

const List = ({ characters }: { characters: Character[] }) => {
  return (
    <>
      {characters.map((character) => (
        <div
          className="md:col-span-4 sm:col-span-6 col-span-12 lg:col-span-3 p-4 border border-green-600 flex flex-col rounded-md"
          key={character.id}
        >
          <Image
            className="h-full w-full"
            src={character.image}
            alt={character.name}
            width={300}
            height={100}
          />
          <div className="mt-2">
            <h2 className="text-center text-xl font-bold">{character.name}</h2>
          </div>
        </div>
      ))}
    </>
  );
};

export default List;
