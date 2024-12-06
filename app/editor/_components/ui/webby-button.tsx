import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { redirect } from "next/navigation"

const WebbyButton = () => {
  return <DropdownMenu>
  <DropdownMenuTrigger><img src='./webby.svg' /></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem onClick={() => redirect('/dashboard')}>Back to apps</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Export</DropdownMenuItem>
    <DropdownMenuItem>File</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
}

export default WebbyButton