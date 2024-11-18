import { IonSearchbar } from "@ionic/react";
import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get("search");
    if (searchQuery) {
      setSearchValue(searchQuery);
    }
  }, [location.search]);

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchValue.trim() !== "") {
      const searchParams = new URLSearchParams();
      searchParams.set("search", searchValue);

      if (location.pathname === "/") {
        history.push(`/competency-module?${searchParams.toString()}`);
      } else {
        history.push({
          pathname: location.pathname,
          search: searchParams.toString(),
        });
      }
    }
  };

  const handleClearSearch = () => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.delete("search");

    history.push({
      pathname: location.pathname,
      search: searchParams.toString(),
    });

    setSearchValue("");
  };

  return (
    <div className="flex gap-4 items-center justify-between sticky top-0 pt-2 py-2 bg-white z-10">
      <h1 className="font-bold text-lg">Learning Management System</h1>
      <IonSearchbar
        value={searchValue}
        onIonInput={(e) => setSearchValue(e.detail.value!)}
        placeholder="Search for courses"
        class="custom"
        onKeyDown={handleSearch as any}
        onIonClear={handleClearSearch}
      />
    </div>
  );
};

export default Header;
