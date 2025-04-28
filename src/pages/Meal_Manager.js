import React ,{useState , useEffect} from 'react'

function Meal_Manager() {
    const fatLose = {
        calories : "You need to take low calories than your current calories intake.",
        info : "You need to take more protein than fat. ",
    }
    const fatLoseMeals = [
        "Oatmeal with Berries and Cinnamon",
        "Scrambled Eggs with Spinach and Tomatoes",
        "Greek Yogurt with Sliced Almonds and Honey",
        "Avocado Toast with Poached Egg",
        "Apple Slices with Almond Butter",
        "Carrot and Cucumber Sticks with Hummus",
        "Grilled Chicken Salad with Mixed Greens",
        "Quinoa Salad with Chickpeas and Vegetables",
        "Turkey and Avocado Wrap with Whole Grain Tortilla",
        "Lentil Soup with Mixed Green Salad",
        "Cottage Cheese with Pineapple Chunks",
        "Whole Grain Crackers with Tuna or Salmon",
        "Greek Yogurt with Cucumber and Pepper",
        "Baked Salmon with Steamed Broccoli and Quinoa",
        "Stir-fried Tofu with Mixed Vegetables and Brown Rice",
        "Grilled Shrimp Skewers with Roasted Brussels Sprouts",
        "Turkey Chili with Black Beans and Mixed Greens",
        "Mixed Berry Smoothie with Spinach and Protein Powder",
        "Quinoa Bowl with Black Beans, Avocado, and Salsa",
        "Grilled Veggie Wrap with Hummus",
        "Cauliflower Rice Stir-fry with Chicken or Tofu",
        "Vegetable and Bean Soup with Whole Grain Bread",
        "Egg White Omelette with Spinach and Mushrooms",
        "Tuna Salad with Leafy Greens and Balsamic Dressing",
        "Stuffed Bell Peppers with Lean Ground Turkey",
        "Roasted Chicken Breast with Steamed Asparagus",
        "Spaghetti Squash with Marinara Sauce and Turkey Meatballs",
        "Cottage Cheese with Sliced Peaches",
        "Almond Crusted Baked Chicken with Green Beans",
      ];

    const mainWeight = {
        calories : "You need to take same amount of calori that your current intaking.",
        info : "You need to take the same food that you taking currently or if you want to build muscles and maintain the same weight so you need to loss fat and work on your muscles development. ",
    }
    const MainWeighMeals = [
        "Grilled Chicken Breast with Steamed Vegetables",
        "Baked Fish with Quinoa and Roasted Asparagus",
        "Tofu Stir-fry with Mixed Vegetables and Brown Rice",
        "Lean Beef or Turkey Burgers with a Side Salad",
        "Lentil Soup with Whole Grain Bread",
        "Chickpea Curry with Spinach and Brown Rice",
        "Portobello Mushroom Burgers with Avocado and Sweet Potato Fries",
        "Vegan Tacos with Black Beans, Salsa, and Guacamole",
        "Zucchini Noodles (Zoodles) with Marinara Sauce and Grilled Shrimp",
        "Cauliflower Crust Pizza with Turkey Pepperoni and Veggies",
        "Eggplant Lasagna with Ricotta and Marinara Sauce",
        "Stir-fried Veggies with Tofu or Chicken in a Light Soy Sauce",
        "Bean and Vegetable Chili with a Side of Whole Grain Bread",
        "Quinoa Salad with Black Beans, Corn, and Bell Peppers",
        "Lentil and Vegetable Stew served with a Side of Barley",
        "Spinach and Kale Salad with Roasted Chickpeas and a Citrus Vinaigrette",
        "Whole Grain Wrap filled with Turkey, Lettuce, and Hummus",
        "Greek Yogurt Parfait with Granola and Berries",
        "Canned Tuna mixed with Avocado, served on Whole Grain Crackers",
        "Stir-fried Vegetables with Pre-cooked Shrimp and a Store-bought Sauce",
        "Chicken and Vegetable Stir-fry with Noodles",
        "Quinoa Pilaf with Mixed Vegetables and Grilled Tofu",
        "Spaghetti Squash with Marinara Sauce and Ground Turkey",
        "Lentil Soup with Carrots, Celery, and Onions",
        "Greek Salad with Feta Cheese, Olives, and Cucumbers",
        "Cobb Salad with Grilled Chicken, Bacon, Avocado, and Hard-boiled Eggs",
        "Spinach Salad with Strawberries, Almonds, and Goat Cheese",
        "Caesar Salad with Grilled Shrimp or Salmon",
        "Minestrone Soup with Whole Grain Bread",
        "Beef Stew with Root Vegetables",
        "Chicken Noodle Soup with Plenty of Vegetables",
        "Butternut Squash Soup with a Sprinkle of Nutmeg"
      ];
    
    const gainWeight={
        calories : "You need to take more calories than your current calori intake.",
        info : "For gaining weight as well as muscles you need to take more diet more protein than you taking currently.",
    }  
    const gainWeightMeals = [
        "Grilled Chicken Breast with Steamed Vegetables and Brown Rice",
  "Baked Fish with Quinoa and Roasted Vegetables",
  "Tofu Stir-fry with Mixed Vegetables and Basmati Rice",
  "Lean Beef or Turkey Burgers with Sweet Potato Fries",
  "Creamy Lentil Soup with Whole Grain Bread",
  "Chickpea and Spinach Curry with Naan Bread",
  "Veggie Burger with Avocado and French Fries",
  "Black Bean Tacos with Rice, Beans, and Guacamole",
  "Pasta Alfredo with Grilled Chicken and Garlic Bread",
  "Cheese and Spinach Stuffed Shells with Caesar Salad",
  "Beef and Bean Burritos with Spanish Rice and Refried Beans",
  "Baked Macaroni and Cheese with Steamed Broccoli",
  "Peanut Butter Banana Smoothie with Oats and Honey",
  "Trail Mix with Nuts, Seeds, Dried Fruit, and Chocolate Chips",
  "Avocado Toast with Eggs and Bacon",
  "Yogurt Parfait with Granola, Berries, and Nuts",
  "Quinoa and Black Bean Salad with Avocado and Corn",
  "Vegetable Stir-fry with Tofu and Brown Rice",
  "Eggplant Parmesan with Whole Wheat Pasta",
  "Spinach and Mushroom Risotto",
  "Sweet Potato and Black Bean Enchiladas",
  "Chickpea and Vegetable Tagine with Couscous"
      ];


      const [btn , setBtn] = useState("fatLoseMeals"); //logic for btns showing the data::    

    //   const [mealNames, setMealNames] = useState([]);

    //   useEffect(() => {
        // Create an array of meal names
        // console.log(btn);
        // var  names;
        // if(btn === "fatLoseMeals"){
            // names =  fatLoseMeals.map(meal => meal.name);
        // }
        // if(btn === "MainWeighMeals"){
            // names =  MainWeighMeals.map(meal => meal.name);
        // }
        
        // setMealNames(names);
    //   }, []);

    function handler1(){
        setBtn("fatLoseMeals");
    }
    function handler2(){
        setBtn("MainWeighMeals")
    }
    function handler3(){
        setBtn("gainWeightMeals")
    }


  return (
    <div className=' mt-32 '>
        <div className=' text-center '>
          <div className='text-4xl font-bold max-sm:text-2xl'>Meal Manager</div> 
          <div className='text-2xl font-semibold text-red-700 max-md:text-xl max-sm:text-xl'>This all data is written by me so if i did any mistake please send a feedback to me.</div>
        </div>
        
        <div className='flex flex-row justify-center gap-16 text-xl mt-5  max-md:gap-3 max-sm:text-sm max-sm:gap-1  '>
            <div className=' bg-blue-600 p-2 rounded-2xl hover:bg-blue-800'> <button onClick={handler1}> FatLose </button> </div>
            <div className=' bg-blue-600 p-2 rounded-2xl hover:bg-blue-800'> <button onClick={handler2}> Maintain Weight </button> </div>
            <div className=' bg-blue-600 p-2 rounded-2xl hover:bg-blue-800'> <button onClick={handler3}> Gain Weight </button> </div>
        </div>

        <div className=' flex flex-col gap-4'> 
         <div className=''>
            {
                btn === "fatLoseMeals" &&
                <div>
                    <div className=' mt-6 text-center text-lg font-serif  '>
                        <p className=' '>{fatLose.calories}</p>
                        <p>{fatLose.info}</p>
                   </div> 
                   <div className=" w-1/2 mx-auto p-4 bg-gray-100 rounded-lg shadow-md max-sm:w-full">
                        <h2 className="text-xl font-semibold mb-4">Meal Names:</h2>
                        <ul className="list-disc pl-6">
                          {fatLoseMeals.map((name, index) => (
                          <li key={index} className="text-gray-800">{name}</li> ))}
                       </ul>
                   </div>
                </div>
            }
            {
                btn === "MainWeighMeals" &&
                <div>
                    <div className=' mt-6 text-center text-lg font-serif  '>
                        <p className=' '>{mainWeight.calories}</p>
                        <p>{mainWeight.info}</p>
                   </div> 
                   <div className=" w-1/2 mx-auto p-4 bg-gray-100 rounded-lg shadow-md max-sm:w-full">
                        <h2 className="text-xl font-semibold mb-4">Meal Names:</h2>
                        <ul className="list-disc pl-6">
                          {MainWeighMeals.map((name, index) => (
                          <li key={index} className="text-gray-800">{name}</li> ))}
                       </ul>
                   </div>
                </div>
            }
            {
                btn === "gainWeightMeals" &&
                <div>
                    <div className=' mt-6 text-center text-lg font-serif  '>
                        <p className=' '>{gainWeight.calories}</p>
                        <p>{gainWeight.info}</p>
                   </div> 
                   <div className=" w-1/2 mx-auto p-4 bg-gray-100 rounded-lg shadow-md max-sm:w-full">
                        <h2 className="text-xl font-semibold mb-4">Meal Names:</h2>
                        <ul className="list-disc pl-6">
                          {gainWeightMeals.map((name, index) => (
                          <li key={index} className="text-gray-800">{name}</li> ))}
                       </ul>
                   </div>
                </div>
            }

        </div>  
       </div> 




        <div className=' text-center mt-4 text-lg'>
            <p>If you want any of this above recipe than copy that one and <a   href="https://www.youtube.com/" className=' text-blue-800 font-bold' >Click ! </a> </p>          
        </div>

    </div>
  )
}

export default Meal_Manager