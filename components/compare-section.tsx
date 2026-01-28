export default function CompareSection() {
  return (
    <section className="compare-integrated">
      <div className="container-compare">
        <div className="dual-panel">
          <div className="panel-side side-left">
            <div className="panel-header">
              <h3 className="panel-title">
                <br />
                <strong>Esta aula nao e para ...</strong>
              </h3>
              <div className="divider-line red"></div>
            </div>

            <ul className="panel-list">
              <li>
                <div className="icon-box red">&#10005;</div>
                <div className="text-content">
                  <strong>Quem busca formulas magicas</strong>
                  <p>ganhos rapidos</p>
                </div>
              </li>
              <li>
                <div className="icon-box red">&#10005;</div>
                <div className="text-content">
                  <strong>Profissionais sem interesse</strong>
                  <p>em estudar e se aprofundar.</p>
                </div>
              </li>
              <li>
                <div className="icon-box red">&#10005;</div>
                <div className="text-content">
                  <strong>Quem nao esta disposto</strong>
                  <p>a construir relacionamentos de longo prazo.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="panel-side side-right">
            <div className="panel-header">
              <h3 className="panel-title text-white">
                <br />
                <span className="text-gold">Esta aula e para ...</span>
              </h3>
              <div className="divider-line gold"></div>
            </div>

            <ul className="panel-list">
              <li>
                <div className="icon-box gold">&#10003;</div>
                <div className="text-content">
                  <strong className="text-white">Advogados</strong>
                  <p className="text-light">
                    que querem sair do contencioso tradicional.
                  </p>
                </div>
              </li>
              <li>
                <div className="icon-box gold">&#10003;</div>
                <div className="text-content">
                  <strong className="text-white">Profissionais</strong>
                  <p className="text-light">
                    que desejam atuar de forma preventiva para empresas.
                  </p>
                </div>
              </li>
              <li>
                <div className="icon-box gold">&#10003;</div>
                <div className="text-content">
                  <strong className="text-white">Quem busca construir</strong>
                  <p className="text-light">
                    uma carreira solida e de longo prazo.
                  </p>
                </div>
              </li>
              <li>
                <div className="icon-box gold">&#10003;</div>
                <div className="text-content">
                  <strong className="text-white">
                    Advogados que querem se posicionar
                  </strong>
                  <p className="text-light">
                    de forma estrategica no mercado.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="conclusion-wrapper">
          <p className="conclusion-text">
            Esta aula foi pensada para{" "}
            <strong>Advogados que querem trilhar</strong> um caminho solido e
            etico na <strong>Advocacia Empresarial.</strong>
          </p>
          <a href="#" className="btn-gold-solid">
            <span className="arrow">&rarr;</span> ASSISTIR A AULA EXCLUSIVA
            AGORA
          </a>
        </div>
      </div>
    </section>
  )
}
