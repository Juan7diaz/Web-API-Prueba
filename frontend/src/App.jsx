import { useState } from "react";
import { useEffect } from "react";
import { getUsers, createUser } from "./services/index";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUser() {
      const response = await getUsers();
      setUsers(response);
    }
    loadUser();
  }, [users]);

  const subir = () => {
    const name = "jessus";
    const address = "bogota";
    const phoneNumber = 1234;
    createUser({ name, address, phoneNumber });
  };

  return (
    <>
      {users.map((user) => (
        <div key={user.id}>
          {user.name} - {user.address}
        </div>
      ))}
      <button onClick={subir}>subir usuario</button>
    </>
  );
}

export default App;
