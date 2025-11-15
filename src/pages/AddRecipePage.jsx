import React, { useState, useRef } from 'react';

const AddRecipePage = () => {
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');

  const ingredientsRef = useRef(null);
  const stepsRef = useRef(null);

  const handleResize = (ref) => {
    ref.current.style.height = 'auto';
    ref.current.style.height = `${ref.current.scrollHeight}px`;
  };

  const handleIngredientsChange = (e) => {
    setIngredients(e.target.value);
    handleResize(ingredientsRef);
  };

  const handleStepsChange = (e) => {
    setSteps(e.target.value);
    handleResize(stepsRef);
  };

  return (
    <section className="bg-[#f9fafb]">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <form>
            <h2 className="text-3xl text-center font-bold mb-6">Add Recipe</h2>

            {/* Recipe Name */}
            <div className="mb-4">
              <label className="block text-[#6b7280] font-bold mb-2">
                Recipe Name
              </label>
              <input
                type="text"
                className="w-full border rounde-lg p-3 text-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7bae7f]"
                placeholder="e.g. Chicken Noodle Soup"
              />
            </div>

            {/* Ingredients */}
            <div className="mb-4">
              <label className="block text-[#6b7280] font-bold mb-2">
                Ingredients
              </label>
              <textarea
                ref={ingredientsRef}
                value={ingredients}
                onChange={handleIngredientsChange}
                rows={10}
                className="w-full border rounde-lg p-3 text-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7bae7f] resize-none overflow-hidden"
                placeholder="Paste or type your ingredients here"
              ></textarea>
            </div>

            {/* Steps */}
            <div className="mb-4">
              <label className="block text-[#6b7280] font-bold mb-2">
                Steps
              </label>
              <textarea
                ref={stepsRef}
                value={steps}
                onChange={handleStepsChange}
                rows={10}
                className="w-full border rounde-lg p-3 text-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7bae7f] resize-none overflow-hidden"
                placeholder="Paste or type your steps here"
              ></textarea>
            </div>

            <button className="bg-[#7bae7f] hover:bg-[#f2e9e4] hover:text-[#6b7280] text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all">
              Save Recipe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddRecipePage;
