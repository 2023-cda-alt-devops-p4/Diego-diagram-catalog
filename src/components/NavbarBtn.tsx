type NavbarBtnProps = {
  id: string;
  isVisible: boolean;
  setIsVisible: (value: boolean) => void;
  activeTab: string;
    setActiveTab: (value: string) => void,
  children: React.ReactNode;
};

export const NavbarBtn = ({
  id,
  isVisible,
  setIsVisible,
  activeTab, 
  setActiveTab,
  children,
}: NavbarBtnProps) => {
  const handleClick = () => {
    setIsVisible(!isVisible)
    setActiveTab(id);
  };
  return (
    <div className={activeTab === id ? 'nav-link active' : "nav-link"} onClick={handleClick}>
      {children}
    </div>
  );
};
