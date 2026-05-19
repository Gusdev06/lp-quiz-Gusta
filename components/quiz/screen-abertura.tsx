"use client"

import { PrimaryButton } from "./primary-button"
import { VturbPlayer } from "./vturb-player"

interface ScreenAberturaProps {
  onNext: () => void
}

export function ScreenAbertura({ onNext }: ScreenAberturaProps) {
  return (
    <div className="flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Logo */}
      <div className="mb-6">
        <span className="text-gray-500 font-medium text-sm">@gustagoat.ia</span>
      </div>

      {/* Headline */}
      <h1 className="font-heading text-[24px] md:text-[38px] font-bold leading-[1.15] tracking-[-0.02em] mb-6 text-balance max-w-[600px] px-2 text-black">
        Veja como influenciadoras de IA estão faturando <span className="text-[#00A13C]">mais de R$ 150 mil por mês</span> na internet  <span className="underline decoration-[#D9FF02] decoration-[4px] underline-offset-2">sem aparecer</span>.
      </h1>

      {/* VSL Video */}
      <VturbPlayer videoId="6a0c8e4b81efc38fe8cce83d" className="w-full max-w-[400px] mb-6" />

      <div className="w-full max-w-[400px] mb-6">
        <p className="text-sm font-bold text-black animate-pulse">
          Clique no botão abaixo para começar 👇
        </p>
      </div>

      {/* CTA */}
      <PrimaryButton onClick={onNext} animated>
        Quero aprender a fazer a minha
      </PrimaryButton>
    </div>
  )
}
