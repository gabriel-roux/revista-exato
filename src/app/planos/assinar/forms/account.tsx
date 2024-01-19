'use client'

import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import Button from '@/components/button'
import Checkbox from '@/components/checkbox'
import AddressBook from '@/components/icons/address-book'
import Link from 'next/link'
import { useState } from 'react'
import { Check, PencilSimpleLine } from '@phosphor-icons/react'

// Definindo o esquema de validação com Zod
const formSchema = zod.object({
  nome: zod.string().nonempty({ message: 'Nome é obrigatório' }),
  email: zod
    .string()
    .email({ message: 'Email inválido' })
    .nonempty({ message: 'Email é obrigatório' }),
  senha: zod
    .string()
    .min(6, { message: 'Senha deve ter pelo menos 6 caracteres' }),
  confirmarSenha: zod.string().min(8, { message: 'Confirme a senha' }),
  //   termos: zod.boolean().refine((val) => val, 'Você deve aceitar os termos'),
  //   noticias: zod.boolean(),
})

interface FormProps {
  nome: string
  email: string
  senha: string
  confirmarSenha: string
  termos: boolean
  noticias: boolean
}

interface AccountFormProps {
  prevStep: () => void
  nextStep: () => void
  step: number
}

export default function AccountForm({
  nextStep,
  step,
  prevStep,
}: AccountFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
  } = useForm({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = (data: any) => {
    try {
      nextStep()
    } catch (error) {}
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="md:w-[695px] w-full rounded-lg p-6 md:p-14 bg-[#FFF] flex flex-col gap-9"
    >
      <header className="flex items-start gap-3 md:items-center justify-between flex-col md:flex-row w-full">
        <h2 className="flex items-center gap-[18px] text-orange-200 text-lg font-bold">
          <span className="w-7 h-7 flex-shrink-0 text-sm items-center justify-center flex rounded-full border border-orange-600">
            1
          </span>

          <span className="flex items-center gap-[14px]">
            <AddressBook />
            Dados pessoais
          </span>
        </h2>

        {step === 0 && (
          <p className="text-gray-300 text-sm font-medium underline">
            Ja possui cadastro?{' '}
            <Link href="/" className="text-gray-100">
              Faça login
            </Link>
          </p>
        )}
      </header>
      {step === 0 ? (
        <>
          <div className="flex flex-col gap-6">
            <div className="w-full flex flex-col gap-1">
              <p className="text-xs font-semibold text-gray-300">Seu nome*</p>
              <input
                {...register('nome')}
                placeholder="Insira seu nome"
                type="text"
                className={`h-[50px] w-full transition-all duration-200 focus:border-orange-200 ${
                  errors.nome && '!border-justiça'
                } border-[1.5px] border-gray-500 bg-[#fff] p-6 rounded-lg outline-0 text-gray-100`}
              />
              {errors.nome && (
                <p className="text-xs text-justiça">{`${errors.nome.message}`}</p>
              )}
            </div>

            <div className="w-full flex flex-col gap-1">
              <p className="text-xs font-semibold text-gray-300">E-mail*</p>
              <input
                {...register('email')}
                placeholder="Insira seu email"
                type="email"
                className={`h-[50px] w-full  transition-all duration-200 ${
                  errors.email && '!border-justiça'
                } focus:border-orange-200 border-[1.5px] border-gray-500 bg-[#fff] p-6 rounded-lg outline-0 text-gray-100`}
              />
              {errors.email && (
                <p className="text-xs text-justiça">{`${errors.email.message}`}</p>
              )}
            </div>

            <div className="w-full flex flex-col gap-1">
              <p className="text-xs font-semibold text-gray-300">Senha*</p>
              <input
                type="password"
                {...register('senha')}
                placeholder="Insira sua senha"
                className={`h-[50px] w-full transition-all duration-200 ${
                  errors.nome && '!border-justiça'
                } focus:border-orange-200 border-[1.5px] border-gray-500 bg-[#fff] p-6 rounded-lg outline-0 text-gray-100`}
              />
              {errors.senha && (
                <p className="text-xs text-justiça">{`${errors.senha.message}`}</p>
              )}
            </div>

            <div className="w-full flex flex-col gap-1">
              <p className="text-xs font-semibold text-gray-300">
                Confirmar senha*
              </p>
              <input
                type="password"
                {...register('confirmarSenha')}
                placeholder="Confirme sua senha"
                className={`h-[50px] w-full transition-all duration-200 ${
                  errors.nome && '!border-justiça'
                } focus:border-orange-200 border-[1.5px] border-gray-500 bg-[#fff] p-6 rounded-lg outline-0 text-gray-100`}
              />
              {errors.confirmarSenha && (
                <p className="text-xs text-justiça">{`${errors.confirmarSenha.message}`}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Controller
              name="termos"
              control={control}
              defaultValue={false}
              render={({ field }) => (
                <p className="text-gray-200 text-xs md:text-sm flex items-center gap-2">
                  <Checkbox /> Li e concordo com os Termos de Uso e Política de
                  Privacidade *
                </p>
              )}
            />
            <Controller
              name="noticias"
              control={control}
              defaultValue={false}
              render={({ field }) => (
                <p className="text-gray-200 text-xs md:text-sm flex items-center gap-2">
                  <Checkbox /> Quero receber as principais notícias do dia no
                  meu e-mail
                </p>
              )}
            />
          </div>

          <div className="flex items-center justify-between">
            <p
              className={`${
                (errors.nome ||
                  errors.email ||
                  errors.senha ||
                  errors.confirmarSenha) &&
                '!text-justiça'
              } text-gray-200 text-xs`}
            >
              *Campos obrigatórios
            </p>
            <Button
              size="md"
              variant="secondary"
              className="w-[200px] h-[50px] bg-orange-200 text-gray-700 font-semibold"
              type="submit"
            >
              Confirmar cadastro
            </Button>
          </div>
        </>
      ) : (
        <div className="flex justify-between items-center gap-6">
          <div className="w-full flex flex-col gap-1">
            <p className="text-base text-gray-200">E-mail</p>

            <h3 className="text-base font-semibold text-gray-200 flex items-center gap-2">
              {watch('email')}
              <Check weight="bold" className="fill-orange-200" />
            </h3>
          </div>

          <button
            onClick={prevStep}
            className="text-orange-200 flex items-center gap-1"
          >
            Alterar{' '}
            <PencilSimpleLine
              size={20}
              className="text-orange-200"
              weight="fill"
            />
          </button>
        </div>
      )}
    </form>
  )
}
