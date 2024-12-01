import Link from "next/link";


export default function Header() {
  return (
    <section className="flex justify-between items-center my-4 mb-12 xl:mx-auto">
      <div className="flex items-center gap-8">
        <Link href={'.'}>
          <img src="/webby-text-logo.svg" alt="webby logo" />
        </Link>
        <p className="text-2xl">/</p>
        <p>Dashboard</p>
      </div>
      <div className="flex items-center gap-8">
        <p className="text-muted-foreground">? Docs</p>
        <div className="w-8 h-8 rounded-full bg-primary" />
      </div>

    </section>
  )
}