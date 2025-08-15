import React from "react";

export default async function DashboardDetail({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  return <div>DashboardDetail {id}</div>;
}
