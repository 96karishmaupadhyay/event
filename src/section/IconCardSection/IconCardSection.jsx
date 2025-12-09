import React from 'react'
import event from '../../assets/eventhome.png'
import service from '../../assets/service.png'
import venue from '../../assets/venue.png'
import ticket from "../../assets/ticket.png"
import workshop from '../../assets/workshop.png'
import IconCard from '../../components/IconCard/IconCard'


 const iconData = [
  { id: 1, icon: event, name: "Events", active: false },
  { id: 2, icon: venue, name: "Venues", active: false },
  { id: 3, icon: ticket, name: "Tickets", active: true },
  { id: 4, icon: workshop, name: "Workshops", active: false },
  { id: 5, icon: service, name: "Services", active: false }
];



const IconCardSection = () => {
  return (
   <div className="container">
  <div className="row g-3 justify-content-center">
    {iconData.map((item) => (
      <div className="col-auto">
        <IconCard icon={item.icon} name={item.name} active={item.active}/>
      </div>
    ))}
  </div>
</div>

  )
}

export default IconCardSection;
