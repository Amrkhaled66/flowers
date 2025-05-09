import { useMatches, Link, UIMatch, RouteObject } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";

type BreadcrumbMatch = UIMatch<
  {
    breadcrumb: string;
  },
  { breadcrumb: string }
>;

const ProfileNav = () => {
  const matches: RouteObject[] = useMatches();

  const crumbs = matches
    .filter((match): match is BreadcrumbMatch => {
      return !!match.handle?.breadcrumb;
    })
    .map((match) => ({
      breadcrumb: match.handle.breadcrumb,
      pathname: match.pathname,
    }));

  return (
    <nav className="flex items-center gap-x-1" style={{ padding: "1rem 0" }}>
      {crumbs.map((crumb) => (
        <span className="flex" key={crumb.pathname}>
          <Icon
            className="block lg:hidden"
            icon="ic:outline-chevron-right"
            width="24"
            height="24"
          />
          <Link to={crumb.pathname}>{crumb.breadcrumb}</Link>
        </span>
      ))}
    </nav>
  );
};

export default ProfileNav;
