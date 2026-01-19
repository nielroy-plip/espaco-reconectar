    import { Therapy } from "../types";

    export const therapies: Therapy[] = [
        {
            id: 'massage-therapy',
            name: 'Massagem Terapêutica',
            description: 'Práticas que promovem o foco no presente, reduzindo o estresse e aumentando o bem-estar geral.',
            icon: 'meditation-icon',
            benefits: [
                'Redução do estresse',
                'Melhora da concentração',
                'Aumento do bem-estar emocional'
            ],
            duration: '60 minutos'
        },
    {
        id: 'holistic-therapy',
        name: 'Terapia Holística Integrativa',
        description:
        'Abordagem que integra corpo, mente e espírito para uma cura profunda e transformadora.',
        icon: 'FaHeart',
        benefits: [
        'Equilibra energias do corpo',
        'Favorece autoconhecimento',
        'Reduz bloqueios emocionais',
        'Promove transformação pessoal'
        ],
        duration: '90 minutos'
    },
    {
        id: 'yoga-therapy',
        name: 'Yoga Terapêutico',
        description:
        'Posturas e respiração focadas em cura e reequilíbrio do corpo e da mente.',
        icon: 'FaUser',
        benefits: [
        'Flexibilidade e força',
        'Alívio de dores crônicas',
        'Equilíbrio emocional',
        'Conexão corpo-mente'
        ],
        duration: '75 minutos'
    },
    {
        id: 'aromatherapy',
        name: 'Aromaterapia Terapêutica',
        description:
        'Uso de óleos essenciais para promover cura, relaxamento e bem-estar integral.',
        icon: 'FaFlower',
        benefits: [
        'Relaxamento profundo',
        'Melhora do humor',
        'Alívio de tensões',
        'Armonização energética'
        ],
            duration: '45 minutos'
        }
    ];