<template>
  <div id="userLogin">
  </div>
</template>

<style>
#userLogin {
}

#logindiv {
  display: flex;
}

#userLogin * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#userLogin body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

/* 登录容器 */
#userLogin .login-container {
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

#userLogin .login-container h2 {
  text-align: center;
  margin-bottom: 1.5rem;
  color: #333;
}

/* 表单组 */
#userLogin .form-group {
  margin-bottom: 1.5rem;
}

#userLogin .form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #555;
}

#userLogin .form-group input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

#userLogin .form-group input:focus {
  border-color: #007bff;
  outline: none;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

/* 登录按钮 */
#userLogin button {
  width: 100%;
  padding: 0.75rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

#userLogin button:hover {
  background-color: #0056b3;
}
</style>
<script></script>
