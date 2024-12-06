'use client'

import { Button } from "@/components/ui/button"
import BackButton from "./ui/back-button"
import DocsButton from "./ui/docs-button"
import { WorkingArea, WorkingAreaContentProps } from "./working-area"


const DatabaseEditor = () => {
  return <>
    <WorkingArea content={Canvas} />
    <FrontMenu />
  </>
}

const Canvas = (props: WorkingAreaContentProps) => {
  let title = 'Hello'

  return (
    <>
      <p
        style={{
          transform: `translate(${props.position.x - props.size.w / 2 * props.scale}px, ${props.position.y - props.size.h / 2 * props.scale}px)`,
        }}
        className="text-muted-foreground"
      >{title}</p>
      <div
        style={{
          width: `${props.size.w}px`,
          height: `${props.size.h}px`,
          transform: `translate(${props.position.x - props.size.w / 2}px, ${props.position.y - props.size.h / 2}px) scale(${props.scale})`,
        }}
        className="bg-white rounded-md"
      >
        <p className="text-black p-3">bebebe</p>
      </div>
    </>
  )
}



const FrontMenu = () => {
  return <>
    <div className="fixed flex gap-3 top-0 left-0 m-3">
      <div className="bg-background border rounded-lg w-[180px]">
        <div className="bg-card rounded-t-lg border-b px-2 py-1">
          Untitled
        </div>
        <div className="h-12">Hello</div>
      </div>
      <BackButton />
    </div>

    <div className="fixed flex gap-3 top-0 right-0 m-3">
      <Button className="w-20" variant="outline">Share</Button>
      <Button className="w-20">Run</Button>
    </div>
    
    <div className="fixed bottom-0 right-0 m-3">
      <DocsButton />
    </div>

  </>
}

export default DatabaseEditor