import { useProductCategories } from "../../utils/hooks/useProductCategories";
import { SideBarButton } from "./style";

const SideBar = ({ categoryArray, setCategoryArray }) => {
  const { data, isLoading } = useProductCategories();
  if (isLoading) {
    return <div>{"..."}</div>;
  }

  const handleCategory = (category) => {
    categoryArray.includes(category)
      ? setCategoryArray(categoryArray.filter((item) => item !== category))
      : setCategoryArray([...categoryArray, category]);
  };
  return (
    <>
      {data.results.map(({ id, data }) => {
        return (
          <div key={id}>
            <SideBarButton
              onClick={() => handleCategory(data.name.toLowerCase())}
              active={categoryArray.includes(data.name.toLowerCase())}
            >
              {data.name}
            </SideBarButton>
          </div>
        );
      })}
    </>
  );
};

export default SideBar;

