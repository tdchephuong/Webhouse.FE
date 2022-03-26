export interface TPagination {
  currentPage?: number
  totalItem: number
  itemPerPage?: number
  onPage: (value: number) => void
}