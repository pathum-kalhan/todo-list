const login = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "demo@gmail.com" && password === "demo1234") {
        resolve(200);
      } else {
        reject(401);
      }
    }, 1000);
  });
};

export default login;
