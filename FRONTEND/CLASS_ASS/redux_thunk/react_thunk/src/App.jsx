import Nav_bar from "./component/Nav_bar"
import {Routes ,Route, BrowserRouter} from "react-router-dom"
import Regestration from "./component/Regestration"
import Display_data from "./component/Display_data"

const App = ()=>{
  return(
    <BrowserRouter>
       <Nav_bar></Nav_bar>
          <Routes>
            <Route path="/" element={<Regestration></Regestration>}></Route>
            <Route path="//:id" element={<Regestration></Regestration>}></Route>
            <Route path="/display_data" element={<Display_data></Display_data>}></Route>
          </Routes>
    </BrowserRouter>

  )
}
export default App