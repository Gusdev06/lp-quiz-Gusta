"use client"

import { useEffect } from "react"
import { ChevronDown, Users, BadgeCheck } from "lucide-react"
import { PrimaryButton } from "./primary-button"

interface ScreenEntradaProps {
  onNext: () => void
}

export function ScreenEntrada({ onNext }: ScreenEntradaProps) {
  useEffect(() => {
    // Load the vturb player script
    const script = document.createElement("script")
    script.src = "https://scripts.converteai.net/8961d838-aff2-4dce-9b39-e84022d332ce/players/697f8cbb1385ff513705f870/v4/player.js"
    script.async = true
    document.head.appendChild(script)

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector(`script[src="${script.src}"]`)
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [])

  return (
    <div className="flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Logo */}
      <div className="mb-8">
        <span className="text-gray-500 font-medium text-sm">@gustagoat.ia</span>
      </div>

      {/* Badge */}
      {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full gradient-border mb-8 animate-pulse">
        <BadgeCheck className="w-4 h-4 text-[#00FF88]" />
        <span className="text-xs font-medium text-black uppercase tracking-wider">
          Método Validado
        </span>
      </div> */}


      {/* Main Title */}
      <h1 className="font-heading text-[24px] md:text-[38px] font-bold leading-[1.15] tracking-[-0.02em] mb-4 text-balance max-w-[600px] px-2 text-black">
        <span className="text-[#00A13C]">10 vendas em 3 dias</span> postando vídeos de uma modelo que <span className="underline decoration-[#D9FF02] decoration-[4px] underline-offset-2">não existe</span>.
      </h1>

      <p className="text-[15px] text-gray-700 leading-relaxed mb-6 max-w-[420px] px-2">
        Ela foi criada em <b>menos de 10 minutos</b>. Custo: <b>zero</b>. Eu te mostro exatamente como.
      </p>

      {/* VSL Video */}
      <div className="w-full max-w-[400px] mb-6">
        <div
          dangerouslySetInnerHTML={{
            __html: `<vturb-smartplayer id="vid-697f8cbb1385ff513705f870" style="display: block; margin: 0 auto; width: 100%; max-width: 400px;"></vturb-smartplayer>`
          }}
        />
      </div>

      <div className="w-full max-w-[400px] mb-6">
        <p className="text-sm font-medium text-black leading-relaxed mb-4">
          Aprenda a criar sua própria <b>influencer de IA realista</b> — mesmo rosto em 100% dos vídeos — para escalar conteúdo, fortalecer sua marca e vender todos os dias <b>sem aparecer, sem gravar, sem pagar influencer</b>.
        </p>
        <p className="text-sm font-bold text-black animate-pulse">
          Clique no botão para continuar 👇
        </p>
      </div>

      {/* CTA Text */}


      {/* Primary Button */}
      <PrimaryButton onClick={onNext}>
        Quero saber como
      </PrimaryButton>

      {/* Social Proof */}
      <div className="flex items-center gap-2 mt-6 text-gray-400 text-xs">
        <Users className="w-4 h-4" />
        <span>+ de 847 pessoas já criaram a delas</span>
      </div>
    </div>
  )
}
