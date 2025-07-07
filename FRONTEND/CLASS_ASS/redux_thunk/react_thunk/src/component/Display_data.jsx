import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteUser, showUser } from "../feature/userDetailSlice";

const Display_data = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showUser());
    setsearch_value(search)
  }, []);

  const [search_value,setsearch_value] = useState([])
  const [genderF ,setgenderF] = useState("all")
  const { users, search } = useSelector((state) => {
    return state.app;
  });
  console.log(search_value);
  console.log(genderF);

  //    if(loding){
  //     return <h1>loading</h1>
  //    }

  return (
    <div className="row">
      <div className="mb-3">
        <div className="form-check">
          <input
          onClick={(e)=>{setgenderF(e.target.value)}}
            className="form-check-input"
            type="radio"
            name="gender"
            value="Male"
            id="flexRadioDefault1"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Male
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            onClick={(e)=>{setgenderF(e.target.value)}}
            value="Female"
            id="flexRadioDefault2"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            Female
          </label>
        </div>
        <div className="form-check">
              <input
             
                className="form-check-input"
                type="radio"
                name="gender"
                onClick={(e)=>{setgenderF(e.target.value)}}
                value="all"
                defaultChecked
                id="flexRadioDefault2"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
               all
              </label>
            </div>
      </div>
      <div className="col-8 card mx-auto mt-5 ">
        <table className="table table-strip">
          <thead>
            <tr>
              <td>user name</td>
              <td>email</td>
              <td>number</td>
              <td>gender</td>
              <td>action</td>
            </tr>
          </thead>

          <tbody>
            {users &&
              users
                .filter((ele) => {
                  if (search.length === 0 && genderF === "all") {
                    return ele;
                  } else {
                    return ele.name.toLowerCase().includes(search);
                  }
                })
                .filter((ele)=>{
                  if(genderF === "Male"){
                    return ele.gender.includes(genderF)
                  }else if(genderF === "Female"){
                    
                    return ele.gender.includes(genderF)
                  }else{
                    return ele
                  }
                })

                .map((ele) => {
                  return (
                    <tr key={ele.id}>
                      <td>{ele.name}</td>

                      <td>{ele.email}</td>
                      <td>{ele.number}</td>
                      <td>{ele.gender}</td>
                      <td>
                        <Link to={`/${ele.id}`} className="btn btn-success">
                          udate
                        </Link>
                      </td>
                      <td>
                        <Link
                          className="btn btn-danger"
                          onClick={() => {
                            dispatch(deleteUser(ele.id));
                          }}
                        >
                          delete
                        </Link>
                      </td>
                    </tr>
                  );
                })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Display_data;
