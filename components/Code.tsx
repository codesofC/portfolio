import { cn } from "@/lib/utils"
import { PropsWithChildren } from "react"


const Code = (props: PropsWithChildren<{className?: string}>) => {
  return (
    <span className={cn(props.className, "inline-flex items-center gap-1 bg-accent/30 font-mono border border-accent p-1 rounded-sm")}>
       { props.children } 
    </span>
  )
}

export default Code