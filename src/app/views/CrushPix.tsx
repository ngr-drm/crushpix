import { Layout } from './Home'
import { Fragment } from 'hono/jsx'

const CrushPix = (props: {
  code: string
  target: string
  message: string
  wpp: string
  value: string
}) => {
  return (
    <Layout>
      <Fragment>
        <div class="container">
          <h1>Crush PIX</h1>
          <p class="subtitle">o PIX do Amor</p>

          <div class="pix-icon">
            <img
              src="/pix-logo.png"
              alt="Pix logo"
              width="64"
              height="64"
            />
          </div>

          {/* Bloco com fundo gradiente */}

          <div id="lines" class="romantic-text"></div>


          <script
            dangerouslySetInnerHTML={{
              __html: `
                const lines = [
                  "Salve ${props.target}!",
                  "Pensei em você e decidir fazer diferente...",
                  "você recebeu um Pix do Amor! 🍓",
                  "valor desse sentimento:",
                  "${props.value}",
                  "${props.message}",
                  "agora me diga sua chave Pix...",
                  "e aguarde meu carinho na sua conta!"
                ];

                const container = document.getElementById("lines");
                let i = 0;

                function showNextLine() {
                  if (i < lines.length) {
                    const p = document.createElement("p");
                    p.textContent = lines[i];
                    p.className = "fade-line";
                    container.appendChild(p);
                    i++;
                    setTimeout(showNextLine, 2500);
                  } else {
                    document.getElementById("final-line").style.display = "block";
                  }
                }

                showNextLine();
              `,
            }}
          />
        </div>
      </Fragment>
    </Layout>
  )
}

export default CrushPix
