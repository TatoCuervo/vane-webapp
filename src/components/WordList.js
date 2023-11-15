import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addWord, removeWord, reset } from "../store";

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
      <h1 className="text-4xl font-extrabold dark:text-white">APP Store</h1>
      <input
        value={inputValue}
        onChange={handleOnChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
