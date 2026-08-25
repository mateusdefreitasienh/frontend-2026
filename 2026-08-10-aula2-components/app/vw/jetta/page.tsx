import Link from 'next/link';
import Cabecalho from '../../cabecalho';
import Rodape from '@/app/rodape';

export default function JettaPage() {
  return <div>
    <Cabecalho/>
    <img src="https://s2-valor.glbimg.com/-S_GgHxmGO_TsoHDmUi2k-XqFMA=/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_63b422c2caee4269b8b34177e8876b93/internal_photos/bs/2021/X/D/M4q8nLSsu634e66RdFww/foto12emp-401-jetta-b10.jpg" alt="" />
    <Link href="/vw">Pagina vw</Link>
    <Rodape/>
  </div>
}