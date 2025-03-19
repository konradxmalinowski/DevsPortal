export default function ListItem({ content, children, ...props }) {
  return (
    <li className="grey" {...props}>
      {content} {children}
    </li>
  );
}
