export interface TModal {
  modalShowed: boolean
  children?: React.ReactNode
  header?: React.ReactNode
  footer?: React.ReactNode
  title?: String
  toggleModal?: (e: any) => void
}