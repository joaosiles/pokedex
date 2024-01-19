import './index.css'
import Image from 'next/image'
import pokeball from './img/pokeball.svg'
import synvia from './img/synvia-A.svg'

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className='flex flex-row headerDex'>
        <div className='grow h-14 flex' dir='ltr'>
          <Image
            src={pokeball}
            alt='Pokedex'
          />
          <h2>Pokedex</h2>
        </div>
        <div className='grow h-14 flex flex-end' dir='rtl'>
          <Image
            src={synvia}
            alt='Synvia'
          />
        </div>
      </div>

      <div className='flex flex-row contentDex'>
        <div>menu</div>
        <div>content</div>
      </div>     
    </main>
  )
}
