import { useRouter } from "next/router";

const PortfolioProjectPage = () => {
  const router = useRouter();
  console.log(router.asPath);
  return (
    <div>
      <h1>Sub Portfoflio</h1>
    </div>
  );
};

export default PortfolioProjectPage;
