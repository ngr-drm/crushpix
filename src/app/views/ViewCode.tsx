import { Layout } from './Home';

const ViewCode = (props: { code: string, wpp: string, crushpixURL: string, created?: boolean }) => {
  return (
    <Layout props={props} >
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

        {props.created && (
          <div className="confirmation-block">
            <div className="confirmation-logo">
              <span className="heart-emoji">🍓</span>
            </div>
            <p className="confirmation-text">seu PIX do Amor ficou pronto!</p>
          </div>
        )}

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
            className="button whatsapp" s
          >
            Enviar para WhatsApp
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
