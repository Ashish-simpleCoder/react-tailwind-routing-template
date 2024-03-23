import { Link } from '@tanstack/react-router'

export default function Header() {
   return (
      <header className='flex justify-between bg-gray-400'>
         <h3>Header</h3>
         <div className='flex gap-4'>
            <Link to='/'>home</Link>
            <Link to='/about'>about</Link>
         </div>
      </header>
   )
}
