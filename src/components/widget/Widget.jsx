import "./widget.scss"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EngineeringIcon from '@mui/icons-material/Engineering';
import GroupIcon from '@mui/icons-material/Group';
import StackedLineChartOutlinedIcon from '@mui/icons-material/StackedLineChartOutlined';
import LocalActivityOutlinedIcon from '@mui/icons-material/LocalActivityOutlined';
import { useEffect, useState } from "react";
import axios from "axios";
const Widgets = ({type}) => {
  let data;

// const [getCount, setGetCount] = useState();  
// useEffect(() => {
//   axios.get('http://localhost:1337/api/worker/getCount').then((response)=> {setGetCount(response.data)})
// })  
// console.log(getCount)
  //temp
  const amount = 1000
  const diff = 20 

  switch(type){
    case "workers":
      data={
        title:"WORKERS",
        isMoney: false,
        link:"See all workers",
        icon: (<EngineeringIcon className="icon"/>),
        amount: 27
      };
      break;
    case "clients":
      data={
        title:"CLIENTS",
        isMoney: false,
        link:"See all clients",
        icon: (<GroupIcon className="icon"/>),
        amount: 21
      };
      break;
    case "sales":
      data={
        title:"SALES",
        isMoney: true,
        link:"View More Stats",
        icon: (<StackedLineChartOutlinedIcon className="icon"/>),
        amount: 27*150
      };
      break;
    case "tickets":
      data={
        title:"TICKETS",
        isMoney: false,
        link:"View All Tickets",
        icon: (<LocalActivityOutlinedIcon className="icon"/>),
        amount: 11
       };
      break;
      
      default:
        break;
  }



  return (
    <div className="widget">
      <div className="left">
          <span className="title ">{data.title}</span>
          <span className="counter">{data.isMoney && "Rs."} {data.amount} </span>
          <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  )
}

export default Widgets
