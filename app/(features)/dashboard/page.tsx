"use client";

import { dashboardApiHooks } from "./_api";
import UserCard from "./_components/userCard";

export default function DashboardPage() {
  const { data } = dashboardApiHooks.useGetUserList({});

  return (
    <div>
      <h1 className="text-red-800 text-7xl">DashboardPage</h1>
      {data?.results?.map((user) => (
        <UserCard key={user.name}>{user.name}</UserCard>
      ))}
    </div>
  );
}
