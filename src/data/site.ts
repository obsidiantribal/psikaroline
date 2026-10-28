// Dados centrais do site. Edite aqui e tudo se atualiza.
export const site = {
  name: 'Karoline Trombim',
  title: 'Karoline Trombim · Psicanalista Clínica',
  description:
    'Psicanálise clínica com Karoline Trombim, online e presencial em Araranguá/SC: um espaço de escuta, acolhimento e reflexão para compreender a própria história, aliviar a ansiedade e construir vínculos mais saudáveis.',
  url: 'https://psikarolinetrombim.com.br',
  locale: 'pt_BR',

  // Contato — confirme o número antes de publicar.
  whatsapp: '5548996354890', // formato internacional, só dígitos
  whatsappMessage:
    'Olá, Karoline! Encontrei seu site e gostaria de saber mais sobre o atendimento psicanalítico.',
  phoneDisplay: '(48) 99635-4890',
  instagram: 'psikarolinetrombim', // sem o @ — deixe vazio para esconder
  email: '', // deixe vazio para esconder

  // Atendimento
  modalidade: 'Online e presencial',
  cidade: 'Araranguá',
  uf: 'SC',
  sessionLength: '50 min',
  cancellationHours: 12,
};

export const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`;

export const nav = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#psicanalise', label: 'Psicanálise' },
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#duvidas', label: 'Dúvidas' },
  { href: '#contato', label: 'Contato' },
];
