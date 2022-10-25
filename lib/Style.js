class Style {
    constructor(color) {
        this.color = color;
    }

    getColor() {
        return `background-color:${this.color};`
    }

    getStyle() { return `
            * {
                color: white;
                font-size: 20px;
            }
            
            header {
                width: 100vw;
                height: 15vh;
                ${this.getColor()}
                color: white;
                font-size: 40px;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-bottom: 30px;
            }
            
            .card-header {
                font-size: 30px;
                ${this.getColor()}
            }
            
            .card {
                padding: 5px;
                margin: 20px;
            }`
    }
}

module.exports = Style;