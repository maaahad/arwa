import React, { PropsWithChildren, FC } from "react";

import useTabsContext, {
  TabsContext,
  TabsContextValue,
} from "./useTabsContext";

// TODO(maaahad): useId to add id to Tab + Panel
// TODO(maaahad): add test
// TODO(maaahad): mdx docs

type CommonProps = {
  value: string;
  className?: string;
};

type TabProps = CommonProps & {
  variant?: "default" | "pill";
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
  variant = "default",
  children,
  className,
}) => {
  const { value: activeValue, onChange } = useTabsContext();

  // TODO(maaahad): implement variant
  return (
    <button
      onClick={() => onChange(value)}
      style={{
        color: activeValue === value ? "green" : "red",
      }}
    >
      {children}
    </button>
  );
};

const List: FC<PropsWithChildren<{ className?: string }>> = ({ children }) => {
  return <div>{children}</div>;
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
