import React from 'react';

export default function PageFooter(props: {
  leftButton?: React.ReactNode;
  rightButton?: React.ReactNode;
}) {
  return (
    <div className="h-16 bg-amber-800 flex items-center justify-between p-2.5">
      <div className="flex justify-start">
        {props?.leftButton ? props?.leftButton : null}
      </div>
      <div className="flex justify-end">
        {props?.rightButton ? props?.rightButton : null}
      </div>
    </div>
  );
}
