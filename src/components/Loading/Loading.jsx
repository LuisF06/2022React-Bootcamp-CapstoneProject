import { LoadingContainer, Load, Spinner } from "./style";

const Loading = () => {
  return (
    <>
      <LoadingContainer>
        <Load>
          <p>Loading, Please Wait ...</p>
          <Spinner/>
        </Load>
      </LoadingContainer>
    </>
  );
};

export default Loading;
