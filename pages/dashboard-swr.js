import useSWR from 'swr';

const fetcher = async() => {
  const response = await fetch("http://localhost:4000/dashboard")
  const data = await response.json();
  return data;
}
function DashBoardSWR() {
  const {data,error} = useSWR('dashboard',fetcher)
  if(error) return 'An error has occured';
  if(!data) return 'Loading..';
  return(
    <>
      <h2>Dashboard</h2>
      <p>Posts      - {data.posts}</p>
      <p>Likes      - {data.likes}</p>
      <p>Follower   - {data.follower}</p>
      <p>Following  - {data.following}</p>
    </>
  )  
}

export default DashBoardSWR;