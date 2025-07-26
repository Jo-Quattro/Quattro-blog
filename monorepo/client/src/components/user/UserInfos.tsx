interface UserInfos {
  name: string;
  email: string;
}
export function UserInfos({ name, email }: UserInfos) {
  return (
    <section className="border-2 p-3 rounded-2xl border-mainBorder">
      <h3 className="gradient-title w-full m-auto text-[1.5rem]">Tes infos</h3>
      <p className=" text-gray-500">Email : {email}</p>
    </section>
  );
}
