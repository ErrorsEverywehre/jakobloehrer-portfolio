import "./Loader.scss";

export const Loader = ({ isLoading = false }) => {
  if (!isLoading) return null;
  return (
      <div className="loader"></div>
  );
};
