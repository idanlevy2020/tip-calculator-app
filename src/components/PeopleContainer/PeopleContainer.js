import "./PeopleContainer.css";

function PeopleContainer() {
   return (
      <div className="PeopleContainer">
         <p> Bill </p>
         <input type="text"/>
         <p> Select Tip </p>
         <button>5%</button>
         <button>10%</button>
         <button>15%</button>
         <button>20%</button>
         <button>25%</button>
         <button>50%</button>
         <button>Custom</button>
         <p> Number of People </p>
         <input type="text"/>
      </div>
   );
}

export default PeopleContainer;
