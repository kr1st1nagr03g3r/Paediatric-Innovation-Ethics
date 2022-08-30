import React, { useState } from "react";
import Button from '@mui/material/Button';

const ButtonGroup = () => {
    const [data, setData] = useState(["Roadmap", "Roadblocks", "Barriers", "Stages"]);

    const [showAll, setShowAll] = useState(false);
    const [currentIdx, setCurrentIdx] = useState(0);
    const [showCurrent, setShowCurrent] = useState(false);

    const toggleAll = () => {
        setShowAll(val => !val);
        setShowCurrent(false);
    };

    const toggleCurrent = () => {
        if (!showCurrent) {
            setShowCurrent(true);
            setShowAll(false);
            return;
        }
    };

    const setCurrent = index => {
        setCurrentIdx(index);
        toggleCurrent();
    };

    return (
        <div>
            <div className="researchButtonPanel" style={{ display: "flex" }}>

                <Button className="researchButtons" onClick={() => setCurrent(0)}>Roadmap</Button>
                <Button className="researchButtons" onClick={() => setCurrent(1)}>Roadblocks</Button>
                <Button className="researchButtons" onClick={() => setCurrent(2)}>Barriers</Button>
                <Button className="researchButtons" onClick={() => setCurrent(3)}>Stages / Models (Toggle) </Button>
                <Button className="researchButtons" onClick={toggleAll}>{showAll ? "Hide All" : "Show All"}</Button>
            </div>
            <div>
                {showAll && data.map((el, i) => <p key={`content-${i}`}>{el}</p>)}
            </div>

            {showCurrent ? <div>{data[currentIdx]}</div> : null}
        </div>
    );
};

export default ButtonGroup

