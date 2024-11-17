import React from "react";
import { PARTICIPANTS } from "@utils/constant/participant";

const ScoreTable: React.FC = () => {
  return (
    <div className="text-start">
      <h3 className="text-xl font-bold py-4">Nilai Peserta</h3>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Class</th>
              <th>Module</th>
              <th>Point</th>
            </tr>
          </thead>
          <tbody>
            {PARTICIPANTS.map((participant) => (
              <tr key={participant.rank}>
                <th>{participant.rank}</th>
                <td>{participant.name}</td>
                <td>{participant.class}</td>
                <td>{participant.module}</td>
                <td>{participant.point}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScoreTable;
