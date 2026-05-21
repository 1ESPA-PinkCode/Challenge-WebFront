function ModalBoasVindas({ nome, onFechar }) {
    return (
      <div
        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4"
        onClick={onFechar}
      >
        <div
          className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-sm text-center"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="text-5xl mb-4">🌱</div>
  
          <h2 className="text-2xl font-bold text-green-600 mb-2">
            Olá, {nome}!
          </h2>
  
          <p className="text-gray-500 text-sm mb-6">
            Que bom te ver por aqui! Suas missões de hoje estão te esperando.
          </p>
  
          <button
            onClick={onFechar}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-lg transition w-full"
          >
            Vamos lá! 🌻
          </button>
        </div>
      </div>
    );
  }
  
  export default ModalBoasVindas;