import React from "react";

export default function UserCard(props: { children: React.ReactNode }) {
  return (
    <div className="flex items-center bg-red-500 w-[100px] h-[100px] my-[100px]">
      {props?.children}
    </div>
  );
}
