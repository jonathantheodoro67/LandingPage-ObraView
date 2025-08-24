import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const Pricing = () => {
  const plans = [
    {
      name: 'Básico',
      price: 'R$90',
      period: '/mês',
      description: 'Para pequenas obras',
      features: [
        'Até 3 obras ativas',
        'Relatórios básicos',
        'Suporte por email',
        'Armazenamento 5GB'
      ],
      buttonText: 'Começar agora',
      popular: false
    },
    {
      name: 'Pro',
      price: 'R$149',
      period: '/mês',
      description: 'Para construtoras em crescimento',
      features: [
        'Até 15 obras ativas',
        'Relatórios avançados',
        'Suporte prioritário',
        'Armazenamento 50GB',
        'Integração com terceiros'
      ],
      buttonText: 'Começar agora',
      popular: true
    },
    {
      name: 'Master',
      price: 'R$297',
      period: '/mês',
      description: 'Para grandes construtoras',
      features: [
        'Obras ilimitadas',
        'Relatórios customizados',
        'Suporte 24/7',
        'Armazenamento ilimitado',
        'API personalizada',
        'Treinamento da equipe'
      ],
      buttonText: 'Começar agora',
      popular: false
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Planos pensados para{' '}
            <span className="text-green-500">empresas da construção civil</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comece com 7 dias grátis e escolha o plano ideal para sua empresa para obter 
            resultados ainda mais rápidos para seus clientes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative bg-gray-800/50 border-gray-700 ${
                plan.popular ? 'border-green-500 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-500 text-black px-4 py-1 rounded-full text-sm font-semibold">
                    Mais Popular
                  </span>
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-white text-xl mb-2">{plan.name}</CardTitle>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <p className="text-gray-400 text-sm">{plan.description}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-black text-xs">✓</span>
                      </div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full mt-6 ${
                    plan.popular 
                      ? 'bg-green-500 hover:bg-green-600 text-black' 
                      : 'bg-gray-700 hover:bg-gray-600 text-white'
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};