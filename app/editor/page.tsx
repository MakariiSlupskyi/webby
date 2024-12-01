import { Button } from "@/components/ui/button"
import { CircleHelp } from "lucide-react"
import Link from "next/link"

export default function Editor() {
  return <>
    <div className="h-screen w-screen">
      kill me
    </div>
    {Menu()}
  </>
}

function Menu() {
  return <>
    {MainMenubar()}
    <div className="fixed top-0 right-0 m-3">
      <Button variant="outline">
        Share
      </Button>
    </div>
    <div className="fixed bottom-0 right-0 m-8">
      <Link href='./docs'>
        <div className="flex items-center w-8 h-8 bg-card border rounded-full">
          <p className="m-auto">?</p>
        </div>
      </Link>
    </div>

  </>
}

function MainMenubar() {
  return (
    <div className="fixed top-0 left-0 m-3">
      <div className="border rounded-lg w-[180px]">
        <div className="bg-card rounded-t-lg border-b px-2 py-1">
          Untitled
        </div>
        <div className="h-12"></div>
      </div>
    </div>
  )
}