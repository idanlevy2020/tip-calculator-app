import "./TipContainer.css";

function TipContainer() {
   return (
      <div className="TipContainer">
         <div>
            <p>Tip Ammount</p>
            <p>4.27$</p>
         </div>
         <div>
            <p>Total</p>
            <p>32.79$</p>
         </div>
         <button>Reset</button>
      </div>
   );
}

export default TipContainer;
