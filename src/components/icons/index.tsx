import React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

/**
 * 01. NIC+ ARCHITECTURAL BRAND EMBLEM
 * Geometric faceted crystalline 'N' interlaced with a precision optical photonic core
 */
export function NicLogoIcon({ size = 28, strokeWidth = 1.75, className = '', ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <rect x="2" y="2" width="28" height="28" rx="8" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.25" />
      {/* Outer corner framing ticks */}
      <path d="M6 2H2V6M26 2H30V6M6 30H2V26M26 30H30V26" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.5" />
      {/* Architectural N vector */}
      <path
        d="M9 22V10L18 22V10"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Dynamic '+' Optical Laser Emitter */}
      <circle cx="23.5" cy="9.5" r="2" fill="currentColor" />
      <path d="M23.5 15.5V22.5M20 19H27" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      {/* Optical waveguide dots */}
      <circle cx="9" cy="10" r="1.5" fill="currentColor" opacity="0.75" />
      <circle cx="18" cy="22" r="1.5" fill="currentColor" opacity="0.75" />
    </svg>
  );
}

/**
 * 02. NETWORK INFRASTRUCTURE (Flagship Hero / Services)
 * High-speed multi-tier fiber optical nexus:
 * Central photonic routing core, multi-axis redundant optical buses, faceted junction nodes,
 * and high-density packet transmission vectors.
 */
export function NetworkInfrastructureIcon({ size = 24, strokeWidth = 1.75, className = '', ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Ambient background packet grid */}
      <circle cx="16" cy="16" r="14" strokeWidth="1" strokeDasharray="2 3" strokeOpacity="0.2" />
      
      {/* Central Photonic Core Switch Diamond */}
      <polygon points="16,9 23,16 16,23 9,16" strokeWidth={strokeWidth} fill="currentColor" fillOpacity="0.12" />
      <rect x="13.5" y="13.5" width="5" height="5" rx="1.2" fill="currentColor" stroke="none" />
      
      {/* North / South / East / West Distribution Aggregators */}
      {/* North Aggregator */}
      <circle cx="16" cy="4.5" r="2.5" strokeWidth={strokeWidth} fill="currentColor" fillOpacity="0.15" />
      <path d="M16 7V9" strokeWidth={strokeWidth} />
      <circle cx="16" cy="4.5" r="1" fill="currentColor" stroke="none" />
      
      {/* South Aggregator */}
      <circle cx="16" cy="27.5" r="2.5" strokeWidth={strokeWidth} fill="currentColor" fillOpacity="0.15" />
      <path d="M16 23V25" strokeWidth={strokeWidth} />
      <circle cx="16" cy="27.5" r="1" fill="currentColor" stroke="none" />
      
      {/* West Aggregator */}
      <circle cx="4.5" cy="16" r="2.5" strokeWidth={strokeWidth} fill="currentColor" fillOpacity="0.15" />
      <path d="M7 16H9" strokeWidth={strokeWidth} />
      <circle cx="4.5" cy="16" r="1" fill="currentColor" stroke="none" />
      
      {/* East Aggregator */}
      <circle cx="27.5" cy="16" r="2.5" strokeWidth={strokeWidth} fill="currentColor" fillOpacity="0.15" />
      <path d="M23 16H25" strokeWidth={strokeWidth} />
      <circle cx="27.5" cy="16" r="1" fill="currentColor" stroke="none" />

      {/* Cross-Connect Waveguide Traces with Micro-Junctions */}
      <path d="M7 7L11.5 11.5" strokeWidth="1.2" strokeOpacity="0.5" />
      <circle cx="6" cy="6" r="1" fill="currentColor" stroke="none" opacity="0.6" />

      <path d="M25 7L20.5 11.5" strokeWidth="1.2" strokeOpacity="0.5" />
      <circle cx="26" cy="6" r="1" fill="currentColor" stroke="none" opacity="0.6" />

      <path d="M7 25L11.5 20.5" strokeWidth="1.2" strokeOpacity="0.5" />
      <circle cx="6" cy="26" r="1" fill="currentColor" stroke="none" opacity="0.6" />

      <path d="M25 25L20.5 20.5" strokeWidth="1.2" strokeOpacity="0.5" />
      <circle cx="26" cy="26" r="1" fill="currentColor" stroke="none" opacity="0.6" />

      {/* Dynamic Telemetry Indicators */}
      <path d="M13 16H11M21 16H19" strokeWidth="1.5" strokeOpacity="0.75" />
      <path d="M16 13V11M16 21V19" strokeWidth="1.5" strokeOpacity="0.75" />
    </svg>
  );
}

