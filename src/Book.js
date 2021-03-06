import React, { Component } from 'react'
import BookShelfChanger from './BookShelfChanger'

export default class Book extends Component {
    render() {
        const {book,onUpdateBookShelf} = this.props
        return (
            
            <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193,
                 backgroundImage: `url("${book.imageLinks && book.imageLinks.thumbnail}")` }}></div>
             <BookShelfChanger book = {book} onUpdateBookShelf = {onUpdateBookShelf} />
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors}</div>
          </div>
            
        )
    }
}
