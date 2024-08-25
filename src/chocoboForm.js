function chocoboInput(chocoboAllStats, setChocoboStats, index) {
    let chocoboStats = chocoboAllStats[index];
    const fatherUpdater = (evt) => {
        let theClass = evt.target.classList[0];
        let copyOfChocoboStats = JSON.parse(JSON.stringify(chocoboAllStats));
        copyOfChocoboStats[index]["father" + theClass] = evt.target.value;
        setChocoboStats(copyOfChocoboStats);
    };
    const motherUpdater = (evt) => {
        let theClass = evt.target.classList[0];
        let copyOfChocoboStats = JSON.parse(JSON.stringify(chocoboAllStats));
        copyOfChocoboStats[index]["mother" + theClass] = evt.target.value;
        setChocoboStats(copyOfChocoboStats);
    };
    const genderUpdater = (evt) => {
        let copyOfChocoboStats = JSON.parse(JSON.stringify(chocoboAllStats));
        copyOfChocoboStats[index]["gender"] = evt.target.value;
        setChocoboStats(copyOfChocoboStats);
    };

    return (
        // eslint-disable-next-line
        <div
            className={"chocobo-form bird" + " bird" + (index + 1)}
            key={index}
            id={index}
        >
            <div className="gender-input">
                <label className="gender">Gender: </label>
                <select className="gender-select" onChange={genderUpdater}>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                </select>
            </div>
            <div className="form-container">
                <div className="chocobo-father-stats chocobo-stat-inputs">
                    <h2>Father's Stats</h2>
                    <div className="input-pair">
                        <label className="MaxSpeed">MaxSpeed: </label>
                        <input
                            type="text"
                            value={chocoboStats["fatherMaxSpeed"]}
                            className="MaxSpeed"
                            onChange={fatherUpdater}
                        ></input>
                    </div>
                    <div className="input-pair">
                        <label className="Acceleration">Acceleration: </label>
                        <input
                            type="text"
                            value={chocoboStats["fatherAcceleration"]}
                            className="Acceleration"
                            onChange={fatherUpdater}
                        ></input>
                    </div>
                    <div className="input-pair">
                        <label className="Endurance">Endurance: </label>
                        <input
                            type="text"
                            value={chocoboStats["fatherEndurance"]}
                            className="Endurance"
                            onChange={fatherUpdater}
                        ></input>
                    </div>
                    <div className="input-pair">
                        <label className="Stamina">Stamina: </label>
                        <input
                            type="text"
                            value={chocoboStats["fatherStamina"]}
                            className="Stamina"
                            onChange={fatherUpdater}
                        ></input>
                    </div>
                    <div className="input-pair">
                        <label className="Cunning">Cunning: </label>
                        <input
                            type="text"
                            value={chocoboStats["fatherCunning"]}
                            className="Cunning"
                            onChange={fatherUpdater}
                        ></input>
                    </div>
                </div>
                <div className="chocobo-mother-stats chocobo-stat-inputs">
                    <h2>Mother's Stats</h2>
                    <div className="input-pair">
                        <label className="MaxSpeed">MaxSpeed: </label>
                        <input
                            type="text"
                            value={chocoboStats["motherMaxSpeed"]}
                            className="MaxSpeed"
                            onChange={motherUpdater}
                        ></input>
                    </div>
                    <div className="input-pair">
                        <label className="Acceleration">Acceleration: </label>
                        <input
                            type="text"
                            value={chocoboStats["motherAcceleration"]}
                            className="Acceleration"
                            onChange={motherUpdater}
                        ></input>
                    </div>
                    <div className="input-pair">
                        <label className="Endurance">Endurance: </label>
                        <input
                            type="text"
                            value={chocoboStats["motherEndurance"]}
                            className="Endurance"
                            onChange={motherUpdater}
                        ></input>
                    </div>
                    <div className="input-pair">
                        <label className="Stamina">Stamina: </label>
                        <input
                            type="text"
                            value={chocoboStats["motherStamina"]}
                            className="Stamina"
                            onChange={motherUpdater}
                        ></input>
                    </div>
                    <div className="input-pair">
                        <label className="Cunning">Cunning: </label>
                        <input
                            type="text"
                            value={chocoboStats["motherCunning"]}
                            className="Cunning"
                            onChange={motherUpdater}
                        ></input>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default chocoboInput;
