import { useState, useEffect } from 'react';

function Demo() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredCategory, setFilteredCategory] = useState('Core Yoga'); // Set initial filtered category here

  useEffect(() => {
    fetch('https://yoga-api-nzy4.onrender.com/v1/categories')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        return res.json();
      })
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // No need for filterItem function

  // Filter items based on selected category
  const filteredItems = categories.filter((category) => category.category_name.includes(filteredCategory));

  return (
    <div className="container mx-auto p-4 ">
      <h1 className="text-3xl font-bold text-center mb-4">Yogas</h1>
      <p className="text-xl font-semibold text-center mb-4">Select your category</p>
      <hr className="mb-6" />

      {/* Filter buttons */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-8 items-center mb-8">
        {['Core Yoga', 'Seated Yoga', 'Strengthening Yoga', 'Chest Opening Yoga', 'Backbend Yoga', 'Forward Bend Yoga', 'Hip Opening Yoga', 'Standing Yoga', 'Restorative Yoga', 'Arm Balance Yoga', 'Balancing Yoga', 'Inversion Yoga'].map((category) => (
          <button
            key={category}
            onClick={() => setFilteredCategory(category)}
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${filteredCategory === category ? 'bg-blue-700' : ''}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Display yoga categories */}
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-500">Error: {error}</p>
      ) : (
        // <div className="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className=" flex flex-row">
          {filteredItems.map((category) => (
            <div key={category.id} className="bg-white rounded-lg shadow-md p-4">
              <h2 className="text-lg font-semibold">{category.category_name}</h2>
              <p className="text-sm text-gray-600 mb-4">{category.category_description}</p>
              {/* Display yoga poses */}
              <div className="flex flex-wrap -mx-4">
                   {category.poses.map((pose) => (
                   <div key={pose.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-4">
                      <div className="flex flex-row w-full bg-white rounded-lg shadow-md p-4">
                          <div>
                            <img src={pose.url_svg} alt='Images' className=' w-full' />
                          </div>
                          <div>
                               <h3 className="text-base font-semibold">{pose.english_name}</h3>
                                <p className="text-sm text-gray-600">{pose.pose_description}</p>
                          </div>
                       </div>
                   </div>
                 ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Demo;
