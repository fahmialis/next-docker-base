'use client';

import { useAtom } from 'jotai';
import { useIsFetching, useIsMutating } from '@tanstack/react-query';
import { loadingAtom } from '../app/store/loadingAtom';

export default function LoadingIndicator() {
  const [isLoading] = useAtom(loadingAtom);
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();

  const shouldShowLoading = isLoading || isFetching > 0 || isMutating > 0;

  if (!shouldShowLoading) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50">
      <div className="text-white text-xl">Loading...</div>
    </div>
  );
}
