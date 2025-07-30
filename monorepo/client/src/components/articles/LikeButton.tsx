import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";

interface LikeButtonProps {
  articleID: number;
  className?: string;
}

export function LikeButton({ articleID, className }: LikeButtonProps) {
  const baseURL = import.meta.env.VITE_API_URL;
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const baseClass = "flex items-center gap-2 w-fit";

  const fetchLikeStatus = async () => {
    const res = await fetch(`${baseURL}/api/article/${articleID}/like`, {
      credentials: "include",
    });
    const data = await res.json();
    setLiked(data.liked);
  };

  const fetchLikeCount = async () => {
    const res = await fetch(`${baseURL}/api/article/${articleID}/likes-count`);
    const data = await res.json();
    setLikeCount(data.count);
  };

  useEffect(() => {
    fetchLikeStatus();
    fetchLikeCount();
  }, [articleID]);

  const toggleLike = async () => {
    const res = await fetch(`${baseURL}/api/article/${articleID}/like`, {
      method: "POST",
      credentials: "include",
    });
    const data = await res.json();
    setLiked(data.liked);
    fetchLikeCount();
  };

  return (
    <button onClick={toggleLike} className={`${baseClass} ${className ?? ""}`}>
      <FaHeart
        className={` ${
          liked ? "text-red-500" : "text-black"
        }`}
      />
      <span>{likeCount}</span>
    </button>
  );
}