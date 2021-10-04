let a = {}; //1

let b = Object.create(null); //2

a.color = "white"; //3
a["num"] = 1;
console.log(a);

let masiv = []; //4

let masiv1 = Array(100500).fill(""); //5
console.log(masiv1.length);

let masiv2 = [1, 2, 3]; //6

masiv2.splice(0, masiv2.length); //7

let masiv3 = [1, 2, 3, 4, 5]; //8
function removeItem(index) {
	masiv3.splice(index, 1);
	console.log(masiv3);
	return masiv;
}
removeItem(1);

function check1(mas) { //9
    if (mas.length >= 1) {
      return true;
    } else {
      return false;
    }
  }
  console.log(check1([]));

function check2(object1) { //10
    if (object1.length >= 1) {
      return true;
    } else {
      return false;
    }
  }
  console.log(check2({})); 

function concate(arr1, arr2) { //11
    return arr1.concat(arr2);
  }
  console.log(concate([1, 2], [3, 4]));

function pow1(masiv4) { //12
    let pow_masiv = [];
    
    for (let i of masiv4) {
      pow_masiv.push(Math.pow(i, 3));
    }
    
    return pow_masiv;
  }
  console.log(pow1([1, 2, 3]));

function neparni(mas) { //13
    let mas1 = [];
    
    for (let i of mas) {
      if (i % 2 !== 0) {
        mas1.push(i);
      }
    }
    
    return mas1;
  }
  console.log(neparni([1, 2, 3, 4, 5]));

function func(mas) { //14
    let mas1 = [];
    
    for (let i of mas) {
      if (Math.floor(i) === i) {
        mas1.push(i); 
      }
    }
    
    return mas1;
  }
  console.log(func([5, 3.14, 4.1, 10, 11, 20.1]));

  function func1(a, b){ //15
    a += b;
  }
  func1(2, 3);