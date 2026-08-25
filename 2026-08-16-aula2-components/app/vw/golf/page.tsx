import Link from 'next/link';
import Cabecalho from '../../cabecalho'; // importacao relativa
import Rodape from '@/app/rodape'; //importacao absoluta

export default function GolfPage() {
  return <div>
    <Cabecalho />
    <img src="https://i.pinimg.com/736x/0b/51/2b/0b512b162ab036b2fb259eb8f8253bdf.jpg" alt="" />
    <Link href="/vw">Pagina vw</Link>
    <Rodape />
  </div>
}