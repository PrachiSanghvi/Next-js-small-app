function UserData({ user }) {
  return(
    <div>
      <p> {user.name} - {user.email}</p>
    </div>
  )
}

export default UserData