/**
 * 03. CYBERSECURITY & ZERO-TRUST DEFENSE (Flagship Hero / Services)
 * Multi-layer crystalline cryptographic armor:
 * Hardened faceted outer carapace, internal cryptographic key-matrix,
 * perimeter threat absorption field, and micro-circuit bus lines.
 */
export function SecurityShieldIcon({ size = 24, strokeWidth = 1.75, className = '', ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Outer Faceted Armor Contour */}
      <path
        d="M16 2.5L5 7.5V15C5 22.5 9.7 28.2 16 30C22.3 28.2 27 22.5 27 15V7.5L16 2.5Z"
        strokeWidth={strokeWidth}
        fill="currentColor"
        fillOpacity="0.08"
      />

      {/* Intermediate Cryptographic Deflector Prism */}
      <path
        d="M16 6.8L8.5 10.5V15.5C8.5 20.8 11.7 24.8 16 26.2C20.3 24.8 23.5 20.8 23.5 15.5V10.5L16 6.8Z"
        strokeWidth="1.2"
        strokeDasharray="2.5 2"
        strokeOpacity="0.6"
      />

      {/* Central Zero-Trust Cryptographic Core Vault */}
      <polygon
        points="16,11 20,15 16,19 12,15"
        strokeWidth="1.5"
        fill="currentColor"
        fillOpacity="0.22"
      />
      <circle cx="16" cy="15" r="1.5" fill="currentColor" stroke="none" />
      <path d="M16 19V22.5" strokeWidth="1.8" />
      <circle cx="16" cy="23.5" r="0.75" fill="currentColor" stroke="none" />

      {/* Perimeter Cryptographic Scanlines & Ticks */}
      <path d="M10 13H11.5M20.5 13H22" strokeWidth="1.2" strokeOpacity="0.7" />
      <path d="M11 17H12.5M19.5 17H21" strokeWidth="1.2" strokeOpacity="0.7" />
      <circle cx="16" cy="2.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

/**
 * 04. CCTV & INTELLIGENT AI SURVEILLANCE (Flagship Hero / Services)
 * Robotic 4K optical sensor turret:
 * Aerodynamic gimbal housing, precision multi-element aperture lens with concentric optical rings,
 * laser telemetry rangefinder beam, and active HUD targeting reticles [ + ].
 */
export function SurveillanceCameraIcon({ size = 24, strokeWidth = 1.75, className = '', ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Ceiling / Mast Structural Mounting Flange */}
      <path d="M3 5H13" strokeWidth={strokeWidth} />
      <path d="M8 5V9.5" strokeWidth={strokeWidth} />
      <path d="M8 9.5L12 12.5" strokeWidth="1.5" />

      {/* Sleek Aerodynamic Optical Housing Chassis */}
      <path
        d="M5 14C5 12.3 6.3 11 8 11H20C21.7 11 23 12.3 23 14V21C23 22.7 21.7 24 20 24H8C6.3 24 5 22.7 5 21V14Z"
        strokeWidth={strokeWidth}
        fill="currentColor"
        fillOpacity="0.08"
      />

      {/* Front Optical Bezel Cone */}
      <path d="M23 14.5L29 11.5V23.5L23 20.5" strokeWidth={strokeWidth} fill="currentColor" fillOpacity="0.14" />
      <line x1="29" y1="13.5" x2="29" y2="21.5" strokeWidth="1.5" />

      {/* High-Resolution Multi-Element Glass Lens */}
      <circle cx="13" cy="17.5" r="4" strokeWidth={strokeWidth} fill="currentColor" fillOpacity="0.2" />
      <circle cx="13" cy="17.5" r="2" strokeWidth="1.2" strokeOpacity="0.8" />
      <circle cx="13" cy="17.5" r="0.9" fill="currentColor" stroke="none" />

      {/* HUD Telemetry Targeting Crosshairs */}
      <path d="M13 11V9.5M13 25.5V24" strokeWidth="1.2" strokeOpacity="0.5" />
      <path d="M4 17.5H2.5" strokeWidth="1.2" strokeOpacity="0.5" />
      
      {/* Infrared / Laser Rangefinder Emitter & Status LED */}
      <circle cx="20" cy="13.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="8" cy="21.5" r="0.8" fill="currentColor" stroke="none" opacity="0.6" />

      {/* Active Infrared Wave Beams */}
      <path d="M29 16H31M29 19H31" strokeWidth="1.2" strokeOpacity="0.5" />
    </svg>
  );
}

/**
 * 05. BIOMETRIC ACCESS CONTROL & IDENTITY GATEWAY
 * Contactless smart credential and biometric reader with micro-circuit bus lines,
 * laser verification beam, and biometric fingerprint ridge topology.
 */
