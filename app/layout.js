import NavSet from "./NavegationCtrl"
import {
  FooterSection
} from "./SetFooter";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        {/* [Corpus; Navegation Bar] */}
        <NavSet />

        {/* [Corpus; PAGES] */}
        {children}

        {/* [Corpus; Footer] */}
        <FooterSection/>
        {/* [Corpus; BOOTSTRAP .JS] */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossOrigin="anonymous"></script>
      </body>
    </html>
  )
}
