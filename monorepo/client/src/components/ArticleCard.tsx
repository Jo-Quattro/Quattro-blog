interface ArticleProp {
  title: string;
  preview_img: string;
}

export function ArticleCard({ title, preview_img }: ArticleProp) {
  console.info(preview_img);
  return (
    <figure
      className="w-80 h-70 flex flex-col border rounded-2xl
               border-mainBorder shadow shadow-mainBorder 
                overflow-hidden hover:scale-105 transition 
                delay-50 duration-300 ease-in-out active:scale-95"
    >
      <img
        src={preview_img}
        alt={`Image de l'article : ${title}`}
        className="object-cover h-[80%]"
      />
      <figcaption className="self-center text-center px-2 py-1 font-semibold">
        {title}
      </figcaption>
    </figure>
  );
}
