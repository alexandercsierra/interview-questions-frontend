import React, {useState, useEffect} from 'react'
import gql from 'graphql-tag'
import {Query} from 'react-apollo'

const QuestionList = () => {
    const [questions, setQuestions] = useState([{text: 'I am the first question'}])

    const q_as = gql`
    {questions {
        text
      }
    }
    `;

    useEffect(()=>{

    },[])



    return (
        <div>
            Question List
            <div>
                {questions.map((q, i)=>{
                    return <div key={i}>
                        <p>{q.text}</p>
                    </div>
                })}
            </div>
            <div>
                <Query query={q_as}>
                    
                    {({data, loading})=>{
                        if (loading){
                            return <span>Loading...</span>
                        } else {
                            console.log(data.questions)
                            setQuestions(data.questions)
                            return null
                        }
                    }}
                </Query>
            </div>
        </div>
    )
}

export default QuestionList