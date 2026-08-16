import Link from 'next/link';
import Cabecalho from '../cabecalho';
import Rodape from '@/app/rodape';

export default function VwPage() {
  return <div>
    <Cabecalho/>
    Mateus
    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d3/Volkswagen_logo.png" alt="" />
    <Link href="vw/jetta">Pagina Jetta</Link>
    <Link href="vw/golf">Pagina Golf</Link>
    <Rodape/>
  </div>
}