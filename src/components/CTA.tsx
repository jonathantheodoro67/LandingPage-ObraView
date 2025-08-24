import React from 'react';
import { Button } from '@/components/ui/button';

export const CTA = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">
            Seu cliente merece mais do que um PDF
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Transforme sua empresa oferecendo uma experiência única para seus clientes, 
            apresentando relatórios e cronogramas em uma plataforma moderna.
          </p>
          <Button className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-4 text-lg">
            Começar agora
          </Button>
        </div>
      </div>
    </section>
  );
};