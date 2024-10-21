import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import React from 'react'
const titlerStyles = cva('text-white', {
  variants: {
    size: {
      sm: 'text-4xl',
      lg: '~text-6xl/9xl text-center',
    },
    maxWidth: {
      sm: 'max-w-3xl',
      lg: 'max-w-6xl',
    }
  },
  defaultVariants: {
    size: 'lg',
  },
})
type DivProps = React.HTMLAttributes<HTMLDivElement>
export type titlerProps = DivProps & VariantProps<typeof titlerStyles>
const Title = ({ content, maxWidth ,size }: titlerProps) => {
  return (
    
    <h1 className={cn(titlerStyles({ size, maxWidth }))}>{content}</h1>
  )
}
export { Title }