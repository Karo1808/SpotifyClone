import { SongAPI } from "@/types";
import usePlayer from "./usePlayer";
import useAuthModal from "./useAuthModal";
import { useUser } from "./useUser";
import useSubscribeModal from "./useSubscribeModal";

const useOnPlay = (songs: SongAPI) => {
  const player = usePlayer();
  const authModal = useAuthModal();
  const { user, subscription } = useUser();
  const subscribeModal = useSubscribeModal();

  const onPlay = (url: string) => {
    if (!user) {
      return authModal.onOpen();
    }

    if (!subscription) return subscribeModal.onOpen();

    player.setUrl(String(url));
    player.setUrls(songs.data.map((song) => String(song.id)));
  };

  return onPlay;
};

export default useOnPlay;
