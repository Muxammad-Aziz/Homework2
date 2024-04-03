// программа учитывает время

let time1 = new Date('April 02, 2024 17:37:00 +0500');
const hours = new Date().getHours()
let message

if(hours < 12) {
     message = 'Доброе утро'
} else message = 'Добрый день'
if (hours > 16) message = 'Добрый вечер'

alert(message)
console.log(
    message
)



// определение возраста

let userAge = 10

function getAgeString(age) {
    let count = age % 100
    if (count >= 10 && count <= 20) {
        return "лет"
    } else {
        count = age % 10
        if (count === 1) {
            return "год"
        } else if (count >= 2 && count <= 4) {
            return "года"
        } else {
            return "лет"
        }
    }
}

console.log(userAge + " " + getAgeString(userAge))


// Декады

let day = prompt('Введите дату:');
 
if(day >= 0 && day <= 10) {
    alert('Первая декада');
}
 
if(day >=11 && day <=20) {
    alert('Вторая декада');
}
 
if(day >= 21 && day <= 32); {
    alert('Третья декада');
}


// Определение возраста

let age = prompt('Сколько вам лет')

if (age >= 0 && age < 10) {
    alert("Ребёнок")
}  else if (age >= 11 && age <= 16)
    alert('Подросток')
 else if (age >= 17 && age <= 44) {
    alert('Молодёж')
} else if (age >= 45 && age <= 59) {
    alert('Средный')
} else if (age >= 60 && age <= 74) {
    alert('Пожилой')
} else if (age >= 75 && age <= 100) {
    alert('Старый')
}