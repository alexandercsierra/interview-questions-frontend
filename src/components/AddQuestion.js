import React from 'react'

class AddQuestion extends React.Component{
    constructor(){
        super()
        this.state = {
            newQuestion: {
                text: '',
                category: ''
            }
        }

    }

    handleChanges = (e) => {
        this.setState({
            ...this.state,
            newQuestion: {
                ...this.state.newQuestion,
                text: e.target.value
            }
        })
    }


    onSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.newQuestion.text)
        //should make axios call to server to add question
        this.clearForm()
    }

    clearForm = () => {
        this.setState({
            ...this.state,
            newQuestion: {
                text: ''
            }
        })
    }

    render(){
        return (
        <div>
            <form onSubmit={this.onSubmit}>
                <input name='text' placeholder='enter a question' onChange={this.handleChanges} value={this.state.newQuestion.text}/>
                <button>Submit</button>
            </form>
        </div>
        )
    }
}

export default AddQuestion