import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'
import {Route} from 'react-router-dom'


class BooksApp extends React.Component {
  state = {
   
    books : []
    
  }

  

 async componentDidMount () {
    const books = await BooksAPI.getAll()
      this.setState({ 
        books:books })
   
  }
  

  updateBookShelf = (book,shelf)=>{
    BooksAPI.update(book,shelf)
    book.shelf=shelf
    this.setState(currentState => ({
      books: currentState.books.filter((stateBook) =>(
         stateBook.id !== book.id
         )).concat(book)
    }))
   
   
  }



  render() {
    const {books} = this.state
     
      // <SearchBooks/>
    return (
      <div className="app">
       
        
      <Route exact path='/' render ={()=>(
      <ListBooks
      books = {this.state.books} onUpdateBookShelf = {this.updateBookShelf}/>
      )}/>

      <Route path ='/search' render={({history})=>(
        <SearchBooks  books = {this.state.books} onUpdateBookShelf = {this.updateBookShelf} />
        )} />
        
      </div>
    )
  }
}

export default BooksApp
