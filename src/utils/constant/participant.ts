export interface Participant {
  rank: number;
  name: string;
  class: string;
  module: string;
  point: string;
}

export const PARTICIPANTS: Participant[] = [
  {
    rank: 1,
    name: "Cy Ganderton",
    class: "Quality Control Specialist",
    module: "Blue",
    point: "Blue",
  },
  {
    rank: 2,
    name: "Hart Hagerty",
    class: "Desktop Support Technician",
    module: "Purple",
    point: "Purple",
  },
  {
    rank: 3,
    name: "Brice Swyre",
    class: "Tax Accountant",
    module: "Red",
    point: "Red",
  },
];
