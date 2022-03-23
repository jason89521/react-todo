const Form = () => {
  return (
    <form className="flex items-center rounded-lg bg-white px-4 py-3">
      <button className="h-5 w-5 rounded-full border border-gray-300"></button>
      <input className="mt-1 ml-4 text-sm outline-none" placeholder="Create a new todos..." />
    </form>
  );
};

export default Form;
