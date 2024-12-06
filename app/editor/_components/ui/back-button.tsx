import { Button } from "@/components/ui/button"
import { useAppStore } from "@/store/useAppStore"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"

const BackButton = () => {
  const { chooseService } = useAppStore();

  return (
    <Button onClick={() => chooseService(-1)} size="icon" variant="outline"><ChevronLeft className="text-card-foreground" /></Button>
  )
}

export default BackButton