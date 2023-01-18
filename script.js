// https://striveschool-api.herokuapp.com/books

// const url = "https://striveschool-api.herokuapp.com/"


// window.onload = async() => {
//     await getBooks()
// }

// const getBooks = async(endpoint = "books") => {
//     let rawBooks = await fetch(url + endpoint)
//     let data = await rawBooks.json()
//     console.log(data)
// }


window.onload = () => {
    getBooks();
  }

const getBooks = () => {
    fetch("https://striveschool-api.herokuapp.com/books")
      .then((res) => res.json())
      .then((data) => {
  
        const container = document.querySelector(".container")
        const arrayOfBooks = data.map(({title, category, img}) => {
          return `
            <div class="col-sm-3 d-flex pb-2">
                    <div class="card">
                       <img src="${img}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${title} ${category}</h5>
                        </div>
                          <button type="button" value="Click" class="btn btn-outline-success" id="addCart" onClick="addToCart()">Add to Cart</button>
                          <button type="button" class="btn btn-outline-warning" id="removeBk" onClick="removeBook()">Skip</button>
                    </div>
            </div> `
  
        })
        const stringOfBooks = arrayOfBooks.join("")
        console.log(stringOfBooks)
        container.innerHTML = stringOfBooks
      })
  }
  
  getBooks();

  function addToCart() {
    let cartNode = document.getElementById("addCart");
    console.log(cartNode);
    const cartUl = document.getElementById("cartList");
    console.log(cartUl);
    let newCartItem = document.createElement("li")
    cartUl.appendChild(newCartItem);
    newCartItem.innerHTML = `test 1`
    newCartItem.innerHTML = `<li>${title} ${category}</li>`
        // for (let i = 0; i < cartNode.length; index++) {
        // console.log(cartNode[i]);
        // }
  }


  function removeBook() {

  }
  



// const getBooks = () => {
//     fetch("https://striveschool-api.herokuapp.com/books)
//       .then((res) => res.json())
//       .then((data) => {
  
//         const container = document.querySelector(".container")
//         const arrayOfBooks = data.map(({title, category, img}) => {
//           return 
//             <div class="col-3">
//                     <div class="card">
//                        <img src="${img}" class="card-img-top" alt="...">
//                         <div class="card-body">
//                             <h5 class="card-title">${title} ${category}</h5>
//                         </div>
//                           <button type="button" class="btn btn-outline-success">Add to Cart</button>
//                           <button type="button" class="btn btn-outline-warning">Skip</button>
//                     </div>
//             </div> 
  
//         })
     
//   }
  
//   getBooks()
  



// const 

// const container = document.querySelector(".container")
// const arrayOfBooks = data.map(({asin, category, img, price, title}) => {
//     return `
//           <div class="col-3">
//                   <div class="card">
//                      <img src="${img}" class="card-img-top" alt="...">
//                      <p>${asin}</p>
//                      <p>${price}</p>
//                       <div class="card-body">
//                           <h5 class="card-title">${title} ${category}</h5>
//                       </div>
//                         <button type="button" class="btn btn-outline-success">Add to Cart</button>
//                         <button type="button" class="btn btn-outline-warning">Skip</button>
//                   </div>
//           </div>`

// })
//    const stringOfBooks = arrayOfBooks.join("")
//         console.log(stringOfBooks)
//         container.innerHTML = stringOfBooks
//       })

// const stringOfBooks = arrayOfBooks.join("")




/*{ 
// const books = []

// const getBookData = async (endpoint = "books") => { }*/
//     try {
//         let bookResult = await fetch("https://striveschool-api.herokuapp.com/books" + endpoint, {
//             method: "GET"
//     })
//     let { books } = await result.json()
//     console.log(books)
// }   catch(err) {
//     console.log(err)
// }
// }

// getBookData()