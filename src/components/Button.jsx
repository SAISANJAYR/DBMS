/* Reusable Button component */
function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
    >
      {text}
    </button>
  );
}

export default Button;
