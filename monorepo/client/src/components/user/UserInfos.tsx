interface UserInfos {
  name: string;
  email: string;
}
export function UserInfos({ email }: UserInfos) {
  return (
    <section className="border-2 rounded-2xl border-main-border overflow-hidden">
      <div className="sticky-blur h-15 flex items-center justify-center">
        <h3 className="gradient-title text-[1.5rem] bg-clip-text bg-linear-to-r/hsl from-[rgba(0, 0, 0, 0.55)] to-amber-500">
          Tes infos
        </h3>
        <div className="gradient-border bg-gradient-to-r from-transparent via-main-border to-transparent" />
      </div>
      <div className=" flex flex-col gap-3 p-5">
        <p className=" text-gray-500">Email : {email}</p>
        <p className=" text-gray-500">prenom : {email}</p>
        <p className=" text-gray-500">nom : {email}</p>
        <p className=" text-gray-500">pseudo : {email}</p>
      </div>
    </section>
  );
}
