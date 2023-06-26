import './App.css';

let name = "Tayyab";

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

      <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
      </nav>

      <div className="container">

        <p>
          <h1> Hello {name}</h1>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati consectetur eius reiciendis ducimus cumque ex quis voluptatibus tempore optio iure? Eligendi veniam dignissimos amet. Maxime facilis ea maiores exercitationem doloribus.
        </p>
      </div>
    </>

  );
}

export default App;
