class Style {
    getStyle() { return `
            * {
                font-size: 20px;
            }
            
            header {
                width: 100vw;
                height: 15vh;
                background-image: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
                color: white;
                font-size: 40px;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-bottom: 30px;
            }
            
            .card-header {
                font-size: 30px;
                background-color: aquamarine;
            }
            
            .card {
                padding: 5px;
                margin: 20px;
            }`
    }
}

module.exports = Style;