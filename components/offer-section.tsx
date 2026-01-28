import { Lock } from "lucide-react"

export default function OfferSection() {
  return (
    <section className="offer-section">
      <div className="container-offer">
        <div className="offer-card">
          <div className="offer-header">
            <span className="eyebrow-badge">ACESSO IMEDIATO</span>
            <h2 className="offer-title">
              Comece sua transicao para a <br />
              Advocacia Empresarial
            </h2>
            <p className="offer-desc">
              Assista a aula completa e descubra como aplicar o Metodo DARE para
              atrair clientes que pagam honorarios recorrentes.
            </p>
          </div>

          <div className="pricing-block">
            <div className="price-anchor">
              <span className="strikethrough">De R$497,00</span>
              <span className="save-tag">ECONOMIZE 50%</span>
            </div>

            <div className="price-final">
              <span className="currency-label">por</span>
              <div className="amount-wrapper">
                <span className="currency-symbol">R$</span>
                <span className="amount-value">247</span>
                <span className="amount-cents">,00</span>
              </div>
            </div>

            <p className="payment-note">ou em ate 12x no cartao</p>
          </div>

          <div className="cta-wrapper">
            <a href="#" className="btn-green-pulse">
              Assistir a Aula Agora <span className="arrow">&rarr;</span>
            </a>
          </div>

          <div className="offer-footer">
            <div className="guarantee-line">
              <span>
                <Lock size={14} className="icon-lock" /> Compra Segura
              </span>
              <span className="dot">&bull;</span>
              <span>Acesso Vitalicio</span>
              <span className="dot">&bull;</span>
              <span>Conteudo Pratico</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
