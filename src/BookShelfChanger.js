import React, { Component } from 'react'

export default class BookShelfChanger extends Component {
    state = {
        selected: this.props.book.shelf
    }
    
    handleChange = (e)=>{
       this.setState({selected:e.target.value})
       this.props.onUpdateBookShelf(this.props.book,e.target.value)

    }
    // componentDidUpdate(prevProps) {
    //     if (prevProps.book.shelf !== this.props.book.shelf) {
    //       this.setState({
    //         selected: this.props.book.shelf
    //       });
    //     }
    //   }

    render() {
       
        const {selected} = this.state
        return (
            <div className="book-shelf-changer">
            <select value={selected} onChange = {this.handleChange}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
            </div>
        )
    }
}
