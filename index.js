// Add your code here





function submitData(name,email) {
    const configureObject = {
        method: "POST",
        headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({
              "name": name,
              "email": email,
            })

    }
    return fetch("http://localhost:3000/users", configureObject)
        .then(resp => resp.json())
        .then(newUser => document.body.innerHTML = newUser["id"])
        .catch(error => document.body.innerHTML = error.message)
}



//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json",
//     },
//     body: JSON.stringify({
//       name: "Brent",
//       email: "brentsemail",
//     }),
//   };
  
//   fetch("http://localhost:3000/users", submitData);