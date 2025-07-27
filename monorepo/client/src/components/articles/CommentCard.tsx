interface CommentProps {
  id: number;
  user_name: string;
  text: string;
  creation_date: Date;
}

export function CommentCard({
  id,
  user_name,
  text,
  creation_date,
}: CommentProps) {
  const prettyDate = creation_date.toLocaleString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <div
      key={id}
      className=" max-w-[60%] px-2 py-1 card-border bg-main-theme/70"
    >
      <h3 className="text-[1.2rem] w-fit font-bold bg-linear-to-r/hsl from-[rgba(0, 0, 0, 0.10)] to-amber-800 bg-clip-text text-transparent">
        {user_name}
      </h3>
      <p className="">{text}</p>
      <p className="text-right text-[11px] text-black">{prettyDate}</p>
    </div>
  );
}
