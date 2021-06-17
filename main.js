const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)


const btnIpNumber = $('.btnIpNumber')
const showArrNum = $('.showArrNum')
const btnTotalPosNum = $('.btn-totalPosNum')
const showTotalPosNum = $('.showTotalPosNum')
const arrNum = [];
const btnCountPosNum = $('.btn-countPosNum')
const showCountPosNum = $('.showCountPosNum')
const btnMinArr = $('.btn-minArr')
const showMinArr = $('.showMinArr')
const btnMinPosArr = $('.btn-minPosArr')
const showMinPosArr = $('.showMinPosArr')
const btnLastEvenNum = $('.btn-lastEvenNum')
const showLastEvenNum = $('.showLastEvenNum')
const btnSwapNum = $('.btn-swapNum')
const showSwapPosition = $('.showSwapPosition')
const showConditionIpSwap = $('.showConditionIpSwap')
let newSwapArrNum = []; 
const btnSortArrNum = $('.btn-sortArrNum')
const showSortArrNum = $('.showSortArrNum')
const btnFirstPrimeNum = $('.btn-firstPrimeNum')
const showFirstPrimeNum = $('.showFirstPrimeNum')
const btnIpFloatNumber = $('.btn-ipFloatNumber')
const btnCountIntergerNum = $('.btn-countIntergerNum')
const showCountIntergerNum = $('.showCountIntergerNum')
const btnComparePosAndNegNum = $('.btn-comparePosAndNegNum')
const showComparePosAndNegNum = $('.showComparePosAndNegNum')

// Lấy số của người dùng nhập vào mảng
btnIpNumber.onclick = function() {
    const ipNum = $('.ipNum').value;    
    if (Number.isInteger(+ipNum) === false || ipNum === '') {
        alert('Vui lòng nhập số nguyên');
    }else {
        arrNum.push(+ipNum);
    }
    showArrNum.innerHTML = `[ ${arrNum}]`; 
    showConditionIpSwap.innerHTML = ` Nhập vị trí cần đổi chỗ (1 ~ ${arrNum.length})`
    newSwapArrNum = [...arrNum] 
    
}

// Tổng số dương

btnTotalPosNum.onclick = function() {
    let totalPosNum = 0 ;    
    for (let i = 0; i < arrNum.length ; i++) {
        arrNum[i] >0 ? totalPosNum += arrNum[i] : 0;
        }
    showTotalPosNum.innerHTML = `Tổng số dương trong mảng: ${totalPosNum}`
}

// Đếm số dương

btnCountPosNum.onclick = function() {
    let countPosNum = 0;
    for (let i = 0; i < arrNum.length; i++) {
        arrNum[i] > 0 ? countPosNum++ : 0;
    }
    showCountPosNum.innerHTML = `Có: ${countPosNum} số dương trong mảng`
}

// Số nhỏ nhất trong mảng 
btnMinArr.onclick = function() {
    let minArr = arrNum[0];
    for (let i = 1; i < arrNum.length; i++) {
        minArr > arrNum[i] ?  minArr = arrNum[i] : 0;
    }
    showMinArr.innerHTML = `Số nhỏ nhất trong mảng là: ${minArr}`
}

// Tìm số dương nhỏ nhất trong mảng

btnMinPosArr.onclick = function() {
    let minPosArr = 0;        
    for (let i = 0; i < arrNum.length; i++) {
        if (arrNum[i] > 0) {
            minPosArr =  arrNum[i];
            break;
        }        
    }
       
    if (minPosArr === 0) {
        showMinPosArr.innerHTML = ` Mảng của bạn không có số dương`
    } else {
        for (let j = 0; j < arrNum.length; j++) {
            if (arrNum[j] > 0 && minPosArr > arrNum[j]) {
                minPosArr = arrNum[j];
            }
        }
        showMinPosArr.innerHTML = `Số dương nhỏ nhất trong mảng là: ${minPosArr}`
    }
   
}

//Tìm số chẵn cuối cùng trong mảng

btnLastEvenNum.onclick = function() {
    let lastEvenNum = 0;
    for (let i = 0; i < arrNum.length; i++) {
        if (arrNum[i] % 2 === 0) {
            lastEvenNum = arrNum[i];
        }
    }
    lastEvenNum != 0 ? showLastEvenNum.innerHTML = ` Số chẵn cuối cùng trong mảng là: ${lastEvenNum}` : showLastEvenNum.innerHTML = 'Mảng của bạn không có số chẵn'
}
// Đổi 2 vị trí trong mảng

