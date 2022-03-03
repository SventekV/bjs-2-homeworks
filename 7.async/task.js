class AlarmClock {
    constructor () {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if (id === undefined) {
            throw new Error ('Параметр id не передан');
        }
        else if (this.alarmCollection.some((clock) => clock.id === id)){
            return console.error('Будильник с таким id уже существует');
        }
        return this. alarmCollection.push({id, time, callback});
    }

    removeClock(id) {
        const beginLenght = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter(clock => clock.id !== id);
        const endLenght = this.alarmCollection.length;
        return beginLenght > endLenght;          
    }

    getCurrentFormattedTime() {
        return new Date().toTimeString().slice(0, 5); 
    }

    start() {
        let checkClock = (clock) => {
            let alarm = this.getCurrentFormattedTime();
            if (clock.time === alarm) {
                return clock.callback();
            }
        }
        if (this.timerId === null) {
            this.timerId = setInterval(() => {
                this.alarmCollection.forEach(clock => checkClock(clock));
            }, 1000);
        }
        return;
    }

    stop() {
        if (this.timerId !== null) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        this.alarmCollection.forEach(clock => console.log(`Будильник номер ${clock.id} заведен на ${clock.time}`));
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}



