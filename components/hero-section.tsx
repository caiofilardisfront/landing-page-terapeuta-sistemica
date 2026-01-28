"use client"

import { useEffect, useRef, useState } from "react"
import { Volume2, VolumeX } from "lucide-react"

declare global {
  interface Window {
    YT: {
      Player: new (
        elementId: string,
        config: {
          height: string
          width: string
          videoId: string
          playerVars: Record<string, number | string>
          events: {
            onReady: (event: { target: YTPlayer }) => void
          }
        }
      ) => YTPlayer
    }
    onYouTubeIframeAPIReady: () => void
  }
}

interface YTPlayer {
  mute: () => void
  unMute: () => void
  playVideo: () => void
  pauseVideo: () => void
  seekTo: (seconds: number) => void
  setVolume: (volume: number) => void
  getPlayerState: () => number
}

export default function HeroSection() {
  const [isMuted, setIsMuted] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)
  const playerRef = useRef<YTPlayer | null>(null)

  useEffect(() => {
    const tag = document.createElement("script")
    tag.src = "https://www.youtube.com/iframe_api"
    const firstScriptTag = document.getElementsByTagName("script")[0]
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag)

    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player("yt-player", {
        height: "100%",
        width: "100%",
        videoId: "qSTXAWiWEMs",
        playerVars: {
          autoplay: 1,
          controls: 0,
          disablekb: 1,
          fs: 0,
          loop: 1,
          modestbranding: 1,
          rel: 0,
          showinfo: 0,
          mute: 1,
          playlist: "qSTXAWiWEMs",
        },
        events: {
          onReady: (event) => {
            event.target.mute()
            event.target.playVideo()
          },
        },
      })
    }
  }, [])

  const handleVideoClick = () => {
    if (playerRef.current) {
      if (isMuted) {
        playerRef.current.unMute()
        playerRef.current.seekTo(0)
        playerRef.current.setVolume(100)
        setIsMuted(false)
        setIsPlaying(true)
      } else {
        const playerState = playerRef.current.getPlayerState()
        if (playerState === 1) {
          playerRef.current.pauseVideo()
          setIsPlaying(false)
        } else {
          playerRef.current.playVideo()
          setIsPlaying(true)
        }
      }
    }
  }

  return (
    <section className="hero-prc-premium">
      <div className="bg-pattern"></div>

      <div className="container">
        <div className="hero-grid">
          <div className="content-col">
            <div className="header-brand">
              <h2 className="logo">GUIA PRC</h2>
              <span className="logo-sub">Guia Pratico de Recursos Civeis</span>
            </div>

            <h1 className="headline">
              Como Comecar na Advocacia <br />
              <span className="highlight-serif">Trabalhista Empresarial</span>
            </h1>

            <p className="subheadline">
              Descubra como sair do <strong>contencioso tradicional</strong> e
              atuar de forma estrategica, preventiva e consultiva para empresas.
            </p>

            <div className="cta-wrapper">
              <a href="#" className="cta-button-pulse">
                ASSISTA A AULA EXCLUSIVA <span className="arrow">&rarr;</span>
              </a>
              <span className="cta-subtext">Acesso imediato e vitalicio</span>
            </div>
          </div>

          <div className="video-col">
            <div className="video-atmosphere"></div>

            <div className={`video-frame clean-player ${isPlaying ? "is-playing" : ""}`}>
              <div id="yt-player"></div>

              <div className="click-shield" onClick={handleVideoClick}></div>

              <div className="sound-toggle-btn" id="sound-btn">
                <div className="sound-icon-pulse">
                  <span className="icon-speaker">
                    {isMuted ? <VolumeX size={32} /> : <Volume2 size={32} />}
                  </span>
                </div>
                <p className="sound-text">{isMuted ? "ATIVAR SOM" : "SOM ATIVO"}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="features-bar">
          <div className="feature-item">
            <span className="icon">&#9203;</span>
            <div className="feature-text">
              <strong>Acesso Imediato</strong>
              <span>Por 1 ano completo</span>
            </div>
          </div>
          <div className="feature-divider"></div>
          <div className="feature-item">
            <span className="icon">&#128172;</span>
            <div className="feature-text">
              <strong>Tira-Duvidas</strong>
              <span>Mentoria direta</span>
            </div>
          </div>
          <div className="feature-divider"></div>
          <div className="feature-item">
            <span className="icon">&#128101;</span>
            <div className="feature-text">
              <strong>Comunidade</strong>
              <span>Networking juridico</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
