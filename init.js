window.onload = function(){
    const initPerson = personGenerator.getPerson()
    document.querySelector('#firstNameOutput').innerText = initPerson.firstName
    document.querySelector('#surnameOutput').innerText = initPerson.surname
    document.querySelector('#thirdNameOutput').innerText = initPerson.thirdName
    document.querySelector('#genderOutput').innerText = initPerson.gender
    document.querySelector('#birthOutput').innerText = initPerson.dateOfBirth
    document.querySelector('#profName').innerText = initPerson.profName
}
// Напишем код для кнопок генерации и очистки
document.querySelector('#buttonGen').addEventListener('click', () => {
    location.reload ()
    })

document.querySelector('#buttonClr').addEventListener('click', () => {
    const initPersonClear = personGenerator.getPersonClear()
    document.querySelector('#firstNameOutput').innerText = initPersonClear.firstName
    document.querySelector('#surnameOutput').innerText = initPersonClear.surname
    document.querySelector('#thirdNameOutput').innerText = initPersonClear.thirdName
    document.querySelector('#genderOutput').innerText = initPersonClear.gender
    document.querySelector('#birthOutput').innerText = initPersonClear.dateOfBirth
    document.querySelector('#profName').innerText = initPersonClear.profName
        })
