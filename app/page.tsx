"use client"

import { useState, useEffect, useRef } from "react"
import { ScreenEntrada } from "@/components/quiz/screen-entrada"
import { ScreenQuestion } from "@/components/quiz/screen-question"
import { filterQuestion, quizBranches, fallbackQuestions } from "@/data/quiz-questions"
import { useQuizContext } from "@/components/quiz/quiz-context"
import { ScreenObjetivo } from "@/components/quiz/screen-objetivo"
import { ScreenDesafio } from "@/components/quiz/screen-desafio"
import { ScreenRevelacao } from "@/components/quiz/screen-revelacao"
import { ScreenProvaResultado } from "@/components/quiz/screen-prova-resultado"
import { ScreenUgcDemo } from "@/components/quiz/screen-ugc-demo"
import { ScreenVideosNegocios } from "@/components/quiz/screen-videos-negocios"
import { ScreenVideoMovimentos } from "@/components/quiz/screen-video-movimentos"
import { ScreenPossibilidades } from "@/components/quiz/screen-possibilidades"
import { ScreenDecisao } from "@/components/quiz/screen-decisao"
import { ScreenOferta } from "@/components/quiz/screen-oferta"
import { ProgressBar } from "@/components/quiz/progress-bar"
import { BackButton } from "@/components/quiz/back-button"
import { trackEvent } from "@/lib/track-events"

export default function QuizFunil() {
  const [currentScreen, setCurrentScreen] = useState(1)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const { setAnswer, setLeadData, calculateProfile, profileType } = useQuizContext()

  // 1 (Entrada) + 3 (Perguntas) + 10 (VSL Restante com Oferta) = 14
  const totalScreens = 14

  // Lógica de Ramificação Multi-Quiz
  const specificQuestions = profileType !== "indefinido" ? quizBranches[profileType] : fallbackQuestions

  const goToNext = () => {
    if (isTransitioning) return
    setIsTransitioning(true)

    setTimeout(() => {
      setCurrentScreen((prev) => {
        let next = prev + 1
        // Pular etapas
        if (next === 10 && profileType === "shopee-tiktok") next++
        if (next === 12 && profileType === "aumentar-empresa") next++
        return Math.min(next, totalScreens)
      })
      setIsTransitioning(false)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 400)
  }

  const goBack = () => {
    if (isTransitioning || currentScreen === 1) return
    setIsTransitioning(true)

    setTimeout(() => {
      setCurrentScreen((prev) => {
        let prevScreen = prev - 1
        // Pular etapas ao voltar
        if (prevScreen === 12 && profileType === "aumentar-empresa") prevScreen--
        if (prevScreen === 10 && profileType === "shopee-tiktok") prevScreen--
        return Math.max(prevScreen, 1)
      })
      setIsTransitioning(false)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 400)
  }

  // Tracking de carregamento inicial
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    trackEvent('funnel_started', { step: 1 })
  }, [])

  // Tracking quando troca de página
  useEffect(() => {
    if (currentScreen > 1) {
      trackEvent('step_viewed', { step: currentScreen })
    }
  }, [currentScreen])

  const renderScreen = () => {
    const screenProps = { onNext: goToNext }

    switch (currentScreen) {
      case 1:
        return <ScreenEntrada {...screenProps} />
      case 2:
        return (
          <ScreenQuestion
            question={filterQuestion}
            currentQuestion={1}
            totalQuestions={3}
            onAnswer={(option) => {
              setAnswer({ questionId: 1, optionId: option.id, tag: option.tag || 'neutro' })
              calculateProfile(option.tag)
              goToNext()
            }}
          />
        )
      case 3:
        return (
          <ScreenQuestion
            question={specificQuestions[0]}
            currentQuestion={2}
            totalQuestions={3}
            onAnswer={(option) => {
              setAnswer({ questionId: 2, optionId: option.id, tag: option.tag || 'neutro' })
              goToNext()
            }}
          />
        )
      case 4:
        return (
          <ScreenQuestion
            question={specificQuestions[1]}
            currentQuestion={3}
            totalQuestions={3}
            onAnswer={(option) => {
              setAnswer({ questionId: 3, optionId: option.id, tag: option.tag || 'neutro' })
              goToNext()
            }}
          />
        )
      case 5:
        return <ScreenObjetivo {...screenProps} />
      case 6:
        return <ScreenDesafio {...screenProps} />
      case 7:
        return <ScreenRevelacao {...screenProps} />
      case 8:
        return <ScreenProvaResultado {...screenProps} />
      case 9:
        return <ScreenUgcDemo {...screenProps} />
      case 10:
        return <ScreenVideosNegocios {...screenProps} />
      case 11:
        return <ScreenVideoMovimentos {...screenProps} />
      case 12:
        return <ScreenPossibilidades {...screenProps} />
      case 13:
        return <ScreenDecisao {...screenProps} />
      case 14:
        return <ScreenOferta onNext={() => { }} />
      default:
        return <ScreenEntrada {...screenProps} />
    }
  }

  return (
    <>
      <main className="min-h-screen bg-background relative overflow-hidden">
        {/* Subtle grid background */}
        <div
          className="fixed inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />

        {/* Gradient orb effects */}
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#00FF88] opacity-[0.03] rounded-full blur-[150px] pointer-events-none" />
        <div className="fixed bottom-0 right-0 w-[400px] h-[400px] bg-[#00D4FF] opacity-[0.02] rounded-full blur-[120px] pointer-events-none" />

        {/* Progress bar */}
        <ProgressBar current={currentScreen} total={totalScreens} />

        {/* Back button */}
        {currentScreen > 1 && <BackButton onClick={goBack} />}

        {/* Main content */}
        <div
          ref={containerRef}
          className="relative z-10 w-full max-w-[480px] mx-auto px-5 md:px-6 pt-16 pb-12"
        >
          <div
            className={`transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] ${isTransitioning
              ? "opacity-0 translate-y-5"
              : "opacity-100 translate-y-0"
              }`}
          >
            {renderScreen()}
          </div>
        </div>
      </main>
    </>
  )
}
