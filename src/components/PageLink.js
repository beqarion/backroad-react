function PageLink({ id, href, text, itemClass }) {
  return (
    <li>
      <a href={href} className={itemClass} rel="noreferrer">
        {text}
      </a>
    </li>
  );
}
export default PageLink;
