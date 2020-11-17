import React from "react";
import { connect } from "react-redux";
import { reduxForm, Field} from "redux-form";
import { sendfulldate } from "../actions";
class PandoClock extends React.Component{
  constructor(props){
      super(props)
      this.state={sessionsessionMinutes:25,sessionsessionsSeconds:0,breakMinutes:5,breakSeconds:0,expression:"Session",btnvalue:"start",interval:null,SessionLengControl:25,BrakLengCOntrol:5,btnstate:false,btntxtvalue:"Start Session",
      colors: ["Turquoise","DarkSlateGrey",'red', 'green', 'blue', 'orange',"SteelBlue","MediumOrchid","Gold","Maroon","Chocolate","LawnGreen"],picked:""
  }
  
     
  }
 



restore=()=>{
  this.setState({sessionsessionMinutes:25,sessionsessionsSeconds:0,breakMinutes:5,breakSeconds:0})
}

timeforbrek=()=>{
  this.state.breakMinutes===0? this.setState({breakSeconds:60}):this.setState({})
     // window.alert("Please update Your Break time or defult time will used Click ok to contine")
      
      

  
  if(document.getElementById("start_stop").value==="start"){
      this.setState({btnvalue:"Pause"})
      
     
    
  
 this.interval= setInterval(() => {
    
      if(this.state.breakMinutes>0){
          if(this.state.breakSeconds>=0){
              this.state.breakSeconds>0?this.setState({breakSeconds:this.state.breakSeconds-1}):this.setState({breakMinutes:this.state.breakMinutes-1,breakSeconds:59})
          }
        

      }
      else{this.setState({breakSeconds:this.state.breakSeconds-1})} 
      if(this.state.breakMinutes===0&&this.state.breakSeconds<=59){document.getElementById("time-left").className="text-danger"}  
      if(this.state.breakMinutes===0&&this.state.breakSeconds===0){
          clearInterval(this.interval)
           
           
           document.getElementById("beep").play()
           this.setState({btnstate:true})
           this.setState({btnvalue:"Please Wait...."})
           
           this.setState({expression:"Session starting..."})
           document.getElementById("start_stop").className="btn-warning btn-block btn"
        setTimeout(() => {
          document.getElementById("start_stop").className="btn-outline-primary btn-block btn"
          document.getElementById("time-left").className="text-success"
         // this.restore();
         this.setState({sessionsessionMinutes:this.state.SessionLengControl,breakMinutes:this.state.BrakLengCOntrol})
          this.setState({btnvalue:"start"})
          this.cloock_start()
          this.setState({btnstate:false})
        }, 6000);  
      }
  }, 1000);
}
else{
  this.setState({btnvalue:"start"})
  //this.state.breakMinutes===0&&this.state.breakSeconds===0?this.setState({btntxtvalue:"Start Break"}):this.setState({btntxtvalue:"Resume Break"})
 
  for(let i=0;i<100;i++){
      clearInterval(i)
  }  
}
}
cloock_start=(obj)=>{
 document.getElementById("beep").src="https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg"
if(this.state.SessionLengControl===0){
  /* window.alert("Please update Your Session time or defult  time will  used Click ok to contine")
   this.setState({sessionsessionMinutes:25,SessionLengControl:25})*/
   this.setState({sessionsessionsSeconds:60})
}
else
  this.colrinterval=setInterval(() => {
      this.setState({picked:this.state.colors[Math.floor(Math.random()*this.state.colors.length)]})    
      }, 1000);
      
   
    if(document.getElementById("start_stop").value==="start"){
      this.setState({btnvalue:"Pause"})
      this.setState({btntxtvalue:"Pause session"})
      if(this.state.btnvalue==="start"&&this.state.expression==="Break"&&this.state.breakMinutes!==0&&this.state.breakSeconds!==0){
          let a=this.state.breakMinutes;
          let b=this.state.breakSeconds
          
          //this.setState({copybrkmin:this.state.breakMinutes,copybreksec:this.state.breakSeconds})
          this.setState({breakMinutes:a,breakSeconds:b})
         
          this.timeforbrek()
          

      }
      else
     
  this.interval=setInterval(() => {
      this.setState({expression:"Session"})
      if(this.state.sessionsessionMinutes>0){
          if(this.state.sessionsessionsSeconds>=0){
              this.state.sessionsessionsSeconds>0?this.setState({sessionsessionsSeconds:this.state.sessionsessionsSeconds-1}):this.setState({sessionsessionMinutes:this.state.sessionsessionMinutes-1,sessionsessionsSeconds:59,counter:5})
          }
        

      }
      else{this.setState({sessionsessionsSeconds:this.state.sessionsessionsSeconds-1})}
      if(this.state.sessionsessionMinutes===0&&this.state.sessionsessionsSeconds<=59){document.getElementById("time-left").className="text-danger"}
      if(this.state.sessionsessionMinutes===0&&this.state.sessionsessionsSeconds===0){
     // clearInterval(this.interval)
          // this.setState({sessionsessionMinutes:this.state.breakMinutes,sessionsessionsSeconds:this.state.breakSeconds})
        
         clearInterval(this.interval)
          
          document.getElementById("beep").play() 
         
          this.setState({btnstate:true})
          this.setState({btnvalue:"Please Wait...."})
          this.setState({expression:"Break Starting..."})
          
          this.setState({breakMinutes:0,breakSeconds:0})  
          document.getElementById("start_stop").className="btn-warning btn-block btn"
         setTimeout(() => {
          document.getElementById("start_stop").className="btn-outline-primary btn-block btn"
          this.restore()
          this.setState({btnvalue:"start"})
          this.setState({expression:"Break"});
          this.setState({breakMinutes:this.state.BrakLengCOntrol,breakSeconds:0})
          this.timeforbrek() 
          document.getElementById("time-left").className="text-success" 
          this.setState({btnstate:false})


         }, 5000); 
         
      
      }
 
   }, 1000);
   
} 
else{
   this.setState({btnvalue:"start"})

  
   for(let i=0;i<100;i++){
       clearInterval(i)
   }
}
      
} 
restore2=(btn_id)=>{
  for(let i=0;i<100;i++){
      clearInterval(i)
  }
  this.restore()  
 //
 this.setState({btnstate:false})
  this.setState({btnvalue:"start"})
  this.setState({SessionLengControl:25})
  this.setState({BrakLengCOntrol:5})
  document.getElementById("beep").src=" ";
  this.setState({expression:"Session"})
  document.getElementById("start_stop").className="btn-outline-primary btn-block btn"
  document.getElementById("time-left").className='text-success'
//window.location.reload(true)
// window.location.href = window.location.href;

  
} 
sessincr=()=>{
  this.setState({sessionsessionMinutes:this.state.SessionLengControl+1,SessionLengControl:this.state.SessionLengControl+1,sessionsessionsSeconds:0})
}
sessdec=()=>{
  this.setState({sessionsessionMinutes:this.state.SessionLengControl-1,SessionLengControl:this.state.SessionLengControl-1,sessionsessionsSeconds:0})
}

brcincr=()=>{
  this.setState({breakMinutes:this.state.BrakLengCOntrol+1,BrakLengCOntrol:this.state.BrakLengCOntrol+1,breakSeconds:0})
}

brkdec=()=>{
  this.setState({breakMinutes:this.state.BrakLengCOntrol-1,BrakLengCOntrol:this.state.BrakLengCOntrol-1,breakSeconds:0})
}



 


