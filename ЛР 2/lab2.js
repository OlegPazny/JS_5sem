//1. функция, которая рассчитывает площадь, диаметр и длину окружности круга
function circleCalculations() {
    let rOfCircle =+prompt("Введите радиус круга: ")
    let dOfCircle = rOfCircle * 2;
    let sOfCircle = Math.round(Math.PI * Math.pow(rOfCircle, 2));
    let cOfCircle = Math.round(2 * Math.PI * rOfCircle);

    alert(`
Радиус круга: ${rOfCircle}\n
Диаметр круга: ${dOfCircle}\n
Площадь круга: ${sOfCircle}\n
Длина окружности круга: ${cOfCircle}`);
}

   

// //2. добавление товаров в корзину
// function checkout() {
//     let bankAccoutBalance = +prompt("Введите баланс вашей карты: ");
//     //let items;
    
//     let totalPrice = 0;
//     let itemPrice;
//     do
//     {
//         itemPrice = +prompt("Введите стоимость товара (для завершения покупки нажать 0): ");
//         totalPrice += itemPrice;
       
//         if (itemPrice === 0) {
//             alert(`Заказ оформлен, его сумма равна ${totalPrice}`);
//             break;
//         }
//     } while (totalPrice < bankAccoutBalance)
//     checkPrice(totalPrice);
    
//     function checkPrice(totalPrice) {
//         let newItemPrice;
//         let allowedSumForNewLastItem = totalPrice - bankAccoutBalance;
//         let differenceSum = itemPrice-allowedSumForNewLastItem;
//         if (totalPrice > bankAccoutBalance) {
//             // alert(totalPrice);
//             newItemPrice = +prompt
//             (`Недостаточно средств: либо завершите покупку без последнего выбранного товара, либо выберите более дешевый товар по стоимости в районе ${differenceSum}. Для завершения покупки введите 0`);
//             totalPrice -= itemPrice;
//             if (newItemPrice != 0 && newItemPrice <= differenceSum) {
//                 alert(`Вам хватило денег, заказ оформлен, его сумма равна ${totalPrice + newItemPrice}`);
//             }
//             else if (newItemPrice != 0 && newItemPrice > differenceSum) {
//                 checkPrice(totalPrice + newItemPrice);
//             }
//             else if (newItemPrice === 0) {
//                 alert(`Заказ оформлен, его сумма равна ${totalPrice}`);
//             }
//         }
//         else if (totalPrice === bankAccoutBalance) {
//             alert(`Заказ оформлен, его сумма равна ${totalPrice}`);
//         }
//     }
// } 


//3. функция с тремя параметрами. Первый параметр по умолчанию.
// Третий параметр вводит пользователь. Функция возвращает строку из трех параметров.
function threeParamsFunc(first = 'hop', second, third) {
    second = 'hey';
    third = prompt("Введите третий параметр (lalaley): ");
    alert (`${first} ${second} ${third}`);
}
//threeParamsFunc();


//4. количество присутствующих студентов. Имена присутствующих студентов пользователь вводит в модальное окно.
function presentStudents() {
    let countOfStudents=-1;
    do{
        studentName = prompt("Введите имя присутствующего студента(для завершения ввода введите 0): ");
        countOfStudents++;
    }  while (studentName != "0");
    alert(`Количество присутствующих студентов: ${countOfStudents}`);
} 
//presentStudents();


//5. params() как Function Declaration и Function Expression
function funcDeclarFuncExpr() {
    let a = +prompt("Введите сторону а четырехугольника: ");
    let b = +prompt("Введите сторону b четырехугольника: ");

    //Function Declaration
    function params(a, b) {
        let c;
        if(a == b) {
            c = 4 * a;
            alert(`Это квадрат, поэтому его периметр равен ${c}`);
        } 
        else {
            c = a * b;
            alert(`Это прямоугольник, поэтому его площадь равна ${c}`);
        }
        return c;  
    }

    //Function Expression
    let paramExpr = function (a, b) {
        let c;
        if(a == b) {
            c = 4 * a;
            alert(`Это квадрат, поэтому его периметр равен ${c}`);
        } 
        else {
            c = a * b;
            alert(`Это прямоугольник, поэтому его площадь равна ${c}`);
        } 
        return c;  
    };

   params(a, b);
   paramExpr(a,b);   
}

