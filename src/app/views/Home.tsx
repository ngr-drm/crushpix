export const Layout = (props: any) => {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/style.css" />

      </head>
      <body>{props.children}
        <script dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('DOMContentLoaded', function () {
              const input = document.getElementById('value');
              if (input) {
                input.addEventListener('input', function (e) {
                  let v = e.target.value.replace(/\\D/g, '');
                  if (!v) return e.target.value = '';
                  v = (Number(v) / 100).toFixed(2).replace('.', ',');
                  e.target.value = 'R$ ' + v.replace(/\\B(?=(\\d{3})+(?!\\d))/g, '.');
                });
              }
            });
          `
        }} />
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

