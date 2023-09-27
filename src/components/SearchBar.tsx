import { useState } from "react";
import styles from "./SearchBar.module.css";

import { FaSearch, FaTimes } from "react-icons/fa";
import { IDiagramJSON } from "../models/diagramjson";
import { Link } from "react-router-dom";
import { IDiagram } from "../models/diagram";

type SearchProps = {
  dataToFilter: IDiagramJSON[];
};

interface IFilteredDiagram {
  type: string;
  diagrams: IDiagram[] | undefined;
}

export const SearchBar = ({ dataToFilter }: SearchProps) => {
  const [searchValue, setSearchValue] = useState("");
  const [filteredResult, setFilteredResult] = useState<IDiagram[]>([]);

  const handleSearch = () => {
    const lowerCaseSearch = searchValue.toLowerCase();
    const filteredDiagrams = dataToFilter.map((item: IDiagramJSON) => ({
      type: item.type,
      diagrams: item.allDiagrams?.filter((diagram) =>
        diagram.title.toLowerCase().includes(lowerCaseSearch)
      ),
    }));
    const flattenedDiagrams = filteredDiagrams.flatMap(
      (item: IFilteredDiagram) => {
        if (item.diagrams) {
          return item.diagrams.filter((diagram) => diagram !== undefined);
        } else {
          return [];
        }
      }
    );
    setFilteredResult(flattenedDiagrams);
  };

  const handleInputOnKeyTap = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setSearchValue(inputValue);
    handleSearch();

    if (inputValue.trim() === "") {
      setFilteredResult([]);
    }
  };

  const closeDropdown = () => {
    setSearchValue("");
    setFilteredResult([]);
  };

  const checkDiagramType = (dataToFind: string) => {
    const merise = dataToFilter.find((x: IDiagramJSON) => x.type === "Merise");
    const isMerise = merise!.allDiagrams?.find(
      (d: IDiagram) => d.title.trim() === dataToFind.trim()
    );
    return isMerise;
  };

  return (
    <div className={styles.searchContainer}>
      <div className={styles.inp}>
        <input
          type="text"
          value={searchValue}
          placeholder="Search"
          onChange={handleInputOnKeyTap}
          className={styles.inputBox}
        />
        {searchValue && (
          <button onClick={closeDropdown} className={styles.closeBtn}>
            <FaTimes />
          </button>
        )}
        <button onClick={handleSearch} className={styles.inputBtn}>
          <FaSearch />
        </button>
      </div>
      <div>
        {filteredResult?.length === 0 && searchValue.length > 0 ? (
          <p>No results for this search</p>
        ) : (
          <ul className={styles.droplist}>
            {filteredResult?.map((item) => (
              <li
                key={
                  item.id + `${checkDiagramType(item.title) ? "Merise" : "UML"}`
                }
                className={styles.list}
              >
                <Link
                  to={`${
                    checkDiagramType(item.title)
                      ? "/merise-diagrams"
                      : "uml-diagrams"
                  }/${item.id}`}
                  onClick={closeDropdown}
                >
                  <div className={styles.dropCardContainer}>
                    <img
                      src={item.image}
                      alt="diagram image"
                      className={styles.iconImage}
                    />
                    <p className={styles.searchTitle}>{item.title}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
