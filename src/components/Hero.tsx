import React from 'react';
import { DashboardPreview } from './DashboardPreview';

export const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Leve sua construtora para o próximo nível com o{' '}
            <span className="text-green-500">ObraView</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Gerencie suas obras de forma inteligente com nossa plataforma completa de gestão. 
            Organize e acompanhe melhor todos os aspectos da sua obra com uma 
            experiência premium.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-3 text-lg rounded-lg transition-colors">
              Começar agora
            </button>
            <button className="border border-gray-600 text-white hover:bg-gray-800 px-8 py-3 text-lg rounded-lg transition-colors">
              Ver Funcionalidades
            </button>
          </div>
        </div>
        
        <DashboardPreview />
        
        <div className="flex justify-center items-center space-x-12 mt-16 opacity-60">
          <div className="text-sm text-gray-500">Integra</div>
          <div className="text-sm text-gray-500">Shopify</div>
          <div className="text-sm text-gray-500">Pipedrive</div>
          <div className="text-sm text-gray-500">Linkedin</div>
          <div className="text-sm text-gray-500">Segment</div>
          <div className="text-sm text-gray-500">Layerup</div>
          <div className="text-sm text-gray-500">Shopify</div>
        </div>
      </div>
    </section>
  );
};