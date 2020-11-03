import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import worn_equipment_tab from './Worn_equipment_tab.png'
import axios from 'axios';



class Post extends React.Component{
  
// all of the properties and componets of this webapp will be placed here
// these are going to be parts such as sidebar logo and main content 
        renderSideBar() {
        return (
            <div id="menu">
        <div className="pure-menu">
            <a className="pure-menu-heading" href="{{ url_for('index') }}">Name</a>
    
            <ul className="pure-menu-list">
                <li className="pure-menu-item"><a href="{{ url_for('logout') }}" className="pure-menu-link">Logout</a></li>
                <li className="pure-menu-item"><a href="{{ url_for('signin') }}" className="pure-menu-link">Sign in</a></li>
                <li className="pure-menu-item"><a href="{{ url_for('about')}}" className="pure-menu-link">About</a></li>
                <li className="pure-menu-item menu-item-divided pure-menu-selected">
                    <a href="#" className="pure-menu-link">Terms</a>
                </li>
    
                <li className="pure-menu-item"><a href="#" className="pure-menu-link">Contact</a></li>
            </ul>
        </div>
    </div>
        );
    }

        renderLogo() {
            return (
                <div className="header">
                <h1 className="reee">Logo</h1>
                </div>
            );
        }



    // These two are used for collecting all parts of the page
    //then compiling it into one renderable package
     renderPost = () => {
        return (
         <div className="NavLogo">
            { this.renderSideBar() }
            { this.renderLogo() }
            
          </div>
        );
     }

    render() {
        return (
        this.renderPost()
        ); 
    }

}


////////////////////////////////////////////////////////////////////////////////////////////////////////

class Search extends Post {
 

