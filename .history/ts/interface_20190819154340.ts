/* 
interface(接口)

*/
// function printLabel(labelledObj: {label: string}){
//     console.log(labelledObj)
// }
// let myObj = {size:10, label: 'size 10 object'};
// printLabel(myObj)

// 使用接口重写
interface LabelledValue {
    label: string;
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label)
}

let myObj = {size: 10,label: 'size 10 object'};
printLabel(myObj);

/* 
    可选属性
    在可选属性名字定义的后面加一个?符号
    好处：
    对可能存在的属性进行预定义；
    可以捕获引用了不存在的属性时的错误
*/
interface SquareConfig {
    color?:string;
    width?:number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = {color: 'white', area: 100};
    if(config.color){
        newSquare.color = config.color;
    }
    if(config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;

}
let mySquare = createSquare({color: 'black',width:12});
console.log(mySquare,'mySquare');
