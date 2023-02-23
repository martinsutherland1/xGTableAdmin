import React, { useState } from "react";

const Data = ({
  updatedTeam,
  arrayDisplay,
  handleChange,
  handleData,
  addData,
  updateProperties,
}) => {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <div className="form-inline">
      <div>
        <div className="input-container">
          <label>Team</label>
          <input
            id='team-name'
            key={updatedTeam.name}
            name="name"
            type="text"
            defaultValue={updatedTeam.name}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label>Current Position</label>
          <input
            id='current-position'
            key={updatedTeam.currentPosition}
            name="currentPosition"
            type="number"
            defaultValue={updatedTeam.currentPosition}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label>Actual Points</label>
          <input
            id='actual-points'
            key={updatedTeam.actualPoints}
            name="actualPoints"
            type="number"
            defaultValue={updatedTeam.actualPoints}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label>Projected Points</label>
          <input
            key={updatedTeam.projectedPoints}
            name="projectedPoints"
            type="text"
            defaultValue={updatedTeam.projectedPoints}
            onChange={handleChange}
            disabled={true}
          />
        </div>
        <div id="btn-container">
          <button id='update-team-btn' onClick={updateProperties}>Update</button>
        </div>
      </div>

      <div id='stats-data'>
        <div className="input-container">
          <label>xGFor - All</label>
          {showDetail && (
            <div id="array-display">{arrayDisplay(updatedTeam.xGFor)}</div>
          )}

          <input id='xG-All-For' type="number" onChange={handleData} />
          <div id="btn-container">
            <button id='xG-All-For-btn' onClick={() => addData("xGFor")}>Add</button>
          </div>
        </div>
        <div className="input-container">
          <label>xGAgainst - All</label>
          {showDetail && (
            <div id="array-display">{arrayDisplay(updatedTeam.xGAgainst)}</div>
          )}

          <input id='xG-All-Against' type="number" onChange={handleData} />
          <div id="btn-container">
            <button id='xG-All-Against-btn' onClick={() => addData("xGAgainst")}>Add</button>
          </div>
        </div>

        <div className="input-container">
          <label>xGFor - Home</label>
          {showDetail && (
            <div id="array-display">{arrayDisplay(updatedTeam.xGForH)}</div>
          )}

          <input id='xG-For-H' type="number" onChange={handleData} />
          <div id="btn-container">
            <button id='xG-For-H-btn' onClick={() => addData("xGForH")}>Add</button>
          </div>
        </div>
        <div className="input-container">
          <label>xGAgainst - Home </label>
          {showDetail && (
            <div id="array-display">{arrayDisplay(updatedTeam.xGAgainstH)}</div>
          )}

          <input id='xG-Against-H' type="number" onChange={handleData} />
          <div id="btn-container">
            <button id='xG-Against-H-btn' onClick={() => addData("xGAgainstH")}>Add</button>
          </div>
        </div>

        <div className="input-container">
          <label>xGFor - Away</label>
          {showDetail && (
            <div id="array-display">{arrayDisplay(updatedTeam.xGForA)}</div>
          )}

          <input id='xG-For-A' type="number" onChange={handleData} />
          <div id="btn-container">
            <button id='xG-For-A-btn' onClick={() => addData("xGForA")}>Add</button>
          </div>
        </div>
        <div className="input-container">
          <label>xGAgainst - Away</label>
          {showDetail && (
            <div id="array-display">{arrayDisplay(updatedTeam.xGAgainstA)}</div>
          )}

          <input id='xG-Against-A' type="number" onChange={handleData} />
          <div id="btn-container">
            <button id='xG-Against-A-btn' onClick={() => addData("xGAgainstA")}>Add</button>
          </div>
        </div>

        <div className="input-container">
          <label>Actual Goals Scored - All</label>
          {showDetail && (
            <div id="array-display">
              {arrayDisplay(updatedTeam.actualGoalsScored)}
            </div>
          )}

          <input type="number" onChange={handleData} />
          <div id="btn-container">
            <button onClick={() => addData("actualGoalsScored")}>Add</button>
          </div>
        </div>
        <div className="input-container">
          <label>Actual Goals Against - All</label>
          {showDetail && (
            <div id="array-display">
              {arrayDisplay(updatedTeam.actualgoalsAgainst)}
            </div>
          )}

          <input type="number" onChange={handleData} />
          <div id="btn-container">
            <button
              
              onClick={() => addData("actualgoalsAgainst")}
            >
              Add
            </button>
          </div>
        </div>
        <div className="input-container">
          <label>Actual Goals Scored - Home</label>
          {showDetail && (
            <div id="array-display">
              {arrayDisplay(updatedTeam.actualGoalsScoredH)}
            </div>
          )}

          <input type="number" onChange={handleData} />
          <div id="btn-container">
            <button onClick={() => addData("actualGoalsScoredH")}>Add</button>
          </div>
        </div>
        <div className="input-container">
          <label>Actual Goals Against - Home</label>
          {showDetail && (
            <div id="array-display">
              {arrayDisplay(updatedTeam.actualGoalsAgainstH)}
            </div>
          )}

          <input type="number" onChange={handleData} />
          <div id="btn-container">
            <button onClick={() => addData("actualGoalsAgainstH")}>Add</button>
          </div>
        </div>

        <div className="input-container">
          <label>Actual Goals Scored - Away</label>
          {showDetail && (
            <div id="array-display">
              {arrayDisplay(updatedTeam.actualGoalsScoredA)}
            </div>
          )}

          <input type="number" onChange={handleData} />
          <div id="btn-container">
            <button onClick={() => addData("actualGoalsScoredA")}>Add</button>
          </div>
        </div>
        <div className="input-container">
          <label>Actual Goals Against - Away</label>
          {showDetail && (
            <div id="array-display">
              {arrayDisplay(updatedTeam.actualGoalsAgainstA)}
            </div>
          )}

          <input type="number" onChange={handleData} />
          <div id="btn-container">
            <button onClick={() => addData("actualGoalsAgainstA")}>Add</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
