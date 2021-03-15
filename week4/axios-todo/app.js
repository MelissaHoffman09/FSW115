axios.get("https://api.vschool.io/MelissaH/todo")
.then((response) => {
    for (let i = 0; i < response.data.length; i++) {
        const h1 = document.createElement("h1");
        const h2 = document.createElement("h2");
        const h3 = document.createElement("h3")
        const img = document.createElement("img");
        h1.textContent = response.data[i].title;
        h2.textContent = response.data[i].description;
        h3.textContent = response.data[i].price;
        img.src = response.data[i].imgUrl;
        document.body.appendChild(h1);
        document.body.appendChild(h2);
        document.body.appendChild(h3)
        document.body.appendChild(img);
        if(response.data[i].completed === true){
            h1.style.textDecorationLine = "line-through"
        }
    }
  })
  .catch((error) => console.log(error));