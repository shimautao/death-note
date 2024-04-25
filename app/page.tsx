'use client'

import Form from "@/components/form"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useSearchParams } from "next/navigation"


export default function Home() {
  const searchParams = useSearchParams()
  const targets = searchParams.get('targets')?.split(',')
  const isBlank = !targets || targets.length === 0

  if (isBlank) {
    return (
      <Form />
    )
  }

  return (
    <>
      <Button variant="outline" asChild>
        <Link href="/">リセット</Link>
      </Button>
      <div className="[perspective:1000px] group">
        <div className="w-80 group group-hover:[transform:translateX(50%)_rotateX(40deg)] transition duration-1000 aspect-[3/4] [transform-style:preserve-3d] [transform:rotateX(40deg)] relative">
          <div className="absolute origin-left transition duration-1000 group-hover:[transform:rotateY(-160deg)] inset-0 bg-zinc-800 text-white font-bold p-6 text-3xl text-center pt-20 [transform-style:preserve-3d]">
            <span className="[transform:translateZ(1px)] absolute inset-0 bg-zinc-800"></span>
            <h1 className="[transform:translateZ(1px)]">DEATH NOTE</h1>
          </div>
          <div className="absolute w-5 bg-zinc-800 inset-y-0 left-0 origin-left [transform:rotateY(90deg)]"></div>
          <div className="bg-white p-6 text-zinc-900 [transform-style:preserve-3d] border absolute inset-y-4 left-0 right-4 [transform:translateZ(-1px)]">
            <ul>
              {targets.map((target) => (
                <li key={target}>{target}</li>
              ))}
            </ul>
            <div className="w-full [transform:rotateX(90deg)] origin-bottom h-5 bg-white border absolute bottom-0 inset-x-0"></div>
          </div>
          <div className="absolute [transform:translateZ(-20px)] inset-0 bg-zinc-800 text-white font-bold p-6 text-3xl">back</div>
        </div>
      </div>
    </>
  )
}
