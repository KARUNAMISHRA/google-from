
import './App.css';

function App() {
  return (
  <>

<div className="box">
  <span className="borderLine"></span>
  <form>
    <h2>Job application </h2>
    <div className="inputBox">
      <input type="text" required="required" />
      <span>Fast Name</span>
      <i></i>
    </div>

    <div className="inputBox">
      <input type="text" required="required"/>
      <span>Last Name</span>
      <i></i>
    </div>
    <div className="inputBox">
      <input type="email" required="required" s />
      <span>E-mail</span>
      <i></i>
    </div>

    <div className="inputBox">
      <input type="password" required="required" />
      <span>Password</span>
      <i></i>
    </div>

    <div className="inputBox">
      <input type="text" required="required" s />
      <span>Compeny</span>
      <i></i>
    </div>
    {/* <div className="links">
      <a href="#">Forgot Password</a>
      <a href="#">Signup</a>
    </div> */}
    <br/>
    <input type="submit" value="Submit"/>
  </form>
</div>

   
   </>
  );
}

export default App;
