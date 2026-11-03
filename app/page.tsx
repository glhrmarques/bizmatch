import Image from "next/image";
import ConnectionCards from "./components/connection-cards";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center gap-10 px-10 pt-[120px] pb-16" id="inicio">
      <header className="motion-safe:animate-reveal absolute top-4 right-10 left-10 flex h-12 items-center justify-between">
        <a className="flex w-[312px] items-center gap-3 text-h6 font-semibold" href="#inicio" aria-label="BizMatch — início">
          <span className="brand-symbol" aria-hidden="true"><span /><span /><span /></span>
          <span>BizMatch</span>
        </a>
        <nav className="flex items-center gap-6 text-paragraph-default [&_button]:bg-transparent [&_button]:p-0 [&_a:hover]:underline [&_button:hover]:underline underline-offset-[5px]" aria-label="Navegação principal">
          <a href="#conexoes">Para o seu negócio</a>
          <button type="button">Eventos</button>
          <button type="button">Custo</button>
        </nav>
        <div className="flex w-[312px] justify-end gap-4">
          <button className="inline-flex h-12 items-center justify-center bg-surface-on-action-secondary px-4 text-paragraph-default font-medium whitespace-nowrap text-on-action-secondary transition-colors hover:bg-surface-on-action-secondary-hover">Entrar</button>
          <button className="inline-flex h-12 w-[140px] items-center justify-center bg-surface-on-action-primary px-4 text-paragraph-default font-medium whitespace-nowrap text-on-action-primary transition-colors hover:bg-surface-on-action-primary-hover">Cadastrar-se</button>
        </div>
      </header>

      <section className="flex w-[928px] flex-col items-center gap-6 text-center" aria-labelledby="hero-title">
        <h2 id="hero-title" className="motion-safe:animate-reveal [--reveal-delay:100ms] w-[828px] font-heading text-h2 leading-[1.2] font-normal">Grandes negócios<br />começam com o match certo.</h2>
        <p className="motion-safe:animate-reveal [--reveal-delay:200ms] text-h6 leading-[1.5] text-secondary max-w-[588px]">Amplie sua rede de contatos, conheça parceiros estratégicos e crie conexões que impulsionam seu negócio.</p>
        <button className="motion-safe:animate-reveal [--reveal-delay:300ms] inline-flex h-12 items-center justify-center bg-surface-on-action-primary px-6 text-paragraph-default font-medium whitespace-nowrap text-on-action-primary transition-colors hover:bg-surface-on-action-primary-hover">Cadastrar-se gratuitamente</button>
      </section>

      <section className="motion-safe:animate-reveal [--reveal-delay:400ms] relative grid h-[556px] w-full place-items-center" id="conexoes" aria-label="Conecte-se com parceiros estratégicos">
        <Image className="object-cover" src="/images/hero-dunes.png" alt="" fill sizes="100vw" preload />
        <div className="motion-safe:animate-reveal [--reveal-delay:550ms] relative left-[0.5px] flex gap-2" aria-hidden="true">
          <ConnectionCards />
          <div className="relative flex flex-col gap-2">
            <div className="relative grid size-14 place-items-center rounded-xl bg-gray-900/25 p-3 backdrop-blur-[2px]">
              <Image src="/images/notification.svg" alt="" width={24} height={24} /><span className="absolute top-3 left-[30px] size-3 rounded-full bg-foundation-white" />
            </div>
            <div className="relative grid size-14 place-items-center rounded-xl bg-gray-900/25 p-3 backdrop-blur-[2px]">
              <Image src="/images/more.svg" alt="" width={24} height={24} />
            </div>
          </div>
        </div>
      </section>

      <div className="motion-safe:animate-reveal [--reveal-delay:650ms] partner-logos relative flex w-full items-center justify-between" aria-label="Empresas da rede">
        {Array.from({ length: 7 }, (_, index) => <Image key={index} className="object-cover opacity-30" src="/images/itau.png" alt={index === 0 ? "Itaú" : ""} width={56} height={56} />)}
      </div>

      <section className="h-[100dvh] w-full flex justify-center">
        <p className="text-primary font-heading text-h3 leading-[1.5] text-center max-w-[700px]">Novas conexões podem abrir portas para grandes oportunidades.</p>

      </section>

    </main>
  );
}
