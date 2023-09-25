import { FaAngleRight, FaBars, FaThLarge, FaTh, FaTimes } from "react-icons/fa";

import { FaDiagramProject, FaChartGantt } from "react-icons/fa6";
import { SiDiagramsdotnet } from "react-icons/si";
import { NavbarBtn } from "./NavbarBtn";

type NavbarProps = {
  activeTab: string;
  setActiveTab: (value: string) => void;
  isVisible: boolean;
  setIsVisible: (value: boolean) => void;
};

export const Navbar = ({
  activeTab,
  setActiveTab,
  isVisible,
  setIsVisible,
}: NavbarProps) => {
  return (
    <>
      <div className="mobile-nav">
        <button
          className="mobile-nav-btn"
          onClick={() => setIsVisible(!isVisible)}
        >
          <FaBars size={24} />
        </button>
      </div>
      <nav className={!isVisible ? "navbar" : ""}>
        <button
          type="button"
          className="nav-btn"
          onClick={() => setIsVisible(!isVisible)}
        >
          {!isVisible ? <FaAngleRight size={30} /> : <FaTimes size={30} />}
        </button>
        <div>
          <div className="logo-container">
            <SiDiagramsdotnet size={30} />
            <h1 className="logo">DIAGRAMS</h1>
          </div>
          <div className="links nav-top">
            <NavbarBtn
              isVisible={isVisible}
              setIsVisible={setIsVisible}
              id="first-tab"
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            >
              <FaTh />
              <li>Tous le diagrammes</li>
            </NavbarBtn>
            <NavbarBtn
              isVisible={isVisible}
              setIsVisible={setIsVisible}
              id="second-tab"
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            >
              <FaThLarge />
              <li>Diagrammes indispensable</li>
            </NavbarBtn>
            <NavbarBtn
              isVisible={isVisible}
              setIsVisible={setIsVisible}
              id="third-tab"
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            >
              <FaDiagramProject />
              <li>Diagrammes UML</li>
            </NavbarBtn>
            <NavbarBtn
              isVisible={isVisible}
              setIsVisible={setIsVisible}
              id="fourth-tab"
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            >
              <FaChartGantt />
              <li>Diagrammes Merise</li>
            </NavbarBtn>
          </div>
        </div>

        <div className="links">
          <p className="nav-link">Liens</p>
        </div>
      </nav>
    </>
  );
};
