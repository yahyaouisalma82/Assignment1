import { Link } from "react-router-dom";  
const UserList = ({users}) => {
        return ( 
        <div className="user-list"> 
        <h1>Welcome !</h1>
        {users.map(user => (
            <div className="preview" key={user.id} >
    
              <Link to={`/users/${user.id}`} >
                <h2>{user.name}</h2>
                <p>Click on me to see my posts ! :)</p> 
              </Link>
            </div>
          ))}
          </div>
     );
}
 
export default UserList;