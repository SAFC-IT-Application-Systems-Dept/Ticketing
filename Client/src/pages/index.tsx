import { LoginFormBlock, PublicLayout } from "@/components";

export default function Home() {
  return (
    <>
      <LoginFormBlock />
    </>
  );
}

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <PublicLayout>{page}</PublicLayout>;
};
