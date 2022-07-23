
import { useEffect, useState } from 'react';
import './App.css';
import Pagination from "react-pagination-js";
import "react-pagination-js/dist/styles.css";

function App() {
  
  const [data,setData] = useState([])
  const [show,setShow] =useState(false)
  const [rindex,setRindex] = useState("")
  const [currentPage,setCurrentPage]=useState(1)
  
  function rowSelector(ind){
    setRindex(ind)
    setShow(!show)
    console.log(ind,"from f")
  }
function changeCurrentPage(e){
  setCurrentPage(e)
  console.log(e)
}

  const getData= async ()=>{
    const res = await fetch("https://swapi.dev/api/people/")
    const data = await res.json()
    console.log(data.results)
    setData(data.results)
  }

  useEffect(()=>{
    getData()
  },[])
  
  return (
    <div className="app">
       <div className='table-wrapper'>
         {data.slice((currentPage-1)*3,3+(currentPage-1)*3).map((ele,index)=> {
           return (<div key={index} className="row-wrapper">
             <div  className='row' >
            <div className='data' ><p>{ele.name}</p></div>
            <div className='data' >
              <h5>eye color</h5>
              <p>{ele.eye_color}</p>
            </div>
            <div className='data' >
              <h5>hair color</h5>
              <p>{ele.hair_color}</p>
            </div>
            <div className='data' >
              <h5>skin color</h5>
              <p>{ele.skin_color}</p>
            </div>
            <div className='data' ><button onClick={()=>rowSelector(index)} className='btn'>{rindex==index && show?"Hide Details":"View Details"}</button></div>
        </div>
        <div className={(rindex==index && show)?"details details-show":"details"}>
          <div className="details-box">
            <div className="description">
              <h5>Description</h5>
              <p>Providin service of domestic flight @ lowest price guaranteed and also for railway e ticket 
                booking also offering international flight tickets, giving services to our customers since
                1995. now going to start hajj and umrah very soon for our valuable customers it will be also @
                very affordable prices.
              </p>
            </div>
            <div className="list-container">
              <div>
                <h5>contact person</h5>
                <p>{ele.name}</p>
              </div>
              <div>
                <h5>Address</h5>
                <p>dsfs rgt ht  g</p>
              </div>
              <div>
                <h5>Designation</h5>
                <p>fron end developer</p>
              </div>
              <div>
                <h5>City</h5>
                <p>bahadurgarh</p>
              </div>
              <div>
                <h5>Emails</h5>
                <p>{ele.url}</p>
              </div>
              <div>
                <h5>State</h5>
                <p>haryana</p>
              </div>
              <div>
                <h5>phones</h5>
                <p>879779889</p>
              </div>
              <div>
                <h5>country</h5>
                <p>india</p>
              </div>
        
            </div>
          </div>
        </div>
           </div>)
         })}
    <Pagination
          totalSize={40}
          currentPage={currentPage}
          totalPages={4}
          changeCurrentPage={changeCurrentPage}
          theme={"circle"}
          firstPageText={"<"}
          lastPageText={">"}
          numberOfPagesNextToActivePage={4}
        />
</div>
    </div>
  );
}

export default App;
