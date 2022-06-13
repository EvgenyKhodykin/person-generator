window.onload = function(){
    const initPerson = personGenerator.getPerson()
    document.querySelector('#firstNameOutput').innerText = initPerson.firstName
    document.querySelector('#surnameOutput').innerText = initPerson.surname
    document.querySelector('#genderOutput').innerText = initPerson.gender
    document.querySelector('#birthOutput').innerText = initPerson.dateOfBirth
    document.querySelector('#profName').innerText = initPerson.profName
}
// Напишем код для кнопок генерации и очистки
document.querySelector('#buttonGen').addEventListener('click', () => {
    location.reload ()
    })
