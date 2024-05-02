import React, { useState } from "react";
import "./style.css"

const question= [
    {id: 1, question: "What language React based on ?", answer: "Javascript"}, 
    {id: 2, question: "What is the building blocks of React apps ?", answer: "Components"}, 
    {id: 3, question: "How to pass data from parent to child components ?", answer: "Props"}, 
    {id: 4, question: "How to give components memory ?", answer: "useState hooks"}, 
    {id: 5, question: "Whatdo we call an input element that is completed synchronised with state?", answer: "Controlled Element"}, 
    {id: 6, question: "What's the name of the syntex we use to describe a UI in React  ?", answer: "JSX"}, 
]
export default function FlashCard(){
    const [selectedId , setSelectedId] =useState(null)

    function clickHandler(id){
        setSelectedId(id !== selectedId ? id : null)
        console.log(id);
    }

    return(
        <div className="flashcards">
            {question.map((question) => (
            <div key={question.id} onClick={ ()=> clickHandler(question.id)}
            className={question.id === selectedId ? "selected" : ""} > 
            <p> {question.id === selectedId ? question.answer : question.question}</p>
            </div> ))}
        </div>
    )
}