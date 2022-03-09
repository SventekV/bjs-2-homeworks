function cachingDecoratorNew(func) {
  let cache = [];

function wrapper(...args) {
    const hash = args.join(","); console.log(hash); 
    let idx = cache.findIndex((item) => item["hash"] === hash); console.log(idx) 
    if (idx !== -1 ) { 
        console.log("Из кэша: " + cache[idx].value); 
        return "Из кэша: " + cache[idx].value;
    }

    let result = func(...args); 
  let obj = {
      hash: hash,
      value: result
    } 
    cache.push(obj) ; 
    if (cache.length > 5) { 
      cache.shift() 
    }
    console.log("Вычисляем: " + result);
    console.log(obj);
    console.log(cache)
    return "Вычисляем: " + result;  
}
return wrapper;
}


function debounceDecoratorNew(func,ms) {
  let flag = true;
  let timeOut;
   function wrapper(...arg) {
      if (flag === true) {
        func(...arg);
        flag = false;}
      if(flag === false) {
        clearTimeout(timeOut);  
        timeOut = setTimeout(() => func(...arg) , ms); 
      }
   }
   return  wrapper;
}


  
function debounceDecorator2(func,ms) {
  let flag = true;
  let timeOut;
    function wrapper(...arg) { 
      wrapper.count += 1;
      if (flag === true) {
        func(...arg); 
        flag = false;
      }
      if(flag === false) {
        clearTimeout(timeOut);  
        timeOut = setTimeout(() => func(...arg) , ms); 
      }
    }
  wrapper.count = 0;
  return  wrapper; 
}


