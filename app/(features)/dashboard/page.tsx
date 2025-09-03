'use client';

import PageLayout from '@/components/layouts/pageLayout';
import { dashboardApiHooks } from './_api';
import UserCard from './_components/userCard';
import { usePathname } from 'next/navigation';
import PageBreadcrumb from '@/components/layouts/pageLayout/breadcrumb';
import PageFooter from '@/components/layouts/pageLayout/footer';
import { Button } from '@/components/ui/button';

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
          // leftButton={'test left'}
          rightButton={
            <div className="flex items-center gap-2">
              <Button variant={'secondary'}>test</Button>
              <Button>test</Button>
              <Button>test</Button>
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
