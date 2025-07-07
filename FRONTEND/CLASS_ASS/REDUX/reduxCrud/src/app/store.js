import {configureStore} from "@reduxjs/toolkit"
import CrudReduser from "../feature/crud/crudSlice"

export const store = configureStore({
    reducer:{
        Crud:CrudReduser

    }
})