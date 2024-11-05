import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar'
import { ChevronDown } from 'lucide-react'

const menuData = {
  productManagement: {
    title: '상품관리',
    items: [
      {
        title: '일반상품',
        items: ['상품 조회', '상품 등록/수정', '상품 일괄 등록', '상품 일괄 수정'],
      },
      {
        title: '부티크',
        items: ['가격 계산 그룹 관리', '기본 가격 계산 그룹 설정', '브랜드 매칭'],
      },
      {
        title: '상품분류',
        items: [
          '카테고리',
          '브랜드',
          '색상',
          '소재',
          '패턴/형태',
          '사이즈',
          '제조국',
          '성별',
          '교환/반품',
          '사은품',
          '사은품 조회',
        ],
      },
    ],
  },
}

export default function NavigationBar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex flex-col items-center gap-2">
          <div className="h-20 w-20 rounded-full border border-black"></div>
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton>
                    Select Workspace
                    <ChevronDown className="ml-auto" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[--radix-popper-anchor-width]">
                  <DropdownMenuItem>
                    <span>Acme Inc</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Acme Corp.</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
          <Input placeholder="Search..." />
        </div>
      </SidebarHeader>
      <SidebarContent>
        {Object.entries(menuData).map(([key, section]) => (
          <SidebarGroup key={key}>
            <SidebarGroupLabel className='text-lg'>{section.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {section.items.map((group, index) => (
                  <Collapsible key={index}>
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton className="w-full justify-between">
                          {group.title}
                          <ChevronDown className="h-4 w-4" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {group.items.map((item, itemIndex) => (
                            <SidebarMenuSubItem key={itemIndex}>
                              <SidebarMenuSubButton asChild>
                                <a href="#">{item}</a>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  )
}
