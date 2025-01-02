import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useRegisterAdminMutation } from "../redux/slices/api/authApiSlice";
import { toast } from "sonner";
import PetCareLogo from "../assets/PetCare.png";

const AdminSignup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
    title: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const [registerAdmin, { isLoading }] = useRegisterAdminMutation();

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      await registerAdmin(formData).unwrap();
      toast.success("Admin registered successfully! Redirecting to login...");
      setTimeout(() => {
        navigate("/log-in");
      }, 2000);
    } catch (err) {
      setError(err?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col items-center gap-6">
        <img src={PetCareLogo} alt="PetCare Logo" className="h-24" />
        <form
          onSubmit={handleSubmit}
          className="form-container w-full max-w-lg flex flex-col gap-6 bg-white py-14 px-20"
        >
          <div>
            <p className="text-blue-600 text-3xl font-bold text-center">
              Create Admin Account
            </p>
            <p className="text-center text-base text-gray-700">
              Register with your credentials.
            </p>
          </div>

          <div className="flex flex-col gap-4 w-96">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-md"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-md"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-md"
              />
            </div>

            <div>
              <label htmlFor="role" className="block text-sm font-medium">
                Role
              </label>
              <input
                type="text"
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-md"
              />
            </div>

            <div>
              <label htmlFor="title" className="block text-sm font-medium">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-md"
              />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              className="w-full h-10 bg-blue-700 text-white rounded-md hover:bg-blue-800 mt-7"
              disabled={isLoading}
            >
              {isLoading ? "Submitting..." : "Sign Up"}
            </button>
          </div>
          <Link
            to="/log-in"
            className="text-sm text-center text-blue-600 hover:underline"
          >
            Already a user? Log in
          </Link>
        </form>
      </div>
    </div>
  );
};

export default AdminSignup;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { useRegisterAdminMutation } from "../redux/slices/api/authApiSlice";
// import { toast } from "sonner";
// import PetCareLogo from "../assets/PetCare.png";

// const AdminSignup = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     role: "",
//     title: "",
//   });
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();
//   const { user } = useSelector((state) => state.auth);
//   const [registerAdmin, { isLoading }] = useRegisterAdminMutation();

//   useEffect(() => {
//     // Redirect if user is logged in
//     if (user) {
//       navigate("/dashboard");
//     }
//   }, [user, navigate]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);

//     try {
//       await registerAdmin(formData).unwrap();
//       toast.success("Admin registered successfully! Redirecting to login...");
//       setTimeout(() => {
//         navigate("/log-in");
//       }, 2000); // Pause for 2 seconds before redirecting
//     } catch (err) {
//       setError(err?.data?.message || "Registration failed");
//     }
//   };

//   return (
//     <div className="w-full min-h-screen flex items-center justify-center bg-[#f3f4f6]">
//       <div className="flex flex-col items-center gap-6">
//         {/* Logo */}
//         <img src={PetCareLogo} alt="PetCare Logo" className="h-24" />
//         {/* Signup Container */}
//         <form
//           onSubmit={handleSubmit}
//           className="form-container w-full max-w-md flex flex-col gap-y-8 bg-white px-10 py-14 shadow-md rounded-lg"
//         >
//           <div className="">
//             <p className="text-blue-600 text-3xl font-bold text-center">
//               Create Admin Account
//             </p>
//             <p className="text-center text-base text-gray-700 ">
//               Register with your credentials.
//             </p>
//           </div>

//           <div className="flex flex-col gap-y-5">
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-2 border rounded-full"
//               />
//             </div>

//             <div>
//               <label htmlFor="email" className="block text-sm font-medium">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-2 border rounded-full"
//               />
//             </div>

//             <div>
//               <label htmlFor="password" className="block text-sm font-medium">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-2 border rounded-full"
//               />
//             </div>

//             <div>
//               <label htmlFor="role" className="block text-sm font-medium">
//                 Role
//               </label>
//               <input
//                 type="text"
//                 id="role"
//                 name="role"
//                 value={formData.role}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-2 border rounded-full"
//               />
//             </div>

//             <div>
//               <label htmlFor="title" className="block text-sm font-medium">
//                 Title
//               </label>
//               <input
//                 type="text"
//                 id="title"
//                 name="title"
//                 value={formData.title}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-2 border rounded-full"
//               />
//             </div>

//             {error && <p className="text-red-500 text-sm">{error}</p>}

//             <button
//               type="submit"
//               className="w-full h-10 bg-blue-700 text-white rounded-full hover:bg-blue-800"
//               disabled={isLoading}
//             >
//               {isLoading ? "Submitting..." : "Sign Up"}
//             </button>
//           </div>
//           <Link
//             to="/log-in"
//             className="text-sm text-center text-blue-600 hover:underline"
//           >
//             Already a user? Log in
//           </Link>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AdminSignup;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useRegisterAdminMutation } from "../redux/slices/api/authApiSlice";
// import PetCareLogo from "../assets/PetCare.png";

// const AdminSignup = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     role: "",
//     title: "",
//   });
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();
//   const [registerAdmin, { isLoading }] = useRegisterAdminMutation();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const user =
//     useSelector((state) => state.auth.user) ||
//     JSON.parse(localStorage.getItem("userInfo"));
//   useEffect(() => {
//     if (user) {
//       navigate("/dashboard"); // Redirect to dashboard if logged in
//     }
//   }, [user]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);

//     try {
//       await registerAdmin(formData).unwrap();
//       alert("Admin registered successfully!");
//       navigate("/login");
//     } catch (err) {
//       setError(err?.data?.message || "Registration failed");
//     }
//   };

//   return (
//     <div className="w-full min-h-screen flex items-center justify-center bg-[#f3f4f6]">
//       <div className="flex flex-col items-center gap-6">
//         {/* Logo */}
//         <img src={PetCareLogo} alt="PetCare Logo" className="h-24" />
//         {/* Signup Container */}
//         <form
//           onSubmit={handleSubmit}
//           className="form-container w-full max-w-md flex flex-col gap-y-8 bg-white px-10 py-14 shadow-md rounded-lg"
//         >
//           <div className="">
//             <p className="text-blue-600 text-3xl font-bold text-center">
//               Create Admin Account
//             </p>
//             <p className="text-center text-base text-gray-700 ">
//               Register with your credentials.
//             </p>
//           </div>

//           <div className="flex flex-col gap-y-5">
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-2 border rounded-full"
//               />
//             </div>

//             <div>
//               <label htmlFor="email" className="block text-sm font-medium">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-2 border rounded-full"
//               />
//             </div>

//             <div>
//               <label htmlFor="password" className="block text-sm font-medium">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-2 border rounded-full"
//               />
//             </div>

//             <div>
//               <label htmlFor="role" className="block text-sm font-medium">
//                 Role
//               </label>
//               <input
//                 type="text"
//                 id="role"
//                 name="role"
//                 value={formData.role}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-2 border rounded-full"
//               />
//             </div>

//             <div>
//               <label htmlFor="title" className="block text-sm font-medium">
//                 Title
//               </label>
//               <input
//                 type="text"
//                 id="title"
//                 name="title"
//                 value={formData.title}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-2 border rounded-full"
//               />
//             </div>

//             {error && <p className="text-red-500 text-sm">{error}</p>}

//             <button
//               type="submit"
//               className="w-full h-10 bg-blue-700 text-white rounded-full hover:bg-blue-800"
//               disabled={isLoading}
//             >
//               {isLoading ? "Submitting..." : "Sign Up"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AdminSignup;
