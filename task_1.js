
function setData(data) {

  document.getElementsByTagName('labelCompanyName') = data.companyName;
  document.getElementsByTagName('labelAddress') = data.address;
  document.getElementsByTagName('labelFirstName') = data.firstName;
  document.getElementsByTagName('labelLastName') = data.lastName;
  document.getElementsByTagName('labelEmail') = data.email;
  document.getElementsByTagName('labelRole')= data.role;
  document.getElementsByTagName('labelPhone') = data.phone;

}
const submitButton = document.getElementsByClassName('btn uiColorButton');
submitButton.click();

const data = {
  companyName: "Smart",
  address: "almaty",
  firstName: "Tabi",
  lastName: "Zhambulova",
  email: "tabishine@gmail.com",
  role: "RPA dev",
  phone: "89696969"
};

const result = setData(data);
console.log(result);



