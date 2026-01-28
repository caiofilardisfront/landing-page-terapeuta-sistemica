import { Shield, TrendingUp, Clock, Handshake } from "lucide-react"

export default function BenefitsSection() {
  return (
    <section className="benefits-dark-section">
      <div className="container-benefits">
        <div className="benefits-header-dark">
          <span className="eyebrow-gold">BENEFICIOS</span>
          <h2 className="section-title-serif text-white">
            Por que atuar na <br />
            advocacia preventiva
          </h2>
          <p className="section-subtitle-dark">
            A Advocacia Trabalhista Empresarial oferece vantagens estrategicas
            que vao muito alem das rotinas do tribunal.
          </p>
        </div>

        <div className="staggered-grid-wrapper">
          <div className="dark-benefit-card">
            <div className="icon-wrapper-gold">
              <Shield size={28} strokeWidth={1.5} />
            </div>
            <h3 className="card-title-dark">Prevencao de Passivo</h3>
            <p className="card-desc-dark">
              Antecipe riscos ocultos e blinde a empresa cliente contra demandas
              trabalhistas evitaveis e custosas.
            </p>
          </div>

          <div className="dark-benefit-card staggered-down">
            <div className="icon-wrapper-gold">
              <TrendingUp size={28} strokeWidth={1.5} />
            </div>
            <h3 className="card-title-dark">Receita Previsivel</h3>
            <p className="card-desc-dark">
              Contratos de partido mensal (fee mensal) geram estabilidade
              financeira e fluxo de caixa recorrente para o escritorio.
            </p>
          </div>

          <div className="dark-benefit-card">
            <div className="icon-wrapper-gold">
              <Clock size={28} strokeWidth={1.5} />
            </div>
            <h3 className="card-title-dark">Qualidade de Vida</h3>
            <p className="card-desc-dark">
              Menos audiencias estressantes e prazos fatais, mais tempo para
              trabalho intelectual estrategico e vida pessoal.
            </p>
          </div>

          <div className="dark-benefit-card staggered-down">
            <div className="icon-wrapper-gold">
              <Handshake size={28} strokeWidth={1.5} />
            </div>
            <h3 className="card-title-dark">Parceria Estrategica</h3>
            <p className="card-desc-dark">
              Deixe de ser apenas um &quot;resolvedor de problemas&quot; e
              torne-se um conselheiro de confianca indispensavel para o
              empresario.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
