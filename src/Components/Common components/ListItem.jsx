export default function ListItem({ content, children, ...props }) {
  return (
    <li className="grey" aria-label={content} {...props}>
      {content} {children}
    </li>
  );
}
