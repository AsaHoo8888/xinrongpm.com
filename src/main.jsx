import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Link, Route, Routes, useLocation } from 'react-router-dom';
import {
  ArrowRight,
  BadgeCheck,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Factory,
  Globe2,
  Languages,
  Layers,
  Lightbulb,
  Mail,
  MapPin,
  MessageCircle,
  PackageCheck,
  Phone,
  PlayCircle,
  Search,
  ShieldCheck,
  Settings,
  Star,
  Users,
  Wrench,
} from 'lucide-react';
import logoImage from './assets/xinrong-logo.png';
import heroImage from './assets/extrusion-hero.png';
import productsImage from './assets/pipe-products.png';
import factoryImage from './assets/factory-overview.png';
import romaniaCaseImage from './assets/project-cases/romania-pe20-630-three-layer-pipe-extrusion-line.jpg';
import turkeyCaseImage from './assets/project-cases/turkey-pe-pipe-extrusion-lines-up-to-1200mm.jpg';
import hungaryCaseImage from './assets/project-cases/hungary-pe20-110-high-speed-pipe-production-line.jpg';
import cambodiaCaseImage from './assets/project-cases/cambodia-pe630-pipe-extrusion-line.jpg';
import nigeriaCaseImage from './assets/project-cases/nigeria-pe1200-pipe-production-line.jpg';
import tajikistanCaseImage from './assets/project-cases/tajikistan-pe-pipe-and-dwc-pipe-extrusion-lines.jpg';
import senegalCaseImage from './assets/project-cases/senegal-pe180-315-two-layer-pipe-production-line.jpg';
import georgiaCaseImage from './assets/project-cases/georgia-pe-and-dwc-pipe-extrusion-lines.jpg';
import uzbekistanCaseImage from './assets/project-cases/uzbekistan-ppr-pvc-pe-pipe-extrusion-lines.jpg';
import kazakhstanCaseImage from './assets/project-cases/kazakhstan-ppr63-and-pe250-pipe-extrusion-lines.jpg';
import indiaCaseImage from './assets/project-cases/india-pe315-and-pe600-dwc-pipe-extrusion-lines.jpg';
import dubaiCaseImage from './assets/project-cases/dubai-pe710-and-pe2000-steel-belt-corrugated-pipe-line.jpg';
import pePipeFeatureImage from './assets/products/pe-pipe-extrusion-line/pe-pipe-extrusion-line-feature.jpg';
import pePipeLineImage1 from './assets/products/pe-pipe-extrusion-line/pe-pipe-extrusion-line-production-line-1.jpg';
import pePipeLineImage2 from './assets/products/pe-pipe-extrusion-line/pe-pipe-extrusion-line-production-line-2.jpg';
import pePipeLineImage3 from './assets/products/pe-pipe-extrusion-line/pe-pipe-extrusion-line-production-line-3.jpg';
import pePipeLineImage4 from './assets/products/pe-pipe-extrusion-line/pe-pipe-extrusion-line-production-line-4.jpg';
import pePipeLineImage5 from './assets/products/pe-pipe-extrusion-line/pe-pipe-extrusion-line-production-line-5.jpg';
import pePipeLineImage6 from './assets/products/pe-pipe-extrusion-line/pe-pipe-extrusion-line-production-line-6.jpg';
import pePipeLineImage7 from './assets/products/pe-pipe-extrusion-line/pe-pipe-extrusion-line-production-line-7.jpg';
import pePipeLineImage8 from './assets/products/pe-pipe-extrusion-line/pe-pipe-extrusion-line-production-line-8.jpg';
import pvcPipeFeatureImage from './assets/products/pvc-pipe-extrusion-line/pvc-pipe-extrusion-line-feature.jpg';
import pvcPipeLineImage1 from './assets/products/pvc-pipe-extrusion-line/pvc-pipe-extrusion-line-production-line-1.jpg';
import pvcPipeLineImage2 from './assets/products/pvc-pipe-extrusion-line/pvc-pipe-extrusion-line-production-line-2.jpg';
import pvcPipeLineImage3 from './assets/products/pvc-pipe-extrusion-line/pvc-pipe-extrusion-line-production-line-3.jpg';
import pvcPipeLineImage4 from './assets/products/pvc-pipe-extrusion-line/pvc-pipe-extrusion-line-production-line-4.jpg';
import pvcPipeLineImage5 from './assets/products/pvc-pipe-extrusion-line/pvc-pipe-extrusion-line-production-line-5.jpg';
import pvcPipeLineImage6 from './assets/products/pvc-pipe-extrusion-line/pvc-pipe-extrusion-line-production-line-6.jpg';
import pvcOPipeFeatureImage from './assets/products/pvc-o-pipe-extrusion-line/pvc-o-pipe-extrusion-line-feature.jpg';
import pvcOPipeLineImage1 from './assets/products/pvc-o-pipe-extrusion-line/pvc-o-pipe-extrusion-line-production-line-1.jpg';
import pvcOPipeLineImage2 from './assets/products/pvc-o-pipe-extrusion-line/pvc-o-pipe-extrusion-line-production-line-2.jpg';
import pvcOPipeLineImage3 from './assets/products/pvc-o-pipe-extrusion-line/pvc-o-pipe-extrusion-line-production-line-3.jpg';
import pprPipeFeatureImage from './assets/products/ppr-pipe-extrusion-line/ppr-pipe-extrusion-line-feature.jpg';
import pprPipeLineImage1 from './assets/products/ppr-pipe-extrusion-line/ppr-pipe-extrusion-line-production-line-1.jpg';
import pprPipeLineImage2 from './assets/products/ppr-pipe-extrusion-line/ppr-pipe-extrusion-line-production-line-2.jpg';
import pprPipeLineImage3 from './assets/products/ppr-pipe-extrusion-line/ppr-pipe-extrusion-line-production-line-3.jpg';
import pprPipeLineImage4 from './assets/products/ppr-pipe-extrusion-line/ppr-pipe-extrusion-line-production-line-4.jpg';
import pprPipeLineImage5 from './assets/products/ppr-pipe-extrusion-line/ppr-pipe-extrusion-line-production-line-5.jpg';
import pprPipeLineImage6 from './assets/products/ppr-pipe-extrusion-line/ppr-pipe-extrusion-line-production-line-6.jpg';
import dwcPipeFeatureImage from './assets/products/double-wall-corrugated-pipe-extrusion-line/double-wall-corrugated-pipe-extrusion-line-feature.jpg';
import dwcPipeLineImage1 from './assets/products/double-wall-corrugated-pipe-extrusion-line/double-wall-corrugated-pipe-extrusion-line-production-line-1.jpg';
import dwcPipeLineImage2 from './assets/products/double-wall-corrugated-pipe-extrusion-line/double-wall-corrugated-pipe-extrusion-line-production-line-2.jpg';
import dwcPipeLineImage3 from './assets/products/double-wall-corrugated-pipe-extrusion-line/double-wall-corrugated-pipe-extrusion-line-production-line-3.jpg';
import dwcPipeLineImage4 from './assets/products/double-wall-corrugated-pipe-extrusion-line/double-wall-corrugated-pipe-extrusion-line-production-line-4.jpg';
import dwcPipeLineImage5 from './assets/products/double-wall-corrugated-pipe-extrusion-line/double-wall-corrugated-pipe-extrusion-line-production-line-5.jpg';
import dwcPipeLineImage6 from './assets/products/double-wall-corrugated-pipe-extrusion-line/double-wall-corrugated-pipe-extrusion-line-production-line-6.jpg';
import hollowPipeFeatureImage from './assets/products/pe-hollow-wall-winding-pipe-extrusion-line/pe-hollow-wall-winding-pipe-extrusion-line-feature.jpg';
import hollowPipeLineImage1 from './assets/products/pe-hollow-wall-winding-pipe-extrusion-line/pe-hollow-wall-winding-pipe-extrusion-line-production-line-1.jpg';
import hollowPipeLineImage2 from './assets/products/pe-hollow-wall-winding-pipe-extrusion-line/pe-hollow-wall-winding-pipe-extrusion-line-production-line-2.jpg';
import hollowPipeLineImage3 from './assets/products/pe-hollow-wall-winding-pipe-extrusion-line/pe-hollow-wall-winding-pipe-extrusion-line-production-line-3.jpg';
import hollowPipeLineImage4 from './assets/products/pe-hollow-wall-winding-pipe-extrusion-line/pe-hollow-wall-winding-pipe-extrusion-line-production-line-4.jpg';
import hollowPipeLineImage5 from './assets/products/pe-hollow-wall-winding-pipe-extrusion-line/pe-hollow-wall-winding-pipe-extrusion-line-production-line-5.jpg';
import pexAlPexFeatureImage from './assets/products/pex-al-pex-pipe-machine/pex-al-pex-pipe-machine-feature.jpg';
import pexAlPexLineImage1 from './assets/products/pex-al-pex-pipe-machine/pex-al-pex-pipe-machine-production-line-1.jpg';
import pexAlPexLineImage2 from './assets/products/pex-al-pex-pipe-machine/pex-al-pex-pipe-machine-production-line-2.jpg';
import pexAlPexLineImage3 from './assets/products/pex-al-pex-pipe-machine/pex-al-pex-pipe-machine-production-line-3.jpg';
import pexAlPexLineImage4 from './assets/products/pex-al-pex-pipe-machine/pex-al-pex-pipe-machine-production-line-4.jpg';
import pexAlPexLineImage5 from './assets/products/pex-al-pex-pipe-machine/pex-al-pex-pipe-machine-production-line-5.jpg';
import pexAlPexLineImage6 from './assets/products/pex-al-pex-pipe-machine/pex-al-pex-pipe-machine-production-line-6.jpg';
import rtpTcpFeatureImage from './assets/products/rtp-tcp-pipe-production-line/rtp-tcp-pipe-production-line-feature.jpg';
import rtpTcpLineImage1 from './assets/products/rtp-tcp-pipe-production-line/rtp-tcp-pipe-production-line-production-line-1.jpg';
import rtpTcpLineImage2 from './assets/products/rtp-tcp-pipe-production-line/rtp-tcp-pipe-production-line-production-line-2.jpg';
import rtpTcpLineImage3 from './assets/products/rtp-tcp-pipe-production-line/rtp-tcp-pipe-production-line-production-line-3.jpg';
import rtpTcpLineImage4 from './assets/products/rtp-tcp-pipe-production-line/rtp-tcp-pipe-production-line-production-line-4.jpg';
import autoPipeFeatureImage from './assets/products/automatic-pipe-drilling-slotting-machine/automatic-pipe-drilling-slotting-machine-feature.jpg';
import autoPipeLineImage1 from './assets/products/automatic-pipe-drilling-slotting-machine/automatic-pipe-drilling-slotting-machine-production-line-1.jpg';
import autoPipeLineImage2 from './assets/products/automatic-pipe-drilling-slotting-machine/automatic-pipe-drilling-slotting-machine-production-line-2.jpg';
import productPePipeImage from './assets/products/product-center/pe-pipe-extrusion-line.jpg';
import productPvcPipeImage from './assets/products/product-center/pvc-pipe-extrusion-line.jpg';
import productPvcOPipeImage from './assets/products/product-center/pvc-o-pipe-extrusion-line.jpg';
import productPprPipeImage from './assets/products/product-center/ppr-pipe-extrusion-line.jpg';
import productDwcPipeImage from './assets/products/product-center/double-wall-corrugated-pipe-extrusion-line.jpg';
import productPeWindingPipeImage from './assets/products/product-center/pe-hollow-wall-winding-pipe-extrusion-line.jpg';
import productPexAlPexPipeImage from './assets/products/product-center/pex-al-pex-pipe-machine.jpg';
import productRtpTcpPipeImage from './assets/products/product-center/rtp-tcp-pipe-production-line.jpg';
import productPipeDrillingImage from './assets/products/product-center/automatic-pipe-drilling-slotting-machine.jpg';
import history1996Image from './assets/about-history/xinrongplas-history-1996-company-founded.jpg';
import history2000Image from './assets/about-history/xinrongplas-history-2000-iso-9001-expansion.jpg';
import history2001Image from './assets/about-history/xinrongplas-history-2001-product-line-expansion.png';
import history2002Image from './assets/about-history/xinrongplas-history-2002-overseas-expansion-standards.jpg';
import history2003Image from './assets/about-history/xinrongplas-history-2003-corrugated-pipe-lines.jpg';
import history2006Image from './assets/about-history/xinrongplas-history-2006-steel-plastic-composite.png';
import history2008Image from './assets/about-history/xinrongplas-history-2008-steel-wire-reinforced.png';
import history2010Image from './assets/about-history/xinrongplas-history-2010-new-factory.png';
import history2011Image from './assets/about-history/xinrongplas-history-2011-screw-technology.jpg';
import history2012Image from './assets/about-history/xinrongplas-history-2012-belling-injection-machine.jpg';
import history2014Image from './assets/about-history/xinrongplas-history-2014-rtp-pipe-line.jpg';
import history2016Image from './assets/about-history/xinrongplas-history-2016-cnc-upgrade.jpg';
import history2018Image from './assets/about-history/xinrongplas-history-2018-rtp-winding-upgrade.png';
import history2021Image from './assets/about-history/xinrongplas-history-2021-pvc-o-pipe-line.png';
import certificateHighTechImage from './assets/certificate/xinrongplas-high-tech-enterprise-certificate.jpg';
import certificateIso9001Image from './assets/certificate/xinrongplas-iso9001-quality-management-certificate.png';
import certificateSgsImage from './assets/certificate/xinrongplas-sgs-certificate.jpg';
import certificateCeImage from './assets/certificate/xinrongplas-ce-certificate.jpg';
import certificatePatent01Image from './assets/certificate/xinrongplas-patent-certificate-01.jpg';
import certificatePatent02Image from './assets/certificate/xinrongplas-patent-certificate-02.jpg';
import certificatePatent03Image from './assets/certificate/xinrongplas-patent-certificate-03.jpg';
import certificatePatent04Image from './assets/certificate/xinrongplas-patent-certificate-04.jpg';
import certificatePatent05Image from './assets/certificate/xinrongplas-patent-certificate-05.jpg';
import certificatePatent06Image from './assets/certificate/xinrongplas-patent-certificate-06.jpg';
import certificatePatent07Image from './assets/certificate/xinrongplas-patent-certificate-07.jpg';
import certificatePatent08Image from './assets/certificate/xinrongplas-patent-certificate-08.jpg';
import certificatePatent09Image from './assets/certificate/xinrongplas-patent-certificate-09.jpg';
import certificatePatent10Image from './assets/certificate/xinrongplas-patent-certificate-10.jpg';
import certificatePatent11Image from './assets/certificate/xinrongplas-patent-certificate-11.jpg';
import certificatePatent12Image from './assets/certificate/xinrongplas-patent-certificate-12.jpg';
import certificatePatent13Image from './assets/certificate/xinrongplas-patent-certificate-13.jpg';
import certificatePatent14Image from './assets/certificate/xinrongplas-patent-certificate-14.jpg';
import certificatePatent15Image from './assets/certificate/xinrongplas-patent-certificate-15.jpg';
import './styles.css';

const navItems = [
  ['Products', '/products'],
  ['Services', '/services'],
  ['Video', '/video'],
  ['News', '/news'],
  ['Project Cases', '/project-cases'],
  ['About Us', '/about-us'],
  ['Certificate', '/certificate'],
  ['Contact', '/contact-us'],
];

const services = [
  {
    icon: Settings,
    title: 'Pre-sale Service',
    text: 'Consulting, machine customization, line design, and turnkey solution planning before investment.',
  },
  {
    icon: PackageCheck,
    title: 'Sale Service',
    text: 'Project progress updates, inspection, testing, export packing, and shipping coordination.',
  },
  {
    icon: Wrench,
    title: 'After-sale Service',
    text: 'Technical documents, on-site installation, operator training, spare parts, and lifelong service.',
  },
];

const products = [
  ['PE Pipe Extruder Machine', 'OD 16 to 2000mm'],
  ['PVC Pipe Extruder Machine', 'OD 16 to 1000mm'],
  ['PVC-O Pipe Extruder Machine', 'OD 110 to 630mm'],
  ['PPR Pipe Extruder Machine', 'OD 16 to 160mm'],
  ['DWC Pipe Machine', 'OD 63 to 1200mm'],
  ['PE Hollow Wall Winding', 'OD 200 to 3000mm'],
  ['PEX-AL-PEX Pipe Machine', 'OD 16 to 63mm'],
  ['RTP/TCP Production Line', 'OD 50 to 630mm'],
  ['Pipe Drilling/Slotting Machine', 'OD 50 to 630mm'],
];

const stats = [
  ['1996', 'Founded In'],
  ['200', 'Skilled Employees'],
  ['50+', 'Patents'],
  ['60,000m²', 'Workshop'],
];

const heroHighlights = [
  'Pipe extrusion line design',
  'Turnkey factory equipment',
  'Installation and spare parts',
];

const testimonials = [
  ['Turkey', 'The extrusion line runs stably and the installation support was very professional.'],
  ['Kazakhstan', 'Xinrong helped us adjust the project plan quickly and delivered reliable equipment.'],
  ['India', 'After-sales engineers responded fast, and spare parts support made production smoother.'],
];

const serviceAnchors = [
  ['Pre-sale', '#pre-sale', Settings],
  ['Manufacturing', '#sale', Factory],
  ['After-sale', '#after-sale', Wrench],
  ['Spare Parts', '#spare-parts', PackageCheck],
];

const preSaleServices = [
  ['Professional Engineer Consultation', 'Systematically trained sales engineers communicate technical requirements with support from the engineering department.', Settings],
  ['Site Visits & Consultation', 'Factory consulting is available locally and through overseas offices by appointment.', MapPin],
  ['Pickup Service Near Shanghai', 'Xinrongplas is located around 100km from Shanghai and can assist with route planning and visitor pickup.', Globe2],
  ['High Customization', 'Bespoke equipment modifications are evaluated together with risk, feasibility, and production efficiency.', Lightbulb],
  ['Turnkey Solutions', 'Complete factory layouts, auxiliary equipment lists, and ROI or feasibility analysis before investment.', Factory],
];

const saleServices = [
  ['Progress Updates', 'Regular production status reports with photos of your customized equipment.', Search],
  ['Factory Acceptance Testing', 'Factory testing with video documentation and sample verification options before delivery.', BadgeCheck],
  ['Compliance Packaging', 'Flexible packaging solutions for sea, land, and rail import regulations.', PackageCheck],
  ['Free Wearing Parts', 'A complimentary set of essential wearing parts is included for faster startup readiness.', ShieldCheck],
];

const afterSaleHighlights = [
  ['Full Technical Documentation', 'Layouts, electrical diagrams, and maintenance manuals are provided for every project.', CheckCircle2],
  ['Onsite Commissioning & Training', 'Engineers can be dispatched for installation, commissioning, and operator training.', Wrench],
  ['1-Year Standard Warranty', 'Warranty coverage for manufacturing defects starts from successful commissioning.', ShieldCheck],
];

