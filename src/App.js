import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import List from "./components/List/List";


const todos = [
  {
      title: 'Go to School!',
      isCompleted: false
  },
  {
      title: 'Buy milk!',
      isCompleted: true
  },
  {
      title: 'Drive a Car!',
      isCompleted: false
  },
]




function App() {
  return (  
    <div className="app">
<Button
   color={'red'}
  width={'100px'}
  fontSize={'20px'} 


 />


    <Input 
    
    border={' 10px solid #bdbdbd'} 
    backgroundColor={'red'} 
    color={'white'} 

    />

    <List  data={todos}/>

    </div>
    
  );
}

export default App;
