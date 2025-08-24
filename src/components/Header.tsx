import React from 'react';
import { Button } from '@/components/ui/button';

export const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-black/80 backdrop-blur-sm border-b border-gray-800 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-sm">O</span>
            </div>
            <span className="text-xl font-bold">ObraView</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Funcionalidades</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Planos</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Depoimentos</a>
          </nav>
          
          <Button className="bg-green-500 hover:bg-green-600 text-black font-semibold">
            Começar agora
          </Button>
        </div>
      </div>
    </header>
  );
};