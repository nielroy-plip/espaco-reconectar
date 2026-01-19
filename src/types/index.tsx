export interface Therapy {
    id: string;
    name: string;
    description: string;
    icon: string;
    benefits: string[];
    duration?: string;
}

export interface Testimonial {
    id: string;
    name: string;
    profession: string;
    message: string;
    rating: number;
    image?: string;
}

export interface Value {
    id: string;
    title: string;
    description: string;
    icon: string;
}

export interface SocialLink {
    name: string;
    icon: string;
    url: string;
    color?: string;
}