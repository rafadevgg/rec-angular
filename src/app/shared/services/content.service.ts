import { Injectable } from '@angular/core';
import { Content } from '../models/Content';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private mockContents: Content[] = [
    {
      id: 1,
      title: 'Streamlining your design process today',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop',
      description: 'Descubra como otimizar seu processo de design com ferramentas modernas e técnicas inovadoras. Uma série completa sobre metodologias de design que funcionam na prática.',
      category: 'Design',
      year: 2024,
      rating: 8.5,
      duration: '1h 30min',
      director: 'John Smith',
      cast: ['Alex Johnson', 'Sarah Williams', 'Mike Brown'],
      reviews: [
        {
          id: 1,
          author: 'João Silva',
          rating: 5,
          comment: 'Excelente conteúdo! Aprendi muito sobre design thinking.',
          date: '15 nov 2024'
        }
      ]
    } as Content,
    {
      id: 2,
      title: 'The Future of Technology',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
      description: 'Uma jornada através das tecnologias mais promissoras do futuro. Desde inteligência artificial até computação quântica, explore as inovações que estão mudando o mundo.',
      category: 'Tecnologia',
      year: 2024,
      rating: 9.0,
      duration: '2h',
      director: 'Jane Doe',
      cast: ['Robert Chen', 'Emma Wilson', 'David Lee'],
      reviews: [
        {
          id: 1,
          author: 'Maria Costa',
          rating: 5,
          comment: 'Documentário inspirador sobre o futuro.',
          date: '12 nov 2024'
        },
        {
          id: 2,
          author: 'Pedro Santos',
          rating: 4,
          comment: 'Muito bom, mas alguns tópicos poderiam ser mais aprofundados.',
          date: '10 nov 2024'
        }
      ]
    } as Content,
    {
      id: 3,
      title: 'Creative Mind Series',
      image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&h=300&fit=crop',
      description: 'Série documentária sobre criatividade e inovação em diferentes campos. Entrevistas com grandes criadores e pensadores que revolucionam suas áreas.',
      category: 'Documentário',
      year: 2024,
      rating: 8.8,
      duration: '50min',
      director: 'Alex Johnson',
      cast: ['Lisa Martinez', 'James Wilson', 'Amanda Clark'],
      reviews: []
    } as Content,
    {
      id: 4,
      title: 'Digital Transformation',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=300&fit=crop',
      description: 'Conheça as estratégias de transformação digital das maiores empresas. Um guia prático para modernizar seu negócio na era digital.',
      category: 'Negócios',
      year: 2024,
      rating: 8.2,
      duration: '1h 45min',
      director: 'Sarah Williams',
      cast: ['Thomas Anderson', 'Jennifer Davis', 'Christopher Moore'],
      reviews: [
        {
          id: 1,
          author: 'Carlos Oliveira',
          rating: 4,
          comment: 'Conteúdo útil para empreendedores.',
          date: '8 nov 2024'
        }
      ]
    } as Content,
    {
      id: 5,
      title: 'AI Revolution',
      image: 'https://images.unsplash.com/photo-1677442d019cecf8978e4553a4765e74d76adda5e?w=500&h=300&fit=crop',
      description: 'Explore como a inteligência artificial está transformando industrias e criando novas oportunidades. Um olhar profundo sobre o futuro da IA.',
      category: 'Ciência',
      year: 2024,
      rating: 9.2,
      duration: '2h 15min',
      director: 'Michael Zhang',
      cast: ['Dr. Elena Rodriguez', 'Prof. John Smith', 'Dr. Yuki Tanaka'],
      reviews: []
    } as Content,
    {
      id: 6,
      title: 'Startup Stories',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
      description: 'Histórias inspiradoras de empreendedores que começaram do zero e criaram empresas bilionárias. Descubra as lições que podem transformar sua carreira.',
      category: 'Empreendedorismo',
      year: 2024,
      rating: 8.7,
      duration: '1h 20min',
      director: 'Rachel Green',
      cast: ['Tim Cook', 'Satya Nadella', 'Sundar Pichai'],
      reviews: []
    } as Content
  ];

  getContents(): Content[] {
    return this.mockContents;
  }

  getContentById(id: number): Content | undefined {
    return this.mockContents.find(content => content.id === id);
  }
}
