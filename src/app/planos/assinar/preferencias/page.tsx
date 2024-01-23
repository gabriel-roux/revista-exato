'use client'

import Business from '@/assets/preferences/👔.png'
import Fone from '@/assets/preferences/🎧.png'
import Microfone from '@/assets/preferences/🎤.png'
import Congratulations from '@/assets/preferences/🎊.png'
import Switch from '@/components/switch'
import Image from 'next/image'
import Button from '@/components/button'
import BackgroundBlur from '@/assets/blur.png'
import { useState } from 'react'
import MasterBrand from '../card/master'

export default function PreferenciasPage() {
  const [active, setActive] = useState(false)

  return (
    <main>
      <section className="w-full bg-gray-700 py-24 flex items-center justify-start flex-col gap-20">
        {!active ? (
          <>
            <div className="flex flex-col gap-[14px] items-center">
              <h1 className="text-xl md:text-[32px] text-black font-bold text-center">
                Antes de começarmos....
              </h1>

              <p className="text-sm md:text-lg text-gray-200 text-center max-w-[660px]">
                O que acha de começar selecionando seus temas preferidos?
              </p>
            </div>

            <div className="max-w-[800px] w-full flex flex-col gap-11 p-4 md:p-0">
              <div className="flex flex-col gap-4">
                <p className="uppercase text-sm font-manrope font-semibold text-gray-300">
                  Politica e cultura
                </p>

                <div className="w-full bg-[#fff] px-6 md:px-11 py-6 rounded-lg flex items-center justify-between">
                  <div className="flex items-center gap-5 md:gap-10">
                    <Image
                      src={Business}
                      alt="Business"
                      width={44}
                      height={46}
                      quality={100}
                    />

                    <div className="flex flex-col gap-1">
                      <h2 className="text-lg font-bold text-black">Tema 01</h2>

                      <p className="text-sm text-gray-300">
                        O que acha de começar selecionando seus temas
                        preferidos?
                      </p>
                    </div>
                  </div>

                  <Switch />
                </div>
                <div className="w-full bg-[#fff] px-6 md:px-11 py-6 rounded-lg flex items-center justify-between">
                  <div className="flex items-center gap-5 md:gap-10">
                    <Image
                      src={Fone}
                      alt="Fone"
                      width={44}
                      height={46}
                      quality={100}
                    />

                    <div className="flex flex-col gap-1">
                      <h2 className="text-lg font-bold text-black">Tema 01</h2>

                      <p className="text-sm text-gray-300">
                        O que acha de começar selecionando seus temas
                        preferidos?
                      </p>
                    </div>
                  </div>

                  <Switch />
                </div>
                <div className="w-full bg-[#fff] px-6 md:px-11 py-6 rounded-lg flex items-center justify-between">
                  <div className="flex items-center gap-5 md:gap-10">
                    <Image
                      src={Microfone}
                      alt="Microfone"
                      width={44}
                      height={46}
                      quality={100}
                    />

                    <div className="flex flex-col gap-1">
                      <h2 className="text-lg font-bold text-black">Tema 01</h2>

                      <p className="text-sm text-gray-300">
                        O que acha de começar selecionando seus temas
                        preferidos?
                      </p>
                    </div>
                  </div>

                  <Switch />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="uppercase text-sm font-manrope font-semibold text-gray-300">
                  Esportes e noticias
                </p>

                <div className="w-full bg-[#fff] px-6 md:px-11 py-6 rounded-lg flex items-center justify-between">
                  <div className="flex items-center gap-5 md:gap-10">
                    <Image
                      src={Business}
                      alt="Business"
                      width={44}
                      height={46}
                      quality={100}
                    />

                    <div className="flex flex-col gap-1">
                      <h2 className="text-lg font-bold text-black">Tema 01</h2>

                      <p className="text-sm text-gray-300">
                        O que acha de começar selecionando seus temas
                        preferidos?
                      </p>
                    </div>
                  </div>

                  <Switch />
                </div>
                <div className="w-full bg-[#fff] px-6 md:px-11 py-6 rounded-lg flex items-center justify-between">
                  <div className="flex items-center gap-5 md:gap-10">
                    <Image
                      src={Fone}
                      alt="Fone"
                      width={44}
                      height={46}
                      quality={100}
                    />

                    <div className="flex flex-col gap-1">
                      <h2 className="text-lg font-bold text-black">Tema 01</h2>

                      <p className="text-sm text-gray-300">
                        O que acha de começar selecionando seus temas
                        preferidos?
                      </p>
                    </div>
                  </div>

                  <Switch />
                </div>
                <div className="w-full bg-[#fff] px-6 md:px-11 py-6 rounded-lg flex items-center justify-between">
                  <div className="flex items-center gap-5 md:gap-10">
                    <Image
                      src={Microfone}
                      alt="Microfone"
                      width={44}
                      height={46}
                      quality={100}
                    />

                    <div className="flex flex-col gap-1">
                      <h2 className="text-lg font-bold text-black">Tema 01</h2>

                      <p className="text-sm text-gray-300">
                        O que acha de começar selecionando seus temas
                        preferidos?
                      </p>
                    </div>
                  </div>

                  <Switch />
                </div>
              </div>

              <div className="w-full flex items-center justify-between">
                <p className="text-gray-100 text-base font-medium">
                  5 temas adicionados.{' '}
                  <button className="text-orange-200 underline">
                    Adicionar todos
                  </button>
                </p>

                <Button
                  onClick={() => setActive(!active)}
                  variant="secondary"
                  className="w-[210px]"
                >
                  Avançar
                </Button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col gap-[14px] items-center">
              <h1 className="text-xl md:text-[32px] text-black font-bold text-center">
                Seu acesso ilimitado está liberado!
              </h1>

              <p className="text-sm md:text-lg text-gray-200 text-center max-w-[660px]">
                Agora você já pode começar a explorar o melhor <br /> que a
                Revista Exato tem para oferecer!
              </p>
            </div>

            <div className="max-w-[800px] w-full mx-auto flex flex-col gap-9">
              <div className="w-full h-[450px] rounded-lg bg-gray-100" />

              <div className="px-12 py-10 flex items-center justify-between bg-black rounded-xl relative overflow-hidden">
                <div className="flex items-center gap-5">
                  <Image
                    src={Congratulations}
                    alt="Business"
                    width={44}
                    height={46}
                    quality={100}
                  />

                  <div className="flex flex-col gap-1">
                    <h2 className="text-white font-bold text-lg">
                      Lorem ipsum dolor
                    </h2>
                    <p className="text-white font-normal text-sm">
                      Lorem ipsum dolor onsequr lorem ipsum dolor
                    </p>
                  </div>
                </div>

                <Button
                  variant="secondary"
                  className="w-[210px] h-[50px] text-sm !bg-orange-100 !border-orange-100 hover:!bg-orange-200 hover:!border-orange-200"
                >
                  Acessar Agora
                </Button>

                <div
                  style={{
                    background: `radial-gradient(100% 50.41% at 0% 48.27%, rgba(242, 77, 0, 0.70) 0%, rgba(242, 77, 0, 0.00) 100%)`,
                    transform: `rotate(-75deg)`,
                  }}
                  className="absolute -bottom-40 left-1/2 w-[180px] h-[320px]"
                />
              </div>

              <div className="w-full rounded-lg p-6 md:p-14 bg-[#FFF] flex flex-col gap-12">
                <header className="flex items-center justify-between w-full">
                  <h2 className={`text-lg font-bold text-black`}>
                    Este é um resumo da sua assinatura:
                  </h2>
                </header>

                <div className="flex flex-col gap-8 w-full">
                  <div className="flex w-full md:items-center justify-between flex-col md:flex-row items-start gap-2">
                    <h3 className="text-black text-sm">Data</h3>

                    <h3 className="text-base font-semibold text-gray-100 flex items-center gap-2">
                      04/12/23 às 14:28
                    </h3>
                  </div>

                  <div className="w-full h-[1px] bg-gray-500" />

                  <div className="flex w-full md:items-center justify-between flex-col md:flex-row items-start gap-2">
                    <h3 className="text-black text-sm">Forma de pagamento:</h3>

                    <h3 className="text-base font-semibold text-gray-100 flex items-center gap-2">
                      <MasterBrand />

                      <b>MasterCard</b>

                      <span className="text-gray-200 font-normal">
                        **** 5035
                      </span>
                    </h3>
                  </div>

                  <div className="w-full h-[1px] bg-gray-500" />

                  <div className="flex w-full md:items-center justify-between flex-col md:flex-row items-start gap-2">
                    <h3 className="text-black text-sm">Plano:</h3>

                    <div className="flex items-start gap-3">
                      <p className="text-base font-semibold text-gray-100">
                        Plano Mensal:
                      </p>

                      <p className="text-base text-gray-200">
                        30 dias por R$ 5,90 Renovação automática Cancele quando
                        quiser
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </section>
    </main>
  )
}
