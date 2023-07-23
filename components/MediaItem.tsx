"use client";

import useLoadImage from "@/hooks/useLoadImage";
import usePlayer from "@/hooks/usePlayer";
import { Song, SongAPI, SongData } from "@/types";
import withPlaiceholder from "@plaiceholder/next";
import { encode } from "blurhash";
import Image from "next/image";

interface MediaItemProps {
  data: SongData;
  onClick?: (url: string) => void;
}

const MediaItem = ({ data, onClick }: MediaItemProps) => {
  const player = usePlayer();

  const handleClick = () => {
    if (onClick) {
      return onClick(data.link);
    }

    return player.setUrl(data.link);
  };

  return (
    <div
      onClick={handleClick}
      className="flex items-center gap-x-3 cursor-pointer hover:bg-neutral-800/50 w-full p-2 rounded-md"
    >
      <div className="relative rounded-md min-h-[48px] min-w-[48px] overflow-hidden">
        <Image
          alt="Media Item"
          className="object-cover"
          fill
          src={data.album.cover || "/image/liked.png"}
        />
      </div>
      <div className="flex flex-col gap-y-1 overflow-hidden">
        <p className="text-white truncate">{data.title}</p>
        <p className="text-neutral-400 text-sm truncate">{data.artist.name}</p>
      </div>
    </div>
  );
};

export default MediaItem;
