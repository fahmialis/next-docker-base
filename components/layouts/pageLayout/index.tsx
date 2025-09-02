import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { usePathname } from 'next/navigation';
export default function PageLayout(props: {
  readonly children: React.ReactNode;
}) {
  const pathname = usePathname();

  function findBreadcrumb(): React.ReactNode {
    const segments = pathname.split('/').filter(Boolean);

    return (
      <Breadcrumb>
        <BreadcrumbList>
          {segments.map((segment, index) => {
            const href = '/' + segments.slice(0, index + 1).join('/');
            const label = segment
              .replace(/-/g, ' ')
              .replace(/\b\w/g, (c) => c.toUpperCase());

            return (
              <React.Fragment key={href}>
                <BreadcrumbItem>
                  <BreadcrumbLink href={href}>{label}</BreadcrumbLink>
                </BreadcrumbItem>
                {index !== segments.length - 1 && <BreadcrumbSeparator />}
              </React.Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    );
  }
  return (
    <div className="flex">
      <div>sidebar</div>
      <div>
        <div>{findBreadcrumb()}</div>
        {props?.children}
      </div>
    </div>
  );
}
