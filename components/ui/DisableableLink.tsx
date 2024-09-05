import Link from "next/link";

export interface DisableableLinkProps {
  href: string;
  disabled?: boolean;
  children?: any;
  target?: string;
  rel?: string;
  className?: string;
}

export default function DisableableLink(props: DisableableLinkProps) {
  if (props.disabled) {
    return props.children;
  }

  // Render a link if not disabled
  return (
    <Link
      href={props.href}
      target={props.target}
      rel={props.rel}
      className={props.className}
    >
      {props.children}
    </Link>
  );
}
