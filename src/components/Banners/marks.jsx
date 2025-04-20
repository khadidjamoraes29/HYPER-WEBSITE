import React from "react";

const brandLogos = [
    {
      alt: "Integralmédica",
      src: "https://logospng.org/download/integralmedica/integralmedica-2048.png"
    },
    {
      alt: "Max Titanium",
      src: "https://images.seeklogo.com/logo-png/25/2/max-titanium-logo-png_seeklogo-257443.png"
    },
    {
      alt: "Probiótica",
      src: "https://cupom99.com/wp-content/uploads/thumbs_dir/cupom-de-desconto-probiotica-200x115-1-205o0fwpfbpzsa6dfa14d5gpe55fusqc4fyhiymojfhg.webp"
    },
    {
      alt: "Growth Supplements",
      src: "https://blog.gsuplementos.com.br/wp-content/uploads/2021/08/growthlogo.png"
    },
    {
      alt: "Optimum Nutrition",
      src: "https://logodownload.org/wp-content/uploads/2021/04/optimum-nutrition-logo-0.png"
    },
  ];

const LogoRow = () => {
  const styles = {
    div:{
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      backgroundColor: "#e0e0e0",
      padding: "20px",
      flexWrap: "wrap",
      gap: "20px",
      height: "30vh",
    },
    image:{
      maxHeight: "77%",
      maxWidth: "77%",
      objectFit: "contain"
    }

  }
  return (
    <div
      style={styles.div}
    >
      {brandLogos.map((logo, index) => (
        <img
          key={index}
          src={logo.src}
          alt={logo.alt}
          style={styles.image}
        />
      ))}
    </div>
  );
};

export default LogoRow;
