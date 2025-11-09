import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from "axios";


export const UserRegister = createAsyncThunk("UserRegister",async (data,{rejectWithValue})=>{
    // console.log(data);
    try{
      const formData = new URLSearchParams();
      formData.append("username", data.username);
      formData.append("email", data.email);
      formData.append("password", data.password);
    
    const response = await axios.post("http://127.0.0.1:8000/UserRegister/",formData,{
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        })
    return response.data

    }catch(error){
      return rejectWithValue(error)
    }
    

})



export const TockenJWT = createAsyncThunk("TockenJWT", async (credentials, { rejectWithValue }) => {
  // console.log(credentials);
  
  try {
    const response = await fetch("http://127.0.0.1:8000/api/token/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.detail || "Login failed");
    }

    const data = await response.json();
    // Save tokens to localStorage
    localStorage.setItem("access", data.access);
    localStorage.setItem("refresh", data.refresh);
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});




export const LogInUser = createAsyncThunk("LogInUser",async (_,{rejectWithValue})=>{
    // console.log(data);
    try{
      
    const token = localStorage.getItem("access");
    // console.log(token);
    
     const response = await axios.get("http://127.0.0.1:8000/LogInUser/", {
        headers: { Authorization: `Bearer ${token}` },
      });
    // console.log(response.data);
    
    return response.data

    }catch(error){
      return rejectWithValue(error)
    }
})

export const LogOutUser= createAsyncThunk("LogOutUser",async (_,{rejectWithValue})=>{
  try{
    const response = await axios.get("http://127.0.0.1:8000/LogOutUser/")
     localStorage.removeItem("access");
     localStorage.removeItem("refresh");
    return response.data

  }catch(error){
      return rejectWithValue(error.response.data)
    }
})





const UserSlice = createSlice({
    name:"user",
    initialState:{
        userdetail:[],
        loading:false,
        error:null
    },
    extraReducers:(builder)=>{
        builder
      .addCase(UserRegister.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(UserRegister.fulfilled, (state, action) => {
        state.loading = false;
        state.userdetail = action.payload;
        alert(action.payload.msg)
      })
      .addCase(UserRegister.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error || "Failed";
      })
      
      .addCase(LogInUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(LogInUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userdetail = action.payload;
        // console.log(action.payload);
        
        // alert(action.payload.msg)
      })
      .addCase(LogInUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error || "Failed";
      })

      .addCase(LogOutUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(LogOutUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userdetail = action.payload;
        alert(action.payload.msg)
      })
      .addCase(LogOutUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error || "Failed";
      })

    }
})

export default UserSlice.reducer