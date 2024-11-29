import { Button } from "@/components/ui/button";
import { Montserrat_Alternates } from "next/font/google";
import { Check } from 'lucide-react';

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
      <header className="w-full fixed">
        <div className="flex justify-between m-6 mx-12">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-primary"></div>
            <p className={`text-2xl ${montserratAlternates.className}`}>webby</p>
          </div>
          <div className="flex gap-2">
            <Button variant={"ghost"}>Product</Button>
            <Button variant={"ghost"}>Pricing</Button>
            <Button variant={"ghost"}>Docs</Button>
          <Button>Start now</Button>
          </div>
        </div>
        </header>
      <section className="container min-h-screen flex items-center max-w-7xl mx-auto">
        <div className="flex flex-col items-start gap-9">
          <h1 className={`${montserratAlternates.className} text-7xl lg:text-6xl xl:text-8xl font-bold tracking-tight`}>
            <span className="font-bold">Build</span> fast<br />
            <span className="font-bold">Customize</span> fully<br />
            <span className="font-bold">Launch</span> anywhere
          </h1>
          <h2 className="text-2xl font-extralight">The first fully customizable full-stack no-code<br/>web app builder</h2>
          <div className="ml-4">
            {pros.map((p, index) => (
              <div className='flex gap-2 mb-2' key={index}>
                <Check className="text-primary" />
                <p className="font-extralight">{p}</p>
              </div>
            ))}
          </div>

          <Button className="text-xl" size={"lg"}>Build your idea now</Button>
        </div>
      </section>
    </>
  );
}
