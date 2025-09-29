import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
import type { FC } from "react"
import { useSearchParams } from "react-router-dom"

interface TablePaginationProps {
    page: number
    size: number
    total: number
}

export const TablePagination: FC<TablePaginationProps> = ({ page, size, total }) => {
    const [params, setParams] = useSearchParams();

  return (
    <Pagination>
    <PaginationContent>
        <PaginationItem>
        <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
        <PaginationLink href="#">{page}</PaginationLink>
        </PaginationItem>
        <PaginationItem>
        <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
        <PaginationNext href="#" />
        </PaginationItem>
    </PaginationContent>
    </Pagination>
  )
}