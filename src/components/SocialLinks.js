import { socialLinks } from "../data";

function SocialLinks({ location }) {
  return (
    <ul className={location + "-icons"}>
      {socialLinks.map((socialLink) => (
        <li key={socialLink.id}>
          <a
            href={socialLink.href}
            target="_blank"
            className={location + "-icon"}
            rel="noreferrer"
          >
            <i className={socialLink.icon}></i>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialLinks;
