"use client"
import { useState } from "react";
import SurveyHeader from "@/components/Surveyheader";

export default function SurveyForm() {
    const [showOtherOptions, setShowOtherOptions] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");
    const [otherOption, setOtherOption] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const selected = showOtherOptions && otherOption ? otherOption : selectedOption;
        console.log("Selected Option:", selected);
        // Aquí puedes manejar el envío del formulario
    };

    return (
        <>
            <SurveyHeader />
            <button className="text-primary font-bold mt-3 flex items-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5 mr-1"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                Volver
            </button>
            <div className="flex justify-center items-center min-h-screen bg-white">

                <form
                    onSubmit={handleSubmit}
                    className="bg-white w-full max-w-md p-6 rounded-lg shadow-md"
                >
                    <header className="text-center mb-6">

                        <h1 className="text-2xl font-extrabold text-primary">¿Motivo de la cita? Servicio requerido</h1>
                        <p className="text-primary text-sm mt-1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                        </p>
                    </header>

                    <div className="space-y-4">
                        <button
                            type="button"
                            onClick={() => {
                                setSelectedOption("Medicina General y Especialistas");
                                setShowOtherOptions(false);
                            }}
                            className={`w-full text-primary border py-2 rounded-2xl font-bold hover:bg-primary ${selectedOption === "Medicina General y Especialistas" && "border-primary bg-primary text-white"
                                }`}
                        >
                            Medicina General y Especialistas
                        </button>

                        <button
                            type="button"
                            onClick={() => {
                                setSelectedOption("Psicología y Terapias");
                                setShowOtherOptions(false);
                            }}
                            className={`w-full text-primary border py-2 rounded-2xl font-bold hover:bg-primary ${selectedOption === "Psicología y Terapias" && "border-primary bg-primary text-white"
                                }`}
                        >
                            Psicología y Terapias
                        </button>

                        <button
                            type="button"
                            onClick={() => {
                                setSelectedOption("Otros");
                                setShowOtherOptions(!showOtherOptions);
                            }}
                            className={`w-full text-primary border py-2 rounded-2xl font-bold hover:bg-primary ${selectedOption === "Otros" && "border-primary bg-primary text-white"
                                }`}
                        >
                            Otros
                        </button>

                        {showOtherOptions && (
                            <div className="space-y-2">
                                {[
                                    "Terapeutas",
                                    "Guías espirituales o consejeros",
                                    "Fisioterapeutas",
                                    "Terapeutas holísticos",
                                    "Nutricionista",
                                ].map((option) => (
                                    <button
                                        key={option}
                                        type="button"
                                        onClick={() => setOtherOption(option)}
                                        className={`w-full text-left text-primary py-2 px-4 rounded-lg hover:bg-gray-100 ${otherOption === option && "bg-gray-100"
                                            }`}
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="mt-6">
                        <button
                            type="submit"
                            className="w-full bg-primary text-white py-3 rounded-2xl font-medium hover-primary"
                        >
                            Siguiente
                        </button>
                    </div>
                </form>
            </div>
        </>

    );
}
