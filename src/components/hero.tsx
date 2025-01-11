import Link from "next/link";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Showmygallery from "../components/ImageGallery";
import CardHero from "./card";



export default function Hero() {
  const router = useRouter();

  const handleAppointment = () => {
    const token = Cookies.get("token");

    console.log("Este es el token pues", token);

    if (!token || token === undefined) {
      router.push("/login");
    } else {
      router.push("/appointment");
    }
  };

  return (
    <div>
      <div className="relative bg-gradient-to-b h-[100vh] from-white via-[#E8F8FF] to-[#15B5FC]">
        {/* Contenedor principal */}
        <div className="h-full max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative h-full flex flex-col">
            {/* Contenido de texto */}
            <div className="mt-5 mx-auto w-full px-4 sm:mt-24 sm:px-6 lg:mt-32">
              <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                {/* Lado izquierdo */}
                <div className="sm:text-center lg:text-left lg:col-span-6">
                  <h1 className="text-4xl tracking-tight text-primary font-extrabold sm:text-4xl md:text-6xl">
                    <span className="flex">
                      Mira nuestros nuevos beneficios para los miembros
                    </span>
                  </h1>
                  <p className="mt-7 text-base text-black sm:text-lg md:text-xl">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptate delectus veritatis perspiciatis, alias mollitia,
                    quaerat numquam aliquam eos provident harum magnam dicta
                    nostrum ipsam similique quibusdam, at neque laboriosam iusto..
                  </p>
                </div>

                {/* Imagen */}
                <div className="lg:col-span-6 flex justify-center items-end absolute bottom-0 left-1/2 transform -translate-x-1/2 lg:relative lg:left-0 lg:transform-none w-full">
                  <Showmygallery />

                  {/* <Image
                  src="/images/heros.png"
                  alt="Medical professionals"
                  width={1500}
                  height={1500}
                /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="h-[50vh] w-full relative bg-white">
        <div className="bg-white h-[348px] w-[351px] sm:w-[70%] md:w-[60%] lg:w-[351px] mx-auto rounded-2xl border-primary border-solid border-4 absolute top-[-55px] left-1/2 transform -translate-x-1/2 p-4 overflow-auto z-10">
          <h2 className="text-[14px] text-primary font-bold text-center">
            Citas con especialistas
          </h2>
          <br />
          <h3 className="text-2xl font-bold text-center text-primary">
            ¿Motivo de su cita?
          </h3>
          <p className="text-center text-sm text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac
            urna felis. Sed vehicula, nisi et lacinia venenatis, ex felis
            pulvinar ipsum.
          </p>
          {/* Botones */}
          <div className="flex flex-col space-y-4">
            {/* Botones blancos en la misma línea */}
            <div className="flex justify-between space-x-4">
              <button
                onClick={() => console.log("Botón 1")}
                className="flex-1 px-4 py-2 bg-white border border-primary text-primary font-bold text-sm rounded-2xl hover:bg-gray-100 transition-colors"
              >
                Urgencia
              </button>
              <button
                onClick={() => console.log("Botón 2")}
                className="flex-1 px-4 py-2 bg-white border border-primary text-primary font-bold text-sm rounded-2xl hover:bg-gray-100 transition-colors"
              >
                Agendar
              </button>
            </div>
            {/* Botón azul en la siguiente línea */}
            <button
              onClick={() => console.log("Botón 3")}
              className="w-full px-4 py-3 bg-primary text-white font-medium text-base rounded-2xl hover:bg-blue-700 transition-colors"
            >
              Siguiente
            </button>
          </div>
        </div>
      </section>

      <div className="h-[100vh] bg-secondary relative">
        {/* Título */}
        <div className="absolute mx-4 top-12 w-full">
          <h1 className="text-4xl font-extrabold text-primary">
            Tres pilares
          </h1>
        </div>

        {/* Contenedor de las tarjetas */}
        <div className="absolute bottom-0 w-full flex flex-col items-center space-y-3 pb-6">
          <CardHero
            title="Agendar Citas"
            description="Lorem ipsum dolor sit amet."
            buttonText="Ingresar"
            imageSrc="/images/card1fix.png"
            reverse={true}
          />
          <CardHero
            title="Planes"
            description="Lorem ipsum dolor sit amet."
            buttonText="Ingresar"
            imageSrc="/images/card2.png"
            reverse={false}
          />
          <CardHero
            title="Servicios Especiales"
            description="Lorem ipsum dolor sit amet."
            buttonText="Ingresar"
            imageSrc="/images/card1fix.png"
            reverse={true}
          />
        </div>
      </div>


    </div>
  );
}
