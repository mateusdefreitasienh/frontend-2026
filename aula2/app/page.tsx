import Link from 'next/link';
import Cabecalho from './cabecalho';
import Rodape from '@/app/rodape'
import Title from '@/components/title';
import Card from '@/components/card'

export default function HomePage() {
  return <div>
    <Cabecalho/>
    <Title cor="red">Este é o titulo da home</Title>
    Mateus
    <br />
    <Link href="/vw">Pagina VW</Link>
    <br />
    <Link href="/astra">Pagina Astra</Link>
    <Card title="Shrimp and Chorizo Paella"
          date="September 14, 2016"
          img="https://mui.com/static/images/cards/paella.jpg"
          text="This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.">
    </Card>
    <Rodape/>
  </div>
}