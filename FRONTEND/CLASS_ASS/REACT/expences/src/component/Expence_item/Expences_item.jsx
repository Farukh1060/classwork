
import  "./Expences_item.css"



const Expences_item = (probes)=>{

    return(
        <div className="expences">
            <div>{probes.date.getFullYear()}/{probes.date.getMonth()}/{probes.date.getDay()}</div>
            <div className="expences_item">
                <h2>{probes.title}</h2>
                <div className="amount">${probes.amount}</div>
            </div>
        </div>
    );



}


export default Expences_item
