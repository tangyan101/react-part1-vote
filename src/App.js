import React, {useState} from 'react';
import ReactDOM from 'react-dom'
import './App.css';

function Button({handleClick, text, className}){
  return (
    <button onClick={handleClick} className={className} style={{'lineHeight': '50px',fontSize : '20px'}}>{text}</button>
  )
}

function VoteBtn({handleClick}){
  return(
    <button onClick={handleClick}>Vote</button>
  )
}

function Vote({arr, num}){
  console.log(arr, num)
  return (
    <div>has ({arr[num]}) vote</div>
  )
}

function MostVote({data ,arr}){
  const maxVal = Math.max(...arr)
  console.log(maxVal)
  const maxIndex = arr.indexOf(maxVal)
  if(maxVal === 0) return null
  return(
    <div>
      <div>得票最多的是: {data[maxIndex]}</div>
      <div>票数为 {maxVal}</div>
    </div>
  )
}
function App(props) {
  let {anecdotes} = props;
  let len = anecdotes.length;

  const [selected, setSelected] = useState(0)
  
  const points = new Array(len+1).join('0').split('').map(parseFloat)
  const [vote, setVote] = useState(points)


 const setRandom = () => {
    // random 
    const num =  Math.floor(Math.random() * anecdotes.length)
    setSelected(num)
 }

 const vode = (num) => {
   return ()=> {
    const copy = [...vote]
    copy[num] += 1
    setVote(copy)
    console.log(copy)   
   }
 }
  return (
    <div>
      <h3>随机展示一段话并投票</h3>
      <div>{anecdotes[selected]}</div>
      <Vote arr={vote} num={selected}></Vote>

      <VoteBtn handleClick={vode(selected)}></VoteBtn>
      <Button handleClick={setRandom} text='show next random message' className='btn btn2'></Button> 

      <h2>展示得票最多的一段话</h2>
      <MostVote data={anecdotes} arr={vote} ></MostVote>
    </div>
  );
}

export default App;
