export type Project = {
  slug: string;
  title: string;
  client: string;
  industry: string;
  location: string;
  services: string[];
  description: string;
  image: string; // URL placeholder
  challenge: string;
  solution: string;
  implementation: string;
  result: string;
  technology: string[];
};

export const projects: Project[] = [
  {
    slug: 'enterprise-network-deployment',
    title: 'Enterprise Network Deployment',
    client: 'Corporate Client',
    industry: 'Banking & Finance',
    location: 'Addis Ababa',
    services: ['Networking', 'Wireless'],
    description: 'Complete overhaul of core network infrastructure for a financial institution.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    challenge: 'The client faced frequent network outages and slow speeds due to legacy equipment and poor network segmentation.',
    solution: 'NIC+ designed a highly available core network with proper VLAN segmentation and redundant routing.',
    implementation: 'Deployed layer 3 switches, upgraded core routers, and installed high-capacity access points across the campus.',
    result: 'Achieved 99.99% uptime, improved network speeds by 300%, and successfully passed compliance audits.',
    technology: ['Cisco', 'Ubiquiti', 'Fiber Optic']
  },
  {
    slug: 'campus-surveillance-system',
    title: 'Campus Surveillance System',
    client: 'Educational Institution',
    industry: 'Education',
    location: 'Addis Ababa',
    services: ['CCTV', 'Security', 'IT Infrastructure'],
    description: 'Deployment of over 100 IP cameras with centralized monitoring.',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    challenge: 'Lack of visibility across a large campus resulted in security vulnerabilities and unmonitored zones.',
    solution: 'A comprehensive IP CCTV system covering all critical areas, entrances, and perimeters.',
    implementation: 'Installed 120 high-definition IP cameras, 2 NVRs with 64TB storage, and a dedicated monitoring station.',
    result: 'Provided complete campus visibility, improved incident response time, and enhanced overall security.',
    technology: ['Hikvision', 'Network Video Recorders', 'PoE Switches']
  },
  {
    slug: 'secure-access-control',
    title: 'Secure Access Control Facility',
    client: 'Manufacturing Facility',
    industry: 'Manufacturing',
    location: 'Bishoftu',
    services: ['Access Control', 'Security'],
    description: 'Implementation of biometric access control for a large manufacturing plant.',
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    challenge: 'Unauthorized access to restricted zones and inaccurate time and attendance tracking.',
    solution: 'Integrated biometric access control for sensitive areas and card access for general areas.',
    implementation: 'Deployed fingerprint readers at 15 entry points, integrated with centralized HR software.',
    result: 'Eliminated unauthorized access, streamlined payroll, and improved physical security.',
    technology: ['ZKTeco', 'Biometrics', 'Access Controllers']
  }
];
