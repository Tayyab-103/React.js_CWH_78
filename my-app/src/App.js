import logo from './logo.svg';
import './App.css';

function App() {

   function formatName(user) {
     return user.firstName + " " + user.lastName;
   }

   const user = {
     firstName: "Harper",
     lastName: "Perez",
   };

  return (
    <>
      <h1>Hello, {formatName(user)}!</h1>

      <div className="blank">lovely</div>
    </>
  );
}

export default App;
