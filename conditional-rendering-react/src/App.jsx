// Conditional Rendering berguna untuk menampilak hal-hal yang berbeda terganung sebuah kondisi
// Kita bisa show, hide, dan change component

import UserGreeting from "./UserGreeting.jsx";


function App() {
  return (
    <UserGreeting isLoggedIn = {true} />
  );
}

export default App
