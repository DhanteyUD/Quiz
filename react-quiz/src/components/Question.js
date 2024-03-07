import Options from "./Options";

function Question({ question, index, dispatch, answer }) {
  return (
    <div>
      <h4>
        {index + 1}. {question?.question}
      </h4>

      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Question;
