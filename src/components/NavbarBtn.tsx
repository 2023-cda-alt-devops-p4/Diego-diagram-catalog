type NavbarBtnProps = {
  isVisible: boolean;
  setIsVisible: (value: boolean) => void;
  children: React.ReactNode;
};

export const NavbarBtn = ({
  isVisible,
  setIsVisible,
  children,
}: NavbarBtnProps) => {
  return (
    <div className="nav-link" onClick={() => setIsVisible(!isVisible)}>
      {children}
    </div>
  );
};
