import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'motion/react';
import { 
  ArrowUpRight, 
  Cpu, 
  Layers, 
  Sliders, 
  Sparkles, 
  Eye, 
  Check, 
  Copy, 
  Info, 
  RefreshCw, 
  X, 
  ChevronRight, 
  Activity, 
  Grid3X3, 
  Settings, 
  Paintbrush, 
  Compass,
  ArrowRight,
  Database,
  ExternalLink,
  User,
  Mail,
  Smartphone,
  Zap,
  Search,
  Grid,
  Monitor,
  LayoutGrid
} from 'lucide-react';

import { CATEGORIES, PROJECTS } from './data';
import { CategoryId, Project } from './types';

// High-quality professional design photography URLs to ensure robust compilation
const fengZhiColdChain = 'https://bee-reg-ab.imagency.cn/e/a21b7acee1d814d3a6f00ce689daeef9.jpg';
const visualDesignShowcase = 'https://bee-reg-ab.imagency.cn/e/c823038ae169471669290d74decd6830.jpg';
const packagingDesignShowcase = 'https://bee-reg-ab.imagency.cn/e/2f6f587f6c588b69b2e9da9d2e6dfa9c.jpg';
const threeDDesignShowcase = 'https://bee-reg-ab.imagency.cn/e/f52b3e45de0fce07bb88fc0815f71bd7.jpg';

const getBilingualInteractiveLogic = (projectId: string, lang: 'zh' | 'en') => {
  const data: Record<string, { objective: string, scientificApproach: string, steps: string[] }> = {
    'ui-neomorphic-dashboard': {
      objective: lang === 'zh' ? '在长时间数据监控和分析操作下，优化多参数面板的视觉搜寻速度并降低眼部疲劳。' : 'Optimize data telemetry monitoring and prevent visual fatigue under long-hour analytical operations.',
      scientificApproach: lang === 'zh' ? '应用菲茨定律计算最优触控靶区尺寸，结合韦伯-费希纳定律精调背景对比度，确保即使在40%高透光率的玻璃底板上，文本与底色对比度也严格维持在 4.5:1 的无障碍黄金比例。' : 'Applied Fitts\'s Law for target acquisition sizes, combined with Weber-Fechner law of perception for tone adjustments, ensuring text-to-background contrast remains at a perfect 4.5:1 ratio even with glass overlay.',
      steps: lang === 'zh' ? [
        '用户进入面板，触发 30ms 增量阶梯式排队渲染序列，有效消解大块色面突然出现对视网膜造成的瞬时视神经冲击。',
        '严谨的视觉重心层次设计，优先将用户的焦点指引至核心实时曲线图（即全局视觉锚点）。',
        '卡片组件在Z轴方向上执行 0.25 秒的物理阻尼弹簧运动，确保微交互平稳自然。'
      ] : [
        'User enters dashboard with a cascading content-loading sequence (staggered by 30ms increments to prevent jarring shifts).',
        'Visual hierarchy directs focus to the core Telemetry graph (primary anchor).',
        'Interactive card expanders translate on the Z-axis with 0.25s spring physics, offering non-obtrusive detailed parameters on-demand.'
      ]
    },
    'ui-synapse-notes': {
      objective: lang === 'zh' ? '帮助用户保持深度心流写作，同时揭示其知识库中的多层潜在关联。' : 'Facilitate uninterrupted deep writing state (Flow) while surfacing hidden semantic connections.',
      scientificApproach: lang === 'zh' ? '采用全屏柔和暗化遮罩，当用户开始打字时，非光标聚焦区域将平滑淡化至 40% 不透明度，完美进入心流无干扰状态。' : 'Built a custom distraction-free mode utilizing a dynamic viewport masking gradient, allowing non-focal text blocks to fade to 40% opacity based on current text-cursor vertical coordinate.',
      steps: lang === 'zh' ? [
        '开始打字时，系统微弱调暗背景光晕，将视觉通道收窄在光标周围 150px 范围内。',
        '鼠标悬停于网格拓结构节点时，触发重力模拟波动。',
        '按下 Esc 触发全屏矩阵菜单，利用斐波那契螺旋线精确排布快捷入口。'
      ] : [
        'Typing initiates a smooth background light dampening.',
        'Hovering over node relationships triggers a physics-calculated spatial vibration feedback.',
        'Escape triggers custom overlay menu with index mapping on a 12-point mathematical spiral.'
      ]
    },
    'brand-lumen-labs': {
      objective: lang === 'zh' ? '构建适应全场景、全屏幕比例的极简主义物理能量美学品牌形象。' : 'Establish a scientific yet deeply premium brand presence that translates seamlessly from microscopic packaging to giant digital billboards.',
      scientificApproach: lang === 'zh' ? '编写定制的 SVG 曲线矢量自适应渲染脚本，根据渲染尺寸和视口比例动态计算标志圆弧度，保证 100% 清晰对齐。' : 'Developed an algorithmic vector generation script that computes the logo\'s curvature dynamically based on the rendering size and viewport ratio, ensuring crisp vector alignment on any grid scale.',
      steps: lang === 'zh' ? [
        'Logo 的光圈比例随页面滚动深度进行无极平滑收缩和舒张。',
        '品牌核心色板自动在 AAA 级对比度阈值间自适应调节，无惧不同设备环境。',
        '双击或滚动在不同的媒介模型（手机、网页、纸张）间无缝呈现标识。'
      ] : [
        'Logo scale shrinks and expands smoothly depending on dynamic viewport scrolling distance.',
        'Branded color palettes calibrate dynamically against AAA contrast thresholds under low-light display modes.',
        'Double-clicking or scrolling seamlessly toggles identity projections between web, mobile and physical models.'
      ]
    }
  };

  return data[projectId] || null;
};

