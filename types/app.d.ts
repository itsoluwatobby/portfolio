// types.app.d.ts

type IsIntersectingType = 'SWITCH' | 'STOP'

type ChildrenNode = {
  children: React.ReactNode
}

type Theme = 'light' | 'dark'

type AppContextProps = {
  theme: Theme,
  currentUser: string,
  commandHistory: string[],
  setTheme: React.Dispatch<React.SetStateAction<Theme>>,
  setCurrentUser: React.Dispatch<React.SetStateAction<string>>,
  setCommandHistory: React.Dispatch<React.SetStateAction<string[]>>
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