import { pageLinks } from "../data";
import PageLink from "./PageLink";

function PageLinks({ location }) {
  return (
    <ul className={location + "-links"} id={location + "-links"}>
      {pageLinks.map((pageLink) => (
        <PageLink key={pageLink} {...pageLink} itemClass={location + "-link"} />
      ))}
    </ul>
  );
}

export default PageLinks;
