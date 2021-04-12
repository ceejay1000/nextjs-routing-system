import Link from "next/link";

const Clients = () => {
  return (
    <div>
      <h1>Clients</h1>
      <ul>
        <li>
          <Link href="/clients/bossman">Bossman</Link>
        </li>
        <li>
          <Link href="/clients/pinnaman">Pinnaman</Link>
        </li>
        <li>
          <Link
            href={{
              pathname: "/clients/[clientId]",
              query: { clientId: "Boyson" },
            }}
          >
            Using Objects In href
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Clients;
