export function Footer() {
  return (
    <footer className="min-h-20 relative flex flex-col justify-center items-center">
      <div className="gradient-border top-0 bg-gradient-to-r from-transparent via-main-border to-transparent" />
      <h3>Made with love by Jordan</h3>
      <p>
        images from{" "}
        <a
          href="https://unsplash.com/fr"
          target="_blank"
          className="underline"
          aria-label="Lien vers le site Unsplash"
        >
          Unsplash
        </a>{" "}
        &{" "}
        <a
          href="https://fr.freepik.com/"
          target="_blank"
          className="underline"
          aria-label="Lien vers le site Freepik"
        >
          Freepik
        </a>
      </p>
    </footer>
  );
}
