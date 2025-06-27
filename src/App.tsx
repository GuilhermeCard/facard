import React from 'react';
import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Building2,
  Handshake,
  CalendarCheck,
  BookCheck,
  ScrollText,
  DollarSign,
  Instagram,
  FileText
} from 'lucide-react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function App() {
  const services = [
    {
      icon: Building2,
      title: 'Abertura de empresa',
      description: 'Abra seu CNPJ de forma simples, rápida e sem complicação',
    },
    {
      icon: ScrollText,
      title: 'Notas fiscais',
      description: 'Emissão de notas fiscais e suporte na estruturação do negócio. Comece com o pé direito, com a base certa para crescer',
    },
    {
      icon: CalendarCheck,
      title: 'Entrega de obrigações mensais e anuais',
      description: 'Cuidamos dos envios ao fisco para você não perder prazos nem dormir preocupado',
    },
    {
      icon: DollarSign,
      title: 'Apuração de impostos',
      description: 'Cálculo e conferência dos tributos devidos no Simples Nacional ou MEI, com atenção ao que pode ser economizado',
    },
    {
      icon: BookCheck,
      title: 'Regularização de pendências com o fisco',
      description: 'Resolvemos débitos, notificações e situações irregulares com agilidade e segurança',
    },
    {
      icon: Handshake,
      title: 'Alterações contratuais e encerramento de empresas',
      description: 'Atualize ou encerre sua empresa com total conformidade legal',
    },
    {
      icon: FileText,
      title: 'Declaração do Imposto de Renda (Pessoa Física e MEI)',
      description: 'Evite erros, multas e aproveite oportunidades legais de dedução',
    },
    {
      icon: WhatsAppIcon,
      title: 'Atendimento direto e suporte via WhatsApp',
      description: 'Fale com quem resolve. Atendimento rápido, humano e sem enrolação',
    },    
  ];

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <img src="https://i.postimg.cc/4x7hQmsF/facard-logo.png" alt="FACARD" style={{width: "200px"}}/>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="hover:text-blue-400 transition-colors cursor-pointer">Início</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-blue-400 transition-colors cursor-pointer">Sobre</button>
              <button onClick={() => scrollToSection('services')} className="hover:text-blue-400 transition-colors cursor-pointer">Serviços</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-blue-400 transition-colors cursor-pointer">Contato</button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <img src="https://i.postimg.cc/4x7hQmsF/facard-logo.png" alt="FACARD" class="object-contain mx-auto mb-10"/>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Proximidade e confiança pra você crescer com tranquilidade
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://wa.me/5534991100671"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-button group flex items-center gap-2 px-6 py-4 bg-green-600 hover:bg-green-500 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
            >
              <div className="w-10 h-10 flex items-center justify-center">
                <WhatsAppIcon fontSize="large" className="text-white text-3xl group-hover:rotate-12 transition-transform"/>
              </div>
              <span className="text-white text-base">Fale Conosco pelo WhatsApp</span>
            </a>
            <button
              onClick={scrollToServices}
              className="px-8 py-4 border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              Conheça Nossos Serviços
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/40">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Sobre a <span className="text-blue-400">FACARD</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            A <span className="text-blue-400">FACARD</span> <span style={{color: "#d117b7"}}>Inteligência Contábil</span> nasceu para simplificar a vida de quem empreende. Com atendimento próximo, linguagem clara e foco total na tranquilidade do cliente, cuidamos da contabilidade para que você possa cuidar do seu negócio.<br/><br/>
            Somos flexíveis: acompanhamos desde empreendedores iniciantes até empresas em desenvolvimento — sempre com soluções enxutas, objetivas e bem alinhadas às necessidades de cada empresa. Você conversa diretamente com o contador responsável, recebe orientações personalizadas e tem a segurança de que todos os prazos fiscais serão cumpridos, sem surpresas.<br/><br/>
            Na FACARD, contabilidade não é só obrigação: é parceria, planejamento e suporte para você avançar com confiança. Se o seu objetivo é crescer com organização e segurança, conte com a gente para estar ao seu lado em cada etapa.
          </p>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Nossos <span className="text-blue-400">Serviços</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Na <span className="text-blue-400">FACARD</span>, oferecemos soluções contábeis completas, com foco na organização, economia de impostos e segurança fiscal atendendo desde empreendedores iniciantes até empresas em desenvolvimento.
              <br/>
              Veja como podemos ajudar o seu negócio:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card group bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                    <service.icon className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Entre em <span className="text-blue-400">Contato</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Pronto para transformar seu negócio? Fale conosco e descubra como podemos ajudar
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="contact-item p-6 bg-gray-800/30 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all">
              <Phone className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Telefone</h3>
              <p className="text-gray-300">(34) 99110-0671</p>
            </div>
            <div className="contact-item p-6 bg-gray-800/30 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all">
              <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-300">contato@facard.com.br</p>
            </div>
            <div className="contact-item p-6 bg-gray-800/30 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all">
              <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Localização</h3>
              <p className="text-gray-300">Uberlândia-MG, Brasil</p>
            </div>
          </div>
          <a
            href="https://wa.me/5534991100671"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button-large inline-flex items-center gap-2 px-10 py-5 bg-green-600 hover:bg-green-500 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25"
          >
            <div className="w-12 h-12 flex items-center justify-center">
              <WhatsAppIcon fontSize="large"/>
            </div>
            <span className="text-white text-xl">Iniciar Conversa no WhatsApp</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 py-8">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-4">
               <img
                 src="https://i.postimg.cc/4x7hQmsF/facard-logo.png"
                 alt="FACARD"
                 style={{ width: "200px" }}
                 className="object-contain"
               />
              <div>
               <a
                  href="https://g.co/kgs/b4TWgxJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-400 hover:text-white mb-2"
                  >
                     <MapPin style={{
                     display: 'flex',
                     alignSelf: 'center',
                     width: '25px',
                     height: '25px',
                     color: '#00f2fe'
                     }}/>                  
                  <span className="text-sm">Google Maps</span>
               </a>
               <a
                  href="https://www.instagram.com/facard.oficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-400 hover:text-white"
                  >                 
                     <Instagram style={{
                     display: 'flex',
                     alignSelf: 'center',
                     width: '25px',
                     height: '25px',
                     color: '#d117b7'
                     }}/>              
                  <span className="text-sm">@facard.oficial</span>
               </a>
                </div>
            </div>
            <p className="text-center text-gray-400">
               © 2025 FACARD. Todos os direitos reservados.
            </p>
         </div>
      </footer>
    </div>
  );
}

export default App;
