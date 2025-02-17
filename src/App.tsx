
import './App.css'
import Alert from './components/ui/Alert/Alert'
import { AlertTriangle, Ban, Bell, CheckCheck, Info } from "lucide-react";

function App() {


  return (
    <div className='app-wrapper'>
      <Alert 
        type={'alert-default'} 
        icon = {<Bell size={20}/>} 
        title= {'Upgrade your plan'}>
          <p>
          Lorem ipsum <a href="/">dolor</a> sit amet consectetur adipisicing elit. Minus, iusto.
          </p>
        </Alert>

      <Alert 
        type={'alert-info'} 
        icon = {<Info size={20}/>} 
        title= {'Note'}
        description= {'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, iusto.'}
      />

      <Alert 
        type={'alert-warning'} 
        icon = {<CheckCheck size={20}/>} 
        title= {'Your order has been processed'}
        description= {'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, iusto.'}
      />

      <Alert 
        type={'alert-error'} 
        icon = {<Ban size={20}/>} 
        title= {'Something went wrong'}
        description= {'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, iusto.'}
      />

      <Alert 
        type={'alert-success'} 
        icon = {<AlertTriangle size={20}/>} 
        title= {'Tips & Tricks'}
        description= {'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, iusto.'}
      />
    </div>
  )
}

export default App
