import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//create action
export const users_data = createAsyncThunk(
  "users_data",
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      "https://67af704fdffcd88a6786b326.mockapi.io/crud",
      {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    try {
      const result = await response.json();
      return result;

    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//read action

export const showUser = createAsyncThunk("showUser", async (_,{rejectWithValue})=>{
    const response = await fetch("https://67af704fdffcd88a6786b326.mockapi.io/crud");
    // console.log(response);
    

    try{

      const result = await response.json();
      return result

    }catch(error){
      return rejectWithValue(error)
    }
})

//delete action

export const deleteUser = createAsyncThunk("deleteUser", async (id,{rejectWithValue})=>{
  const response = await fetch(`https://67af704fdffcd88a6786b326.mockapi.io/crud/${id}`,{
    method:"delete"
  });
  // console.log(response);
  

  try{

    const result = await response.json();
    // console.log(result);
    
    return result

  }catch(error){
    return rejectWithValue(error)
  }
})

//update user

export const update_users = createAsyncThunk(
  "update_users",
  async (data, { rejectWithValue }) => {
    // console.log(data);
    const response = await fetch(
      `https://67af704fdffcd88a6786b326.mockapi.io/crud/${data.id}`,
      {
        method: "put",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    try {
      const result = await response.json();
      return result;

    } catch (error) {
      return rejectWithValue(error);
    }
  }
);





export const userDetail = createSlice({
  name: "userDetail",
  initialState: {
    users: [],
    loading: false,
    error: null,
    search : [],
  },

  reducers:{

    search_data:(state ,action)=>{
      console.log(action.payload)
      state.search=action.payload;
      

    }

  },

  extraReducers: (builder) => {
    builder
    .addCase(users_data.pending, (state) => {
      state.loading = true;
    })
    .addCase(users_data.fulfilled, (state, action) => {
      state.loading = false
      state.users.push(action.payload);
    })
    .addCase(users_data.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
    })
    .addCase(showUser.pending, (state, action) => {
    state.loading = true;
      })
    .addCase(showUser.fulfilled, (state, action) => {
        state.loading = false
        state.users = action.payload;
      })
    .addCase(showUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload 
      })
      .addCase(deleteUser.pending, (state, action) => {
        state.loading = true;
      })
    .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false
        console.log(state);
        
        state.users = state.users.filter((ele)=> ele.id !=action.payload.id) 
      })
    .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload 
      })
      .addCase(update_users.pending, (state) => {
        state.loading = true;
      })
      .addCase(update_users.fulfilled, (state, action) => {
        state.loading = false
        state.users = state.users.map((ele)=>{
          return ele.id == action.payload.id ? action.payload:ele
        });
      })
      .addCase(update_users.rejected, (state, action) => {
          state.loading = false
          state.error = action.payload
      })
    
  },
});
export default userDetail.reducer;
export const {search_data} = userDetail.actions
