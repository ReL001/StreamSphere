class apiREsponse {
    constructor(statusCode, data, message = "Success"){
        this.statusCode = statusCode
        this.data = data 
        this.message = message
        this.SUCCESS = statusCode < 400
    }
}