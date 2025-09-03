import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '../../ui/breadcrumb';

export default function PageBreadcrumb(props: { paths: string[] }) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {props?.paths?.map((path, index) => {
          const href = '/' + props?.paths.slice(0, index + 1).join('/');
          const label = path
            .replace(/-/g, ' ')
            .replace(/\b\w/g, (c) => c.toUpperCase());

          return (
            <React.Fragment key={href}>
              <BreadcrumbItem>
                <BreadcrumbLink href={href}>{label}</BreadcrumbLink>
              </BreadcrumbItem>
              {index !== props?.paths.length - 1 && <BreadcrumbSeparator />}
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
