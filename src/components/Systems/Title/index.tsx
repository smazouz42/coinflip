import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import React from 'react'
const titlerStyles = cva('text-white font-bold', {
  variants: {
    size: {
      sm: '~text-lg/6xl',
      lg: '~text-2xl/9xl ~leading-[1.5rem]/[8rem]',

    },
    maxWidth: {
      sm: '~max-w-xs/4xl',
      lg: '~max-w-sm/6xl',
    },
    position: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },

  },
  defaultVariants: {
    size: 'lg',
    position: 'center'
    
  },
})
type DivProps = React.HTMLAttributes<HTMLDivElement>
export type titlerProps = DivProps & VariantProps<typeof titlerStyles>
const Title = ({ content, maxWidth, size, position ,className }: titlerProps) => {
  return (
    <h1 className={cn(titlerStyles({ size, maxWidth, position }), className)}>{content}</h1>
  )
}
export { Title }