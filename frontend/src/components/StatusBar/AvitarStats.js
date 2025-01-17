import HPBar from "./HealthBar";

const AvitarStats = ({user}) => {
    
    const username = user.username
    const health = {
        currentHealth: user.currentHealth,
        maxHealth: user.maxHealth
    }

    return ( 
        <div className="AvitarStats">
            <div className="AvitarUsername">{username}</div>
            <br />
            <HPBar health={health} />
            <br />
            {/* <div className="StatusBarAttack main">Attack: {user.attack}</div>  */}
            
        </div>
     );
}
 
export default AvitarStats;