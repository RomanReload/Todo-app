import RandomTask from "./RandomTask";
import RemoveButton from "./RemoveBtn";
const RemoveRandomBtn = () => {
  return (
    <>
      <div className="row justify-content-around m-1">
        <RandomTask />
        <RemoveButton />
      </div>
    </>
  );
};

export default RemoveRandomBtn;
