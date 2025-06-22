import * as React from 'react'
import { cn } from '../utils'

export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  function Radio({ className, ...props }, ref) {
    return (
      <input
        type="radio"
        ref={ref}
        className={cn(
          'h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500',
          className,
        )}
        {...props}
      />
    )
  },
)
