import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import Select from "react-select";
import Data from "./components/Data";

function App() {
  const [teams, setTeams] = useState([]);
  const [updatedTeam, setUpdatedTeam] = useState({});
  const [displayTeam, setDisplayTeam] = useState(false)
  const [newData, setNewData] = useState()

  const requestAll = async () => {
    const res = fetch(
      "https://us-central1-xgtable-528d5.cloudfunctions.net/app/api/teams",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setTeams(data));
  };

  useEffect(() => {
    requestAll();
  }, []);

 

  const handleSelect = (selectedValue) => {
    teams.forEach((team, index) => {
      if (team.name === selectedValue.value){
        setUpdatedTeam(team)
      }
    })
    setDisplayTeam(true)
  };

  const handleChange = (event) => {
    updatedTeam[event.target.name] = parseInt(event.target.value);
  };

  const teamList = teams.map((team, index) => ({
    name: "team",
    label: team.name,
    value: team.name,
  }));

  const updateData = async (payload, id) => {
    return fetch("https://us-central1-xgtable-528d5.cloudfunctions.net/app/api/teams" + "/" + id,{
          method: 'PUT',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload)
      })
    }

const handleData = event => {
  setNewData(event.target.value)
}

const addData = (property) => {
  updatedTeam[property].push(parseFloat(newData))
  updateData(updatedTeam, updatedTeam._id)
  requestAll()
}

const updateProperties = () => {
  updateData(updatedTeam, updatedTeam._id)
  setTimeout(requestAll(), 2000)
}



 const arrayDisplay = (array) => {
   const data = array.map((item, index) => {
    if (index === array.length - 1){
      return ( 
        <p>{item}</p>
      )
    } else {
      return ( 
        <p>{item},&nbsp;</p>
       
      )
    }
     
   })

   return data
 }

  return (
    <div className="app-container">
      <h2>xGTable Admin</h2>
      <div className="select-container">
      <label>Select Team</label>
      <Select
        options={teamList}
        onChange={handleSelect}
        key='team-list'
        id='select-team'
      />
    </div>
    <hr></hr>
    <br></br>
   {displayTeam && 
  <Data
  updatedTeam={updatedTeam}
  arrayDisplay={arrayDisplay}
  handleChange={handleChange}
  handleData={handleData}
  addData={addData}
  updateProperties={updateProperties}
   />
  
   }
  </div>
  )
}

export default App;