export default function App() {
  // Navigation & Filtering
  const [activeTab, setActiveTab] = useState<CategoryId>('ui');
  const [language, setLanguage] = useState<'zh' | 'en'>('zh');
  const [isAboutOpen, setIsAboutOpen] = useState<boolean>(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 200);
      mouseY.set(e.clientY - 200);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);
  
  // Selected Project for Case Study Inspector
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  // Color copy feedback
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  
  // Active step inside Project's interactive user flow
  const [activeFlowStep, setActiveFlowStep] = useState<number>(0);

  // Active sub-steps/slides for UI & Brand horizontal split showcases
  const [uiActiveStep, setUiActiveStep] = useState<number>(0);
  const [uiRenderStyle, setUiRenderStyle] = useState<'mockup' | 'exploded' | 'compare'>('mockup');
  const [uiDeviceTheme, setUiDeviceTheme] = useState<'dark' | 'light'>('dark');
  const [uiExplosionGap, setUiExplosionGap] = useState<number>(80);
  const [uiShowXRay, setUiShowXRay] = useState<boolean>(false);
  const [uiShowGrid, setUiShowGrid] = useState<boolean>(false);
  const [uiActiveFlow, setUiActiveFlow] = useState<'all' | 'core' | 'medical' | 'sleep' | 'settings'>('all');
  const [uiHapticLogs, setUiHapticLogs] = useState<string[]>([
    '🎨 UI Systems initialized. 12 responsive layouts loaded.',
    '⚡ Active telemetry: 60FPS drawing over Fitts\'s Law grids.'
  ]);
  const [uiToastMessage, setUiToastMessage] = useState<string | null>(null);

  const [brandActiveStep, setBrandActiveStep] = useState<number>(0);

  // X-Ray tracking mouse events (Moved to top-level to avoid hook rules violation inside map loop)
  const [lensX, setLensX] = useState<number>(50);
  const [lensY, setLensY] = useState<number>(50);
  const [isHoveringLens, setIsHoveringLens] = useState<boolean>(false);

  // Mouse coordinates and customized dynamic interaction states
  const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 });
  const [glowIntensity, setGlowIntensity] = useState<number>(50); // in %, default to 50%
  const [tiltIntensity, setTiltIntensity] = useState<number>(50); // in %, default to 50%
  const [deviceTilt, setDeviceTilt] = useState({ rx: 0, ry: 0 });
  const [brandTilt, setBrandTilt] = useState({ rx: 0, ry: 0 });
  const [brandHoverPos, setBrandHoverPos] = useState({ x: 50, y: 50 });
  const [isBrandHovered, setIsBrandHovered] = useState<boolean>(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const uiScrollRef = React.useRef<HTMLDivElement>(null);
  const brandScrollRef = React.useRef<HTMLDivElement>(null);

  // Auto scroll UI browser preview depending on uiActiveStep
  useEffect(() => {
    if (uiScrollRef.current) {
      const container = uiScrollRef.current;
      const scrollHeight = container.scrollHeight;
      const clientHeight = container.clientHeight;
      if (uiActiveStep === 0) {
        container.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (uiActiveStep === 1) {
        container.scrollTo({ top: (scrollHeight - clientHeight) / 2, behavior: 'smooth' });
      } else if (uiActiveStep === 2) {
        container.scrollTo({ top: scrollHeight - clientHeight, behavior: 'smooth' });
      }
    }
  }, [uiActiveStep]);

  // Auto scroll Brand browser preview depending on brandActiveStep
  useEffect(() => {
    if (brandScrollRef.current) {
      const container = brandScrollRef.current;
      const scrollHeight = container.scrollHeight;
      const clientHeight = container.clientHeight;
      const maxScroll = scrollHeight - clientHeight;
      if (maxScroll <= 10) return;
      const targetScroll = (maxScroll / (BRAND_SLIDES.length - 1)) * brandActiveStep;
      container.scrollTo({ top: targetScroll, behavior: 'smooth' });
    }
  }, [brandActiveStep]);

  // UI Slide data definition containing the 12 custom mobile PNG layouts for the Music App
  const UI_SLIDES = [
    {
      title: '数字资产包与曲库离线管理',
      englishTitle: 'Offline Library & Digital Asset Packages',
      image: 'https://bee-reg-ab.imagency.cn/e/0e67a0f0f6adc37159aef9f0397d6534.png',
      desc: '查看已下载和离线缓存的高解析度音轨包，带有存储状态智能分析和极简数据一键清理。',
      englishDesc: 'Offline high-resolution audio asset packages with intelligent storage analysis and one-click cache purging.',
      tag: 'Offline Pack',
      flow: 'settings',
      metrics: [
        { label: 'Offline Tracks', value: '1,420 Songs' },
        { label: 'Cache Usage', value: '45.8 GB' },
        { label: 'Hi-Res Match', value: '100%' }
      ]
    },
    {
      title: '听觉节奏与心率同步散点图',
      englishTitle: 'Rhythm-HRV Tempo Sync Analysis',
      image: 'https://bee-reg-ab.imagency.cn/e/7fe4d8a9950837bad2265ef892fa57f8.png',
      desc: '记录实时听觉刺激（BPM）与心率变异性（HRV）的离散散点图，直观映射音乐节奏对自主神经系统的调谐。',
      englishDesc: 'HRV scatter plots measuring dynamic autonomic nervous responses synchronized directly with active audio tempo (BPM).',
      tag: 'HRV Tempo Sync',
      flow: 'settings',
      metrics: [
        { label: 'Tempo Range', value: '60-180BPM' },
        { label: 'Coherence', value: 'Live' },
        { label: 'Artifact Filter', value: 'Active' }
      ]
    },
    {
      title: '睡眠音频白噪音组合',
      englishTitle: 'Sleep Soundscape Mixer',
      image: 'https://bee-reg-ab.imagency.cn/e/e8dd61d98fa54bd3df14ac2a5b7cb414.png',
      desc: '多通道环境白噪音、雨声、风声与脑波音乐混合器，支持分轨音量微调与睡眠深度曲线映射。',
      englishDesc: 'Advanced environment mixing dashboard, allowing multi-track volume balance across rainfall, wind, waves and cerebral rhythm tracks.',
      tag: 'Sound Mixer',
      flow: 'sleep',
      metrics: [
        { label: 'Mixed Channels', value: '5 Tracks' },
        { label: 'DSP Clock', value: '96kHz' },
        { label: 'Binaural Sync', value: '98.4%' }
      ]
    },
    {
      title: '高分贝耳健康与噪声超限预警',
      englishTitle: 'Acoustic DB & Otological Risk Warning',
      image: 'https://bee-reg-ab.imagency.cn/e/af9a0055086c5b6e00b75d13cf7200e9.png',
      desc: '监测耳机长时间高分贝暴露风险，高对比度紧急声压预警，内置自适应听觉保护衰减指南。',
      englishDesc: 'Critical ear fatigue and decibel limit alerts in high-contrast styling, paired with dynamic protective audio attenuation steps.',
      tag: 'Ear Alert',
      flow: 'sleep',
      metrics: [
        { label: 'DB Threshold', value: '85dB+' },
        { label: 'Warning Code', value: 'Level-III' },
        { label: 'Safe Duration', value: '5 Steps' }
      ]
    },
    {
      title: '助眠声学模式与脑波韵律模型',
      englishTitle: 'Sleep Soundscape & Rhythm Model',
      image: 'https://bee-reg-ab.imagency.cn/e/4d44a3798e3cf013bfc249d048e27bcc.png',
      desc: '挖掘白噪声与双耳节拍对脑波节奏的谐振，将睡眠环境音效凝练为高直观度的睡前脑波共鸣环形得分。',
      englishDesc: 'Advanced sleep-induction acoustics analysis summarizing brainwave entrainment and pink noise resonance into intuitive circadian rings.',
      tag: 'Soundscape',
      flow: 'sleep',
      metrics: [
        { label: 'Binaural Sync', value: '96.2%' },
        { label: 'Resonance Score', value: '88/100' },
        { label: 'Theta Wave Rate', value: '94.1%' }
      ]
    },
    {
      title: '多维音频波形与频段解析曲线',
      englishTitle: 'Multi-Band Audio Waveform Telemetry',
      image: 'https://bee-reg-ab.imagency.cn/e/c423d5b6673cc1e6b7fc4ab148e99a87.png',
      desc: '利用毫秒级时序频域图表实时展示音频信号输出波形，通过动态阻尼与滑动视窗捕捉高精度的泛音走势。',
      englishDesc: 'High-precision real-time audio frequency telemetry showcasing output waves with fluid damping and timeline harmonics scrubbing.',
      tag: 'Waveform',
      flow: 'core',
      metrics: [
        { label: 'Sampling Rate', value: '192kHz' },
        { label: 'Resolution', value: '32-bit' },
        { label: 'Spectral Nodes', value: '1.4k' }
      ]
    },
    {
      title: '多端协同设计与全局控制板',
      englishTitle: 'Cross-Device Orchestration & Layout',
      image: 'https://bee-reg-ab.imagency.cn/e/cc1e5be7514a7716985e5bfd553afbb8.png',
      desc: '支持在多类自适应屏幕规格上流式呈现，优化桌面端、车辆终端等不同比例下的图形与交互排布。',
      englishDesc: 'Fluidly adaptive interface layout scales across high-contrast environments ensuring responsive element positioning on variable screens.',
      tag: 'Layout Grid',
      flow: 'settings',
      metrics: [
        { label: 'Sync Delay', value: '15ms' },
        { label: 'Adaptability', value: '100%' },
        { label: 'Target Ratio', value: 'Auto' }
      ]
    },
    {
      title: '全景均衡器与高级音频输出设置',
      englishTitle: 'Master Equalizer & Pro Output Engine',
      image: 'https://bee-reg-ab.imagency.cn/e/8ecad97350497f08ed6c9f3d515ade88.png',
      desc: '专业级多通道均衡微调与数模转换（DAC）采样率锁定，优化耳机的瞬态响应与高低音质感。',
      englishDesc: 'Studio-grade multichannel equalizer tweaking and hardware DAC sample rate locking to optimize dynamic transient response and timbre clarity.',
      tag: 'Master EQ',
      flow: 'settings',
      metrics: [
        { label: 'Channels', value: '10 Bands' },
        { label: 'Pre-amp Gain', value: '-3.5dB' },
        { label: 'Dithering', value: 'TDF' }
      ]
    },
    {
      title: 'AI 音乐智能流转与播放大盘',
      englishTitle: 'AI Music Flow & Playback Dashboard',
      image: 'https://bee-reg-ab.imagency.cn/e/0158649a2c36f8b6dbaeb000824fa43d.png',
      desc: '聚合实时音频流转率、流派能量分布、动态赫兹与高维均衡器参数，基于玻璃拟态组件实现无感音频交互。',
      englishDesc: 'Main hub aggregating real-time audio streams, genre energy metrics, Hertz waveforms, and high-dimensional EQ controls in glassmorphic cards.',
      tag: 'Dashboard',
      flow: 'core',
      metrics: [
        { label: 'Refresh Rate', value: '120Hz' },
        { label: 'Audio Bitrate', value: '320kbps' },
        { label: 'EQ Channels', value: '10 Bands' }
      ]
    },
    {
      title: '听众勋章与乐迷成就墙',
      englishTitle: 'Listener Progression & Badges Hub',
      image: 'https://bee-reg-ab.imagency.cn/e/a586fe710ba9a4ff79aafb473527be7e.png',
      desc: '数字化乐迷成长系统，集成每日听歌打卡、音乐风格版图解密以及专属玻璃态黑胶成就勋章。',
      englishDesc: 'Gamified listener progression system featuring daily listening milestones, music genre unlock quests, and virtual glass vinyl badges.',
      tag: 'Achievements',
      flow: 'core',
      metrics: [
        { label: 'Vinyl Unlocks', value: '24 Badges' },
        { label: 'Genre Mastery', value: '78%' },
        { label: 'Level Cap', value: 'Lv.50' }
      ]
    },
    {
      title: '微观睡眠音疗频段拆解',
      englishTitle: 'Micro-Sleep Sound Therapy Frequency Breakdown',
      image: 'https://bee-reg-ab.imagency.cn/e/3eabd64a212d23e02121b1126fd2c4eb.png',
      desc: '利用高频赫兹时域图解剖深度睡眠脑波段分布，支持多频段音疗阻抗与脑电状态映射。',
      englishDesc: 'Deep sleep soundscape analyzer charting brainwave frequency curves and EEG state coordination metrics.',
      tag: 'Sound Therapy',
      flow: 'sleep',
      metrics: [
        { label: 'Frequency Range', value: '0.5-4Hz Delta' },
        { label: 'Coherence Index', value: '94.2%' },
        { label: 'Noise Rejection', value: '-42dB' }
      ]
    },
    {
      title: 'AI 听觉医疗健康诊断中枢',
      englishTitle: 'AI Audiology & Acoustic Diagnosis',
      image: 'https://bee-reg-ab.imagency.cn/e/9505d2cdddaf0ac564d86e679814badc.png',
      desc: '结合端侧大语言模型实现对用户日常听力损伤与突发性耳鸣的智能问诊、听敏度评估与自适应声学保护。',
      englishDesc: 'AI audiology diagnostic assistant providing standard smart triage, active tinnitus assessment, and protective hearing guides.',
      tag: 'AI Assistant',
      flow: 'medical',
      metrics: [
        { label: 'Generative Delay', value: '180ms' },
        { label: 'Token Speed', value: '85 tok/s' },
        { label: 'Style Links', value: 'Active' }
      ]
    },
    {
      title: '高端无线音频与耳机功放配置',
      englishTitle: 'Smart Audio Transceiver & Amp Config',
      image: 'https://bee-reg-ab.imagency.cn/e/e39988fc1c018877d0c27fc783e1f40a.png',
      desc: '蓝牙音频解码器（LDAC、APTX Lossless）与前端耳机放大器连接管理，支持自定义采样率与低功耗解码微调。',
      englishDesc: 'Advanced Bluetooth codec (LDAC/aptX) and headphone amplifier IoT manager, supporting dynamic DAC sample rate tweaking.',
      tag: 'DAC Settings',
      flow: 'settings',
      metrics: [
        { label: 'Devices Linked', value: '3 Bound' },
        { label: 'Bandwidth', value: 'LE Audio 5.3' },
        { label: 'Protocol', value: 'Bit-Perfect' }
      ]
    },
    {
      title: '三维全景空间音频声场雷达',
      englishTitle: '3D Spatial Audio Soundstage Radar',
      image: 'https://bee-reg-ab.imagency.cn/e/42db0ec9055142047e96f45847d78a2f.png',
      desc: '结合头部追踪传感器的三维环绕空间音效热力图，带有高度轴定位、实时多声道声源运动拟合与声像偏置计算。',
      englishDesc: 'Outdoor-equivalent soundstage vector mapping head-tracking dynamic spatial audio orbits and real-time multichannel panning.',
      tag: 'Spatial Radar',
      flow: 'settings',
      metrics: [
        { label: 'Tracking Delay', value: '<5ms' },
        { label: 'Angle Step', value: '0.5°' },
        { label: 'Speaker Nodes', value: '7.1.4 Ch' }
      ]
    },
    {
      title: '个人云端音乐中心与账户同步',
      englishTitle: 'Personal Cloud Library & Account Sync',
      image: 'https://bee-reg-ab.imagency.cn/e/214eba8a1442651f0293e40604fb19d3.png',
      desc: '支持多端无缝同步，无损音轨云端备份与智能音乐包空间管理，呈现个人听歌成就档案与收藏夹。',
      englishDesc: 'Seamless multi-terminal synchronization, lossless track cloud backup, and space-optimized digital music package allocation with listener profiles.',
      tag: 'Cloud Sync',
      flow: 'settings',
      metrics: [
        { label: 'Sync Latency', value: '<50ms' },
        { label: 'Cloud Storage', value: '2TB Max' },
        { label: 'Auth Protocol', value: 'OAuth2' }
      ]
    },
    {
      title: '听觉保护与音量限制',
      englishTitle: 'Acoustic Protection & Decibel Limit',
      image: 'https://bee-reg-ab.imagency.cn/e/c615d3b12b5945fbbe35e6ba8fa1ae89.png',
      desc: '动态监测耳机音频压强，提供分贝极限锁定、双耳听觉疲劳自适应降噪及安全声压保护。',
      englishDesc: 'Advanced listening protection and volume capping telemetry, warning users on prolonged loud exposure risk.',
      tag: 'Ear Guard',
      flow: 'settings',
      metrics: [
        { label: 'dB Threshold', value: '80dB' },
        { label: 'Expose Limit', value: '45 Mins' },
        { label: 'Muffle Ratio', value: '-6.2dB' }
      ]
    }
  ];

  // Brand Slide data definition with user's images in page display order (Foundation first, Application last)
  const BRAND_SLIDES = [
    {
      title: '辅助图形系统 01',
      englishTitle: 'Supporting Graphics 01',
      image: 'https://bee-reg-ab.imagency.cn/e/69ddff0ab8e33a3585a4c5c617de7b89.jpg',
      desc: '基于集装箱金属褶皱和冷链网格衍生出的抽象辅助图形条带。',
      englishDesc: 'Abstract branding shapes inspired by industrial container patterns and linear grids.',
      tag: 'Graphics 01'
    },
    {
      title: '辅助图形系统 02',
      englishTitle: 'Supporting Graphics 02',
      image: 'https://bee-reg-ab.imagency.cn/e/be411fb0b1068141b0e58c6b813eb245.jpg',
      desc: '安全反光格纹和货箱网格的多样化辅助图形组合及应用。',
      englishDesc: 'Extended corporate graphic structures including caution grids and diagonal stripes.',
      tag: 'Graphics 02'
    },
    {
      title: '物流作业人员服装',
      englishTitle: 'Operations Workwear',
      image: 'https://bee-reg-ab.imagency.cn/e/f52b3e45de0fce07bb88fc0815f71bd7.jpg',
      desc: '现场操作人员、叉车司机及冷库管理员的反光工作服、安全帽及作业手套配色标准。',
      englishDesc: 'Operational staff hi-vis jackets, safety helmets, and working uniforms color rules.',
      tag: 'Workwear'
    },
    {
      title: '色彩系统与比例',
      englishTitle: 'Color System',
      image: 'https://bee-reg-ab.imagency.cn/e/978752270061885a06d114c48a501981.jpg',
      desc: '物流专用安全冷光蓝、明艳橙以及中性灰等色彩系统的标准比例。',
      englishDesc: 'Standard color formulas and contrast percentages of blue, orange, and gray.',
      tag: 'Colors'
    },
    {
      title: '主标志设计规范',
      englishTitle: 'Master Logo Spec',
      image: 'https://bee-reg-ab.imagency.cn/e/3e1ee4bbde07f733e3892ad6bc90f3ed.jpg',
      desc: '峰致品牌核心徽标与字体组合规范，建立精确的网格定位 and 防白区范围。',
      englishDesc: 'Core logo lockups, geometric calculation grids, and typographic safety margins.',
      tag: 'Logo Spec'
    },
    {
      title: '生鲜配送冷链箱',
      englishTitle: 'Cold Chain Package',
      image: 'https://bee-reg-ab.imagency.cn/e/2f6f587f6c588b69b2e9da9d2e6dfa9c.jpg',
      desc: '生鲜保温配送箱、周转保温泡沫箱以及物流胶带的标准印制版式规范。',
      englishDesc: 'Design specifications and typography layout on corrugated and styrofoam cold chain boxes.',
      tag: 'Packaging'
    },
    {
      title: '品牌标准字体',
      englishTitle: 'Brand Typography',
      image: 'https://bee-reg-ab.imagency.cn/e/07aeef762e89fb96ad3f265307e40a29.jpg',
      desc: '品牌在数字化媒介与印刷媒介上的中英文标准字族及排版层级。',
      englishDesc: 'Bilingual typography guidelines, approved typefaces, and layout scaling hierarchy.',
      tag: 'Typography'
    },
    {
      title: '企业办公事务用品',
      englishTitle: 'Corporate Stationery',
      image: 'https://bee-reg-ab.imagency.cn/e/c823038ae169471669290d74decd6830.jpg',
      desc: '信封、信纸、便签、文件夹等常用办公用品标准版式排版设计规范。',
      englishDesc: 'Standard design specifications for corporate letterheads, envelopes, note cards, and folders.',
      tag: 'Stationery'
    },
    {
      title: '重型集装箱涂装规范',
      englishTitle: 'Heavy Trailer Livery',
      image: 'https://bee-reg-ab.imagency.cn/e/02548bb6cee16ee29e7296f7cfd52ba4.jpg',
      desc: '40英尺冷链重型半挂集装箱车辆的侧面和尾部品牌标志涂装定位标准。',
      englishDesc: 'Livery layout templates and side-graphics placement for heavy 40ft refrigerated freight trailers.',
      tag: 'Heavy Trailer'
    },
    {
      title: '厂区导视与环境标识',
      englishTitle: 'Signage & Environmental Spec',
      image: 'https://bee-reg-ab.imagency.cn/e/3f5b8f4298fa2d67ac20ca7cce983af4.jpg',
      desc: '物流仓储园区户外发光字招牌、路牌指示及仓库入口导视系统的规范设计。',
      englishDesc: 'Outdoor illuminated corporate signage, directional boards, and storage facility labels.',
      tag: 'Signage'
    },
    {
      title: '数字应用与自适应网页',
      englishTitle: 'Digital Media Layout',
      image: 'https://bee-reg-ab.imagency.cn/e/e9ce9853db3f2149810f63adc3ba1dc1.jpg',
      desc: '智能货运管理系统在手机客户端 and 官方网站的首屏品牌应用规范。',
      englishDesc: 'Adaptive layout standards for standard web screens and smartphone app headers.',
      tag: 'Digital UI'
    },
    {
      title: '大型干线集卡车身规范',
      englishTitle: 'Heavy Truck Livery',
      image: 'https://bee-reg-ab.imagency.cn/e/876f5355a329f615030b705225b3baa4.jpg',
      desc: '大型中远途冷链集装箱卡车车身品牌徽标定位、安全反光条与涂装比例。',
      englishDesc: 'Livery standard layout, large-scale logotype placement, and reflective caution lines for long-haul trucks.',
      tag: 'Heavy Truck'
    },
    {
      title: '员工徽章与胸卡规范',
      englishTitle: 'ID Badge & Card Spec',
      image: 'https://bee-reg-ab.imagency.cn/e/10ce07a8a885e903b06c99ebc0b5d6a0.jpg',
      desc: '标准企业名片与员工ID胸卡版式、信息层级及高对比底色应用规范。',
      englishDesc: 'Corporate business cards and staff identification badge layout grids and typography rules.',
      tag: 'Identity Card'
    },
    {
      title: '品牌周边礼品规范',
      englishTitle: 'Brand Gifts & Merchandise',
      image: 'https://bee-reg-ab.imagency.cn/e/a21b7acee1d814d3a6f00ce689daeef9.jpg',
      desc: '定制保温杯、环保手提袋、遮阳伞等高频商务礼品的品牌图案印制工艺标准。',
      englishDesc: 'Layout guidelines and printing standards for branded thermo mugs, canvas bags, and umbrellas.',
      tag: 'Merchandise'
    }
  ];

  // Preload brand and UI slide images on mount to ensure smooth transitions without lag
  useEffect(() => {
    BRAND_SLIDES.forEach(slide => {
      const img = new Image();
      img.src = slide.image;
    });
    UI_SLIDES.forEach(slide => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  // Auto-reset active flow step and clear selected project when tab changes
  useEffect(() => {
    setSelectedProject(null);
    setActiveFlowStep(0);
    setUiActiveStep(0);
    setBrandActiveStep(0);
    if (uiScrollRef.current) {
      uiScrollRef.current.scrollTo({ top: 0 });
    }
    if (brandScrollRef.current) {
      brandScrollRef.current.scrollTo({ top: 0 });
    }
  }, [activeTab]);

  // Synchronize UI active step when active tab or active UI flow filter changes (Moved from inside map loop)
  useEffect(() => {
    if (activeTab === 'ui') {
      const filteredUiSlides = UI_SLIDES.filter(slide => 
        uiActiveFlow === 'all' || slide.flow === uiActiveFlow
      );
      const activeSlide = UI_SLIDES[uiActiveStep];
      if (filteredUiSlides.length > 0 && activeSlide) {
        const isCurrentSlideInFlow = filteredUiSlides.some(slide => slide.image === activeSlide.image);
        if (!isCurrentSlideInFlow) {
          const firstInFlowIndex = UI_SLIDES.findIndex(slide => slide.image === filteredUiSlides[0].image);
          if (firstInFlowIndex !== -1) {
            setUiActiveStep(firstInFlowIndex);
          }
        }
      }
    }
  }, [uiActiveFlow, activeTab, uiActiveStep]);

  // Copy Color Hex utility
  const copyToClipboard = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  // Interactive Mouse Tilt handlers
  const handleDeviceMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const normalizedX = (x / rect.width) - 0.5;
    const normalizedY = (y / rect.height) - 0.5;
    setDeviceTilt({
      rx: normalizedY * -16 * (tiltIntensity / 50),
      ry: normalizedX * 16 * (tiltIntensity / 50)
    });
    setLensX((x / rect.width) * 100);
    setLensY((y / rect.height) * 100);
    setIsHoveringLens(true);
  };

  const handleBrandMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const normalizedX = (x / rect.width) - 0.5;
    const normalizedY = (y / rect.height) - 0.5;
    setBrandTilt({
      rx: normalizedY * -12 * (tiltIntensity / 50),
      ry: normalizedX * 12 * (tiltIntensity / 50)
    });
    setBrandHoverPos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100
    });
    setIsBrandHovered(true);
  };

  // Filter projects based on active tab
  const activeProjects = PROJECTS.filter(p => p.category === activeTab);

  // Compute bilingual interactive logic data
  const bilingualLogic = selectedProject ? getBilingualInteractiveLogic(selectedProject.id, language) : null;

  // Mathematical translation coordinates for the bottom light gradients
  const pinkX = Math.cos((135 * Math.PI) / 180) * 120;
  const pinkY = Math.sin((135 * Math.PI) / 180) * 120;
  const blueX = Math.cos(((135 + 180) * Math.PI) / 180) * 120;
  const blueY = Math.sin(((135 + 180) * Math.PI) / 180) * 120;

  // Custom Inline CSS styles mapped from our Science Lab state parameters
  const labVariables = {
    '--glass-opacity': '0.40',
    '--glass-blur': '20px',
  } as React.CSSProperties;

  // Dynamic Card Styles
  const cardStyle = {
    borderRadius: '24px',
  };

  return (
    <div 
      className={`relative min-h-screen font-sans flex flex-col justify-between transition-all duration-300 select-none pb-24 ${theme === 'light' ? 'bg-[#fafbfd] text-slate-900' : 'bg-slate-950 text-slate-100'}`}
      style={labVariables}
      onMouseMove={(e) => {
        setMouseCoords({ x: e.clientX, y: e.clientY });
      }}
    >
      <motion.div
        style={{
          x: springX,
          y: springY,
          pointerEvents: 'none',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(220, 240, 255, 0.2) 0%, transparent 70%)',
          zIndex: 9999,
        }}
      />
      {/* ----------------- SCIENTIFIC BACKGROUND GUIDES ----------------- */}

      {/* ----------------- GRADIENT LIGHT AURA AT THE BOTTOM ----------------- */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className={`absolute inset-0 ${theme === 'light' ? 'bg-[#fafbfd]' : 'bg-slate-950'}`} />
        
        {/* Interactive Spotlight following cursor */}
        <div 
          className="absolute w-[450px] h-[450px] rounded-full pointer-events-none transition-all duration-300 ease-out opacity-40 blur-[100px]"
          style={{
            left: `${mouseCoords.x - 225}px`,
            top: `${mouseCoords.y - 225}px`,
            background: 'radial-gradient(circle, rgba(220, 240, 255, 0.25) 0%, rgba(255, 230, 240, 0.15) 50%, transparent 100%)',
            transform: `translate3d(0, 0, 0) scale(${(glowIntensity / 50)})`,
          }}
        />

        {/* Soft Violet/Purple Top-Left Aurora */}
        <motion.div 
          animate={{
            y: [-15, 15, -15],
            x: [-10, 10, -10],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          style={{
            opacity: 0.8 * (glowIntensity / 50)
          }}
          className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-violet-200/20 via-indigo-200/10 to-transparent blur-[110px]"
        />

        {/* Soft Peach Middle-Right Aurora */}
        <motion.div 
          animate={{
            y: [20, -20, 20],
            x: [15, -15, 15],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          style={{
            opacity: 0.8 * (glowIntensity / 50)
          }}
          className="absolute top-[30%] right-[-10%] w-[480px] h-[480px] rounded-full bg-gradient-to-bl from-amber-100/20 via-rose-200/10 to-transparent blur-[100px]"
        />
        
        {/* Soft Pink Glow Spot */}
        <motion.div 
          animate={{
            x: pinkX,
            y: pinkY + 300,
            scale: [1, 1.05, 0.95, 1],
          }}
          transition={{
            scale: { repeat: Infinity, duration: 15, ease: 'easeInOut' },
            type: 'spring',
            stiffness: 40,
            damping: 15
          }}
          style={{
            opacity: 1 * (glowIntensity / 50)
          }}
          className="glow-spot absolute bottom-[-20%] left-[20%] w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-rose-200/40 via-pink-300/20 to-transparent blur-[120px]"
        />

        {/* Soft Blue Glow Spot */}
        <motion.div 
          animate={{
            x: blueX,
            y: blueY + 250,
            scale: [1, 0.95, 1.05, 1],
          }}
          transition={{
            scale: { repeat: Infinity, duration: 12, ease: 'easeInOut' },
            type: 'spring',
            stiffness: 40,
            damping: 15
          }}
          style={{
            opacity: 1 * (glowIntensity / 50)
          }}
          className="glow-spot absolute bottom-[-15%] right-[20%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-200/40 via-cyan-200/25 to-transparent blur-[120px]"
        />
        
        {/* Center ambient glow mix */}
        <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-white via-white/50 to-transparent" />
      </div>

      {/* ----------------- TOAST FEEDBACK ----------------- */}
      <AnimatePresence>
        {copiedColor && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-50 glass-panel border border-slate-200/60 shadow-lg px-4 py-2 rounded-full flex items-center gap-2 text-xs text-slate-800"
          >
            <Check className="w-3.5 h-3.5 text-emerald-500" />
            <span>
              {copiedColor.includes('@') 
                ? (language === 'zh' ? '联系邮箱 ' : 'Contact email ') 
                : (language === 'zh' ? '颜色代码 ' : 'Color HEX ')}
              <span className="font-mono font-medium text-blue-600">{copiedColor}</span> 
              {language === 'zh' ? ' 已成功复制到剪贴板' : ' copied to clipboard successfully'}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ----------------- TOP HEADER NAVIGATION ----------------- */}
      <header className="sticky top-6 z-40 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div 
          className="glass-panel border border-white/60 shadow-[0_8px_32px_rgba(31,38,135,0.04)] px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-4 transition-all duration-300"
          style={{ borderRadius: '24px' }}
        >
          {/* Brand/Identity */}
          <div className="flex flex-col items-start select-none">
            <h1 className="text-xs md:text-sm font-semibold tracking-wider text-slate-900 font-display">
              Personal Design Portfolio
            </h1>
            {/* 网页中英文文字切换 */}
            <div className="flex items-center mt-1 bg-slate-100/80 p-0.5 rounded-md border border-slate-200/40 text-[9px] font-mono shadow-xs">
              <button 
                onClick={() => setLanguage('zh')} 
                className={`px-1.5 py-0.5 rounded transition-all ${language === 'zh' ? 'bg-white text-slate-950 font-bold' : 'text-slate-400 hover:text-slate-600'}`}
              >
                中
              </button>
              <span className="text-slate-200 px-0.5">|</span>
              <button 
                onClick={() => setLanguage('en')} 
                className={`px-1.5 py-0.5 rounded transition-all ${language === 'en' ? 'bg-white text-slate-950 font-bold' : 'text-slate-400 hover:text-slate-600'}`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Tab switches */}
          <nav className="flex items-center gap-1 bg-slate-100/50 p-1 rounded-lg border border-slate-200/20">
            {CATEGORIES.map((cat) => {
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  id={`nav-tab-${cat.id}`}
                  onClick={() => setActiveTab(cat.id)}
                  className={`relative px-3.5 py-1.5 rounded-md text-xs font-medium transition-all duration-300 ${
                    isActive ? 'text-slate-900 font-semibold' : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute inset-0 bg-white shadow-xs rounded-md border border-slate-200/30"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex flex-col items-center">
                    <span>{language === 'zh' ? cat.label : cat.englishLabel}</span>
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Global Controls */}
          <div className="flex items-center gap-3">
            {/* Self-Introduction Button */}
            <button
              onClick={() => setIsAboutOpen(true)}
              className="group flex items-center gap-2 px-3.5 py-1.5 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 hover:from-blue-500/20 hover:to-indigo-500/20 border border-blue-500/20 hover:border-blue-500/35 text-slate-800 hover:text-slate-950 text-xs font-mono transition-all duration-300 shadow-xs cursor-pointer font-medium"
              style={{ borderRadius: '20px' }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
              <User className="w-3.5 h-3.5 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
              <span>{language === 'zh' ? '关于我 / 简介' : 'About Creator'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* ----------------- HERO SECTION ----------------- */}
      <main className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-16 flex-1">
        
        {/* Intro - Premium Glass Card Structure with Gaussian Blur Textures */}
        <section 
          id="hero-intro"
          className={`glass-panel backdrop-blur-3xl border shadow-2xl rounded-3xl p-8 md:p-14 mb-16 relative overflow-hidden text-center max-w-4xl mx-auto transition-all duration-500 group ${theme === 'light' ? 'bg-white/35 border-white/50 shadow-indigo-100/30' : 'bg-slate-800/30 border-white/10 shadow-black/30'}`}
        >
          {/* Internal blur glows inside the glass card to create ultimate premium depth */}
          <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full bg-blue-400/20 blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />
          <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-violet-400/20 blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '12s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-32 rounded-full bg-gradient-to-r from-indigo-300/10 to-pink-300/10 blur-3xl pointer-events-none" />

          {/* Interactive mouse glowing tracking light spot inside hero card */}
          <div 
            className="absolute pointer-events-none rounded-full bg-gradient-to-tr from-blue-500/10 to-indigo-500/10 blur-[80px] w-96 h-96 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out"
            style={{
              left: `${brandHoverPos.x}%`,
              top: `${brandHoverPos.y}%`,
              transform: 'translate(-50%, -50%)',
            }}
          />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/70 border border-slate-200/60 rounded-full shadow-xs mb-6 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500 font-medium">
                {language === 'zh' ? '最终的设计版权属于个人' : 'The final design copyright belongs to the individual'}
              </span>
            </div>

            {/* Glowing Backdrop Blur Ring behind the heading for visual hierarchy */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-24 bg-white/10 backdrop-blur-md -rotate-2 rounded-xl pointer-events-none -z-10 opacity-60 border border-white/20" />

            <h1 
              id="portfolio-title"
              className="font-display text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none mb-6 relative select-none"
            >
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 via-violet-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-gradient-flow drop-shadow-[0_2px_10px_rgba(99,102,241,0.12)]">
                {language === 'zh' ? '个人设计作品集' : 'Personal Design Portfolio'}
              </span>
            </h1>
            
            <h2 className={`text-lg md:text-2xl font-light mb-6 font-display tracking-wide max-w-xl mx-auto flex items-center justify-center gap-2 ${theme === 'light' ? 'text-slate-800' : 'text-slate-300'}`}>
              <span className="h-px w-6 bg-slate-300" />
              <span>{language === 'zh' ? '以理性逻辑推演商业美学' : 'Deducing Commercial Aesthetics with Rational Logic'}</span>
              <span className="h-px w-6 bg-slate-300" />
            </h2>

            <p className={`text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-sans font-light ${theme === 'light' ? 'text-slate-600' : 'text-slate-400'}`}>
              {language === 'zh' 
                ? '汇集UI、品牌、主视觉、包装、3D全类设计，结合用户体验与商业需求，多元风格、多行业实战项目，展现完整设计落地能力。'
                : 'Bringing together UI, branding, key visual, packaging, and 3D design, combining user experience with business needs. Diverse styles and practical projects across multiple industries showcase full-cycle execution and design delivery capabilities.'
              }
            </p>
          </div>
        </section>

        {/* ----------------- WORKS GRID BENTO SYSTEM ----------------- */}
        <section className="mb-20">
          <div className="flex items-center gap-2 mb-8">
            <Compass className="w-5 h-5 text-blue-500" />
            <h2 className={`font-display font-bold text-lg tracking-wide ${theme === 'light' ? 'text-slate-900' : 'text-slate-100'}`}>
              {CATEGORIES.find(c => c.id === activeTab)?.label}
            </h2>
            <span className="text-xs text-slate-400 font-mono">
              / {activeProjects.length} {language === 'zh' ? '作品展示' : 'Works'}
            </span>
          </div>
          <div className="text-xs text-slate-400 flex items-center gap-1 mb-6">
            <Info className="w-3.5 h-3.5" />
            <span>{language === 'zh' ? '点击作品卡片进入深度推导透视面板' : 'Click a card to enter deep analytical specs panel'}</span>
          </div>

          {/* Staggered container */}
          <motion.div 
            layout 
            className="grid grid-cols-1 lg:grid-cols-3 transition-all duration-300"
            style={{ gap: '24px' }}
          >
            {activeProjects.map((project, idx) => {
              const isPrimary = idx === 0;
              const colSpanClass = activeProjects.length === 1 
                ? 'lg:col-span-3' 
                : (isPrimary ? 'lg:col-span-2' : 'lg:col-span-1');
              
              if (activeProjects.length === 1 && (activeTab === 'ui' || activeTab === 'brand')) {
                const isUiCategory = activeTab === 'ui';
                
                if (!isUiCategory) {
                  return (
                    <motion.div
                      key={project.id}
                      layoutId={`project-container-${project.id}`}
                      style={cardStyle}
                      className="lg:col-span-3 group relative bg-white border border-slate-200 shadow-[0_16px_48px_rgba(15,23,42,0.04)] overflow-hidden flex flex-col lg:flex-row h-auto lg:h-[650px] rounded-2xl"
                    >
                      {/* FULL-WIDTH VIEWPORT: Main Viewer & Bottom Horizontal Filmstrip Navigation */}
                      <div className="w-full flex flex-col bg-slate-50/50 select-none justify-between">
                        {/* Canvas Header */}
                        <div className="h-11 bg-slate-50 border-b border-slate-200/60 px-4 flex items-center justify-between shrink-0">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-rose-400/90" />
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-400/90" />
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/90" />
                          </div>
                          <div className="text-slate-400 font-mono text-[9px] uppercase tracking-widest flex items-center gap-1.5">
                            <Layers className="w-3.5 h-3.5 text-[#FF6B35]" />
                            <span>{language === 'zh' ? '品牌视觉资产画布' : 'BRAND CANVAS'} // SPECIFICATIONS</span>
                          </div>
                          <div className="text-[#FF6B35] font-mono text-[10px] font-bold bg-[#FF6B35]/10 px-2 py-0.5 rounded border border-[#FF6B35]/20">
                            {brandActiveStep + 1} / {BRAND_SLIDES.length}
                          </div>
                        </div>

                        {/* Large Active Slide Viewer */}
                        <div className="flex-grow relative overflow-hidden flex items-center justify-center p-4 lg:p-6 bg-slate-100/40 min-h-[300px]">
                          <AnimatePresence mode="wait">
                            <motion.div
                              key={brandActiveStep}
                              initial={{ opacity: 0, scale: 0.98 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 1.02 }}
                              transition={{ duration: 0.25, ease: 'easeOut' }}
                              className="w-full h-full flex items-center justify-center relative rounded-xl overflow-hidden border border-slate-200/55 bg-white shadow-inner group/brand transition-all duration-300 ease-out cursor-crosshair"
                              onMouseMove={handleBrandMouseMove}
                              onMouseLeave={() => {
                                setBrandTilt({ rx: 0, ry: 0 });
                                setIsBrandHovered(false);
                              }}
                              style={{
                                transform: `perspective(800px) rotateX(${brandTilt.rx}deg) rotateY(${brandTilt.ry}deg)`,
                                transformStyle: 'preserve-3d',
                                boxShadow: isBrandHovered ? `0 20px 40px -10px rgba(0,0,0,0.08), 0 0 25px rgba(255,107,53,${0.15 * (glowIntensity / 50)})` : 'none',
                              }}
                            >
                              <div className="w-full h-full overflow-auto scrollbar-none flex items-center justify-center p-2 pointer-events-none">
                                <img 
                                  src={BRAND_SLIDES[brandActiveStep].image} 
                                  alt={BRAND_SLIDES[brandActiveStep].title}
                                  referrerPolicy="no-referrer"
                                  loading="lazy"
                                  className="max-w-full max-h-full object-contain pointer-events-none rounded-md transition-transform duration-700"
                                />
                              </div>

                              {/* Specular glare dynamic highlight */}
                              {isBrandHovered && (
                                <div 
                                  className="absolute inset-0 pointer-events-none z-30 opacity-70 transition-opacity duration-300"
                                  style={{
                                    background: `radial-gradient(circle 200px at ${brandHoverPos.x}% ${brandHoverPos.y}%, rgba(255,255,255,0.3) 0%, transparent 80%)`,
                                    mixBlendMode: 'overlay',
                                  }}
                                />
                              )}
                            </motion.div>
                          </AnimatePresence>

                          {/* Overlay Arrow buttons */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setBrandActiveStep((prev) => (prev > 0 ? prev - 1 : BRAND_SLIDES.length - 1));
                            }}
                            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/95 hover:bg-[#FF6B35] text-slate-700 hover:text-white border border-slate-200 shadow-md transition-all duration-300 opacity-0 group-hover:opacity-100"
                          >
                            <span className="block rotate-180 text-xs">➔</span>
                          </button>
                          
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setBrandActiveStep((prev) => (prev < BRAND_SLIDES.length - 1 ? prev + 1 : 0));
                            }}
                            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/95 hover:bg-[#FF6B35] text-slate-700 hover:text-white border border-slate-200 shadow-md transition-all duration-300 opacity-0 group-hover:opacity-100"
                          >
                            <span className="text-sm">➔</span>
                          </button>

                          {/* Subtle Bottom Dot Indicator */}
                          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/50 shadow-md z-10">
                            {BRAND_SLIDES.map((_, idx) => (
                              <button
                                key={idx}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setBrandActiveStep(idx);
                                }}
                                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                                  brandActiveStep === idx 
                                    ? 'bg-[#FF6B35] w-3.5' 
                                    : 'bg-slate-300 hover:bg-slate-400'
                                }`}
                              />
                            ))}
                          </div>
                        </div>

                        {/* BOTTOM HORIZONTAL FILMSTRIP NAVIGATION */}
                        <div className="h-[125px] bg-slate-50 border-t border-slate-100 flex flex-col overflow-hidden shrink-0">
                          {/* Filmstrip Mini Header */}
                          <div className="px-4 py-1.5 border-b border-slate-200/50 flex items-center justify-between shrink-0 bg-slate-100/30">
                            <span className="font-mono text-[9px] text-slate-500 tracking-widest uppercase flex items-center gap-1.5">
                              <Sliders className="w-3.5 h-3.5 text-[#FF6B35]" />
                              <span>{language === 'zh' ? '画幅流导航 (Filmstrip)' : 'BRAND FILMSTRIP RAIL'}</span>
                            </span>
                            <span className="text-[9px] font-mono text-[#FF6B35] font-semibold bg-[#FF6B35]/10 px-1.5 py-0.5 rounded border border-[#FF6B35]/20">
                              {BRAND_SLIDES.length} SHEETS
                            </span>
                          </div>

                          {/* Scrollable list of landscape thumbnails with 3D cylindrical carousel projection */}
                          <div 
                            className="flex-grow overflow-x-auto scrollbar-thin flex items-center gap-3 px-4 py-2"
                            style={{ perspective: '800px', transformStyle: 'preserve-3d' }}
                          >
                            {BRAND_SLIDES.map((slide, sIdx) => {
                              const isActive = brandActiveStep === sIdx;
                              const diff = sIdx - brandActiveStep;
                              const rotateY = Math.max(-25, Math.min(25, diff * -8)) * (tiltIntensity / 50);
                              const translateZ = -Math.abs(diff) * 12 * (tiltIntensity / 50);
                              const opacity = Math.max(0.4, 1 - Math.abs(diff) * 0.12);
                              const scale = isActive ? 1 : Math.max(0.85, 1 - Math.abs(diff) * 0.04);

                              return (
                                <motion.button
                                  key={sIdx}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setBrandActiveStep(sIdx);
                                  }}
                                  style={{
                                    transformStyle: 'preserve-3d',
                                    transform: `perspective(600px) rotateY(${rotateY}deg) translateZ(${translateZ}px) scale(${scale})`,
                                    opacity: opacity,
                                    zIndex: 50 - Math.abs(diff),
                                  }}
                                  className={`flex-shrink-0 w-[110px] text-left rounded-lg overflow-hidden transition-all duration-300 relative group/thumb border ${
                                    isActive 
                                      ? 'border-[#FF6B35] bg-[#FF6B35]/5 shadow-[0_0_15px_rgba(255,107,53,0.35)]' 
                                      : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)]'
                                  }`}
                                >
                                  <div className="aspect-[16/10] w-full relative overflow-hidden bg-slate-50">
                                    <img 
                                      src={slide.image} 
                                      alt={slide.title}
                                      referrerPolicy="no-referrer"
                                      loading="lazy"
                                      className={`w-full h-full object-cover transition-all duration-500 ${
                                        isActive ? 'scale-105 opacity-100' : 'opacity-70 group-hover/thumb:opacity-100'
                                      }`}
                                    />
                                    
                                    <div className={`absolute top-1.5 left-1.5 w-4 h-4 rounded flex items-center justify-center font-mono text-[8px] font-bold shadow-sm ${
                                      isActive ? 'bg-[#FF6B35] text-white' : 'bg-slate-200 text-slate-600'
                                    }`}>
                                      {String(sIdx + 1).padStart(2, '0')}
                                    </div>

                                    {isActive && (
                                      <div className="absolute inset-0 border border-[#FF6B35]/30 rounded-lg animate-pulse pointer-events-none" />
                                    )}
                                  </div>
                                </motion.button>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                }

                // Filter UI slides based on active flow filter
                const filteredUiSlides = UI_SLIDES.filter(slide => 
                  uiActiveFlow === 'all' || slide.flow === uiActiveFlow
                );
                
                // Get the current slide
                const activeSlide = UI_SLIDES[uiActiveStep] || UI_SLIDES[0];

                const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = ((e.clientX - rect.left) / rect.width) * 100;
                  const y = ((e.clientY - rect.top) / rect.height) * 100;
                  setLensX(x);
                  setLensY(y);
                  setIsHoveringLens(true);
                };

                const triggerHapticFeedback = () => {
                  // Trigger device vibrate if supported
                  if (navigator.vibrate) {
                    navigator.vibrate(15);
                  }
                  
                  // Add beautiful log to micro terminal
                  const time = new Date().toLocaleTimeString();
                  const logMsgs = [
                    `[${time}] ⚡ Micro-haptic pulse emitted: 15ms @ BLE frequency.`,
                    `[${time}] 📈 Audio calibration complete: Frequency harmonics synchronizing at 192kHz.`,
                    `[${time}] 🎨 Active Screen: "${activeSlide.title}" rendered smoothly.`
                  ];
                  
                  setUiHapticLogs(prev => [logMsgs[0], logMsgs[1], ...prev].slice(0, 5));
                  
                  // Show micro-toast
                  setUiToastMessage(language === 'zh' ? '⚡ 触觉振动与微交互反馈已激活！' : '⚡ Micro-haptic pulse feedback activated!');
                  setTimeout(() => setUiToastMessage(null), 2000);
                };

                return (
                  <motion.div
                    key="ui-custom-interactive-showcase"
                    layoutId="project-container-ui-custom"
                    style={cardStyle}
                    className="lg:col-span-3 group relative bg-white border border-slate-200 shadow-[0_16px_48px_rgba(15,23,42,0.04)] overflow-hidden flex flex-col lg:flex-row h-auto lg:h-[650px] rounded-2xl"
                  >
                    {/* LEFT PANEL: Interactive Device Canvas Mockup & Filmstrip Navigation (full width) */}
                    <div className="w-full h-auto lg:h-full relative overflow-hidden flex flex-col bg-slate-50/50 select-none justify-between transition-colors duration-500">
                      
                      {/* Canvas Header */}
                      <div className="h-11 bg-slate-50 border-b border-slate-200/60 px-4 flex items-center justify-between shrink-0">
                        <div className="flex items-center gap-1.5 shrink-0">
                          <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                        </div>
                        
                        <div className="text-[9px] font-mono text-slate-400 uppercase tracking-widest flex items-center gap-1">
                          <Smartphone className="w-3.5 h-3.5 text-indigo-500" />
                          <span>{language === 'zh' ? '交互智能设备仿真' : 'DEVICE SIMULATOR'}</span>
                        </div>
                      </div>

                      {/* Main Canvas Viewport container */}
                      <div className="flex-grow w-full relative flex items-center justify-center overflow-hidden py-3 bg-slate-100/30 min-h-[260px]">
                        <AnimatePresence mode="wait">
                          {uiRenderStyle === 'mockup' && (
                            <motion.div
                              key="mockup-canvas"
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.95 }}
                              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                              className="relative flex items-center justify-center w-full h-full"
                            >
                              {/* Ambient soft glow matching active screen */}
                              <div 
                                className="absolute w-[220px] h-[220px] rounded-full blur-[90px] opacity-[0.15] pointer-events-none transition-all duration-1000"
                                style={{
                                  background: uiActiveStep < 3 ? '#3B82F6' : uiActiveStep < 6 ? '#EF4444' : uiActiveStep < 9 ? '#10B981' : uiActiveStep < 13 ? '#F59E0B' : '#6366F1'
                                }}
                              />

                              {/* Direct Interface Display */}
                              <div 
                                className="w-[170px] h-[290px] sm:w-[195px] sm:h-[330px] rounded-[24px] border border-slate-200/80 overflow-hidden relative bg-white flex flex-col cursor-crosshair group/phone transition-all duration-300 ease-out"
                                onMouseMove={handleDeviceMouseMove}
                                onMouseLeave={() => {
                                  setIsHoveringLens(false);
                                  setDeviceTilt({ rx: 0, ry: 0 });
                                }}
                                style={{
                                  transform: `perspective(800px) rotateX(${deviceTilt.rx}deg) rotateY(${deviceTilt.ry}deg)`,
                                  transformStyle: 'preserve-3d',
                                  boxShadow: `0 25px 50px -12px rgba(15,23,42,0.12), 0 0 30px rgba(99,102,241,${0.18 * (glowIntensity / 50)})`,
                                }}
                              >
                                {/* Main PNG Screen rendering */}
                                <div className="flex-1 w-full h-full relative overflow-hidden bg-white pointer-events-none">
                                  <AnimatePresence mode="wait">
                                    <motion.img
                                      key={uiActiveStep}
                                      src={activeSlide.image}
                                      alt={activeSlide.title}
                                      referrerPolicy="no-referrer"
                                      initial={{ opacity: 0, x: 20 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      exit={{ opacity: 0, x: -20 }}
                                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                                      className="w-full h-full object-contain select-none pointer-events-none block"
                                    />
                                  </AnimatePresence>
                                </div>

                                {/* Specular glare overlay for UI mockup */}
                                <div 
                                  className="absolute inset-0 pointer-events-none z-30 opacity-0 group-hover/phone:opacity-100 transition-opacity duration-300"
                                  style={{
                                    background: `radial-gradient(circle 120px at ${lensX}% ${lensY}%, rgba(255,255,255,0.3) 0%, transparent 80%)`,
                                    mixBlendMode: 'overlay',
                                  }}
                                />

                                {/* Grid reference guide overlay */}
                                {uiShowGrid && (
                                  <div className="absolute inset-0 grid grid-cols-4 gap-2.5 px-2.5 py-5 pointer-events-none z-20">
                                    {[1, 2, 3, 4].map((col) => (
                                      <div key={col} className="h-full bg-cyan-400/8 border-x border-cyan-400/25 flex flex-col justify-between text-[5px] font-mono text-cyan-300 p-0.5">
                                        <span>COL_{col}</span>
                                        <span>W_48px</span>
                                      </div>
                                    ))}
                                  </div>
                                )}

                                {/* Interactive X-Ray magnifying lens */}
                                {uiShowXRay && isHoveringLens && (
                                  <div 
                                    className="absolute w-24 h-24 rounded-full border-2 border-indigo-500 shadow-2xl pointer-events-none overflow-hidden z-20"
                                    style={{
                                      left: `${lensX}%`,
                                      top: `${lensY}%`,
                                      transform: 'translate(-50%, -50%)',
                                    }}
                                  >
                                    <img 
                                      src={activeSlide.image} 
                                      alt="Magnifier xray"
                                      referrerPolicy="no-referrer"
                                      className="absolute max-w-none w-[320%] h-auto block pointer-events-none"
                                      style={{
                                        left: `${-lensX * 3.2 + 50}%`,
                                        top: `${-lensY * 3.2 + 50}%`,
                                        filter: 'contrast(1.25) brightness(1.1) saturate(1.3) hue-rotate(15deg)',
                                      }}
                                    />
                                    <div className="absolute inset-0 border border-indigo-500/40 rounded-full flex items-center justify-center">
                                      <div className="w-2.5 h-[1px] bg-indigo-500" />
                                      <div className="h-2.5 w-[1px] bg-indigo-500" />
                                    </div>
                                    <div className="absolute bottom-1 left-1/2 -translate-x-1/2 bg-indigo-600 text-white font-mono text-[5px] px-1 rounded-xs uppercase tracking-wider font-semibold">
                                      TELE_LENS
                                    </div>
                                  </div>
                                )}
                              </div>
                            </motion.div>
                          )}

                          {uiRenderStyle === 'exploded' && (
                            <motion.div
                              key="exploded-canvas"
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.95 }}
                              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                              className="relative w-full h-full flex flex-col justify-center items-center"
                            >
                              <div 
                                className="relative w-full h-full flex items-center justify-center"
                                style={{ perspective: '1200px' }}
                              >
                                <div 
                                  className="relative flex items-center justify-center transition-all duration-700 ease-out"
                                  style={{
                                    transform: 'rotateX(52deg) rotateY(-8deg) rotateZ(-24deg)',
                                    transformStyle: 'preserve-3d',
                                  }}
                                >
                                  {/* LAYER 1 (Bottom) */}
                                  <div 
                                    className="absolute w-[150px] h-[270px] rounded-2xl border-2 border-dashed border-indigo-500/30 bg-indigo-500/5 flex items-center justify-center font-mono text-[7px] text-indigo-400 select-none transition-all duration-500"
                                    style={{
                                      transform: 'translateZ(0px)',
                                      boxShadow: '0 0 20px rgba(99,102,241,0.08) inset',
                                    }}
                                  >
                                    <div className="absolute top-3 left-3 opacity-60">BASE_VECTOR_GUIDE</div>
                                    <Grid3X3 className="w-6 h-6 text-indigo-500/20" />
                                  </div>

                                  {/* LAYER 2 (Middle) */}
                                  <div 
                                    className="absolute w-[150px] h-[270px] rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 bg-white"
                                    style={{
                                      transform: `translateZ(${uiExplosionGap}px)`,
                                      boxShadow: '0 15px 35px rgba(0,0,0,0.5)',
                                    }}
                                  >
                                    <img 
                                      src={activeSlide.image} 
                                      alt={activeSlide.title}
                                      referrerPolicy="no-referrer"
                                      className="w-full h-full object-contain block p-1"
                                    />
                                    <div className="absolute inset-0 bg-indigo-500/2 mix-blend-color-dodge pointer-events-none" />
                                  </div>

                                  {/* LAYER 3 (Top) */}
                                  <div 
                                    className="absolute w-[150px] h-[270px] rounded-2xl border-2 border-rose-500/60 bg-rose-500/4 pointer-events-none flex flex-col justify-between p-3 font-mono text-[6px] text-rose-500 select-none transition-all duration-500"
                                    style={{
                                      transform: `translateZ(${uiExplosionGap * 2}px)`,
                                      transformStyle: 'preserve-3d',
                                    }}
                                  >
                                    <div className="flex justify-between items-start">
                                      <span className="bg-rose-500 text-white px-1 rounded-xs text-[5px] font-bold">FLOW_PHASE_0{uiActiveStep + 1}</span>
                                      <span>GRID: 4-COL</span>
                                    </div>
                                    
                                    <div className="border border-rose-500/30 border-dashed flex-1 my-2.5 rounded-lg relative flex items-center justify-center">
                                      <div className="absolute top-1 left-1 px-1 bg-rose-500/10 rounded-sm">MARGIN: 16px</div>
                                      <div className="absolute bottom-1 right-1 px-1 bg-rose-500/10 rounded-sm">GAP: 8px</div>
                                    </div>

                                    <div className="flex justify-between items-end">
                                      <span>MEASURE_DPI: 460</span>
                                      <span className="bg-rose-500 text-white px-1 rounded-xs text-[5px] font-bold">COMPLIANT</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}

                          {uiRenderStyle === 'compare' && (
                            <motion.div
                              key="compare-canvas"
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.95 }}
                              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                              className="w-full h-full flex justify-center items-center gap-4 px-4"
                            >
                              {/* Compare Phone A */}
                              <div className="flex flex-col items-center gap-1.5">
                                <span className="font-mono text-[8px] text-slate-400 uppercase tracking-widest">{language === 'zh' ? '参照主站 (A)' : 'Dashboard (A)'}</span>
                                <div className="w-[85px] h-[150px] sm:w-[95px] sm:h-[165px] rounded-xl border border-slate-200 bg-slate-50 p-1 shadow-md overflow-hidden">
                                  <img 
                                    src={UI_SLIDES[0].image} 
                                    alt="Baseline Dashboard"
                                    referrerPolicy="no-referrer"
                                    className="w-full h-full object-contain pointer-events-none opacity-80"
                                  />
                                </div>
                              </div>

                              <div className="text-slate-400 animate-pulse text-xs">➔</div>

                              {/* Compare Phone B */}
                              <div className="flex flex-col items-center gap-1.5">
                                <span className="font-mono text-[8px] text-indigo-600 uppercase tracking-widest">{language === 'zh' ? '当前视图 (B)' : 'Active (B)'}</span>
                                <div className="w-[85px] h-[150px] sm:w-[95px] sm:h-[165px] rounded-xl border border-indigo-200 bg-slate-50 p-1 shadow-[0_10px_30px_rgba(99,102,241,0.12)] overflow-hidden">
                                  <img 
                                    src={activeSlide.image} 
                                    alt="Selected Screen"
                                    referrerPolicy="no-referrer"
                                    className="w-full h-full object-contain pointer-events-none"
                                  />
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* FILMSTRIP NAVIGATION (Unified inside the display module) */}
                      <div className="h-[125px] bg-slate-50 border-t border-slate-100 flex flex-col overflow-hidden shrink-0">
                        {/* Filmstrip Header */}
                        <div className="px-4 py-1.5 border-b border-slate-200/50 flex items-center justify-between shrink-0 bg-slate-100/30">
                          <span className="font-mono text-[9px] text-slate-500 tracking-widest uppercase flex items-center gap-1.5">
                            <Sliders className="w-3.5 h-3.5 text-indigo-600" />
                            <span>{language === 'zh' ? '界面画幅流导航 (Filmstrip)' : 'INTERFACE FILMSTRIP'}</span>
                          </span>
                          <span className="text-[9px] font-mono text-indigo-600 font-semibold bg-indigo-50/10 px-1.5 py-0.5 rounded border border-indigo-200/20">
                            {filteredUiSlides.length} SHEETS
                          </span>
                        </div>

                        {/* Horizontal scrollable thumbnails with 3D perspective wrap */}
                        <div 
                          className="flex-grow overflow-x-auto scrollbar-thin flex items-center gap-2.5 px-4 py-2"
                          style={{ perspective: '800px', transformStyle: 'preserve-3d' }}
                        >
                          {UI_SLIDES.map((slide, sIdx) => {
                            const isFilteredOut = uiActiveFlow !== 'all' && slide.flow !== uiActiveFlow;
                            const isActive = uiActiveStep === sIdx;
                            
                            if (isFilteredOut) return null;

                            const diff = sIdx - uiActiveStep;
                            const rotateY = Math.max(-25, Math.min(25, diff * -8)) * (tiltIntensity / 50);
                            const translateZ = -Math.abs(diff) * 12 * (tiltIntensity / 50);
                            const opacity = Math.max(0.4, 1 - Math.abs(diff) * 0.12);
                            const scale = isActive ? 1 : Math.max(0.85, 1 - Math.abs(diff) * 0.04);

                            return (
                              <motion.button
                                key={sIdx}
                                onClick={() => {
                                  setUiActiveStep(sIdx);
                                  const log = `[${new Date().toLocaleTimeString()}] 🎬 Selected Layout S_0${sIdx + 1}: "${slide.title}"`;
                                  setUiHapticLogs(p => [log, ...p].slice(0, 5));
                                }}
                                style={{
                                  transformStyle: 'preserve-3d',
                                  transform: `perspective(600px) rotateY(${rotateY}deg) translateZ(${translateZ}px) scale(${scale})`,
                                  opacity: opacity,
                                  zIndex: 50 - Math.abs(diff),
                                }}
                                className={`flex-shrink-0 w-[55px] text-left rounded-lg overflow-hidden transition-all duration-300 relative group/thumb border ${
                                  isActive 
                                    ? 'border-indigo-600 bg-indigo-50/10 shadow-[0_0_15px_rgba(99,102,241,0.35)]' 
                                    : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)]'
                                }`}
                              >
                                <div className="aspect-[9/16] w-full relative overflow-hidden bg-slate-950">
                                  <img 
                                    src={slide.image} 
                                    alt={slide.title}
                                    referrerPolicy="no-referrer"
                                    className={`w-full h-full object-cover transition-all duration-500 ${
                                      isActive ? 'scale-105 opacity-100' : 'opacity-60 group-hover/thumb:opacity-90'
                                    }`}
                                  />
                                  <div className={`absolute top-1 left-1 w-4 h-4 rounded-sm flex items-center justify-center font-mono text-[8px] font-bold shadow-sm ${
                                    isActive ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-600'
                                  }`}>
                                    {String(sIdx + 1).padStart(2, '0')}
                                  </div>
                                </div>
                              </motion.button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Micro Sandbox HUD Toggles & Realtime Logs */}
                      <div className="z-20 bg-slate-50/80 p-3 border-t border-slate-100 space-y-2 shrink-0">

                      </div>

                      {/* Toast Notification overlay inside device canvas */}
                      <AnimatePresence>
                        {uiToastMessage && (
                          <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 15 }}
                            className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-indigo-600 border border-indigo-400 text-white font-medium text-[10px] px-4 py-2 rounded-full shadow-[0_12px_24px_rgba(99,102,241,0.3)] flex items-center gap-1.5 z-40"
                          >
                            <Zap className="w-3 h-3 text-yellow-300 animate-bounce" />
                            <span>{uiToastMessage}</span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                );
              }

              return (
                <motion.div
                  key={project.id}
                  layoutId={`project-container-${project.id}`}
                  onClick={() => setSelectedProject(project)}
                  style={cardStyle}
                  className={`group relative glass-panel border border-white/60 shadow-[0_4px_24px_rgba(31,38,135,0.03)] overflow-hidden cursor-pointer flex flex-col justify-between transition-all duration-500 hover:shadow-[0_12px_40px_rgba(31,38,135,0.06)] hover:border-slate-300/50 hover:-translate-y-1 ${colSpanClass}`}
                  whileHover={{ y: -4 }}
                >
                  {/* Image wrapper */}
                  <div className={`relative overflow-hidden w-full bg-slate-100 ${isPrimary ? 'h-64 md:h-[400px]' : 'h-52 md:h-60'}`}>
                    {project.images && project.images.length > 1 ? (
                      <div className="grid grid-cols-2 h-full w-full gap-1.5 p-1.5 bg-slate-50/50">
                        {project.images.map((imgUrl, imgIdx) => (
                          <div key={imgIdx} className="relative overflow-hidden h-full rounded-lg border border-slate-200/50 bg-white">
                            <img 
                              src={imgUrl} 
                              alt={`${project.title} - ${imgIdx + 1}`}
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover hover:scale-[1.04] transition-transform duration-500 ease-out"
                            />
                          </div>
                        ))}
                      </div>
                    ) : (
                      <img 
                        src={project.imageUrl} 
                        alt={project.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                      />
                    )}
                    
                    {/* Dark gradient mask */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent pointer-events-none" />



                    {/* Tags overlay */}
                    <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-1.5 z-10">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-2 py-0.5 bg-white/10 backdrop-blur-md border border-white/10 text-white rounded text-[9px] font-mono tracking-wide">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Top right floating button */}
                    <div className="absolute top-4 right-4 z-10">
                      <div className="w-8 h-8 rounded-full bg-white/95 shadow-sm border border-slate-200/50 flex items-center justify-center text-slate-700 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Text details */}
                  <div className="p-6 bg-white/60 backdrop-blur-md flex-1 flex flex-col justify-between relative">
                    
                    {/* Bounding Box Info for Inspector Mode */}

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest">
                          {project.year} / {CATEGORIES.find(c => c.id === project.category)?.englishLabel}
                        </span>
                        <span className="font-mono text-[10px] text-blue-500 bg-blue-50 px-2 py-0.5 rounded">
                          SPEC INSPECT
                        </span>
                      </div>
                      
                      <h3 className="font-display text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                        {language === 'zh' ? project.chineseTitle : project.title}
                      </h3>
                      {language === 'zh' ? (
                        <p className="font-mono text-xs text-slate-400 mt-0.5 mb-3 tracking-wide">
                          {project.title}
                        </p>
                      ) : (
                        <div className="h-3" />
                      )}
                      
                      <p className="text-xs text-slate-500 leading-relaxed font-light mb-6">
                        {language === 'zh' ? project.chineseDescription : project.description}
                      </p>
                    </div>

                    {/* Core Performance Indicators */}
                    {project.category !== 'visual' && project.category !== 'packaging' && project.category !== '3d' && (
                      <div className="border-t border-slate-200/50 pt-4 mt-auto">
                        <p className="text-[9px] text-slate-400 font-mono uppercase tracking-wider mb-2 flex items-center gap-1.5">
                          <Activity className="w-3 h-3 text-cyan-500" />
                          <span>{language === 'zh' ? '科学推导评估指标 (Core Analytics)' : 'Analytical Metrics'}</span>
                        </p>
                        <div className="grid grid-cols-3 gap-2">
                          {project.metrics.map((metric, mIdx) => (
                            <div key={mIdx} className="bg-slate-50/50 border border-slate-200/30 p-2 rounded text-center">
                              <span className="block font-mono text-xs font-semibold text-slate-800">{metric.value}</span>
                              <span className="block text-[8px] text-slate-400 truncate mt-0.5">{metric.label}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </section>


      </main>

      {/* ----------------- PROJECT CASE STUDY DEEP INSPECTOR MODAL ----------------- */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-end overflow-hidden">
            {/* Modal Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-md"
            />

            {/* Modal Sheet Content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 220 }}
              className={`relative w-full max-w-4xl h-full shadow-2xl overflow-y-auto flex flex-col z-10 border-l ${theme === 'light' ? 'bg-white border-slate-100' : 'bg-slate-900 border-slate-700'}`}
            >
              {/* Sticky Top Header */}
              <div className={`sticky top-0 backdrop-blur-md border-b px-6 py-4 flex items-center justify-between z-30 ${theme === 'light' ? 'bg-white/90 border-slate-100' : 'bg-slate-900/90 border-slate-700'}`}>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-100 rounded-lg">
                    <Cpu className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <h3 className={`font-display font-bold text-base ${theme === 'light' ? 'text-slate-900' : 'text-slate-100'}`}>
                      {language === 'zh' ? selectedProject.chineseTitle : selectedProject.title}
                    </h3>
                    <p className={`font-mono text-xs uppercase tracking-widest ${theme === 'light' ? 'text-slate-400' : 'text-slate-500'}`}>
                      {language === 'zh' ? selectedProject.title : selectedProject.chineseTitle}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors duration-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Deep Case Study Body */}
              <div className="p-6 md:p-8 space-y-10 flex-1">
                
                {/* 1. Large Hero Picture */}
                {selectedProject.images && selectedProject.images.length > 1 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedProject.images.map((imgUrl, idx) => (
                      <div key={idx} className="relative rounded-xl overflow-hidden h-[400px] md:h-[600px] bg-slate-950 shadow-inner border border-slate-800/60 flex items-center justify-center">
                        <img 
                          src={imgUrl} 
                          alt={`${selectedProject.title} - ${idx + 1}`} 
                          referrerPolicy="no-referrer"
                          className="max-w-full max-h-full object-contain hover:scale-[1.02] transition-transform duration-500 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute bottom-4 left-4">
                          <span className="px-2 py-1 bg-white/20 backdrop-blur-md text-white rounded text-[9px] font-mono">
                            POSTER 0{idx + 1}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="relative rounded-xl overflow-hidden h-64 md:h-96 bg-slate-100 shadow-inner">
                    <img 
                      src={selectedProject.imageUrl} 
                      alt={selectedProject.title} 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent pointer-events-none" />
                    
                    <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                      <div>
                        <span className="px-2 py-1 bg-white/20 backdrop-blur-md text-white rounded text-[10px] font-mono">
                          YEAR: {selectedProject.year}
                        </span>
                        <h4 className="text-white font-display text-2xl font-bold mt-2">
                          {language === 'zh' ? selectedProject.chineseTitle : selectedProject.title}
                        </h4>
                      </div>
                    </div>
                  </div>
                )}

                {/* Grid Split: Intro vs Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Left block - Description */}
                  <div className="md:col-span-2 space-y-4">
                    <h5 className="font-display font-semibold text-sm text-slate-900 uppercase tracking-wider flex items-center gap-2 border-b border-slate-100 pb-2">
                      <Compass className="w-4 h-4 text-blue-500" />
                      <span>{language === 'zh' ? '设计陈述与问题对策 (Statement & Rationale)' : 'Statement & Rationale'}</span>
                    </h5>
                    <p className="text-slate-600 text-sm leading-relaxed font-light">
                      {language === 'zh' ? selectedProject.chineseDescription : selectedProject.description}
                    </p>
                    {language === 'zh' && (
                      <p className="text-slate-400 text-xs italic font-mono">
                        {selectedProject.description}
                      </p>
                    )}
                  </div>

                  {/* Right block - Metrics */}
                  <div className="bg-slate-50 border border-slate-200/50 rounded-xl p-4 space-y-4 h-fit">
                    <h5 className="font-mono font-semibold text-[10px] text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Activity className="w-3.5 h-3.5 text-cyan-500" />
                      <span>{language === 'zh' ? '科学评估成效指标 (Metrics)' : 'Key Metrics'}</span>
                    </h5>
                    <div className="space-y-3">
                      {selectedProject.metrics.map((metric, idx) => (
                        <div key={idx} className="bg-white border border-slate-200/30 p-3 rounded-lg flex items-center justify-between shadow-xs">
                          <span className="text-xs text-slate-500">{metric.label}</span>
                          <span className="font-mono text-sm font-bold text-blue-600">{metric.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 2. Scientific Interaction Logic (Focal Flow Steps) */}
                <div className="bg-slate-50/50 border border-slate-200/40 rounded-xl p-6 space-y-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-slate-200/50 pb-4">
                    <div className="flex items-center gap-2">
                      <Cpu className="w-5 h-5 text-pink-500" />
                      <h5 className="font-display font-semibold text-sm text-slate-900">
                        {language === 'zh' ? '科学交互路径推演 (Scientific User Flow Simulation)' : 'Scientific User Flow Simulation'}
                      </h5>
                    </div>
                    <span className="text-xs text-slate-400 font-mono">
                      {language === 'zh' ? '点击各阶段预览视线聚焦迁移' : 'Click steps to preview focal point shift'}
                    </span>
                  </div>

                  {/* Rationale description */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="md:col-span-1 space-y-2">
                      <span className="font-mono text-[9px] uppercase tracking-widest text-slate-400">
                        {language === 'zh' ? '设计考量目标' : 'Interactive Objective'}
                      </span>
                      <p className="text-xs text-slate-600 font-light leading-normal">
                        {bilingualLogic?.objective}
                      </p>
                      
                      <div className="pt-4">
                        <span className="font-mono text-[9px] uppercase tracking-widest text-slate-400">
                          {language === 'zh' ? '学理支撑公式' : 'Scientific Formula'}
                        </span>
                        <p className="text-xs text-slate-500 font-mono bg-slate-100 p-2 rounded mt-1 overflow-x-auto text-[10px]">
                          {selectedProject.interactiveLogic.scientificApproach.substring(0, 40)}...
                        </p>
                      </div>
                    </div>

                    {/* Step by step interactive mapper */}
                    <div className="md:col-span-3 space-y-4">
                      <div className="grid grid-cols-3 gap-2">
                        {selectedProject.interactiveLogic.userFlowSteps.map((_, index) => (
                          <button
                             key={index}
                             onClick={() => setActiveFlowStep(index)}
                             className={`px-3 py-2 text-left rounded-lg border text-xs font-mono transition-all duration-300 ${
                               activeFlowStep === index
                                 ? 'bg-blue-600 border-blue-600 text-white shadow-sm'
                                 : 'bg-white border-slate-200 hover:border-slate-300 text-slate-600'
                             }`}
                           >
                            <span className="block text-[9px] opacity-60 mb-1">PHASE 0{index + 1}</span>
                            <span className="font-medium truncate block">
                              {language === 'zh' ? `阶段 0${index + 1}` : `Phase 0${index + 1}`}
                            </span>
                          </button>
                        ))}
                      </div>

                      {/* Display active step description */}
                      <div className="bg-white border border-slate-200/60 p-4 rounded-xl min-h-[100px] flex items-center gap-4 shadow-xs">
                        <div className="w-8 h-8 rounded-full bg-slate-100 shrink-0 flex items-center justify-center font-mono font-bold text-xs text-blue-600">
                          {activeFlowStep + 1}
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed font-light">
                          {bilingualLogic?.steps[activeFlowStep]}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. Atom Design System Specs (原子设计规格) */}
                <div className="space-y-6">
                  <h5 className="font-display font-semibold text-sm text-slate-900 uppercase tracking-wider flex items-center gap-2 border-b border-slate-100 pb-2">
                    <Sliders className="w-4 h-4 text-emerald-500" />
                    <span>{language === 'zh' ? '设计原子规格标准 (Atomic Specifications)' : 'Atomic Specifications'}</span>
                  </h5>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Typography and Grid Specs */}
                    <div className="space-y-4 font-sans text-xs">
                      <div className="bg-slate-50 border border-slate-200/30 p-4 rounded-xl">
                        <span className="block font-mono text-[9px] uppercase tracking-widest text-slate-400 mb-1.5">
                          {language === 'zh' ? '栅格系统与间距模量 (Grid System & Spacing)' : 'Grid System & Spacing Unit'}
                        </span>
                        <p className="font-semibold text-slate-800 text-xs mb-1">{selectedProject.specs.gridSystem}</p>
                        <p className="text-slate-500 text-[11px] font-mono">Increment Unit: {selectedProject.specs.spacingUnit}</p>
                      </div>

                      <div className="bg-slate-50 border border-slate-200/30 p-4 rounded-xl">
                        <span className="block font-mono text-[9px] uppercase tracking-widest text-slate-400 mb-1.5">
                          {language === 'zh' ? '排版字体配对标准 (Typography Pairing)' : 'Typography Pairing (1.250 Ratio)'}
                        </span>
                        <div className="space-y-1.5">
                          <p className="text-slate-800 text-[11px]"><span className="font-semibold">Display:</span> {selectedProject.specs.typography.heading}</p>
                          <p className="text-slate-800 text-[11px]"><span className="font-semibold">Body:</span> {selectedProject.specs.typography.body}</p>
                          <p className="text-slate-400 text-[10px] font-mono mt-1">Scale Rule: {selectedProject.specs.typography.scaling}</p>
                        </div>
                      </div>
                    </div>

                    {/* Interactive Color Swatches */}
                    <div className="bg-slate-50 border border-slate-200/30 p-4 rounded-xl">
                      <span className="block font-mono text-[9px] uppercase tracking-widest text-slate-400 mb-3">
                        {language === 'zh' ? '色彩感知图谱 (点击色块复制HEX色值)' : 'Color Perceptual Blueprint (Click chip to Copy HEX)'}
                      </span>
                      
                      <div className="space-y-3">
                        {selectedProject.specs.colorPalette.map((color, cIdx) => (
                          <div 
                            key={cIdx} 
                            onClick={() => copyToClipboard(color.hex)}
                            className="flex items-center gap-3 p-1.5 hover:bg-white rounded-lg cursor-pointer transition-all duration-200 group/color"
                          >
                            <div 
                              className="w-10 h-10 rounded-md shadow-xs border border-slate-200/40 shrink-0 flex items-center justify-center relative overflow-hidden"
                              style={{ backgroundColor: color.hex }}
                            >
                              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover/color:opacity-100 flex items-center justify-center transition-opacity">
                                <Copy className="w-3.5 h-3.5 text-white" />
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <span className="text-[11px] font-medium text-slate-800 block truncate">{color.name}</span>
                                <span className="font-mono text-[10px] text-slate-400 group-hover/color:text-blue-500 font-semibold">{color.hex}</span>
                              </div>
                              <span className="text-[9px] text-slate-400 block truncate mt-0.5">{color.usage}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 4. Methodology Section */}
                <div className="border-t border-slate-100 pt-6">
                  <div className="bg-blue-50/40 border border-blue-100 rounded-xl p-4 flex gap-3">
                    <Info className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    <div className="text-xs text-blue-800 leading-relaxed font-light">
                      <span className="font-semibold block mb-1">设计科学性说明 (Analytical Design Approach)：</span>
                      本作品并非堆砌无意义的渐变色和视觉元素，而是严格遵循严密的栅格参数（Grid Coordinates）与人机工程学公式。我们认为，优秀的设计应当具备“自证”能力，即通过数据量化、无摩擦的用户交互（Frictionless Flow）及可追溯的几何数学推论来体现价值。
                    </div>
                  </div>
                </div>

              </div>

              {/* Sticky bottom close bar */}
              <div className="sticky bottom-0 bg-slate-50 border-t border-slate-100 px-6 py-4 flex items-center justify-between z-30">
                <span className="font-mono text-[10px] text-slate-400">STUDIO.LOGIC / QUANTUM VIEW</span>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-md text-xs font-medium transition-colors shadow-xs"
                >
                  关闭全景透视
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ----------------- SELF-INTRODUCTION / ABOUT ME MODAL ----------------- */}
      <AnimatePresence>
        {isAboutOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-hidden">
            {/* Modal Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsAboutOpen(false)}
              className="absolute inset-0 bg-slate-900/45 backdrop-blur-md"
            />

            {/* Modal Content Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="glass-panel relative w-full max-w-2xl border border-white/80 shadow-[0_24px_64px_rgba(0,0,0,0.12)] bg-white/95 overflow-hidden flex flex-col z-10"
              style={{ borderRadius: '24px' }}
            >
              {/* Top Bar Decoration */}
              <div className="h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-600 w-full" />
              
              {/* Header inside modal */}
              <div className="px-6 pt-5 pb-4 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 bg-blue-50 text-blue-600 rounded-lg">
                    <User className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm text-slate-900 tracking-wide">
                      {language === 'zh' ? '设计创作者简介' : 'Creator Profile'}
                    </h3>
                    <p className="font-mono text-[9px] text-slate-400 uppercase tracking-wider">
                      {language === 'zh' ? '设计师自序与简历' : 'Designer Monologue & Resume'}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsAboutOpen(false)}
                  className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors duration-200 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Bio Content Area */}
              <div className="p-6 md:p-8 space-y-6 max-h-[70vh] overflow-y-auto pr-2">
                {/* Visual Avatar / Brand card */}
                <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-slate-900 to-indigo-950 p-6 text-white border border-slate-800 shadow-md">
                  {/* Grid Lines in background of card for geometric theme */}
                  <div className="absolute inset-0 grid grid-cols-6 gap-2 p-4 opacity-5 pointer-events-none">
                    {Array.from({ length: 18 }).map((_, i) => (
                      <div key={i} className="border border-white" />
                    ))}
                  </div>

                  <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                    <div className="space-y-2">
                      <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-blue-500/20 border border-blue-500/30 text-blue-300 rounded text-[9px] font-mono tracking-wider">
                        <Sparkles className="w-2.5 h-2.5 animate-pulse" />
                        <span>{language === 'zh' ? '2026届应届校招候选人' : 'CLASS OF 2026 CANDIDATE'}</span>
                      </div>
                      <h4 className="font-display text-2xl md:text-3xl font-black tracking-tight text-white leading-none">
                        {language === 'zh' ? '张恒' : 'Zhang Heng'}
                      </h4>
                      <p className="text-slate-300 text-xs font-medium tracking-wide">
                        {language === 'zh' ? '求职意向：品牌设计师 / UI/UX设计师 / 创意视觉设计师' : 'Target: Brand Designer / UI/UX / Creative Visual Designer'}
                      </p>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-slate-400 text-[11px] font-mono mt-2">
                        <span className="flex items-center gap-1">河南 • 郑州</span>
                        <span className="flex items-center gap-1">182-3972-0128</span>
                        <span className="flex items-center gap-1">1836080329@qq.com</span>
                      </div>
                    </div>

                    <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-blue-500 via-indigo-500 to-violet-500 p-0.5 shrink-0 flex items-center justify-center shadow-lg border border-white/10 hover:rotate-6 transition-transform duration-300">
                      <div className="w-full h-full rounded-full bg-slate-950 overflow-hidden flex items-center justify-center">
                        <img 
                          src="https://bee-reg-ab.imagency.cn/e/c615d3b12b5945fbbe35e6ba8fa1ae89.png" 
                          alt="张恒" 
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-slate-800/80 pt-3 mt-4 flex items-center justify-between text-[9px] font-mono text-slate-400">
                    <span>{language === 'zh' ? '河南工程学院 | 视觉传达设计' : 'Henan Institute of Engineering | Visual Comm'}</span>
                    <span>ACTIVE IN HONAN</span>
                  </div>
                </div>

                {/* Text blocks */}
                <div className="space-y-6">
                  {/* Education / Statement */}
                  <div className="space-y-2">
                    <h5 className="text-[10px] uppercase tracking-wider font-mono text-indigo-500 font-bold flex items-center gap-1.5 border-b border-slate-100 pb-1">
                      <Sparkles className="w-3 h-3" />
                      {language === 'zh' ? '个人陈述 / Statement' : 'Design Statement'}
                    </h5>
                    <p className="text-slate-600 text-xs leading-relaxed font-sans font-light">
                      {language === 'zh' 
                        ? '你好，我是张恒，一名热衷于融合前沿美学、科学逻辑与AIGC工具的视觉传达设计师。在多维设计体系（品牌视觉、3D卡通建模、快消品包装、UI/UX）中，我追求平衡与秩序之美。精通C4D、OC、Blender、Figma与AI辅助脑暴流，能在极短时间内实现完美的创意落地。'
                        : 'Hello, I am Zhang Heng, a visual communication designer passionate about merging cutting-edge aesthetics, scientific logic, and AIGC tools. I strive to achieve harmony and rigorous order across brand visual identity, 3D character setups, FMCG packaging, and modern UI/UX design paths.'
                      }
                    </p>
                  </div>

                  {/* Core Skills & Softwares */}
                  <div className="space-y-2">
                    <h5 className="text-[10px] uppercase tracking-wider font-mono text-indigo-500 font-bold flex items-center gap-1.5 border-b border-slate-100 pb-1">
                      <Activity className="w-3 h-3" />
                      {language === 'zh' ? '专业技能与软件 / Software & Skills' : 'Core Specialties'}
                    </h5>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {['Ps', 'Figma', 'Ai', 'Blender', 'C4d', 'Ae', '剪映', 'AIGC 辅助脑暴', '快消品包装', '品牌视觉CI', 'UI/UX交互理念'].map((skill, sIdx) => (
                        <span key={sIdx} className="px-2.5 py-1 bg-slate-50 border border-slate-200/50 text-[10px] text-slate-700 font-medium rounded-md hover:bg-indigo-50 hover:border-indigo-100 transition-colors duration-150">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Selected Project History */}
                  <div className="space-y-3">
                    <h5 className="text-[10px] uppercase tracking-wider font-mono text-indigo-500 font-bold flex items-center gap-1.5 border-b border-slate-100 pb-1">
                      <User className="w-3 h-3" />
                      {language === 'zh' ? '重点项目经历 / Key Projects' : 'Selected Experience'}
                    </h5>
                    
                    <div className="space-y-3 pt-1">
                      {/* Project 1 */}
                      <div className="bg-slate-50/50 rounded-lg p-3 border border-slate-100/80 space-y-1 hover:border-indigo-100 transition-all duration-300">
                        <div className="flex justify-between items-start">
                          <h6 className="text-[11px] font-bold text-slate-800">仲景宛西制药山茱萸药材基地形象提升</h6>
                          <span className="text-[9px] font-mono text-slate-400">2025.05 - 2025.07</span>
                        </div>
                        <p className="text-[10px] text-slate-500 leading-relaxed">
                          针对传统药材基地品牌弱现状，全面升级视觉系统。提取山茱萸核心元素，独立负责户外、室内导视系统设计，融合自然材质。
                        </p>
                      </div>

                      {/* Project 2 */}
                      <div className="bg-slate-50/50 rounded-lg p-3 border border-slate-100/80 space-y-1 hover:border-indigo-100 transition-all duration-300">
                        <div className="flex justify-between items-start">
                          <h6 className="text-[11px] font-bold text-slate-800">东方航天港文旅集团标志设计 (焕新与商用化)</h6>
                          <span className="text-[9px] font-mono text-slate-400">2025.09 - 2025.12</span>
                        </div>
                        <p className="text-[10px] text-slate-500 leading-relaxed">
                          解决原有标识版权争议痛点，主导品牌标志焕新工程，通过工商注册与版权审核，打通商业化授权与法律合规。
                        </p>
                      </div>

                      {/* Project 3 */}
                      <div className="bg-slate-50/50 rounded-lg p-3 border border-slate-100/80 space-y-1 hover:border-indigo-100 transition-all duration-300">
                        <div className="flex justify-between items-start">
                          <h6 className="text-[11px] font-bold text-slate-800">东方航天港文创大赛主视觉及文创设计</h6>
                          <span className="text-[9px] font-mono text-slate-400">2025.09 - 2026.01</span>
                        </div>
                        <p className="text-[10px] text-slate-500 leading-relaxed">
                          担任项目组长，采用 AI (Gemini, 即梦, FLOW) 辅助前期脑暴，缩短 30% 初稿时间。主攻航天系列文具创意延展及视觉打样输出。
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Certs & Awards */}
                  <div className="space-y-2">
                    <h5 className="text-[10px] uppercase tracking-wider font-mono text-indigo-500 font-bold flex items-center gap-1.5 border-b border-slate-100 pb-1">
                      <Sparkles className="w-3 h-3" />
                      {language === 'zh' ? '获奖经历与资格证书 / Awards & Credentials' : 'Awards & Honors'}
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[10px] pt-1">
                      <div className="flex items-center gap-1.5 text-slate-600 bg-slate-50 p-2 rounded-md border border-slate-100">
                        <span className="text-amber-500 font-bold">★</span>
                        <span>河南省短视频大赛二等奖 (省奖)</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-600 bg-slate-50 p-2 rounded-md border border-slate-100">
                        <span className="text-amber-500 font-bold">★</span>
                        <span>蓝桥杯文创大赛三等奖</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-600 bg-slate-50 p-2 rounded-md border border-slate-100">
                        <span className="text-indigo-500">✔</span>
                        <span>高中美术教师资格证</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-600 bg-slate-50 p-2 rounded-md border border-slate-100">
                        <span className="text-indigo-500">✔</span>
                        <span>普通话证书二级甲等</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-600 bg-slate-50 p-2 rounded-md border border-slate-100">
                        <span className="text-emerald-500">✦</span>
                        <span>河南省三下乡优秀志愿者</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action buttons (Copy Mail) */}
                <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText('1836080329@qq.com');
                      setCopiedColor('1836080329@qq.com');
                      setTimeout(() => setCopiedColor(null), 3000);
                    }}
                    className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-mono font-medium transition-colors duration-200 cursor-pointer shadow-sm"
                  >
                    <Mail className="w-3.5 h-3.5 text-blue-400" />
                    <span>{copiedColor === '1836080329@qq.com' ? (language === 'zh' ? '邮箱已复制！' : 'Email Copied!') : '1836080329@qq.com'}</span>
                    <Copy className="w-3 h-3 opacity-60 hover:opacity-100 ml-1" />
                  </button>

                  <button
                    onClick={() => setIsAboutOpen(false)}
                    className="w-full sm:w-auto px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-medium transition-colors duration-200 cursor-pointer border border-slate-200/30"
                  >
                    {language === 'zh' ? '关闭简介' : 'Close Profile'}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ----------------- INTERACTIVE BOTTOM LIGHT TRACKING TRACER ----------------- */}
      <div className="relative w-full overflow-hidden h-8 pointer-events-none z-10">
        <div 
          className="absolute h-[3px] rounded-full blur-[3px] transition-all duration-700 ease-out opacity-80"
          style={{
            left: `${Math.max(8, Math.min(92, (mouseCoords.x / (typeof window !== 'undefined' ? window.innerWidth : 1000)) * 100))}%`,
            transform: 'translateX(-50%)',
            width: '220px',
            background: 'linear-gradient(90deg, transparent, #3b82f6, #8b5cf6, #ec4899, transparent)',
            boxShadow: '0 0 24px 8px rgba(139, 92, 246, 0.5)',
          }}
        />
        <div 
          className="absolute h-[1px] w-full bg-slate-200/30 bottom-0"
        />
      </div>

      {/* ----------------- FOOTER SECTION WITH GENTLE GRADIENT INFO ----------------- */}
      <footer className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] tracking-widest text-slate-400 uppercase">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono">INTERFACE INTEGRITY: VERIFIED [PORT: 3000]</span>
          </div>
          <div className="font-light normal-case">
            © 2026 STUDIO.LOGIC. ALL RIGHTS RESERVED.
          </div>
          <div className="flex space-x-6 text-[11px] font-mono tracking-wider font-medium">
            <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors duration-200">BEHANCE</a>
            <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors duration-200">DRIBBBLE</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors duration-200">INSTAGRAM</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
