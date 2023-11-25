import React, { ReactElement, ReactNode, createContext, useState } from "react";



type TabsProps = {
    children?: ReactNode | undefined
}


type ExtendedTabsProps<T extends Record<string, any>> = React.FC<T> & {
    Tab?: React.FC<Record<string, any>> | ReactNode | undefined // TODO(maaahad): this type needs to be updated
    TabContent?: React.FC<Record<string, any>> | ReactNode | undefined // TODO(maaahad): this type needs to be updated
}

const TabsContext = createContext<{
    activeIndex: number,
    setActiveIndex?: (index: number) => void
}>({
    activeIndex: 0, 
    setActiveIndex: () => {}
})

const Tabs: ExtendedTabsProps<TabsProps> = ({children}) => {
    const [activeIndex, setActiveIndex] = useState<number>(0)

    return (
        <TabsContext.Provider value={{
            activeIndex, 
            setActiveIndex
        }}>
            {children}
        </TabsContext.Provider>
    )
}


// TODO(maaaahd): TabContent

const Tab: React.FC<{label: string}> = ({label}) => {
    const []
    return (
        <div>
            {label}
        </div>
    )
}

const TabContent: React.FC<{}> = () => {
    return (
        <div>
            TabContent
        </div>
    )
}

Tabs.Tab = Tab 
Tabs.TabContent = TabContent 

export default Tabs
