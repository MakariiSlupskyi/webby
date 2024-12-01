import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AppCreation() {
  return (
    <div className="container h-screen py-12">
      <div className="flex h-full gap-12">
        <section className="flex flex-col flex-grow">
          <p className="text-2xl mb-8 font-medium">Create a new app</p>
          <p className="m-2">App name</p>
          <p className="m-2">Description</p>
          <p className="text-2xl mb-8">Design system</p>
          <p className="m-2">Color palette</p>
          <p className="m-2">Border radius</p>
          <p className="m-2">Style</p>
          <Link href='./editor' className="ml-auto mt-auto">
            <Button>Create app</Button>
          </Link>
        </section>
        <section className="flex flex-col flex-grow">
          <p className="text-2xl mb-8">Demo</p>
          <div className="flex flex-grow border rounded-xl" />
        </section>
      </div>
    </div>
  )
}