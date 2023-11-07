// // // // import { useState } from 'react';
// // // // import axios from 'axios';
// // // // import { useRouter } from 'next/navigation';
// // // // import { registerUser } from '../utilities/utils';

// // // // interface FormData {
// // // //     first_name: string;
// // // //     last_name: string;
// // // //     email: string;
// // // //     national_Id: string;
// // // //     password: string;
// // // // }
// // // // const useRegister = () => {
// // // //   const router = useRouter();
// // // //   const [registerSuccess, setRegisterSuccess] = useState(false);
// // // //   const [user, setUser] = useState<string | object>();
// // // //   const [error, setError] = useState<{ [key: string]: string | undefined }>({});
// // // // const [formData, setFormData] = useState<FormData>(); 

// // // //   const handleRegister = async (formData: FormData) => {
// // // //     try {
// // // //       const response = await axios.post('/api/register-users', formData, {
// // // //         headers: {
// // // //           'Content-Type': 'application/json',
// // // //         },
// // // //       });
  
// // // //       const createdUser = response.data;
// // // //       if (createdUser.message === 'Registration Successful') {
// // // //         setError(createdUser.message);
// // // //         setRegisterSuccess(true);
// // // //         setTimeout(() => {
// // // //           router.push('/login');
// // // //         }, 3000);

// // // //       } else {
// // // //         setError(createdUser.error);
// // // //       }
// // // //     } catch (error) {
// // // //       console.error(error);
// // // //     }
// // // //   };
  
// // // //   return { user,setUser, error,setError,formData,setFormData, handleRegister };
// // // // };
// // // // export default useRegister;



// // // import { useState } from "react";
// // // import axios from 'axios';
// // // import { useRouter } from "next/navigation";


// // // // interface FormData {
// // // //     username: string;
// // // //     first_name: string;
// // // //     last_name: string;
// // // //     role: string;
// // // //     location: string;
// // // //     phone_number: string;
// // // // }


// // // const useRegister = () => {
// // // const router = useRouter();
// // // const [user, setUser] = useState<any>(null);
// // // const [error, setError] = useState<string>("");
// // // const [message, setMessage] = useState<string>("");

// // // const handleRegister = async (formData: FormData) => {
// // //     try {
// // //         const response = await axios.post('/api/register-users', formData, {
// // //             headers: {
// // //                 'Content-Type': 'application/json',
// // //             },
// // //         });
        
// // //     const createdUser = response.data;
    
// // //     if (createdUser.message === 'success registration') {
// // //         setUser(createdUser);
// // //         setMessage(createdUser.message);
// // //         // setMessage("Registration successful.");
        
// // //         setTimeout(() => {
// // //         router.push("/login");}, 5000);

// // //     } 
// // // //     else if (createdUser) {
// // // //     setUser(createdUser);
// // // //     setError("");
// // // //     setMessage("Registration successful.");
// // // //     setTimeout(() => {
// // // //     router.push("/login");}, 5000);
    
// // // // }
// // // else {
// // //     setError(createdUser.error);
// // //     // setMessage("");
    
// // //     setTimeout(() => {
// // //         setError("");
// // //     }, 5000);
// // // }
// // // } catch (error) {
// // //     console.error(error)
// // //     // setUser(null);
// // //     // setError("User with this email address already exists.");
// // //     // setMessage("");
    
// // //     setTimeout(() => {
// // //         setError("");
// // //     }, 6000);
// // // }
// // // };


// // // return { handleRegister, user, error, message };
// // // };
// // // export default useRegister;

// // import { useState } from "react";
// // import axios from 'axios';
// // import { useRouter } from "next/navigation";
// // interface FormData {
// // first_name: string;
// // last_name: string;
// // email: string;
// // national_Id: string;
// // password: string;
// // }
// // const useRegister = () => {
// // const router = useRouter();
// // const [user, setUser] = useState<any>(null);
// // const [error, setError] = useState<string>("");
// // const [message, setMessage] = useState<string>("");
// // const handleRegister = async (formData: FormData) => {
// //     try {
// //         const response = await axios.post('/api/register-users', formData, {
// //             headers: {
// //                 'Content-Type': 'application/json',
// //             },
// //         });
// //     const createdUser = response.data;
// //     if (createdUser && createdUser.email) {
// //         setUser(createdUser);
// //         setError(createdUser.email);
// //         setMessage("Registration successful.");
// //         setTimeout(() => {
// //         router.push("/login");}, 5000);
// //     } 
// // //     else if (createdUser) {
// // //     setUser(createdUser);
// // //     setError("");
// // //     setMessage("Registration successful.");
// // //     setTimeout(() => {
// // //     router.push("/login");}, 5000);
// // // }
// // else {
// //     // setError("User with this email address already exists.");
// //     setMessage("");
// //     setTimeout(() => {
// //         setError("");
// //     }, 5000);
// // }
// // } catch (error) {
// //     setUser(null);
// //     setError("User with this email address aly exists.");
// //     setMessage("");
// //     setTimeout(() => {
// //         setError("");
// //     }, 6000);
// // }
// // };
// // return { handleRegister, user, error, message };
// // };
// // export default useRegister;



