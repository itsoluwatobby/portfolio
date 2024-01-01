"use client"

import { shell_Commands } from '@/utils/shellCommands'
import { nanoid } from 'nanoid'
import React, { useState, useEffect } from 'react'
import { useGithub } from '@/hooks/useGithub'
import { useAppContext } from '@/hooks/useContexts'
// import { readDirectory } from '@/utils/helpers'

type Props = {
  theme: Theme,
  inputDisplay: InputDisplayType[],
  inputRef: React.RefObject<HTMLInputElement>
  inputRef1?: React.RefObject<HTMLInputElement>
  setInputDisplay: React.Dispatch<React.SetStateAction<InputDisplayType[]>>
}

const initDisplayState = [{id: '1', entry: '', type: 'SUCCESS' as EntryType}]
export default function ShellTitle({ 
theme, inputDisplay, inputRef, 
inputRef1, setInputDisplay }: Props) {
  const [input, setInput] = useState<string>('')
  const { commandHistory, setCommandHistory, currentUser, setCurrentUser } = useAppContext()
  const getRepos = useGithub()
// console.log(getRepos)
  useEffect(() => {
    if(!inputRef?.current) return
    const windowfocus = () => inputRef?.current?.focus()
    window.addEventListener('click', windowfocus)
    window.addEventListener('keyup', (event) => event.key === 'Enter' && windowfocus())
  }, [inputRef])

  const setHistory = () => {
    const entry = input?.toLowerCase()?.split(' ')[0]?.trim()
    entry?.length ? setCommandHistory(prev => ([...prev, entry])) : null
    const id = nanoid(5)
    if(!entry?.length) setInputDisplay(prev => ([...prev, initDisplayState[0]]))
    else if(![...Object.keys(shell_Commands)]?.includes(entry)) {
      setInputDisplay(prev => ([...prev, {id, entry: `<${input}> command not found`, type: 'ERROR', color: 'red'}]))
    }
    else if(shell_Commands[entry] === 'CLEAR') {
      setInputDisplay([])
      setInput('')
    }
    else if(shell_Commands[entry] === 'EMAIL') setInputDisplay(prev => ([...prev, {id, entry, type: 'SUCCESS', color: 'blue'}]))
    else if(shell_Commands[entry] === 'COMMANDS') {
      const command = `
      ${Object.keys(shell_Commands)?.slice(0,5)?.join('\t\t')}\n
      ${Object.keys(shell_Commands)?.slice(5,10)?.join('\t\t')}\n
      ${Object.keys(shell_Commands)?.slice(10,15)?.join('\t\t')}\n
      ${Object.keys(shell_Commands)?.slice(15)?.join('\t\t')}
      `
      setInputDisplay(prev => ([...prev, {id, entry: command, type: 'SUCCESS', color: 'blue'}]))
    }
    else if(shell_Commands[entry] === 'ECHO') {
      const command = input?.split(' ')?.slice(1)?.join(' ')
      setInputDisplay(prev => ([...prev, {id, entry: command, type: 'SUCCESS', color: 'blue'}]))
    }
    else if(shell_Commands[entry] === 'LS' || shell_Commands[input?.trim()] === 'LS_LONG') {
      // const files = readDirectory()?.join(' ')
      setInputDisplay(prev => ([...prev, {id, entry: 'files', type: 'SUCCESS', color: 'blue'}]))
    }
    else if(shell_Commands[entry] === 'HISTORY') {
      const inputHistory = commandHistory.join('\n')
      setInputDisplay(prev => ([...prev, {id, entry: inputHistory, type: 'SUCCESS', color: 'green'}]))
    }
    else if(shell_Commands[entry] === 'WHOAMI') {
      setInputDisplay(prev => ([...prev, {id, entry: `<${currentUser}>`, type: 'SUCCESS', color: 'blue'}]))
    }
    else if(shell_Commands[entry] === 'LOGIN' || shell_Commands[entry] === 'SIGNIN') {
      const user = input?.split(' ', 2)[1]
      setCurrentUser(user)
      setInputDisplay(prev => ([...prev, {id, entry: `welcome <${user}>`, type: 'SUCCESS', color: 'blue'}]))
    }
    else if(shell_Commands[entry] === 'LOGOUT' || shell_Commands[entry] === 'SIGNOUT') {
      const user = 'itsoluwatobby'
      const isCurrentUser = currentUser === user
      let response = ''
      if (isCurrentUser) response = 'No logged in user'
      else {
        setCurrentUser(user)
        response = `Goodbye <${user}>\nDo well to come back!!`
      }
      setInputDisplay(prev => ([
        ...prev, { 
          id, entry: response, 
          type: 'SUCCESS', color: isCurrentUser ? 'red' : 'blue' 
        }]))
    }
    else {
      setInputDisplay(prev => ([...prev, {id, entry, type: 'SUCCESS'}]))
    }
  }

  return (
    <div 
    className="flex w-full items-center py-0.5 gap-x-1 text-xs">
      
      <div className='flex-none w-fit font-medium'>
        hello
        <span className="text-green-600 font-bold"> 
          @{currentUser?.toLowerCase()}/welcome{`$>`}
        </span>
      </div>

      <div 
         onKeyUpCapture={
          event => event.key === 'Enter' ? setHistory() : null
        }
        className="flex-auto flex w-full items-center rounded-sm h-6 text-sm">
          <input 
            ref={inputRef as React.LegacyRef<HTMLInputElement>} value={input} 
            onChange={event => setInput(event.target.value)} 
            className=" bg-inherit focus:outline-0 w-full h-full border-none text-[12px]"
          />
      </div>
    
    </div>
  )
}