const supportMatrix = [
  ['Remote Diagnostics', 'Direct equipment guidance through networked computer support to resolve faults efficiently.', '< 2 Hours'],
  ['Lifelong Support', 'Online guidance for operation, repair, and proactive technical upgrade notifications.', 'Ongoing'],
  ['Machine ID Database', 'Every machine has a unique ID for precise spare parts matching, even after 10+ years.', 'Instant'],
  ['Onsite Support', 'Direct engineer dispatch if remote diagnostics cannot resolve the issue.', 'Priority'],
];

const sparePartStats = [
  ['100%', 'ID Database Tracked'],
  ['24h', 'Dispatch Readiness'],
  ['10yr+', 'Legacy Part Support'],
  ['$0', 'Exchange Courier Fee'],
];

const videoResources = [
  {
    category: 'Technical Demo',
    title: 'PE Pipe Extrusion Line in Operation',
    duration: '04:25',
    image: pePipeFeatureImage,
    href: '/pro/pe-pipe-extrusion-line',
  },
  {
    category: 'Technical Demo',
    title: 'PVC Pipe Manufacturing Process',
    duration: '03:58',
    image: pvcPipeFeatureImage,
    href: '/pro/pvc-pipe-extrusion-line',
  },
  {
    category: 'Corporate',
    title: '60,000sqm Factory Tour',
    duration: '05:12',
    image: factoryImage,
    href: '/about-us',
  },
  {
    category: 'Technical Demo',
    title: 'Automatic Pipe Slotting Machine',
    duration: '02:44',
    image: autoPipeFeatureImage,
    href: '/pro/automatic-pipe-drilling-slotting-machine',
  },
  {
    category: 'Project Case',
    title: 'Turkey Project Customer Feedback',
    duration: '04:06',
    image: turkeyCaseImage,
    href: '/project-cases',
  },
  {
    category: 'Innovation',
    title: 'RTP/TCP Production Line Showcase',
    duration: '03:36',
    image: rtpTcpFeatureImage,
    href: '/pro/rtp-tcp-pipe-production-line',
  },
];

const newsPosts = [
  {
    category: 'Technical',
    date: 'June 12, 2024',
    title: 'The Future of PVC-O: MRS 500 Grade Extrusion Breakthrough',
    excerpt: 'After years of R&D, Xinrongplas advances PVC-O pipe line technology for high-pressure applications and efficient material usage.',
    image: pvcOPipeFeatureImage,
  },
  {
    category: 'Company',
    date: 'May 28, 2024',
    title: '2024 Global Sales Training: Enhancing Customer Service Standards',
    excerpt: 'Xinrongplas strengthens technical communication, project consulting, and overseas service coordination for international customers.',
    image: factoryImage,
  },
  {
    category: 'Innovation',
    date: 'May 15, 2024',
    title: 'Sustainable Manufacturing: Multi-layer Recycled Materials in PE Pipes',
    excerpt: 'Multi-layer extrusion technology helps customers balance performance, cost control, and circular material strategies.',
    image: pePipeFeatureImage,
  },
  {
    category: 'Events',
    date: 'April 10, 2024',
    title: 'Upcoming Exhibition: Chinaplas 2024 in Shanghai',
    excerpt: 'Meet the Xinrongplas team and explore updated pipe extrusion systems, service plans, and turnkey project capabilities.',
    image: productsImage,
  },
  {
    category: 'Case Study',
    date: 'March 22, 2024',
    title: 'Installation Complete: Turnkey PE Pipe Line Project in Southeast Asia',
    excerpt: 'The project team completed installation and commissioning for a customer focused on stable long-term pipe production.',
    image: cambodiaCaseImage,
  },
  {
    category: 'Technical',
    date: 'February 15, 2024',
    title: 'Energy Efficiency Report: Permanent Magnet Motors Saving 20% Power',
    excerpt: 'Energy-saving drive systems are becoming a key selection point for high-output plastic pipe extrusion projects.',
    image: rtpTcpFeatureImage,
  },
  {
    category: 'Factory',
    date: 'January 30, 2024',
    title: 'New CNC Machining Center Operational for Enhanced Precision',
    excerpt: 'Additional CNC capability improves component precision and supports stable quality control across extrusion line manufacturing.',
    image: history2016Image,
  },
];

const certificateItems = [
  {
    title: 'High-tech Enterprise',
    category: 'Enterprise Qualification',
    image: certificateHighTechImage,
    alt: 'Xinrongplas High-tech Enterprise certificate for plastic extrusion machinery manufacturer',
    landscape: true,
  },
  {
    title: 'ISO9001',
    category: 'Quality System',
    image: certificateIso9001Image,
    alt: 'Xinrongplas ISO9001 quality management system certificate',
  },
  {
    title: 'SGS',
    category: 'Third-party Verification',
    image: certificateSgsImage,
    alt: 'Xinrongplas SGS certificate for industrial machinery quality verification',
  },
  {
    title: 'CE',
    category: 'International Compliance',
    image: certificateCeImage,
    alt: 'Xinrongplas CE certificate for plastic pipe extrusion machinery',
  },
  ...[
    certificatePatent01Image,
    certificatePatent02Image,
    certificatePatent03Image,
    certificatePatent04Image,
    certificatePatent05Image,
    certificatePatent06Image,
    certificatePatent07Image,
    certificatePatent08Image,
    certificatePatent09Image,
    certificatePatent10Image,
    certificatePatent11Image,
    certificatePatent12Image,
    certificatePatent13Image,
    certificatePatent14Image,
    certificatePatent15Image,
  ].map((image, index) => ({
    title: `Patent ${String(index + 1).padStart(2, '0')}`,
    category: 'Patent',
    image,
    alt: `Xinrongplas patent certificate ${index + 1} for plastic pipe extrusion machinery technology`,
  })),
];

const faqs = [
  ['Are you a manufacturer or trade company?', 'We present Xinrong as a direct machinery manufacturer with workshop, engineering team, and export service support.'],
  ['What are the payment terms?', 'Typical machinery projects use staged payments based on contract, production progress, and delivery milestones.'],
  ['How long is production time?', 'Lead time depends on machine model, pipe diameter, customization level, and current factory schedule.'],
  ['How do you control quality?', 'Each production line is assembled, inspected, and tested before export packing and shipment.'],
  ['Do you provide after-sale service?', 'Yes. Technical documents, installation guidance, training, spare parts, and lifelong service are included.'],
];

const contactDetails = [
  ['WhatsApp', '+86 13115119251', MessageCircle],
  ['Email', 'marketing1@xinrongpm.com', Mail],
  ['Phone', '+86 13115119251', Phone],
  ['Address', 'Zhangjiagang City, Jiangsu Province, China', MapPin],
];

const bannerSlides = [
  ['PVC Pipe Extrusion Line', '/pro/pvc-pipe-extrusion-line'],
  ['PVC-O Pipe Extrusion Line', '/pro/pvc-o-pipe-extrusion-line'],
  ['PE Pipe Extrusion Line', '/pro/pe-pipe-extrusion-line'],
];

const homeProducts = [
  ['PE Pipe Extruder Machine', 'Ø16 ~ Ø2000 mm', '/pro/pe-pipe-extrusion-line'],
  ['PVC Pipe Extruder Machine', 'Ø16 ~ Ø1000 mm', '/pro/pvc-pipe-extrusion-line'],
  ['PVC-O Pipe Extruder Machine', 'Ø110 ~ Ø630 mm, PN5~PN25', '/pro/pvc-o-pipe-extrusion-line'],
  ['PPR Pipe Extruder Machine', 'Ø16 ~ Ø160 mm', '/pro/ppr-pipe-extrusion-line'],
  ['DWC Pipe Machine', 'Ø63 ~ Ø1200 mm', '/pro/double-wall-corrugated-pipe-extrusion-line'],
  ['PE Hollow Wall Winding', 'Ø200 ~ Ø3000 mm', '/pro/pe-hollow-wall-winding-pipe-extrusion-line'],
  ['PEX-AL-PEX Pipe Machine', 'Ø16 ~ Ø63 mm', '/pro/pex-al-pex-pipe-machine'],
  ['RTP/TCP Production Line', 'Ø50 ~ Ø630 mm', '/pro/rtp-tcp-pipe-production-line'],
  ['Pipe Drilling/Slotting Machine', 'Ø50 ~ Ø630 mm', '/pro/automatic-pipe-drilling-slotting-machine'],
];

const productCenterProducts = [
  {
    title: 'PE Pipe Extrusion Line',
    description: 'Advanced production technology for high-density polyethylene pipes used in water supply and gas transport.',
    specification: 'Ø16 ~ Ø2000 mm',
    href: '/pro/pe-pipe-extrusion-line',
    image: productPePipeImage,
    alt: 'PE Pipe Extrusion Line product image from Xinrongplas product list',
  },
  {
    title: 'PVC Pipe Extrusion Line',
    description: 'High-efficiency extrusion for rigid and flexible PVC pipes, including drainage, conduit, and pressure applications.',
    specification: 'Ø16 ~ Ø1000 mm',
    href: '/pro/pvc-pipe-extrusion-line',
    image: productPvcPipeImage,
    alt: 'PVC Pipe Extrusion Line product image from Xinrongplas product list',
  },
  {
    title: 'PVC-O Pipe Extrusion Line',
    description: 'Molecularly oriented PVC technology for pipes with superior strength, impact resistance, and durability.',
    specification: 'Ø110 ~ Ø630 mm, PN5~25',
    href: '/pro/pvc-o-pipe-extrusion-line',
    image: productPvcOPipeImage,
    alt: 'PVC-O Pipe Extrusion Line product image from Xinrongplas product list',
  },
  {
    title: 'PPR Pipe Extrusion Line',
    description: 'Precision extrusion for polypropylene random copolymer pipes, ideal for hot and cold water systems.',
    specification: 'Ø16 ~ Ø160 mm',
    href: '/pro/ppr-pipe-extrusion-line',
    image: productPprPipeImage,
    alt: 'PPR Pipe Extrusion Line product image from Xinrongplas product list',
  },
  {
    title: 'Double Wall Corrugated Pipe Extrusion Line',
    description: 'DWC pipe production systems for sewage, drainage, and cable protection with high structural stability.',
    specification: 'Ø63 ~ Ø1200 mm',
    href: '/pro/double-wall-corrugated-pipe-extrusion-line',
    image: productDwcPipeImage,
    alt: 'Double Wall Corrugated Pipe Extrusion Line product image from Xinrongplas product list',
  },
  {
    title: 'PE Hollow Wall Winding Pipe Extrusion Line',
    description: 'Large diameter winding pipe solutions for municipal drainage and sewage infrastructure.',
    specification: 'Ø200 ~ Ø3000 mm',
    href: '/pro/pe-hollow-wall-winding-pipe-extrusion-line',
    image: productPeWindingPipeImage,
    alt: 'PE Hollow Wall Winding Pipe Extrusion Line product image from Xinrongplas product list',
  },
  {
    title: 'PEX-AL-PEX Pipe Machine',
    description: 'High-speed production line for multi-layer aluminum-plastic composite pipes for plumbing and heating.',
    specification: 'Ø16 ~ Ø63 mm',
    href: '/pro/pex-al-pex-pipe-machine',
    image: productPexAlPexPipeImage,
    alt: 'PEX-AL-PEX Pipe Machine product image from Xinrongplas product list',
  },
  {
    title: 'RTP/TCP Pipe Production Line',
    description: 'Reinforced thermoplastic pipe solutions for high-pressure oil, gas, and water transportation.',
    specification: 'Ø50 ~ Ø630 mm',
    href: '/pro/rtp-tcp-pipe-production-line',
    image: productRtpTcpPipeImage,
    alt: 'RTP TCP Pipe Production Line product image from Xinrongplas product list',
  },
  {
    title: 'Automatic Pipe Drilling/Slotting Machine',
    description: 'Automated post-processing machinery for precision drilling and slotting of drainage and irrigation pipes.',
    specification: 'Ø50 ~ Ø630 mm',
    href: '/pro/automatic-pipe-drilling-slotting-machine',
    image: productPipeDrillingImage,
    alt: 'Automatic Pipe Drilling Slotting Machine product image from Xinrongplas product list',
  },
];

const servicePhases = [
  [
    'Pre-sale Service',
    'Experienced sales engineers provide consulting, customized machine planning, on-site guidance, turnkey equipment lists, utilities requirements, and ROI support.',
    Settings,
  ],
  [
    'Sale Service',
    'Project photos, progress updates, inspection scheduling, third-party testing support, export packing, and free wearing spare parts for stable operation.',
    PackageCheck,
  ],
  [
    'After-sale Service',
    'Technical documents, layout drawings, electrical diagrams, installation, commissioning, training, remote diagnosis, lifelong service, and traceable spare parts.',
    Wrench,
  ],
];

const customerVoices = [
  ['Turkey', 'Satisfied with the equipment and confident to expand the market with high-quality products.'],
  ['Cambodia', 'The machine met expectations after long-term use, and after-sales service exceeded expectations.'],
  ['Kazakhstan', 'After visiting several companies, Xinrong was selected. The line still runs well after more than two years.'],
  ['Tajikistan', 'Multiple PE pipe lines were purchased with stable operation, followed by another DWC extrusion line order.'],
  ['Georgia', 'The customer is satisfied with the equipment, service, and Xinrong team.'],
  ['Uzbekistan', 'The line keeps running stably and the customer expects long-term cooperation.'],
  ['India', 'Timely service response, support within 12 hours, and continuous running for 20 days without failure.'],
];

const homeFaqs = [
  ['Are we manufacturer or trade company?', 'We started innovation and manufacturing of plastic pipe extrusion machine in 1996.'],
  ['What kind machines we produce?', 'We produce plastic extrusion line, mainly plastic pipe extrusion line.'],
  ['What kind payment we accept?', 'Payment term like T/T, L/C.'],
  ['How long we need to produce the machines?', 'According to different machine model and configuration, we need different time, from 45 days to 90 days.'],
  ['Will the machine be delivered on time?', 'Yes, before machine production, we will prepare production plan. And every department will follow the plan exactly, from initial design and procurement, through to final installation and testing.'],
  ['How about the machine quality?', 'You can trust our machine quality all the time. All purchased parts will be inspected before entering in our warehouse. During manufacturing, processing and assembling, each step will be strictly checked by our QC department. Finally, every machinery will be checked and tested before delivery, to ensure every machinery delivered to customers will be in good quality and will work stably.'],
  ['How about the price?', 'Good products can never be very cheap. But we will provide you good machinery in good and reasonable price. Please consult with our sales engineers, and we will provide you quotation with good price.'],
  ['How long is your machine’s guarantee time?', 'Normally one year.'],
  ['What can you provide for after sale service?', 'When machine comes to your factory, our engineers will come for installation, commissioning and training. Also, 24h online service is available.'],
];

const projectCases = [
  {
    country: 'Romania',
    customer: 'Mr. Eusebiu',
    equipment: 'Total 3 lines - PE20-630mm three-layer pipe extrusion line',
    feedback: 'The customer inspected the factory before ordering and found the team professional. All three production lines are running well, with responsive sales and engineering support.',
    image: romaniaCaseImage,
    imageAlt: 'Romania PE20-630mm three-layer pipe extrusion line project case by Xinrong',
  },
  {
    country: 'Turkey',
    customer: 'Mr. Kazim',
    equipment: 'More than 20 production lines since 2017, including PE solid wall pipe up to 1200mm',
    feedback: 'The customer has repeatedly purchased equipment from Xinrong from 2016 to 2024 and praised the attentive service and reliable equipment quality.',
    image: turkeyCaseImage,
    imageAlt: 'Turkey PE pipe extrusion lines up to 1200mm project case by Xinrong',
  },
  {
    country: 'Hungary',
    customer: 'Mr. Csaba',
    equipment: 'High-configuration PE20-110 high-speed pipe production line',
    feedback: 'The order, installation, and debugging process went smoothly, with appreciation for Xinrong engineers and staff.',
    image: hungaryCaseImage,
    imageAlt: 'Hungary PE20-110 high-speed pipe production line project case by Xinrong',
  },
  {
    country: 'Cambodia',
    customer: 'Soknov',
    equipment: 'PE630 Pipe Extrusion Line',
    feedback: 'After long-term operation, the machine met expectations and after-sales service exceeded expectations.',
    image: cambodiaCaseImage,
    imageAlt: 'Cambodia PE630 pipe extrusion line project case by Xinrong',
  },
  {
    country: 'Nigeria',
    customer: 'Mr. Pawan',
    equipment: 'PE1200 pipe production line',
    feedback: 'The customer inspected the factory before ordering, then chose Xinrong for professional engineering response and smooth equipment operation.',
    image: nigeriaCaseImage,
    imageAlt: 'Nigeria PE1200 pipe production line project case by Xinrong',
  },
  {
    country: 'Tajikistan',
    customer: 'Faruh',
    equipment: 'PE63, PE250, PE630 pipe extrusion lines and PE400 double wall corrugated pipe extrusion line',
    feedback: 'Several PE pipe extrusion lines ran without problems, leading the customer to choose Xinrong again for a double wall corrugated pipe line.',
    image: tajikistanCaseImage,
    imageAlt: 'Tajikistan PE pipe and DWC pipe extrusion lines project case by Xinrong',
  },
  {
    country: 'Senegal',
    customer: 'Mr. Kagny',
    equipment: '3 lines - PE180-315 two-layer pipe production line',
    feedback: 'The customer thanked Xinrong sales and engineers, highlighting the production line quality and project execution.',
    image: senegalCaseImage,
    imageAlt: 'Senegal PE180-315 two-layer pipe production line project case by Xinrong',
  },
  {
    country: 'Georgia',
    customer: 'Ilo',
    equipment: 'PE450 pipe extrusion line, PE200 DWC pipe line, PE800 DWC pipe line',
    feedback: 'The customer was satisfied with Xinrong machinery, service, and team support.',
    image: georgiaCaseImage,
    imageAlt: 'Georgia PE and double wall corrugated pipe extrusion lines project case by Xinrong',
  },
  {
    country: 'Uzbekistan',
    customer: 'Izom Sadiev',
    equipment: 'PPR63, PVC110, PE250, and PE1200 pipe extrusion lines',
    feedback: 'The customer expressed satisfaction with Xinrong machinery, service, and people after project delivery.',
    image: uzbekistanCaseImage,
    imageAlt: 'Uzbekistan PPR PVC and PE pipe extrusion lines project case by Xinrong',
  },
  {
    country: 'Kazakhstan',
    customer: 'Darkhan',
    equipment: 'PPR63 double-layer pipe extruder line and PE250 pipe extrusion line',
    feedback: 'After checking many companies, the customer chose Xinrong. More than two years later, the machine remained in good condition.',
    image: kazakhstanCaseImage,
    imageAlt: 'Kazakhstan PPR63 and PE250 pipe extrusion lines project case by Xinrong',
  },
  {
    country: 'India',
    customer: 'Parveen',
    equipment: 'PE315 pipe extrusion line and PE600 double wall corrugated pipe extrusion line',
    feedback: 'The customer reported timely service, response within 12 hours, and machinery running continuously for 20 days without stopping.',
    image: indiaCaseImage,
    imageAlt: 'India PE315 and PE600 double wall corrugated pipe extrusion lines project case by Xinrong',
  },
  {
    country: 'Dubai',
    customer: 'Mohamed',
    equipment: 'PE710 pipe extrusion line and PE2000 steel belt reinforced corrugated pipe extrusion line',
    feedback: 'The project includes large-diameter pipe extrusion equipment for the Dubai market.',
    image: dubaiCaseImage,
    imageAlt: 'Dubai PE710 and PE2000 steel belt reinforced corrugated pipe extrusion line project case by Xinrong',
  },
];

