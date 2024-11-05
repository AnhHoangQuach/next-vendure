import { Button } from '@/components/ui/button'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { ArrowLeft } from 'lucide-react'

export default function Header() {
  return (
    <header className="flex h-14 items-center gap-4 border-b bg-gray-100/40 px-4">
      <SidebarTrigger />
      <Button variant="ghost" size="icon">
        <ArrowLeft className="h-4 w-4" />
      </Button>
      <span className="font-semibold">상품 조회</span>
    </header>
  )
}
