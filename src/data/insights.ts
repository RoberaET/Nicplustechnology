export type Insight = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string; // Markdown or HTML content
  image: string;
};

export const insights: Insight[] = [
  {
    slug: 'design-reliable-small-business-network',
    title: 'How to Design a Reliable Small Business Network',
    date: '2026-08-15',
    category: 'Networking',
    excerpt: 'Learn the foundational elements of building a scalable and reliable network for a growing business.',
    content: `Building a reliable small business network requires more than just a consumer-grade router. It requires understanding traffic flow, security, and scalability. 

In this guide, we cover the essentials:
1. **The Core Router & Firewall**: The gateway to your network must be robust.
2. **Managed Switches**: Why you need VLANs and PoE.
3. **Wireless Access Points**: Moving beyond all-in-one devices.
4. **Structured Cabling**: The physical foundation.

By separating your network into distinct zones (e.g., Guest, Employee, Servers), you drastically reduce security risks and improve performance.`,
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    slug: 'vlans-explained-for-business',
    title: 'VLANs Explained for Business Networks',
    date: '2026-08-02',
    category: 'Infrastructure',
    excerpt: 'Why Virtual Local Area Networks are critical for performance and security in modern offices.',
    content: `VLANs (Virtual Local Area Networks) allow network administrators to logically segment a single physical network into multiple isolated virtual networks.

### Why do you need VLANs?

- **Security**: Isolate sensitive devices (like IP cameras or HR servers) from the general employee network.
- **Performance**: Reduce broadcast domain sizes, leading to less network congestion.
- **Management**: Simplify network policies and troubleshooting.

For example, a standard office setup might include VLAN 10 (Management), VLAN 20 (Employees), VLAN 30 (Guests), and VLAN 40 (VoIP/Security).`,
    image: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    slug: 'ip-cameras-vs-analog',
    title: 'CCTV: IP Cameras vs Analog Systems',
    date: '2026-07-20',
    category: 'CCTV',
    excerpt: 'A technical comparison of modern IP surveillance versus traditional analog CCTV systems.',
    content: `When upgrading or installing a new surveillance system, the choice between IP and Analog is critical.

**IP Cameras:**
- Higher resolution (4K and beyond)
- Uses standard network cabling (Cat5e/Cat6)
- Power over Ethernet (PoE) simplifies installation
- Advanced analytics (motion detection, line crossing, facial recognition)
- Highly scalable

**Analog Systems:**
- Lower initial cost
- Uses coaxial cable
- Limited resolution and analytics capabilities

For modern businesses, IP surveillance is almost always the recommended path due to scalability and integration with existing network infrastructure.`,
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];
