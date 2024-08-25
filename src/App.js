import "./App.css";
import { useState } from "react";
import chocoboInput from "./chocoboForm";
import chocoboShowcase from "./chocoboShowcase";
import React, { useEffect } from "react";

function App() {
    function Example() {
        useEffect(() => {
            document.title = "Chocobo Breeding Calculator";
        }, []);
    }
    Example();
    const [showcaseStats, setShowcaseStats] = useState({
        fatherFatherMaxSpeed: "",
        fatherFatherAcceleration: "",
        fatherFatherEndurance: "",
        fatherFatherStamina: "",
        fatherFatherCunning: "",
        fatherMotherMaxSpeed: "",
        fatherMotherAcceleration: "",
        fatherMotherEndurance: "",
        fatherMotherStamina: "",
        fatherMotherCunning: "",
        motherFatherMaxSpeed: "",
        motherFatherAcceleration: "",
        motherFatherEndurance: "",
        motherFatherStamina: "",
        motherFatherCunning: "",
        motherMotherMaxSpeed: "",
        motherMotherAcceleration: "",
        motherMotherEndurance: "",
        motherMotherStamina: "",
        motherMotherCunning: "",
        motherIndex: -1,
        fatherIndex: -1,
        score: "N/A",
    });
    function getShowcase(obj1, obj2, index1, index2, score) {
        //obj1 is the father
        let copyOfShowcaseStats = deepCopyOfObject(showcaseStats);
        const capitalizeString = (str) => {
            return str.charAt(0).toUpperCase() + str.slice(1);
        };
        Object.keys(obj1).forEach((elem) => {
            copyOfShowcaseStats["father" + capitalizeString(elem)] = obj1[elem];
        });
        Object.keys(obj2).forEach((elem) => {
            copyOfShowcaseStats["mother" + capitalizeString(elem)] = obj2[elem];
        });
        copyOfShowcaseStats["motherIndex"] = index2 + 1;
        copyOfShowcaseStats["fatherIndex"] = index1 + 1;
        copyOfShowcaseStats["score"] = score;
        setShowcaseStats(copyOfShowcaseStats);
    }
    function deepCopyOfObject(object) {
        return JSON.parse(JSON.stringify(object));
    }
    function calculateBird(birdObject) {
        const returnObject = {
            maxSpeed: 0,
            acceleration: 0,
            endurance: 0,
            stamina: 0,
            cunning: 0,
        };
        const listofNames = [
            ["fatherMaxSpeed", "motherMaxSpeed", "maxSpeed"],
            ["fatherAcceleration", "motherAcceleration", "acceleration"],
            ["fatherEndurance", "motherEndurance", "endurance"],
            ["fatherStamina", "motherStamina", "stamina"],
            ["fatherCunning", "motherCunning", "cunning"],
        ];
        listofNames.forEach((elem) => {
            returnObject[elem[2]] =
                ((parseInt(birdObject[elem[0]]) === 4
                    ? 6
                    : parseInt(birdObject[elem[0]])) +
                    (parseInt(birdObject[elem[1]]) === 4
                        ? 6
                        : parseInt(birdObject[elem[1]]))) /
                12;
        });
        return returnObject;
    }
    const addObjects = (obj1, obj2) => {
        let returnObject = {};
        Object.keys(obj1).forEach((key) => {
            returnObject[key] = obj1[key] + obj2[key];
        });
        return returnObject;
    };
    const defaultChocoboObject = {
        gender: "female",
        fatherMaxSpeed: "1",
        fatherAcceleration: "1",
        fatherEndurance: "1",
        fatherStamina: "1",
        fatherCunning: "1",
        motherMaxSpeed: "1",
        motherAcceleration: "1",
        motherEndurance: "1",
        motherStamina: "1",
        motherCunning: "1",
    };
    function compareBirds(a, b) {
        let aValue = 0;
        let bValue = 0;
        Object.keys(a[0]).forEach((key) => {
            aValue += a[0][key];
        });
        Object.keys(b[0]).forEach((key) => {
            bValue += b[0][key];
        });
        if (aValue > bValue) {
            return -1;
        } else if (aValue < bValue) {
            return 1;
        } else {
            return 0;
        }
    }
    function calculateScore(a) {
        let aValue = 0;
        Object.keys(a).forEach((key) => {
            aValue += a[key];
        });
        return aValue.toFixed(3);
    }
    const runSim = () => {
        let allBirds = chocoboAllStats;
        const femaleBirds = [];
        const maleBirds = [];
        const resultList = [];
        allBirds.forEach((elem, index) => {
            if (elem.gender === "female") {
                femaleBirds.push([elem, index]);
            } else {
                maleBirds.push([elem, index]);
            }
        });
        for (let i = 0; i < femaleBirds.length; i++) {
            for (let j = 0; j < maleBirds.length; j++) {
                console.log(maleBirds[j]);
                resultList.push([
                    addObjects(
                        calculateBird(femaleBirds[i][0]),
                        calculateBird(maleBirds[j][0])
                    ),
                    maleBirds[j][0],
                    femaleBirds[i][0],
                    maleBirds[j][1],
                    femaleBirds[i][1],
                ]);
            }
        }
        resultList.sort(compareBirds);
        let bestBirdCouple = resultList[0];
        getShowcase(
            bestBirdCouple[1],
            bestBirdCouple[2],
            bestBirdCouple[3],
            bestBirdCouple[4],
            calculateScore(bestBirdCouple[0])
        );
    };
    const [chocoboAllStats, setChocoboAllStats] = useState(() => {
        let returnArray = [];
        for (let i = 0; i < 10; i++) {
            returnArray.push(deepCopyOfObject(defaultChocoboObject));
        }
        return returnArray;
    });
    return (
        <div className="App">
            <h1 className="title">Chocobo Breeding Calculator</h1>
            <div className="chocobos-container">
                {chocoboAllStats.map((elem, index) => {
                    return chocoboInput(
                        chocoboAllStats,
                        setChocoboAllStats,
                        index
                    );
                })}
            </div>
            <button className="sim-button" onClick={runSim}>
                Figure out best pair
            </button>
            {chocoboShowcase(showcaseStats)}
        </div>
    );
}

export default App;
