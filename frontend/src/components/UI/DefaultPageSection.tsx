import { HTMLAttributes, ReactNode } from "react";

interface DefaultPageSectionProps extends HTMLAttributes<HTMLElement> {
  divClasses?: string;
}

export const PageSection = (props: HTMLAttributes<HTMLElement>) => {
  return <section className={props?.className}>{props.children}</section>;
};

export const SectionDiv = (props: HTMLAttributes<HTMLElement>) => {
  return (
    <div className={`flex max-w-6xl mx-auto ${props.className}`}>
      {props?.children}
    </div>
  );
};

export const DefaultPageSection = {
  Section: PageSection,
  Div: SectionDiv,
};