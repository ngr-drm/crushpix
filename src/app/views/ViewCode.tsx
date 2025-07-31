import { Layout } from './Home';

const ViewCode = (props: { code: string; wpp: string }) => {
  return (
    <Layout>
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
            href={`https://wa.me/${props.wpp}?text=${encodeURIComponent("test")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="button whatsapp"
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