// // import { useState } from "react";
// // import axios from 'axios';
// // import { useRouter } from "next/navigation";
// // interface FormData {
// // first_name: string;
// // last_name: string;
// // email: string;
// // national_Id: string;
// // password: string;
// // }
// // const useRegister = () => {
// // const router = useRouter();
// // const [user, setUser] = useState<any>(null);
// // const [error, setError] = useState<string>("");
// // const [message, setMessage] = useState<string>("");
// // const handleRegister = async (formData: FormData) => {
// //     try {
// //         const response = await axios.post('/api/register-users', formData, {
// //             headers: {
// //                 'Content-Type': 'application/json',
// //             },
// //         });
// //     const createdUser = response.data;
// //     if (createdUser) {
// //         setUser(createdUser);
// //         setMessage(createdUser.message);
// //         setTimeout(() => {
// //         router.push("/login");}, 3000);
// //     }
// // else {
// //     // setError(error.message);
// //     console.log(createdUser)
// //     setTimeout(() => {
// //         setError("");
// //     }, 3000);
// // }
// // } catch (error:any) {
// //     setError(error.message);
// //     console.log(error.message)
// //     setTimeout(() => {
// //         setError("");
// //     }, 3000);
// // }
// // };
// // return {  user, error, message, handleRegister };
// // };
// // export default useRegister;


// import { useState } from "react";
// import axios from 'axios';
// import { useRouter } from "next/navigation";
// interface FormData {
// first_name: string;
// last_name: string;
// email: string;
// national_Id: string;
// password: string;
// }
// const useRegister = () => {
// const router = useRouter();
// const [user, setUser] = useState<any>(null);
// const [error, setError] = useState<string>("");
// const [message, setMessage] = useState<string>("");
// const handleRegister = async (formData: FormData) => {
//     try {
//         const response = await axios.post('/api/register-users', formData, {
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });
//     const createdUser = response.data;
//     if (createdUser) {
//         setUser(createdUser);
//         setMessage(createdUser.message);
//         setTimeout(() => {
//         router.push("/login");}, 3000);
//     }
// else {
//     // setError(error.message);
//     console.log(createdUser)
//     setTimeout(() => {
//         setError("");
//     }, 3000);
// }
// } catch (error:any) {
//     setError(error.message);
//     console.log(error.message)
//     setTimeout(() => {
//         setError("");
//     }, 3000);
// }
// };
// return {  user, error, message, handleRegister };
// };
// export default useRegister;


