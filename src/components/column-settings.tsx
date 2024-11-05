'use client'

import * as React from "react"
import { Settings, ChevronRight, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ColumnSettings() {
  const [availableColumns, setAvailableColumns] = React.useState([
    "부티크 상품번호",
    "부티크 종류",
    "상품 썸네일 이미지",
    "부티크 상세 링크",
    "엘칭크 상세 링크",
    "장가",
    "판매가",
    "유료 공급가",
    "재고수량",
    "네이버 최저가 가능 여부",
    "입점 마케팅 해당 여부",
    "등록일",
    "수정일",
    "성별",
    "색상",
    "카테고리"
  ])

  const [selectedColumns, setSelectedColumns] = React.useState([
    "브랜드",
    "엘칭크 상품번호",
    "상품기본코드",
    "모델명",
    "오프마켓 상품명",
    "엘칭크 상품명",
    "승인여부",
    "옵션"
  ])

  const [selected, setSelected] = React.useState<string[]>([])

  const moveToSelected = () => {
    const newAvailable = availableColumns.filter(item => !selected.includes(item))
    const newSelected = [...selectedColumns, ...selected]
    setAvailableColumns(newAvailable)
    setSelectedColumns(newSelected)
    setSelected([])
  }

  const moveToAvailable = () => {
    const newSelected = selectedColumns.filter(item => !selected.includes(item))
    const newAvailable = [...availableColumns, ...selected]
    setSelectedColumns(newSelected)
    setAvailableColumns(newAvailable)
    setSelected([])
  }

  return (
    <Card className="mt-4">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>다운로드 컬럼 설정</CardTitle>
        <Button variant="outline" size="icon">
          <Settings className="h-4 w-4" />
          <span className="sr-only">컬럼 양식 관리</span>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="flex gap-4">
          <div className="flex-1 space-y-2">
            <div className="font-medium">다운로드 가능한 컬럼 전체</div>
            <ScrollArea className="h-[400px] border rounded-md">
              <div className="p-2">
                {availableColumns.map((column) => (
                  <div
                    key={column}
                    className={`px-2 py-1 rounded cursor-pointer ${
                      selected.includes(column) ? "bg-muted" : ""
                    }`}
                    onClick={() => {
                      if (selected.includes(column)) {
                        setSelected(selected.filter((item) => item !== column))
                      } else {
                        setSelected([...selected, column])
                      }
                    }}
                  >
                    {column}
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>

          <div className="flex flex-col gap-2 justify-center">
            <Button
              variant="outline"
              size="icon"
              onClick={moveToSelected}
              disabled={selected.length === 0}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={moveToAvailable}
              disabled={selected.length === 0}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex-1 space-y-2">
            <div className="font-medium">선택한 컬럼</div>
            <ScrollArea className="h-[400px] border rounded-md">
              <div className="p-2">
                {selectedColumns.map((column) => (
                  <div
                    key={column}
                    className={`px-2 py-1 rounded cursor-pointer ${
                      selected.includes(column) ? "bg-muted" : ""
                    }`}
                    onClick={() => {
                      if (selected.includes(column)) {
                        setSelected(selected.filter((item) => item !== column))
                      } else {
                        setSelected([...selected, column])
                      }
                    }}
                  >
                    {column}
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
        </div>

        <div className="text-sm text-muted-foreground mt-4 space-y-1">
          <p>* 각 컬럼 순서는 드래그 앤 드롭으로 조정 가능합니다</p>
          <p>* '필수옵션' 컬럼 추가시, 추가되는 컬럼은 다음과 같습니다 :</p>
          <p className="ml-2">: 옵션명, 옵션값, 옵션재고, 옵션정가, 옵션판매가, 옵션전시여부, 옵션단위</p>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          <Button>저장</Button>
          <Button variant="outline">닫기</Button>
        </div>
      </CardContent>
    </Card>
  )
}