export function AccessControlIcon({ size = 24, strokeWidth = 1.75, className = '', ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Smart Card Chassis */}
      <rect
        x="4"
        y="4"
        width="24"
        height="24"
        rx="5"
        strokeWidth={strokeWidth}
        fill="currentColor"
        fillOpacity="0.08"
      />

      {/* Embedded Biometric Crypto Microchip */}
      <rect
        x="9"
        y="9"
        width="8"
        height="7"
        rx="1.5"
        strokeWidth={strokeWidth}
        fill="currentColor"
        fillOpacity="0.2"
      />
      <path d="M13 9V16M9 12.5H17" strokeWidth="1" strokeOpacity="0.5" />

      {/* Contactless RFID / NFC Wavefront Emitter */}
      <path d="M21 8.5C22.5 10 23.3 11.8 23.3 13.8C23.3 15.8 22.5 17.6 21 19.1" strokeWidth="1.5" strokeOpacity="0.75" />
      <path d="M24 6C26.2 8.2 27.2 11 27.2 13.8C27.2 16.6 26.2 19.4 24 21.6" strokeWidth="1.2" strokeOpacity="0.4" />

      {/* Biometric Thumbprint / Security Ridge Array */}
      <path d="M10 22C11.5 20.8 13.5 20.2 16 20.2C18.5 20.2 20.5 20.8 22 22" strokeWidth="1.5" strokeOpacity="0.7" />
      <path d="M12 25C13.2 24.2 14.5 23.8 16 23.8C17.5 23.8 18.8 24.2 20 25" strokeWidth="1.3" strokeOpacity="0.5" />

      {/* Status Auth LED */}
      <circle cx="8" cy="8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

/**
 * 06. PHASED-ARRAY WIRELESS & MICROWAVE RF
 * High-gain beamforming parabolic dish with dual-frequency harmonic wavefronts,
 * isometric emitter antenna, and microwave relay nodes.
 */
export function WirelessMeshIcon({ size = 24, strokeWidth = 1.75, className = '', ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Base Photonic Emitter Core */}
      <circle cx="16" cy="26" r="2.5" strokeWidth={strokeWidth} fill="currentColor" fillOpacity="0.25" />
      <circle cx="16" cy="26" r="1.2" fill="currentColor" stroke="none" />
      <path d="M16 23.5V19" strokeWidth="1.8" />

      {/* Tier 1 Primary Wavefront */}
      <path
        d="M11 18.5C12.5 17 14.2 16.2 16 16.2C17.8 16.2 19.5 17 21 18.5"
        strokeWidth={strokeWidth}
      />
      <circle cx="11" cy="18.5" r="0.75" fill="currentColor" stroke="none" />
      <circle cx="21" cy="18.5" r="0.75" fill="currentColor" stroke="none" />

      {/* Tier 2 Wide-Angle Wavefront */}
      <path
        d="M7 13.5C9.5 11 12.6 9.8 16 9.8C19.4 9.8 22.5 11 25 13.5"
        strokeWidth={strokeWidth}
        strokeOpacity="0.8"
      />
      <circle cx="7" cy="13.5" r="0.75" fill="currentColor" stroke="none" />
      <circle cx="25" cy="13.5" r="0.75" fill="currentColor" stroke="none" />

      {/* Tier 3 Long-Range Horizon Wavefront */}
      <path
        d="M3 8.5C6.5 5 11 3.5 16 3.5C21 3.5 25.5 5 29 8.5"
        strokeWidth="1.4"
        strokeOpacity="0.45"
      />
      <circle cx="3" cy="8.5" r="1" fill="currentColor" stroke="none" opacity="0.6" />
      <circle cx="29" cy="8.5" r="1" fill="currentColor" stroke="none" opacity="0.6" />

      {/* Center Directional Polar Vector */}
      <path d="M16 13V5" strokeWidth="1" strokeDasharray="1.5 1.5" strokeOpacity="0.5" />
      <polygon points="16,2.5 14.5,5.5 17.5,5.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

/**
 * 07. HARDWARE DIAGNOSTICS & 24/7 SLA CALIBRATION
 * Optical spectrum analyzer, precision OTDR fiber splicer probe,
 * and micro-calibrator vernier scale.
 */
export function MaintenanceDiagnosticsIcon({ size = 24, strokeWidth = 1.75, className = '', ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Precision Calibrator Shaft */}
      <path
        d="M19.5 8.5L23.5 12.5L11.5 24.5C10.5 25.5 9 26 7.5 26H5.5V24C5.5 22.5 6 21 7 20L19.5 8.5Z"
        strokeWidth={strokeWidth}
        fill="currentColor"
        fillOpacity="0.08"
      />
      
      {/* Optical Tuning Head with Vernier Scale */}
      <path
        d="M19.5 8.5L21.5 6.5C22.8 5.2 24.8 5.2 26.2 6.5C27.5 7.8 27.5 9.8 26.2 11.2L23.5 12.5"
        strokeWidth={strokeWidth}
      />
      <circle cx="24.5" cy="8.5" r="1.5" fill="currentColor" stroke="none" />

      {/* Sensor Calibration Dial Hashmarks */}
      <path d="M13.5 14.5L17.5 18.5" strokeWidth="1.2" strokeOpacity="0.7" />
      <path d="M16 12L20 16" strokeWidth="1" strokeOpacity="0.5" />
      <path d="M11 17L15 21" strokeWidth="1" strokeOpacity="0.5" />

      {/* Optical Laser Probe Needle */}
      <path d="M5.5 26L2.5 29" strokeWidth="2.2" />
      <circle cx="2.5" cy="29" r="0.75" fill="currentColor" stroke="none" />

      {/* Diagnostic Pulse Indicator */}
      <circle cx="8" cy="8" r="2.5" strokeWidth="1" strokeDasharray="1.5 1.5" strokeOpacity="0.4" />
      <path d="M8 6.5V9.5M6.5 8H9.5" strokeWidth="1" strokeOpacity="0.6" />
    </svg>
  );
}

/**
 * 08. CLOUD FABRIC & DISTRIBUTED DIGITAL PLATFORMS
 * Geodesic planetary data sphere interlaced with orbital synchronization lines
 * and distributed computing cluster nodes.
 */
export function DigitalSolutionsIcon({ size = 24, strokeWidth = 1.75, className = '', ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Outer Geodesic Sphere Contour */}
      <circle cx="16" cy="16" r="12.5" strokeWidth={strokeWidth} fill="currentColor" fillOpacity="0.06" />

      {/* Axial Geodesic Coordinates */}
      <ellipse cx="16" cy="16" rx="5.5" ry="12.5" strokeWidth="1.2" strokeOpacity="0.6" />
      <path d="M4.5 12H27.5" strokeWidth="1" strokeOpacity="0.45" />
      <path d="M4.5 20H27.5" strokeWidth="1" strokeOpacity="0.45" />

      {/* Global High-Speed Interconnect Bus Nodes */}
      <circle cx="16" cy="3.5" r="2" fill="currentColor" />
      <circle cx="16" cy="28.5" r="2" fill="currentColor" />
      <circle cx="3.5" cy="16" r="2" fill="currentColor" />
      <circle cx="28.5" cy="16" r="2" fill="currentColor" />
      
      {/* Central Cloud Orchestration Hub */}
      <circle cx="16" cy="16" r="2.8" fill="currentColor" stroke="none" />
      <circle cx="16" cy="16" r="5" strokeWidth="1" strokeDasharray="2 2" strokeOpacity="0.5" />
    </svg>
  );
}

