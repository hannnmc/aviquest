import './index.css'
import Avitar from "./Avitar";
import AvitarStats from "./AvitarStats";
import AviQuestSprite from "./AviQuestSprite";
import HPBar from './HealthBar';
import Equipments from './Equipments';
import * as demouser from './demouser'

const StatusBar = () => {
    // const health = {
    //     maxhp: 100,
    //     currenthp: 65
    // }
    // const equipments = []

    
    // const user = {
    //     username: 'Aang', 
    //     password: 'password1', 
    //     health: health, 
    //     atk: 50, 
    //     coins: 300
    // }
    const user = demouser.user
    const monster = demouser.monster

    return ( 
        <div className="statusBar">
            <div className="statusBarLeft">
                <Avitar className="statusBarAvitar"/>
                <AvitarStats className="statusBarAvitarStats" user={user} />
            </div>

            <div className="statusBarMid">
                <Equipments equipments={user.equipment} />
            </div>

            <div className="statusBarRight">
                <AviQuestSprite className="aviQuestSprite" />
                
                <HPBar health={monster.health}/>
            </div> 
        </div>
     );
}
 
export default StatusBar;