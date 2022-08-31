export const Footer = ({ styles }) => {
  return (
    <footer className={styles.footer}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        ©2022
        <span className={styles.logo}>
          <img
            className="cd-album-cover"
            src="/vercel.svg"
            alt="Vercel Logo"
            width={72}
            height={16}
          />
        </span>
      </a>
    </footer>
  );
};
