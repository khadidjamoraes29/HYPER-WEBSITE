import React from "react";
import { useNavigate } from "react-router-dom";

const catalogOptions = [
  { alt: "Proteína", src: "/hyperbanner.png", link: "/categoria/proteina" },
  { alt: "Hipercalórico", src: "/hyperbanner.png", link: "/categoria/hipercalorico" },
  { alt: "Vitamina", src: "/hyperbanner.png", link: "/categoria/vitamina" },
  { alt: "Roupas", src: "/hyperbanner.png", link: "/categoria/roupas" },
  { alt: "Equipamentos", src: "/hyperbanner.png", link: "/categoria/equipamentos" },
];

const CatalogCarousel = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

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
    scrollWrapper: {
      display: "flex",
      justifyContent: "center",
    },
    scrollArea: {
      display: "flex",
      overflowX: "auto",
      gap: "30px",
      padding: "10px 0",
      maxWidth: "90vw",
    },
    item: {
      flex: "0 0 auto",
      textAlign: "center",
      cursor: "pointer",
    },
    image: {
      width: "120px",
      height: "120px",
      borderRadius: "50%",
      objectFit: "cover",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      transition: "transform 0.2s",
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
      <div style={styles.scrollWrapper}>
        <div style={styles.scrollArea}>
          {catalogOptions.map((item, index) => (
            <div
              style={styles.item}
              key={index}
              onClick={() => handleNavigate(item.link)}
            >
              <img
                src={item.src}
                alt={item.alt}
                style={styles.image}
              />
              <div style={styles.label}>{item.alt}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CatalogCarousel;
