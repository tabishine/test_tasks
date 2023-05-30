
//Практическая задача на написание скрипта JS
function setData(data) {
  // Получаем  элементы по тегу и индексу
  document.getElementsByTagName('label')[0].textContent = data.companyName;
  document.getElementsByTagName('label')[1].textContent = data.address;
  document.getElementsByTagName('label')[2].textContent = data.firstName;
  document.getElementsByTagName('label')[3].textContent = data.lastName;
  document.getElementsByTagName('label')[4].textContent = data.email;
  document.getElementsByTagName('label')[5].textContent = data.role;
  document.getElementsByTagName('label')[6].textContent = data.phone;
}

// Получаем конкретную кнопку по индексу
const submitButton = document.getElementsByClassName('btn uiColorButton')[0]; 
submitButton.click();

//Cоздание объекта data с нужными аргументами
const data = {
  companyName: "SmartLab",
  address: "almaty",
  firstName: "Tabi",
  lastName: "Zhambulova",
  email: "tabishine@gmail.com",
  role: "RPA dev",
  phone: "89696969"
};

// Вызываем функцию setData с объектом data
setData(data); 
console.log("Data set successfully!");




