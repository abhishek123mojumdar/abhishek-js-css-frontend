class Book {
    constructor(title, price , author , cover , summary ) {
        this.title = title
        this.price = price
        this.author = author
        this.cover = cover
        this.summary = summary
    }

    getSummary() {
        console.log('You are in the summary method')
        return `The summary of the book is ${this.summary}`
    }

    getBookData() {
        console.log('Inside the book data method')
        return `This book's title is ${this.title} whose author is ${this.author}`
    }

    reviseBook(price) {
        console.log('Revise the price of the book')
        this.price = price
        return `The updated price is ${this.price}`
    }

    static getAuthor() {
        return `The author is ${this.author}`
    }
}


class Magazine extends Book {
    constructor(title, price , author , cover , summary , edition) {
        super(title, price , author , cover , summary)
        this.edition = edition
    }

    getEdition () {
        console.log('The edition method')
        return `The magazine edition is ${this.edition}`
    }
}


let book1 = new Book('The monkey man' , 200 , 'Ching li' , 'Hard back' , 'Kungfu book ')
let book2 = new Book('Fire' , 300 , 'Janet com' , 'Paper back' , 'Life lesson book')
let mag1 = new Magazine('Stardust' , 400 , 'Mahesh' , 'Magzine cover' , 'Entertainment' , 'January')


console.log(book1)
console.log(book2)

let revisedPrice = book1.reviseBook(700)
console.log(revisedPrice)
console.log(mag1)