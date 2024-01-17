'use client'

import { useState } from 'react'
import AccountForm from './account'
import PaymentForm from './payment'
import RevisionForm from './revision'

export default function StepForm() {
  const [step, setStep] = useState(0)

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

  return (
    <div className="flex flex-col gap-8">
      <AccountForm prevStep={prevStep} nextStep={nextStep} step={step} />

      <PaymentForm prevStep={prevStep} nextStep={nextStep} step={step} />

      <RevisionForm />
    </div>
  )
}
