import React, { useState } from 'react';
import CardPet from '../../molecules/card-pet/CardPet';
import './HomeBack.scss';

function HomeBack() {

  const [maximize, setmaximize] = useState(false);

  return (
    <section id="spikes" class={`spikes ${maximize ? 'maximize' : 'minimize'}`}>
      <CardPet/>
      <div className="viewMore">
        <p className="line"></p>
          <div className="viewMore-button" onClick={() => setmaximize(!maximize)}>Ver {maximize ? 'Menos' : 'Todos'}</div>
        <p className="line"></p>
      </div>
    </section>
  )
}

export default HomeBack