    state = {

        helmets: [
            "Khazard helmet",
            "Blue wizard hat",
            "Pink hat",
            "Green hat",
            "Blue hat" ,
            "Cream hat" ,
            "Turquoise hat",
            "Wizard hat", 
            "Right eye patch",
            "Bunny ears",
            "Red partyhat",
            "Yellow partyhat",
            "Blue partyhat",
            "Green partyhat",
            "Purple partyhat",
            "White partyhat",
            "Santa hat",
            "Green halloween mask",
            "Blue halloween mask",
            "Red halloween mask",
            "Iron med helm",
            "Bronze med helm",
            "Steel med helm",
            "Mithril med helm",
            "Adamant med helm",
            "Rune med helm",
            "Dragon med helm",
            "Black med helm",
            "Iron full helm",
            "Bronze full helm",
            "Steel full helm",
            "Mithril full helm",
            "Adamant full helm",
            "Rune full helm",
            "Black full helm",
            "Leather cowl",
            "Coif", 
            "Gas mask",
            "Chef's hat",
            "Blue partyhat", 
            "Robin hood hat", 
            "Black full helm (t)",
            "Black full helm (g)",
            "Adamant full helm (t)",
            "Adamant full helm (g)",
            "Rune full helm (g)",
            "Rune full helm (t)",
            "Highwayman mask",
            "Blue beret", 
            "Black beret",
            "White beret", 
            "Tan cavalier", 
            "Dark cavalier", 
            "Black cavalier", 
            "Red headband", 
            "Black headband", 
            "Brown headband", 
            "Pirate's hat", 
            "Zamorak full helm",
            "Saradomin full helm",
            "Guthix full helm",
            "Grey hat", 
            "Red hat", 
            "Yellow hat", 
            "Teal hat", 
            "Purple hat", 
            "Chompy bird hat",
            "Chompy bird hat",
            "Chompy bird hat",
            "Chompy bird hat",
            "Chompy bird hat",
            "Chompy bird hat",
            "Chompy bird hat",
            "Chompy bird hat",
            "Chompy bird hat",
            "Chompy bird hat",
            "Chompy bird hat",
            "Chompy bird hat",
            "Chompy bird hat",
            "Chompy bird hat",
            "Chompy bird hat",
            "Chompy bird hat",
            "Chompy bird hat",
            "Chompy bird hat",
            "Mime mask",
            "Myre snelm",
            "Blood'n'tar snelm",
            "Ochre snelm",
            "Bruise blue snelm",
            "Broken bark snelm",
            "Myre snelm",
            "Blood'n'tar snelm",
            "Ochre snelm",
            "Bruise blue snelm",
            "Splitbark helm",
            "Gilded full helm",
            "Fremennik helm",
            "Archer helm", 
            "Berserker helm", 
            "Warrior helm", 
            "Farseer helm", 
            "Fremennik hat", 
            "Decorative helm",
            "Mystic hat", 
            "Mystic hat (dark)",
            "Mystic hat (light)",
            "Facemask", 
            "Earmuffs", 
            "Nose peg", 
            "Bedsheet", 
            "Bedsheet", 
            "Ham hood",
            "Bearhead", 
            "Decorative helm",
            "Decorative helm",
            "Castlewars hood",
            "Castlewars hood",
            "Spiny helmet", 
            "Gold helmet", 
            "Desert disguise",
            "Ahrim's hood", 
            "Dharok's helm",
            "Guthan's helm", 
            "Karil's coif", 
            "Torag's helm", 
            "Verac's helm", 
            "Ahrim's hood 100",
            "Ahrim's hood 75",
            "Ahrim's hood 50",
            "Ahrim's hood 25",
            "Dharok's helm 100",
            "Dharok's helm 75",
            "Dharok's helm 50",
            "Dharok's helm 25",
            "Guthan's helm 100",
            "Guthan's helm 75",
            "Guthan's helm 50",
            "Guthan's helm 25",
            "Karil's coif 100",
            "Karil's coif 75",
            "Karil's coif 50",
            "Karil's coif 25",
            "Torag's helm 100",
            "Torag's helm 75",
            "Torag's helm 50",
            "Torag's helm 25",
            "Verac's helm 100",
            "Verac's helm 75",
            "Verac's helm 50",
            "Verac's helm 25",
            "Mining helmet",
            "Mining helmet", 
            "Tiara", 
            "Air tiara", 
            "Mind tiara", 
            "Water tiara", 
            "Body tiara", 
            "Earth tiara", 
            "Fire tiara", 
            "Cosmic tiara", 
            "Nature tiara", 
            "Chaos tiara", 
            "Law tiara", 
            "Death tiara", 
            "Rogue mask", 
            "Initiate sallet",
            "Ghostly hood", 
            "Rock-shell helm",
            "Spined helm", 
            "Skeletal helm", 
            "Lederhosen hat", 
            "Frog mask", 
            "Snakeskin bandana",
            "Tribal mask", 
            "Tribal mask", 
            "Tribal mask", 
            "Villager hat", 
            "Villager hat", 
            "Villager hat", 
            "Villager hat", 
            "Fez", 
            "Menaphite purple hat",
            "Menaphite red hat",
            "Doctor's hat", 
            "Nurse hat", 
            "White med helm", 
            "White full helm",
            "Camo helmet",
            "Mudskipper hat",
            "Bobble hat", 
            "Jester hat", 
            "Tri-jester hat", 
            "Woolly hat", 
            "Progress hat", 
            "Progress hat", 
            "Progress hat", 
            "Infinity hat", 
            "Dragon med helm",
            "Camel mask", 
            "Pirate bandana", 
        ],
        searchTerm: '',  

        ammo: [
            "Ice arrows", 
            "Bronze fire arrow", 
            "Bronze javelin", 
            "Iron javelin", 
            "Steel javelin", 
            "Mithril javelin", 
            "Adamant javelin", 
            "Rune javelin", 
            "Bronze javelin(p)", 
            "Iron javelin(p)", 
            "Steel javelin(p)", 
            "Mithril javelin(p)", 
            "Adamant javelin(p)", 
            "Rune javelin(p)", 
            "Bronze bolts", 
            "Bronze bolts (p)", 
            "Opal bolts", 
            "Pearl bolts", 
            "Barbed bolts", 
            "Bronze arrow", 
            "Bronze arrow(p)", 
            "Iron arrow", 
            "Iron arrow(p)", 
            "Steel arrow", 
            "Steel arrow(p)", 
            "Mithril arrow", 
            "Mithril arrow(p)", 
            "Adamant arrow", 
            "Adamant arrow(p)", 
            "Rune arrow", 
            "Rune arrow(p)", 
            "Bronze fire arrow (lit)", 
            "Iron fire arrow", 
            "Iron fire arrow (lit)", 
            "Steel fire arrow", 
            "Steel fire arrow (lit)", 
            "Mithril fire arrow", 
            "Mithril fire arrow (lit)", 
            "Adamant fire arrow", 
            "Adamant fire arrow (lit)", 
            "Rune fire arrow", 
            "Rune fire arrow (lit)", 
            "Ogre arrow", 
            "Broad arrows", 
            "Bolt rack", 
            "Bronze brutal", 
            "Iron brutal", 
            "Steel brutal", 
            "Black brutal", 
            "Mithril brutal", 
            "Adamant brutal", 
            "Rune brutal", 
            "Bronze arrow(p+)", 
            "Iron arrow(p+)", 
            "Steel arrow(p+)", 
            "Mithril arrow(p+)", 
            "Adamant arrow(p+)", 
            "Rune arrow(p+)", 
            "Bronze arrow(p++)", 
            "Iron arrow(p++)", 
            "Steel arrow(p++)", 
            "Mithril arrow(p++)", 
            "Adamant arrow(p++)", 
            "Rune arrow(p++)", 
            "Bronze javelin(p+)", 
            "Iron javelin(p+)", 
            "Steel javelin(p+)", 
            "Mithril javelin(p+)", 
            "Adamant javelin(p+)", 
            "Rune javelin(p+)", 
            "Bronze javelin(p++)", 
            "Iron javelin(p++)", 
            "Steel javelin(p++)", 
            "Mithril javelin(p++)", 
            "Adamant javelin(p++)", 
            "Rune javelin(p++)", 
            "Bronze bolts (p+)", 
            "Bronze bolts (p++)", 
            "Bone bolts", 
            "Blurite bolts", 
            "Iron bolts", 
            "Steel bolts", 
            "Mithril bolts", 
            "Adamant bolts", 
            "Runite bolts", 
            "Silver bolts", 
            "Opal bolts (e)", 
            "Jade bolts (e)", 
            "Pearl bolts (e)", 
            "Topaz bolts (e)", 
            "Sapphire bolts (e)", 
            "Emerald bolts (e)", 
            "Ruby bolts (e)", 
            "Diamond bolts (e)", 
            "Dragonstone bolts (e)", 
            "Onyx bolts (e)", 
            "Blurite bolts (p)", 
            "Iron bolts (p)", 
            "Steel bolts (p)", 
            "Mithril bolts (p)", 
            "Adamant bolts (p)", 
            "Runite bolts (p)", 
            "Silver bolts (p)", 
            "Blurite bolts (p+)", 
            "Iron bolts (p+)", 
            "Steel bolts (p+)", 
            "Mithril bolts (p+)", 
            "Adamant bolts (p+)", 
            "Runite bolts (p+)", 
            "Silver bolts (p+)", 
            "Blurite bolts (p++)", 
            "Iron bolts (p++)", 
            "Steel bolts (p++)", 
            "Mithril bolts (p++)", 
            "Adamant bolts (p++)", 
            "Runite bolts (p++)", 
            "Silver bolts (p++)", 
            "Jade bolts", 
            "Topaz bolts", 
            "Sapphire bolts", 
            "Emerald bolts", 
            "Ruby bolts", 
            "Diamond bolts", 
            "Dragonstone bolts", 
            "Onyx bolts", 
            "Mith grapple", 
            "Training arrows", 
            "Guam tar", 
            "Marrentill tar", 
            "Tarromin tar", 
            "Harralander tar", 
            "Kebbit bolts", 
            "Long kebbit bolts", 
            "Dragon arrow", 
            "Dragon fire arrow", 
            "Dragon fire arrow (lit)", 
            "Dragon arrow(p)", 
            "Dragon arrow(p+)", 
            "Dragon arrow(p++)", 
            "Bronze arrow", 
            "Iron arrow", 
            "Steel arrow", 
            "Mithril arrow", 
            "Broad bolts", 
            "Dragon javelin", 
            "Dragon javelin(p)", 
            "Dragon javelin(p+)", 
            "Dragon javelin(p++)", 
            "Holy blessing", 
            "Unholy blessing", 
            "Peaceful blessing", 
            "Honourable blessing", 
            "War blessing", 
            "Ancient blessing", 
            "Adamant arrow", 
            "Dragon arrow", 
            "Rune arrow", 
            "Amethyst broad bolts", 
            "Amethyst javelin", 
            "Amethyst javelin(p)", 
            "Amethyst javelin(p+)", 
            "Amethyst javelin(p++)", 
            "Amethyst arrow", 
            "Amethyst fire arrow", 
            "Amethyst fire arrow (lit)", 
            "Amethyst arrow(p)", 
            "Amethyst arrow(p+)", 
            "Amethyst arrow(p++)", 
            "Dragon bolts", 
            "Dragon bolts (p)", 
            "Dragon bolts (p+)", 
            "Dragon bolts (p++)", 
            "Opal dragon bolts (e)", 
            "Jade dragon bolts (e)", 
            "Pearl dragon bolts (e)", 
            "Topaz dragon bolts (e)", 
            "Sapphire dragon bolts (e)", 
            "Emerald dragon bolts (e)", 
            "Ruby dragon bolts (e)", 
            "Diamond dragon bolts (e)", 
            "Dragonstone dragon bolts (e)", 
            "Onyx dragon bolts (e)", 
            "Opal dragon bolts", 
            "Jade dragon bolts", 
            "Pearl dragon bolts", 
            "Topaz dragon bolts", 
            "Sapphire dragon bolts", 
            "Emerald dragon bolts", 
            "Ruby dragon bolts", 
            "Diamond dragon bolts", 
            "Dragonstone dragon bolts", 
            "Onyx dragon bolts", 
            "Bullet arrow", 
            "Field arrow", 
            "Blunt arrow", 
            "Barbed arrow", 
            "Rada's blessing 1", 
            "Rada's blessing 2", 
            "Rada's blessing 3", 
            "Rada's blessing 4", 
        ],
        searchTerm: ''
    }
 

