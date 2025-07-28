import quattroLogo from "../assets/images/quattroLogo.png";
export function Footer() {
  return (
    <footer className="min-h-20 relative flex flex-col justify-center items-center">
      <div className="gradient-border top-0 bg-gradient-to-r from-transparent via-main-border to-transparent" />
      <div className="text-xl flex justify-center items-center">
        <h3>Made with love by</h3>
        <img src={quattroLogo} alt="Logo Quattro" className="h-8" />
      </div>
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
