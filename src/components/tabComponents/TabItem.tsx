
type TabItemProps = {
    id: string;
    title: string;
    activeTab: string;
    setActiveTab: (value: string) => void,
}

export const TabItem = ({ id, title, activeTab, setActiveTab }: TabItemProps) => {
  const handleClick = () => {
    setActiveTab(id);
  };
  
  return (
    <li onClick={handleClick} className={activeTab === id ? 'act' : ""}>
      {title}
    </li>
  );
};
