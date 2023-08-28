import React, { ReactNode, useEffect, useState } from "react";
import { BreadcrumbStyled, BreadcrumbItemStyled } from "./styled";
import { ArrowRight } from "../../styles/iconography";
import { useTheme } from "styled-components";

type Crumb = {
  label: string;
  url?: string;
  icon?: ReactNode;
};

type Props = {
  breadcrumbs: Crumb[];
  divider?: ReactNode;
  baseUrl?: string;
};

type BreadcrumbItemProps = {
  breadcrumb: Crumb;
};

const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({ breadcrumb }) => {
  const [active, setActive] = useState<boolean>(false);
  const { label, icon, url } = breadcrumb;

  useEffect(() => {
    // QUICK and ugly solution for testing purpose
    // TODO: fix with regexp (match: exact)
    // TODO: accept url matcher

    if (!url) return setActive(false);
    setActive(window.location.href.includes(url));
  }, [url, setActive]);

  return (
    <BreadcrumbItemStyled active={active} href={url} target="_self">
      {icon}
      <span>{label}</span>
    </BreadcrumbItemStyled>
  );
};

const Breadcrumb: React.FC<Props> = ({
  breadcrumbs = [],
  divider,
  baseUrl = "",
}) => {
  //    TODO: may be separate configuration file
  const { colors } = useTheme();
  const breadcrumbsLength = breadcrumbs.length;
  const dividerElement = divider ?? <ArrowRight color={colors.icon} />;

  const mapBreadcrumb = (breadcrumb: Crumb): Crumb => {
    if (!baseUrl) return breadcrumb;
    return {
      ...breadcrumb,
      url: `${baseUrl}${breadcrumb.url}`,
    };
  };

  if (!breadcrumbs.length) return null;

  return (
    <BreadcrumbStyled>
      {breadcrumbs.map(mapBreadcrumb).map((breadcrumb, index) => (
        <>
          <BreadcrumbItem breadcrumb={breadcrumb} key={`${index}`} />
          {index < breadcrumbsLength - 1 && dividerElement}
        </>
      ))}
    </BreadcrumbStyled>
  );
};

export default Breadcrumb;
