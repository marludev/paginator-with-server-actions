"use client";

import { Character, Characters } from "@/types/character";
import React from "react";
import List from "./List";

const Paginator = ({
  children,
  action,
}: {
  children: JSX.Element;
  action: (page: number) => Promise<Characters>;
}) => {
  const [items, setItems] = React.useState<Character[]>([]);
  const [loading, setLoading] = React.useState(false);

  const page = React.useRef(2);

  const getItems = React.useCallback(() => {
    setLoading(true);
    return action(page.current)
      .then((item) => {
        setItems((Characters) => [...Characters, ...item.results]);
        page.current += 1;
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [page, action]);

  return (
    <>
      {children}
      {items && <List characters={items} />}
      <div className="col-span-12 flex justify-center">
        <button
          onClick={getItems}
          className="px-4 py-2 border border-green-600 my-4 rounded-md"
          disabled={loading}
        >
          {loading ? "Loading..." : "Load More"}
        </button>
      </div>
    </>
  );
};

export default Paginator;
