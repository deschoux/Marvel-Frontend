import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Login = ({ setUser, url }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate(); // Utilisation de useNavigate à la place de useHistory

  const handleEmail = (event) => {
    const result = event.target.value;
    setEmail(result);
  };
  const handlePassword = (event) => {
    const result = event.target.value;
    setPassword(result);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const fetchData = async () => {
      try {
        const response = await axios.post(`${url}user/login`, {
          email: email,
          password: password,
        });
        if (response.data.token) {
          const token = response.data.token;
          setUser(token);
          navigate("/"); // Modification pour utiliser navigate
        }
      } catch (error) {
        console.log("error ", error);
        if (error.response && error.response.status === 400) {
          setErrorMessage("Email ou Mot de Passe invalide.");
        } else {
          setErrorMessage("Erreur de connexion.");
        }
      }
    };
    fetchData();
  };

  return (
    <main className="form">
      <div className="form wrapper">
        <h2>LOGIN</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-form">
            <input type="email" placeholder="Email" onChange={handleEmail} />
            <input
              type="password"
              placeholder="Password"
              onChange={handlePassword}
            />
          </div>
          <div>
            <input type="submit" value="LOGIN" className="btn-red" />
            <span>{errorMessage}</span>
            <Link to="/signup">
              Do you already have an account? Signup here!
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;

// import { Link, useHistory } from "react-router-dom";
// import { useState } from "react";
// import axios from "axios";

// const Login = ({ setUser, url }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   const history = useHistory();

//   const handleEmail = (event) => {
//     const result = event.target.value;
//     setEmail(result);
//   };
//   const handlePassword = (event) => {
//     const result = event.target.value;
//     setPassword(result);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const fetchData = async () => {
//       try {
//         const response = await axios.post(`${url}user/login`, {
//           email: email,
//           password: password,
//         });
//         if (response.data.token) {
//           const token = response.data.token;
//           setUser(token);
//           history.push("/"); // user can enter - redirect to home page
//         }
//       } catch (error) {
//         console.log("error ", error);
//         if (error.response.status === 400) {
//           setErrorMessage("Email ou Mot de Passe invalide.");
//         }
//       }
//     };
//     fetchData();
//   };

//   return (
//     <main className="form">
//       <div className="form wrapper">
//         <h2>LOGIN</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="input-form">
//             <input type="email" placeholder="Email" onChange={handleEmail} />
//             <input
//               type="password"
//               placeholder="Password"
//               onChange={handlePassword}
//             />
//           </div>
//           <div>
//             <input type="submit" value="LOGIN" className="btn-red" />
//             <span>{errorMessage}</span>
//             <Link to="/signup">
//               Do you already have an account ? Signup here !
//             </Link>
//           </div>
//         </form>
//       </div>
//     </main>
//   );
// };

// export default Login;
