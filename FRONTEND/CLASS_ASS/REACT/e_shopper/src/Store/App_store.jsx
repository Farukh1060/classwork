import { createContext, useEffect, useReducer } from 'react'

export const Productcontax = createContext()

const Productcontexprovider = ({ children }) => {
  const productlistreduser = (currentstate, action) => {
    if (action.type == 'initpost') {
      return (currentstate = action.paylode)
    }
  }

  const [productlist, productdispatch] = useReducer(productlistreduser, [])

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((data) => {
        return data.json()
      })
      .then((result) => {
        result.products
        // console.log(result.products)
        const productlistdata = {
          type: 'initpost',
          paylode: result.products,
        }

        productdispatch(productlistdata)
      })
  }, [])

  // console.log(productlist)
  return (
    <Productcontax.Provider value={{ productlist }}>
      {children}
    </Productcontax.Provider>
  )
}

export default Productcontexprovider
