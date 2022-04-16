import React,{useState} from 'react'
import { Link ,useNavigate,useParams} from 'react-router-dom'
import axios from 'axios'

const EditCity = () => {
    const navigate = useNavigate();
    let { id } = useParams();
    const [formData,setFormData] = useState({
        country:"",
        city:"",
        population:"",
    });

    const handleChange = (e) => {
        let {id,value,checked,type} = e.target;
        value = type ==="checkbox" ? checked :value;
        setFormData({
            ...formData,[id]:value
        })
    }
    
    const submitForm = (e) => {
        e.preventDefault();
        axios.patch(`https://unit-5c2.herokuapp.com/users/${id}`,formData).then(() => {
            alert("city edited successfully");
        }).then(() =>{
          navigate('/');
        })
    }
  return (
    <div>
        <Link to="/">Home</Link>

        <form onSubmit={submitForm}>
           <input type="text" id='country' placeholder='country' onChange={handleChange}/>
           <input type="text" id='city' placeholder='city' onChange={handleChange}/>
           <input type="text" id='population' placeholder='population' onChange={handleChange} />
           <input type="submit" value="save" />
        </form>
    </div>
  )
}

export default EditCity