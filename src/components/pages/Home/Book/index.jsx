import Img1 from "/img/img1.jpeg";
import Img3 from "/img/img3.jpeg";
import img4 from "/img/img4.jpeg"
import img2 from "/img/img2.jpeg"
import "./index.scss"

const Book = () => {
  return (
    <section className="book mt-5" id="book">
      <div className="container">
        <div className="main-text">
          <h1 style={{color:'white'}}> <span style={{color:'red'}}>S</span> UIVI DU STATU EL TEMPS REEL</h1>
        </div>

        <div className="row justify-content-between">
          <div className="col-lg-5 py-3 py-md-0">
            <h2>
              Home of Gaming <br /> la référence Gaming à <br /> Quida <br /><br />
            </h2>
            <p>
              Viens seul ou avec les amis et profites de <br /> Jouer aux leux
              du moment dans un cadre <br /> convivial et vis une expérience
              unique <br /> dans la région !
            </p>
            <p>
              Tu t'ennuies chez toi, t'as du temps de <br /> ilibre ? Passe
              faire un tour !
            </p>
          </div>

          <div className="col-lg-5  py-3 py-md-0">
            <div className="card">
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Img1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={img2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={img4} class="d-block w-100" alt="..."/>
    </div>
      <div class="carousel-item">
      <img src={Img3} class="d-block w-100" alt="..."/>
    </div>
    
  </div>
  <button class="carousel-control-prev"  style={{marginTop:'300px'}} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" style={{marginTop:'300px'}} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
            </div>
          </div>
        </div>
        
        <div class="row justify-content-center">

<div class="col-2 suivi-bt ">
  <a href=""><button  style={{marginBottom:'80px',marginTop:'45px'}} type="button" class="btn btn-danger ">JE RESERVE</button></a>
</div>
</div>




      </div>



    </section>
  );
};

export default Book;
