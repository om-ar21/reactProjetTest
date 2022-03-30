
function Slide() {
   
  return (
      <div className="container"> 

     
    <div className="row">


    <div className="col-md-4">
    <div className="card mb-4 box-shadow">
    <h3 className="card-text">titre</h3>
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="..." alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
      <div className="card-body">
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group ">
            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
            <h4 type="button" className="btn btn-sm btn-outline-secondary ml-3">Best SELLER</h4>
          </div>
          <small className="">PRIX</small>
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
    
  )
  
}

export default Slide;
