import { Montserrat_Alternates } from "next/font/google";
import { Check } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Link from "next/link";

const montserratAlternates = Montserrat_Alternates({
  subsets: ['latin'],
  weight: ['400'],
});


export default function Home() {

  const pros = [
    'Code export',
    'New-gen UI editor',
    'Database + Auth',
    'AI support'
  ]

  return (
    <>
      <section className="w-full backdrop-blur-sm bg-background/80 fixed">
        <div className="container flex justify-between my-4">
          <div className="flex items-center gap-2">
            <img className="mr-16" src="/webby-text-logo.svg" alt="webby logo" />
            <Button variant={"ghost"}>Product</Button>
            <Button variant={"ghost"}>Pricing</Button>
            <Link href='./docs'>
              <Button variant={"ghost"}>Docs</Button>
            </Link>
          </div>
          <Link href="/dashboard">
            <Button>Try Webby</Button>
          </Link>
        </div>
      </section>
      <section className="container flex items-center mx-auto">
        <div className="flex flex-col items-start mt-48 gap-9">
          <h1 className={`${montserratAlternates.className} text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight`}>
            <span className="font-bold">Build</span> fast<br />
            <span className="font-bold">Customize</span> fully<br />
            <span className="font-bold">Launch</span> anywhere
          </h1>
          <h2 className="text-2xl font-extralight">The first fully customizable full-stack no-code<br />web app builder</h2>
          <div className="ml-4">
            {pros.map((p, index) => (
              <div className='flex gap-2 mb-2' key={index}>
                <Check className="text-primary" />
                <p className="font-extralight">{p}</p>
              </div>
            ))}
          </div>

          <Link href="/dashboard">
            <Button className="text-xl hover:shadow-lg hover:shadow-primary/30 hover:translate-y-[-3px] transition-all duration-300" size={"lg"}>Build your idea now</Button>
          </Link>
        </div>
      </section>
      <section className="container min-h-screen flex items-center max-w-7xl mx-auto"></section>
    </>
  );
}
