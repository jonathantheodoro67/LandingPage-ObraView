import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-sm">O</span>
              </div>
              <span className="text-xl font-bold">ObraView</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              A plataforma completa para gestão de obras da construção civil.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                📘
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                🐦
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                💼
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Produto</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Funcionalidades</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Preços</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Integrações</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">API</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Suporte</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Central de Ajuda</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Contato</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Status</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Treinamentos</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Privacidade</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Termos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Cookies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">LGPD</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 ObraView. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};