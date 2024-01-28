import { createContext, useContext } from "react";

export interface TabsContextValue {
  value: string;
  onChange: (value: string) => void;
}
export const TabsContext = createContext<TabsContextValue>({
  value: "",
  onChange: () => {},
});

const useTabsContext = () => {
  const { value, onChange } = useContext(TabsContext);

  // TODO(maahad): add other value
  return {
    value,
    onChange,
  };
};

export default useTabsContext;
