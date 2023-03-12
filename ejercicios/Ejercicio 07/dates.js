//today's date
const todayDate = new Date();
console.log(todayDate);

//birthdate
const myBirthdate = new Date(1994, 1, 15, 08);
console.log(myBirthdate);

//compare today & bithdate
const compareDates = todayDate > myBirthdate;
console.log(compareDates);

//birthday
const birthDay = myBirthdate.getDate();
console.log(birthDay);

//bithmonth
const birthMonth = myBirthdate.getMonth();
console.log(birthMonth + 1);

//year of birth
const yearOfBirth = myBirthdate.getFullYear();
console.log(yearOfBirth);
