import React, { PropsWithChildren, FC, ReactElement, ReactNode } from "react";
import { TabStyled } from "./styled";

import useTabsContext, {
  TabsContext,
  TabsContextValue,
} from "./useTabsContext";

// TODO(maaahad): useId to add id to Tab + Panel
// TODO(maaahad): add test
// TODO(maaahad): mdx docs
// TOdO(maaahad): ForwardRef

type CommonProps = {
  value: string;
  className?: string;
};

type TabVariant = "underline" | "pill" | "segment";

type TabProps = CommonProps & {
  variant?: TabVariant;
};

type TabsProps = CommonProps & {
  onChange: (vlaue: string) => void;
};

type TabsType = FC<PropsWithChildren<TabsProps>> & {
  Tab: typeof Tab;
  List: typeof List;
  Panels: typeof Panels;
  Panel: typeof Panel;
};

const Tab: FC<PropsWithChildren<TabProps>> = ({
  value,
  variant = "underline",
  children,
  className,
}) => {
  const { value: activeValue, onChange } = useTabsContext();
  const isActive = activeValue === value;

  return (
    <TabStyled
      onClick={() => onChange(value)}
      variant={variant}
      active={isActive}
      className={className}
    >
      {children}
    </TabStyled>
  );
};

const List: FC<
  PropsWithChildren<{ className?: string; variant?: TabVariant }>
> = ({ children, variant }) => {
  // TODO(maaahad): style container (layout props, responsive props)
  return (
    <div>
      {React.Children.map(
        children as ReactElement[],
        (child: ReactElement<TabProps>, index) => {
          return React.cloneElement(child, { variant });
        },
      )}
    </div>
  );
};

const Panel: FC<PropsWithChildren<CommonProps>> = ({ value, children }) => {
  const { value: activeValue } = useTabsContext();

  return (
    <div
      style={{
        display: value === activeValue ? "block" : "none",
      }}
    >
      {children}
    </div>
  );
};

const Panels: FC<PropsWithChildren<{ className?: string }>> = ({
  children,
}) => {
  return <div>{children}</div>;
};

const Tabs: TabsType = ({ value, onChange, children }) => {
  // TODO(maaahad): need to separate List from Panel
  // useMemo + with memoized children
  const contextValue: TabsContextValue = {
    value,
    onChange,
  };

  // ?? Is it a good to use cloneElement
  return (
    <TabsContext.Provider value={contextValue}>{children}</TabsContext.Provider>
  );
};

Tabs.Tab = Tab;
Tabs.List = List;
Tabs.Panels = Panels;
Tabs.Panel = Panel;

export default Tabs;
