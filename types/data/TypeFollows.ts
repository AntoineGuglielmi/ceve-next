import * as LucideIcons from 'lucide-react'

export type TypeFollows = {
  title: string
  list: Array<TypeFollowItem>
}

export type TypeFollowItem = {
  title?: string
  icon?: keyof typeof LucideIcons
  link: string
}
