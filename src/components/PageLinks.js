import { pageLinks } from "../data";

function PageLinks({ location }) {
  return (
    <ul className={location + "-links"} id={location + "-links"}>
      {pageLinks.map((pageLink) => (
        <li key={pageLink.id}>
          <a href={pageLink.href} className={location + "-link"} rel="noreferrer">
            {pageLink.text}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default PageLinks;
