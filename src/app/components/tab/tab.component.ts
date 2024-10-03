import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenuItem, MessageService } from 'primeng/api';
import { AccordionModule } from 'primeng/accordion';
import { TimelineModule } from 'primeng/timeline';
import { CarouselModule } from 'primeng/carousel';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AccordionModule,
    TimelineModule,
    CarouselModule,
    ToastModule
  ],
  providers: [
    MessageService
  ],
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.scss'
})
export class TabComponent {
  items!: MenuItem[];
  tabs!: MenuItem[];
  advantages!: MenuItem[];
  security!: MenuItem[];
  cards!: MenuItem[];
  selectedItemIndex: number | null = null;
  selectedTabIndex: number | null = null;
  observer!: IntersectionObserver;

  @ViewChild('about') about!: ElementRef;
  @ViewChild('specialization') specialization!: ElementRef;
  @ViewChild('advantage') advantage!: ElementRef;

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.selectedItemIndex = 0;
    this.items = [
      { label: 'Sobre o NEXT'},
      { label: 'Especializações'},
      { label: 'Vantagens'},
    ];

    this.tabs = [
      { title: 'Vendas', label: 'Aprimore a gestão de seu pipeline de vendas com ferramentas integradas de CRM, automação de processos de vendas e geração de relatórios detalhados, otimizando o desempenho comercial da sua empresa.' },
      { title: 'Produção', label: 'Ideal para fábricas, montadoras de estruturas e integradores, o NEXT ERP oferece controle total do planejamento e execução da produção, garantindo a otimização de recursos e a redução de desperdícios.' },
      { title: 'Prestação de Serviços e Engenharia', label: 'Gerencie projetos, controle orçamentos e acompanhe o progresso das atividades com precisão, assegurando a entrega pontual e a qualidade dos serviços prestados' },
      { title: 'Locação de Bens Móveis', label: 'Para empresas que alugam veículos, máquinas e equipamentos, o Next facilita a gestão de contratos, manutenção e disponibilidade dos itens. Com controle detalhado por número de série e rastreamento de bens, você pode monitorar a localização e o status de cada item em tempo real.' },
      { title: 'Gestão de Departamento Pessoal', label: 'Tenha uma gestão completa do departamento pessoal com ferramentas para controle de folha de pagamento, benefícios, ponto eletrônico e avaliação de desempenho, assegurando conformidade legal e eficiência operacional' },
      { title: 'Sistema Fiscal Completo', label: 'Simplifique o cumprimento das obrigações fiscais com um sistema que automatiza a geração de notas fiscais, declarações e relatórios, garantindo precisão e economia de tempo' },
      { title: 'Sistema Financeiro e Contábil', label: 'Gerencie suas finanças com um controle rigoroso de fluxo de caixa, contas a pagar e a receber, além de integrar a contabilidade, facilitando a tomada de decisões estratégicas e a transparência financeira' },
      { title: 'Gestão e Controle de Licitações Públicas', label: 'O Next oferece um módulo especializado para a gestão de licitações públicas, facilitando o acompanhamento de editais, a preparação de propostas e o controle de contratos, garantindo maior eficiência e compliance nos processos de licitação' },
      { title: 'Sistema Gestão de Construção Civil', label: 'Ferramentas específicas para a gestão de projetos e obras, incluindo planejamento, controle de custos, cronogramas e acompanhamento de progresso, assegurando a entrega de projetos dentro do prazo e orçamento' }
    ];

    this.advantages = [
      { label: 'Sistema Completo e Integrado'},
      { label: 'Gestão Multiempresas'},
      { label: 'Facilidade de Uso'},
      { label: 'Recursos Exclusivos'},
      { label: 'Altamente Customizável'},
      { label: 'Escalabilidade'},
      { label: 'Melhoria na Tomada de Decisões'},
      { label: 'Suporte Técnico Dedicado'},
      { label: 'Segurança Avançada'},
    ];

