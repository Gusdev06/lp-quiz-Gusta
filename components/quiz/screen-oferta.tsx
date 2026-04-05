"use client"

import { useQuizContext } from "./quiz-context"
import { ShieldCheck, CheckCircle2, ChevronDown, Check } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import { VagasCounter } from "./vagas-counter"

interface ScreenOfertaProps {
  onNext: () => void // Se houver algo após
}

export function ScreenOferta({ onNext }: ScreenOfertaProps) {
  const { profileType } = useQuizContext()
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs = [
    {
      q: "O que exatamente é esse treinamento?",
      a: "É um treinamento completo do zero que ensina, passo a passo, como criar Influencers de IA realistas, gerar conteúdos e vídeos prontos e usar isso para viralizar e monetizar. É método prático, não teoria."
    },
    {
      q: "Preciso gastar com IA para criar minha Influencer?",
      a: "Não. Você não precisa gastar nada para criar sua Influencer de IA. Mostramos como usar IAs gratuitas para gerar sua Influencer do zero e, além disso, apresentamos ferramentas profissionais para quem quiser escalar depois. Você começa sem investimento e evolui quando fizer sentido."
    },
    {
      q: "Em quanto tempo eu crio minha Influencer de IA?",
      a: "Em menos de 10 minutos, você já sai com sua Influencer de IA criada e pronta para uso. Nada de semanas estudando. É resultado imediato."
    },
    {
      q: "Preciso saber algo sobre IA, edição ou marketing?",
      a: "Não. O treinamento foi criado para quem está começando do absoluto zero. Sem programação, sem edição avançada e sem linguagem técnica. Você só segue, aplica e executa."
    }
  ]

  return (
    <div className="flex flex-col items-center w-full max-w-[500px] mx-auto pb-16 animate-in fade-in duration-700">

      {/* 1. Contador de Vagas Dinâmico */}
      <div className="w-full mb-4">
        <VagasCounter />
      </div>

      {/* Alerta de Oferta */}
      <div className="w-full bg-[#E57373] text-white rounded-2xl p-5 mb-10 shadow-sm relative overflow-hidden flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-6 h-6" />
          <h3 className="font-bold text-lg leading-tight">Oferta de lançamento</h3>
        </div>
        <p className="text-sm font-medium leading-snug">
          Acesso imediato ao método + bônus exclusivos desta turma.
        </p>
      </div>

      {/* 2. Ancoragem de Preço (Quanto custaria) */}
      <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-tight mb-6 text-black text-center text-balance">
        Quanto custaria fazer isso sozinho?
      </h2>

      <div className="w-full flex flex-col gap-2 mb-8">
        <div className="flex items-center justify-between bg-gray-50/80 rounded-xl p-4">
          <span className="text-gray-800 font-medium text-[15px]">Contratar modelo profissional</span>
          <span className="text-gray-400 font-semibold line-through">R$500</span>
        </div>
        <div className="flex items-center justify-between bg-gray-50/80 rounded-xl p-4">
          <span className="text-gray-800 font-medium text-[15px]">Editor de vídeo freelancer</span>
          <span className="text-gray-400 font-semibold line-through">R$300</span>
        </div>
        <div className="flex items-center justify-between bg-gray-50/80 rounded-xl p-4">
          <span className="text-gray-800 font-medium text-[15px]">Produção de conteúdo</span>
          <span className="text-gray-400 font-semibold line-through">R$400</span>
        </div>
        <div className="flex items-center justify-between bg-gray-50/80 rounded-xl p-4">
          <span className="text-gray-800 font-medium text-[15px]">Ferramentas e softwares</span>
          <span className="text-gray-400 font-semibold line-through">R$200</span>
        </div>
      </div>

      {/* Divisor 'OU' */}
      <div className="w-full flex items-center justify-center mb-8 relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-[#D9FF02]/30"></div>
        </div>
        <div className="relative bg-white border border-gray-100 px-4 py-2 rounded-full text-xs font-semibold text-gray-400">
          OU
        </div>
      </div>

      {/* 3. Box da Oferta e Botão */}
      <div className="bg-[#D9FF02]/20 text-[#00A13C] text-xs font-bold px-4 py-2 rounded-full mb-6 flex items-center gap-2 border border-[#D9FF02]/40">
        🚀 OFERTA EXCLUSIVA DE LANÇAMENTO
      </div>

      <h2 className="font-heading text-2xl font-bold tracking-tight mb-8 text-black text-center">
        O que você vai receber?
      </h2>

      {/* Imagem da Reportagem Exame */}
      <div className="w-full rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] mb-8 bg-white p-4">
        <Image
          src="https://i.imgur.com/gKuwTmT.jpeg"
          alt="Reportagem Exame"
          width={500}
          height={600}
          className="w-full h-auto rounded-xl object-contain"
          unoptimized
        />
      </div>

      {/* Checklist de Entrega */}
      <div className="w-full flex flex-col gap-4 mb-8">
        {(() => {
          let deliverables = []
          switch (profileType) {
            case "shopee-tiktok":
              deliverables = [
                { title: "Treinamento Completo:", subtitle: "Crie sua Influenciadora de IA do zero" },
                { title: "Conteúdo Ilimitado:", subtitle: "Aprenda a criar assets para centenas de produtos" },
                { title: "Estratégia de Vendas:", subtitle: "Rotina de postagens para TikTok Shop e Shopee" }
              ]
              break
            case "vender-servicos":
              deliverables = [
                { title: "Treinamento Completo:", subtitle: "Domine a criação de modelos hiper-realistas" },
                { title: "Fechamento de Contratos:", subtitle: "Como empacotar seu serviço de IA por R$ 2.000+" },
                { title: "Automação e Agilidade:", subtitle: "Entregue dezenas de vídeos em minutos e escale" }
              ]
              break
            case "fechar-parcerias":
            default:
              deliverables = [
                { title: "Treinamento completo:", subtitle: "Crie sua Influenciadora de IA do zero" },
                { title: "Estratégias validadas:", subtitle: "Para crescer seu perfil no Instagram" },
                { title: "Domine o UGC:", subtitle: "Crie vídeos que vendem no TikTok" }
              ]
              break
          }

          return deliverables.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div className="mt-0.5"><CheckCircle2 className="w-5 h-5 text-[#00A13C] fill-[#00A13C]/10" /></div>
              <p className="text-gray-700 text-[15px] leading-relaxed">
                <span className="font-semibold text-black block mb-0.5">{item.title}</span>
                {item.subtitle}
              </p>
            </div>
          ))
        })()}
      </div>

      {/* BOX DO PREÇO FINAL */}
      <div className="w-full bg-white rounded-3xl border border-gray-100 shadow-[0_8px_40px_rgba(0,0,0,0.04)] p-8 flex flex-col items-center mb-6 relative overflow-hidden">

        {/* Glow de fundo */}
        <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-[#D9FF02]/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-[150px] h-[150px] bg-[#00A13C]/5 blur-3xl rounded-full"></div>

        <span className="text-gray-400 font-medium line-through mb-1 text-sm relative z-10">R$147</span>

        <div className="flex items-center gap-2 mb-2 relative z-10">
          <span className="text-2xl font-bold text-black mt-2">6x de</span>
          <span className="text-6xl md:text-7xl font-sans font-black tracking-[-0.04em] text-[#00A13C] leading-none">R$9,66</span>
        </div>

        <span className="text-gray-500 font-medium text-sm mb-6 relative z-10">ou R$47,90 à vista</span>

        <p className="text-gray-400 text-xs text-center relative z-10">
          Oferta exclusiva de lançamento por tempo limitado.
        </p>
      </div>

      {/* BOTÃO E CHECKOUT CTA — profile-specific */}
      {(() => {
        const ctaByProfile: Record<string, string> = {
          "shopee-tiktok": "QUERO VENDER NA SHOPEE SEM APARECER",
          "vender-servicos": "QUERO COBRAR R$ 2.000+ POR ESSE SERVIÇO",
          "fechar-parcerias": "QUERO MINHA INFLUENCER DE IA AGORA",
        }
        const ctaText = ctaByProfile[profileType] || "QUERO MINHA INFLUENCER DE IA AGORA"
        return (
          <a
            href="https://pay.hub.la/K9i48YP1IZcxEKfw1AuW"
            className="w-full py-5 px-6 bg-[#008A33] hover:bg-[#007029] text-white text-[15px] font-bold tracking-wide rounded-2xl shadow-[0_10px_35px_rgba(0,161,60,0.3)] transition-all hover:-translate-y-1 hover:shadow-[0_15px_45px_rgba(0,161,60,0.4)] flex items-center justify-center mb-12 text-center"
          >
            {ctaText}
          </a>
        )
      })()}

      {/* 4. Depoimentos */}
      <h2 className="font-heading text-2xl font-bold tracking-tight mb-8 text-black text-center">
        Veja o que os alunos estão dizendo
      </h2>

      <div className="w-full flex flex-col gap-6 mb-16">
        <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
          <Image src="https://i.imgur.com/zRKXm61.jpeg" alt="Depoimento 1" width={400} height={300} className="w-full h-auto" unoptimized />
        </div>
        <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
          <Image src="https://i.imgur.com/Qew7LLK.jpeg" alt="Depoimento 2" width={400} height={300} className="w-full h-auto" unoptimized />
        </div>
        <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
          <Image src="https://i.imgur.com/tM1Lbxl.jpeg" alt="Depoimento 3" width={400} height={300} className="w-full h-auto" unoptimized />
        </div>
      </div>

      {/* 5. Garantia */}
      <div className="w-full flex items-start gap-4 mb-16 px-2">
        <div className="w-12 h-12 rounded-full bg-[#00A13C]/10 flex items-center justify-center shrink-0">
          <ShieldCheck className="w-6 h-6 text-[#00A13C]" />
        </div>
        <div className="flex flex-col text-left">
          <h4 className="font-bold text-black text-lg mb-1">Garantia de satisfação</h4>
          <p className="text-gray-600 text-sm leading-relaxed">
            Compra 100% segura com garantia de satisfação. Se não gostar, devolvemos seu dinheiro em até 7 dias.
          </p>
        </div>
      </div>

      {/* 6. FAQ */}
      <h2 className="font-heading text-2xl font-bold tracking-tight mb-8 text-black text-center text-[#D9FF02]/10 bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-400">
        Dúvidas Frequentes
      </h2>

      <div className="w-full flex flex-col gap-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="w-full bg-white border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => toggleFaq(index)}
              className="w-full px-5 py-4 flex items-center justify-between text-left focus:outline-none"
            >
              <span className="font-semibold text-black text-[15px] pr-4">{faq.q}</span>
              <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 shrink-0 ${openFaq === index ? 'rotate-180' : ''}`} />
            </button>

            <div
              className={`transition-all duration-300 ease-in-out px-5 overflow-hidden ${openFaq === index ? 'pb-4 max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <p className="text-[#00A13C] font-medium text-sm leading-relaxed font-sans">
                {faq.a}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}
