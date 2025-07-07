import { createContext, useEffect, useReducer } from "react";

export const Appcontext = createContext();

const Constextprovider = (props) => {
  const dispatchfun = (currentstatus, action) => {
    console.log(action.payload);

    if (action.type == "addpost") {
      return [...currentstatus, action.payload];
    } else if (action.type == "removepost") {
      return currentstatus.filter((ele) => ele.id != action.payload);
    } else if (action.type == "init_post") {
      return (currentstatus = action.payload.post);
    }
  };

  const [DEFAULT_POSTS, dispatchpost] = useReducer(dispatchfun, []);

  // let DEFAULT_POSTS = [
  //     {
  //       id: 1,
  //       title: "First Post",
  //       body: "This is the first post",
  //       likes: 10,
  //       comments: 5,
  //     },
  //     {
  //       id: 2,
  //       title: "Second Post",
  //       body: "This is the second post",
  //       likes: 20,
  //       comments: 10,
  //     },
  //     {
  //       id: 3,
  //       title: "Third Post",
  //       body: "This is the third post",
  //       likes: 5,
  //       comments: 0,
  //     },
  //   ];

  const Addpost = (id, title, body) => {
    const addpostdata = {
      type: "addpost",
      payload: {
        id,
        title,
        body,
        like: 0,
        Comment: 0,
      },
    };
    dispatchpost(addpostdata);
  };

  const removepost = (id) => {
    const removepostdata = {
      type: "removepost",
      payload: id,
    };
    dispatchpost(removepostdata);
  };

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        initpost(data.posts);
      });

  },[]);

  const fetchdatahandler = () => {
    
  };

  const initpost = (post) => {
    const initpostdata = {
      type: "init_post",
      payload: { post },
    };
    dispatchpost(initpostdata);
  };

  return (
    <>
      <Appcontext.Provider
        value={{ DEFAULT_POSTS, Addpost, removepost, fetchdatahandler }}
      >
        {props.children}
      </Appcontext.Provider>
    </>
  );
};
export default Constextprovider;
0;
