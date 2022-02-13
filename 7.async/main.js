class AlarmClock {
   constructor (alarmCollection,timerId) {
     this.alarmColection = [];
     this.timerId = null;
   }

  

     addClock(time, callback, id) {
        if (!id) {
            throw new Error ('Параметр id не передан');
        }
        else if (this.alarmCollection.some(clock => clock.id === id)){
             console.error('Будильник с таким id уже существует'); return
        }
         this.alarmCollection.push({id, time, callback});
    }
     removeClock(id){
      const clockIndex = this.alarmCollection.findIndex(element => element.id === id);
        if (clockIndex < 0){
            console.error('будильник с таким id не найден');
            return
        }
        this.alarmCollection.splice(clockIndex, 1);
    }

       getCurrentFormattedTime(){
       const time = new Date().toLocaleTimeString("ru-Ru", {
            hour: "2-digit",
            minute: "2-digit",
        });
        return time;
    }
      printAlarms(){
         this.alarmCollection.forEach((element) => {
            console.log(element.time + " " + element.id)
        });
    };

      start(){
        this.checkClock();
        if (this.timerId === null){
            this.timerId = setInterval(this.checkClock.bind(this), 100);
        }

    }

    checkClock(){
        console.log(`Тик так ` + this.getCurrentFormattedTime());
        this.alarmCollection.forEach((alarm) => {
            if (this.getCurrentFormattedTime() === alarm.time ) {
                this.removeClock(alarm.id)
                alarm.callback();
            }
        })
    }
    stop(){
        if (this.timerId !== null){
            clearInterval(this.timerId)
        }
        this.timerId = null;
        this.clearAlarms();
    }
    clearAlarms(){
        this.alarmCollection = [];
    }
};
 

// тут вы можете вызывать функции из task.js