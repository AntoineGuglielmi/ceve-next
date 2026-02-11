export type TypeDiplomas = {
  title: string
  list: Array<TypeDiplomaItem>
}

export type TypeDiplomaItem = {
  title: string
  organism: string
  geo: string
  start: string
  end: string
  desc: string | null
}
