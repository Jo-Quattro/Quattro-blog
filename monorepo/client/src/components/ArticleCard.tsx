interface ArticleProp {
  title: string;
}

export function ArticleCard({ title }: ArticleProp) {
  return (
    <figure className="w-80 h-70 flex flex-col border rounded-2xl border-mainBorder shadow shadow-mainBorder overflow-hidden hover:scale-105 transition delay-50 duration-300 ease-in-out active:scale-95">
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="temp"
        className="object-fit h-[80%]"
      />
      <figcaption className="self-center text-center px-2 py-1 font-semibold">
        {title}
      </figcaption>
    </figure>
  );
}
