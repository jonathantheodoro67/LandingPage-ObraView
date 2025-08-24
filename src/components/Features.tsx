import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

export const Features = () => {
  const features = [
    {
      icon: '📊',
      title: 'Controle de Indicadores',
      description: 'Tenha o controle de todos os indicadores da obra em tempo real.'
    },
    {
      icon: '📋',
      title: 'Diário de Obra',
      description: 'Registre e acompanhe o progresso diário de cada projeto.'
    },
    {
      icon: '📈',
      title: 'Relatórios Customizados',
      description: 'Gere relatórios personalizados para cada obra.'
    },
    {
      icon: '🔧',
      title: 'Manutenção Automática',
      description: 'Sistema automatizado de controle e manutenção.'
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-900/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Funcionalidades criadas para{' '}
            <span className="text-green-500">destacar sua empresa</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Controle suas obras e gerencie sua equipe com uma plataforma única, 
            funcional e com visual moderno.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-green-500/50 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-gray-800/30 rounded-2xl p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="bg-gray-800/50 rounded-lg p-6 text-center">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="currentColor"
                      strokeWidth="6"
                      fill="transparent"
                      className="text-gray-700"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="currentColor"
                      strokeWidth="6"
                      fill="transparent"
                      strokeDasharray={`${80 * 2.51} ${100 * 2.51}`}
                      className="text-green-500"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-bold text-white">660</span>
                    <span className="text-sm text-gray-400">80%</span>
                  </div>
                </div>
                <p className="text-gray-400">Your credit score is average</p>
                <p className="text-sm text-gray-500 mt-2">Last check on 31 Jan</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center mt-1">
                  <span className="text-green-500">📊</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Controle de Indicadores</h4>
                  <p className="text-gray-400 text-sm">Tenha o controle de todos os indicadores da obra em tempo real.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center mt-1">
                  <span className="text-green-500">📋</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Diário de Obra</h4>
                  <p className="text-gray-400 text-sm">Registre e acompanhe o progresso diário de cada projeto.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center mt-1">
                  <span className="text-green-500">📈</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Relatórios Customizados</h4>
                  <p className="text-gray-400 text-sm">Gere relatórios personalizados para cada obra.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center mt-1">
                  <span className="text-green-500">🔧</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Manutenção Automática</h4>
                  <p className="text-gray-400 text-sm">Sistema automatizado de controle e manutenção.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};