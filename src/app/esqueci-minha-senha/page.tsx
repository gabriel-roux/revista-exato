import LoginBg from '@/assets/login-bg.svg'
import ExatoLogo from '@/assets/logo'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/button'
import CaretLeft from '@/components/icons/caret-left'

export default function EsqueceuSenhaPage() {
  return (
    <main className="flex flex-col md:flex-row justify-between items-center w-full">
      <div className="w-full md:w-1/2 h-screen bg-[white] p-6 md:py-24 md:px-28 flex flex-col gap-14 items-center">
        <ExatoLogo className="fill-black w-[146px] h-[50px]" />

        <div className="w-full md:max-w-[485px] h-4/5 flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <h1 className="text-black text-xl font-bold text-center">
              Esqueceu sua senha?
            </h1>
            <p className="text-gray-200 text-sm text-center">
              Preencha abaixo seu endereço de email para receber <br />
              as instruções para criar uma nova senha.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <div className="w-full h-14 px-6 py-[10px] flex items-center border-[1.5px] border-gray-500 rounded-lg focus-within:border-orange-500 transition-all duration-200">
                <input
                  type="text"
                  placeholder="E-mail"
                  className="outline-none text-gray-100"
                />
              </div>
            </div>

            <Button variant="secondary" size="lg" className="w-full">
              Enviar email de recuparação
            </Button>
          </div>

          <Link
            href="/login"
            className="text-orange-200 hover:text-orange-100 transition-all duration-200 text-center flex items-center gap-2 justify-center"
          >
            <CaretLeft weight="bold" /> Voltar para a tela de login
          </Link>
        </div>

        <p className="text-gray-100 text-base font-medium mt-auto">
          Precisa de ajuda?{' '}
          <Link
            href="/contato"
            className="text-orange-200 hover:text-orange-100 transition-all duration-200"
          >
            Fale conosco
          </Link>
        </p>
      </div>

      <Image
        src={LoginBg}
        alt="Login Background"
        quality={100}
        className="w-full md:w-1/2 flex-shrink-0 h-screen hidden md:inline-block object-cover"
      />
    </main>
  )
}
