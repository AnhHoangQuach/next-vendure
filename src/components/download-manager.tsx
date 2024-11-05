import ColumnSettings from '@/components/column-settings'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Download } from 'lucide-react'

export default function DownloadManager() {
  return (
    <div className="space-y-6 mt-4">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">상품 목록 일괄 다운로드</h2>

        <div className="space-y-4">
          <RadioGroup defaultValue="selected" className="flex items-center gap-6">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="all" id="all" />
              <Label htmlFor="all">검색 상품 전체(144,448개)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="selected" id="selected" />
              <Label htmlFor="selected">선택 상품(5개)</Label>
            </div>
          </RadioGroup>

          <div className="space-y-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">필터 설정</Button>
              </DialogTrigger>
              <DialogContent className="max-w-fit">
                <ColumnSettings />
              </DialogContent>
            </Dialog>

            <Button className="w-full bg-gray-100 hover:bg-gray-200 text-black">
              <Download className="mr-2 h-4 w-4" />
              다운로드
            </Button>

            <p className="text-sm text-gray-500">
              1000개 이상의 상품 다운로드 시도시, 엑셀 파일 생성 시간이 다소 소요되며 하단 다운로드
              내역에서 다운로드 가능합니다.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div className="font-medium">다운로드 내역</div>
          <div>
            <Select defaultValue="10">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10">10개</SelectItem>
                <SelectItem value="20">20개</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>번호</TableHead>
              <TableHead>요청일시</TableHead>
              <TableHead>요청자</TableHead>
              <TableHead>상품 범위</TableHead>
              <TableHead>상품 건수</TableHead>
              <TableHead>상태</TableHead>
              <TableHead>완료일시</TableHead>
              <TableHead>다운로드</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>3</TableCell>
              <TableCell>2024-10-04 11:17:09</TableCell>
              <TableCell>관리자1</TableCell>
              <TableCell>선택</TableCell>
              <TableCell>1001</TableCell>
              <TableCell>완료</TableCell>
              <TableCell>2024-10-04 11:17:09</TableCell>
              <TableCell>
                <Button variant="secondary" size="sm">
                  다운로드
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2</TableCell>
              <TableCell>2024-10-04 11:17:09</TableCell>
              <TableCell>관리자1</TableCell>
              <TableCell>전체</TableCell>
              <TableCell>144,448</TableCell>
              <TableCell>진행중</TableCell>
              <TableCell>
                <span className="text-gray-500">(예상 소요시간: 00:32:09)</span>
              </TableCell>
              <TableCell>
                <span className="text-gray-500">(예상 소요시간: 00:32:09)</span>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>2024-10-02 11:17:09</TableCell>
              <TableCell>관리자1</TableCell>
              <TableCell>전체</TableCell>
              <TableCell>144,448</TableCell>
              <TableCell>완료</TableCell>
              <TableCell>2024-10-02 11:17:09</TableCell>
              <TableCell>
                <Button variant="secondary" size="sm">
                  다운로드 기한 만료
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((page) => (
              <PaginationItem key={page}>
                <PaginationLink href="#" isActive={page === 1}>
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}
