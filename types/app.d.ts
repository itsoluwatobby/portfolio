// types.app.d.ts

type IsIntersectingType = 'SWITCH' | 'STOP'

type ChildrenNode = {
  children: React.ReactNode
}

type Theme = 'light' | 'dark'

type AppContextProps = {
  theme: Theme,
  setTheme: React.Dispatch<React.SetStateAction<Theme>>
}

type ShellCommandsType = {
  [index: string]: string
}

type EntryType = 'SUCCESS' | 'ERROR' | 'WARNING'
type COLORS = 'green' | 'red' | 'blue'
type InputDisplayType = {
  id: string,
  entry: string | JSX.Element,
  color?: COLORS
  type: EntryType,
}