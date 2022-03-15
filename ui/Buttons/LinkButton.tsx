interface LinkButtonProps {
  href: string;
  label: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ href, label }) => {
  return <a href={href}>{label}</a>;
};

export default LinkButton;
