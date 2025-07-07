const Stud_detail_list = ({ele,removebtnhandler,editbtnhandler}) => {
  // console.log(ele.id)
  return (<tr>
    <td>{ele.name}</td>
    <td>{ele.email}</td>
    <td>{ele.number}</td>
    <td><button onClick={()=>{removebtnhandler(ele.id)}}>remove</button></td>
    <td><button onClick={()=>{editbtnhandler(ele.id)}}>edit</button></td>
  </tr>
    
  );
};

export default Stud_detail_list;
