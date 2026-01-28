import Image from "next/image"

export default function BioSection() {
  return (
    <section className="bio-waleska">
      <div className="container-bio">
        <div className="bio-visual">
          <div className="visual-backdrop"></div>

          <div className="image-wrapper">
            <Image
              src="/Foto-Waleska.JPG"
              alt="Foto Profissional Waleska Quintela"
              className="profile-img"
              width={500}
              height={600}
              priority
            />

            <div className="experience-badge">
              <span className="exp-number">+15</span>
              <span className="exp-text">
                ANOS DE
                <br />
                EXPERIENCIA
              </span>
            </div>
          </div>
        </div>

        <div className="bio-content">
          <span className="eyebrow">QUEM E</span>
          <h2 className="bio-name">Waleska Quintela</h2>
          <p className="authority-line">
            Professora | Mentora de Advogados | Palestrante Internacional
          </p>

          <div className="quote-box">
            <span className="quote-icon">&#10077;</span>
            <p className="quote-text">A Prevencao e sempre a melhor opcao!</p>
          </div>

          <div className="bio-text">
            <p>
              Com uma trajetoria marcada pela excelencia tecnica e pela busca
              incessante por justica, Waleska consolidou seu nome como uma
              referencia no Direito Civel. Sua atuacao nao se resume a vencer
              processos, mas a redefinir estrategias.
            </p>
            <p>
              Acredita que o advogado moderno precisa ir alem da peticao: e
              necessario visao de negocio, inteligencia emocional e uma
              capacidade impar de antecipar cenarios nos tribunais superiores.
            </p>
          </div>

          <div className="expertise-tags">
            <span className="tag">Atuacao em todo o Pais</span>
            <span className="tag">Foco em Prevencao</span>
            <span className="tag">Consultoria Empresarial</span>
          </div>
        </div>
      </div>
    </section>
  )
}
