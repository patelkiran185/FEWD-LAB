// import React, { useEffect, useState, useRef } from "react";
// import axios from "axios";

// function App() {
//   const [name, setName] = useState("");
//   const [users, setUsers] = useState([]);
//   const inputRef = useRef(null);
//   const count = useRef(0);
//   const items = ["A", "B", "C"];
//   console.log("Items ");

//   // useEffect(() => {
//   //   const interval = setInterval(() => {
//   //     count.current += 1;
//   //     console.log("Current", count.current);
//   //   }, 1000);
//   //   return () => { clearInterval(interval); };
//   // }, []);

//   useEffect(() => {
//     console.log("Mounted");
//   }, []);
//   useEffect(() => {
//     console.log("Updated", name);
//   }, [name]);
//   useEffect(() => {
//     return () => {
//       console.log("Unmounted ");
//     };
//   }, []);

//   // useEffect should be at component level, not inside event handler
//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/users")
//       .then((res) => setUsers(res.data))
//       .catch((err) => console.error(err));
//   }, []);

//   const handlesubmit = (e) => {
//     e.preventDefault();
//     console.log(name);
//   };

//   const handleclick = () => {
//     alert("Clicked");
//   };

//   const focusInput = () => {
//     alert("Button was clicked!"); // This should show immediately
//     console.log("Button clicked!"); // This should appear first
//     console.log("inputRef:", inputRef); // logs the ref object
//     console.log("inputRef.current:", inputRef.current); // logs the DOM element

//     if (inputRef.current) {
//       console.log("Element type:", inputRef.current.tagName);
//       console.log("Element value:", inputRef.current.value);
//       inputRef.current.focus();
//     } else {
//       console.log("inputRef.current is null!");
//     }
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <form onSubmit={handlesubmit}>
//         <input value={name} onChange={(e) => setName(e.target.value)} />
//         <button type="submit">Submit</button>
//         <button type="button" onClick={handleclick}>
//           Click Me
//         </button>
//       </form>

//       {/* Display users data */}
//       <ul>
//         {users.map((user) => (
//           <li key={user.id}>{user.name}</li>
//         ))}
//       </ul>

//       <>
//         <input ref={inputRef} type="text" placeholder="Type something..." />
//         <button onClick={focusInput}>Focus Input</button>
//       </>

//       <br />
//       <div style={{ padding: "30px" }}>
//         <table>
//           <tbody>
//             {items.map((item, index) => {
//               return (
//               <React.Fragment key={index}>
//                 <tr>
//                   <td>Item:</td>
//                 </tr>
//                 <tr>
//                   <td>{item}</td>
//                 </tr>
//               </React.Fragment>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default App;





// import Parent from "./components/Parent.js";
// import React, { useState, useContext,createContext } from "react";

// const MyContext = createContext();
// function App() {
  
//   const [value, setValue] = useState("Hello ");

//   return (
//     /* <div style={{padding:'50px'}}>
//   <Parent />
// </div> */
// <MyContext.Provider value={value}>
// <ChildComponent />
// </MyContext.Provider>
//   );
// }
// function ChildComponent(){
//   const contextalue=useContext(MyContext);
//   return (
//     <h1>
//       {contextalue}
//     </h1>
//   );
// }
// export default App;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ToggleText from './components/ToggleText';
import ParentComponent from './components/ParentComponent'
import PostForm from './components/PostForm';
import Quiz from './components/Quiz';


function App() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', email: '' });

  const apiURL = 'https://jsonplaceholder.typicode.com/users';

  // GET request: fetch all users
  const fetchUsers = () => {
    axios.get(apiURL)
      .then(res => setUsers(res.data))
      .catch(err => console.error('GET Error:', err));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // POST request: add a new user
  const addUser = () => {
    axios.post(apiURL, newUser)
      .then(res => {
        setUsers([...users, res.data]);
        setNewUser({ name: '', email: '' });
      })
      .catch(err => console.error('POST Error:', err));
  };

  // PUT request: update a user
  const updateUser = (id) => {
    const updatedUser = { name: 'Updated Name', email: 'updated@example.com' };
    axios.put(`${apiURL}/${id}`, updatedUser)
      .then(res => {
        setUsers(users.map(user => user.id === id ? res.data : user));
      })
      .catch(err => console.error('PUT Error:', err));
  };

  // DELETE request: remove a user
  const deleteUser = (id) => {
    axios.delete(`${apiURL}/${id}`)
      .then(() => {
        setUsers(users.filter(user => user.id !== id));
      })
      .catch(err => console.error('DELETE Error:', err));
  };

  return (
    <div style={{ padding: '20px' }}>
      {/* <h2>Axios CRUD Example</h2>

      <h3>Add New User</h3>
      <input
        type="text"
        placeholder="Name"
        value={newUser.name}
        onChange={e => setNewUser({ ...newUser, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={newUser.email}
        onChange={e => setNewUser({ ...newUser, email: e.target.value })}
      />
      <button onClick={addUser}>Add User</button>

      <h3>User List</h3>
      <ul>
        {users.slice(0, 5).map(user => ( // Limit to first 5 users for demo
          <li key={user.id}>
            {user.name} ({user.email}) &nbsp;
            <button onClick={() => updateUser(user.id)}>Edit</button> &nbsp;
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul> */}
      <ToggleText />
      <ParentComponent /> 
      <PostForm />
      <Quiz />
    </div>
  );
}

export default App;