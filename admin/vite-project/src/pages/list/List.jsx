import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { url } from '../../assets/assets';
import { toast } from 'react-toastify'; 
import "./List.css"

const List = () => {
  const url= "http://localhost:4000"

    const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`)
    console.log(response.data);
    if (response.data.success) {
      setList(response.data.data);
    }
    else {
      toast.error("Error")
    }
  }


  const deleteItem = async (id) => {
    const response = await axios.post(`${url}/api/food/remove`, { id })
    if (response.data.success) {
      toast.success("Item deleted successfully");
      await fetchList(); // Refresh the list after deletion
    } else {
      toast.error("Error deleting item");
    }
  }


  useEffect(() => {
    fetchList();
  }, [])

  return (
    <div className='list add  flex-col'>
      <p>All Foods List</p>
      <div className='list-table'>
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div key={index} className='list-table-format'>
              <img src={`${url}/images/` + item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{item.price}</p>
              <p onClick={() => deleteItem(item._id)}>Delete</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List
