/** Bài 1:
 * Khối 1: Input
 * firstNum, secondNum, thirdNum, temp
 * Khối 2: 
 * B1: Lấy giá trị từ form
 * B2: Xác định điều kiện và lập công thức tính toán
 *  Nếu firstNum > secondNum 
 *      temp = firstNum
 *      fistNum = secondNum
 *      secondNum = temp
 *  Nếu firstNum > thirdNum
 *      temp = firstNum
 *      firstNum = thirdNum
 *      thirdNum = temp
 *  Nếu secondNum > thirdNum
 *      temp = secondNum
 *      secondNum = ThirdNum
 *      ThirdNum = temp
 * B3: Hiện kết quả
 * Khối 3: Output
 *  Xuất firstNum, secondNum, thirdNum theo thứ tự tăng dần
 */
function sortUp() {
    var firstNum = Number(document.getElementById('inpNumber1').value);
    var secondNum = Number(document.getElementById('inpNumber2').value);
    var thirdNum = Number(document.getElementById('inpNumber3').value);
    var temp = 0;
    if (firstNum > secondNum) {
        temp = firstNum;
        firstNum = secondNum;
        secondNum = temp;
    }
    if (firstNum > thirdNum) {
        temp = firstNum;
        firstNum = thirdNum;
        thirdNum = temp;
    }
    if (secondNum > thirdNum) {
        temp = secondNum;
        secondNum = thirdNum;
        thirdNum = temp;
    }
    document.getElementById('txtTextNumber').innerHTML =
        "Các số theo thứ tự tăng dần là: " + firstNum + " " + secondNum + " " + thirdNum;
}

/** Bài 2:
 * Khối 1: Input
 * faMember
 * Khối 2: 
 * B1: Lấy giá trị từ form
 * B2: Xác định điều kiện và lập công thức tính toán
 *  Nếu giá trị là bố thì hiển thị lời chào bố
 *  Nếu giá trị là mẹ thì hiển thị lời chào mẹ
 *  Nếu giá trị là anh thì hiển thị lời chào anh trai
 *  Nếu giá trị là em gái thì hiển thị lời chào em gái
 *  Nếu không chọn thì hiển thị lời chào người lạ ơi
 * B3: Hiện kết quả
 * Khối 3: Output
 *  Lời chào hỏi của máy
 */
function greeting() {
    var faMember = document.getElementById('family').value;
    switch (faMember) {
        case "bo":
            document.getElementById('txtFamily').innerHTML = 'Xin chào Bố'
            break;
        case "me":
            document.getElementById('txtFamily').innerHTML = 'Xin chào Mẹ'
            break;
        case "anh":
            document.getElementById('txtFamily').innerHTML = 'Xin chào Anh Trai'
            break;
        case "em":
            document.getElementById('txtFamily').innerHTML = 'Xin chào Em Gái'
            break;
        default:
            document.getElementById('txtFamily').innerHTML = 'Xin chào Người Lạ Ơi'
    }
}


/** Bài 3:
 * Khối 1: Input
 * num1, num2, num3, count
 * Khối 2: 
 * B1: Lấy giá trị từ form
 * B2: Xác định điều kiện và lập công thức tính toán
 *  Cho biến đếm bằng 0 để đếm số chẵn 
 *  Nếu 3 số chia hết cho 2 thì đó là sô chẵn => tăng biến đếm lên 1 đơn vị
 *  Nếu 3 số không chia hết cho 2 thì đó là số lẻ => Lấy tổng số nhập vào trừ đi số chẵn đếm được
 *  
 * B3: Hiện kết quả
 * Khối 3: Output
 *  evenNum, oddNum
 */
function countNumber() {
    var num1 = Number(document.getElementById('inpInt1').value);
    var num2 = Number(document.getElementById('inpInt2').value);
    var num3 = Number(document.getElementById('inpInt3').value);
    var count = 0;
    var evenNum = 0;
    var oddNum = 0;
    if (num1 <= 0 || num2 <= 0 || num3 <= 0) {
        document.getElementById('txtCount').innerHTML = "Phải nhập số lớn hơn 0"
    }
    else {
        if (num1 % 2 == 0) {
            count++;
        } if (num2 % 2 == 0) {
            count++;
        } if (num3 % 2 == 0) {
            count++;
        }
        oddNum = 3 - count;
        evenNum = count;
        document.getElementById('txtCount').innerHTML =
            "Có " + evenNum + " số chẵn và " + oddNum + " Số lẻ"
    }
}
/** Bài 4:
 * Khối 1: Input
 * edge1, edge2, edge3,
 * Khối 2: 
 * B1: Lấy giá trị từ form
 * B2: Xác định điều kiện và lập công thức tính toán
 *  Nếu tổng hai cạnh bất kì luôn lớn hơn cạnh còn lại  => là tam giác
 *      Nếu 3 cạnh bằng nhau => tam giác đều 
 *      Nếu 2 cạnh bằng nhau => tam giác cân
 *      Nếu c^2 = a^2 + b^2 => tam giác vuông
 *      Trường hợp còn lại là tam giác khác
 * B3: Hiện kết quả
 * Khối 3: Output
 *  Loại tam giác
 */
function findTriangle() {
    var edge1 = Number(document.getElementById('inpEdge1').value);
    var edge2 = Number(document.getElementById('inpEdge2').value);
    var edge3 = Number(document.getElementById('inpEdge3').value);

    if (edge1 < edge2 + edge3 && edge2 < edge1 + edge3 && edge3 < edge1 + edge2) {
        if (edge1 == edge2 && edge2 == edge3) {
            document.getElementById('txtFind').innerHTML = " Tam giác đều"
        } else if (edge1 == edge2 || edge1 == edge3 || edge2 == edge3) {
            document.getElementById('txtFind').innerHTML = " Tam giác cân"
        } else if (edge1 * edge1 == edge2 * edge2 + edge3 * edge3 ||
            edge2 * edge2 == edge1 * edge1 + edge3 * edge3 ||
            edge3 * edge3 == edge1 * edge1 + edge2 * edge2) {
            document.getElementById('txtFind').innerHTML = " Tam giác vuông"
        }
        else {
            document.getElementById('txtFind').innerHTML = " Tam giác khác"
        }
    } else {
        document.getElementById('txtFind').innerHTML = "Không phải là cạnh của tam giác"
    }
}