import React from 'react';

const getSeason = (lat, month) => {
    if(month > 2 && month < 9) {
       return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

const seasonConfig = {
    summer: {
        text: 'lets hit the beach',
        iconName: 'sun'
    },
    winter: {
        text: 'Burr its cold',
        iconName: 'snowflake'
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    //const text = season === 'winter' ? 'chilly': 'lets hit the beach';
    //const iconName = season === 'winter' ? 'snowflake' : 'sun';
    const {text, iconName} = seasonConfig[season];
    return(<div>
        <i className={`${iconName} icon`}></i>
        <h1>{text}</h1>
        <i className={`${iconName} icon`}></i>
    </div>);
};

export default SeasonDisplay;