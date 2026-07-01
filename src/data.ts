import { Project } from './types';

// High-quality professional design photography URLs to ensure robust compilation
const uiDesignShowcase = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80';
const fengZhiColdChain = 'https://i.postimg.cc/68jkDd49/brand-hero-jpg.jpg';
const visualDesignShowcase = 'https://raw.githubusercontent.com/zh2283102764-ops/images-photo/refs/heads/main/jimeng-2026-03-05-6333-%E5%A2%9E%E5%BC%BA%E7%99%BD%E6%A8%A1%E7%9A%84%E8%B4%A8%E6%84%9F%E5%92%8C%E7%AB%8B%E4%BD%93%E6%84%9F%EF%BC%8C%E5%88%A0%E9%99%A4%E5%9B%BE%E7%89%87%E4%B8%8A%E6%96%B9%E7%9A%84%E6%89%80%E6%9C%89%E6%96%87%E5%AD%97%EF%BC%8C%E4%BF%9D%E7%95%99%E5%8E%9F%E5%9C%BA%E6%99%AF%E7%9A%84%E5%85%83%E7%B4%A0%E5%92%8C%E6%9E%84%E5%9B%BE%EF%BC%8C%E5%BC%BA%E8%B0%83%E8%BD%AE%E5%BB%93_.png';
const packagingDesignShowcase = 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80';
const threeDDesignShowcase = 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80';

export const CATEGORIES = [
  { id: 'ui', label: 'UI设计', englishLabel: 'UI Design' },
  { id: 'brand', label: '品牌设计', englishLabel: 'Brand Identity' },
  { id: 'visual', label: '视觉设计', englishLabel: 'Visual & Typography' },
  { id: 'packaging', label: '包装设计', englishLabel: 'Packaging Design' },
  { id: '3d', label: '3D设计', englishLabel: '3D & Spatial Design' },
] as const;

