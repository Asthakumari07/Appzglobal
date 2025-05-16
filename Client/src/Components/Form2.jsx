import React, { useState } from "react";
import AdminLogin2 from "./Sections/AdminLoginHr";
import Dashboard2 from "./DashboardLayout2";

const Form2 = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <Dashboard2 onLogout={handleLogout} />
      ) : (
        <AdminLogin2 onLogin={handleLogin} />
      )}
    </div>
  );
};

export default Form2;
