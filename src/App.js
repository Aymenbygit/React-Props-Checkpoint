import './App.css';
import Profile from "./Profile/profile";
import myPic from "./myPic.jpg";

function App() {
  const handleName  = (name) =>{
    alert(`Hi, i am ${name}`)
  }
  return (
    <div style={{marginLeft:'10%', marginRight:'10%', backgroundColor:'pink', textAlign:'center'}}>
      <Profile 
      fullName="Aymen Ben Youssef" 
      bio="i m 25 yo i love web dev" 
      profession="Web devlopper"
      handleName ={handleName }
      >
        <div>
        <img src={myPic} alt='myPhoto' 
        style={{
        borderRadius: 50, 
        width:400, 
        height:300}}/>
      </div>
      </Profile>
    </div>
  );
}

export default App;
