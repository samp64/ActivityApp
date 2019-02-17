export const address = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      ...addresses
    }),
  };
};

const addresses = 
[
  {
    "buildingUnit":"500",
    "buildingName":"Watermans House",
    "streetNumber":"21",
    "streetName":"New Village Agenue",
    "town":"London",
    "postcode":"E140GL"
  },
  {
    "buildingUnit":"4th Floor",
    "buildingName":null,
    "streetNumber":"9-10",
    "streetName":"Charterhouse Buildings",
    "town":"London",
    "postcode":"EC1M7AN"
  },
  {
    "buildingUnit":"Unit G.06",
    "buildingName":"Clerkenwell Workshops",
    "streetNumber":"27-31",
    "streetName":"Clerkenwell Close",
    "town":"London",
    "postcode":"EC1R0AT"
  }
];