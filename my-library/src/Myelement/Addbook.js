import React from 'react'

class Addbook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {titel: '',author:'',year:'',isbn:'',url:'',blurb:''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event,) {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit(event) {
    const { titel,author,year,isbn,url,blurb } = this.State
     event.preventDefault();
     alert("Submitted: " );
  }

  render(){
    return(
      <div className="welcome  book">
         
         
         {/* Create From */}
         <form className="ui from" onSubmit={this.handleSubmit}>
            <div className="field">
              <label>Title : </label><br/>
              <input type="text" name="titel" placeholder='Enter the title of the book' value={this.state.titel} onChange={this.handleChange}/>
            </div>
            <div className="field">
              <label>Author : </label><br/>
              <input type="text" name="author" placeholder='Enter the name of the author of the book' value={this.state.author} onChange={this.handleChange}/>
            </div>
            <div className="field">
              <label>Year : </label><br/>
              <input type="text" name="year" placeholder='Enter the year in which the book was written' value={this.state.year} onChange={this.handleChange}/>
            </div>
            <div className="field">
              <label>ISBN : </label><br/>
              <input type="text" name="isbn" placeholder='Eter the ISBN number on the book ' value={this.state.isbn} onChange={this.handleChange}/>
            </div>
            <div className="field">
              <label>Cover Image URL : </label><br/>
              <input type="text" name="url" placeholder='Enter the URL for the cover image of the book' value={this.state.url} onChange={this.handleChange}/>
            </div>
            <div className="field">
              <label>Descripption/Blurb : </label><br/>
              <input type="text" name="blurb" placeholder='Enter a descripption/blurb of the book' value={this.state.blurb} onChange={this.handleChange}/>
            </div>
            <input type="submit" value="Submit"/>




         </form>

      </div>
    );
  }
  
}

export default Addbook;





