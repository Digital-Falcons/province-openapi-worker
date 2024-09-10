const fs = require("fs");
const path = require("path");

const data = JSON.parse(fs.readFileSync(path.resolve("../db.json"), "utf8"));

const newProvince = data.province.map((province) => ({
  ...province,
  idProvince: Number(province.idProvince),
}));

const newDistricts = data.district.map((district) => ({
  ...district,
  idProvince: Number(district.idProvince),
  idDistrict: Number(district.idDistrict),
}));

const newCommunes = data.commune.map((commune) => ({
  ...commune,
  idDistrict: Number(commune.idDistrict),
  idCommune: Number(commune.idCommune),
}));

fs.writeFileSync(
  path.resolve("../src/data/provinces.json"),
  JSON.stringify(newProvince)
);

fs.writeFileSync(
  path.resolve("../src/data/districts.json"),
  JSON.stringify(newDistricts)
);

fs.writeFileSync(
  path.resolve("../src/data/communes.json"),
  JSON.stringify(newCommunes)
);
