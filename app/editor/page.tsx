'use client'

import { useAppStore } from "@/store/useAppStore";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import DocsButton from "./_components/ui/docs-button";
import FrontEditor from "./_components/front-editor";
import DatabaseEditor from "./_components/database-editor";
import WebbyButton from "./_components/ui/webby-button";


const Editor = () => {
  const { app, curService, chooseService } = useAppStore()

  if (curService !== -1) {
    // redirect(`/editor/${app.services[curService].type}`)
    switch (app.services[curService].type) {
      case 'front':
        return <FrontEditor />
      case 'database':
        return <DatabaseEditor />
      case 'back':
        return <p>back</p>
    }
  }

  return <>
    <Content />
    <Menu />
  </>
}

const Content = () => {
  const { app, chooseService } = useAppStore()

  return <>
    <div className="m-48 flex">
      <div className="bg-card rounded-lg border">
        {
          app.services.map((service, index) => (
            <p
              key={index}
              className="mx-3 p-1 rounded-lg hover:bg-accent"
              onClick={() => chooseService(index)}
            >{service.name}</p>
          ))
        }
      </div>
    </div>
  </>
}


const Menu = () => {
  const { app } = useAppStore()

  return <>
    <div className="fixed top-0 left-0 m-3">
      <div className="flex gap-1 py-1 px-3 bg-card border rounded-lg w-[180px]">
        <WebbyButton />
        <div className="px-2 py-1">
          {app.name}
        </div>
      </div>
    </div>

    <div className="fixed flex gap-3 top-0 right-0 m-3">
      <Button className="w-20" variant="outline">Share</Button>
    </div>

    <div className="fixed bottom-0 right-0 m-3">
      <DocsButton />
    </div>
  </>
}


export default Editor