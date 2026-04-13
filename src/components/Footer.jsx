import { BsInstagram, BsWhatsapp, BsGeoAlt, BsEnvelope } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="w-full bg-[#1c9770ff] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-8 py-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Health Plus</h2>
            <p className="text-[#dff7ee] max-w-md">
              Cuidando da sua saúde com tecnologia e confiança.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex items-center gap-3">
              <BsEnvelope className="text-[#93CB52] text-lg" />
              <p>healthplus@gmail.com</p>
            </div>

            <div className="flex items-center gap-3">
              <BsWhatsapp className="text-[#93CB52] text-lg" />
              <p>(11) 99999-9999</p>
            </div>

            <div className="flex items-center gap-3">
              <BsInstagram className="text-[#93CB52] text-lg" />
              <p>@healthplus</p>
            </div>

            <div className="flex items-center gap-3">
              <BsGeoAlt className="text-[#93CB52] text-lg" />
              <p>Av. Paulista, 1000 - São Paulo, SP</p>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-[#7AD1C3] pt-4 text-center text-sm text-[#dff7ee]">
          <p>&copy; 2026 - Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;