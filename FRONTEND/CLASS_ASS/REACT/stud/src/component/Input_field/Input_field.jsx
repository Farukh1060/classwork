import { useEffect, useState } from "react";

const Input_field = ({ student, resiveformdata, editbtnhandler }) => {
  let [name, setname] = useState("");
  let [email, setemail] = useState("");
  let [number, setnumber] = useState("");
  let [id, setid] = useState("");

  useEffect(() => {
    setname(student.name);
    setemail(student.email);
    setnumber(student.number);
    setid(student.id);

  }, []);

  const idhandler = (e) => {
    setid(e.target.value);
  };

  const inputnamehandler = (e) => {
    setname(e.target.value);
  };
  const inputemailhandler = (e) => {
    setemail(e.target.value);
  };
  const inputnumberhandler = (e) => {
    setnumber(e.target.value);
  };
  const submit = (e) => {
    e.preventDefault();
  };

  const formdata = () => {
    let studdata = {
      id,
      name,
      email,
      number,
    };
      resiveformdata(studdata);
      setname("");
      setemail("");
      setnumber("");
      setid("");
    
  };

  return (
    <div>
      <div className="row">
        <div className="col-12">
          <form action="" onSubmit={submit}>
            <div className="row">
              <input type="text" value={id} onChange={idhandler} />
              <div className="col-3">
                <input
                  type="text"
                  placeholder="enter student name"
                  onChange={inputnamehandler}
                  value={name}
                />
              </div>
              <div className="col-3">
                <input
                  type="text"
                  placeholder="enter email id"
                  onChange={inputemailhandler}
                  value={email}
                />
              </div>
              <div className="col-3">
                <input
                  type="text"
                  placeholder="enter number"
                  onChange={inputnumberhandler}
                  value={number}
                />
              </div>
              <div className="col-3">
                <button onClick={formdata}>enter</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Input_field;
