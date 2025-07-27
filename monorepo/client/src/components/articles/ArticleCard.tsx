interface ArticleProp {
  title: string;
  preview_img: string;
  username?: string;
}

export function ArticleCard({ title, preview_img, username }: ArticleProp) {
  return (
    <figure
      className="relative card-border w-80 h-90 flex flex-col 
                overflow-hidden hover:scale-102 transition 
                delay-50 duration-300 ease-in-out active:scale-95"
    >
      <img
        src={preview_img}
        alt={`Image de l'article : ${title}`}
        className="object-cover h-[75%] card-border rounded-none border-none"
      />
      <figcaption className="text-center px-2 py-1 font-semibold">
        {title}

        {username ? (
          <p className="absolute bottom-0 w-full text-right pr-4 text-[13px] text-gray-500">
            Par {username}
          </p>
        ) : (
          ""
        )}
      </figcaption>
    </figure>
  );
}
