var customerDetils = {
  customerCode: 8989988,
  customerName: "Debankar",
  address: "sahid nagar,ameerpet",
  PINcode: 500016,
};

console.log(
  customerDetils.customerName +
    "  " +
    customerDetils.PINcode +
    "  " +
    customerDetils.customerCode
);
const productsInfo = [
  {
    ProductCode: 4001,
    ProductName: "Washing Machine",
    UnitPrice: 35000,
    Manufacturer: "Bosch Inc.",
  },
  {
    ProductCode: 4002,
    ProductName: "Laptop",
    UnitPrice: 75000,
    Manufacturer: "DELL Inc.",
  },
  {
    ProductCode: 4003,
    ProductName: "Air Conditioner",
    UnitPrice: 45000,
    Manufacturer: "LG Inc.",
  },
  {
    ProductCode: 4004,
    ProductName: "Smart Phone",
    UnitPrice: 110000,
    Manufacturer: "Apple Inc.",
  },
];
const [p1, p2] = productsInfo;
console.log(JSON.stringify(p1));
console.log(JSON.stringify(p2));
