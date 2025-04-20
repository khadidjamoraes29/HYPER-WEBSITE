import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ height = "300px" }) => {
    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000, // muda a cada 3s
      arrows: false, // remove setas
      pauseOnHover: false
    };
    const styles = {
        sessao: {width: "100%"},
        divslide: {
           height: height, width: "100%", position: "relative" 
        },
        image:{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block"
        }
      };
    
  
    return (
      <div style={ styles.sessao }>
        <Slider {...settings}>
          <div>
            <div style={styles.divslide}>
              <img
                src="https://saude.sesisc.org.br/wp-content/uploads/sites/13/2023/09/Beneficios-de-fazer-academia-Para-sua-saude-e-seu-corpo-1536x1024.jpg"
                alt="Slide 1"
                style={styles.image}
              />
            </div>
          </div>
          <div>
            <div style={styles.divslide}>
              <img
                src="https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2024/07/04/1275438437-academia.jpg"
                alt="Slide 2"
                style={styles.image}
              />
            </div>
          </div>
        </Slider>
      </div>
    );
  };
  
  export default Carousel;



