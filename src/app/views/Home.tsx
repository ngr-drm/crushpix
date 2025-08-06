export const Layout = (props: any) => {
  return (
    <html>
      <head>
        <meta property="og:title" content="Crush PIX" />
        <meta property="og:description" content="Você ganhou um Pix do Amor. Veja agora! 🍓" />
        <meta property="og:image" content="https://crushpix.onrender.com/pix-logo.png" />
        <meta property="og:url" content={`https://crushpix.onrender.com/crushpix/view/${props.code}`} />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/style.css" />

      </head>
      <body>{props.children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Máscara de valor (já existente, mantendo aqui)
              const valueInput = document.getElementById('value');
              if (valueInput) {
                valueInput.addEventListener('input', function (e) {
                  let v = e.target.value.replace(/\\D/g, '');
                  v = (Number(v) / 100).toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  });
                  e.target.value = v;
                });
              }

              // Máscara de telefone (novo!)
              const wppInput = document.getElementById('wpp');
              if (wppInput) {
                wppInput.addEventListener('input', function (e) {
                  let v = e.target.value.replace(/\\D/g, '');
                  if (v.length > 11) v = v.slice(0, 11);

                  if (v.length >= 2) v = '(' + v.slice(0, 2) + ') ' + v.slice(2);
                  if (v.length >= 9) v = v.slice(0, 10) + '-' + v.slice(10);

                  e.target.value = v;
                });
              }
            `,
          }}
        />

      </body>
    </html>
  );
};

export const Home = (props: { code?: string }) => {
  return (
    <Layout>
      <>
        <div className="container">
          <h1>Crush PIX</h1>
          <p className="subtitle">o PIX do Amor</p>

          <div className="pix-icon">
            <img
              src="/pix-logo.png"
              alt="Pix logo"
              width="64"
              height="64"
              style={{ marginBottom: '1.5rem' }}
            />
          </div>

          <form method="post" action="/crushpix">
            <input
              type="text"
              id="target"
              name="target"
              placeholder="quem merece um amor na conta?"
              required
              autoFocus
            />
            <input
              type="text" s
              id="value"
              name="value"
              placeholder="quanto vale esse sentimento? 💳"
              required
            />
            <input
              type="text"
              id="message"
              name="message"
              placeholder="deixe uma mensagem..."
              required
            />
            <input
              type="text"
              id="wpp"
              name="wpp"
              placeholder="WhatsApp que deseja enviar?"
              required
            />
            <button type="submit" className="button primary">Criar agora</button>
          </form>
        </div>
      </>
    </Layout>
  );
};