//6. пароль
function password() {
    const secInYear = 31104000; 
    const secInMonth = 2592000; 
    const secInDay = 86400; 
    const secInHour = 3600; 
    const secInMin = 60; 

    let secondsOverall = Math.pow(26,5) * Math.pow(10,3) * 3;
    let years = Math.floor(secondsOverall/secInYear);
    let months = Math.floor((secondsOverall-(years*secInYear))/secInMonth);
    let days = Math.floor((secondsOverall-((years*secInYear) + (months * secInMonth)))/secInDay);
    let hours = Math.floor((secondsOverall-((years*secInYear) + (months * secInMonth)+(days * secInDay)))/secInHour);
    let minutes = Math.floor((secondsOverall - ((years*secInYear) + (months * secInMonth)+(days * secInDay) + (hours * secInHour)))/secInMin);
    let seconds = Math.floor((secondsOverall - ((years*secInYear) + (months * secInMonth)+(days * secInDay) + (hours * secInHour) + (minutes * secInMin)))) ;

    alert(`Чтобы подобрать пароль понадобится ${years} годa(лет) ${months} месяц(ев) ${days} день(дней) ${hours} часа(ов) ${minutes} минут(а) ${seconds} секунд(а)`);
}

//7. задачу 3 решите, используя функцию-стрелку. 
function arrowFunc() {

    let hopHeyLalaley = (hop = "hop", hey, lalaley) => alert(`${hop} ${hey} ${lalaey}`)
    lalaey = prompt("Введите lalaley");
    hopHeyLalaley(undefined, "hey", lalaey);
}


//2. добавление товаров в корзину
function checkout() {
    let bankAccoutBalance = +prompt("Введите баланс вашей карты: ");
    var finalPrice = 0;
    let totalPrice = 0;
    let itemPrice;
    do
    {
        itemPrice = +prompt("Введите стоимость товара (для завершения покупки нажать 0): ");
        totalPrice += itemPrice;
       
        if (itemPrice === 0) {
            alert(`Заказ оформлен, его сумма равна ${totalPrice}`);
            break;
        }
    } while (totalPrice < bankAccoutBalance)
    checkPrice(bankAccoutBalance, totalPrice, itemPrice);


    function checkPrice(bankAccoutBalance, totalPrice, itemPrice) {
        let newItemPrice;
        let allowedSumForNewLastItems = bankAccoutBalance - totalPrice + itemPrice; // 2000 - 2100 + 1600 = 1500 // 1500 - 1600 + 1400
        let tempDifferenceSum = allowedSumForNewLastItems; // 1500
        if (totalPrice > bankAccoutBalance) { // 2100 > 2000
            alert(`Недостаточно средств: либо завершите покупку без последнего выбранного товара, либо выберите более дешевый товар по стоимости в районе ${allowedSumForNewLastItems}`);
            totalPrice -= itemPrice; // 2100 - 1600 = 500
            finalPrice = finalPrice + totalPrice;
            let newTotalPrice = 0;
            do {
                newItemPrice = +prompt (`Выберите более дешевый товар по стоимости в районе ${tempDifferenceSum}. Для завершения покупки введите 0`); //1. 100 //2. 100 //3. 1400
                newTotalPrice += newItemPrice; //1. 100 2. 200 3. 1400 + 200 = 1600 
                if (newItemPrice != 0 && newTotalPrice <= allowedSumForNewLastItems) { // 1. 100 < 1500, 2. 200 < 1500 
                    alert(`Теперяшняя сумма заказа равна ${finalPrice + newTotalPrice}`); // 1. 500 + 100 = 600 2. 500 + 200 = 700
                    tempDifferenceSum = tempDifferenceSum - newItemPrice; // 1500 - 100 = 1400 2. 1400 - 100 = 1300 
                }
                if (newItemPrice != 0 && newTotalPrice > allowedSumForNewLastItems) { //3. 1600 > 1500
                    checkPrice(allowedSumForNewLastItems, newTotalPrice, newItemPrice); // 3. 1500, 1600, 1400
                }
                else if (newItemPrice === 0) {
                    alert(`Заказ оформлен, его сумма равна ${finalPrice + newTotalPrice}`);
                }
            } while (newTotalPrice < allowedSumForNewLastItems && newItemPrice != 0);
            
        }
        else if (totalPrice === bankAccoutBalance) {
            alert(`Заказ оформлен, его сумма равна ${totalPrice}`);
        }

    }
} 