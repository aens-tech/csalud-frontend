import Link from "next/link";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

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
    <div className="relative bg-gradient-to-b h-[87vh] from-white via-[#E8F8FF] to-[#15B5FC]">
      {/* Contenedor principal */}
      <div className="h-full max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative h-full flex flex-col">
          {/* Contenido de texto */}
          <div className="mt-5 mx-auto w-full px-4 sm:mt-24 sm:px-6 lg:mt-32">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              {/* Lado izquierdo */}
              <div className="sm:text-center lg:text-left lg:col-span-6">
                <h1 className="text-4xl tracking-tight text-primary font-extrabold sm:text-4xl md:text-6xl">
                  <span className="flex">Mira nuestros nuevos beneficios para los miembros</span>
                </h1>
                <p className="mt-4 text-base text-black sm:text-lg md:text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate delectus veritatis perspiciatis, alias mollitia, quaerat numquam aliquam eos provident harum magnam dicta nostrum ipsam similique quibusdam, at neque laboriosam iusto..
                </p>
              </div>

              {/* Imagen */}
              <div className="lg:col-span-6 flex justify-center items-end absolute bottom-0 left-1/2 transform -translate-x-1/2 lg:relative lg:left-0 lg:transform-none">
                <img
                  className="w-full h-auto max-h-[40vh] sm:max-h-[50vh] md:max-h-[60vh] object-contain"
                  src="/images/heros.png"
                  alt="Medical professionals"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}