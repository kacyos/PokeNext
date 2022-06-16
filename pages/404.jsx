import Image from "next/image";

export default function NotAllowed() {
  return (
    <div className="not_allowed">
      <h1>Pagina não encontrada.</h1>
      <Image src="/images/psyduck.png" height={400} width={350} />
    </div>
  );
}
