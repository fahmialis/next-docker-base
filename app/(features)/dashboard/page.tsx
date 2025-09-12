'use client';

import PageLayout from '@/components/layouts/pageLayout';
import PageBreadcrumb from '@/components/layouts/pageLayout/breadcrumb';
import PageFooter from '@/components/layouts/pageLayout/footer';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import { dashboardApiHooks } from './_api';
import UserCard from './_components/userCard';

export default function DashboardPage() {
  const pathname = usePathname();

  const { data } = dashboardApiHooks.useGetUserList({});

  return (
    <PageLayout
      breadCrumb={
        <PageBreadcrumb paths={pathname.split('/')?.filter(Boolean)} />
      }
      footer={
        <PageFooter
          rightButton={
            <div className="flex items-center gap-2">
              <Button variant={'secondary'}>secondary button</Button>
              <Button>main button</Button>
            </div>
          }
        />
      }
    >
      <h1 className="text-red-800 text-7xl">DashboardPage</h1>
      <div>
        {data?.results?.map((user) => (
          <UserCard key={user.name}>{user.name}</UserCard>
        ))}
      </div>
    </PageLayout>
  );
}
