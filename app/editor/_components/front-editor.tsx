'use client'

import { Button } from "@/components/ui/button"
import BackButton from "./ui/back-button"
import DocsButton from "./ui/docs-button"
import { WorkingArea, WorkingAreaContentProps } from "./working-area"
import WebbyButton from "./ui/webby-button"
import { useAppStore } from "@/store/useAppStore"
import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"


const FrontEditor = () => {
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
        className="bg-white flex flex-col items-center justify-center rounded-md"
      >
        <p className="text-black p-3">Some text</p>
        <div className="bg-slate-400 hover:bg-slate-500 m-3 rounded-lg py-1 px-2">Click me</div>
      </div>
    </>
  )
}



const FrontMenu = () => {
  const { app } = useAppStore()
  const [mainSize, setMainSize] = useState<number>(180)
  const [settingsIsOpened, setSettingsIsOpened] = useState<boolean>(false)
  const [componentsIsOpened, setComponentsIsOpened] = useState<boolean>(false)
  const [treeIsOpened, setTreeIsOpened] = useState<boolean>(false)

  return <>
    <div className="fixed flex gap-3 items-start top-0 left-0 ml-3 py-3" style={{ height: treeIsOpened ? '100%' : '' }}>
      <div className='bg-background border rounded-lg' style={{ width: mainSize, height: treeIsOpened ? '100%' : '' }}>
        <div className="flex gap-1 py-1 px-3 bg-card border-b rounded-t-lg">
          <WebbyButton />
          <div className="px-2 py-1">
            {app.name}
          </div>
        </div>
        <div className="flex items-center justify-between m-1 px-2 py-1 rounded hover:bg-accent transition-colors" onClick={() => setSettingsIsOpened(!settingsIsOpened)}>
          <span>Settings</span>
          {settingsIsOpened
            ? <ChevronUp size='16px' className="text-muted-foreground" />
            : <ChevronDown size='16px' className="text-muted-foreground" />
          }
        </div>
        {settingsIsOpened && <div className="ml-3"><Button variant="ghost" size="sm">Edit theme</Button></div>}

        <div className="flex items-center justify-between m-1 px-2 py-1 rounded hover:bg-accent transition-colors" onClick={() => setComponentsIsOpened(!componentsIsOpened)}>
          <span>Components</span>
          {componentsIsOpened
            ? <ChevronUp size='16px' className="text-muted-foreground" />
            : <ChevronDown size='16px' className="text-muted-foreground" />
          }
        </div>
        {componentsIsOpened && <Components />}

        <div className="flex items-center justify-between m-1 px-2 py-1 rounded hover:bg-accent transition-colors" onClick={() => setTreeIsOpened(!treeIsOpened)}>
          <span>Tree</span>
          {treeIsOpened
            ? <ChevronUp size='16px' className="text-muted-foreground" />
            : <ChevronDown size='16px' className="text-muted-foreground" />
          }
        </div>
        {treeIsOpened && <Tree />}
      </div>
    </div>
    <div className='fixed top-0 left-0 h-full mt-3' style={{ marginLeft: mainSize + 24 }}>
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

const Components = () => {
  return <>
    E
  </>
}

const Tree = () => {
  return <div className="m-3">
    ...
  </div>
}

export default FrontEditor