    this.security = [
      { label: 'Permissões personalizada por usuário'},
      { label: 'Armazenamento em Nuvem'},
      { label: 'Servidores Dedicados'},
      { label: 'Criptografia Avançada'},
      { label: 'Backups Automáticos'},
      { label: 'Controle de Acesso'},
      { label: 'Conformidade com Regulamentações'},
      { label: 'Segurança Avançada'},
    ];

    this.cards = [
      { title: 'Facilidade de Marcação de Ponto', label: 'Como o Quartzo, os colaboradores podem marcar o ponto de forma rápida e prática através de seus dispositivos móveis. \nO app suporta diversas formas de autenticação, garantindo segurança e precisão na marcação dos horários' },
      { title: 'Integração com o NEXT ERP', label: 'Todas as informações registradas no Quartzo são sincronizadas em tempo real com o NEXT ERP. \nIsso Permite que os gestores e o departamento pessoal tenham acesso imediato a dados atualizados, facilitando o controle e a gestão da jornada de trabalho' },
      { title: 'Comunicação Simplificada', label: 'O Quartzo melhora a comunicação entre os colaboradores e o departamento pessoal. \nNotificações e mensagens importantes podem ser enviadas diretamente pelo app, garantindo que todos estejam sempre informados sobre mudanças de turno, horários e outras atualizações relevantes.' },
      { title: 'Relatórios e Análises', label: 'O app oferece ferramentas de geração de relátorios detalhados sobre a presença e a pontualidade dos colaboradores. \nCom gráficos e análises, os gestores podem identificar padrões e tomar decisões mais informadas para melhorar a eficiência da equipe.' },
      { title: 'Conformidade Legal', label: 'O Quartzo ajuda a empresa a manter a conformidade com as regulamentações trabalhistas, registrando e armazenando todas as informações de ponto de forma segura e auditável.' },
      { title: 'Facilidade de Uso', label: 'Com uma interface intuitiva e amigável, o Quartzo é fácil de usar tanto para os colaboradores quanto para os gestores. \nO design simplificado permite uma rápida adoção e minimiza a necessidade de treinamento extensivo.' },
      { title: 'Geolocalização', label: 'Registre a localização dos pontos marcados para garantir que os colaboradores estejam no local correto.' },
      { title: 'Reconhecimento Facil', label: 'Utilize a tecnologia de reconhecimento facil para aumentar a segurança na marcação de ponto.' },
      { title: 'Acesso Off-line', label: 'Permite a marcação de ponto mesmo sem conexão à internet, sincronizando os dados assim que a conexão for restabelecida.' }
    ];
  }


  ngAfterViewInit() {
    if (typeof IntersectionObserver !== 'undefined') {
      this.observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.target === this.about.nativeElement) {
              this.selectedItemIndex = 0;
            } else if (entry.target === this.specialization.nativeElement) {
              this.selectedItemIndex = 1;
            } else if (entry.target === this.advantage.nativeElement) {
              this.selectedItemIndex = 2;
            }
          }
        });
      }, {
        root: null,
        threshold: 0.1
      });

      this.observer.observe(this.about.nativeElement);
      this.observer.observe(this.specialization.nativeElement);
      this.observer.observe(this.advantage.nativeElement);
    } else {

    }
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  selectItem(index: number) {
    this.selectedItemIndex = index;

    if (this.selectedItemIndex === 0) {
      this.about.nativeElement.scrollIntoView({ behavior: 'smooth' });
    } else if (this.selectedItemIndex === 1) {
      this.specialization.nativeElement.scrollIntoView({ behavior: 'smooth' });
    } else if (this.selectedItemIndex === 2) {
      this.advantage.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  selectTab(index: number) {
    this.selectedTabIndex = index;
  }

  message(){
    this.messageService.add({ severity: 'info', summary: 'Site em produção', life: 2000 });
  }
}
