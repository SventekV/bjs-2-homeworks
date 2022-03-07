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
  let flag = false;   
  return function(...args) {
    if (flag === false) { 
       console.log(func(...args));  
       flag = true;
    }
    if (flag === true) {
      setTimeout(() => {     
         flag = false
          },ms);
    }
  }
    
}


  
function debounceDecorator(func,ms) {
  let flag = false;
  let count = 1;  
  return function(...args) { 
    console.log(`ВЫзовов ${count++}`)
    if (flag === false) { 
      console.log(func(...args));  flag = true;
    }
    if (flag === true) {
      setTimeout(() => {     
      flag = false;
      },ms);
    }
  }
}


