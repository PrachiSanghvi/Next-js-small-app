import { useState, useEffect} from "react";
import { idText } from "typescript";


function Dashboard()   {
  const [isLoading,setIsLoading] = useState(true)
  const [dashBoardData,setDashBoardData] = useState(null)

  useEffect(() => {
    async function fetchDiashBoardData() {
      const response = await fetch("http://localhost:4000/dashboard")
      const data = await response.json();
      setDashBoardData(data)
      setIsLoading(false)
    }
    fetchDiashBoardData()
  }, [])

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  return(
    <>
      <h2>Dashboard</h2>
      <p>Posts      - {dashBoardData.posts}</p>
      <p>Likes      - {dashBoardData.likes}</p>
      <p>Follower   - {dashBoardData.follower}</p>
      <p>Following  - {dashBoardData.following}</p>
    </>
  )  
}
export default Dashboard;