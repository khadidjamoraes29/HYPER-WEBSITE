import React from "react";

const catalogOptions = [
  { alt: "Proteína", src: "/hyperbanner.png" },
  { alt: "Hipercalórico", src: "/hyperbanner.png" },
  { alt: "Vitamina", src: "/hyperbanner.png" },
  { alt: "Roupas", src: "/hyperbanner.png" },
  { alt: "Equipamentos", src: "/hyperbanner.png" }, 
];

const CatalogCarousel = () => {
  const styles = {
    container: {
      padding: "20px 0",
    },
    title: {
      textAlign: "center",
      fontSize: "2rem",
      fontWeight: "bold",
      color: "#001f4d",
      marginBottom: "20px",
    },
    scrollArea: {
      display: "flex",
      overflowX: "auto",
      padding: "10px 20px",
      gap: "30px",
    },
    item: {
      flex: "0 0 auto",
      textAlign: "center",
    },
    image: {
      width: "120px",
      height: "120px",
      borderRadius: "50%",
      objectFit: "cover",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    },
    label: {
      marginTop: "10px",
      fontWeight: "bold",
      color: "#001f4d",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.title}>Catálogo</div>
      <div style={styles.scrollArea}>
        {catalogOptions.map((item, index) => (
          <div style={styles.item} key={index}>
            <img src={item.src} alt={item.alt} style={styles.image} />
            <div style={styles.label}>{item.alt}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatalogCarousel;
