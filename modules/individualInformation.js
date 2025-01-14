export default class IndividualInformation {
  constructor(name, surname, nickName, phoneNumber, email, site, dailyRate) {
    this.name = name;
    this.surname = surname;
    this.nickName = nickName;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.site = site;
    this.dailyRate = dailyRate;
  }
};
const ford = new IndividualInformation(
  "panudet",
  "jitti",
  "Ford",
  "1234567890",
  "glock@odds.team",
  "Saksiam",
  "999",
);

const individualInformationMap = new Map();

individualInformationMap.set("glock@odds.team", ford);

console.log(individualInformationMap.get("glock@odds.team"));

export {individualInformationMap};
