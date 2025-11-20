import PageLinks from "./PageLinks";
import SocialLinks from "./SocialLinks";

function Footer() {
  return (
    <footer className="section footer">
      <PageLinks location="footer" />
      <SocialLinks location="footer" />

      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
}

export default Footer;
