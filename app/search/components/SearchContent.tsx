"use client";

import {
  AlbumAPI,
  ArtistAPI,
  GenreAPI,
  Song,
  SongAPI,
  SongData,
} from "@/types";
import MediaItem from "@/components/MediaItem";
import LikeButton from "@/components/LikeButton";
import useOnPlay from "@/hooks/useOnPlay";

interface SearchContentProps {
  results: SongAPI;
}

const SearchContent: React.FC<SearchContentProps> = ({ results }) => {
  const onPlay = useOnPlay(results);
  if (!results?.data?.length) {
    return (
      <div
        className="
        flex 
          flex-col 
          gap-y-2 
          w-full 
          px-6 
          text-neutral-400
        "
      >
        No songs found.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-y-2 w-full px-6">
      {results.data.map((song) => (
        <div key={song.id} className="flex items-center gap-x-4 w-full">
          <div className="flex-1">
            <MediaItem
              onClick={(url: string) => onPlay(song.link)}
              data={song}
            />
          </div>
          <LikeButton songId={song.id} />
        </div>
      ))}
    </div>
  );
};

export default SearchContent;