/**
 * 09. ENTERPRISE HIGH-DENSITY RACKMOUNT SERVER
 * Dual 1U/2U rack chassis with hot-swap NVMe drive bays,
 * 100G QSFP optical transceiver ports, and real-time activity LED telemetry.
 */
export function EnterpriseServerIcon({ size = 24, strokeWidth = 1.75, className = '', ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Upper 1U Server Blade Chassis */}
      <rect x="3" y="5" width="26" height="9" rx="2" strokeWidth={strokeWidth} fill="currentColor" fillOpacity="0.08" />
      <circle cx="7.5" cy="9.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="11" cy="9.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="14.5" cy="9.5" r="1" fill="currentColor" stroke="none" />
      <path d="M19 8.5H25" strokeWidth="1.5" strokeDasharray="1.5 1.5" />
      
      {/* Lower 1U Server Blade Chassis */}
      <rect x="3" y="18" width="26" height="9" rx="2" strokeWidth={strokeWidth} fill="currentColor" fillOpacity="0.08" />
      <circle cx="7.5" cy="22.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="11" cy="22.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="14.5" cy="22.5" r="1" fill="currentColor" stroke="none" />
      <path d="M19 21.5H25" strokeWidth="1.5" strokeDasharray="1.5 1.5" />

      {/* Redundant Optical Interconnect Buses */}
      <path d="M16 14V18" strokeWidth="2" strokeDasharray="1 1" />
      <path d="M22 14V18" strokeWidth="1.2" strokeOpacity="0.5" />

      {/* Mounting Rack Ear Screws */}
      <line x1="4.5" y1="6.5" x2="4.5" y2="7.5" strokeWidth="1.5" />
      <line x1="27.5" y1="6.5" x2="27.5" y2="7.5" strokeWidth="1.5" />
      <line x1="4.5" y1="19.5" x2="4.5" y2="20.5" strokeWidth="1.5" />
      <line x1="27.5" y1="19.5" x2="27.5" y2="20.5" strokeWidth="1.5" />
    </svg>
  );
}

