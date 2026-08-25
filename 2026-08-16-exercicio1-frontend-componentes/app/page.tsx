import Link from 'next/link';


export default function Home() {
  return (
    <div>
      <div><Link href="/exemplo/basico">Exemplo Basico</Link></div>
      <div><Link href="/exemplo/avancado">Exemplo Avancado</Link></div>
      <div><Link href="/entrar">Entrar</Link></div>
    </div>
  );
}