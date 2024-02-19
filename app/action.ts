"use server";

import { AnimeProp } from "@/components/AnimeCard";

export const fetchAnime = async (page: number): Promise<AnimeProp[]> => {
  const res = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=8&order=id_desc`
  );
  const data = await res.json();
  // console.log("🚀 ~ fetchAnime ~ data:", data);
  return data;
};
