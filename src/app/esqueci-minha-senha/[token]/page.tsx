import LoginBg from '@/assets/login-bg.svg'
import ExatoLogo from '@/assets/logo'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/button'
import CheckCircle from '@/components/icons/check-circle'

export default function ConfirmarEmailPage() {
  return (
    <main className="flex flex-col md:flex-row justify-between items-center w-full">
      <div className="w-full md:w-1/2 h-screen bg-[white] p-6 md:py-24 md:px-28 flex flex-col gap-14 items-center">
        <ExatoLogo className="fill-black w-[146px] h-[50px]" />

        <div className="w-full md:max-w-[485px] flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <h1 className="text-black text-xl font-bold text-center">
              Verifique seu e-mail!
            </h1>
            <p className="text-gray-200 text-sm text-center">
              Acesse a caixa de entrada do{' '}
              <b className="text-gray-100">andressa@insanydesign.com</b> <br />e
              siga as instrução para redefinir sua senha.
            </p>
          </div>

          <Button variant="secondary" size="lg" className="w-full">
            Voltar para o login
          </Button>

          <div className="w-full h-[1px] bg-orange-500" />

          <div className="flex flex-col gap-6">
            <p className="text-black font-manrope text-center text-base hover:text-orange-200 transition-all duration-200">
              Não recebeu o e-mail?
            </p>

            <Button
              variant="primary"
              size="lg"
              className="w-full !text-black !border-orange-400 !hover:bg-orange-400"
            >
              Reenviar e-mail
            </Button>
          </div>

          <div className="w-full h-[100px] bg-[#00AE6510] flex items-center justify-start gap-6 py-6 px-8 rounded-lg">
            <CheckCircle className="fill-[#1BD693] w-8 h-8 flex-shrink-0" />

            <div className="flex flex-col gap-2">
              <p className="text-black text-base font-semibold">
                Email de recuperação enviado!
              </p>
              <p className="text-gray-300 font-semibold text-sm">
                Verifique seu e-mail!.
              </p>
            </div>
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
