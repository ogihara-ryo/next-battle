import { useRouter } from "next/router";

export const NewGameButton = () => {
  const router = useRouter();

  const newGame = async () => {
    fetch("/api/games", {
      method: "POST",
      body: JSON.stringify({ serealNumber: "12345678" }),
    })
      .then((res) => res.json())
      .then((data) => router.push(`games/${data.serealNumber}`));
  };

  return <button onClick={newGame}>NewGame</button>;
};