import { useState } from "react";
import axios from 'axios';
import { useRouter } from "next/navigation";
interface FormData {
first_name: string;
last_name: string;
email: string;
national_Id: string;
password: string;
}
const useRegister = () => {
const router = useRouter();
const [user, setUser] = useState<any>(null);
const [error, setError] = useState<string>("");
const [message, setMessage] = useState<string>("");
const handleRegister = async (formData: FormData, successMessage: string, errorMessage: string) => {
    try {
        const response = await axios.post('/api/register-users', formData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

    if (response.status == 201) {
        setUser(response.data);
        // setError("");
        setMessage(successMessage);
        setTimeout(() => {
        router.push("/login");}, 5000);
    }

else {
    setUser(null);
    setError(errorMessage);
    setTimeout(() => {
        setError("");
    }, 6000);
}
} catch (error) {
    setUser(null);
    setError(errorMessage);
    setMessage("");
    setTimeout(() => {
        setError("");
    }, 6000);
}
};
return { handleRegister, user, error, message };
};
export default useRegister;

// import { useState } from "react";
// import axios from 'axios';
// import { useRouter } from "next/navigation";

// interface FormData {
//   first_name: string;
//   last_name: string;
//   email: string;
//   national_Id: string;
//   password: string;
// }

// const useRegister = () => {
//   const router = useRouter();
//   const [user, setUser] = useState<any>(null);
//   const [error, setError] = useState<string>("");
//   const [message, setMessage] = useState<string>("");

//   const handleRegister = async (formData: FormData, successMessage: string, errorMessage: string) => {
//     try {
//       const response = await axios.post('/api/register-users', formData, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       const createdUser = response.data;

//       if (createdUser && createdUser.email) {
//         setUser(createdUser);
//         setError("");
//         setMessage(successMessage);
//         setTimeout(() => {
//           router.push("/login");
//         }, 5000);
//       } else {
//         setUser(null);
//         setError(errorMessage);
//         setMessage("");
//         setTimeout(() => {
//           setError("");
//         }, 6000);
//       }
//     } catch (error) {
//       setUser(null);
//       setError(errorMessage);
//       setMessage("");
//       setTimeout(() => {
//         setError("");
//       }, 6000);
//     }
//   };

//   return { handleRegister, user, error, message };
// };

// export default useRegister;



// import { useState } from "react";
// import axios from 'axios';
// import { useRouter } from "next/navigation";

// interface FormData {
//   first_name: string;
//   last_name: string;
//   email: string;
//   national_Id: string;
//   password: string;
// }

// const useRegister = () => {
//   const router = useRouter();
//   const [user, setUser] = useState<any>(null);
//   const [error, setError] = useState<string>("");
//   const [message, setMessage] = useState<string>("");

//   const handleRegister = async (formData: FormData, successMessage: string, errorMessage: string) => {
//     try {
//       const response = await axios.post('/api/register-users', formData, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
//       const createdUser = response.data;

//       if (createdUser && createdUser.email) {
//         setUser(createdUser);
//         setError("");
//         setMessage(successMessage);
//         setTimeout(() => {
//           router.push("/login");
//         }, 5000);
//       } else {
//         setUser(null);
//         setError(errorMessage);
//         setMessage("");
//         setTimeout(() => {
//           setError("");
//         }, 6000);
//       }
//     } catch (error) {
//       setUser(null);
//       setError(errorMessage);
//       setMessage("");
//       setTimeout(() => {
//         setError("");
//       }, 6000);
//     }
//   };

//   return { handleRegister, user, error, message };
// };

// export default useRegister;


// import { useState } from "react";
// import axios from 'axios';
// import { useRouter } from "next/navigation";

// interface FormData {
//   first_name: string;
//   last_name: string;
//   email: string;
//   national_Id: string;
//   password: string;
// }

// const useRegister = () => {
//   const router = useRouter();
//   const [user, setUser] = useState<any>(null);
//   const [error, setError] = useState<string>("");
//   const [message, setMessage] = useState<string>("");

//   const handleRegister = async (formData: FormData, successMessage: string, errorMessage: string) => {
//     try {
//       const response = await axios.post('/api/register-users', formData, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       const createdUser = response.data;

//       if (createdUser && createdUser.email) {
//         setUser(createdUser);
//         setError("");
//         setMessage(successMessage);
//         setTimeout(() => {
//           router.push("/login");
//         }, 5000);
//       } else {
//         setUser(null);
//         setError(errorMessage);
//         setMessage("");
//         setTimeout(() => {
//           setError("");
//         }, 6000);
//       }
//     } catch (error:any) {
//       if (error.response && error.response.status === 409) {
//         setUser(null);
//         setError(errorMessage);
//         setMessage("");
//         setTimeout(() => {
//           setError("");
//         }, 6000);
//       } else {
//         setUser(null);
//         setError("An error occurred during registration");
//         setMessage("");
//         setTimeout(() => {
//           setError("");
//         }, 6000);
//       }
//     }
//   };

//   return { handleRegister, user, error, message };
// };

// export default useRegister;



// import { useState } from "react";
// import axios from 'axios';
// import { useRouter } from "next/navigation";

// interface FormData {
//   first_name: string;
//   last_name: string;
//   email: string;
//   national_Id: string;
//   password: string;
// }

// const useRegister = () => {
//   const router = useRouter();
//   const [user, setUser] = useState<any>(null);
//   const [error, setError] = useState<string>("");
//   const [message, setMessage] = useState<string>("");

//   const handleRegister = async (formData: FormData, successMessage: string, errorMessage: string) => {
//     try {
//       const response = await axios.post('/api/register-users', formData, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       const createdUser = response.data;

//       if (response.status === 200 && createdUser && createdUser.email) {
//         setUser(createdUser);
//         setError("");
//         setMessage(successMessage);
//         setTimeout(() => {
//           router.push("/login");
//         }, 5000);
//       } else {
//         setUser(null);
//         setError(errorMessage);
//         setMessage("");
//         setTimeout(() => {
//           setError("");
//         }, 6000);
//       }
//     } catch (error) {
//       setUser(null);
//       setError(errorMessage);
//       setMessage("");
//       setTimeout(() => {
//         setError("");
//       }, 6000);
//     }
//   };

//   return { handleRegister, user, error, message };
// };

// export default useRegister;


