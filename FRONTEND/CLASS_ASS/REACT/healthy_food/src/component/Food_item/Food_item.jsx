import { useState } from "react";
import Item from "../Item/Item";

const Food_item = ({ food_list,deletebtnhandler }) => {
  let [activelist, setactivelist] = useState([]);


  const byebtnhandler = (item) => {
    let newitem = [...activelist, item];
    setactivelist(newitem);
  };
 const removebtnhandler = (item)=>{
    let newactivelist = activelist.filter(ele =>ele!=item)
    setactivelist(newactivelist)
 }

  return (
    <>
      <ul className="list-group">
        <Item
          food_list={food_list}
          activelist={activelist}
          byebtnhandler={byebtnhandler}
          removebtnhandler={removebtnhandler}
          deletbtnhandler={deletebtnhandler}
        ></Item>
      </ul>
    </>
  );
};
export default Food_item;
