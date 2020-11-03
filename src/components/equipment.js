import React from 'react';
import worn_equipment_tab from './Worn_equipment_tab.png'

const RenderEquipment = () => {
    return (
        <div className="equipment_grid">
           <img  src= {worn_equipment_tab} alt="Train"/>
  
            <div className='helmet'>
                <img className="helmet_img" src="#" alt="https://www.osrsbox.com/osrsbox-db/items-json-slot/items-head.json" title="helmets"/>
            </div>
  
            <div className="cape">
                <img className="cape_img" src="#" alt="https://www.osrsbox.com/osrsbox-db/items-json-slot/items-cape.json" title="capes"/>
            </div>
  
            <div className="neck">
                <img className="neck_img" src="#"   alt="https://www.osrsbox.com/osrsbox-db/items-json-slot/items-neck.json" title="necks"/>
            </div>
  
            <div className="ammo">
            <img  className="ammo_img" src="#" alt="https://www.osrsbox.com/osrsbox-db/items-json-slot/items-ammo.json" title="ammo"/>
            </div>
  
            <div className="weapon">
              <img className="weapon_img" src="#" alt="https://www.osrsbox.com/osrsbox-db/items-json-slot/items-weapon.json" title="weapons" />
            </div>
  
            <div className="chest">
              <img className="chest_img" src="#" alt="https://www.osrsbox.com/osrsbox-db/items-json-slot/items-body.json" title="chests"/>
            </div>
  
            <div className="sheild">
              <img className="sheild_img" src="#" alt="https://www.osrsbox.com/osrsbox-db/items-json-slot/items-shield.json" title="sheilds"/>
            </div>
  
            <div className="legs">
              <img className="legs_img" src="#" alt="https://www.osrsbox.com/osrsbox-db/items-json-slot/items-legs.json" title="legs" />
            </div>
  
            <div className="gloves">
              <img className="gloves_img" src="#" alt="https://www.osrsbox.com/osrsbox-db/items-json-slot/items-hands.json" title="gloves" />
            </div>
  
            <div className="boots">
              <img className="boots_img" src="#" alt="https://www.osrsbox.com/osrsbox-db/items-json-slot/items-feet.json" title="boots" />
            </div>
  
            <div className="ring">
              <img className="ring_img" src="#" alt="https://www.osrsbox.com/osrsbox-db/items-json-slot/items-ring.json" title="rings" />
            </div>
         </div>
    );
}




export default RenderEquipment;