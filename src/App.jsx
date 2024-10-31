import { useState } from 'react'
import React from 'react';
import './App.css'

const questions = [
  {
    title: '1',
    variants: ['Верно', '2', '3'],
    correct: 0,
  },

  {
    title: '2',
    variants: ['4', 'Верно', '5'],
    correct: 1,
  },
  {
    title: '3',
    variants: ['6', '7', 'Верно'],
    correct: 2,
  },

]


function Result({ correct }) {
  return (
    <div className='result'>
      <h2>Верных ответов {correct} из {questions.length}</h2>
      <a href="/">
        <button>Попробовать снова</button>
      </a>

    </div>
  );
}

function Game({ step, question, onClickVariant }) {

  return (
    <>
      <h1>{question.title}</h1>
      <ul className='spisok'>
        {
          question.variants.map((text, index) => (
            <li onClick={() => onClickVariant(index)} key={text}>
              {text} </li>
          ))
        }
      </ul>

    </>
  );
}

export default function App() {

  const [step, setStep] = React.useState(0)
  const [correct, setCorrect] = React.useState(0)
  const question = questions[step];

  const onClickVariant = (index) => {
    setStep(step + 1);

    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  }

  return (
    <div className='App'>
      {
        step != questions.length ? <Game question={question} onClickVariant={onClickVariant} questions={questions} /> :
          <Result correct={correct} />
      }

    </div>
  )
};

