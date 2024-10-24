import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import React from 'react'
import { Button as ShadcnButton } from "@/components/ui/button"
const buttonStyles = cva('text-white', {
  variants: {
    variant: {
      default: 'border rounded-lg px-2 py-2 w-fit ~text-xs/lg',
      gradient: 'rounded-lg bg-gradient-to-r from-[#933FFE] to-[#18C8F0] ~px-1/4 h-fit w-fit ~text-xs/xl',
      iconButton: 'items-center space-x-2 p-0 text-lg text-purple-800'
    }
  },
  defaultVariants: {
    variant: 'default',
  },
})

type DivProps = React.HTMLAttributes<HTMLDivElement>
export type buttoneProps = DivProps & VariantProps<typeof buttonStyles>
const Button = ({ children, variant}: buttoneProps) => {
  return (
    <ShadcnButton className={cn(buttonStyles({ variant }), 'text-white')}>{children}</ShadcnButton>
  )
}
export { Button }