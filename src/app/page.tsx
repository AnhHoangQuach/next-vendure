'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
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
import { Box, Clock, PackageMinus, PackagePlus, RefreshCw, Search } from 'lucide-react'
import * as React from 'react'

export default function Component() {
  return (
    <div className="grid gap-4 p-4">
      <div className="grid gap-2">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
          <StatsCard icon={Box} label="전체" value="50000건" />
          <StatsCard icon={PackagePlus} label="판매중" value="50000건" />
          <StatsCard icon={Clock} label="승인대기" value="50000건" />
          <StatsCard icon={PackageMinus} label="판매중지" value="50000건" />
          <StatsCard icon={PackageMinus} label="판매중지" value="50000건" />
        </div>
      </div>
      <div className="rounded-lg border shadow-sm">
        <div className="p-6">
          <div className="space-y-4">
            <div className="flex items-center gap-6">
              <Label>검색어</Label>
              <div className="flex items-center gap-6">
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="all">전체</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Input placeholder="Search..." />
              </div>
            </div>
            <div className="flex items-center gap-6">
              <Label>판매상태</Label>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  전체
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  전체
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  전체
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  전체
                </label>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <Label>브랜드</Label>
              <div className="flex items-center gap-6">
                <Select defaultValue="gucci">
                  <SelectTrigger>
                    <SelectValue placeholder="Select brand" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="gucci">GUCCI, PRADA, HERM... 3개</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Select defaultValue="gucci">
                  <SelectTrigger>
                    <SelectValue placeholder="Select brand" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="gucci">GUCCI, PRADA, HERM... 3개</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Select defaultValue="gucci">
                  <SelectTrigger>
                    <SelectValue placeholder="Select brand" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="gucci">GUCCI, PRADA, HERM... 3개</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <hr />
            <div className="flex items-center gap-6">
              <Label>검색어</Label>
              <div className="flex items-center gap-6">
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="all">전체</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Input placeholder="Search..." />
              </div>
            </div>
            <div className="flex items-center gap-6">
              <Label>판매상태</Label>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  전체
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  전체
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  전체
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  전체
                </label>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <Label>브랜드</Label>
              <div className="flex items-center gap-6">
                <Select defaultValue="gucci">
                  <SelectTrigger>
                    <SelectValue placeholder="Select brand" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="gucci">GUCCI, PRADA, HERM... 3개</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Select defaultValue="gucci">
                  <SelectTrigger>
                    <SelectValue placeholder="Select brand" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="gucci">GUCCI, PRADA, HERM... 3개</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Select defaultValue="gucci">
                  <SelectTrigger>
                    <SelectValue placeholder="Select brand" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="gucci">GUCCI, PRADA, HERM... 3개</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 p-6">
          <Button className="ml-auto">
            <Search className="mr-2 h-4 w-4" />
            검색
          </Button>
          <Button variant="outline">
            <RefreshCw className="mr-2 h-4 w-4" />
            초기화
          </Button>
        </div>
      </div>
      <div className="rounded-lg border shadow-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">
                <Checkbox />
              </TableHead>
              <TableHead>상품번호</TableHead>
              <TableHead>이미지</TableHead>
              <TableHead>상품명</TableHead>
              <TableHead>판매가</TableHead>
              <TableHead>상태</TableHead>
              <TableHead>재고</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell>203277</TableCell>
              <TableCell></TableCell>
              <TableCell>비버 여성 블랙 케이스/본조</TableCell>
              <TableCell>380,000</TableCell>
              <TableCell>
                <span className="rounded-full bg-green-100 px-2 py-1 text-xs text-green-600">
                  판매중
                </span>
              </TableCell>
              <TableCell>50</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

function StatsCard({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType
  label: string
  value: string
  notification?: number
}) {
  return (
    <Card>
      <CardContent className="flex flex-row items-center gap-4 p-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
          <Icon className="h-6 w-6" />
        </div>
        <div className="space-y-1">
          <p className="text-sm font-medium text-gray-500">{label}</p>
          <p className="text-xl font-bold">{value}</p>
        </div>
      </CardContent>
    </Card>
  )
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
      {children}
    </div>
  )
}