const aboutStats = [
  ['1996', 'Company Established'],
  ['200+', 'Experienced Staff'],
  ['50+', 'Patents'],
  ['60,000㎡', 'Workshop Area'],
];

const aboutStrengths = [
  {
    title: 'Engineers',
    text: '6 mechanical engineers support innovation and development, working with 4 electrical and program engineers to keep the whole system stable and efficient.',
  },
  {
    title: 'After Sale Engineers',
    text: 'More than 12 after-sale engineers receive systematic learning and training. Engineers can reach customer workshops within 72 hours worldwide.',
  },
  {
    title: 'Precision Machining Machinery',
    text: 'Xinrong manufactures machine units in-house to control quality strictly, supported by its own tooling and CNC workshop.',
  },
];

const aboutCulture = [
  ['People Oriented', 'Xinrong focuses on both customer satisfaction and company members, sharing growth and progress with customers and employees.'],
  ['Innovation and Development', 'Professional mechanical and electrical engineers continuously research new technologies, supported by encouragement and reward systems.'],
  ['Quality Control', 'Procurement, machine manufacturing, and testing are fully supervised, with continuous feedback for equipment improvement and upgrades.'],
  ['Teamwork and Communication', 'The company encourages open discussion, creative ideas, smooth communication, and stronger teamwork.'],
];

const aboutHistory = [
  {
    year: '1996',
    title: 'Company Founded',
    text: 'Started in a rented workshop, producing PEX-Al-PEX composite pipe lines and small PE/PPR pipe extrusion lines. Annual sales exceeded $10M from 1996 to 1998.',
    image: history1996Image,
  },
  {
    year: '2000',
    title: 'ISO 9001 & Capacity Expansion',
    text: 'Moved into an owned factory, obtained ISO 9001 certification, and developed large-diameter PE pipe extrusion lines up to 450mm.',
    image: history2000Image,
  },
  {
    year: '2001',
    title: 'Product Line Expansion',
    text: 'Added PVC pipe extrusion lines and independently developed PVC pipe belling machines.',
    image: history2001Image,
  },
  {
    year: '2002',
    title: 'Overseas Expansion & Standards',
    text: 'Established the foreign trade department, developed the first hollow wall winding pipe extrusion line in China, and participated in drafting GB/T 19472.2-2004.',
    image: history2002Image,
  },
  {
    year: '2003',
    title: 'Corrugated Pipe Lines',
    text: 'Released PE double wall corrugated pipe extrusion lines with mold designs for SN4 and SN8 ring stiffness at optimized meter weight.',
    image: history2003Image,
  },
  {
    year: '2006',
    title: 'Steel-Plastic Composite Innovation',
    text: 'Developed PE steel belt reinforced corrugated pipe extrusion lines, opening a new direction for plastic and steel composite pipes.',
    image: history2006Image,
  },
  {
    year: '2008',
    title: 'Steel Wire Reinforced Lines',
    text: 'Launched PE steel wire reinforced pipe extrusion lines, extending composite pipe applications into water and gas supply.',
    image: history2008Image,
  },
  {
    year: '2010',
    title: 'New Factory Completed',
    text: 'Moved into a newly built 50,000m² factory while equipment specifications and quality continued to improve.',
    image: history2010Image,
  },
  {
    year: '2011',
    title: 'Single Screw Technology Breakthrough',
    text: 'Released a new single screw and barrel design, raising L/D from 33:1 to 38:1, increasing capacity by 30% and reducing energy use by 20%.',
    image: history2011Image,
  },
  {
    year: '2012',
    title: 'Belling Injection Machine',
    text: 'Introduced a machine that directly injection-molds sockets on pipes, reducing labor and improving connection quality.',
    image: history2012Image,
  },
  {
    year: '2014',
    title: 'High-Pressure RTP Equipment',
    text: 'Developed RTP pipe extrusion lines for oil, natural gas, and other high-pressure fluid transport, with pressure resistance up to 200 bar.',
    image: history2014Image,
  },
  {
    year: '2016',
    title: 'Manufacturing Equipment Upgrade',
    text: 'Introduced a new generation of CNC machining equipment to improve precision, capacity, automation, and overall machine quality.',
    image: history2016Image,
  },
  {
    year: '2018',
    title: 'RTP Winding Machine Upgrade',
    text: 'Upgraded RTP winding machines for faster, more stable operation and support for steel wire, glass fiber, aramid, carbon fiber, basalt, and other UD tapes.',
    image: history2018Image,
  },
  {
    year: '2021',
    title: 'PVC-O Pipe Line Success',
    text: 'After 8 years of R&D and testing, launched mature PVC-O pipe extrusion lines for 90-630mm pipe with MRS 500 grade.',
    image: history2021Image,
  },
];

const pePipeGallery = [
  {
    image: pePipeFeatureImage,
    alt: 'PE Pipe Extrusion Line complete production equipment by Xinrong',
  },
  {
    image: pePipeLineImage1,
    alt: 'PE pipe extrusion line machine section and control system',
  },
  {
    image: pePipeLineImage2,
    alt: 'PE pipe extrusion production line for water and gas supply pipes',
  },
  {
    image: pePipeLineImage3,
    alt: 'PE pipe extruder and downstream equipment in factory workshop',
  },
  {
    image: pePipeLineImage4,
    alt: 'PE pipe extrusion line vacuum tank and forming equipment',
  },
  {
    image: pePipeLineImage5,
    alt: 'PE pipe extrusion line haul off and cutting equipment',
  },
  {
    image: pePipeLineImage6,
    alt: 'Large diameter PE pipe extrusion machine production line',
  },
  {
    image: pePipeLineImage7,
    alt: 'Xinrong PE pipe extrusion line equipment detail',
  },
  {
    image: pePipeLineImage8,
    alt: 'Industrial PE pipe extrusion line for plastic pipe manufacturing',
  },
];

const pePipeHighlights = [
  ['Ø16-Ø2000mm', 'PE pipe size range'],
  ['PP / PPR / PERT / PB / PEX-B', 'PO material compatibility'],
  ['Single or multi-layer', 'Flexible line configuration'],
  ['Turnkey auxiliary', 'Mixer, shredder, crusher options'],
];

const pePipeApplications = [
  'Water supply',
  'Gas supply',
  'Water drainage',
  'Liquid transportation',
  'Electric conduit',
];

const pePipeFeatures = [
  'Whole extrusion line adopts touch screen and PLC control, linked to achieve high degree of automation.',
  'Screw with L/D ratio 38:1 or 40:1, can realize high output extrusion with low melt temperature and low power consumption.',
  'Die head with core cooling, also with air cooling inside pipe, to have good pipe forming.',
  'Vacuum tank can be equipped with automatic vacuum degree control system, to realize automatic water level and vacuum degree control, also reduce power consumption in long run.',
  'Gravimetric dosing system is for choice, it can make operation easier, control pipe wall thickness and meter weight accurately, also can show the power consumption per unit weight for the pipe.',
  'High versatility: By changing some parts, extrusion line can also produce other PO pipes (PP, PPR, PERT, etc.) and support single/multi-layer configurations.',
];

const pePipeParameters = [
  ['PE63', '16 - 63', '150 - 300', '45 - 75'],
  ['PE110', '20 - 110', '220 - 360', '55 - 90'],
  ['PE160', '50 - 160', '300 - 440', '75 - 110'],
  ['PE250', '75 - 250', '360 - 500', '90 - 132'],
  ['PE315', '90 - 315', '440 - 640', '110 - 160'],
  ['PE450', '110 - 450', '500 - 800', '132 - 200'],
  ['PE630', '250 - 630', '640 - 1000', '160 - 250'],
  ['PE800', '315 - 800', '800 - 1200', '200 - 355'],
  ['PE1000', '400 - 1000', '1000 - 1500', '250 - 355'],
  ['PE1200', '500 - 1200', '1200 - 1800', '355 - (250x2)'],
  ['PE1600', '710 - 1600', '1800 - 2400', '(250x2) - (355x2)'],
  ['PE2000', '800 - 2000', '2400 - 3000', '(355x2) - (400x2)'],
];

const peTechnicalSpecs = [
  ['Pipe Diameter', '16mm - 1600mm (Variable by configuration)'],
  ['Extruder Series', 'High-efficiency SJ series (L/D 33:1 or 38:1)'],
  ['Control System', 'Siemens S7-1200/1500 PLC with HMI Touch Interface'],
  ['Main Motor', 'Siemens/ABB with Permanent Magnet Energy Saving technology'],
  ['Compatible Materials', 'PE100, PE80, HDPE, Recycled PE Flakes'],
];

const peComponentCards = [
  {
    title: 'Single-screw Extruder',
    text: 'High-torque gearboxes and optimized screw geometry for stable output.',
    image: pePipeLineImage3,
  },
  {
    title: 'Vacuum Tank',
    text: 'Multi-stage vacuum calibration and cooling for high-speed pipe sizing.',
    image: pePipeLineImage4,
  },
  {
    title: 'Haul-off Unit',
    text: 'Frequency-controlled caterpillars for constant tension and smooth traction.',
    image: pePipeLineImage5,
  },
  {
    title: 'Planetary Cutter',
    text: 'Swarf-free cutting technology for a clean, professional finish on large pipes.',
    image: pePipeLineImage6,
  },
];

const pvcPipeGallery = [
  {
    image: pvcPipeFeatureImage,
    alt: 'PVC Pipe Extrusion Line complete production equipment by Xinrong',
  },
  {
    image: pvcPipeLineImage1,
    alt: 'PVC pipe extrusion line production equipment detail',
  },
  {
    image: pvcPipeLineImage2,
    alt: 'PVC pipe extrusion machine line for water supply and drainage pipes',
  },
  {
    image: pvcPipeLineImage3,
    alt: 'PVC pipe making machine extruder and downstream equipment',
  },
  {
    image: pvcPipeLineImage4,
    alt: 'PVC pipe extrusion line vacuum tank and calibration equipment',
  },
  {
    image: pvcPipeLineImage5,
    alt: 'PVC pipe extrusion line haul off and cutting machine',
  },
  {
    image: pvcPipeLineImage6,
    alt: 'Industrial PVC pipe extrusion line for plastic pipe manufacturing',
  },
];

const pvcPipeOverview = [
  'Our PVC pipe extrusion machine can produce PVC pipe size range from Ø16 to Ø1000mm.',
  'PVC pipes can be used for water supply, water drainage, liquid transportation, electric conduit, etc.',
  'We have different kinds of PVC pipe making machine to produce different kinds of PVC pipes: UPVC pipe, CPVC pipe, PVC-O pipe, PVC-M pipe, etc.',
  'We can provide different PVC pipe extrusion lines: normal or high speed, single or multi-layer, single or double strand.',
  'In addition, we can provide turnkey solution with auxiliary machinery such as mixer, shredder, crusher and pulverizer, etc.',
];

const pvcPipeFeatures = [
  'Conical twin screw and parallel twin screw (28:1, 36:1) extruders are for choice.',
  'Vacuum tank can be equipped with automatic vacuum degree control system, to realize automatic water level and vacuum degree control, also reduce power consumption in long run.',
  'Swarfless knife cutter and planetary saw cutter are for choice, both cutters are with chamfering function.',
  'Weightless feeding system is for choice, it can make operation easier, control pipe wall thickness and meter weight accurately, also can show the power consumption per unit weight for the pipe.',
  'By changing some parts, extrusion line can also produce CPVC pipe, PVC-O pipe, PVC-M pipe, etc.',
  'By changing some parts, extrusion line can produce single layer or multi-layer, single strand and double strand pipe.',
];

const pvcPipeParameters = [
  ['PVC32SS*', '(Ø16 - 32) × 4', '180 - 250', '22 - 37'],
  ['PVC63', 'Ø16 - 63', '180 - 250', '22 - 37'],
  ['PVC63S*', '(Ø16 - 63) × 2', '250 - 450', '37 - 55'],
  ['PVC110', 'Ø20 - 110', '250 - 450', '37 - 55'],
  ['PVC160', 'Ø50 - 160', '250 - 450', '37 - 55'],
  ['PVC250', 'Ø75 - 250', '450 - 750', '55 - 75'],
  ['PVC450', 'Ø110 - 450', '450 - 1000', '55 - 110'],
  ['PVC630', 'Ø250 - 630', '800 - 1200', '110 - 132'],
  ['PVC800', 'Ø315 - 800', '1200 - 1300', '132 - 160'],
  ['PVC1000', 'Ø400 - 1000', '1300', '160'],
];

const pePipeFeatureCards = [
  ['High Automation', pePipeFeatures[0], Settings],
  ['Energy Efficiency', pePipeFeatures[1], Lightbulb],
  ['Optimal Cooling', pePipeFeatures[2], ShieldCheck],
  ['Intelligent Vacuum Control', pePipeFeatures[3], Settings],
  ['Precision Management', pePipeFeatures[4], BadgeCheck],
  ['Versatile Production', pePipeFeatures[5], Layers],
];

const pvcPipeFeatureCards = [
  ['Extruder Options', pvcPipeFeatures[0], Settings],
  ['Intelligent Vacuum Control', pvcPipeFeatures[1], ShieldCheck],
  ['Cutting Options', pvcPipeFeatures[2], Wrench],
  ['Weightless Feeding', pvcPipeFeatures[3], BadgeCheck],
  ['PVC Material Versatility', pvcPipeFeatures[4], Layers],
  ['Flexible Line Configuration', pvcPipeFeatures[5], PackageCheck],
];

const pvcComponentCards = [
  {
    title: 'Conical Twin-screw Extruder',
    image: pvcPipeLineImage2,
  },
  {
    title: 'Vacuum Calibration Tank',
    image: pvcPipeLineImage3,
  },
  {
    title: 'Haul-off Unit',
    image: pvcPipeLineImage5,
  },
  {
    title: 'Planetary Cutter',
    image: pvcPipeLineImage6,
  },
];

const makeGallery = (title, images) => images.map((image, index) => ({
  image,
  alt: index === 0 ? `${title} complete production equipment by Xinrong` : `${title} production line detail ${index}`,
}));

const makeFeatureCards = (features) => {
  const icons = [Settings, ShieldCheck, Wrench, BadgeCheck, Layers, PackageCheck, Factory, Lightbulb];
  return features.map((feature, index) => [`Feature ${index + 1}`, feature, icons[index % icons.length]]);
};

const genericSpecHeaders = ['Product', 'Pipe Range / Size', 'Application', 'Configuration'];

