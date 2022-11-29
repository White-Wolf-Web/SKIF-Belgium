import { useState, useEffect } from "react";


export default  function MyComponent() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [users, setUsers] = useState([]);
  
    // Remarque : le tableau vide de dépendances [] indique
    // que useEffect ne s’exécutera qu’une fois, un peu comme
    // componentDidMount()
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setUsers(result.items);
          },
          // Remarque : il faut gérer les erreurs ici plutôt que dans
          // un bloc catch() afin que nous n’avalions pas les exceptions
          // dues à de véritables bugs dans les composants.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Chargement...</div>;
    } else {
      return (
        <div>
        <h1>Listes</h1>

        {users.map((r) => (
            <li key={r.id}>{r.name}</li>
        ))}
    </div>
      );
    }
  }