btnSwapNum.onclick = function() {       
    const swapNum1 = $('.swapNum1').value;
    const swapNum2 = $('.swapNum2').value;
    let tmpNum; 
    if (swapNum1 < 1 || swapNum1 > arrNum.length || swapNum2 < 1 || swapNum2 > arrNum.length || isNaN(swapNum1) || isNaN(swapNum2) ) {
        alert('Vui lòng nhập lại vị trí cần đổi chỗ')
    } else {
        
        tmpNum = newSwapArrNum[swapNum1 - 1]
        newSwapArrNum[swapNum1 - 1 ] = newSwapArrNum[swapNum2 -1]
        newSwapArrNum[swapNum2 - 1] = tmpNum
        showSwapPosition.innerHTML = `Mảng sau khi đổi chỗ [${newSwapArrNum}]`
    }
}

// Sắp xếp theo thứ tự tăng dần

btnSortArrNum.onclick = function() {
    let newSortArrNum = [...arrNum]
    let tmpNum; 
    for (let i = 0; i < arrNum.length; i++) {
        for (let j = 0; j < arrNum.length; j++) {
            if (newSortArrNum[j] > newSortArrNum[i]) {
                tmpNum = newSortArrNum[j]
                newSortArrNum[j] = newSortArrNum[i]
                newSortArrNum[i] = tmpNum
            }
        }
    }
    showSortArrNum.innerHTML = ` Mảng được sắp xếp: [${newSortArrNum}]`
}

//Tìm số nguyên tố đầu tiên của mảng

btnFirstPrimeNum.onclick = function() {
    let firstPrimeNum = 0;
    let newPosArrNum = arrNum.filter(num => {
        return num > 1
    })    
    for (let i = 0; i < newPosArrNum.length; i++) {
        if (newPosArrNum[i] % i == 0) {
            break;
        }else {
            firstPrimeNum =  newPosArrNum[i];
                    break;
            }
    }
    firstPrimeNum === 0 ? showFirstPrimeNum.innerHTML = 'Mảng của bạn không có số nguyên tố' : showFirstPrimeNum.innerHTML = ` Số nguyên tố đầu tiên của mảng là: ${firstPrimeNum}`
 }

//  Nhập thêm phần từ vào mảng có số thực và tìm xem có bao nhiêu số nguyên

btnIpFloatNumber.onclick = function() {
    const ipFloatNum = $('#ipFloatNum').value;
    if (isNaN(ipFloatNum) || !ipFloatNum) {
        alert('Vui lòng nhập số vào mảng')
    } else {
        arrNum.push(+ipFloatNum);
    }
    showArrNum.innerHTML = `[ ${arrNum}]`;
    showConditionIpSwap.innerHTML = ` Nhập vị trí cần đổi chỗ (1 ~ ${arrNum.length})`
    newSwapArrNum = [...arrNum]
    
}

btnCountIntergerNum.onclick = function() {
    let countIntergerNum = 0;
    for ( let i = 0; i < arrNum.length; i++) {
        Number.isInteger(arrNum[i]) ? countIntergerNum++ : 0;
    }
    showCountIntergerNum.innerHTML = `Mảng của bạn có ${countIntergerNum} số nguyên`
}

// So sánh số lượng số âm và số dương
btnComparePosAndNegNum.onclick = function() {
    let countPosNum = 0;
    let countNegNum = 0;

    for ( let i = 0; i < arrNum.length; i++) {
        if ( arrNum[i] > 0) {
            countPosNum++
        }else if ( arrNum[i] <0) {
            countNegNum++
        }
    }

    if (countPosNum > countNegNum) {
        showComparePosAndNegNum.innerHTML = `Mảng có số lượng số dương nhiều hơn số âm ( ${countPosNum} > ${countNegNum} )`
    } else if (countPosNum < countNegNum) {
        showComparePosAndNegNum.innerHTML = `Mảng có số lượng số âm nhiều hơn số dương ( ${countNegNum}  > ${countPosNum} )`
    }else {
        showComparePosAndNegNum.innerHTML = `Mảng có số lượng số dương bằng số âm ( ${countPosNum} = ${countNegNum})`

    }

    
}