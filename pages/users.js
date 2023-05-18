import UserData from "../components/user";

function UserList({ users }) {
  return <>
    <h2>User Data</h2>
    {users.map(userData => (
      <div key={userData.id}>
        <UserData user={userData} />
      </div>
    ))}
  </>
}
export default UserList;

export async function getStaticProps() {
  // runs only on serverside
  // Won't even include in JS bundle that is sent to browser
  // allowed only in pages & can't run from regular component
  // Used only for pre-rendering and not for client side data fetching
  // Should return an object and object should contain key which is an object
  // Will run at build time
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json();
  return {
    props: {
      users: data
    }
  }
}