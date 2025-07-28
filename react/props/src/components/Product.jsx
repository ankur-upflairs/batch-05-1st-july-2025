import React from 'react'

function Product({image,title,description}) {
    
// function Product(props) {
//     let {image,title,description} =props

  return ( <div class="card" style={{width: "18rem"}}>
  <img class="card-img-top" src={image} alt="Card image cap" />
  <div class="card-body">
    <h5 class="card-title">{title}</h5>
    <p class="card-text">{description}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
  )
}

export default Product


// function Product(props) {

//   return ( <div class="card" style={{width: "18rem"}}>
//   <img class="card-img-top" src={props.image} alt="Card image cap" />
//   <div class="card-body">
//     <h5 class="card-title">{props.title}</h5>
//     <p class="card-text">{props.description}</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
//   )
// }

// export default Product