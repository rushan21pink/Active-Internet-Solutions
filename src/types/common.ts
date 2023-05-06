export interface IPagination {
  page: number
  total?: number
  perPage?: number
}

export interface ISelectOption {
  id: string | number
  name: string
}

export interface ISelectOptionImg extends ISelectOption {
  image?: string
}

export interface ITab {
  key: string
  name: string
  link?: string
  notification?: boolean
}

export interface DataField {
  key: string
  label: string
  width?: number | string
  align?: string
  class?: string
  options?: string
  header?: string
  mask?: string
}

export interface FooterDataRow {
  key: string
  value: string
  label?: string
  align?: string
  class?: string
}

export interface ITableMeta {
  current_page: number
  entry_count: number
  per_page: number
  total_pages: number
  total?: number
}

export interface IFiles {
  orig_name: string
  tmp_name: string
}

export interface IFilesFromBackend extends IFiles {
  date: string
  size: number
  path: string
}

// todo: extend from this interface
export interface IDefaultPage {
  page: number
  count: number
}

export interface IFilter {
  page?: number
  count?: number
  filters?: string
  search?: string
}

export interface IRouterParamsTable {
  name: string
  key: string
  itemKey?: string
}

export type ISort = '' | 'asc' | 'desc';

