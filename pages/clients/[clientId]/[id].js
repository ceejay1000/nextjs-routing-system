import { useRouter } from "next/router";
const ClientProjectPage = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>Client Project</h1>
    </div>
  );
};

export default ClientProjectPage;
