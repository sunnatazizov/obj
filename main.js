let students = {
    name: 'Farrux',
    gender: 'male',
    age: 13,
    isMarried: true,
    wifes: ['Nargiza', 'Angelica', 'Nasiba', 'Amina']
}

let passport = {
    serries: "AC",
    number: 12313123213,
    data: '2020-20-20',
    exp: '2030-20-20'
}

//Задание 1 соеденить в одно целое 
let newobj = Object.assign({}, students, passport);
console.log(newobj);

//Задание 2-3 получить его ключи и значения
let allkeys = Object.keys({...students, ...passport});
let allvalue = Object.values({...students, ...passport});
console.log(allkeys);
console.log(allvalue);

//Задание 4 Соеденить в одну 
let result = Object.assign({}, { allkeys, allvalue });
console.log(result);


//Задание 5 распределение
let types = {
    string: [],
    number: [],
    boolean: [],
    object: []

}



for (let key in newobj) {
    let value = newobj[key];
    if (typeof value === 'string') {
        types.string.push(value);
    } else if (typeof value === 'number') {
        types.number.push(value);
    } else if (typeof value === 'boolean') {
        types.boolean.push(value);
    } else if (typeof value === 'object') {
        types.object.push(value);
    }
}
console.log(types);
