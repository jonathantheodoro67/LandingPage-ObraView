import React from 'react';

export const Testimonials = () => {
  const testimonials = [
    {
      name: 'Eng. Rafael Cardoso',
      role: 'Diretor de Obras',
      company: 'Construtora Alpha',
      image: '👨‍💼',
      text: 'O ObraView revolucionou nossa gestão de obras. Conseguimos reduzir custos em 30% e melhorar a eficiência da equipe significativamente.'
    },
    {
      name: 'Ana Luiza Martins',
      role: 'Gerente de Projetos',
      company: 'Edificar Construções',
      image: '👩‍💼',
      text: 'Ferramenta incrível! A visualização em tempo real dos indicadores nos ajuda a tomar decisões mais assertivas.'
    },
    {
      name: 'Constância Pires',
      role: 'CEO',
      company: 'Pires & Associados',
      image: '👩‍💼',
      text: 'Desde que implementamos o ObraView, nossa produtividade aumentou drasticamente. Recomendo para todas as construtoras.'
    },
    {
      name: 'Carlos Eduardo',
      role: 'Engenheiro Civil',
      company: 'Construtech',
      image: '👨‍💼',
      text: 'A plataforma é intuitiva e completa. Conseguimos gerenciar múltiplas obras simultaneamente sem perder o controle.'
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-900/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Profissionais que evoluíram sua gestão com o ObraView
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Construtoras, engenheiros e arquitetos já se transformaram na relação com os clientes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-lg">
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-2xl">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">{testimonial.name}</h4>
                    <p className="text-gray-400 text-xs">{testimonial.role}</p>
                    <p className="text-gray-500 text-xs">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};