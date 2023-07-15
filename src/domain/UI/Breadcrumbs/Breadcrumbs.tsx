import { Breadcrumbs as BreadcrumbsComponent, Anchor } from "@mantine/core";
import "./Breadcrumbs.scss";

const items = [
  { title: "Home", href: "#" },
  { title: "Users", href: "#" },
  { title: "Nikola", href: "#" },
].map((item, index) => (
  <Anchor className="anchor" href={item.href} key={index}>
    {item.title}
  </Anchor>
));

const Breadcrumbs = () => {
  return (
    <BreadcrumbsComponent className="component">{items}</BreadcrumbsComponent>
  );
};

export default Breadcrumbs;
