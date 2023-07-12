import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { useNavigate } from "react-router-dom";
export default ({ data }) => {
  let { setW3Data, w3Lang, w3Data, w3SubHead, setW3Item } =
    useContext(DataContext);
  let navigate = useNavigate();
  //   console.log(data[0].title);
  // return (
  //   <div>
  //     <h1>Surya</h1>
  //     {w3Lang.map((item) => {
  //       return (
  //         <div
  //           className="w3-items"
  //           onClick={() => {
  //             setW3Data(item);
  //             navigate("/w3page");
  //           }}
  //         >
  //           <div>{item.title}</div>
  //           <div
  //             dangerouslySetInnerHTML={{
  //               __html: item?.keypoints,
  //             }}
  //           ></div>
  //         </div>
  //       );
  //     })}
  //   </div>
  // );
  console.log(w3Data);
  return (
    <div>
      {w3SubHead.map((item) => {
        return (
          <div
            className="w3-items"
            onClick={() => {
              navigate("/w3page");
              setW3Item(item);
            }}
          >
            {item.title}{" "}
          </div>
        );
      })}
    </div>
  );
};
