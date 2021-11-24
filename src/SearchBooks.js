import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from "./BooksAPI"
import Book from './Book'

export default class SearchBooks extends Component {
    state = {
        query: '',
        showingBooks: []
    }
    
    updateQuery = (query)=>{
        this.setState(()=>({
            query: query
        }))
    }
    Search = (query)=> {
        this.updateQuery(query)
        if (query.length > 0){
          BooksAPI.search(query).then((books)=>{
            if (books.error){
              this.setState({showingBooks:[]});
            }
            else{
              this.setState({showingBooks:books})
            
            }
          })
        } 
        else {
          this.setState({showingBooks:[]});
        }
        // this.forceUpdate()
    }
    

    render() {
        
        const {query,showingBooks} = this.state
        const {books,onUpdateBookShelf} = this.props

        
        showingBooks.map((showBook)=>{
         
          if(books.filter((c)=>c.id === showBook.id)[0]){
          showBook.shelf=books.filter((c)=>c.id === showBook.id)[0].shelf
          }
          else {
            showBook.shelf='none'
          }
        })
        
        // const showingBooks = query === '' ? books
        // : books.filter((c)=>(
        //     c.name.toLowerCase().includes(query.toLowerCase())
        //     ))

        

        return (
            <div>
            <div className="search-books">
            <div className="search-books-bar">
            <Link
            to='/'>
              <button className="close-search" >Close
              </button>
            </Link>

              <div className="search-books-input-wrapper">
               
                <input type="text" 
                placeholder="Search by title or author"
                value = {query} 
                onChange = {(event)=>this.Search(event.target.value)}/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              {showingBooks.map((book)=>(
                <li key ={book.id}>
                    <Book book ={book} onUpdateBookShelf = {onUpdateBookShelf}/>
                    </li>
              ))}         
              </ol>
            </div>
          </div>  
            </div>
        )
    }
}
