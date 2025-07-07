import { useContext } from 'react'
import { Productcontax } from '../Store/App_store'
import Product_list from './Product_list'

const Products = () => {
  const { productlist } = useContext(Productcontax)
  //   console.log(productlist)

  return (
    <>
      <div className="container-fluid pt-5">
        <div className="text-center mb-4">
          <h2 className="section-title px-5">
            <span className="px-2">Just Arrived</span>
          </h2>
        </div>
        <div className="row px-xl-5 pb-3">
          <div className="d-flex flex-wrap m-2 gap-5 pb-1">
            {productlist.map((ele) => {
              return <Product_list key={ele.id} ele={ele}></Product_list>
            })}
          </div>
        </div>
      </div>
    </>
  )
}
export default Products
