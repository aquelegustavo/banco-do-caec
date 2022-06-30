import styles from "./styles.module.css";

const ErrorPage = () => {
  const ErrorIcon = () => (
    <svg
      viewBox="0 0 87 87"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="Group-2" transform="translate(2.000000, 2.000000)">
          <circle
            id="Oval-2"
            stroke="rgba(252, 191, 191, .5)"
            strokeWidth="4"
            cx="41.5"
            cy="41.5"
            r="41.5"
          ></circle>
          <circle
            className={styles.circle}
            stroke="#F74444"
            strokeWidth="4"
            cx="41.5"
            cy="41.5"
            r="41.5"
          ></circle>
          <path
            className={styles.line1}
            d="M22.244224,22 L60.4279902,60.1837662"
            id="Line"
            stroke="#F74444"
            strokeWidth="3"
            strokeLinecap="square"
          ></path>
          <path
            className={styles.line2}
            d="M60.755776,21 L23.244224,59.8443492"
            id="Line"
            stroke="#F74444"
            strokeWidth="3"
            strokeLinecap="square"
          ></path>
        </g>
      </g>
    </svg>
  );

  return (
    <div>
      <main className={styles.container}>
        <div className={`${styles.errorBox} box`}>
          <div className={styles.errorIcon}>
            <ErrorIcon />
          </div>
          <h1>Erro ao processar pagamento</h1>
          <p>Converse com a diretoria da venda de produtos do CAEC.</p>
        </div>
      </main>
    </div>
  );
};

export default ErrorPage;

export async function getServerSideProps({ query }) {
  return {
    props: {
      price: query.price || 0.0,
    },
  };
}
