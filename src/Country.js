import React,{useEffect,useState} from 'react'
import axios from 'axios';
import Pagination from './Pagination';
import { USER_PER_PAGE } from './utils/Contant'

const Country = () => {
    const [names,setNames] = useState([]);
    const [search,setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    const startIndex = ( page - 1 ) * USER_PER_PAGE;
    const selectedUsers = names.slice(startIndex, startIndex + USER_PER_PAGE);


    useEffect(()=>{
        async function getData(){
          const res = await axios.get(`https://api.covid19api.com/summary`);
          setNames(res.data.Countries);      
          console.log(res.data.Countries)

          setTotalPages(Math.ceil(res.data.Countries.length / USER_PER_PAGE));


        };
        getData();
      },[]);

      const handleClick = num => {
        setPage(num);
      }

      function handleChange(event){
         const values = event.target.value;
         setSearch(values)
         console.log(values);
      }

    return (
        <div>

          <div style={{display:'flex', marginTop:'20px'}}>
<h1>Corona Affected Country</h1>
<input type='text' style={{marginLeft:'350px'}} onChange={handleChange} className="form-control w-25" placeholder="Search country" />
</div>

<table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Country</th>
      <th scope="col">Total Confirmed</th>
      <th scope="col">Total Deaths</th>
    </tr>
  </thead>
  <tbody>

  {selectedUsers.filter(name => {

    if(search === ""){
      return name
    }else if(name.Country.toLowerCase().includes(search.toLowerCase())){
        return name
    }})

    .map(name => ( 
    <tr>
      <td>{name.Country}</td>
      <td>{name.TotalConfirmed}</td>
      <td>{name.TotalDeaths}</td>
    </tr>
  ))}


  </tbody>
</table>
<Pagination totalPages={totalPages} handleClick={handleClick} />
            
        </div>
    )
}

export default Country
