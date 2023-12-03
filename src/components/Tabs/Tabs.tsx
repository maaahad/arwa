import React, {
  ReactNode,
  Children,
  PropsWithChildren,
  FC,
  createContext,
  useContext,
  useState,
  ReactElement,
} from "react";

type TabProps = {
  label: string;
};

type TabsType = React.FC<PropsWithChildren<{ currentIdex?: number }>> & {
  Tab: typeof Tab;
  TabContent: typeof TabContent;
};

const TabContent: FC<PropsWithChildren> = ({ children }) => {
  return <>{children}</>;
};

const Tab: FC<PropsWithChildren<TabProps>> = ({ children }): ReactNode => {
  return <>{children}</>;
};

// TODO(maaahad) : give it a try with context
// LEARN: ReactNode vs ReactElement
const Tabs: TabsType = ({ children, currentIdex = 0 }) => {
  const [activeIndex, setActiveIndex] = useState<number>(currentIdex);
  // TODO(maaahad): ForwardRef
  // add variant
  return (
    <div>
      <div style={{ display: "inline-flex", gap: 8 }}>
        {Children.map(
          children as ReactElement[],
          (child: ReactElement<{ label?: string }>, index: number) => {
            const { label } = child.props;
            return (
              <button
                onClick={() => setActiveIndex(index)}
                key={`${label}_${index}`}
              >
                {label}
              </button>
            );
          },
        )}
      </div>
      <div>
        {React.Children.map(children, (child, index) => (
          <div
            style={{
              display: activeIndex === index ? "block" : "none",
            }}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

Tabs.Tab = Tab;
Tabs.TabContent = TabContent;

export default Tabs;