/**
 * 10. AI / MACHINE INTELLIGENCE (SparklesAIIcon)
 * Holographic optical diamond with radiant tensor vectors
 */
export function SparklesAIIcon({ size = 20, strokeWidth = 1.75, className = '', ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Primary Radiant AI Flare */}
      <path
        d="M12 2C12 7.5 16.5 12 22 12C16.5 12 12 16.5 12 22C12 16.5 7.5 12 2 12C7.5 12 12 7.5 12 2Z"
        strokeWidth={strokeWidth}
        fill="currentColor"
        fillOpacity="0.14"
      />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
      
      {/* Micro Secondary Starlet */}
      <path
        d="M19 4C19 5.8 20.2 7 22 7C20.2 7 19 8.2 19 10C19 8.2 17.8 7 16 7C17.8 7 19 5.8 19 4Z"
        strokeWidth="1.2"
        fill="currentColor"
        fillOpacity="0.2"
      />
    </svg>
  );
}

/**
 * 11. NEURAL SYNAPSE / DEEP ANALYTICS (BrainCircuitIcon)
 * Deep learning neural nodes with synaptic interconnect traces
 */
export function BrainCircuitIcon({ size = 24, strokeWidth = 1.75, className = '', ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Outer Cranial Lattice */}
      <path d="M12 4C9 4 6 5.5 5 8.5C4 11.5 4.5 14.5 6.5 16.5C7.5 17.5 8 19 8 20.5H16C16 19 16.5 17.5 17.5 16.5C19.5 14.5 20 11.5 19 8.5C18 5.5 15 4 12 4Z" strokeWidth={strokeWidth} fill="currentColor" fillOpacity="0.06" />
      
      {/* Neural Core Synapse Junctions */}
      <circle cx="12" cy="9" r="1.5" fill="currentColor" />
      <circle cx="9" cy="13" r="1.5" fill="currentColor" />
      <circle cx="15" cy="13" r="1.5" fill="currentColor" />
      <circle cx="12" cy="17" r="1.5" fill="currentColor" />

      {/* Synaptic Pathway Traces */}
      <path d="M12 10.5V15.5M10.5 13H13.5M9 13L12 9L15 13L12 17L9 13" strokeWidth="1.2" strokeOpacity="0.75" />
    </svg>
  );
}

/**
 * 12. QUANTUM MICROPROCESSOR ARCHITECTURE (CpuProcessorIcon)
 * High-performance silicon die with multi-bus interconnect pins
 */
export function CpuProcessorIcon({ size = 24, strokeWidth = 1.75, className = '', ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Silicon Die Package */}
      <rect x="5" y="5" width="14" height="14" rx="2.5" strokeWidth={strokeWidth} fill="currentColor" fillOpacity="0.1" />
      <rect x="8.5" y="8.5" width="7" height="7" rx="1.5" strokeWidth="1.4" fill="currentColor" fillOpacity="0.2" />
      <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />

      {/* Top Bus Pins */}
      <line x1="8.5" y1="2" x2="8.5" y2="5" strokeWidth="1.5" />
      <line x1="12" y1="2" x2="12" y2="5" strokeWidth="1.5" />
      <line x1="15.5" y1="2" x2="15.5" y2="5" strokeWidth="1.5" />

      {/* Bottom Bus Pins */}
      <line x1="8.5" y1="19" x2="8.5" y2="22" strokeWidth="1.5" />
      <line x1="12" y1="19" x2="12" y2="22" strokeWidth="1.5" />
      <line x1="15.5" y1="19" x2="15.5" y2="22" strokeWidth="1.5" />

      {/* Left Bus Pins */}
      <line x1="2" y1="8.5" x2="5" y2="8.5" strokeWidth="1.5" />
      <line x1="2" y1="12" x2="5" y2="12" strokeWidth="1.5" />
      <line x1="2" y1="15.5" x2="5" y2="15.5" strokeWidth="1.5" />

      {/* Right Bus Pins */}
      <line x1="19" y1="8.5" x2="22" y2="8.5" strokeWidth="1.5" />
      <line x1="19" y1="12" x2="22" y2="12" strokeWidth="1.5" />
      <line x1="19" y1="15.5" x2="22" y2="15.5" strokeWidth="1.5" />
    </svg>
  );
}

