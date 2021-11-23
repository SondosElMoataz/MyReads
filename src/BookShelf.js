import React, { Component } from 'react'
import Book from './Book'

export default class BookShelf extends Component {
    render() {
        const {list,title,onUpdateBookShelf }= this.props
        return (
            <div>
            <div className="bookshelf">
            <h2 className="bookshelf-title">{`${title}`}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {list.map((book)=> (
                    <li key ={book.id}>
                    <Book book ={book} onUpdateBookShelf = {onUpdateBookShelf}/>
                    </li>
                    
                )
                    )}
                
              </ol>
            </div>
          </div>  
            </div>
        )
    }
}