const extraProductConfigs = {
  'pvc-o-pipe-extrusion-line': {
    title: 'PVC-O Pipe Extrusion Line',
    description: 'Our PVC-O pipe extrusion machine can produce PVC-O pipe size range from Ø90 to Ø630mm for PN5 to 25, and Material Class 315 to 500.',
    size: 'Ø90 - Ø630mm',
    gallery: makeGallery('PVC-O Pipe Extrusion Line', [pvcOPipeFeatureImage, pvcOPipeLineImage1, pvcOPipeLineImage2, pvcOPipeLineImage3]),
    featureCards: makeFeatureCards([
      'This is another equipment independently developed by our company for 8 years.',
      'Real-time feedback of important data on pipe production which makes it easy to adjust pipe production process.',
      'With complete process storage function to facilitate future pipe production.',
      'The entire line is highly automated, and the wall thickness is automatically adjusted through gravimetric dosing system and PLC to reduce material waste.',
      'Equipped with a remote diagnosis system, when problems occur, we will provide customers with quick guidance and troubleshooting services based on the equipment operating parameters.',
    ]),
    videoEmbed: 'https://www.youtube.com/embed/YWr8hySZqqw',
    parameterHeaders: genericSpecHeaders,
    parameterRows: [['PVC-O Pipe Line', 'Ø90 - Ø630mm', 'Water supply, mining, gas supply', 'PN5 - PN25 / Material Class 315 - 500']],
    components: [
      { title: 'PVC-O Forming Section', image: pvcOPipeLineImage1 },
      { title: 'Extrusion System', image: pvcOPipeFeatureImage },
      { title: 'Control and Feedback System', image: pvcOPipeLineImage2 },
      { title: 'Turnkey Auxiliary Solution', image: pvcOPipeLineImage3 },
    ],
  },
  'ppr-pipe-extrusion-line': {
    title: 'PPR Pipe Extrusion Line',
    description: 'Our PPR pipe machine can produce PPR size range from 16 to 160mm. However, our machine can produce bigger size if required.',
    size: 'Ø16 - Ø160mm',
    gallery: makeGallery('PPR Pipe Extrusion Line', [pprPipeFeatureImage, pprPipeLineImage1, pprPipeLineImage2, pprPipeLineImage3, pprPipeLineImage4, pprPipeLineImage5, pprPipeLineImage6]),
    featureCards: makeFeatureCards([
      'Whole extrusion line adopts touch screen and PLC control, linked to achieve high degree of automation.',
      'Screw with L/D ratio 38:1 or 40:1, can realize high output extrusion with low melt temperature and low power consumption.',
      'Vacuum tank can be equipped with automatic vacuum degree control system, to realize automatic water level and vacuum degree control, also reduce power consumption in long run.',
      'Gravimetric dosing system is for choice, it can make operation easier, control pipe wall thickness and meter weight accurately, also can show the power consumption per unit weight for the pipe.',
    ]),
    parameterHeaders: genericSpecHeaders,
    parameterRows: [['PPR Pipe Line', 'Ø16 - Ø160mm', 'Cold and hot water supply', 'Normal/high speed, single/multi-layer, single/double strand']],
    components: [
      { title: 'PPR Extruder', image: pprPipeLineImage1 },
      { title: 'Vacuum Tank', image: pprPipeLineImage2 },
      { title: 'Haul-off System', image: pprPipeLineImage3 },
      { title: 'Cutting Unit', image: pprPipeLineImage4 },
    ],
  },
  'double-wall-corrugated-pipe-extrusion-line': {
    title: 'Double Wall Corrugated Pipe Extrusion Line',
    description: 'Our double wall corrugated pipe extrusion machine can produce pipe size range from Ø63-1200mm.',
    size: 'Ø63 - Ø1200mm',
    gallery: makeGallery('Double Wall Corrugated Pipe Extrusion Line', [dwcPipeFeatureImage, dwcPipeLineImage1, dwcPipeLineImage2, dwcPipeLineImage3, dwcPipeLineImage4, dwcPipeLineImage5, dwcPipeLineImage6]),
    featureCards: makeFeatureCards([
      'Whole production line is centralized to be controlled by touch screen and PLC control system.',
      'Horizontal and closed loop pressure water cooling corrugator structure is for choice.',
      'Machine can produce bigger pipe size range by optimized structure.',
      'Efficient vacuum systemand low power consumption.',
      'With automatic on-line belling system.',
      'With automatic and accurate pipe cutting system.',
      'With pipe weighing system.',
    ]),
    parameterHeaders: genericSpecHeaders,
    parameterRows: [['DWC Pipe Line', 'Ø63 - Ø1200mm', 'Water drainage and ventilation', 'Horizontal or vertical corrugated pipe machine']],
    components: [
      { title: 'Corrugator', image: dwcPipeLineImage1 },
      { title: 'Extrusion Section', image: dwcPipeFeatureImage },
      { title: 'Cooling and Vacuum System', image: dwcPipeLineImage2 },
      { title: 'Online Belling / Cutting', image: dwcPipeLineImage3 },
    ],
  },
  'pe-hollow-wall-winding-pipe-extrusion-line': {
    title: 'PE Hollow Wall Winding Pipe Extrusion Line',
    description: 'Our PE hollow wall winding pipe extrusion machine can produce pipe size range from Ø200-3000mm.',
    size: 'Ø200 - Ø3000mm',
    gallery: makeGallery('PE Hollow Wall Winding Pipe Extrusion Line', [hollowPipeFeatureImage, hollowPipeLineImage1, hollowPipeLineImage2, hollowPipeLineImage3, hollowPipeLineImage4, hollowPipeLineImage5]),
    featureCards: makeFeatureCards([
      'Whole line is controlled by PLC, operation is easy and stable.',
      'Adopt unique forming method, the square tube size meets the requirements.',
      'Can work together with socket and spigot injection machine for easy pipe connection.',
      'By changing some parts, extrusion line can also produce multi-layer and wind pipes with different wall structure.',
    ]),
    parameterHeaders: genericSpecHeaders,
    parameterRows: [['PE Hollow Wall Winding Line', 'Ø200 - Ø3000mm', 'Water drainage', 'Different profile tube designs for different ring stiffness']],
    components: [
      { title: 'Winding Forming System', image: hollowPipeLineImage1 },
      { title: 'Extrusion Section', image: hollowPipeFeatureImage },
      { title: 'Socket and Spigot Support', image: hollowPipeLineImage2 },
      { title: 'Large Diameter Pipe Handling', image: hollowPipeLineImage3 },
    ],
  },
  'pex-al-pex-pipe-machine': {
    title: 'PEX-AL-PEX Pipe Machine',
    description: 'Our PEX-AL-PEX composite pipe extrusion line produce pipe size range from Ø16-63mm.',
    size: 'Ø16 - Ø63mm',
    gallery: makeGallery('PEX-AL-PEX Pipe Machine', [pexAlPexFeatureImage, pexAlPexLineImage1, pexAlPexLineImage2, pexAlPexLineImage3, pexAlPexLineImage4, pexAlPexLineImage5, pexAlPexLineImage6]),
    featureCards: makeFeatureCards([
      'Whole line is controlled by PLC, operation is easy and stable.',
      'Five-layer forming in one step, with higher production speed and yield, pipe quality is good.',
      'Ultrasonic welding machine are imported from US, with welding with higher speed and good quality.',
      'Key parts are imported, main parts are manufactured locally which ensures low machine cost.',
    ]),
    parameterHeaders: ['Model', 'Pipe Diameter Range (mm)', 'Line Speed (m/min)', 'Total Power (KW)'],
    parameterRows: [['XRL32', '16 - 32', '7 - 15', '90'], ['XRL63', '16 - 63', '2 - 15', '120']],
    components: [
      { title: 'Five-layer Forming System', image: pexAlPexLineImage1 },
      { title: 'Ultrasonic Welding Unit', image: pexAlPexLineImage2 },
      { title: 'Composite Pipe Extrusion', image: pexAlPexFeatureImage },
      { title: 'Pipe Haul-off and Control', image: pexAlPexLineImage3 },
    ],
  },
  'rtp-tcp-pipe-production-line': {
    title: 'RTP/TCP Pipe Production Line',
    description: 'Our RTP/TCP pipe production line can produce pipe size range from Ø50-630mm.',
    size: 'Ø50 - Ø630mm',
    gallery: makeGallery('RTP/TCP Pipe Production Line', [rtpTcpFeatureImage, rtpTcpLineImage1, rtpTcpLineImage2, rtpTcpLineImage3, rtpTcpLineImage4]),
    featureCards: makeFeatureCards([
      'The full PLC control allows the production line to have a high level of automation and winding efficiency.',
      'Adopt automatic winding process, and evenly wrap the pipe with reinforced tape through the winding machines.',
      'Winding machine adopts servo drives for accurate layering and winding control.',
      'The rotation speed of the winding machine can be automatically adjusted according to the production line speed to ensure that the winding angle meets the requirements.',
      'Close loop control system to ensure accurate, stable and constant tape tension control.',
      'According to different types of reinforced tape and different pipeline pressure requirements, we will equip different quantities of winding machines.',
      'The reinforced tape can be in different materials, such as glass fiber tape, aramid tape, steel wire tape, etc.',
      'One step or two step production for option',
    ]),
    parameterHeaders: genericSpecHeaders,
    parameterRows: [['RTP/TCP Production Line', 'Ø50 - Ø630mm', 'Oil, gas, water supply, district heating', 'One step or two step production for option']],
    components: [
      { title: 'Reinforced Tape Winding', image: rtpTcpLineImage1 },
      { title: 'PLC Control System', image: rtpTcpFeatureImage },
      { title: 'Servo Winding Machine', image: rtpTcpLineImage2 },
      { title: 'Pipe Production Line', image: rtpTcpLineImage3 },
    ],
  },
  'automatic-pipe-drilling-slotting-machine': {
    title: 'Automatic Pipe Drilling/Slotting Machine',
    description: 'Our pipe drilling/slotting machine can produce pipe size range from Ø50-630mm.',
    size: 'Ø50 - Ø630mm',
    gallery: makeGallery('Automatic Pipe Drilling/Slotting Machine', [autoPipeFeatureImage, autoPipeLineImage1, autoPipeLineImage2]),
    featureCards: makeFeatureCards([
      'Parameters are directly input into the touch screen and the working steps are completed by the machine itself.',
      'Equip with double cutting stations, can increase production speed dramatically.',
      'Cutting station is well designed, and the sawdust falls directly into the collection box and is collected by the swarf extraction device',
      'Quick pipe diameter and cutting blade changeover',
    ]),
    videoEmbed: 'https://www.youtube.com/embed/vKniztDXRLU',
    parameterHeaders: genericSpecHeaders,
    parameterRows: [['Automatic Pipe Drilling/Slotting Machine', 'Ø50 - Ø630mm', 'Water well, water pollution removal, water collection and filtration', 'PLC and servo control system']],
    components: [
      { title: 'Drilling and Slotting Station', image: autoPipeFeatureImage },
      { title: 'Double Cutting Station', image: autoPipeLineImage1 },
      { title: 'Swarf Extraction Device', image: autoPipeLineImage2 },
      { title: 'PLC Servo Control', image: autoPipeFeatureImage },
    ],
  },
};

