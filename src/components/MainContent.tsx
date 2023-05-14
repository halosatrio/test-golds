import React, { useState, useEffect } from "react";

// Define a type for a character
interface ICharacter {
  id: number;
  name: string;
  species: string;
  image: string;
}

// Define a type for the API response
interface IApiResponse {
  results: ICharacter[];
}

const MainContent: React.FC = () => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);
  const [isLoadMoreError, setIsLoadMoreError] = useState<boolean>(false);

  useEffect(() => {
    fetchCharacters(page, false);
  }, []); // Empty dependency array means this effect runs once on mount

  const fetchCharacters = async (page: number, isLoadMore: boolean) => {
    try {
      if (isLoadMore) {
        setIsLoadingMore(true);
        setIsLoadMoreError(false);
      } else {
        setIsLoading(true);
        setIsError(false);
      }

      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const data: IApiResponse = await response.json();

      setCharacters((prevCharacters) => [...prevCharacters, ...data.results]);

      if (isLoadMore) {
        setIsLoadingMore(false);
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      if (isLoadMore) {
        setIsLoadingMore(false);
        setIsLoadMoreError(true);
      } else {
        setIsLoading(false);
        setIsError(true);
      }
    }
  };

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
    fetchCharacters(page + 1, true);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>An error occurred while fetching characters.</p>;
  }

  return (
    <main className="max-w-6xl m-auto grid grid-cols-3 gap-4 p-4 overflow-auto">
      {characters.map((character) => (
        <div key={character.id} className="my-4">
          <img className="mx-auto" src={character.image} alt={character.name} />
          <h2 className="text-center">{character.name}</h2>
          <p className="text-center">{character.species}</p>
        </div>
      ))}
      <div className="col-start-1 col-span-3 flex justify-center">
        {isLoadingMore ? (
          <p>Loading more characters...</p>
        ) : isLoadMoreError ? (
          <p>An error occurred while fetching more characters.</p>
        ) : (
          <button
            className="px-8 py-1.5 text-sm font-bold rounded-md text-white bg-red-700"
            onClick={loadMore}
          >
            Load More
          </button>
        )}
      </div>
    </main>
  );
};

export default MainContent;
