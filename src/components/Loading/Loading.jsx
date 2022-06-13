import "./loading.css";

const Loading = () => {
  return (
    <>
      <div className="LoadingContainer">
        <div className="Load">
          <p>Loading, Please Wait ...</p>
          <div className="Line" />
          <div className="Line" />
          <div className="Line" />
        </div>
      </div>
    </>
  );
};

export default Loading;
