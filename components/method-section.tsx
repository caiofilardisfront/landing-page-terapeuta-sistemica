export default function MethodSection() {
  return (
    <section className="method-section">
      <div className="container-method">
        <div className="method-header">
          <span className="eyebrow">A ESTRATEGIA</span>
          <h2 className="section-title">
            <span className="highlight">O que voce vai aprender</span>?
          </h2>
          <p className="section-desc">
            Uma aula direta ao ponto, com conhecimento pratico de quem vive essa
            realidade ha mais de 15 anos.
          </p>
        </div>

        <div className="method-grid">
          <div className="col-steps left-side">
            <div className="step-card" data-step="1">
              <h3 className="step-title">
                Advocacia Trabalhista Empresarial na pratica
              </h3>
              <p className="step-text">
                Entenda como funciona o dia a dia de quem atua{" "}
                <strong>assessorando empresas</strong> e de forma{" "}
                <strong>preventiva</strong> e <strong>estrategica</strong>.
              </p>
              <div className="connector-line"></div>
            </div>

            <div className="step-card" data-step="2">
              <h3 className="step-title">Modelo de consultoria mensal</h3>
              <p className="step-text">
                Descubra como estruturar contratos recorrentes que geram{" "}
                <strong>previsibilidade financeira</strong> para seu escritorio.
              </p>
              <div className="connector-line"></div>
            </div>
          </div>

          <div className="col-center">
            <div className="radar-core">
              <div className="ring ring-1"></div>
              <div className="ring ring-2"></div>

              <div className="core-circle">
                <span>
                  METODO
                  <br />
                  EXCLUSIVO
                </span>
              </div>

              <div className="node node-1">
                <span>1</span>
              </div>
              <div className="node node-2">
                <span>2</span>
              </div>
              <div className="node node-3">
                <span>3</span>
              </div>
              <div className="node node-4">
                <span>4</span>
              </div>
            </div>
          </div>

          <div className="col-steps right-side">
            <div className="step-card" data-step="3">
              <h3 className="step-title">
                Erros mais comuns de quem esta comecando
              </h3>
              <p className="step-text">
                Aprenda com os <strong>equivocos</strong> que a maioria comete e
                saiba como evita-los desde o inicio.
              </p>
              <div className="connector-line"></div>
            </div>

            <div className="step-card" data-step="4">
              <h3 className="step-title">
                Como gerar valor real para as empresas
              </h3>
              <p className="step-text">
                Entenda o que os{" "}
                <strong>empresarios realmente precisam</strong> e como voce pode
                se tornar <strong>indispensavel</strong> para eles.
              </p>
              <div className="connector-line"></div>
            </div>
          </div>
        </div>

        <div className="mobile-timeline"></div>
      </div>
    </section>
  )
}
