import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addWord, removeWord } from "../store/index";

// NOTE: Dummy component to Add, Remove and Display a list of words from the store.

function WordList() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const wordlist = useSelector((state) => {
    return state.words;
  });

  const handleOnChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddWord = () => {
    dispatch(addWord(inputValue));
    setInputValue("");
  };

  const handleDeleteWord = () => {
    dispatch(removeWord(inputValue));
    setInputValue("");
  };

  let content = wordlist.map((word) => <div key={word}>{word}</div>);

  return (
    <div>
      <h1>APP Store</h1>
      <input
        value={inputValue}
        onChange={handleOnChange}
        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
      ></input>
      <button
        onClick={handleAddWord}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Word
      </button>
      <button
        onClick={handleDeleteWord}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Delete Word
      </button>
      <div>{content}</div>
    </div>
  );
}

export default WordList;
