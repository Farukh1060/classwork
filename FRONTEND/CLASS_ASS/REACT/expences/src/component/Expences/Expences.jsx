
import Expences_item from "../Expence_item/Expences_item"




const Expences = (probes) => {
  return (
    <div>
      <Expences_item
        date={probes.Expences[0].date}
        title={probes.Expences[0].title}
        amount={probes.Expences[0].amount}
      />
      <Expences_item
        date={probes.Expences[1].date}
        title={probes.Expences[1].title}
        amount={probes.Expences[1].amount}
      />
      <Expences_item
        date={probes.Expences[2].date}
        title={probes.Expences[2].title}
        amount={probes.Expences[2].amount}
      />
      <Expences_item
        date={probes.Expences[3].date}
        title={probes.Expences[3].title}
        amount={probes.Expences[3].amount}
      />
    </div>
  )
}

export default Expences
