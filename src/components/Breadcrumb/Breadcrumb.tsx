import React, {ReactElement} from "react";
import { BreadcrumbStyled } from "./styled";

type Crumb = {
    label: string;
    icon?: ReactElement;
    path: string;
}


type Props = {
    breadcrumbs: Crumb[];
    baseUrl?: string;
}

const BreadcrumbItem: React.FC<{breadcrumb: Crumb}> = ({breadcrumb}) => {
    const {label} = breadcrumb
    return (
        <div>
            {/* TODO: icon */}
            <p>{label}</p>
        </div>
    )
}

const Breadcrumb: React.FC<Props> = ({
    breadcrumbs = [],
}) => {

   const breadcrumbsLength = breadcrumbs.length

  if(!breadcrumbs.length) return null
  
  return (
    <BreadcrumbStyled>
        {breadcrumbs.map((breadcrumb, index) => (
            <>
                <BreadcrumbItem breadcrumb={breadcrumb}  key={breadcrumb.label}/>
                {index < breadcrumbsLength - 1 && <div>→</div>}
            </>
        ))}
    </BreadcrumbStyled>
  )
};

export default Breadcrumb;
