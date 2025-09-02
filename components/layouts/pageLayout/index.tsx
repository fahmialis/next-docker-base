'use client';
import React, { useEffect } from 'react';

import { Button } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import {
  ChevronsUpDown,
  Home,
  LogOut,
  Menu,
  Settings,
  Users,
} from 'lucide-react';

interface MenuItem {
  href: string;
  label: string;
  icon?: unknown;
  children?: MenuItem[];
}

const navItems: MenuItem[] = [
  { href: '/dashboard', label: 'Dashboard', icon: Home },
  { href: '/users', label: 'Users', icon: Users },
  {
    href: '/settings',
    label: 'Settings',
    icon: Settings,
    children: [
      {
        href: '/settings/profile',
        label: 'Profile',
        children: [
          { href: '/settings/profile', label: 'Profile' },
          { href: '/settings/account', label: 'Account' },
        ],
      },
      { href: '/settings/account', label: 'Account' },
    ],
  },
];

export default function PageLayout(props: {
  readonly children: React.ReactNode;
  footer?: React.ReactNode;
  breadCrumb?: React.ReactNode;
}) {
  const [showSidebar, setShowSidebar] = React.useState(false);

  useEffect(() => {
    if (window.innerWidth > 1024) {
      setShowSidebar(true);
    }
  }, []);

  function renderNavItem(item: MenuItem, index: number): React.ReactNode {
    const hasChildren = item?.children && item.children.length > 0;

    if (hasChildren) {
      return (
        <Collapsible key={index}>
          <div className="flex items-center justify-between gap-4 px-4 py-1">
            <CollapsibleTrigger asChild>
              <nav className="flex gap-1 items-center justify-between w-full">
                <h4 className="text-sm font-semibold">{item?.label}</h4>
                <Button variant="ghost" size="icon" className="size-8">
                  <ChevronsUpDown />
                  <span className="sr-only">Toggle</span>
                </Button>
              </nav>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent>
            <div className="!ml-6 space-y-1 w-full">
              {item?.children?.length &&
                item?.children.map((child: MenuItem, childIndex: number) =>
                  renderNavItem(child, childIndex)
                )}
            </div>
          </CollapsibleContent>
        </Collapsible>
      );
    }

    return (
      <div key={index}>
        <h4 className="text-sm font-semibold px-4 py-1">{item?.label}</h4>
      </div>
    );
  }

  function sideBar(): React.ReactNode {
    return navItems?.map((navItem, index) => renderNavItem(navItem, index));
  }

  function header(): React.ReactNode {
    return (
      <header className="flex justify-between items-center bg-amber-200 !py-2.5">
        <Button onClick={() => setShowSidebar(!showSidebar)} variant={'ghost'}>
          <Menu />
        </Button>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel className="flex items-center gap-2 !p-4 justify-end">
                Logout <LogOut size={16} />
              </DropdownMenuLabel>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
    );
  }

  const sideBarClassname = `${showSidebar ? 'w-1/6' : 'w-0'} flex flex-col transition-all duration-300 ease-in-out overflow-hidden bg-red-200`;

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <div className="flex-shrink-0">{header()}</div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar (fixed height, scrollable if needed) */}
        <div className={`${sideBarClassname} flex-shrink-0 overflow-y-auto`}>
          {showSidebar ? sideBar() : <div></div>}
        </div>

        {/* Main Content (scrolls independently) */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {props?.breadCrumb ? (
            <div className="flex-shrink-0">{props?.breadCrumb}</div>
          ) : null}

          <div className="flex-1 overflow-y-auto">{props?.children}</div>

          {props?.footer ? props?.footer : null}
        </div>
      </div>
    </div>
  );
}
