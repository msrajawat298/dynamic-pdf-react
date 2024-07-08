import { Text } from '@react-pdf/renderer';
export const defaultData = {
  jp: "J.P. - MEHGAON",
  zp: "Z.P. - BHIND",
  estimatedCost: "282000.00",
  authorityTS: "Assistant Engineer Janpad Panchayat MEHGAON",
  authorityAS: "Sarpanch Gram Panchayat KHEROLEE",
  headOfAccount: "15th Finance",
  provision: [
    'Provide CC 1:3:6 with 40 mm Metal Under Road and Drain Base first layer 10cm thick.',
    'Provide CC 1:2:4 with 20 mm Metal In Road and Drain Second Layer 10cm thick.',
    'Provide CC 1:2:4 with 20 mm Metal In Drain wall 10cm thick.',
  ],
  sanctionedYear: "FY - 2024-25",
  reportTitle: "TECHNICAL REPORT",
  workNameLabel: "Name of Work:",
  workName: "C.C. Road evam Nali Balveer ke makan se Ghatiya ki or Gram Ajita",
  agencyLabel: "Agency:",
  agency: "Gram Panchayat KHEROLEE",
  estimatedCostLabel: "Estimated Cost:",
  estimatedCostValue: "2.82 Lakh",
  technicalReport: [
    "Provide CC 1:3:6 with 40 mm Metal Under Road and Drain Base first layer 10cm thick.",
    "Provide CC 1:2:4 with 20 mm Metal In Road and Drain Second Layer 10cm thick.",
    "Provide CC 1:2:4 with 20 mm Metal In Drain wall 10cm thick."
  ],
  ratesLabel: "Rates:",
  rates: "The Rates are adopted as per S.O.R. of (Panchayat and Rural Development Department) Rural Engineering Services, State S.O.R. with effect from 11.04.2022",
  certifications: [
    "I have visited the work site",
    "Proposed work is totally new",
    "Proposed work has not been sanctioned in any fund previously",
    "The work proposed in govt. land"
  ],
  subEngineer: "SUB ENGINEER",
  assistantEngineer: "ASSISTANT ENGINEER",
  tsNo: '',
  tsDate: '',
  asNo: '',
  asDate: '',
  gramPanchayat: '',
  expenditure: {
    mgnrega: { labour: 0, material: 0 },
    finance: { labour: 0, material: 0 },
  },
};

export const sections = [
  { serial: '1', heading: 'Name of Work', value: defaultData.workName },
  { serial: '2', heading: 'Agency', value: defaultData.agency },
  { serial: '3', heading: 'Estimated Cost', value: defaultData.estimatedCost },
  { serial: '4', heading: 'Authority For T/S', value: defaultData.authorityTS },
  { serial: '5', heading: 'Authority For A/S', value: defaultData.authorityAS },
  { serial: '6', heading: 'Head of Account', value: defaultData.headOfAccount },
  { serial: '7', heading: 'Sanctioned Year', value: defaultData.sanctionedYear },
  { serial: '8', heading: 'Provision', value: defaultData.provision.map((item, index) => (<Text key={index}>{item}</Text>)) },
  { serial: '9', heading: 'Rates', value: defaultData.rates },
];

export const HEAD_OF_ACCOUNT = [
  "14th Finance + 15th Finance",
  "14th Finance",
  "15th Finance + MGNREGA",
  "15th Finance",
  "5th Finance",
  "5th Finance + 15th Finance",
  "5th Finance + 15th Finance + MGNREGA",
  "5th Finance + MGNREGA",
  "5th Finance/14th Finance/15th Finance + MGNREGA",
];