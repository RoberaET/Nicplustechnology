export type Solution = {
  slug: string;
  title: string;
  description: string;
  features: string[];
  image: string;
};

export const solutions: Solution[] = [
  {
    slug: 'small-business',
    title: 'Small Business',
    description: 'Reliable networking, Wi-Fi, security and IT support for growing businesses. We build foundational infrastructure that scales with you.',
    features: ['Managed Wi-Fi', 'Basic Firewall Security', 'IP Surveillance', 'Responsive IT Support'],
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    slug: 'enterprise',
    title: 'Enterprise',
    description: 'Scalable infrastructure and security solutions for larger organizations requiring high availability and advanced configuration.',
    features: ['High-Availability Networking', 'Advanced Threat Protection', 'Multi-Site Connectivity', 'Comprehensive Access Control'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    slug: 'office-networks',
    title: 'Office & Campus Networks',
    description: 'Structured LAN/WAN infrastructure, switching, routing and wireless deployment for office buildings and educational campuses.',
    features: ['Structured Cabling', 'High-Density Wi-Fi', 'VLAN Segmentation', 'Core Routing'],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    slug: 'security',
    title: 'Security & Surveillance',
    description: 'Integrated security infrastructure combining CCTV, access control, and network security to protect your assets.',
    features: ['IP CCTV Systems', 'Biometric Access Control', 'NVR/Storage Solutions', 'Perimeter Security'],
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    slug: 'smart-office',
    title: 'Smart Office',
    description: 'Connected workplace infrastructure combining networking, access and security technologies into a unified system.',
    features: ['IoT Integration', 'Automated Access Control', 'Unified Communications', 'Smart Meeting Rooms'],
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];