    renderContent() {
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

    renderStats()
    {
        return(
            <div id="bonuses-output">
                <strong>Attack bonus</strong>
                <br/> 
                <ul>
                    <li>Stab: +0</li>
                    <li>Slash: +0</li> 
                    <li>Crush: +0</li>
                    <li>Magic: +0</li> 
                    <li>Range: +0</li>
                </ul> 
                <strong>Defence bonus</strong>
                <br/> 
                <ul>
                    <li>Stab: +0</li> 
                    <li>Slash: +0</li>
                    <li>Crush: +0</li>
                    <li>Magic: +0</li> 
                    <li>Range: +0</li>
                </ul> 
                <strong>Other bonuses</strong>
                <br/> 
                <ul>
                    <li>Melee strength: +0</li>
                    <li>Ranged strength: +0</li>
                    <li>Magic damage: +0%</li>
                    <li>Prayer: +0</li>
                </ul> 
                <strong>Target-specific</strong>
                <br/> 
                <ul>
                    <li>Undead: +0%</li> 
                    <li>Slayer: +0%</li>
                    </ul></div>
        );
     
    }


    editSearchTerm  = (e) => {
        this.setState( {searchTerm: e.target.value} )
    }

    dynamicSearch = () => {
            

        return  this.state.helmets.filter(output => output.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    }



    render(){
        return(

            //up here we need to add the equipment rendering 
            <div className="DynamicContent">
              <div className="SearchContainer">
                <input className="UserInput" type="text" value = {this.state.searchTerm} onChange= {this.editSearchTerm} placeholder = 'Search for runescape helmets'/>
                <br></br>
                <h3  className="SearchResults">rendering search helmets:</h3>
                <OutputContainer Output = {this.dynamicSearch()}/>
             </div>

           <div className="content"> { this.renderContent() } </div>     
           <div className="Stats"> { this.renderStats() } </div>
            
            </div>
        );
    }
 
}

class OutputContainer extends Component{
    render(){
        return(
            <div className="SearchOutput">
                {this.props.Output.map(output => <Output output = {output}/>)}
            </div>
        );
    }
}

class Output extends Component{
    render() {
        return(
            <div>
                {this.props.output}
            </div>
        );
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////













//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
ReactDOM.render(
    <Post />,
    document.querySelector('#root')
  
);
ReactDOM.render(
     <Search />,
      document.querySelector('#root2')
  )


window.onload = function(){
    const helmet = document.querySelector(".helmet_img")
     const ammo = document.querySelector(".ammo_img")
     const neck = document.querySelector(".neck_img")
     const grid = document.querySelector(".equipment_grid")
     const chest = document.querySelector(".chest_img")
     const legs = document.querySelector(".legs_img")
     const gloves = document.querySelector(".gloves_img")
     const boots = document.querySelector(".boots_img")
     const ring = document.querySelector(".ring_img")
     const cape = document.querySelector(".cape_img")
     const weapon = document.querySelector(".weapon_img")
     const sheild = document.querySelector(".sheild_img")
    

    // checking to see if it is equal to any of the required fields 
    grid.addEventListener('click', event => {
        if (event.target !== helmet && event.target !== ammo && event.target !== neck && event.target != chest && event.target != weapon && event.target != sheild
            && event.target != legs && event.target != gloves && event.target != boots && event.target != ring && event.target != cape)
             {
             console.log("reeeee")
            }
         axios.get(event.target.getAttribute("alt"))
         .then(function (response) {
               
                  console.log(response)
            })
         .catch(function (error) {
                console.log(error);
            })
         .then(function() {

             });
    
    });


//going to want to make the top if statement of this code a function at some point and call it into these blocks since it is used more than once
//this returns a string to indentify each equipmentslot we are returning it to the Dynamic Search Function
    grid.addEventListener('click', event => {
        if (event.target !== helmet && event.target !== ammo && event.target !== neck && event.target != chest && event.target != weapon && event.target != sheild
            && event.target != legs && event.target != gloves && event.target != boots && event.target != ring && event.target != cape)
             {
             console.log("reeeee")
            } else {
               
              var equiptabselect = event.target.getAttribute("title")
                // console.log(equiptabselect)
               return equiptabselect
               
            }
        
    
    });






    


    
}