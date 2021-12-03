/**Khối 1: 1 số nguyên
 * 
 * Khối 2: 
 * Bước 1: Tạo các biến number, S
 * Bước 2: Gán giá trị cho number
 * Bước 3: Tách số hàng chục theo công thức Math.floor(number/10)
 * Bước 4: Tách số hàng đơn vị theo công thức Math.floor(number%10)
 * Bước 5: In kết quả S bằng cách cộng hàng chục và hàng đơn vị ra console
 * 
 * Khối 3: Kết quả S
 * 
 */
var number = 46;

var S = Math.floor(number / 10) + Math.floor(number % 10);

console.log("Tong 2 ky so la: " + S);