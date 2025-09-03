'use client';

import { AppSidebar } from '@/components/layouts/sidebar/app-sidebar';
import { Separator } from '@/components/ui/separator';
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { usePathname } from 'next/navigation';
import React from 'react';
import PageBreadcrumb from './breadcrumb';
import PageFooter from './footer';

export default function PageLayout(props: {
  readonly children: React.ReactNode;
  footer?: React.ReactElement<typeof PageFooter>;
  breadCrumb?: React.ReactElement<typeof PageBreadcrumb>;
}) {
  const url = usePathname();
  return (
    <div className="relative flex flex-col h-screen overflow-hidden">
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 w-full bg-gray-50 border-b border-gray-300">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator
                orientation="vertical"
                className="mr-2 data-[orientation=vertical]:h-4"
              />
              <PageBreadcrumb paths={url?.split('/')?.filter(Boolean)} />
            </div>
          </header>

          <div className="flex-1 overflow-y-auto flex flex-col gap-4">
            <div className="p-4">{props?.children}</div>
          </div>

          {props?.footer ? (
            <div className="absolute bottom-0 w-full">{props?.footer}</div>
          ) : null}
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
