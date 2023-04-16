// var LoginPage = createReactClass({

//   render: function() {
//     return (
//       <React.Fragment>
//       </React.Fragment>
//     );
//   }
// });

import React, { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] =
  useState(""); const [password, setPassword] = useState("");

const handleSubmit = async (e) => { e.preventDefault();

// ログインリクエストをバックエンドに送信
const response = await fetch("/login", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ session: { email, password } }),
});
if (response.ok) {
  // ログイン成功時の処理（画面遷移など）
} else {
  // エラーメッセージの表示
}
};

return ( <div> <h1>Login</h1> <form onSubmit={handleSubmit}> <div> <label>Email: </label> <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required /> </div> <div> <label>Password: </label> <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required /> </div> <button type="submit">Login</button> </form> </div> ); };

export default LoginPage;
