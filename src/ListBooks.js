import React, { Component } from 'react'
import BookShelf from './BookShelf'
import {Link} from "react-router-dom"
export default class ListBooks extends Component {

    render() {
      const {books,onUpdateBookShelf} = this.props;
      const currentlyReading = books.filter ((book) =>(book.shelf === 'currentlyReading'))
      const wantToRead = books.filter ((book) =>(book.shelf === 'wantToRead'))
      const read = books.filter ((book) =>(book.shelf === 'read'))

        return (
            
          <div className="list-books">
          
          <div className="list-books-title">
            <h1>MyReads</h1>
              
          </div>
          <div className="list-books-content">
            <div>
              <BookShelf list = {currentlyReading} title = {'Currently reading'} onUpdateBookShelf = {onUpdateBookShelf}/>
              <BookShelf list = {wantToRead} title = {'Want to read'} onUpdateBookShelf = {onUpdateBookShelf}/>
              <BookShelf list = {read} title = {'Read'} onUpdateBookShelf = {onUpdateBookShelf}/>
            </div>
          </div>
          <div className="open-search">
          <Link
          to='/search'>
            <button>Add a book</button>
            </Link>
          </div>
        </div>
        )
    }
}
