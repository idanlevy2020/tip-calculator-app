import "./Main.css";
// import useState from 'react';
import TipContainer from '../../TipContainer/TipContainer';
import PeopleContainer from '../../PeopleContainer/PeopleContainer';

function Main() {
   // const [bill,setBill]=useState(0);
   // const [tip,setTip]=useState(0);
   // const [numPeople,setNumPeople]=useState(1);
   return (
      <div className="Main">
         <PeopleContainer />
         <TipContainer />
      </div>
   );
}

export default Main;