function Header() {
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 flex h-20 items-center border-b border-[#c5c5d3] bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-8">
        <Link className="flex items-center" to="/">
          <img className="h-10 w-auto object-contain" src={logoImage} alt="Xinrongplas Logo" />
        </Link>
        <nav className="hidden items-center gap-5 text-xs font-bold uppercase tracking-[0.05em] md:flex">
          {navItems.map(([label, href]) => {
            const isProducts = label === 'Products';
            const isActive = isProducts ? pathname === '/products' || pathname.startsWith('/pro/') : href.startsWith('/#') ? pathname === '/' : pathname === href;

            if (isProducts) {
              return (
                <div className="group relative flex h-20 items-center" key={label}>
                  <Link className={`inline-flex h-full items-center gap-1 ${isActive ? 'border-b-2 border-signal text-signal' : 'text-[#454651] hover:text-signal'}`} to={href}>
                    {label}
                    <ChevronDown size={14} />
                  </Link>
                  <div className="invisible absolute left-0 top-[calc(100%-1px)] z-50 w-[420px] rounded border border-[#c5c5d3] bg-white p-3 opacity-0 shadow-soft transition group-hover:visible group-hover:opacity-100">
                    <div className="flex flex-col divide-y divide-[#e4e6ef]">
                      {homeProducts.map(([title, spec, productHref]) => (
                        <Link className="block px-3 py-3 normal-case tracking-normal text-[#454651] transition hover:bg-[#f1f4f6] hover:text-signal" to={productHref} key={productHref}>
                          <span>
                          <span className="block text-sm font-bold">{title}</span>
                          <span className="mt-1 block text-xs font-medium text-steel">{spec}</span>
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link className={`${isActive ? 'border-b-2 border-signal pb-1 text-signal' : 'text-[#454651] hover:text-signal'}`} to={href} key={label}>
                {label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-6">
          <div className="hidden items-center gap-4 sm:flex">
            <Search className="cursor-pointer text-signal" size={22} />
            <Languages className="cursor-pointer text-signal" size={22} />
          </div>
          <Link className="inline-flex min-h-12 items-center justify-center bg-signal px-6 text-xs font-bold uppercase tracking-[0.08em] text-white transition hover:bg-[#2d418d]" to="/contact-us">
            Get a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-[#1a1c2e] text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-20 sm:px-8 md:grid-cols-4">
        <div>
          <Link className="mb-6 block" to="/">
            <img className="h-10 w-auto object-contain brightness-0 invert" src={logoImage} alt="Xinrongplas Logo" />
          </Link>
          <p className="mb-6 text-sm leading-5 text-white/70">World-class plastic extrusion technology provider, helping infrastructure and manufacturing partners scale since 1996.</p>
          <div className="flex gap-4 text-leaf">
            <Globe2 size={22} />
            <Factory size={22} />
            <PlayCircle size={22} />
          </div>
        </div>
        <div>
          <h4 className="mb-6 text-xs font-bold uppercase tracking-[0.05em] text-leaf">Product Categories</h4>
          <ul className="space-y-3 text-sm leading-5 text-white/70">
            <li><Link className="transition hover:text-leaf" to="/pro/pe-pipe-extrusion-line">HDPE Pipe Lines</Link></li>
            <li><Link className="transition hover:text-leaf" to="/contact-us">PVC Pipe Lines</Link></li>
            <li><Link className="transition hover:text-leaf" to="/contact-us">PPR Pipe Lines</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-6 text-xs font-bold uppercase tracking-[0.05em] text-leaf">Support & Info</h4>
          <ul className="space-y-3 text-sm leading-5 text-white/70">
            <li><Link className="transition hover:text-leaf" to="/contact-us">Service Support</Link></li>
            <li><Link className="transition hover:text-leaf" to="/project-cases">Global Footprint</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-6 text-xs font-bold uppercase tracking-[0.05em] text-leaf">Contact Us</h4>
          <address className="space-y-3 text-sm not-italic leading-5 text-white/70">
            <p className="flex items-start gap-2"><MapPin className="mt-1 text-leaf" size={15} />Zhangjiagang, China</p>
            <p className="flex items-center gap-2"><Phone className="text-leaf" size={15} />0086-13115119251</p>
            <p className="flex items-center gap-2"><Mail className="text-leaf" size={15} />marketing1@xinrongpm.com</p>
          </address>
        </div>
      </div>
      <div className="border-t border-white/5 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between px-4 text-center sm:px-8 md:flex-row">
          <p className="text-sm text-white/40">© 2024 Jiangsu Xinrongplas Machinery Co., Ltd. All Rights Reserved.</p>
          <div className="mt-4 flex gap-6 md:mt-0">
            <a className="text-[10px] uppercase tracking-[0.05em] text-white/40 hover:text-leaf" href="#home">Site Map</a>
            <a className="text-[10px] uppercase tracking-[0.05em] text-white/40 hover:text-leaf" href="#home">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function HeroSection({ compact = false }) {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-ink text-white">
      <img className="absolute inset-0 -z-20 h-full w-full object-cover" src={heroImage} alt="Plastic pipe extrusion production line" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_20%,rgba(96,182,48,0.24),transparent_34%),linear-gradient(105deg,rgba(24,32,74,0.96)_0%,rgba(71,90,167,0.88)_48%,rgba(17,24,39,0.42)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-cloud to-transparent" />
      <div className={`mx-auto grid w-full max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center ${compact ? 'min-h-[560px] py-20' : 'min-h-[calc(100vh-108px)] py-24'}`}>
        <div>
          <p className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#dff5d7] backdrop-blur">
            <BadgeCheck size={16} />
            International B2B extrusion partner
          </p>
          <h1 className="max-w-4xl font-display text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
            High-performance pipe extrusion machinery for global factories.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#e4e8f8]">
            28+ years of manufacturing experience, turnkey line configuration, export-ready project coordination, and long-term service for plastic pipe production.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link className="inline-flex min-h-14 items-center justify-center gap-2 rounded-md bg-leaf px-7 py-4 font-bold text-white shadow-lift hover:bg-[#4f9b29]" to="/contact-us">
              Request Engineering Quote
              <ArrowRight size={18} />
            </Link>
            <a className="inline-flex min-h-14 items-center justify-center gap-2 rounded-md border border-white/35 px-7 py-4 font-bold text-white backdrop-blur hover:border-white hover:bg-white/10" href="#inquiry">
              Contact Sales Team
              <Phone size={18} />
            </a>
          </div>
          <div className="mt-12 grid gap-3 sm:grid-cols-4">
            {stats.map(([value, label]) => (
              <div className="rounded-lg border border-white/10 bg-white/[0.09] p-4 backdrop-blur" key={label}>
                <p className="font-display text-3xl font-semibold">{value}</p>
                <p className="mt-1 text-sm text-[#e4e8f8]">{label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-5 rounded-[28px] bg-gradient-to-br from-white/18 via-white/5 to-leaf/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/10 p-3 shadow-lift backdrop-blur">
            <div className="overflow-hidden rounded-xl">
              <img className="aspect-[4/3] w-full object-cover transition duration-700 hover:scale-105" src={productsImage} alt="Finished plastic pipes and extrusion equipment" />
            </div>
            <div className="grid gap-3 p-4">
              {heroHighlights.map((item) => (
                <p className="flex items-center gap-3 text-sm font-semibold text-white" key={item}>
                  <CheckCircle2 className="text-leaf" size={20} />
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InquiryForm() {
  return (
    <form className="grid gap-5 rounded-2xl bg-white p-6 text-ink shadow-lift ring-1 ring-white/70 sm:p-8">
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-leaf">Get a free quote</p>
        <h2 className="mt-3 font-display text-3xl font-semibold leading-tight">Customize Your Plastic Pipe Extrusion Machinery</h2>
        <p className="mt-3 text-sm leading-6 text-steel">Send your pipe material, diameter range, capacity target, and market. This frontend form is ready for backend connection later.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold">
          Name
          <input className="h-12 rounded-md border border-line bg-cloud px-4 font-normal outline-none transition focus:border-signal focus:bg-white" placeholder="Your name" />
        </label>
        <label className="grid gap-2 text-sm font-semibold">
          Email
          <input className="h-12 rounded-md border border-line bg-cloud px-4 font-normal outline-none transition focus:border-signal focus:bg-white" placeholder="name@company.com" type="email" />
        </label>
        <label className="grid gap-2 text-sm font-semibold">
          Phone
          <input className="h-12 rounded-md border border-line bg-cloud px-4 font-normal outline-none transition focus:border-signal focus:bg-white" placeholder="+86..." />
        </label>
        <label className="grid gap-2 text-sm font-semibold">
          Country
          <input className="h-12 rounded-md border border-line bg-cloud px-4 font-normal outline-none transition focus:border-signal focus:bg-white" placeholder="Destination country" />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-semibold">
        Message
        <textarea className="min-h-36 rounded-md border border-line bg-cloud px-4 py-3 font-normal outline-none transition focus:border-signal focus:bg-white" placeholder="Pipe material, diameter range, output target, timeline, and customization needs" />
      </label>
      <button className="inline-flex min-h-14 items-center justify-center gap-2 rounded-md bg-leaf px-7 py-4 font-bold text-white shadow-sm hover:bg-[#4f9b29]" type="button">
        Submit Inquiry
        <ArrowRight size={18} />
      </button>
    </form>
  );
}

function ContactInquirySection() {
  return (
    <section id="inquiry" className="relative overflow-hidden bg-cloud py-20 sm:py-24">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-signal/10 blur-3xl" />
      <div className="absolute bottom-10 left-0 h-80 w-80 rounded-full bg-leaf/10 blur-3xl" />
      <div className="relative mx-auto grid w-full max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-stretch">
        <InquiryForm />
        <aside className="relative overflow-hidden rounded-2xl bg-ink p-6 text-white shadow-lift sm:p-8">
          <img className="absolute inset-0 h-full w-full object-cover opacity-24" src={factoryImage} alt="Xinrong machinery workshop" />
          <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink/92 to-signal/70" />
          <div className="relative flex h-full flex-col justify-between gap-10">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#dff5d7]">Direct factory contact</p>
              <h2 className="mt-3 font-display text-3xl font-semibold leading-tight">Engineering support before you invest.</h2>
              <p className="mt-4 leading-7 text-[#e4e8f8]">
                Share your production plan and receive practical guidance on line selection, layout, packing, installation, and spare parts.
              </p>
            </div>
            <div className="grid gap-4">
              {contactDetails.map(([label, value, Icon]) => (
                <div className="rounded-lg border border-white/12 bg-white/10 p-4 backdrop-blur" key={label}>
                  <Icon className="text-leaf" size={22} />
                  <p className="mt-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#e4e8f8]">{label}</p>
                  <p className="mt-1 font-semibold">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

function MapSection() {
  return (
    <section className="bg-[#18204a] py-20 text-white sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="mb-10 grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-leaf">Global supply, China factory</p>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-tight">Visit or contact Xinrong in Zhangjiagang.</h2>
          </div>
          <p className="leading-8 text-[#d8ddf3]">
            The map area is presented in a black-and-white industrial style to keep the contact page polished and focused.
          </p>
        </div>
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lift">
          <iframe
            className="h-[460px] w-full grayscale"
            title="Black and white map of Zhangjiagang City, China"
            src="https://www.openstreetmap.org/export/embed.html?bbox=120.4690%2C31.7770%2C120.6900%2C31.9220&layer=mapnik&marker=31.8650%2C120.5550"
          />
        </div>
      </div>
    </section>
  );
}

function EmptyImage({ label = 'Image Placeholder', className = '' }) {
  return (
    <div className={`group relative overflow-hidden rounded-xl border border-white/10 bg-[linear-gradient(135deg,#18204a,#475aa7_48%,#25336d)] ${className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_24%,rgba(96,182,48,0.18),transparent_34%),radial-gradient(circle_at_74%_70%,rgba(71,90,167,0.26),transparent_36%)]" />
      <div className="absolute inset-4 rounded-lg border border-dashed border-white/20 transition duration-500 group-hover:scale-[1.03]" />
      <div className="relative grid h-full min-h-48 place-items-center p-8 text-center">
        <div>
          <Factory className="mx-auto text-white/55" size={34} />
          <p className="mt-4 text-xs font-bold uppercase tracking-[0.22em] text-white/55">{label}</p>
        </div>
      </div>
    </div>
  );
}

function ReferenceHomePage() {
  return (
    <>
      <section id="home" className="relative flex min-h-[870px] items-center overflow-hidden bg-[#1a1c2e] text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#1a1c2e] via-[#1a1c2e]/60 to-transparent" />
          <img className="h-full w-full scale-105 object-cover object-center opacity-40" src={heroImage} alt="Xinrongplas factory floor and extrusion line" />
        </div>
        <div className="relative z-20 mx-auto w-full max-w-7xl px-4 sm:px-8">
          <div className="max-w-2xl">
            <span className="mb-6 inline-block border border-leaf/30 bg-leaf/20 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.05em] text-leaf">Global Manufacturing Leader</span>
            <h1 className="mb-6 font-display text-[32px] font-semibold leading-[40px] text-white sm:text-5xl sm:leading-[56px]">
              Leading Brand in Plastic Pipe Extrusion Machinery Since 1996
            </h1>
            <p className="mb-10 max-w-lg text-lg leading-7 text-white/80">
              Over 28 years of technical expertise, driving industrial precision across 80+ countries with 60,000m² of advanced production capability.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link className="bg-leaf px-8 py-4 text-center text-xs font-bold uppercase tracking-[0.05em] text-white transition-transform hover:scale-105 hover:bg-[#4e9a26]" to="/contact-us">
                Get a Free Quote
              </Link>
              <a className="border-2 border-white/30 px-8 py-4 text-center text-xs font-bold uppercase tracking-[0.05em] text-white transition hover:bg-white/10" href="#products">
                Explore Equipment
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#c5c5d3] bg-[#f7fafc] py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {[
              ['28+', 'Years Experience', BadgeCheck],
              ['60,000m²', 'Modern Workshop', Factory],
              ['200+', 'Skilled Employees', Users],
              ['50+', 'R&D Patents', ShieldCheck],
            ].map(([value, label, Icon]) => (
              <div className="flex items-center gap-4 border-[#c5c5d3] p-4 lg:border-r lg:last:border-r-0" key={label}>
                <Icon className="text-leaf" size={40} />
                <div>
                  <p className="text-xl font-semibold text-signal">{value}</p>
                  <p className="text-xs font-bold uppercase tracking-[0.05em] text-[#454651]">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20" id="products">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-2xl font-semibold leading-8 text-signal md:text-4xl md:leading-10">Our Main Products</h2>
            <div className="mx-auto h-1 w-20 bg-leaf" />
            <p className="mx-auto mt-6 max-w-3xl text-base leading-6 text-[#454651]">
              Providing high-performance extrusion solutions for a wide range of thermoplastic materials and pipe specifications.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {productCenterProducts.map(({ title, specification, href, image, alt }, index) => (
              <article className="group flex flex-col border border-[#c5c5d3] bg-[#f7fafc] p-6 transition duration-300 hover:shadow-xl" key={title}>
                <div className="mb-6 aspect-video overflow-hidden bg-[#ebeef0]">
                  <img className="h-full w-full object-cover transition duration-500 group-hover:scale-110" src={image} alt={alt} loading="lazy" decoding="async" />
                </div>
                <div className="flex-grow">
                  <span className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-leaf">{index === 2 ? 'High Material Grade' : 'Final Product'}</span>
                  <h3 className="mb-3 text-xl font-semibold leading-7 text-signal">{title}</h3>
                  <div className="flex items-center gap-2 rounded-sm bg-signal/5 p-3">
                    <Settings className="text-signal" size={16} />
                    <p className="text-sm leading-5 text-[#454651]">
                      Range: <span className="font-bold text-signal">{specification}</span>
                    </p>
                  </div>
                </div>
                <Link className="mt-6 flex items-center text-xs font-bold uppercase tracking-[0.05em] text-signal transition-transform hover:translate-x-2" to={href}>
                  View More <ArrowRight className="ml-2 text-leaf" size={15} />
                </Link>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link className="inline-flex bg-leaf px-10 py-4 text-xs font-bold uppercase tracking-[0.05em] text-white shadow-lg transition hover:bg-[#4e9a26]" to="/products">
              View All 9 Product Categories
            </Link>
          </div>
        </div>
      </section>

      <section id="solutions" className="overflow-hidden bg-[#1a1c2e] py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="mb-12 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <h2 className="mb-4 text-2xl font-semibold leading-8 md:text-4xl md:leading-10">Complete System Solutions</h2>
              <p className="text-base leading-6 text-white/70">
                Beyond machinery, we deliver integrated Turnkey Projects for diverse industrial applications, serving clients in over 80 countries worldwide.
              </p>
            </div>
            <Link className="group flex items-center text-xs font-bold uppercase tracking-[0.05em] text-leaf" to="/contact-us">
              Learn About Turnkey Projects <ArrowRight className="ml-2 transition-transform group-hover:translate-x-2" size={18} />
            </Link>
          </div>
          <div className="grid min-h-[600px] grid-cols-1 gap-6 md:grid-cols-4 md:grid-rows-2">
            <div className="group relative overflow-hidden border border-white/10 md:col-span-2 md:row-span-2">
              <img className="absolute inset-0 h-full w-full object-cover opacity-60 transition duration-700 group-hover:scale-105" src={productsImage} alt="Pipe systems solution" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1c2e] to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="mb-2 text-2xl font-semibold leading-8">Pipe Systems</h3>
                <p className="text-sm text-white/60">Comprehensive lines for PE, PVC, PPR, and composite pipes.</p>
              </div>
            </div>
            <div className="group relative overflow-hidden border border-white/10 md:col-span-2">
              <img className="absolute inset-0 h-full w-full object-cover opacity-60 transition duration-700 group-hover:scale-105" src={factoryImage} alt="Recycling machinery solution" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1c2e] to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="mb-2 text-xl font-semibold leading-7 text-white">Recycling Machinery</h3>
                <p className="text-sm text-white/60">Efficient crushing and pelletizing solutions for waste plastics.</p>
              </div>
            </div>
            <div className="relative overflow-hidden border border-white/10 bg-leaf/10 transition-colors hover:bg-leaf/20">
              <div className="flex h-full flex-col justify-center p-8 text-center">
                <Factory className="mx-auto mb-4 text-leaf" size={40} />
                <h3 className="mb-2 text-xl font-semibold leading-7">Profiles</h3>
                <p className="text-sm text-white/60">Window & Door frame extrusion.</p>
              </div>
            </div>
            <div className="relative overflow-hidden border border-white/10 bg-signal/40 transition-colors hover:bg-signal/50">
              <div className="flex h-full flex-col justify-center p-8 text-center">
                <Layers className="mx-auto mb-4 text-leaf" size={40} />
                <h3 className="mb-2 text-xl font-semibold leading-7">Sheets</h3>
                <p className="text-sm text-white/60">Multilayer plastic sheet production.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-[#f7fafc] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-2xl font-semibold leading-8 text-signal md:text-4xl md:leading-10">Our Service Excellence</h2>
            <p className="mx-auto max-w-3xl text-base leading-6 text-[#454651]">
              A seamless lifecycle commitment—from initial consultation to long-term operational success.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-0 top-1/2 z-0 hidden h-px w-full -translate-y-1/2 bg-[#c5c5d3] lg:block" />
            <div className="relative z-10 grid grid-cols-1 gap-12 lg:grid-cols-3">
              {[
                ['Pre-sale Service', ['Experienced engineering consultation', 'Customized turnkey project solutions'], Lightbulb],
                ['Sale Service', ['Regular production progress photos', 'Factory testing with client/third-party'], Settings],
                ['After-sale Service', ['1-Year standard warranty & training', '24h online technical support'], ShieldCheck],
              ].map(([title, items, Icon]) => (
                <article className="border border-[#c5c5d3] bg-white p-8 shadow-sm transition-colors hover:border-leaf" key={title}>
                  <div className="mb-6 flex h-16 w-16 items-center justify-center bg-signal text-white">
                    <Icon size={32} />
                  </div>
                  <h3 className="mb-4 text-2xl font-semibold leading-8 text-signal">{title}</h3>
                  <ul className="mb-8 space-y-3">
                    {items.map((item) => (
                      <li className="flex items-start text-sm leading-5 text-[#454651]" key={item}>
                        <CheckCircle2 className="mr-2 mt-0.5 text-leaf" size={16} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link className="text-xs font-bold uppercase tracking-[0.05em] text-signal hover:text-leaf" to="/contact-us">Read More</Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="mb-12 grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-leaf">What Our Customers Are Saying</p>
              <h2 className="mt-3 text-2xl font-semibold leading-8 text-signal md:text-4xl md:leading-10">Global Voice</h2>
            </div>
            <p className="leading-8 text-[#454651]">Project cases from Turkey, Cambodia, India, Kazakhstan, and more markets show stable machinery performance and responsive after-sales service.</p>
          </div>
          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />
            <div className="global-voice-track flex w-max gap-5">
              {[...projectCases, ...projectCases].map(({ country, customer, equipment, feedback, image, imageAlt }, index) => (
                <Link className="group w-[320px] shrink-0 overflow-hidden rounded-2xl bg-[#f7fafc] shadow-sm ring-1 ring-line transition hover:-translate-y-1 hover:shadow-lift sm:w-[380px]" to="/project-cases" key={`${country}-${index}`}>
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#e5e9eb]">
                    <img className="h-full w-full object-cover transition duration-500 group-hover:scale-105" src={image} alt={imageAlt} loading="lazy" decoding="async" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/78 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-leaf">{country}</p>
                      <h3 className="mt-1 font-display text-xl font-semibold leading-7 text-white">{customer}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="mb-4 flex text-leaf">{[1, 2, 3, 4, 5].map((star) => <Star fill="currentColor" size={16} key={star} />)}</div>
                    <p className="line-clamp-2 text-sm font-bold leading-6 text-signal">{equipment}</p>
                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#454651]">{feedback}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-leaf">
                      View Project Case
                      <ArrowRight size={15} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-10 text-center">
            <Link className="inline-flex min-h-14 items-center justify-center gap-2 rounded-md bg-signal px-7 py-4 font-bold text-white shadow-lift hover:bg-[#3f4e94]" to="/project-cases">
              View All Project Cases
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#f1f4f6] py-20">
        <div className="mx-auto max-w-4xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-2xl font-semibold leading-8 text-signal md:text-4xl md:leading-10">Frequently Asked Questions</h2>
            <p className="text-base leading-6 text-[#454651]">Everything you need to know about our manufacturing and service standards.</p>
          </div>
          <div className="space-y-4">
            {homeFaqs.map(([question, answer], index) => (
              <details className="group border border-[#c5c5d3] bg-white transition open:border-leaf" open={index === 0} key={question}>
                <summary className="flex cursor-pointer list-none items-center justify-between p-6 font-bold text-signal">
                  <span>{question}</span>
                  <ChevronRight className="text-leaf transition-transform group-open:rotate-90" size={20} />
                </summary>
                <div className="border-t border-[#c5c5d3]/30 p-6 pt-0 text-base leading-6 text-[#454651]">{answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative bg-white py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-4 sm:px-8 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-2xl font-semibold leading-8 text-signal md:text-5xl md:leading-[56px]">Get Your Exclusive Quote</h2>
            <p className="mb-10 text-lg leading-7 text-[#454651]">Our technical engineers will provide a customized solution and detailed investment analysis within 24 hours.</p>
            <div className="space-y-6">
              {[
                ['WhatsApp / Phone', '0086-13115119251', Phone],
                ['Email Address', 'marketing1@xinrongpm.com', Mail],
              ].map(([label, value, Icon]) => (
                <div className="flex items-center gap-4" key={label}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-signal/5 text-leaf"><Icon size={24} /></div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.05em] text-[#454651]">{label}</p>
                    <p className="text-xl font-semibold leading-7 text-signal">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="border border-[#c5c5d3] bg-[#f7fafc] p-8 shadow-2xl md:p-12">
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <label className="block text-sm leading-5 text-[#454651]">Full Name *<input className="mt-2 w-full border border-[#c5c5d3] bg-white p-4 outline-none transition focus:border-signal" required type="text" /></label>
                <label className="block text-sm leading-5 text-[#454651]">Email Address *<input className="mt-2 w-full border border-[#c5c5d3] bg-white p-4 outline-none transition focus:border-signal" required type="email" /></label>
              </div>
              <label className="block text-sm leading-5 text-[#454651]">Message *<textarea className="mt-2 w-full border border-[#c5c5d3] bg-white p-4 outline-none transition focus:border-signal" required rows="4" /></label>
              <button className="w-full bg-leaf py-4 text-xs font-bold uppercase tracking-[0.05em] text-white shadow-lg transition hover:bg-[#4e9a26]" type="button">Submit Inquiry</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

function ProductsPage() {
  return (
    <>
      <section className="relative flex h-[400px] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img className="h-full w-full object-cover brightness-[0.4]" src={factoryImage} alt="Advanced industrial extrusion machinery in a modern factory setting" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 text-center sm:px-8">
          <nav className="mb-2 flex items-center justify-center gap-1 text-xs font-medium text-white/70">
            <Link className="transition hover:text-white" to="/">Home</Link>
            <ChevronRight size={14} />
            <span className="text-white">Product Center</span>
          </nav>
          <h1 className="mb-4 text-3xl font-semibold leading-10 text-white md:text-5xl">Advanced Extrusion Solutions</h1>
          <div className="mx-auto mb-6 h-1 w-24 bg-leaf" />
          <p className="mx-auto max-w-2xl text-lg leading-7 text-white/80">
            Explore our comprehensive range of high-performance machinery for pipe, profile, and sheet extrusion, engineered for global industrial standards.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {productCenterProducts.map((product) => (
            <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-[#c5c5d3] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl" key={product.title}>
              <div className="aspect-[4/3] overflow-hidden bg-[#ebeef0]">
                <img className="h-full w-full object-cover transition duration-500 group-hover:scale-105" src={product.image} alt={product.alt} width="600" height="450" loading="lazy" decoding="async" />
              </div>
              <div className="flex flex-grow flex-col p-6">
                <h3 className="mb-3 text-xl font-medium leading-7 text-signal">{product.title}</h3>
                <p className="mb-6 flex-grow text-sm leading-5 text-[#454651]">{product.description}</p>
                <div className="mb-6 flex items-center justify-between rounded bg-[#f1f4f6] px-3 py-2">
                  <span className="text-xs font-medium leading-4 text-[#454651]">Specification</span>
                  <span className="text-xs font-semibold leading-4 text-signal">{product.specification}</span>
                </div>
                <Link className="flex w-full items-center justify-center gap-1 rounded border border-signal py-3 text-sm font-semibold text-signal transition-colors hover:bg-signal hover:text-white" to={product.href}>
                  View Details
                  <ArrowRight size={18} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#2d3133] py-20 text-[#eef1f3]">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-8">
          <h2 className="mb-6 text-3xl font-semibold leading-10">Can't find the specific configuration?</h2>
          <p className="mx-auto mb-12 max-w-2xl text-lg leading-7 text-[#e0e3e5]">
            Our engineering team specializes in custom extrusion lines tailored to unique technical requirements. We provide turnkey solutions from concept to commissioning.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link className="flex items-center gap-1 rounded bg-leaf px-12 py-3 text-sm font-semibold text-white transition hover:brightness-110" to="/contact-us">
              Consult an Engineer
              <MessageCircle size={18} />
            </Link>
            <Link className="rounded border border-[#e0e3e5] px-12 py-3 text-sm font-semibold text-[#e0e3e5] transition hover:bg-white/10" to="/contact-us">
              Download Full Catalog
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function HomePage() {
  return (
    <>
      <section id="home" className="relative isolate overflow-hidden bg-ink text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_12%,rgba(96,182,48,0.24),transparent_30%),linear-gradient(112deg,#18204a_0%,#475aa7_50%,#111827_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-cloud to-transparent" />
        <div className="mx-auto grid min-h-[calc(100vh-108px)] w-full max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.98fr_1.02fr] lg:items-center">
          <div>
            <p className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#dff5d7] backdrop-blur">
              <BadgeCheck size={16} />
              Jiangsu Xinrongplas Machinery Co., Ltd
            </p>
            <h1 className="max-w-4xl font-display text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
              Plastic Pipe Extrusion Machinery Built for Global B2B Projects.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#e4e8f8]">
              Xinrong is a top plastic extrusion machinery brand in China with 28+ years of focus, serving turnkey factory projects in 80+ countries.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a className="inline-flex min-h-14 items-center justify-center gap-2 rounded-md bg-leaf px-7 py-4 font-bold text-white shadow-lift hover:bg-[#4f9b29]" href="#quote">
                GET A FREE QUOTE
                <ArrowRight size={18} />
              </a>
              <a className="inline-flex min-h-14 items-center justify-center gap-2 rounded-md border border-white/35 px-7 py-4 font-bold text-white backdrop-blur hover:border-white hover:bg-white/10" href="#products">
                View Products
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
          <div className="grid gap-4">
            <EmptyImage label="Hero Banner Empty Image" className="min-h-[360px] shadow-lift" />
            <div className="grid gap-4 md:grid-cols-3">
              {bannerSlides.map(([title, href]) => (
                <a className="rounded-xl border border-white/10 bg-white/10 p-4 backdrop-blur transition hover:-translate-y-1 hover:bg-white/15" href={href} key={title}>
                  <p className="text-sm font-semibold">{title}</p>
                  <p className="mt-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#dff5d7]">
                    View More
                    <ArrowRight size={14} />
                  </p>
                </a>
              ))}
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-4 lg:col-span-2">
            {stats.map(([value, label]) => (
              <div className="rounded-xl border border-white/10 bg-white/[0.1] p-5 backdrop-blur" key={label}>
                <p className="font-display text-3xl font-semibold">{value}</p>
                <p className="mt-1 text-sm text-[#e4e8f8]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="bg-cloud py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-leaf">OUR MAIN PRODUCTS</p>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-tight">28+ years focused on premium extrusion machinery.</h2>
            <p className="mt-5 leading-8 text-steel">
              Xinrong provides high-quality equipment and complete service for plastic pipe extrusion projects.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {homeProducts.map(([title, spec, href]) => (
              <article className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-line transition hover:-translate-y-1 hover:shadow-lift" key={title}>
                <EmptyImage label="Product Empty Image" className="aspect-[16/10] rounded-none transition duration-700 group-hover:scale-[1.03]" />
                <div className="p-6">
                  <p className="mb-3 inline-flex rounded-full bg-cloud px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-signal">Final Product</p>
                  <h3 className="font-display text-xl font-semibold">{title}</h3>
                  <p className="mt-3 text-sm font-semibold text-leaf">{spec}</p>
                  <Link className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-signal hover:text-leaf" to={href}>
                    View Details
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a className="inline-flex min-h-14 items-center justify-center gap-2 rounded-md bg-signal px-7 py-4 font-bold text-white shadow-lift hover:bg-[#3f4e94]" href="#quote">
              GET A FREE QUOTE
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="relative overflow-hidden bg-white py-20 sm:py-24">
        <div className="absolute right-0 top-12 h-80 w-80 rounded-full bg-signal/10 blur-3xl" />
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.84fr_1.16fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-leaf">Our Complete System Solutions</p>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-tight">Turnkey extrusion systems delivered to 80+ countries.</h2>
            <p className="mt-5 leading-8 text-steel">
              Main products cover plastic pipe extrusion lines, profile extrusion lines, sheet extrusion lines, and plastic recycling machines.
            </p>
            <EmptyImage label="System Solution Empty Image" className="mt-8 min-h-64 shadow-soft" />
          </div>
          <div className="grid gap-5">
            {servicePhases.map(([title, text, Icon]) => (
              <article className="rounded-2xl border border-line bg-cloud/70 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lift" key={title}>
                <Icon className="text-signal" size={30} />
                <h3 className="mt-5 font-display text-2xl font-semibold">{title}</h3>
                <p className="mt-3 leading-7 text-steel">{text}</p>
                <a className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-leaf" href="/services">
                  Read More
                  <ArrowRight size={15} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about-us" className="bg-ink py-20 text-white sm:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <EmptyImage label="Factory Empty Image" className="min-h-[420px] shadow-lift" />
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#dff5d7]">Company Overview</p>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-tight">Jiangsu Xinrongplas Machinery Co., Ltd</h2>
            <p className="mt-5 leading-8 text-[#e4e8f8]">
              The company owns a workshop of more than 60,000 square meters and has more than 200 experienced, high-quality employees.
            </p>
            <a className="mt-8 inline-flex min-h-14 items-center justify-center gap-2 rounded-md bg-leaf px-7 py-4 font-bold text-white hover:bg-[#4f9b29]" href="/about-us/">
              About Company
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <section id="project-cases" className="bg-cloud py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="mb-10 grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-leaf">What Our Customers Are Saying</p>
              <h2 className="mt-3 font-display text-4xl font-semibold leading-tight">Feedback from seven international markets.</h2>
            </div>
            <p className="leading-8 text-steel">Customers highlight machine stability, repeat purchases, fast response, and reliable after-sales service.</p>
          </div>
          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-cloud to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-cloud to-transparent" />
            <div className="global-voice-track flex w-max gap-5">
              {[...projectCases, ...projectCases].map(({ country, customer, equipment, feedback, image, imageAlt }, index) => (
                <Link className="group w-[320px] shrink-0 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-line transition hover:-translate-y-1 hover:shadow-lift sm:w-[380px]" to="/project-cases" key={`${country}-${index}`}>
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#e5e9eb]">
                    <img className="h-full w-full object-cover transition duration-500 group-hover:scale-105" src={image} alt={imageAlt} loading="lazy" decoding="async" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/78 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-leaf">{country}</p>
                      <h3 className="mt-1 font-display text-xl font-semibold leading-7 text-white">{customer}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="line-clamp-2 text-sm font-bold leading-6 text-signal">{equipment}</p>
                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-steel">{feedback}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-leaf">
                      View Project Case
                      <ArrowRight size={15} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-10 text-center">
            <Link className="inline-flex min-h-14 items-center justify-center gap-2 rounded-md bg-signal px-7 py-4 font-bold text-white shadow-lift hover:bg-[#3f4e94]" to="/project-cases">
              View All Project Cases
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section id="news" className="bg-white py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-leaf">FAQ</p>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-tight">We Have Assembled The Best Team To Work With You!</h2>
          </div>
          <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-2">
            {homeFaqs.map(([question, answer]) => (
              <details className="rounded-2xl bg-cloud p-6 shadow-sm ring-1 ring-line" key={question}>
                <summary className="cursor-pointer font-display text-lg font-semibold">{question}</summary>
                <p className="mt-3 leading-7 text-steel">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="quote" className="relative overflow-hidden bg-ink py-20 text-white sm:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(96,182,48,0.18),transparent_32%),radial-gradient(circle_at_82%_70%,rgba(71,90,167,0.22),transparent_36%)]" />
        <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#dff5d7]">Get Your Exclusive Quote</p>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-tight">Customize Your Plastic Pipe Extrusion Machinery!</h2>
            <p className="mt-4 text-[#e4e8f8]">Get a custom quote in less than five minutes.</p>
            <div className="mt-7 grid gap-4 text-[#e4e8f8]">
              <p className="flex items-center gap-3"><Phone size={20} /> 0086-13115119251</p>
              <p className="flex items-center gap-3"><Mail size={20} /> marketing1@xinrongpm.com</p>
            </div>
          </div>
          <InquiryForm />
        </div>
      </section>
    </>
  );
}

function ContactUsPage() {
  return (
    <>
      <HeroSection compact />
      <ContactInquirySection />
      <MapSection />
    </>
  );
}

function ReferenceContactUsPage() {
  return (
    <>
      <section className="relative flex h-[400px] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img className="h-full w-full object-cover brightness-[0.4]" src={factoryImage} alt="High-tech industrial manufacturing facility with advanced extrusion machinery" />
        </div>
        <div className="relative z-10 px-4 text-center sm:px-8">
          <h1 className="mb-4 text-3xl font-semibold leading-10 text-white md:text-5xl">Contact Us</h1>
          <div className="mx-auto mb-6 h-1 w-24 bg-leaf" />
          <p className="mx-auto max-w-2xl text-lg leading-7 text-white/80">
            Partner with China's leading brand in plastic pipe extrusion technology. Our expert team is ready to support your production goals.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="w-full">
            <div className="border border-[#c5c5d3] bg-white p-8 shadow-[0_4px_0_0_rgba(0,0,0,0.1)] md:p-10">
              <h2 className="mb-2 text-2xl font-semibold leading-8 text-signal">Get Your Exclusive Quote</h2>
              <p className="mb-8 text-base leading-6 text-[#454651]">Fill out the form below and our technical engineers will respond within 12 hours.</p>
              <form className="space-y-6">
                <label className="block space-y-2">
                  <span className="block text-sm font-semibold uppercase tracking-[0.05em] text-[#454651]">Full Name *</span>
                  <input className="h-12 w-full border border-[#c5c5d3] bg-[#f7fafc] px-4 outline-none transition focus:border-signal focus:ring-2 focus:ring-signal/20" placeholder="John Doe" required type="text" />
                </label>
                <label className="block space-y-2">
                  <span className="block text-sm font-semibold uppercase tracking-[0.05em] text-[#454651]">Email Address *</span>
                  <input className="h-12 w-full border border-[#c5c5d3] bg-[#f7fafc] px-4 outline-none transition focus:border-signal focus:ring-2 focus:ring-signal/20" placeholder="email@company.com" required type="email" />
                </label>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <label className="block space-y-2">
                    <span className="block text-sm font-semibold uppercase tracking-[0.05em] text-[#454651]">Phone Number</span>
                    <input className="h-12 w-full border border-[#c5c5d3] bg-[#f7fafc] px-4 outline-none transition focus:border-signal focus:ring-2 focus:ring-signal/20" placeholder="+1 (000) 000-0000" type="tel" />
                  </label>
                  <label className="block space-y-2">
                    <span className="block text-sm font-semibold uppercase tracking-[0.05em] text-[#454651]">Country *</span>
                    <select className="h-12 w-full border border-[#c5c5d3] bg-[#f7fafc] px-4 outline-none transition focus:border-signal focus:ring-2 focus:ring-signal/20" required>
                      <option value="">Select your country</option>
                      <option value="US">United States</option>
                      <option value="TR">Turkey</option>
                      <option value="KZ">Kazakhstan</option>
                      <option value="UZ">Uzbekistan</option>
                      <option value="IN">India</option>
                    </select>
                  </label>
                </div>
                <label className="block space-y-2">
                  <span className="block text-sm font-semibold uppercase tracking-[0.05em] text-[#454651]">Your Message *</span>
                  <textarea className="w-full border border-[#c5c5d3] bg-[#f7fafc] p-4 outline-none transition focus:border-signal focus:ring-2 focus:ring-signal/20" placeholder="Please describe your requirements (e.g., Pipe diameter, capacity, material type...)" required rows="5" />
                </label>
                <button className="flex h-14 w-full items-center justify-center gap-2 bg-leaf text-lg font-bold uppercase tracking-widest text-white transition hover:brightness-110 active:scale-[0.98]" type="button">
                  Send Inquiry
                  <Mail size={20} />
                </button>
                <p className="text-center text-xs text-[#454651]/60">Your information is secure and will only be used for technical consultation.</p>
              </form>
            </div>
          </div>

          <div className="w-full space-y-10">
            <div>
              <h2 className="mb-6 text-2xl font-semibold leading-8 text-signal">Global Headquarters</h2>
              <div className="flex flex-col gap-6">
                {[
                  ['Our Address', 'No.19, Jinfeng Road, Jinfeng Town, Zhangjiagang City, Jiangsu Province, China.', MapPin],
                  ['WhatsApp / Phone', '0086-13115119251', Phone],
                  ['Email Address', 'marketing1@xinrongpm.com', Mail],
                  ['Working Hours', 'Mon - Sat: 8:00 AM - 6:00 PM', BadgeCheck],
                ].map(([label, value, Icon]) => (
                  <div className="flex items-start gap-4" key={label}>
                    <div className="h-fit rounded-lg bg-signal/10 p-3 text-signal">
                      <Icon size={24} />
                    </div>
                    <div>
                      <p className="mb-1 text-sm font-semibold uppercase tracking-[0.05em] text-signal">{label}</p>
                      <p className="text-base leading-6 text-[#454651]">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative overflow-hidden border border-[#c5c5d3] bg-[#f1f4f6] p-8">
              <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-signal/5" />
              <h3 className="mb-4 text-xl font-medium leading-7 text-signal">Global Presence</h3>
              <p className="mb-6 text-base leading-6 text-[#454651]">
                Xinrongplas provides complete turnkey solutions to over <span className="font-bold text-signal">80 countries</span> worldwide. Our overseas offices are ready to provide localized technical support.
              </p>
              <div className="flex flex-wrap gap-6">
                {['28+ Years Experience', '50+ Patents', 'ISO 9001 Certified'].map((item) => (
                  <div className="flex items-center gap-2" key={item}>
                    <CheckCircle2 className="text-leaf" size={22} />
                    <span className="text-sm font-semibold uppercase tracking-[0.05em]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative h-[500px] w-full border-y border-[#c5c5d3] bg-[#e5e9eb]">
        <iframe
          className="absolute inset-0 h-full w-full grayscale"
          title="Xinrongplas factory map in Zhangjiagang Jiangsu China"
          src="https://www.openstreetmap.org/export/embed.html?bbox=120.4690%2C31.7770%2C120.6900%2C31.9220&layer=mapnik&marker=31.8650%2C120.5550"
        />
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="max-w-sm border border-[#c5c5d3] bg-white p-6 text-center shadow-xl">
            <Factory className="mx-auto mb-4 text-signal" size={42} />
            <h4 className="mb-2 text-xl font-medium leading-7 text-signal">Xinrongplas Factory</h4>
            <p className="mb-4 text-sm leading-5">60,000 m² Advanced Production Workshop</p>
            <a className="flex items-center justify-center gap-1 font-bold text-signal hover:underline" href="https://maps.google.com" target="_blank" rel="noreferrer">
              Open in Google Maps
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-signal py-20 text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <h2 className="mb-6 text-3xl font-semibold leading-10 text-white">Customize Your Plastic Pipe Extrusion Machinery!</h2>
          <p className="mx-auto mb-8 max-w-3xl text-lg leading-7 text-[#d1d8ff]">Get a custom quote and technical feasibility analysis in less than five minutes.</p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link className="bg-leaf px-10 py-4 font-bold uppercase tracking-wider text-white transition hover:brightness-110" to="/contact-us">Get Quote Now</Link>
            <Link className="border-2 border-white px-10 py-4 font-bold uppercase tracking-wider text-white transition hover:bg-white/10" to="/products">Download Catalog</Link>
          </div>
        </div>
      </section>
    </>
  );
}

function ProjectCasesPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_18%,rgba(96,182,48,0.24),transparent_30%),linear-gradient(112deg,#18204a_0%,#475aa7_50%,#111827_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-36 bg-gradient-to-t from-cloud to-transparent" />
        <div className="mx-auto grid min-h-[560px] w-full max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#dff5d7] backdrop-blur">
              <Globe2 size={16} />
              Global project cases
            </p>
            <h1 className="font-display text-5xl font-semibold leading-[1.04] sm:text-6xl">
              Proven pipe extrusion projects across international markets.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#e4e8f8]">
              Case information extracted from Xinrong project records, covering customers in Europe, Asia, Africa, and the Middle East.
            </p>
          </div>
          <div className="grid gap-4">
            <EmptyImage label="Project Cases Empty Image" className="min-h-[340px] shadow-lift" />
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                <p className="font-display text-3xl font-semibold">{projectCases.length}</p>
                <p className="mt-1 text-sm text-[#e4e8f8]">case records</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                <p className="font-display text-3xl font-semibold">12</p>
                <p className="mt-1 text-sm text-[#e4e8f8]">markets shown</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                <p className="font-display text-3xl font-semibold">PE/PVC</p>
                <p className="mt-1 text-sm text-[#e4e8f8]">core solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cloud py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="mb-12 grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-leaf">Project portfolio</p>
              <h2 className="mt-3 font-display text-4xl font-semibold leading-tight">Customer cases by country and equipment type.</h2>
            </div>
            <p className="leading-8 text-steel">
              Each card summarizes the country, customer name, machinery supplied, and feedback captured from the source page.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projectCases.map((project) => (
              <article className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-line transition hover:-translate-y-1 hover:shadow-lift" key={`${project.country}-${project.customer}`}>
                <div className="overflow-hidden">
                  <img
                    className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-105"
                    src={project.image}
                    alt={project.imageAlt}
                    width="1000"
                    height="750"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between gap-4">
                    <p className="inline-flex rounded-full bg-cloud px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-signal">{project.country}</p>
                    <Globe2 className="text-leaf" size={21} />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-semibold">{project.customer}</h3>
                  <p className="mt-4 text-sm font-bold uppercase tracking-[0.12em] text-steel">Equipment</p>
                  <p className="mt-2 leading-7 text-ink">{project.equipment}</p>
                  <p className="mt-4 text-sm font-bold uppercase tracking-[0.12em] text-steel">Feedback</p>
                  <p className="mt-2 leading-7 text-steel">{project.feedback}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink py-20 text-white sm:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(96,182,48,0.18),transparent_32%),radial-gradient(circle_at_82%_70%,rgba(71,90,167,0.22),transparent_36%)]" />
        <div className="relative mx-auto grid w-full max-w-7xl gap-8 px-5 sm:px-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#dff5d7]">Check machinery near your market</p>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-tight">
              Want to inspect Xinrong machinery in your country or nearby?
            </h2>
            <p className="mt-4 max-w-2xl leading-8 text-[#e4e8f8]">
              Contact the sales engineering team to discuss available references and project requirements.
            </p>
          </div>
          <Link className="inline-flex min-h-14 items-center justify-center gap-2 rounded-md bg-leaf px-7 py-4 font-bold text-white shadow-lift hover:bg-[#4f9b29]" to="/contact-us">
            Contact Us
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}

function ReferenceAboutUsPage() {
  return (
    <>
      <section className="relative flex h-[600px] items-center overflow-hidden bg-signal text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-signal/90 to-signal/40" />
          <img className="h-full w-full object-cover" src={factoryImage} alt="Xinrongplas modern extrusion machinery workshop" />
        </div>
        <div className="relative z-20 mx-auto w-full max-w-7xl px-4 sm:px-8">
          <div className="max-w-2xl text-white">
            <span className="mb-6 inline-block rounded-full bg-leaf px-4 py-1 text-xs font-medium text-white">ESTABLISHED 1996</span>
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">About Xinrongplas</h1>
            <p className="text-lg leading-7 text-[#d1d8ff]">
              Leading Brand in Plastic Pipe Extrusion Machinery Since 1996. Bridging European standards with global manufacturing efficiency.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f7fafc] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h2 className="mb-6 text-2xl font-semibold leading-8 text-signal">Excellence in High-Tech Plastic Machinery</h2>
              <div className="space-y-4 text-base leading-6 text-[#454651]">
                <p>Jiangsu Xinrongplas Machinery Co., Ltd. is a national high-tech enterprise located in Zhangjiagang, specializing in the R&D and manufacture of plastic pipe extrusion lines.</p>
                <p>With over 28 years of industrial expertise, Xinrongplas delivers high-performance equipment that meets stringent international standards and helps customers scale production efficiently.</p>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="aspect-square overflow-hidden rounded-xl border border-[#c5c5d3] bg-[#ebeef0] shadow-sm">
                <img className="h-full w-full object-cover" src={productsImage} alt="Xinrongplas extrusion machinery and production line" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f1f4f6] py-20">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold leading-10 text-signal">Development Milestones</h2>
            <p className="mt-4 text-lg leading-7 text-[#454651]">Over 28 years of innovation and manufacturing excellence since 1996.</p>
          </div>
          <div className="relative">
            <div className="absolute left-0 right-0 top-[210px] z-0 h-1 bg-[#c5c5d3]/30" />
            <div className="absolute left-0 top-[210px] z-0 h-1 w-2/3 bg-leaf" />
            <div className="relative z-10 flex snap-x gap-6 overflow-x-auto pb-20 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {aboutHistory.map((item, index) => (
                <article className="group w-[320px] flex-shrink-0 snap-start" key={item.year}>
                  <div className="flex flex-col">
                    <div className="mb-8 h-[180px] overflow-hidden rounded-xl border border-[#c5c5d3] bg-white shadow-sm transition-transform duration-300 group-hover:scale-105">
                      <img className="h-full w-full object-cover" src={item.image} alt={`Xinrongplas ${item.year} milestone - ${item.title}`} loading="lazy" decoding="async" />
                    </div>
                    <div className="relative mb-6 flex flex-col items-center">
                      <div className={`mb-4 h-6 w-6 rounded-full border-4 border-white shadow-sm ${index % 2 === 0 ? 'bg-leaf' : 'bg-signal'}`} />
                      <span className={`text-2xl font-bold leading-8 ${index % 2 === 0 ? 'text-leaf' : 'text-signal'}`}>{item.year}</span>
                    </div>
                    <div className="h-full rounded-xl border border-[#c5c5d3] bg-white p-6 shadow-sm">
                      <h4 className="mb-2 text-sm font-bold uppercase tracking-[0.05em] text-[#181c1e]">{item.title}</h4>
                      <p className="text-sm leading-5 text-[#454651]">{item.text}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#181c1e] py-12 text-[#f7fafc]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 text-center sm:px-8 md:grid-cols-5">
          {[
            ['1996', 'Founded', BadgeCheck],
            ['60,000m²', 'Workshop', Factory],
            ['200+', 'Expert Team', Users],
            ['80+', 'Countries', Globe2],
            ['50+', 'Patents', ShieldCheck],
          ].map(([value, label, Icon]) => (
            <article className="group" key={label}>
              <Icon className="mx-auto mb-4 text-leaf transition-transform group-hover:scale-110" size={40} />
              <div className="text-2xl font-bold leading-8">{value}</div>
              <div className="text-xs font-medium uppercase tracking-widest text-[#e0e3e5]">{label}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="overflow-hidden bg-[#f1f4f6] py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 px-4 sm:px-8 md:grid-cols-2">
          <div className="relative order-2 md:order-1">
            <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-leaf/10 blur-3xl" />
            <div className="relative z-10 rounded-2xl border border-[#c5c5d3] bg-white p-6 shadow-sm">
              <h3 className="mb-4 flex items-center gap-2 text-xl font-medium leading-7 text-signal">
                <Lightbulb size={24} /> Our Vision
              </h3>
              <p className="text-base leading-6 text-[#454651]">To lead the future of plastic extrusion through intelligent manufacturing, providing sustainable, high-efficiency machinery for the global market.</p>
            </div>
            <div className="relative z-10 mt-6 rounded-2xl bg-signal p-6 text-white shadow-lg">
              <h3 className="mb-4 flex items-center gap-2 text-xl font-medium leading-7">
                <ArrowRight size={24} /> Our Mission
              </h3>
              <p className="text-base leading-6 text-white/90">To bridge high international standards with global cost-efficiency, delivering turnkey solutions that empower manufacturers across 80+ countries.</p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="mb-6 text-3xl font-bold leading-10 text-[#181c1e]">Pioneering Industry 4.0 in Plastic Extrusion</h2>
            <p className="mb-8 text-lg leading-7 text-[#454651]">We do not just build machines; we engineer the backbone of modern infrastructure, from telecommunication ducts to high-pressure water pipes.</p>
            <div className="flex flex-col gap-3">
              {['Smart Control Systems & IoT Integration', 'Energy-Efficient Extrusion Technology'].map((item) => (
                <div className="flex items-center gap-6 rounded-lg border border-[#c5c5d3] bg-white p-3" key={item}>
                  <div className="rounded bg-leaf/10 p-2 text-leaf"><CheckCircle2 size={22} /></div>
                  <span className="text-sm font-semibold uppercase tracking-[0.05em]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto mb-16 max-w-7xl px-4 text-center sm:px-8">
          <h2 className="text-3xl font-bold leading-10 text-signal">Core Competencies</h2>
          <p className="mt-4 text-lg leading-7 text-[#454651]">Why global industry leaders choose Xinrongplas</p>
        </div>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            ['Technological Leadership', 'Continuous R&D in high-speed extrusion, multi-layer co-extrusion, and automated downstream equipment.', Settings],
            ['Turnkey Solutions', 'Complete production line design from material handling to final product packaging and logistics.', PackageCheck],
            ['Sustainability', 'Advanced plastic recycling systems that transform waste into high-quality raw materials for circular economies.', Globe2],
            ['Customization', 'Tailor-made machinery engineered to local market requirements and specialized material properties.', Wrench],
          ].map(([title, text, Icon]) => (
            <article className="group rounded-xl border border-[#c5c5d3] bg-white p-6 transition hover:shadow-md" key={title}>
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-signal/5 text-signal transition-colors group-hover:bg-signal group-hover:text-white">
                <Icon size={30} />
              </div>
              <h3 className="mb-3 text-xl font-bold leading-7">{title}</h3>
              <p className="text-sm leading-5 text-[#454651]">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="overflow-hidden bg-[#181c1e] py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-20 px-4 sm:px-8 lg:flex-row">
          <div className="w-full lg:w-1/2">
            <img className="aspect-video w-full rounded-2xl border border-white/10 object-cover shadow-2xl" src={pePipeFeatureImage} alt="Xinrongplas manufacturing quality control and extrusion line" />
          </div>
          <div className="w-full text-[#f7fafc] lg:w-1/2">
            <h2 className="mb-6 text-3xl font-bold leading-10">World-Class Manufacturing Facility</h2>
            <p className="mb-8 text-lg leading-7 text-[#e0e3e5]">Our 60,000m² facility is the heart of our operations. Every component is subjected to rigorous QC checks to ensure lifetime reliability.</p>
            <ul className="space-y-4">
              {['Zebra-Stripe Quality Control', 'CE & ISO Certified'].map((item) => (
                <li className="flex items-start gap-6" key={item}>
                  <CheckCircle2 className="mt-1 text-leaf" size={24} />
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-[0.05em]">{item}</h4>
                    <p className="text-sm leading-5 text-white/80">Global compliance and systematic inspection protocols throughout manufacturing.</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f7fafc] py-20">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8">
          <div className="relative overflow-hidden rounded-[2rem] bg-signal p-12 text-center text-white shadow-2xl md:p-20">
            <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-leaf opacity-10" />
            <h2 className="mb-4 text-3xl font-bold leading-10">Ready to start your project?</h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg leading-7 text-[#d1d8ff]">Contact our technical experts today for a consultation and a detailed quotation tailored to your production needs.</p>
            <div className="flex flex-col justify-center gap-6 sm:flex-row">
              <Link className="flex items-center justify-center gap-2 rounded-xl bg-leaf px-12 py-4 text-sm font-semibold text-white transition-transform hover:scale-105" to="/contact-us">
                Request Quote <ArrowRight size={18} />
              </Link>
              <Link className="rounded-xl border border-white/30 px-12 py-4 text-sm font-semibold transition hover:bg-white/10" to="/contact-us">
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function AboutUsPage() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto grid min-h-[520px] w-full max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-leaf">About Our Company</p>
            <h1 className="mt-4 max-w-4xl font-display text-5xl font-semibold leading-[1.04] text-ink sm:text-6xl">
              Jiangsu Xinrongplas Machinery Co., Ltd
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-steel">
              Founded in 1996, Xinrong has continuously focused on plastic extrusion machinery and has become recognized as a professional manufacturer.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className="inline-flex min-h-14 items-center justify-center gap-2 rounded-md bg-leaf px-7 py-4 font-bold text-white shadow-lift hover:bg-[#4f9b29]" href="#company-profile">
                Explore Company
                <ArrowRight size={18} />
              </a>
              <Link className="inline-flex min-h-14 items-center justify-center gap-2 rounded-md border border-line px-7 py-4 font-bold text-signal hover:border-signal" to="/contact-us">
                Contact Us
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
          <div className="rounded-2xl border border-line bg-cloud p-5 shadow-soft">
            <EmptyImage label="About Xinrong Empty Image" className="min-h-[360px] shadow-sm" />
          </div>
        </div>
      </section>

      <section className="bg-cloud py-14">
        <div className="mx-auto grid w-full max-w-7xl gap-4 px-5 sm:grid-cols-4 sm:px-8">
          {aboutStats.map(([value, label]) => (
            <article className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-line" key={label}>
              <p className="font-display text-4xl font-semibold text-signal">{value}</p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-steel">{label}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="company-profile" className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-leaf">Who We Are</p>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-tight">A long-term partner for plastic extrusion solutions.</h2>
          </div>
          <div className="grid gap-5 text-lg leading-8 text-steel">
            <p>Xinrong has provided turnkey projects for more than 80 countries all over the world with win-win cooperation.</p>
            <p>Quality is regarded as the life of the company, and customer satisfaction is the priority.</p>
            <p>Xinrong aims to be a strong choice and partner for plastic extrusion solutions.</p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink py-20 text-white sm:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(96,182,48,0.18),transparent_32%),radial-gradient(circle_at_84%_68%,rgba(71,90,167,0.22),transparent_36%)]" />
        <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <EmptyImage label="Team and CNC Workshop Empty Image" className="min-h-[420px] shadow-lift" />
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#dff5d7]">Our Team</p>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-tight">200 experienced staff with engineering and after-sale depth.</h2>
            <p className="mt-5 leading-8 text-[#e4e8f8]">
              Xinrong welcomes customers to visit the workshop and looks forward to long-term cooperation.
            </p>
            <div className="mt-8 grid gap-4">
              {aboutStrengths.map(({ title, text }) => (
                <article className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur" key={title}>
                  <CheckCircle2 className="text-leaf" size={22} />
                  <h3 className="mt-4 font-display text-xl font-semibold">{title}</h3>
                  <p className="mt-2 leading-7 text-[#e4e8f8]">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cloud py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-leaf">Our Culture</p>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-tight">Practical values behind reliable machinery.</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {aboutCulture.map(([title, text]) => (
              <article className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-line" key={title}>
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-signal">{title}</p>
                <p className="mt-4 leading-8 text-steel">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 sm:px-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-leaf">Customize Your Plastic Pipe Extrusion Machinery</p>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-tight">Get a custom quote in less than five minutes.</h2>
          </div>
          <Link className="inline-flex min-h-14 items-center justify-center gap-2 rounded-md bg-leaf px-7 py-4 font-bold text-white shadow-lift hover:bg-[#4f9b29]" to="/contact-us">
            Contact Us
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}

function ServicesPage() {
  return (
    <div className="bg-[#f7fafc] text-ink">
      <section className="relative flex min-h-[560px] items-center overflow-hidden bg-ink text-white">
        <img className="absolute inset-0 h-full w-full scale-105 object-cover opacity-[0.42]" src={factoryImage} alt="Xinrongplas service and manufacturing workshop" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#11162f] via-[#18204a]/86 to-[#475aa7]/42" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#f7fafc] to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-5 py-24 sm:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-leaf">Xinrongplas Service System</p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-6xl sm:leading-[1.08]">Comprehensive service solutions for industrial pipe extrusion projects.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#e4e8f8]">
              From early investment planning to installation, training, lifelong technical support, and spare parts optimization, Xinrongplas supports every stage of your equipment life cycle.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link className="inline-flex min-h-14 items-center justify-center gap-2 rounded-md bg-leaf px-7 py-4 font-bold text-white shadow-lift hover:bg-[#4f9b29]" to="/contact-us">
                Contact Support
                <ArrowRight size={18} />
              </Link>
              <a className="inline-flex min-h-14 items-center justify-center rounded-md border border-white/35 px-7 py-4 font-bold text-white hover:bg-white/10" href="#pre-sale">
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="sticky top-20 z-40 border-y border-line bg-white/92 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-7xl gap-3 overflow-x-auto px-5 py-4 sm:px-8">
          {serviceAnchors.map(([label, href, Icon]) => (
            <a className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-md border border-line bg-cloud px-4 text-sm font-bold text-signal transition hover:border-signal hover:bg-white" href={href} key={label}>
              <Icon size={16} />
              {label}
            </a>
          ))}
        </div>
      </div>

      <section id="pre-sale" className="scroll-mt-36 bg-[#f7fafc] py-20 sm:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-leaf">Phase 01</p>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-signal">Pre-sale consulting and project planning.</h2>
            <p className="mt-5 leading-8 text-steel">
              Service begins before purchase. Xinrongplas sales engineers are trained to communicate technical needs, evaluate feasibility, and design a practical equipment plan.
            </p>
            <div className="mt-8 grid gap-4">
              {preSaleServices.map(([title, text, Icon]) => (
                <article className="group flex gap-4 rounded-xl border border-line bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lift" key={title}>
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-signal/10 text-signal transition group-hover:bg-signal group-hover:text-white">
                    <Icon size={21} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-steel">{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl bg-ink p-3 shadow-lift">
            <img className="h-[620px] w-full rounded-xl object-cover transition duration-700 hover:scale-105" src={heroImage} alt="Industrial pipe extrusion planning and machinery layout" />
            <div className="absolute inset-3 rounded-xl bg-gradient-to-t from-ink/72 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 rounded-xl border border-white/12 bg-white/10 p-5 text-white backdrop-blur">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-leaf">Turnkey Planning</p>
              <p className="mt-2 text-2xl font-semibold">Factory layout, auxiliary equipment, and ROI guidance before investment.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="sale" className="scroll-mt-36 bg-cloud py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-leaf">Phase 02</p>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-signal">Transparent manufacturing and delivery service.</h2>
            <p className="mt-5 leading-8 text-steel">From production updates to factory acceptance testing and export packing, every project stage is documented and communicated clearly.</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {saleServices.map(([title, text, Icon]) => (
              <article className="group rounded-2xl border border-line bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lift" key={title}>
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-signal text-white">
                  <Icon size={22} />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-steel">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="after-sale" className="scroll-mt-36 bg-white py-20 sm:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-leaf">Phase 03</p>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-signal">Lifelong after-sale commitment.</h2>
            <p className="mt-5 leading-8 text-steel">Xinrongplas service covers professional installation, operator training, remote diagnostics, warranty support, and continuous upgrades.</p>
            <div className="mt-8 grid gap-5">
              {afterSaleHighlights.map(([title, text, Icon]) => (
                <div className="flex gap-4" key={title}>
                  <Icon className="mt-1 shrink-0 text-leaf" size={23} />
                  <div>
                    <h3 className="font-display text-lg font-semibold">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-steel">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-lift">
            <div className="flex items-center justify-between gap-4 bg-signal p-5 text-white">
              <h3 className="text-sm font-bold uppercase tracking-[0.16em]">Support Service Matrix</h3>
              <span className="rounded bg-leaf px-3 py-1 text-xs font-bold text-white">24/7 Response</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-line bg-cloud">
                    <th className="p-5 text-sm font-bold">Service Type</th>
                    <th className="p-5 text-sm font-bold">Details</th>
                    <th className="p-5 text-sm font-bold">Response</th>
                  </tr>
                </thead>
                <tbody>
                  {supportMatrix.map(([type, detail, response], index) => (
                    <tr className={`border-b border-line ${index % 2 === 1 ? 'bg-cloud' : 'bg-white'}`} key={type}>
                      <td className="p-5 font-bold">{type}</td>
                      <td className="p-5 text-sm leading-6 text-steel">{detail}</td>
                      <td className="p-5 font-bold text-signal">{response}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section id="spare-parts" className="scroll-mt-36 bg-cloud py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="grid gap-8 rounded-2xl border border-line bg-white p-6 shadow-lift sm:p-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-leaf">Premium Parts Service</p>
              <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-signal">Unrivaled parts reliability.</h2>
              <div className="mt-8 grid gap-5">
                <article className="rounded-xl border-l-4 border-leaf bg-leaf/10 p-6">
                  <h3 className="font-display text-xl font-semibold text-[#2d7100]">2-Year Free Parts Exchange</h3>
                  <p className="mt-3 leading-7 text-steel">Xinrongplas provides a 2-year free parts return and exchange service and covers courier and logistics fees during this period.</p>
                </article>
                <article className="rounded-xl border-l-4 border-signal bg-signal/10 p-6">
                  <h3 className="font-display text-xl font-semibold text-signal">Exclusive Existing Customer Discount</h3>
                  <p className="mt-3 leading-7 text-steel">For parts outside the warranty period, existing customers receive a dedicated 20% discount to reduce long-term maintenance costs.</p>
                </article>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {sparePartStats.map(([value, label]) => (
                <div className="rounded-xl border border-line bg-cloud p-6 text-center" key={label}>
                  <p className="font-display text-4xl font-semibold text-signal">{value}</p>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-steel">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-signal py-20 text-white sm:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(96,182,48,0.24),transparent_34%),radial-gradient(circle_at_84%_70%,rgba(255,255,255,0.14),transparent_36%)]" />
        <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <h2 className="font-display text-4xl font-semibold leading-tight">Precision tracking, global presence.</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#d1d8ff]">
              Every Xinrongplas machine is assigned a unique digital ID, allowing the technical team to access exact drawings and service history in seconds.
            </p>
            <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
              {[
                ['80+', 'Countries Served'],
                ['24/7', 'Remote Support'],
                ['15k+', 'Machine IDs'],
              ].map(([value, label]) => (
                <div className="rounded-xl border border-white/12 bg-white/10 p-5 backdrop-blur" key={label}>
                  <p className="font-display text-3xl font-semibold text-leaf">{value}</p>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[0.12em] text-[#e4e8f8]">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-h-[360px] overflow-hidden rounded-2xl border border-white/12 bg-white/10 p-6 shadow-lift">
            <Globe2 className="absolute right-8 top-8 text-white/18" size={150} />
            <div className="absolute inset-x-6 bottom-6 rounded-xl border border-white/12 bg-ink/40 p-5 backdrop-blur">
              <p className="leading-7 text-[#e4e8f8]">"Xinrong's database system could identify a custom seal for our 12-year-old extruder using just the machine ID number."</p>
              <p className="mt-3 text-sm font-bold uppercase tracking-[0.14em] text-leaf">Factory Director, Brazil</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <div className="rounded-2xl border border-line bg-cloud p-8 shadow-sm sm:p-12">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-leaf">Ready to Start Your Project?</p>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-signal">Get service support or a custom equipment quote.</h2>
            <p className="mx-auto mt-5 max-w-2xl leading-8 text-steel">Whether you need a full turnkey solution or technical support for existing Xinrong equipment, our specialists are ready to help.</p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link className="inline-flex min-h-14 items-center justify-center rounded-md bg-signal px-8 py-4 font-bold text-white hover:bg-[#2d418d]" to="/contact-us">
                Contact Support
              </Link>
              <Link className="inline-flex min-h-14 items-center justify-center rounded-md border-2 border-leaf px-8 py-4 font-bold text-leaf hover:bg-leaf hover:text-white" to="/contact-us">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function VideoPage() {
  return (
    <div className="bg-[#f7fafc] text-ink">
      <section className="relative overflow-hidden bg-signal py-24 text-white sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(96,182,48,0.32),transparent_32%),radial-gradient(circle_at_86%_72%,rgba(255,255,255,0.16),transparent_36%)]" />
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="relative mx-auto max-w-7xl px-5 text-center sm:px-8">
          <p className="mx-auto inline-flex rounded-full bg-leaf px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-white">Resource Library</p>
          <h1 className="mx-auto mt-6 max-w-4xl font-display text-4xl font-semibold leading-tight sm:text-6xl sm:leading-[1.08]">Video Resource Center</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#d1d8ff]">
            Explore Xinrongplas machinery through technical demos, factory views, project references, and production line showcases.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-leaf">Industrial Vision</p>
              <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-signal">Watch machinery, projects, and factory capability.</h2>
            </div>
            <Link className="inline-flex min-h-12 items-center justify-center rounded-md bg-signal px-6 text-sm font-bold text-white hover:bg-[#2d418d]" to="/contact-us">
              Schedule Live Demo
            </Link>
          </div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {videoResources.map(({ category, title, duration, image, href }) => (
              <Link className="group block" to={href} key={title}>
                <div className="relative aspect-video overflow-hidden rounded-2xl border border-line bg-[#e5e9eb] shadow-sm">
                  <img className="h-full w-full object-cover transition duration-500 group-hover:scale-105" src={image} alt={title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/76 via-ink/10 to-transparent opacity-80" />
                  <div className="absolute inset-0 grid place-items-center bg-signal/0 opacity-0 transition duration-300 group-hover:bg-signal/30 group-hover:opacity-100">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-signal shadow-lift">
                      <PlayCircle size={34} />
                    </div>
                  </div>
                  <span className="absolute bottom-4 left-4 rounded bg-black/65 px-2.5 py-1 text-xs font-bold text-white backdrop-blur">{duration}</span>
                </div>
                <div className="mt-5">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-leaf">{category}</p>
                  <h3 className="mt-2 font-display text-xl font-semibold leading-7 transition group-hover:text-signal">{title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cloud py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <div className="rounded-2xl border border-line bg-white p-8 shadow-lift sm:p-12">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-leaf">Need a Closer Look?</p>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-signal">Want to see our machines in person?</h2>
            <p className="mx-auto mt-5 max-w-2xl leading-8 text-steel">
              Join a guided factory visit or schedule a live technical demonstration tailored to your pipe diameter, material, and output target.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link className="inline-flex min-h-14 w-full items-center justify-center rounded-md bg-signal px-8 py-4 font-bold text-white hover:bg-[#2d418d] sm:w-auto" to="/contact-us">
                Schedule a Live Demo
              </Link>
              <Link className="inline-flex min-h-14 w-full items-center justify-center rounded-md border-2 border-leaf px-8 py-4 font-bold text-leaf hover:bg-leaf hover:text-white sm:w-auto" to="/contact-us">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function NewsPage() {
  const featuredPost = newsPosts[0];
  const archivePosts = newsPosts.slice(1);
  const categories = ['All', 'Technical Articles', 'Company News', 'Exhibitions', 'Industry Trends'];

  return (
    <div className="bg-[#f7fafc] text-ink">
      <section className="border-b border-line bg-[#f7fafc] bg-[radial-gradient(rgba(71,90,167,0.12)_1px,transparent_1px)] [background-size:20px_20px] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-leaf">TechPlast Insights</p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-signal sm:text-6xl sm:leading-[1.08]">News & Technical Insights</h1>
            <p className="mt-6 text-lg leading-8 text-steel">
              Stay updated with plastic extrusion technology, project milestones, equipment upgrades, and industry trends from Xinrongplas.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <button
                className={`min-h-11 rounded-md px-4 text-sm font-bold transition ${index === 0 ? 'bg-signal text-white' : 'border border-line bg-white text-steel hover:border-signal hover:text-signal'}`}
                type="button"
                key={category}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Link className="group grid overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition hover:border-signal hover:shadow-lift lg:grid-cols-[1.35fr_0.95fr]" to="/contact-us">
            <div className="relative min-h-[320px] overflow-hidden lg:min-h-[460px]">
              <img className="h-full w-full object-cover transition duration-500 group-hover:scale-105" src={featuredPost.image} alt={featuredPost.title} />
              <div className="absolute left-5 top-5 rounded bg-leaf px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-white">{featuredPost.category}</div>
            </div>
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-steel">{featuredPost.date}</p>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-signal transition group-hover:text-[#2d418d]">{featuredPost.title}</h2>
              <p className="mt-5 leading-8 text-steel">{featuredPost.excerpt}</p>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.08em] text-leaf">
                Read Article
                <ArrowRight size={16} />
              </span>
            </div>
          </Link>
        </div>
      </section>

      <section className="pb-20 sm:pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {archivePosts.map(({ category, date, title, excerpt, image }) => (
              <article className="group flex min-h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition hover:-translate-y-1 hover:border-signal hover:shadow-lift" key={title}>
                <div className="relative aspect-video overflow-hidden bg-[#e5e9eb]">
                  <img className="h-full w-full object-cover transition duration-500 group-hover:scale-105" src={image} alt={title} loading="lazy" decoding="async" />
                  <span className="absolute right-4 top-4 rounded bg-leaf px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-white">{category}</span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-steel">{date}</p>
                  <h3 className="mt-3 font-display text-xl font-semibold leading-7 text-signal transition group-hover:text-[#2d418d]">{title}</h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-steel">{excerpt}</p>
                  <Link className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.08em] text-leaf" to="/contact-us">
                    Read More
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <nav className="mt-14 flex items-center justify-center gap-3" aria-label="News pagination">
            <button className="flex h-10 w-10 items-center justify-center rounded-md border border-line text-steel hover:border-signal hover:text-signal" type="button">
              <ChevronLeft size={18} />
            </button>
            {[1, 2, 3].map((page) => (
              <button className={`flex h-10 w-10 items-center justify-center rounded-md text-sm font-bold ${page === 1 ? 'bg-signal text-white' : 'border border-line text-steel hover:border-signal hover:text-signal'}`} type="button" key={page}>
                {page}
              </button>
            ))}
            <button className="flex h-10 items-center justify-center rounded-md border border-line px-4 text-sm font-bold text-steel hover:border-signal hover:text-signal" type="button">
              Next
            </button>
          </nav>
        </div>
      </section>

      <section className="border-t border-line bg-cloud py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <Mail className="mx-auto text-leaf" size={46} />
          <h2 className="mt-5 font-display text-4xl font-semibold leading-tight text-signal">Join Our Technical Newsletter</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-steel">
            Get monthly engineering reports, material science updates, and the latest machinery innovations delivered to your inbox.
          </p>
          <form className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
            <input className="min-h-14 flex-1 rounded-md border border-line bg-white px-4 outline-none transition focus:border-signal" placeholder="professional@company.com" type="email" />
            <button className="min-h-14 rounded-md bg-leaf px-7 font-bold text-white hover:bg-[#4f9b29]" type="button">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

function CertificatePage() {
  const certificateStats = [
    ['19', 'Certificates Displayed'],
    ['ISO9001', 'Quality System'],
    ['CE / SGS', 'Compliance Verification'],
    ['15', 'Patent Certificates'],
  ];
  const certificateCategories = ['All', 'Enterprise Qualification', 'Quality System', 'International Compliance', 'Patent'];

  return (
    <div className="bg-[#f7fafc] text-ink">
      <section className="relative overflow-hidden bg-ink py-24 text-white sm:py-28">
        <img className="absolute inset-0 h-full w-full object-cover opacity-24" src={factoryImage} alt="Xinrongplas certified manufacturing workshop" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#11162f] via-[#18204a]/88 to-[#475aa7]/60" />
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:22px_22px]" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-leaf">Certified Manufacturing</p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-6xl sm:leading-[1.08]">Certificate</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#e4e8f8]">
              Xinrongplas maintains enterprise qualifications, quality system certification, international compliance documents, and patent records for plastic pipe extrusion machinery.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {certificateStats.map(([value, label]) => (
              <div className="rounded-xl border border-white/12 bg-white/10 p-5 backdrop-blur" key={label}>
                <p className="font-display text-3xl font-semibold text-leaf">{value}</p>
                <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-[#e4e8f8]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-10 grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-leaf">Quality Credentials</p>
              <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-signal">Enterprise certificates and patent portfolio.</h2>
            </div>
            <p className="leading-8 text-steel">
              The original certificate archive includes High-tech Enterprise, ISO9001, SGS, CE, and multiple patent certificates. Images are stored locally with SEO-friendly filenames and descriptive alt text.
            </p>
          </div>

          <div className="mb-10 flex flex-wrap gap-3">
            {certificateCategories.map((category, index) => (
              <button
                className={`min-h-11 rounded-md px-4 text-sm font-bold transition ${index === 0 ? 'bg-signal text-white' : 'border border-line bg-white text-steel hover:border-signal hover:text-signal'}`}
                type="button"
                key={category}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {certificateItems.map(({ title, category, image, alt, landscape }) => (
              <article className={`group overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition hover:-translate-y-1 hover:border-signal hover:shadow-lift ${landscape ? 'sm:col-span-2' : ''}`} key={title}>
                <div className={`${landscape ? 'aspect-[16/10]' : 'aspect-[3/4]'} overflow-hidden bg-[#e5e9eb] p-3`}>
                  <img className="h-full w-full rounded-lg object-contain transition duration-500 group-hover:scale-[1.03]" src={image} alt={alt} loading="lazy" decoding="async" />
                </div>
                <div className="border-t border-line p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-leaf">{category}</p>
                  <h3 className="mt-2 font-display text-xl font-semibold text-signal">{title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cloud py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-leaf">Need Technical Documents?</p>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-signal">Request certificate files and machinery compliance details.</h2>
          </div>
          <Link className="inline-flex min-h-14 items-center justify-center gap-2 rounded-md bg-signal px-7 py-4 font-bold text-white shadow-lift hover:bg-[#2d418d]" to="/contact-us">
            Contact Us
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}

function ProductDetailPage({
  title,
  description,
  gallery,
  size,
  automation = 'High',
  featureCards,
  videoEmbed,
  parameterHeaders = ['Model', 'Pipe Range (mm)', 'Output Capacity (kg/h)', 'Main Motor Power (kW)'],
  parameterRows,
  components,
  ctaTitle = 'Need a Custom Solution?',
}) {
  const mainImage = gallery[0];
  const thumbnails = gallery.slice(1, 7);

  return (
    <div className="bg-[#f7fafc] pb-1 text-[#181c1e]">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <nav className="flex items-center gap-2 py-6 text-xs font-medium text-[#454651]">
          <Link className="hover:text-[#475AA7]" to="/">Home</Link>
          <ChevronRight size={16} />
          <Link className="hover:text-[#475AA7]" to="/products">Products</Link>
          <ChevronRight size={16} />
          <span className="font-semibold text-[#181c1e]">{title}</span>
        </nav>

        <section className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-12">
          <div className="flex flex-col gap-6 md:col-span-7">
            <div className="overflow-hidden rounded border border-[#c5c5d3] bg-white">
              <img className="h-[400px] w-full object-contain" src={mainImage.image} alt={mainImage.alt} width="1200" height="800" loading="eager" decoding="async" />
            </div>
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
              {thumbnails.map(({ image, alt }, index) => (
                <div className="group aspect-square cursor-pointer overflow-hidden rounded border border-[#c5c5d3] transition-colors hover:border-[#475AA7]" key={alt}>
                  <img className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" src={image} alt={`${title} detail ${index + 1}`} width="300" height="300" loading="lazy" decoding="async" />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-start pt-1 md:col-span-5">
            <div className="mb-3">
              <span className="rounded-full bg-[#60b630] px-3 py-1 text-xs font-medium uppercase tracking-wider text-white">Industrial Grade</span>
            </div>
            <h1 className="mb-6 text-[32px] font-semibold leading-10 text-[#475aa7]">{title}</h1>
            <p className="mb-12 text-lg leading-7 text-[#454651]">{description}</p>
            <div className="mb-12 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 rounded border border-[#c5c5d3] bg-[#ebeef0] px-6 py-2">
                <Factory className="text-[#475aa7]" size={20} />
                <span className="text-sm font-semibold text-[#181c1e]">Size: {size}</span>
              </div>
              <div className="flex items-center gap-2 rounded border border-[#c5c5d3] bg-[#ebeef0] px-6 py-2">
                <Settings className="text-[#475aa7]" size={20} />
                <span className="text-sm font-semibold text-[#181c1e]">Automation: {automation}</span>
              </div>
            </div>
            <div className="flex flex-col gap-6 sm:flex-row">
              <Link className="flex flex-1 items-center justify-center gap-2 rounded bg-[#475aa7] px-12 py-4 text-sm font-semibold text-white transition-opacity hover:opacity-90" to="/contact-us">
                <MessageCircle size={20} />
                Request Quote
              </Link>
              <Link className="flex flex-1 items-center justify-center gap-2 rounded border border-[#475aa7] px-12 py-4 text-sm font-semibold text-[#475aa7] transition-colors hover:bg-[#475aa7]/5" to="/contact-us">
                <ArrowRight size={20} />
                Catalog
              </Link>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="mb-12 text-center text-2xl font-semibold leading-8">Advanced Engineering Features</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featureCards.map(([featureTitle, text, Icon]) => (
              <article className="rounded border border-[#c5c5d3] bg-white p-6 transition-shadow hover:shadow-md" key={featureTitle}>
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded bg-[#475aa7]/10 text-[#475aa7]">
                  <Icon size={24} />
                </div>
                <h3 className="mb-3 text-xl font-medium leading-7 text-[#475aa7]">{featureTitle}</h3>
                <p className="text-sm leading-5 text-[#454651]">{text}</p>
              </article>
            ))}
          </div>
        </section>

        {videoEmbed ? (
          <section className="mb-20 rounded-xl bg-[#f1f4f6] p-8 sm:p-12">
            <h2 className="mb-12 text-center text-2xl font-semibold leading-8">Watch it in Action</h2>
            <div className="mx-auto aspect-video max-w-4xl overflow-hidden rounded-xl border border-[#c5c5d3] shadow-xl">
              <iframe
                className="h-full w-full"
                src={videoEmbed}
                title={`${title} in Action`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </section>
        ) : null}

        <section className="mb-20">
          <h2 className="mb-12 text-2xl font-semibold leading-8">Technical Specifications</h2>
          <div className="overflow-x-auto rounded border border-[#c5c5d3] bg-white">
            <table className="w-full min-w-[760px] border-collapse text-left">
              <thead>
                <tr className="bg-[#475aa7] text-white">
                  {parameterHeaders.map((header) => (
                    <th className="p-6 text-sm font-semibold" key={header}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {parameterRows.map((row, index) => (
                  <tr className={`border-b border-[#c5c5d3] transition-colors hover:bg-[#f1f4f6] ${index % 2 === 1 ? 'bg-[#f1f4f6]' : 'bg-white'}`} key={row.join('-')}>
                    {row.map((cell, cellIndex) => (
                      <td className={`p-6 ${cellIndex === 0 ? 'font-semibold' : ''}`} key={cell}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="mb-12 text-2xl font-semibold leading-8">System Components</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {components.map(({ title: componentTitle, image }) => (
              <article className="group cursor-pointer" key={componentTitle}>
                <div className="mb-3 aspect-video overflow-hidden rounded border border-[#c5c5d3] bg-[#e5e9eb]">
                  <img className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" src={image} alt={componentTitle} width="900" height="600" loading="lazy" decoding="async" />
                </div>
                <h4 className="text-sm font-semibold text-[#181c1e] transition-colors group-hover:text-[#475aa7]">{componentTitle}</h4>
              </article>
            ))}
          </div>
        </section>

        <section className="relative mb-20 overflow-hidden rounded-xl bg-[#475aa7] p-12 text-center sm:p-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.16),transparent_48%)]" />
          <div className="relative">
            <h2 className="mb-6 text-[32px] font-semibold leading-10 text-white">{ctaTitle}</h2>
            <p className="mx-auto mb-12 max-w-2xl text-lg leading-7 text-[#d1d8ff]">
              Our engineering team can customize the extrusion line configuration based on your specific material requirements and factory layout.
            </p>
            <div className="flex flex-col justify-center gap-6 sm:flex-row">
              <Link className="rounded bg-[#60b630] px-12 py-4 text-sm font-semibold text-white transition-transform hover:scale-105" to="/contact-us">
                Contact Our Engineers
              </Link>
              <Link className="rounded border-2 border-white px-12 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10" to="/project-cases">
                View Project References
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function PePipeExtrusionLinePage() {
  return (
    <ProductDetailPage
      title="PE Pipe Extrusion Line"
      description="High-speed, energy-saving solutions for water, gas, and cable protection pipes (Ø16 - Ø1600 mm)."
      gallery={pePipeGallery}
      size="Ø16 - Ø2000mm"
      featureCards={pePipeFeatureCards}
      videoEmbed="https://www.youtube.com/embed/VIFfEr4YWlI"
      parameterRows={pePipeParameters}
      components={peComponentCards}
      ctaTitle="Need a Custom PE Pipe Extrusion Solution?"
    />
  );
}

function PvcPipeExtrusionLinePage() {
  return (
    <ProductDetailPage
      title="PVC Pipe Extrusion Line"
      description="A high-performance solution for the manufacturing of high-quality PVC pipes. Designed for precision, durability, and maximum output with minimal energy consumption."
      gallery={pvcPipeGallery}
      size="Ø16 - Ø1000mm"
      featureCards={pvcPipeFeatureCards}
      videoEmbed="https://www.youtube.com/embed/_UxwY8U5hys"
      parameterRows={pvcPipeParameters}
      components={pvcComponentCards}
      ctaTitle="Need a Custom PVC Pipe Extrusion Solution?"
    />
  );
}

function ExtraProductPage({ slug }) {
  const product = extraProductConfigs[slug];

  return (
    <ProductDetailPage
      title={product.title}
      description={product.description}
      gallery={product.gallery}
      size={product.size}
      featureCards={product.featureCards}
      videoEmbed={product.videoEmbed}
      parameterHeaders={product.parameterHeaders}
      parameterRows={product.parameterRows}
      components={product.components}
      ctaTitle={`Need a Custom ${product.title} Solution?`}
    />
  );
}

function App() {
  return (
    <BrowserRouter>
      <main className="min-h-screen bg-white text-ink">
        <Header />
        <Routes>
          <Route path="/" element={<ReferenceHomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/contact-us" element={<ReferenceContactUsPage />} />
          <Route path="/project-cases" element={<ProjectCasesPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/video" element={<VideoPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/certificate" element={<CertificatePage />} />
          <Route path="/about-us" element={<ReferenceAboutUsPage />} />
          <Route path="/pro/pe-pipe-extrusion-line" element={<PePipeExtrusionLinePage />} />
          <Route path="/pro/pvc-pipe-extrusion-line" element={<PvcPipeExtrusionLinePage />} />
          <Route path="/pro/pvc-o-pipe-extrusion-line" element={<ExtraProductPage slug="pvc-o-pipe-extrusion-line" />} />
          <Route path="/pro/ppr-pipe-extrusion-line" element={<ExtraProductPage slug="ppr-pipe-extrusion-line" />} />
          <Route path="/pro/double-wall-corrugated-pipe-extrusion-line" element={<ExtraProductPage slug="double-wall-corrugated-pipe-extrusion-line" />} />
          <Route path="/pro/pe-hollow-wall-winding-pipe-extrusion-line" element={<ExtraProductPage slug="pe-hollow-wall-winding-pipe-extrusion-line" />} />
          <Route path="/pro/pex-al-pex-pipe-machine" element={<ExtraProductPage slug="pex-al-pex-pipe-machine" />} />
          <Route path="/pro/rtp-tcp-pipe-production-line" element={<ExtraProductPage slug="rtp-tcp-pipe-production-line" />} />
          <Route path="/pro/automatic-pipe-drilling-slotting-machine" element={<ExtraProductPage slug="automatic-pipe-drilling-slotting-machine" />} />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  );
}

createRoot(document.getElementById('root')).render(<App />);
