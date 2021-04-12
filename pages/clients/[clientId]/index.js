import { useRouter } from "next/router";
const ClientProjects = () => {
  const router = useRouter();
  console.log(router.query);

  function loadProjectHandler() {
    router.push({
      pathname: "/clients/[clientId]/[Id]",
      query: { clientId: "client-3456", Id: "87009" },
    });
  }

  return (
    <div>
      <h1>Client Projects</h1>
      <button onClick={loadProjectHandler}>Load Project</button>
    </div>
  );
};

export default ClientProjects;
