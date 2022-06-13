const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    // Json список мужских имён
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артём",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    // Json список женских имён
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Авдотья",
            "id_2": "Евлампия",
            "id_3": "Василиса",
            "id_4": "Агата",
            "id_5": "Тамара",
            "id_6": "Варвара",
            "id_7": "Антонина",
            "id_8": "Агния",
            "id_9": "Влада",
            "id_10": "Злата"
        }
    }`,
    // Добавляем список женских профессий
    profFemaleJson: `{
        "count": 5,
        "list": {     
            "id_1": "Доярка",
            "id_2": "Маникюрщица",
            "id_3": "Уборщица",
            "id_4": "Повар",
            "id_5": "Медсестра"
        }
    }`,
    // Добавляем список мужских профессий
    profMaleJson: `{
        "count": 5,
        "list": {     
            "id_1": "Слесарь",
            "id_2": "Столяр",
            "id_3": "Сантехник",
            "id_4": "Плотник",
            "id_5": "Тракторист"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',
    isMale: true, // Задаём булево значение для нового свойства объекта

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },
    
    // Функция для свойства рандомного выбора имени
    randomFirstName: function() {
        return this.randomValue(this.isMale ? this.firstNameMaleJson : this.firstNameFemaleJson)
    },

    // Функция для свойства рандомного выбора пола
    randomGender: function() {
        this.isMale = this.randomIntNumber()==1
        //console.log(this.isMale)
        return this.isMale ? this.GENDER_MALE : this.GENDER_FEMALE
    },

    // Функция для свойства рандомного выбора фамилии
    randomSurname: function() {
        const surname = this.randomValue(this.surnameJson)
        return this.isMale ? surname : surname+"а"   
    },
    // Функция для свойства рандомного выбора профессии
    randomProfName: function() {
        return this.randomValue(this.isMale ? this.profMaleJson : this.profFemaleJson)
    },



    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
        this.person.dateOfBirth = this.randomIntNumber (max = 2021, min = 1900) + 'г.';
        this.person.profName = this.randomProfName();
        return this.person;
    }
};
