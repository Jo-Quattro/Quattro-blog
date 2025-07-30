import { Link } from "react-router";
import { LikeButton } from "./LikeButton";

interface ArticleProp {
  title: string;
  preview_img: string;
  username?: string;
  articleID: number;
}

export function ArticleCard({
  title,
  preview_img,
  username,
  articleID,
}: ArticleProp) {
  return (
    <figure
      className="relative card-border w-80 h-90 flex flex-col 
                overflow-hidden hover:scale-102 transition 
                delay-50 duration-300 ease-in-out"
    >
      <Link
        to={`/article/${articleID}`}
        className="h-[75%] w-[100%] card-border rounded-none border-none "
      >
        <img
          src={preview_img}
          alt={`Image de l'article : ${title}`}
          className="object-cover h-[100%] w-[100%] transition 
                delay-50 duration-300 ease-in-out hover:scale-200"
        />
      </Link>
      <LikeButton articleID={articleID} className="absolute bottom-1 left-2 w-fit" />
      <figcaption className="text-center px-2 py-1 font-semibold">
        {title}

        {username ? (
          <p className="absolute bottom-1 right-0 w-fit text-right pr-4 text-[13px] text-gray-500">
            Par {username}
          </p>
        ) : (
          ""
        )}
      </figcaption>
    </figure>
  );
}
