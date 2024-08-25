function chocoboShowcase(showcaseStats) {
    return (
        <div className="bigger-showcase">
            <div className="number-showcase">
                <span>Best Pairing Found</span>
                <span>{"Score: " + showcaseStats["score"]}</span>
            </div>
            <div className={"chocobo-showcase"}>
                {/* eslint-disable-next-line */}
                <div
                    className={
                        "father-showcase showcase bird" +
                        " bird" +
                        showcaseStats["fatherIndex"]
                    }
                >
                    <h3>The Father:</h3>
                    <div className="grandparents-container">
                        <div className="father-father chocobo-parent-card">
                            <span>Father's</span>
                            <span>
                                {"Max Speed: " +
                                    showcaseStats["fatherFatherMaxSpeed"]}
                            </span>
                            <span>
                                {"Acceleration: " +
                                    showcaseStats["fatherFatherAcceleration"]}
                            </span>
                            <span>
                                {"Endurance: " +
                                    showcaseStats["fatherFatherEndurance"]}
                            </span>
                            <span>
                                {"Stamina: " +
                                    showcaseStats["fatherFatherStamina"]}
                            </span>
                            <span>
                                {"Cunning: " +
                                    showcaseStats["fatherFatherCunning"]}
                            </span>
                        </div>
                        <div className="father-mother chocobo-parent-card">
                            <span>Mother's</span>
                            <span>
                                {"Max Speed: " +
                                    showcaseStats["fatherMotherMaxSpeed"]}
                            </span>
                            <span>
                                {"Acceleration: " +
                                    showcaseStats["fatherMotherAcceleration"]}
                            </span>
                            <span>
                                {"Endurance: " +
                                    showcaseStats["fatherMotherEndurance"]}
                            </span>
                            <span>
                                {"Stamina: " +
                                    showcaseStats["fatherMotherStamina"]}
                            </span>
                            <span>
                                {"Cunning: " +
                                    showcaseStats["fatherMotherCunning"]}
                            </span>
                        </div>
                    </div>
                </div>
                {/* eslint-disable-next-line */}
                <div
                    className={
                        "mother-showcase showcase bird" +
                        " bird" +
                        showcaseStats["motherIndex"]
                    }
                >
                    <h3>The Mother:</h3>

                    <div className="grandparents-container">
                        <div className="mother-father chocobo-parent-card">
                            <span>Father's</span>
                            <span>
                                {"Max Speed: " +
                                    showcaseStats["motherFatherMaxSpeed"]}
                            </span>
                            <span>
                                {"Acceleration: " +
                                    showcaseStats["motherFatherAcceleration"]}
                            </span>
                            <span>
                                {"Endurance: " +
                                    showcaseStats["motherFatherEndurance"]}
                            </span>
                            <span>
                                {"Stamina: " +
                                    showcaseStats["motherFatherStamina"]}
                            </span>
                            <span>
                                {"Cunning: " +
                                    showcaseStats["motherFatherCunning"]}
                            </span>
                        </div>
                        <div className="mother-mother chocobo-parent-card">
                            <span>Mother's</span>
                            <span>
                                {"Max Speed: " +
                                    showcaseStats["motherMotherMaxSpeed"]}
                            </span>
                            <span>
                                {"Acceleration: " +
                                    showcaseStats["motherMotherAcceleration"]}
                            </span>
                            <span>
                                {"Endurance: " +
                                    showcaseStats["motherMotherEndurance"]}
                            </span>
                            <span>
                                {"Stamina: " +
                                    showcaseStats["motherMotherStamina"]}
                            </span>
                            <span>
                                {"Cunning: " +
                                    showcaseStats["motherMotherCunning"]}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default chocoboShowcase;
