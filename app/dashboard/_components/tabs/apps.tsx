import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AppsTab() {
  const apps = [
    'Test',
    'E-Pastuh',
    'E-Pastuh',
    'E-Pastuh',
    'E-Pastuh',
    'E-Pastuh',
    'E-Pastuh',
    'E-Pastuh',
  ]

  function renderApp(title: string) {
    return (
      <Link key={title} href='./editor'>
      <div className="relative flex flex-col flex-shrink-0 w-[300px] h-[160px] rounded-lg bg-card border">
        <div className="absolute top-0 z-0 w-full h-full bg-gradient-to-t from-primary to-card opacity-0 hover:opacity-10 transition-all duration-300" />
        <div className="flex items-center justify-between py-4 px-6">
          <span className="text-xl">{title}</span>
          <div className="w-4 h-4 bg-primary rounded-full" />
        </div>
      </div>
      </Link>
    )
  }

  return (
    <>
      <div className="flex w-full mb-8 items-center justify-between">
        <h1 className="text-2xl font-medium">Apps</h1>
        <Link href='./app-creation'>
          <Button>Create a new app</Button>
        </Link>
      </div>
      <div className="flex flex-wrap gap-4">
        {apps.map((app) => renderApp(app))}
      </div>
    </>
  )
}