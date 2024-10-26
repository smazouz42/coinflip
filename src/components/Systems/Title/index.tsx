import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import React from 'react'
const titlerStyles = cva('text-white text-center font-bold', {
  variants: {
    size: {
      sm: '~text-lg/6xl',
      lg: '~text-2xl/9xl ',

    },
    maxWidth: {
      sm: '~max-w-xs/4xl',
      lg: '~max-w-sm/6xl',
    }

  },
  defaultVariants: {
    size: 'lg',
  },
})
type DivProps = React.HTMLAttributes<HTMLDivElement>
export type titlerProps = DivProps & VariantProps<typeof titlerStyles>
const Title = ({ content, maxWidth ,size, className }: titlerProps) => {
  return (
    <h1 className={cn(titlerStyles({ size, maxWidth }), className)}>{content}</h1>
  )
}
export { Title }