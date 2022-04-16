import React,{useState} from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import axios from 'axios';

const Addcity = () => {
    const navigate = useNavigate();

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
        axios.post("https://unit-5c2.herokuapp.com/users",formData).then(() => {
            alert("city added successfully");
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

export default Addcity