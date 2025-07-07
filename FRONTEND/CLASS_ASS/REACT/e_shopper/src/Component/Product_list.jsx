
import { Link } from 'react-router-dom'


const Product_list = ({ ele }) => {
  // console.log(ele)
  return (
    <>
      <div className="card product-item border-0 mb-4">
              <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                <img
                  className="img-fluid w-100"
                  src={ele.thumbnail}
                  alt=""
                />
              </div>
              <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                <h6 className="text-truncate mb-3">{ele.title}</h6>
                <div className="d-flex justify-content-center">
                  <h6>${ele.price}</h6>
                  
                </div>
              </div>
              <div className="card-footer d-flex justify-content-between bg-light border">
                <Link to="/detail" state={ele.id} className="btn btn-sm text-dark p-0">
                  <i className="fa fa-eye text-primary mr-1"></i>View Detail
                </Link>
                <a href="" className="btn btn-sm text-dark p-0">
                  <i className="fa fa-shopping-cart text-primary mr-1"></i>Add
                  To Cart
                </a>
              </div>
            </div>
    </>
  )
}

export default Product_list
