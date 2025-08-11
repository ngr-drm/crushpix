import { Layout } from './Home';

const ViewCode = (props: { code: string, wpp: string, crushpixURL: string, created?: boolean }) => {
  
  const customAlertScript = props.created ? `
    <script>
      (function() {
        // Criar o elemento de alerta
        const alertDiv = document.createElement('div');
        alertDiv.className = 'custom-alert';
        alertDiv.textContent = 'Seu PIX do Amor ficou pronto! 🍓';
        document.body.appendChild(alertDiv);
        
        // Remover o alerta após a animação terminar
        setTimeout(() => {
          alertDiv.addEventListener('animationend', function(e) {
            if (e.animationName === 'fadeOut') {
              document.body.removeChild(alertDiv);
            }
          });
        }, 4500);
      })();
    </script>
  ` : '';

  return (
    <Layout props={props} >
      {props.created && <div dangerouslySetInnerHTML={{ __html: customAlertScript }} />}
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

        <form method="get" action={`/crushpix/view/${props.code}`}>
          <button type="submit" className="button primary">
            visualizar
          </button>
        </form>

        <form>
          <a
            href={`https://wa.me/${props.wpp}?text=${encodeURIComponent(props.crushpixURL)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="button whatsapp"
          >
            Enviar no WhatsApp
          </a>
        </form>

        <form method="get" action="/">
          <button type="submit" className="button secondary">
            voltar
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ViewCode;
