// Wbrks
// while, do while
//console.log(1)
//console.log(2)
//console.log(3)
//console.log(4)
//console.log(5)
//let i = 1
//while(i <= 100) {
//  console.log(i, "с помощью цикла while")
// i++
//}

//let i = 10
//do {
//  console.log(i, "Сработает один раз по-любому")

//} while (i < 5)

//let num = 100
//while (num >= 50) {
//console.log(num)
//  num--

//}

//let arr = [20, 30, 40, 100, 50]
//console.log(arr[0])
//console.log(arr[1])
//console.log(arr[2])
//console.log(arr[3])
//console.log(arr[4])

//let i = 0
//while (i < arr.length) {
//  console.log(arr[i], "с помощью цикла")
//  i++

//}

//let arr = ["Футболка", "Мяч", "Обувь"]
//let word = prompt("Введите категорию(Футболка, мяч, обувь)")
//let i = 0
//let result = "no"
//while (i < arr.length) {
//    if (arr[i] === word) {
//        result = "Yes"
        break;
//    }
    //   else {.
    
    //       result = "no"
    // }
//    i++
//}
//alert(result)


//while (i < arr.length) {
  //  if(arr[i] === word) {
   //     alert("Yes")
  //  }
  //  else {
    //    alert("now")
  //  } 
  //  i++
//}

// FOR
//let arr = [1, 2, 3]
//for (let i = 0; i < arr.length; i++) {
  //  console.log(i, "это индексы")
//}

//for (let i = 50; i <=200; i++) {
//    if (i % 2 !== 0) {
//        console.log(i)
//    }
//}


// for in
//let arr = [10, 20, 30, 40, 50]

//for(const key in arr) {
//    console.log(key)
//}

//let obj = {
//    name: "Aibek",
//    age: 20,
//    car: "Москвич"
//}
//console.log(obj.name)
//console.log(obj.age)
//console.log(obj.car)

//for(const key in obj) {
//    console.log(obj[key])
//}

//let array = ["Ilyas", "Nurbek", "Aba", "Leon"]
//for(const value of array) {
//    console.log(value)
//    if (vaue == "Nurbek") {
//        alert("Nurbek senior")
//    }
//}

// Простые методы массивов
//let arr = [1, 2, 3]
//arr.push("Aibek")
//arr.push(4) // добавляет в конец
//console.log(arr)
//let deletedElem = arr.pop()  //удаляет с конца
//console.log(deletedElem)
//console.log(arr)

//let newArray = [4, 5, 6]
//newArray.unshift(1, 2, 3) // udalyaet
//console.log(newArray)
//newArray.shift() 
//let num newArray.shift() // добавляет
//console.log(num)
//console.log(newArray)


//let array = [10, 20, 30]
//array.reverse()
//let str = array.join("-")
//console.log(str)
//console.log(array)
//let newArray = str.split("-")
//console.log(newArray)

//let nums = [1, 2, 30, 11, 101, 222, 27, 86]
//console.log(nums)
//nums.sort((a, b) => a - b) по убыванию
//nums.sort((a, b) => b - a) по возрастанию
//console.log(nums)

//let products = [

//    {
//        title: "Телефон"
//    },
//    {
//        title: "Сумка"
//    },
//    {
//        title: "Обувь"
//    },
//    {
//        title: "Ноутбук"
//    },
//    {
//        title: "Кружка"
//    },
//]
// Сортировка от я-а
//products.sort((a,b) => {
//    if(a.title > b.title) {
//        return -1
//    }
//})
//console.log(products)
// Сортировка от а-я
//products.sort((a, b) => {
//    if (a.title < b.title) {
//        return -1
//    }
//})
//console.log(products)

// slice, splise

//let array = [10, 22, 31, 47, 51]
//let res = array.slice(1, 2)
// массив.slice(с какого начать, по какой(не вкл.))
//console.log(array)
//console.log(res)

//let array = [10, 22, 31, 47, 51]
//let res = array.splice(2, 1, "VMESTO", 1, 2)
// массив splice(с какого начать, сколько вырезать, что вставить(количество не ограничено))
//console.log(array)
//console.log(res)
