"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { PrimaryButton } from "./primary-button"
import { useQuizContext } from "@/components/quiz/quiz-context"

interface ScreenObjetivoProps {
    onNext: () => void
}

export function ScreenObjetivo({ onNext }: ScreenObjetivoProps) {
    const [selectedOption, setSelectedOption] = useState<number | null>(null)
    const { profileType } = useQuizContext()

    const handleSelect = (index: number) => {
        setSelectedOption(index)
    }

    const handleNext = () => {
        if (selectedOption !== null) {
            onNext()
        }
    }

    // Copy Variations per Profile
    const getCopy = () => {
        switch (profileType) {
            case "shopee-tiktok":
                return {
                    title: "Que tipo de produto você foca em vender nas suas contas?",
                    options: [
                        "Itens físicos baratos (Shopee, AliExpress)",
                        "Produtos Gamers e Eletrônicos em alta",
                        "Nichos Black e Infoprodutos",
                        "Moda, Beleza e Maquiagem",
                        "Outro"
                    ]
                }
            case "aumentar-empresa":
                return {
                    title: "Qual seria o maior salto na sua empresa nos próximos 30 dias?",
                    options: [
                        "Lotar a agenda com novos clientes sem depender de indicação",
                        "Parar de pagar caro em agência e ter resultado de verdade",
                        "Aumentar as vendas da minha loja ou e-commerce",
                        "Ter clientes chegando mesmo quando não estou produzindo nada",
                        "Outro"
                    ]
                }
            case "vender-servicos":
                return {
                    title: "Qual desses empresários pagariam mais rápido pelo seu trabalho?",
                    options: [
                        "Clínicas de Estética, Dentistas e Saúde",
                        "Lojas de Roupa, Suplementos e Produtos Físicos",
                        "Infoprodutores e Especialistas",
                        "Bares, Restaurantes e Eventos de Luxo",
                        "Outro"
                    ]
                }
            case "fechar-parcerias":
            default:
                return {
                    title: "Qual a sua meta de seguidores para esse mês com a IA?",
                    options: [
                        "Bater meus primeiros 10.000 seguidores",
                        "Passar dos 50.000 e ser notada pelas marcas",
                        "Atingir 100k e viver exclusivamente dos ganhos",
                        "Apenas engajar e criar comunidade primeiro",
                        "Outro"
                    ]
                }
        }
    }

    const { title, options } = getCopy()

    return (
        <div className="flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Title */}
            <h2 className="font-heading text-[24px] md:text-[28px] font-bold tracking-[-0.02em] mb-8 text-black leading-tight max-w-[420px]">
                {title}
            </h2>

            {/* Options */}
            <div className="w-full flex flex-col gap-3 mb-8">
                {options.map((option, index) => {
                    const isSelected = selectedOption === index

                    return (
                        <button
                            key={index}
                            onClick={() => handleSelect(index)}
                            className={`
                relative w-full p-5 rounded-xl text-left
                transition-all duration-300 group
                ${isSelected
                                    ? "bg-[green] border-[green] shadow-[0_4px_30px_rgba(0,255,136,0.4)] scale-[1.02]"
                                    : "bg-gray-50 border border-gray-200 hover:bg-gray-100 hover:scale-[1.01]"}
              `}
                        >
                            <div className="flex items-center justify-between gap-4">
                                <span className={`
                  text-[15px] leading-relaxed font-medium transition-colors
                  ${isSelected ? "text-white" : "text-gray-700"}
                `}>
                                    {option}
                                </span>

                                {/* Radio/Check Circle */}
                                <div className={`
                  flex-shrink-0 w-6 h-6 rounded-full border-2
                  flex items-center justify-center transition-all duration-300
                  ${isSelected
                                        ? "border-white bg-white/20"
                                        : "border-gray-300 group-hover:border-gray-400"}
                `}>
                                    {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-white" />}
                                </div>
                            </div>
                        </button>
                    )
                })}
            </div>

            <PrimaryButton
                onClick={handleNext}
                disabled={selectedOption === null}
                className={selectedOption === null ? "opacity-50 cursor-not-allowed" : ""}
            >
                Continuar
            </PrimaryButton>
        </div>
    )
}
