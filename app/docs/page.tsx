import Link from "next/link";
import { Montserrat_Alternates } from "next/font/google";

const montserratAlternates = Montserrat_Alternates({
  subsets: ['latin'],
  weight: ['700'],
});

export default function Editor() {
  return <div className="container">
    <section className="flex justify-between items-center my-4 mb-12">
      <div className="flex items-center gap-3">
        <Link href={'.'}>
          <img src="/webby-text-logo.svg" alt="webby logo" />
        </Link>
        <p className={`${montserratAlternates.className} text-xl`}>docs</p>
      </div>
    </section>
    <section>
      Hello
    </section>
  </div>
}