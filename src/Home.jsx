import useFetch from "./useFetch"; 
import UserList from "./UserList";

const Home=()=>{
    const {data:users,isPending,error}=useFetch('http://localhost:8000/users');
    
    return( 
      
       <div className="home">
         {error && <div>{error}</div> }
        {isPending && <div>Loading...</div>     }
      
       {users && <UserList users={users} />}
         
       </div>      
    );
}
export default Home;