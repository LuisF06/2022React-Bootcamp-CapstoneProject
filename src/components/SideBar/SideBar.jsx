import { useProductCategories } from "../../utils/hooks/useProductCategories";
import { SideBarButton } from "./style";
import { useEffect } from "react";
import PropTypes from "prop-types";

const SideBar = ({ categoryArray, setCategoryArray }) => {
  const { data, isLoading } = useProductCategories();

  useEffect(() => {
    /*function setCategoryFromQuery() {
      let params = new URL(document.location).searchParams;
      let query = params.get("category");
      if (query) {
        return setCategoryArray([...categoryArray, query.toLowerCase()]);
      }
      return true;
    }


    setCategoryFromQuery();*/
  });

  const handleCategory = (value) => {
    return categoryArray.indexOf(value) === -1
      ? setCategoryArray([...categoryArray, value])
      : setCategoryArray(categoryArray.filter((item) => item !== value));
  };

  function clearFilters() {
    return setCategoryArray([]);
  }

  return (
    <>
      {!isLoading && (
        <>
          <div id="sidebar-container">
            {data.results.map((category) => {
              const categoryName = category.data.name;
              const categorySlug = category.slugs[0];
              return (
                <div key={category.id}>
                  <SideBarButton
                    onClick={() =>
                      handleCategory(categorySlug.toLowerCase())
                    }
                    active={categoryArray.includes(categorySlug.toLowerCase())}
                  >
                    {categoryName}
                  </SideBarButton>
                </div>
              );
            })}
            {categoryArray.length >= 1 && (
              <div className="buttonContainer">
                <SideBarButton
                  onClick={() => {
                    clearFilters();
                  }}
                >
                  {" "}
                  Clear all filters
                </SideBarButton>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

SideBar.propTypes = {
  categoryArray: PropTypes.array.isRequired,
  setCategoryArray: PropTypes.func.isRequired,
};

export default SideBar;
