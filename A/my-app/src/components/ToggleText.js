import React, {Component} from 'react';
import { useState } from 'react';
class ToggleText extends Component{
    constructor(props){
        super(props);
        this.state ={
                isOn: true,
        }
    }
    // constructor initialises state with isOn true
    handlesubmit=()=>{
        this.setState((pre)=>({
            isOn:!pre.isOn,
        }));
    }
    // handlesubmit will invert the isOn state
    render(){
        return (
            <div>
                    <h1>{this.state.isOn ? " ON" : "OFF"} </h1>
                    <button  onClick={this.handlesubmit}>Button</button>
            </div>
        )
    }
}
export default ToggleText;





// functional components( with hooks )
// data fetching 

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function UsersList() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/users")
//       .then((res) => {
//         setUsers(res.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError(err.message);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div>
//       <h2>Users:</h2>
//       <ul>
//         {users.map((user) => (
//           <li key={user.id}>{user.name} ({user.email})</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default UsersList;

// import React, { Component } from "react";
// import axios from "axios";

// class UsersList extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       users: [],
//       loading: true,
//       error: null,
//     };
//   }

//   componentDidMount() {
//     axios
//       .get("https://jsonplaceholder.typicode.com/users")
//       .then((response) => {
//         this.setState({ users: response.data, loading: false });
//       })
//       .catch((error) => {
//         this.setState({ error: error.message, loading: false });
//       });
//   }

//   render() {
//     const { users, loading, error } = this.state;

//     if (loading) return <p>Loading users...</p>;
//     if (error) return <p>Error: {error}</p>;

//     return (
//       <div>
//         <h2>User List</h2>
//         <ul>
//           {users.map((user) => (
//             <li key={user.id}>{user.name} ({user.email})</li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

// export default UsersList;
