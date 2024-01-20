import './index.css'
import Image from 'next/image'
import pokeball from './img/pokeball.svg'
import synvia from './img/synvia-A.svg'
import FilterTop from '../filter-top'
import FilterLeft from '../filter-left'
import Card from '../card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faSignOut } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className='flex flex-row items-center headerDex'>
        <div className='grow h-14 flex pl-2 mx-20 items-center' dir='ltr'>
          <Image
            src={pokeball}
            alt='Pokedex'
          />
          <span className='pl-4 title'>Pokédex</span>
        </div>
        <div className='grow h-14 flex flex-end pr-2 items-center' dir='rtl'>
          <FontAwesomeIcon className='icon' icon={faSignOut} />
          <Image
            src={synvia}
            alt='Synvia'
          />          
        </div>
      </div>

      <div className='flex my-4 mx-20'>
        <FilterTop></FilterTop>
      </div>

      <div className='flex flex-row contentDex my-4  mx-20'>
        <div className='flex w-1/5 h-dvh'>
          <FilterLeft></FilterLeft>
        </div>
        <div className='flex w-4/5 h-dvh'>
          <Card></Card>
        </div>
      </div>     
    </main>
  )
}
