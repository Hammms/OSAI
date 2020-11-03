import { React } from "react";

const RenderStats = () => {
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

export default RenderStats;