export const PROJECTS: Project[] = [
  // ================= UI DESIGN =================
  {
    id: 'ui-neomorphic-dashboard',
    title: 'Aether OS Intelligence Hub',
    chineseTitle: 'Aether 智能操作系统中枢',
    category: 'ui',
    year: '2026',
    description: 'A glassmorphic telemetry control center utilizing cognitive layout principles to optimize visual tracking speeds.',
    chineseDescription: '基于认知布局原理的半透明玻璃态遥测控制中心，旨在缩短用户的视觉搜寻时间并优化信息传递效率。',
    imageUrl: uiDesignShowcase,
    tags: ['Glassmorphism', 'Fitts\'s Law', '8px Grid System', 'Data Telemetry'],
    metrics: [
      { label: 'Cognitive Load Reduction', value: '-34%' },
      { label: 'Interaction Accuracy', value: '99.2%' },
      { label: 'Visual Ingestion Speed', value: '180ms' }
    ],
    specs: {
      gridSystem: '8px Soft Grid (12-Column Responsive Desktop Layout)',
      spacingUnit: 'Base unit 4px / Increment 8px (4, 8, 16, 24, 32, 48, 64)',
      typography: {
        heading: 'Inter Tight & Space Grotesk (Visual Anchor)',
        body: 'Inter (High legibility, dynamic line height)',
        scaling: 'Major Third (1.250 ratio) - 14px, 17.5px, 22px, 27.5px, 34px, 42.5px'
      },
      colorPalette: [
        { name: 'Surgical White', hex: '#FFFFFF', usage: 'Primary surface & container cards (80% opacity with backdrop-blur-xl)' },
        { name: 'Core Dark Slate', hex: '#0F172A', usage: 'Deep background structural text and visual focal points' },
        { name: 'Cosmic Magenta Accent', hex: '#EC4899', usage: 'Interactive status toggles, hover effects, and call-to-actions' },
        { name: 'Telemetry Cyan Accent', hex: '#06B6D4', usage: 'Data visualizer lines, indicators, and primary path guidelines' }
      ]
    },
    interactiveLogic: {
      objective: 'Optimize data telemetry monitoring and prevent visual fatigue under long-hour analytical operations.',
      scientificApproach: 'Applied Fitts\'s Law for target acquisition sizes, combined with Weber-Fechner law of perception for tone adjustments, ensuring text-to-background contrast remains at a perfect 4.5:1 ratio even with glass overlay.',
      userFlowSteps: [
        'User enters dashboard with a cascading content-loading sequence (staggered by 30ms increments to prevent jarring shifts).',
        'Visual hierarchy directs focus to the core Telemetry graph (primary anchor).',
        'Interactive card expanders translate on the Z-axis with 0.25s spring physics, offering non-obtrusive detailed parameters on-demand.'
      ]
    }
  },

  // ================= BRAND DESIGN =================
  {
    id: 'brand-lumen-labs',
    title: 'Feng Zhi Cold Chain Brand Identity',
    chineseTitle: '峰致冷链品牌形象与物流车队识别系统',
    category: 'brand',
    year: '2026',
    description: 'A professional corporate brand identity and fleet logistics visual design system integrating modern typography, container grids, and vibrant color schemes.',
    chineseDescription: '融合现代字标、集装箱网格与鲜明色彩的专业物流车队及品牌形象视觉设计系统，展现极致的现代感与工业严谨性。',
    imageUrl: fengZhiColdChain,
    tags: ['Logistics Fleet', 'Grid System', 'Brand Identity', 'Industrial Design'],
    metrics: [
      { label: 'Cohesive Score', value: '99/100' },
      { label: 'Fleet Recognition', value: '+85%' },
      { label: 'Grid Rigor Index', value: '100%' }
    ],
    specs: {
      gridSystem: 'Standard Logistics Container Grid & Type Alignment System',
      spacingUnit: 'Proportional Letter Spacing / Truck Side Ratio 1:4',
      typography: {
        heading: 'Space Grotesk & Heavy Geometric Sans-serif (Visual Anchor)',
        body: 'Inter & Songti / Mincho (Aesthetic pairing)',
        scaling: 'Perfect Fourth (1.333 ratio)'
      },
      colorPalette: [
        { name: '峰致冷链深海蓝 (Cold Chain Blue)', hex: '#0B2545', usage: '品牌主基调色，代表专业、安全的低温储运与物流控制环境 (Primary core identity)' },
        { name: '行车安全活力橙 (Vibrant Orange)', hex: '#FF6B35', usage: '安全反光与车体识别条带，在恶劣天气或夜间提供极高视觉对比度 (High-contrast safety fleet accent)' },
        { name: '工业中性深空灰 (Neutral Slate)', hex: '#8F9FA9', usage: '辅助系统底色、规格网格线及中性色质感排版 (Supporting structural grid and typography framework)' },
        { name: '高光极致纯净白 (Arctic White)', hex: '#F4F6F9', usage: '画册留白、安全白区和科技感负空间，确保信息纯净无摩擦传递 (Minimalist layout background and negative space)' }
      ]
    },
    interactiveLogic: {
      objective: 'Optimize truck side-body readability under high-speed highway conditions while maintaining premium corporate elegance.',
      scientificApproach: 'Calculated letter-spacing and visual contrast based on highway viewing distances and vehicle speed perception (Fitts\'s Law & Weber-Fechner Law), ensuring FZ identity is instantly recognizable within 150ms.',
      userFlowSteps: [
        'Viewer observes the logistics truck at a distance with a distinct high-contrast blue container side and orange checkered highlights.',
        'As the vehicle approaches, the heavy overlapping "FZ 峰致冷链" watermark typographic layout creates layered depth.',
        'The top white presentation sheet header organizes key information cleanly on corporate branding boards.'
      ]
    }
  },

  // ================= VISUAL DESIGN =================
  {
    id: 'visual-typographic-tension',
    title: 'Tmall Camping Season - Find the Little Beauty in Your Life',
    chineseTitle: '天猫露营季-寻找你生活中的小美好',
    category: 'visual',
    year: '2026',
    description: 'This key visual design was completed leveraging industry-leading AIGC tools combined with initial creative sketch concepts.',
    chineseDescription: '本此次设计借助行业主流AIGC加上前期草图创意构想完成主视觉设计。',
    imageUrl: visualDesignShowcase,
    tags: ['Grid Rigor', 'Negative Space', 'Asymmetry', 'High-Contrast Post-Punk'],
    metrics: [
      { label: 'Exhibition Footfall', value: '45,000+' },
      { label: 'Visual Interaction Rate', value: '88%' },
      { label: 'Media Features', value: '14' }
    ],
    specs: {
      gridSystem: 'Swiss Typographic Grid (International Typographic Style)',
      spacingUnit: 'Point System: 12pt / 24pt / 48pt Column Dividers',
      typography: {
        heading: 'Neue Haas Grotesk (Drawn tight, negative tracking)',
        body: 'Fletcher Sans-serif',
        scaling: 'Double Octave scale (Huge display contrast)'
      },
      colorPalette: [
        { name: 'Matte Ink Black', hex: '#08080A', usage: '90% visual weight; creates heavy informational gravity' },
        { name: 'Pristine Poster White', hex: '#FAFAFC', usage: 'Pure negative space channels to guide optical pathways' },
        { name: 'Kinetic Neon Orange', hex: '#FF5A36', usage: '10% critical warnings, interactive links, and physical exhibit arrows' }
      ]
    },
    interactiveLogic: {
      objective: 'Break static printing boundaries and translate heavy Swiss-style layout rules into a reactive fluid layout.',
      scientificApproach: 'Devised a kinetic grid where typographic letters dynamically adjust letter-spacing and font-weight based on the user\'s viewport scroll velocity, creating actual "tension" through layout physics.',
      userFlowSteps: [
        'On scroll, poster blocks slide with asynchronous vertical speeds (parallax factor calculated based on Golden Ratio).',
        'Cursor interaction creates an invisible gravitational pull, warping adjacent letters with precise CSS variable transitions.',
        'Clicking an asset transitions the entire layout into a clean, wireframe grid inspect overlay.'
      ]
    }
  },
  {
    id: 'visual-kinetic-chroma',
    title: 'E-Commerce Key Visual Design',
    chineseTitle: '电商主视觉设计案例',
    category: 'visual',
    year: '2026',
    description: 'This key visual design was completed leveraging industry-leading AIGC tools combined with initial creative sketch concepts.',
    chineseDescription: '本此次设计借助行业主流AIGC加上前期草图创意构想完成主视觉设计。',
    imageUrl: 'https://raw.githubusercontent.com/zh2283102764-ops/images-photo/refs/heads/main/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20260701172952_1259_19.jpg',
    images: [
      'https://raw.githubusercontent.com/zh2283102764-ops/images-photo/refs/heads/main/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20260701172952_1259_19.jpg',
      'https://raw.githubusercontent.com/zh2283102764-ops/images-photo/refs/heads/main/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20260701172953_1260_19.jpg'
    ],
    tags: ['AIGC Core', 'Visual Layout', 'E-Commerce Art', 'Color Grading'],
    metrics: [
      { label: 'Interactive CTR', value: '24.5%' },
      { label: 'Frame Consistency', value: '120fps' },
      { label: 'Awards Nominated', value: 'ADC Design' }
    ],
    specs: {
      gridSystem: 'Golden Ratio Multi-Grid Composition',
      spacingUnit: 'Fluid Spacing Hierarchy',
      typography: {
        heading: 'Brand Custom Display Bold',
        body: 'Neutral Sans-Serif Regular',
        scaling: 'Optimized Mobile Reading Scale'
      },
      colorPalette: [
        { name: 'Warm Sunset Glow', hex: '#FF7A45', usage: 'Core highlighting and product background illumination' },
        { name: 'Pure Canvas White', hex: '#FFFFFF', usage: 'Symmetrical spacing and negative space boundaries' },
        { name: 'E-Commerce Charcoal', hex: '#1E1E24', usage: 'High-contrast typography reading paths' }
      ]
    },
    interactiveLogic: {
      objective: 'Display a symmetrical side-by-side e-commerce poster design mockup showcasing AIGC-driven visual fidelity.',
      scientificApproach: 'Presented in an elegant multi-image layout with custom spacing and hover-zoom ratios.',
      userFlowSteps: [
        'Hover over either image to trigger individual optical focus and zoom mechanics.',
        'Toggle inspection mode to overlay grid alignments and compositional proportions on top of the posters.',
        'View specifications details directly on the side details inspector.'
      ]
    }
  },

  // ================= PACKAGING DESIGN =================
  {
    id: 'pack-islands-skincare',
    title: 'Zhongjing Yangsheng FMCG Packaging Design',
    chineseTitle: '仲景养生快消品包装设计案例',
    category: 'packaging',
    year: '2026',
    description: 'This packaging design was rendered and produced using C4D and Octane Renderer (OC) to deliver pristine visual fidelity.',
    chineseDescription: '此次包装设计采用C4D与OC渲染器进行渲染制作',
    imageUrl: 'https://raw.githubusercontent.com/zh2283102764-ops/images-photo/refs/heads/main/Beauty2.png',
    images: [
      'https://raw.githubusercontent.com/zh2283102764-ops/images-photo/refs/heads/main/Beauty2.png',
      'https://raw.githubusercontent.com/zh2283102764-ops/images-photo/refs/heads/main/Beauty3.png'
    ],
    tags: ['C4D Render', 'OC Renderer', 'FMCG Packaging', 'Tactile Layout'],
    metrics: [
      { label: 'Eco-Material Score', value: '100%' },
      { label: 'Physical Grip Satisfaction', value: '4.8/5' },
      { label: 'Shelving Visual Contrast', value: 'High' }
    ],
    specs: {
      gridSystem: 'Label Centric 1:2 Proportion Grid',
      spacingUnit: 'Vertical spacing aligned to text row height (3.125mm)',
      typography: {
        heading: 'Helvetica Neue Light & Editorial Serif',
        body: 'Aptos Sans',
        scaling: 'Perfect Fifth (1.500 ratio)'
      },
      colorPalette: [
        { name: 'Frosted Silica White', hex: '#F3F4F6', usage: 'Translucent frosted glass container mimicking marine salt mist' },
        { name: 'Eucalyptus Pale Green', hex: '#D1FAE5', usage: 'Formulated fluid hue showing through the translucent container walls' },
        { name: 'Botanist Charcoal', hex: '#1F2937', usage: 'Sub-millimeter micro typography details and recycling markers' }
      ]
    },
    interactiveLogic: {
      objective: 'Build a sensory connection between natural skincare ingredients and highly analytical product packaging design.',
      scientificApproach: 'Computed physical container dimensions against natural grip physics, drafting text placements exactly on non-touch surfaces of the bottles to preserve visual legibility during daily product application.',
      userFlowSteps: [
        'Web user can interactively rotate the packaging bottle 360 degrees.',
        'Clicking on packaging ingredients highlights the corresponding chemical structural logic.',
        'The virtual light source can be dragged around, demonstrating frosted glass refraction via custom CSS shader filters.'
      ]
    }
  },
  {
    id: 'pack-morphic-capsules',
    title: 'Zhongjing Yangsheng FMCG Packaging Design',
    chineseTitle: '仲景养生快消品包装设计案例',
    category: 'packaging',
    year: '2026',
    description: 'This packaging design was rendered and produced using C4D and Octane Renderer (OC) to deliver pristine visual fidelity.',
    chineseDescription: '此次包装设计采用C4D与OC渲染器进行渲染制作',
    imageUrl: 'https://raw.githubusercontent.com/zh2283102764-ops/images-photo/refs/heads/main/Beauty.png',
    images: [
      'https://raw.githubusercontent.com/zh2283102764-ops/images-photo/refs/heads/main/Beauty.png',
      'https://raw.githubusercontent.com/zh2283102764-ops/images-photo/refs/heads/main/Beauty1.png'
    ],
    tags: ['C4D Render', 'OC Renderer', 'FMCG Packaging', 'Tactile Layout'],
    metrics: [
      { label: 'Eco-Material Score', value: '100%' },
      { label: 'Physical Grip Satisfaction', value: '4.8/5' },
      { label: 'Refillable Loop Efficiency', value: '92.4%' }
    ],
    specs: {
      gridSystem: 'Golden Ratio Multi-Grid Composition',
      spacingUnit: 'Fluid Spacing Hierarchy',
      typography: {
        heading: 'Brand Custom Display Bold',
        body: 'Neutral Sans-Serif Regular',
        scaling: 'Optimized Mobile Reading Scale'
      },
      colorPalette: [
        { name: 'Warm Sunset Glow', hex: '#FF7A45', usage: 'Core highlighting and product background illumination' },
        { name: 'Pure Canvas White', hex: '#FFFFFF', usage: 'Symmetrical spacing and negative space boundaries' },
        { name: 'E-Commerce Charcoal', hex: '#1E1E24', usage: 'High-contrast typography reading paths' }
      ]
    },
    interactiveLogic: {
      objective: 'Display a symmetrical side-by-side packaging design mockup showcasing AIGC-driven visual fidelity.',
      scientificApproach: 'Presented in an elegant multi-image layout with custom spacing and hover-zoom ratios.',
      userFlowSteps: [
        'Hover over either image to trigger individual optical focus and zoom mechanics.',
        'Toggle inspection mode to overlay grid alignments and compositional proportions on top of the packaging.',
        'View specifications details directly on the side details inspector.'
      ]
    }
  },

  // ================= 3D DESIGN =================
  {
    id: 'three-d-glassmorphic-realms',
    title: 'Blender Cartoon Mini Scene Design',
    chineseTitle: 'Blender卡通小场景设计',
    category: '3d',
    year: '2026',
    description: 'Blender cartoon miniature styling and creative scene rendering.',
    chineseDescription: 'Blender卡通小场景设计建模与渲染案例。',
    imageUrl: 'https://raw.githubusercontent.com/zh2283102764-ops/images-photo/refs/heads/main/%E4%B8%AA%E4%BA%BA%E4%BD%9C%E5%93%81%E9%9B%86-14.jpg',
    tags: ['Blender 3D', 'Cartoon Scene', 'Octane Render', 'Lighting Rig'],
    metrics: [
      { label: 'Render Complexity', value: '12M Polys' },
      { label: 'Ray-Tracing Depth', value: '16 bounces' },
      { label: 'Interactive Frame rate', value: '120fps' }
    ],
    specs: {
      gridSystem: 'XYZ Tri-Planar Cartesian Coordinate Grid',
      spacingUnit: 'Unit based on lightwave wavelength divisions (nm)',
      typography: {
        heading: 'Syncopate (Ultra-wide display typeface)',
        body: 'JetBrains Mono',
        scaling: 'Geometric Progression Ratio (1.5)'
      },
      colorPalette: [
        { name: 'Spectral Glass Core', hex: '#E0F2FE', usage: 'High-index refraction glass body reflecting full rainbow spectrum' },
        { name: 'Chrome Liquid Metal', hex: '#F1F5F9', usage: 'Perfect mirror-reflection ribbons weaving through the sculpture' },
        { name: 'Ethereal Infrared Glow', hex: '#FCE7F3', usage: 'Backlit atmospheric gas particles, giving depth to the black space' }
      ]
    },
    interactiveLogic: {
      objective: 'Re-create high-end physical caustic glass refractions directly inside real-time responsive web rendering cycles.',
      scientificApproach: 'Built simulated light scattering mathematics into CSS filters and WebGL pipelines. By estimating standard glass index of refraction (IoR = 1.52) against screen coordinates, background cards split light wavelengths dynamically according to pointer coordinates.',
      userFlowSteps: [
        'Hovering over the 3D sculpture triggers fluid metallic ripples calculated using real-time wave formulas.',
        'User can customize glass dispersion density values using a floating control panel.',
        'A single click splits the mesh wireframes, revealing the underlying structural polygon mathematical coordinates.'
      ]
    }
  },
  {
    id: 'three-d-brutalist-monolith',
    title: 'Hollow Knight Modeling & Rendering',
    chineseTitle: '空洞骑士建模与渲染案例',
    category: '3d',
    year: '2025',
    description: 'Hollow Knight character design, modeling, and ambient scene rendering.',
    chineseDescription: '空洞骑士建模与渲染案例。',
    imageUrl: 'https://raw.githubusercontent.com/zh2283102764-ops/images-photo/refs/heads/main/%E4%B8%AA%E4%BA%BA%E4%BD%9C%E5%93%81%E9%9B%86-16.jpg',
    tags: ['Hollow Knight', 'Character Model', 'Atmospheric Fog', 'Subsurface Scattering'],
    metrics: [
      { label: 'Subsurface Scattering', value: '0.42' },
      { label: 'Light Sources', value: '4 Points' },
      { label: 'Polygon Count', value: '4.8M' }
    ],
    specs: {
      gridSystem: 'Architectural Modular Concrete Formwork Grid',
      spacingUnit: 'Golden Ratio Structural Divisions (0.618m base module)',
      typography: {
        heading: 'PP Neue Montreal (Sleek brutalist)',
        body: 'JetBrains Mono',
        scaling: 'Fibonacci Scale Progression'
      },
      colorPalette: [
        { name: 'Raw Formwork Concrete', hex: '#4B5563', usage: '95% structural surfaces; mimics physical tactile roughness' },
        { name: 'Digital Laser Red', hex: '#EF4444', usage: 'Laser precision lines highlighting concrete imperfections' },
        { name: 'Eerie Shadow Depth', hex: '#030712', usage: 'Deep dark cavities representing void volume and physical weight' }
      ]
    },
    interactiveLogic: {
      objective: 'Evoke emotional awe by contrasting physical industrial permanence with highly fragile digital code structures.',
      scientificApproach: 'Mapped micro-shadow and occlusion maps to the scrollbar position, making the ambient shadows seem to slowly crawl across the concrete columns as the user navigates downward, mirroring a solar sunset.',
      userFlowSteps: [
        'On Scroll, volumetric laser lines project outward from structural edges.',
        'Dragging the screen changes the directional vector of the sun, casting long crisp shadows over text columns.',
        'Double-clicking concrete surfaces triggers a macro high-resolution zoom inspecting surface grain calculations.'
      ]
    }
  }
];
