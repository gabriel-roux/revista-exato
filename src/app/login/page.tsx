import LoginBg from '@/assets/login-bg.svg'
import ExatoLogo from '@/assets/logo'
import Checkbox from '@/components/checkbox'
import Image from 'next/image'
import Link from 'next/link'
import Password from './password'
import Button from '@/components/button'
import CaretRight from '@/components/icons/caret-right'

export default function LoginPage() {
  return (
    <main className="flex flex-col md:flex-row justify-between items-center w-full">
      <div className="w-full md:w-1/2 h-screen bg-[white] p-6 md:py-24 md:px-28 flex flex-col gap-14 items-center">
        <ExatoLogo className="fill-black" />

        <div className="w-full md:max-w-[485px] flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <h1 className="text-black text-xl font-bold text-center">
              Bem-vindo(a) de volta!
            </h1>
            <p className="text-gray-200 text-sm text-center">
              Faça o login para ler mais reportagens e ficar <br /> por dentro
              das notícias da Exato.
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

              <Password />

              <div className="flex justify-between items-center w-full">
                <div className="flex items-center gap-2">
                  <Checkbox />
                  <p className="text-gray-100 text-sm">Manter conectado</p>
                </div>

                <Link
                  href="/esqueci-minha-senha"
                  className="text-gray-300 text-sm font-medium"
                >
                  Esqueci minha senha
                </Link>
              </div>
            </div>

            <Button variant="secondary" className="w-full">
              Entrar <CaretRight className="text-white" />
            </Button>
          </div>

          <div className="w-full h-[1px] bg-orange-500" />

          <div className="flex flex-col gap-6">
            <Link
              href="/planos"
              className="text-black font-manrope text-center text-base hover:text-orange-200 transition-all duration-200"
            >
              Ainda não fez a sua assinatura?
            </Link>

            <Button
              variant="primary"
              size="lg"
              className="w-full !text-black !border-orange-400 !hover:bg-orange-400"
            >
              Assine agora!
            </Button>
          </div>
        </div>

        <p className="text-gray-100 text-base font-medium mt-10">
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
