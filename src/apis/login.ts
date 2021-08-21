type Email = string;
type Password = string;

const login = (email:Email, password:Password) => {
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
