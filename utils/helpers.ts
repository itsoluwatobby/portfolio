// import { nanoid } from 'nanoid';

export function toggleAttributes(parsedObj: Partial<TargetDisplayType>, toggleValue: boolean): Partial<TargetDisplayType> {
  return Object.fromEntries(Object.keys(parsedObj).map(key => [key, toggleValue]));
}

export const switchModals: Record<Displays, (arg: TargetDisplayType) => TargetDisplayType> = {
  'skills'(prev: TargetDisplayType){
    const { skills, ...rest } = prev
    return { skills, ...toggleAttributes(rest, false) } as TargetDisplayType
  },
  'experience'(prev: TargetDisplayType){
    const { experience, ...rest } = prev
    return { experience, ...toggleAttributes(rest, false) } as TargetDisplayType
  },
  'education'(prev: TargetDisplayType){
    const { education, ...rest } = prev
    return { education, ...toggleAttributes(rest, false) } as TargetDisplayType
  }
}

// export const shellEngine = (callback: () => void) => {
//  const id = nanoid(10);

//   return {
//     'NO-ENTRY': () => callback(),
//     'EMPTY': () => callback(),
//     'EMAIL': () => callback(),
//     'CLEAR': () => callback(),
//     'ECHO': () => callback(),
//     'COMMANDS': () => callback(),
//     'LS': () => callback(),
//     'HISTORY': () => callback(),
//     'WHOAMI': () => callback(),
//     'LOGIN': () => callback(),
//     'LOGOUT': () => callback(),
//     'SIGNOUT': () => callback(),
//     'DEFAULT': () => callback(),
//     'NIL': () => {},
//   }
}
// if(!entry?.length) setInputDisplay(prev => ([...prev, initDisplayState[0]]))
// else if(![...Object.keys(shell_Commands)]?.includes(entry)) {
//   setInputDisplay(prev => ([...prev, {id, entry: `<${input}> command not found`, type: 'ERROR', color: 'red'}]))
// }
// else if(shell_Commands[entry] === 'CLEAR') {
//   setInputDisplay([])
//   setInput('')
// }
// else if(shell_Commands[entry] === 'EMAIL') setInputDisplay(prev => ([...prev, {id, entry, type: 'SUCCESS', color: 'blue'}]))
// else if(shell_Commands[entry] === 'COMMANDS') {
//   const command = `
//   ${Object.keys(shell_Commands)?.slice(0,5)?.join('\t\t')}\n
//   ${Object.keys(shell_Commands)?.slice(5,10)?.join('\t\t')}\n
//   ${Object.keys(shell_Commands)?.slice(10,15)?.join('\t\t')}\n
//   ${Object.keys(shell_Commands)?.slice(15)?.join('\t\t')}
//   `
//   setInputDisplay(prev => ([...prev, {id, entry: command, type: 'SUCCESS', color: 'blue'}]))
// }
// else if(shell_Commands[entry] === 'ECHO') {
//   const command = input?.split(' ')?.slice(1)?.join(' ')
//   setInputDisplay(prev => ([...prev, {id, entry: command, type: 'SUCCESS', color: 'blue'}]))
// }
// else if(shell_Commands[entry] === 'LS' || shell_Commands[input?.trim()] === 'LS_LONG') {
//   // const files = readDirectory()?.join(' ')
//   setInputDisplay(prev => ([...prev, {id, entry: 'files', type: 'SUCCESS', color: 'blue'}]))
// }
// else if(shell_Commands[entry] === 'HISTORY') {
//   const inputHistory = commandHistory.join('\n')
//   setInputDisplay(prev => ([...prev, {id, entry: inputHistory, type: 'SUCCESS', color: 'green'}]))
// }
// else if(shell_Commands[entry] === 'WHOAMI') {
//   setInputDisplay(prev => ([...prev, {id, entry: `<${currentUser}>`, type: 'SUCCESS', color: 'blue'}]))
// }
// else if(shell_Commands[entry] === 'LOGIN' || shell_Commands[entry] === 'SIGNIN') {
//   const user = input?.split(' ', 2)[1]
//   setCurrentUser(user)
//   setInputDisplay(prev => ([...prev, {id, entry: `welcome <${user}>`, type: 'SUCCESS', color: 'blue'}]))
// }
// else if(shell_Commands[entry] === 'LOGOUT' || shell_Commands[entry] === 'SIGNOUT') {
//   const user = 'itsoluwatobby'
//   const isCurrentUser = currentUser === user
//   let response = ''
//   if (isCurrentUser) response = 'No logged in user'
//   else {
//     setCurrentUser(user)
//     response = `Goodbye <${user}>\nDo well to come back!!`
//   }
//   setInputDisplay(prev => ([
//     ...prev, { 
//       id, entry: response, 
//       type: 'SUCCESS', color: isCurrentUser ? 'red' : 'blue' 
//     }]))
// }
// else {
//   setInputDisplay(prev => ([...prev, {id, entry, type: 'SUCCESS'}]))
// }