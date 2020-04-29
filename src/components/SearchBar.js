import React from 'react';

class SearchBar extends React.Component {
    onInputChange(event) {
        console.log(event.target.value);
    }
    
    onInputClick(event) {
        console.log(event.target.value);
    }
    onFormSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(this.state.term)
    }
    state = {term: ''}
    render() {
        return(
            <div className="ui segment">
                <form onSubmit={(event) => this.onFormSubmit(event)} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" 
                        value={this.setState.term}
                        onChange={(e) => this.setState({term: e.target.value})}
                        onClick={this.onInputClick}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;