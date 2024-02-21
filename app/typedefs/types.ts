export type Theme = 'light' | 'dark'

export interface Todo {
  id: number
  text: string
  completed: boolean
  isPriority?: boolean
}
