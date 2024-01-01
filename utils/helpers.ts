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
// else {
//   setInputDisplay(prev => ([...prev, {id, entry, type: 'SUCCESS'}]))
// // }

// export const GetResponse = {
//   "CLEAR"(){
//     return 
//   }
// }