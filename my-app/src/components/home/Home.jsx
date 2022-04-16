import React,{useState,useEffect}from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'
import axios from 'axios';

const Home = () => {
    const [list,setList] = useState([]);
    useEffect(() => {
            axios.get(`https://unit-5c2.herokuapp.com/users`).then((res) => {
                setList(res.data);
            }) 
    },[])
    const getData = () => {
        axios.get(`https://unit-5c2.herokuapp.com/users`).then((res) => {
            setList(res.data);
        })
    }
  return (
    <div>

      <div className='navbar'>
      <Link to="/">Home</Link>
        <Link to="/add-city">Add City</Link>
        <select name="" id="">
            <option value="">filter by country</option>
            <option value="">India</option>
            <option value="">nepal</option>
            <option value="">buthan</option>
            <option value="">USA</option>
            <option value="">UK</option>
        </select>
        <button>sort by asc population</button>
        <button>sort by desc population</button>
      </div>

      <table className='table table-bordered text-center'>
         <thead>
             <tr>
                 <th>id</th>
                 <th>Country</th>
                 <th>City</th>
                 <th>Population</th>
                 <th>Edit</th>
                 <th>Delete</th>
             </tr>
         </thead>
         <tbody>
         {list.map((data,index) => (  
              <>   
                  <tr>
                      <td>{data.id}</td>
                      <td>{data.country}</td>
                      <td>{data.city}</td>
                      <td>{data.population}</td>
                      <td><Link to={`/edit-city/${data.id}`}>Edit</Link></td>
                      <td><button onClick={() => {
                        axios.delete(`https://unit-5c2.herokuapp.com/users/${data.id}`).then(() =>{
                          alert("city deleted successfully");
                          getData();
                     })
                      }}>Delete</button></td>
                  </tr>
            </>  
      ))}
         </tbody>
      </table>
    </div>
  )
}

export default Home