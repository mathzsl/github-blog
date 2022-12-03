import { AnchorHTMLAttributes, Children, ReactNode } from "react";
import { ExternalLinkContainer } from "./styles";

interface ExternalLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  text: string;
  children: ReactNode;
  variant?: "iconLeft";
}

export function ExternalLink({
  text,
  children,
  variant,
  ...props
}: ExternalLinkProps) {
  return (
    <ExternalLinkContainer {...props} variant={variant}>
      {text}
      {children}
    </ExternalLinkContainer>
  );
}
