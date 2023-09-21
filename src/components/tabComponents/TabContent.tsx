
type TabContent = {
    id: string,
    activeTab: string,
    children: React.ReactElement
}

export const TabContent = ({id, activeTab, children}: TabContent) => {  
    return (
      activeTab === id ? <div>
        { children }
      </div>
      : null
    );
   };