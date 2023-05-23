import {User} from 'lucide-react'
import Image from 'next/image'
import nlwLogo from '../assets/Nlw-spaceTimeLogo.svg'

export default function Home() {
  return (
    <main className="grid grid-cols-2 min-h-screen">
      {/*left*/}
      <div className="flex flex-col items-start justify-between px-28 py-16 relative overflow-hidden bg-[url(../assets/bg-stars.svg)] bg-cover">
        {/*blur */}
        <div className="absolute right-0 top-1/2 h-[282px] w-[526px] bg bg-purple-700 opacity-50 -translate-y-1/2 translate-x-1/2 rounded-full blur-full"/>
        {/*stripes */}
        <div className="absolute top-0 right-1 bottom-0 w-[8px] bg-stripe" />
      
      {/*sing in */}
        <a href="" className="flex text-left itens-center gap-3 hover:text-gray-50 transition-colors">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-400">
            <User className='h-5 w-5 text-gray-500'/>
          </div>
          <p className='max-w-[140px] text-sm  leading-snug'>
              <span className='underline'>Crie sua conta</span>
             {' '}e salve suas memorias</p>
        </a>
        <div className='space-y-5'>
          <Image src ={nlwLogo} alt='Nlw space time' />
          <div className='space-y1 max-w-[420px]'>
            <h1>Sua cápsula do tempo</h1>
            <p>Colecione momentos marcantes da sua jornada e compartilhe (se quiser) com o mundo! 
            </p>
          </div>
          <a href="" className='inline-block'>CADASTRAR LEMBRANÇAS</a>
        </div>
      </div>
      {/*Right */}
      <div className="flex flex-col p-16 bg-[url(../assets/bg-stars.svg)] bg-cover ">
        <div className="flex flex-1 items-center justify-center ">
          <p className="w-[360px] text-center leading-relaxed">
            Você ainda não registrou nenhuma lembrança, comece a{'  '}
            <a href="" className="underline hover:text-gray-50 ">criar agora</a>!
          </p>
        </div>
      </div>
    </main>
  )
}
