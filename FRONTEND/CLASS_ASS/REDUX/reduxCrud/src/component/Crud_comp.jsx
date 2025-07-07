import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { click } from '../feature/crud/crudSlice'

const Crud_comp = () => {
  const Crud = useSelector(state=>state.Crud.value)
    const dispatch = useDispatch()

    const clickhandle = ()=>{
        dispatch(click())
    }
  return (
    <div>Crud_comp{Crud}
        <button onClick={clickhandle}>click</button>
    </div>
  )
}

export default Crud_comp