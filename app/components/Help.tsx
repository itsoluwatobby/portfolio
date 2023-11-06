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
      <div className={class_names('three')}>ls <p>: lists all files.</p></div>
      <div className={class_names('two')}>ls -l <p>: lists all files in detail.</p></div>
      <div className={class_names()}>email <p>: Displays my email</p></div>
      <div className={class_names('others')}>profile | about | git <p>: List the node.js installations. Type at the end to see what can be installed. Aliased as ls.</p></div>
      <div className={class_names('others')}>signin | login <p>: Enable node.js version management.</p></div>
      <div className={class_names('others')}>signout | logout <p>: Disable node.js version management.</p></div>
      <div className={class_names('others')}>commands <p>: Set a proxy to use for downloads. Leave [url] blank to see the current proxy.</p></div>
      <div className={class_names('four')}>contact <p>: Set the node mirror. Defaults to https://nodejs.org/dist/. Leave [url] blank to use default url.</p></div>
      <div className={class_names('four')}>whoami <p>: Set the npm mirror. Defaults to https://github.com/npm/cli/archive/. Leave [url] blank to default url.</p></div>
      <div className={class_names('one')}>clear <p>: The version must be a specific version.</p></div>
      <div className={class_names('four')}>history <p>: </p></div>
    </div>
  )
}