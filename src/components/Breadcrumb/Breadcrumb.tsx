import React, { ReactNode, useState } from "react";
import { BreadcrumbStyled, BreadcrumbItemStyled } from "./styled";
import { ArrowRight } from "../../styles/iconography";
import { useTheme } from "styled-components";

type Props = {
  breadcrumbs: ReactNode[];
  separator?: ReactNode;
  activeIndex?: number;
};

type BreadcrumbItemProps = {
  breadcrumb: ReactNode;
  active?: boolean;
};

const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({
  breadcrumb,
  active = false,
}) => {
  return (
    <BreadcrumbItemStyled active={active}>{breadcrumb}</BreadcrumbItemStyled>
  );
};

const Breadcrumb: React.FC<Props> = ({ breadcrumbs = [], separator }) => {
  //    TODO: may be separate configuration file
  const { colors } = useTheme();
  const breadcrumbsLength = breadcrumbs.length;
  const separatorElement = separator ?? <ArrowRight color={colors.icon} />;

  if (!breadcrumbs.length) return null;

  return (
    <BreadcrumbStyled>
      {breadcrumbs.map((breadcrumb, index) => (
        <>
          <BreadcrumbItem breadcrumb={breadcrumb} key={`${index}`} />
          {index < breadcrumbsLength - 1 && separatorElement}
        </>
      ))}
    </BreadcrumbStyled>
  );
};

export default Breadcrumb;
