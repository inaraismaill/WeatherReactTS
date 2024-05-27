// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";

// function Header() {
//   const {value} = useSelector((store) => store.countryID);
//   // const dispatch = useDispatch();
//   const [name, setName] = useState(0);

// // console.log(value);
//   const getName = (e) => {
//     console.log(name);
//   };

//   return (
//     <div id="body-top">
//       <div className="container mx-auto px-4 py-8">
//         <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
//           Weather Information
//         </h1>
//         <h2 className="hidden">City name:</h2>
//         <form onSubmit={getName} id="form" className="flex flex-wrap items-center mb-4">
//           <input
//             type="text"
//             onChange={(e) => setName(e.target.value.toLocaleLowerCase().trim())}
//             placeholder="City"
//             id="search-input"
//             className="border text-black border-blue-500 rounded-lg p-2 mb-4 md:mr-3 w-full md:w-auto"
//           />
//           <button
//             type="submit"
//             id="search-button"
//             className="bg-blue-500 mb-4 text-white px-4 py-2 rounded-xl md:w-auto w-full"
//           >
//             Search
//           </button>
//         </form>
//         <div id="weather-top" className="flex flex-wrap justify-center" />
//       </div>
//     </div>
//   );
// }

// export default Header;
