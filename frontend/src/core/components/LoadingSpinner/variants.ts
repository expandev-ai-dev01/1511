import { clsx } from 'clsx';
import type { LoadingSpinnerProps } from './types';

export function getLoadingSpinnerClassName(props: LoadingSpinnerProps): string {
  const { size = 'md', className } = props;

  return clsx(
    'animate-spin rounded-full border-t-2 border-b-2 border-primary-600',
    {
      'h-8 w-8': size === 'sm',
      'h-12 w-12': size === 'md',
      'h-16 w-16': size === 'lg',
    },
    className
  );
}
