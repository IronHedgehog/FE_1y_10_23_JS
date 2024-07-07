const employees = ["Artem", "Petro", "Anna", "Petro"]; // масив це індексований набір значень
const string = ""; // індексований набір буков

console.log(employees[0]);
console.log(employees[employees.length - 1]);

// employees.length = 100;
// employees.length = 1;
// console.log(employees);

// console.log(arr);
console.log(string);

const clients = [
  {
    createdAt: "2024-07-07T06:40:45.283Z",
    name: "Sarah Kutch",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/897.jpg",
    id: "1",
  },
  {
    createdAt: "2024-07-06T10:52:21.782Z",
    name: "Jeannette Kuhic",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/533.jpg",
    id: "2",
  },
  {
    createdAt: "2024-07-06T21:21:07.720Z",
    name: "Miss Paula Mraz",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/464.jpg",
    id: "3",
  },
  {
    createdAt: "2024-07-07T03:12:02.020Z",
    name: "Josh Beer",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/893.jpg",
    id: "4",
  },
  {
    createdAt: "2024-07-06T15:00:13.981Z",
    name: "Dr. Andre Conn",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/626.jpg",
    id: "5",
  },
  {
    createdAt: "2024-07-07T02:52:29.421Z",
    name: "Kathryn Marvin",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/575.jpg",
    id: "6",
  },
  {
    createdAt: "2024-07-06T20:46:14.846Z",
    name: "Linda Lowe",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/188.jpg",
    id: "7",
  },
  {
    createdAt: "2024-07-06T20:33:42.888Z",
    name: "Jill Bins",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/121.jpg",
    id: "8",
  },
  {
    createdAt: "2024-07-06T13:20:15.765Z",
    name: "Hazel Kerluke",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/750.jpg",
    id: "9",
  },
  {
    createdAt: "2024-07-06T23:20:42.191Z",
    name: "Willis Volkman",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/830.jpg",
    id: "10",
  },
  {
    createdAt: "2024-07-07T02:38:00.971Z",
    name: "Jimmy Turner",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/975.jpg",
    id: "11",
  },
  {
    createdAt: "2024-07-07T04:09:34.491Z",
    name: "Mack Langworth",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/587.jpg",
    id: "12",
  },
  {
    createdAt: "2024-07-07T07:31:32.432Z",
    name: "Miss Perry Adams",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1233.jpg",
    id: "13",
  },
  {
    createdAt: "2024-07-06T23:20:59.128Z",
    name: "Mrs. Charlie Stanton",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/635.jpg",
    id: "14",
  },
  {
    createdAt: "2024-07-07T00:56:48.878Z",
    name: "Ms. Gladys Ryan",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/309.jpg",
    id: "15",
  },
  {
    createdAt: "2024-07-06T13:33:53.730Z",
    name: "Jennie Nolan",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/924.jpg",
    id: "16",
  },
  {
    createdAt: "2024-07-06T19:29:57.547Z",
    name: "Olive Stanton",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/290.jpg",
    id: "17",
  },
  {
    createdAt: "2024-07-06T17:39:04.302Z",
    name: "Lucille O'Conner",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/949.jpg",
    id: "18",
  },
  {
    createdAt: "2024-07-06T09:35:50.429Z",
    name: "Dr. Darryl Balistreri",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/223.jpg",
    id: "19",
  },
  {
    createdAt: "2024-07-06T08:57:04.955Z",
    name: "Penny Muller",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/775.jpg",
    id: "20",
  },
  {
    createdAt: "2024-07-06T09:17:05.632Z",
    name: "Elsa Schaden",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/37.jpg",
    id: "21",
  },
  {
    createdAt: "2024-07-06T21:15:27.563Z",
    name: "Alton Fisher",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/506.jpg",
    id: "22",
  },
  {
    createdAt: "2024-07-06T19:25:10.139Z",
    name: "Laurie Armstrong",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1217.jpg",
    id: "23",
  },
  {
    createdAt: "2024-07-06T10:15:12.778Z",
    name: "Claire O'Connell",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1064.jpg",
    id: "24",
  },
  {
    createdAt: "2024-07-06T14:44:43.481Z",
    name: "Naomi Kihn",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/880.jpg",
    id: "25",
  },
  {
    createdAt: "2024-07-06T14:02:47.077Z",
    name: "Stanley Torp",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/500.jpg",
    id: "26",
  },
  {
    createdAt: "2024-07-07T06:11:13.616Z",
    name: "Dr. Willis Lesch",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/347.jpg",
    id: "27",
  },
  {
    createdAt: "2024-07-06T15:26:08.430Z",
    name: "Ms. Cornelius Blanda",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1246.jpg",
    id: "28",
  },
  {
    createdAt: "2024-07-07T02:52:38.725Z",
    name: "Gustavo Stokes",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/966.jpg",
    id: "29",
  },
  {
    createdAt: "2024-07-06T14:09:30.006Z",
    name: "Christy McDermott",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/461.jpg",
    id: "30",
  },
  {
    createdAt: "2024-07-06T20:11:04.374Z",
    name: "Rosemary Feil",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1175.jpg",
    id: "31",
  },
  {
    createdAt: "2024-07-07T04:41:56.760Z",
    name: "Mrs. Pat Cassin V",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1143.jpg",
    id: "32",
  },
  {
    createdAt: "2024-07-06T23:18:00.009Z",
    name: "Earnest Schultz",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1249.jpg",
    id: "33",
  },
  {
    createdAt: "2024-07-07T00:00:32.637Z",
    name: "Ms. Merle Howell",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/863.jpg",
    id: "34",
  },
  {
    createdAt: "2024-07-07T03:48:08.534Z",
    name: "Ms. Lauren Rosenbaum",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/35.jpg",
    id: "35",
  },
  {
    createdAt: "2024-07-06T22:30:03.285Z",
    name: "Anthony Feil",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/390.jpg",
    id: "36",
  },
  {
    createdAt: "2024-07-06T22:21:44.830Z",
    name: "Kevin Mills",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/12.jpg",
    id: "37",
  },
  {
    createdAt: "2024-07-06T13:15:39.991Z",
    name: "Candice Moen",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1196.jpg",
    id: "38",
  },
  {
    createdAt: "2024-07-06T20:34:29.632Z",
    name: "Kathy Gutkowski",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/494.jpg",
    id: "39",
  },
  {
    createdAt: "2024-07-06T22:15:35.186Z",
    name: "Teri Bartoletti",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/728.jpg",
    id: "40",
  },
  {
    createdAt: "2024-07-07T07:36:15.906Z",
    name: "Laverne Cole",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/578.jpg",
    id: "41",
  },
  {
    createdAt: "2024-07-06T10:58:06.125Z",
    name: "Ms. Jermaine Gleason",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/583.jpg",
    id: "42",
  },
  {
    createdAt: "2024-07-06T16:45:08.076Z",
    name: "Ruby Tremblay",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/147.jpg",
    id: "43",
  },
  {
    createdAt: "2024-07-06T12:15:55.892Z",
    name: "Dr. Maurice Gutmann",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/225.jpg",
    id: "44",
  },
  {
    createdAt: "2024-07-07T02:59:28.398Z",
    name: "Tabitha Satterfield",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/25.jpg",
    id: "45",
  },
  {
    createdAt: "2024-07-06T15:25:41.071Z",
    name: "Mr. Harriet Maggio",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/712.jpg",
    id: "46",
  },
  {
    createdAt: "2024-07-06T11:16:12.837Z",
    name: "Lindsey Schowalter",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/767.jpg",
    id: "47",
  },
  {
    createdAt: "2024-07-06T15:42:50.427Z",
    name: "Bert Rohan",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1047.jpg",
    id: "48",
  },
  {
    createdAt: "2024-07-06T20:47:05.615Z",
    name: "Faith Abshire Sr.",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1077.jpg",
    id: "49",
  },
  {
    createdAt: "2024-07-07T00:07:02.198Z",
    name: "Mr. Noah Gusikowski",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/258.jpg",
    id: "50",
  },
  {
    createdAt: "2024-07-06T12:42:24.057Z",
    name: "Mindy Walker",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/625.jpg",
    id: "51",
  },
  {
    createdAt: "2024-07-07T04:01:05.421Z",
    name: "Joyce Roob",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/990.jpg",
    id: "52",
  },
  {
    createdAt: "2024-07-07T05:23:45.321Z",
    name: "Doug Hermann",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/757.jpg",
    id: "53",
  },
  {
    createdAt: "2024-07-06T20:13:41.233Z",
    name: "Mrs. Kent Reilly",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/93.jpg",
    id: "54",
  },
  {
    createdAt: "2024-07-06T15:44:05.587Z",
    name: "Luke DuBuque",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/717.jpg",
    id: "55",
  },
  {
    createdAt: "2024-07-07T04:56:04.617Z",
    name: "Erica Hammes",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/530.jpg",
    id: "56",
  },
  {
    createdAt: "2024-07-06T14:27:34.314Z",
    name: "Joanne Mraz",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1072.jpg",
    id: "57",
  },
  {
    createdAt: "2024-07-07T02:26:47.277Z",
    name: "Marshall Koch",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/518.jpg",
    id: "58",
  },
  {
    createdAt: "2024-07-06T09:39:54.561Z",
    name: "Tabitha Prosacco",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/876.jpg",
    id: "59",
  },
  {
    createdAt: "2024-07-07T00:16:39.970Z",
    name: "Claudia Walsh",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/932.jpg",
    id: "60",
  },
  {
    createdAt: "2024-07-06T18:21:04.772Z",
    name: "Pete Bergstrom",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/404.jpg",
    id: "61",
  },
  {
    createdAt: "2024-07-06T11:08:22.541Z",
    name: "Domingo Vandervort",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/658.jpg",
    id: "62",
  },
  {
    createdAt: "2024-07-07T03:37:25.861Z",
    name: "Ms. Leon Brown",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1092.jpg",
    id: "63",
  },
  {
    createdAt: "2024-07-06T12:25:21.160Z",
    name: "Blanche Bashirian PhD",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1118.jpg",
    id: "64",
  },
  {
    createdAt: "2024-07-06T21:13:15.068Z",
    name: "Christine Schiller",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/180.jpg",
    id: "65",
  },
  {
    createdAt: "2024-07-07T03:54:12.534Z",
    name: "Jorge Mosciski",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/244.jpg",
    id: "66",
  },
  {
    createdAt: "2024-07-06T15:32:52.394Z",
    name: "Lydia Raynor",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/576.jpg",
    id: "67",
  },
];

for (const client of clients) {
  if (client.name === "Penny Muller") {
    console.log(client.name + " You win! ");
    console.log(`${client.name} you win! `);
    break;
  }
}

for (const employee of employees) {
  console.log(employee);
}
