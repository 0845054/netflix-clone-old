export const login = (e: string, p: string) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: e, password: p }),
  };
  fetch("http://localhost:4000/auth/login", requestOptions)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((e) => {
        
    });
};

//  credentials: 'include'
