const UserCard = ({ user }) => {
  return (
    <div>
      <h2>Hello, {user.name}</h2>
      <p>Our meeting city: {user.city}</p>
    
    </div>
  )
}

export default UserCard;