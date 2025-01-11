import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { sliderImages1 } from "../../public/images/sliders";

export default function Showgallery() {
    return (
        <div className="gallery-container relative">
            <ImageGallery
                items={sliderImages1}
                showThumbnails={false} // Desactiva las miniaturas
                showFullscreenButton={false} // Desactiva el botón de fullscreen
                showPlayButton={false} // Desactiva el botón de reproducción
                showBullets={true} // Asegúrate de que los puntos (bullets) estén habilitados
                showNav={false} // Desactiva las flechas de navegación por defecto
            />
            <style jsx global>{`
                /* Personaliza la posición de los puntos (bullets) */
                .image-gallery-bullets {
                    position: absolute;
                    top: 80%; /* Ponemos los puntos a la mitad de la imagen */
                    left: 50%;
                    transform: translateX(-50%);
                    z-index: 10;
                }

                /* Ajusta el tamaño y estilo de los puntos */
                .image-gallery-bullet {
                    width: 12px;
                    height: 12px;
                    margin: 0 5px;
                    background-color: rgba(12, 12, 170, 0.5); /* Puntos inactivos con opacidad */
                    border-radius: 50%;
                    transition: background-color 0.3s ease; /* Añadimos una transición para cuando el color cambie */
                }

                .image-gallery-bullet.active {
                    background-color: #0C0CAA !important; /* Punto activo con color sólido */
                    border-color: #0C0CAA !important; /* Añadimos un borde al punto activo */
                }

                /* Media query para pantallas pequeñas */
                @media (max-width: 768px) {
                    /* Mostrar los bullets en pantallas pequeñas */
                    .image-gallery-bullets {
                        display: block !important;
                    }

                    /* Mostrar las flechas (arrows) en pantallas pequeñas */
                    .image-gallery-prev, .image-gallery-next {
                        display: none !important;
                    }
                }

                /* Media query para pantallas grandes */
                @media (min-width: 769px) {
                    /* Ocultar los bullets en pantallas grandes */
                    .image-gallery-bullets {
                        display: none !important;
                    }

                    /* Mostrar las flechas (arrows) en pantallas grandes */
                    .image-gallery-prev, .image-gallery-next {
                        display: block !important;
                    }
                }
            `}</style>
        </div>
    );
}
