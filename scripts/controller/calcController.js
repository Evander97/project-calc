// Uma classe é um conjunto de atributos metódos

class CalcController {

    constructor() {
        this._locale = 'pt-br'
        this._displayCalcEl = document.querySelector('#display')
        this._dateEl = document.querySelector('#data')
        this._timeEl = document.querySelector('#hora')
        this._currentDate
        this.initButtonEvents()
        this.initialize()
    }

    
    initialize() {
        this.setDisplayDateTime()
        setInterval(() => {
            this.setDisplayDateTime()
        }, 1000)
    }

    initButtonEvents() {
        let buttons = document.querySelectorAll('#buttons > g, #parts > g')
        
        buttons.forEach(btn => {
            btn.addEventListener('click', e => {
                console.log(btn.className.baseVal.replace('btn-',""))
            })
        })
       
    }

    get displayDate() {
        return this._dateEl.innerHTML
    }

    set displayDate(value) {
        return this._dateEl.innerHTML = value
    }
    
    get displayTime() {
        return this._timeEl.innerHTML
    }

    set displayTime(value) {
        return this._timeEl.innerHTML = value
    }


    get currentDate() {
        return new Date()
    }

    set currentDate(value) {
        this._currentDate = value
    }

    setDisplayDateTime() {
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale)
        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        })
    }
}


///Encapsulamento
//Public 
//Protected
//Private