 render(){
  
      return(
       
          <div  class = 'row  rounded-right rounded-left rounded-bottom rounded-top '   >
          
              
           <div class='col-md-6 offset-md-3 ' >
              <div class='row'><div class='col-12'><h2   class='text-center ' style=
           {{color:this.state.picked,
         fontFamily:"Baloo Bhai"
          
          }} >Kume's Pomodoro Clock</h2></div> </div>
              <div class='row '>
              
              <div class='col-md-12 '>
             
             <div class='row ' >
                 <div class=' col-12 btn   text-center' >
                   <i  class={this.state.sessionsessionMinutes===0&&this.state.sessionsessionsSeconds===0? "bell fa fa-bell fa-3x": "fa fa-bell fa-3x"} id='bell'    aria-hidden="true"></i>
                      <h4 id='time-left' class='text-success ' > {this.state.expression==='Session'?this.state.sessionsessionMinutes<=9?`0`+this.state.sessionsessionMinutes:this.state.sessionsessionMinutes:this.state.breakMinutes<=9?`0`+this.state.breakMinutes:this.state.breakMinutes}:{this.state.expression==='Session'?this.state.sessionsessionsSeconds<=9?`0`+this.state.sessionsessionsSeconds:this.state.sessionsessionsSeconds:this.state.breakSeconds<=9?`0`+this.state.breakSeconds:this.state.breakSeconds}</h4>
                      </div></div>
                      <div class='row'><div class='col-12 '> <h2 class=' text-center text-info c' id='timer-label'>{this.state.expression}</h2></div></div>
            
            <audio src="https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg" id='beep' type="audio/ogg" />
              </div>
              
              </div>
              <div class='row'>
                  <div class='col-6 '>
                      
                  <h5 class='text-center hi text-warning' id='session-label'>Session Length</h5>
                  <div class='row'>
          <div class='col-4'>  <button class='btn btn-light ' id='session-increment' disabled={this.state.btnvalue==="Pause"|this.state.SessionLengControl===60?true:false} onClick={this.sessincr}>
         
          <i class="fa fa-arrow-up" style={{color:this.state.btnvalue==="Pause"?"red":"green"}} ></i>

          
          </button></div>
          <div class='col-4' >   <h6 class='h3 text-warning' id='session-length'>{this.state.SessionLengControl}</h6></div>
          <div class='col-4'>   <button  class='btn btn-light'  disabled={this.state.btnvalue==="Pause"|this.state.SessionLengControl<=1?true:false} id='session-decrement' onClick={this.sessdec}><i class="fa fa-arrow-down" style={{color:this.state.btnvalue==="Pause"?"red":"green"}} ></i></button></div>
            </div>
                  </div>
                  <div class=' col-6  '>
                  <h5 class='text-center text-warning hi' id='break-label'>Break Length</h5>
                 <div class='row'>
                 <div class='col-4'>   <button class='btn btn-light' id='break-increment' disabled={this.state.btnvalue==="Pause"|this.state.BrakLengCOntrol===60?true:false} onClick={this.brcincr} >  <i class="fa fa-arrow-up " style={{color:this.state.btnvalue==="Pause"?"red":"green"}} aria-hidden="true"></i></button></div>
                 <div class='col-4'>   <h4 class='h3 text-warning' id='break-length'>{this.state.BrakLengCOntrol}</h4></div>
                 <div class='col-4'>  <button class='btn btn-light' id='break-decrement' disabled={this.state.btnvalue==="Pause"|this.state.BrakLengCOntrol<=1?true:false} onClick={this.brkdec}><i class="fa fa-arrow-down" style={{color:this.state.btnvalue==="Pause"?"red":"green"}} aria-hidden="true"></i></button></div>
  </div> 
                  </div>
              </div>
              <div class='row '>
                  <div class='col-6  text-center' id='btnstarthold'> 
                   <button onClick={this.cloock_start} disabled={this.state.btnstate}
             id='start_stop'  value={this.state.btnvalue} class='img-thumbnail btn btn-light btn-block '>
             {this.state.btnvalue} 
      </button></div>
      <div class='col-6 text-center ' id='btnstarthold'> 
       <button  id='reset' onClick={this.restore2}  class=' img-thumbnail btn btn-light btn-block '>
             Reste
      </button></div>
      
      </div>
      <h4 id='myname' class='text-center text-light myname' >
          Design by Kumenger  <i class="fa fa-copyright" aria-hidden="true"></i>  Denver Colorado </h4>
      </div> 
      
      </div> 
         
           
     
               
              
              
              

              
        








          
      

  

          
         
      )
  }
}
export default PandoClock
