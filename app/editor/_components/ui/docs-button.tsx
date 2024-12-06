import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"

const DocsButton = (path: any) => {
  return (
    <Link href='/docs'>
      <div className="flex items-center w-10 h-10 bg-card border rounded-full">
        <p className="m-auto text-xl">?</p>
      </div>
    </Link>
  )
}

export default DocsButton