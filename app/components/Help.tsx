import { useCallback } from 'react'

type Options = 'others'|'one'|'two'|'three'|'four'
export default function Help() {

  const class_names = useCallback((type: Options='one') => {
    return `flex items-center ${type === 'one' ? 'gap-x-24' : type === 'two' ? 'gap-x-[6.5rem]' : type === 'three' ? 'gap-x-[7.5rem]' : type === 'four' ? 'gap-x-[5.5rem]' : 'gap-x-10'}`
  }, [])
  
  return (
    <div className='flex flex-col px-3 gap-y-2 whitespace-pre-wrap'>
      <span className='ml-5 tracking-wider'>Running version 1.1.0.</span>

      <p className='text-green-500 font-medium'>Usage:</p>

      <div className={class_names()}>help <p>: Show all accepted arguments.</p></div>
      <div className={class_names('two')}>cat <p>: Displays or Reads a file.</p></div>
      <div className={class_names()}>man <p>: Display command information.</p></div>
      <div className={class_names('others')}>echo {'<option>'} <p>: Displays the postfix argument.</p></div>
      <div className={class_names('two')}>ls <p>: lists all files.</p></div>
      <div className={class_names('two')}>ls -l <p>: lists all files in detail.</p></div>
      <div className={class_names()}>email <p>: Displays developer&apos;s email</p></div>
      <div className={class_names('others')}>profile | about | git <p>: Displays developer&apos;s details.</p></div>
      <div className={class_names('others')}>signin | login <p>: Sets the current user as the new user.</p></div>
      <div className={class_names('others')}>signout | logout <p>: Resets back to the default user instance.</p></div>
      <div className={class_names('others')}>commands <p>: Displays all acceptable commands.</p></div>
      <div className={class_names('four') }>contact <p>: Returns the developer&apos;s contact information.</p></div>
      <div className={class_names('four')}>whoami <p>: Returns the name of the current user.</p></div>
      <div className={class_names('one')}>clear <p>: Clears up the screen.</p></div>
      <div className={class_names('four')}>history <p>: Retrieves the previous command</p></div>
    </div>
  )
}