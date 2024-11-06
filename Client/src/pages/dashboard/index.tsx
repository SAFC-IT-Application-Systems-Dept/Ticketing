import { PrivateLayout, DashboardBlock } from "@/components";
import React from "react";

export default function index() {
  return (
    <>
      <DashboardBlock />
    </>
  );
}

index.isPrivate = true;

index.getLayout = function getLayout(page: React.ReactElement) {
  return <PrivateLayout pageTitle="Dashboard">{page}</PrivateLayout>;
};