/**
 * 13. MULTI-ZONE CLOUD FABRIC (CloudFabricIcon)
 * Distributed cloud infrastructure node cluster
 */
export function CloudFabricIcon({ size = 24, strokeWidth = 1.75, className = '', ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path
        d="M6.5 18C4 18 2 16 2 13.5C2 11.2 3.6 9.3 5.8 9C6.4 5.6 9.4 3 13 3C17.1 3 20.5 6.1 20.9 10.2C21.6 10.6 22 11.5 22 12.5C22 13.9 20.9 15 19.5 15H17.5"
        strokeWidth={strokeWidth}
        fill="currentColor"
        fillOpacity="0.08"
      />
      <circle cx="12" cy="11" r="1.5" fill="currentColor" />
      <path d="M12 12.5V18.5M9.5 16L12 18.5L14.5 16" strokeWidth="1.6" />
      <circle cx="8" cy="18.5" r="0.75" fill="currentColor" stroke="none" />
      <circle cx="16" cy="18.5" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

/**
 * 14. CRYPTOGRAPHICALLY VERIFIED SHIELD (ShieldVerifiedIcon)
 */
export function ShieldVerifiedIcon({ size = 24, strokeWidth = 1.75, className = '', ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path
        d="M12 2.5L4 6V11.5C4 16.8 7.4 21.2 12 22.5C16.6 21.2 20 16.8 20 11.5V6L12 2.5Z"
        strokeWidth={strokeWidth}
        fill="currentColor"
        fillOpacity="0.1"
      />
      <path d="M8.5 11.5L11 14L15.5 9.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * 15. ULTRA-LOW LATENCY SPEED (LightningBoltIcon)
 */
export function LightningBoltIcon({ size = 24, strokeWidth = 1.75, className = '', ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <polygon
        points="13,2 4,13 11,13 9,22 20,9 13,9"
        strokeWidth={strokeWidth}
        fill="currentColor"
        fillOpacity="0.18"
      />
    </svg>
  );
}

/**
 * 16. ENTERPRISE ENCRYPTED DATA VAULT (DataVaultIcon)
 */
export function DataVaultIcon({ size = 24, strokeWidth = 1.75, className = '', ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <ellipse cx="12" cy="5" rx="8.5" ry="3" strokeWidth={strokeWidth} fill="currentColor" fillOpacity="0.12" />
      <path d="M3.5 5V12C3.5 13.7 7.3 15 12 15C16.7 15 20.5 13.7 20.5 12V5" strokeWidth={strokeWidth} />
      <path d="M3.5 12V19C3.5 20.7 7.3 22 12 22C16.7 22 20.5 20.7 20.5 19V12" strokeWidth={strokeWidth} />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
      <circle cx="12" cy="19" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

/**
 * 17. OPTICAL SENSOR EYE HUD (EyeSensorIcon)
 */
export function EyeSensorIcon({ size = 20, strokeWidth = 1.75, className = '', ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M2 12C3.8 7.5 7.6 4.5 12 4.5C16.4 4.5 20.2 7.5 22 12C20.2 16.5 16.4 19.5 12 19.5C7.6 19.5 3.8 16.5 2 12Z" strokeWidth={strokeWidth} fill="currentColor" fillOpacity="0.08" />
      <circle cx="12" cy="12" r="3.5" strokeWidth={strokeWidth} fill="currentColor" fillOpacity="0.2" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
      <line x1="12" y1="2" x2="12" y2="4" strokeWidth="1.2" strokeOpacity="0.5" />
      <line x1="12" y1="20" x2="12" y2="22" strokeWidth="1.2" strokeOpacity="0.5" />
    </svg>
  );
}

/**
 * 18. CRYPTOGRAPHIC LOCK (LockCryptoIcon)
 */
export function LockCryptoIcon({ size = 20, strokeWidth = 1.75, className = '', ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <rect x="4.5" y="10" width="15" height="11" rx="3" strokeWidth={strokeWidth} fill="currentColor" fillOpacity="0.12" />
      <path d="M8 10V6.5C8 4.3 9.8 2.5 12 2.5C14.2 2.5 16 4.3 16 6.5V10" strokeWidth={strokeWidth} />
      <circle cx="12" cy="15" r="1.5" fill="currentColor" stroke="none" />
      <path d="M12 16.5V18.5" strokeWidth="1.8" />
    </svg>
  );
}

/**
 * 19. NOC TELEMETRY CONSOLE (TelemetryTerminalIcon)
 */
export function TelemetryTerminalIcon({ size = 18, strokeWidth = 1.75, className = '', ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <rect x="2.5" y="4" width="19" height="16" rx="3.5" strokeWidth={strokeWidth} fill="currentColor" fillOpacity="0.08" />
      <path d="M6.5 9.5L10 12.5L6.5 15.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="12.5" y1="15.5" x2="17.5" y2="15.5" strokeWidth="2" strokeLinecap="round" />
      <circle cx="18" cy="7.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

/**
 * 20. PRECISION VERIFICATION CHECK CIRCLE (TechnicalCheckCircle)
 */
export function TechnicalCheckCircle({ size = 20, strokeWidth = 1.75, className = '', ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <circle cx="12" cy="12" r="9.5" strokeWidth={strokeWidth} fill="currentColor" fillOpacity="0.08" />
      <circle cx="12" cy="12" r="6" strokeDasharray="2 2" strokeOpacity="0.35" />
      <path d="M8 12L10.8 14.8L16 9.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * 21. EDITORIAL QUOTATION MARK (QuoteIcon)
 */
export function QuoteIcon({ size = 24, strokeWidth = 1.75, className = '', ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M4 14C4 11.5 5.5 9 8 8L9 9.5C7.5 10.5 7 11.5 7 13H10V18H4V14Z" fill="currentColor" fillOpacity="0.2" strokeWidth={strokeWidth} />
      <path d="M14 14C14 11.5 15.5 9 18 8L19 9.5C17.5 10.5 17 11.5 17 13H20V18H14V14Z" fill="currentColor" fillOpacity="0.2" strokeWidth={strokeWidth} />
    </svg>
  );
}

/**
 * 22. SECURITY CONSENT / COOKIE TOKEN (CookieIcon)
 */
export function CookieIcon({ size = 20, strokeWidth = 1.75, className = '', ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 11 21 10 20 10C19 10 18 9 18 8C18 7 18.5 6 18.5 5C18.5 3.5 17 2 15 2C14 2 13 2 12 2Z" strokeWidth={strokeWidth} fill="currentColor" fillOpacity="0.1" />
      <circle cx="8" cy="9" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="8" cy="15" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="14" cy="16" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="13" cy="10" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

/**
 * 23. SYSTEM DIAGNOSTIC ERROR 404 (ServerCrashIcon)
 */
export function ServerCrashIcon({ size = 32, strokeWidth = 1.75, className = '', ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <rect x="3" y="3" width="18" height="7" rx="2" strokeWidth={strokeWidth} fill="currentColor" fillOpacity="0.08" />
      <rect x="3" y="14" width="18" height="7" rx="2" strokeWidth={strokeWidth} fill="currentColor" fillOpacity="0.08" />
      <line x1="6" y1="6.5" x2="8" y2="6.5" strokeWidth="1.5" />
      <line x1="6" y1="17.5" x2="8" y2="17.5" strokeWidth="1.5" />
      {/* Alert diagnostic lightning break */}
      <path d="M14 6L11 11H13L10 18" strokeWidth="1.8" stroke="currentColor" />
    </svg>
  );
}

/**
 * 24. DIRECT NOC TELECOM HANDSET (ElegantPhoneIcon)
 */
export function ElegantPhoneIcon({ size = 20, strokeWidth = 1.75, className = '', ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path
        d="M5 4H9L10.5 8L8.5 9.5C9.6 12 12 14.4 14.5 15.5L16 13.5L20 15V19C20 20.1 19.1 21 18 21C9.7 21 3 14.3 3 6C3 4.9 3.9 4 5 4Z"
        strokeWidth={strokeWidth}
        fill="currentColor"
        fillOpacity="0.1"
      />
      <path d="M15 4C17.2 4.5 19 6.3 19.5 8.5" strokeWidth="1.4" strokeOpacity="0.75" />
      <path d="M17.5 1.5C21 2.3 22.8 5 23.5 8.5" strokeWidth="1.2" strokeOpacity="0.4" />
    </svg>
  );
}

/**
 * 25. ENCRYPTED DISPATCH MAIL (ElegantMailIcon)
 */
export function ElegantMailIcon({ size = 20, strokeWidth = 1.75, className = '', ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <rect x="3" y="5" width="18" height="14" rx="3" strokeWidth={strokeWidth} fill="currentColor" fillOpacity="0.08" />
      <path d="M3 7L12 13.5L21 7" strokeWidth={strokeWidth} />
      <circle cx="12" cy="13.5" r="1.25" fill="currentColor" stroke="none" />
      <path d="M3 17L8.5 12.5" strokeWidth="1" strokeOpacity="0.35" />
      <path d="M21 17L15.5 12.5" strokeWidth="1" strokeOpacity="0.35" />
    </svg>
  );
}

/**
 * 26. GEOSPATIAL RADAR BEACON PIN (ElegantMapPinIcon)
 */
export function ElegantMapPinIcon({ size = 20, strokeWidth = 1.75, className = '', ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path
        d="M12 2C7.5 2 4 5.5 4 10C4 15.5 11 21.2 11.5 21.6C11.8 21.8 12.2 21.8 12.5 21.6C13 21.2 20 15.5 20 10C20 5.5 16.5 2 12 2Z"
        strokeWidth={strokeWidth}
        fill="currentColor"
        fillOpacity="0.1"
      />
      <circle cx="12" cy="9.5" r="2.8" strokeWidth={strokeWidth} fill="currentColor" fillOpacity="0.2" />
      <circle cx="12" cy="9.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

/**
 * 27. SLA 24/7 CHRONOMETER (ElegantClockIcon)
 */
export function ElegantClockIcon({ size = 20, strokeWidth = 1.75, className = '', ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <circle cx="12" cy="12" r="9.5" strokeWidth={strokeWidth} fill="currentColor" fillOpacity="0.08" />
      <path d="M12 6.5V12L15.5 14" strokeWidth="2" />
      <circle cx="12" cy="3.5" r="0.75" fill="currentColor" stroke="none" />
      <circle cx="20.5" cy="12" r="0.75" fill="currentColor" stroke="none" />
      <circle cx="12" cy="20.5" r="0.75" fill="currentColor" stroke="none" />
      <circle cx="3.5" cy="12" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

/**
 * 28. MICROWAVE & DIRECTIONAL ANTENNA (ElegantRadioIcon)
 */
export function ElegantRadioIcon({ size = 20, strokeWidth = 1.75, className = '', ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M12 21V10" strokeWidth="2" />
      <circle cx="12" cy="8.5" r="2.5" fill="currentColor" />
      <path d="M8 21H16" strokeWidth={strokeWidth} />
      <path d="M6 6.5C4 8.5 4 11 6 13" strokeWidth="1.5" strokeOpacity="0.7" />
      <path d="M18 6.5C20 8.5 20 11 18 13" strokeWidth="1.5" strokeOpacity="0.7" />
      <path d="M3 4C-0.5 7.5 -0.5 12.5 3 16" strokeWidth="1.2" strokeOpacity="0.4" />
      <path d="M21 4C24.5 7.5 24.5 12.5 21 16" strokeWidth="1.2" strokeOpacity="0.4" />
    </svg>
  );
}

/**
 * 29. TECHNICAL CHECKMARK (ElegantCheckIcon)
 */
export function ElegantCheckIcon({ size = 16, strokeWidth = 2, className = '', ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M3.5 8.5L6.5 11.5L12.5 4.5" />
    </svg>
  );
}

/**
 * 30. TACTICAL ARROWS & NAVIGATION
 */
export function ElegantArrowRight({ size = 18, strokeWidth = 2, className = '', ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M4 10H16M16 10L11 5M16 10L11 15" />
      <circle cx="4" cy="10" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function ElegantArrowLeft({ size = 18, strokeWidth = 2, className = '', ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M16 10H4M4 10L9 5M4 10L9 15" />
      <circle cx="16" cy="10" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function ElegantArrowUpRight({ size = 16, strokeWidth = 2, className = '', ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M4.5 11.5L11.5 4.5M11.5 4.5H6.5M11.5 4.5V9.5" />
    </svg>
  );
}

export function ElegantChevronLeft({ size = 18, strokeWidth = 2, className = '', ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M12.5 15L7.5 10L12.5 5" />
    </svg>
  );
}

export function ElegantChevronRight({ size = 18, strokeWidth = 2, className = '', ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M7.5 15L12.5 10L7.5 5" />
    </svg>
  );
}

/**
 * 31. THEME TOGGLE ICONS
 */
export function ElegantSunIcon({ size = 20, strokeWidth = 1.75, className = '', ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <circle cx="12" cy="12" r="4.5" strokeWidth={strokeWidth} fill="currentColor" fillOpacity="0.15" />
      <path d="M12 2V4.5M12 19.5V22M4.5 12H2M22 12H19.5M5.6 5.6L4 4M20 20L18.4 18.4M18.4 5.6L20 4M4 20L5.6 18.4" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" opacity="0.5" />
    </svg>
  );
}

export function ElegantMoonIcon({ size = 20, strokeWidth = 1.75, className = '', ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path
        d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"
        strokeWidth={strokeWidth}
        fill="currentColor"
        fillOpacity="0.15"
      />
      <circle cx="14" cy="9" r="1" fill="currentColor" stroke="none" opacity="0.6" />
      <circle cx="17" cy="14" r="0.75" fill="currentColor" stroke="none" opacity="0.4" />
    </svg>
  );
}
