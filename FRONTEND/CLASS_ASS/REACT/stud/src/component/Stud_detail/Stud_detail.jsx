import Stud_detail_list from "../Stud_detail_list/Stud_detail_list";

const Stud_detail = ({details,removebtnhandler,editbtnhandler}) => {
    // console.log(details);
  return (<div className="row">
    <table className="col-12 mx-3 mt-2">
      <thead>
        <tr>
          <th>student name</th>
          <th>student email</th>
          <th>student number</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {details.map((ele) => (
          <Stud_detail_list key={ele.id} ele={ele} removebtnhandler={removebtnhandler} editbtnhandler={editbtnhandler}></Stud_detail_list>
        ))}
      </tbody>
    </table>
  </div>
    
  );
};

export default Stud_detail;
