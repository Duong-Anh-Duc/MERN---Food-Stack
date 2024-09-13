import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { TbTrash } from "react-icons/tb"
import { toast } from 'react-toastify'
const List = ({url}) => {
  const [list, setList] = useState([])
  const fetchList = async () => {
    const responese = await axios.get(`${url}/api/product/list`)
    if(responese.data.success){
      setList(responese.data.data)
    }
    else{ 
      toast.error("Error")
    }
  }
  useEffect(() => {
    fetchList()
  }, [])
  const removeProduct = async (productId) => {
    const responese = await axios.post(`${url}/api/product/remove`, {
      _id: productId
    })
    console.log(responese.data.success)
    await fetchList()
    if(responese.data.success){
      toast.success(responese.data.message)
    }
    else{
      toast.error("Error")
    }
  }
  return (
    <div className ="p-4 sm:p-10 box-border w-full bg-white rounded-xl">
      <h4 className ='bold-22 uppercase'>Products List</h4>
      <div className = "overflow-auto mt-5"> 
        <table className = 'w-full'>
          <thead>
            <tr className = 'border-b border-slate-900/20 text-gray-30 regular-14 xs:regular-16 text-start py-12'>
              <th className='p-1 text-left'>Products</th>
              <th className='p-1 text-left'>Title</th>
              <th className='p-1 text-left'>Price</th>
              <th className='p-1 text-left'>Remove</th>
            </tr>
          </thead>
          <tbody>
              {list.map((product) => (
                <tr key={product._id} className='border-b border-slate-900/20 text-gray-50
                p-6 medium-14 text-left'>
                <td className='p-1'>
                <img src = {`${url}/images/` + product.image} alt='' className=
                'rounded-lg ring-1 ring-slate-900/5 m-1' height={38} width={38}></img>
                </td>
                <td className='p-1'><div className='line-clamp-3'>{product.name}</div></td>
                <td className='p-1'><div>${product.price}</div></td>
                <td className='p-1'>
                  <div className='bold-22'>
                    <TbTrash onClick={() => removeProduct(product._id)}/>
                  </div>
                </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default List