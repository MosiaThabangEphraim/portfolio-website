import fnasAwardImg from '../assets/fnas-deans-award.jpg';
import gradStarCertificateImg from '../assets/GradStar Top 100.jpeg';
import goldenKeyPDF from '../assets/golden-key-certificate.pdf';

export const awards = [
  {
    title: 'INVESTEC TECH SCHOLARSHIP RECIPIENT',
    organization: 'Investec Bank',
    year: 2026,
    description:
      'This scholarship is awarded to top performing tech talent, who are in their final year of studies, and includes industry mentorship and workplace readiness programs.',
  },
  {
    title: 'GRADSTAR 2025 TOP 100',
    organization: 'GradStar Awards',
    year: 2025,
    description:
      'GradStar awards recognizes the Top 100 students across the country based on leadership qualities and readiness for the workplace.',
    certificateUrl: gradStarCertificateImg,
    certificateLabel: 'View Certificate',
  },
  {
    title: "FACULTY OF NATURAL AND AGRICULTURAL SCIENCES DEAN'S AWARD",
    organization: 'North-West University, Vanderbijlpark Campus',
    year: 2025,
    description:
      'Presented to the top two performing students in each school in the faculty per campus. Recognizes my outstanding academic performance for the 2024 academic year with a year average of 86%.',
    certificateUrl: fnasAwardImg,
    certificateLabel: 'View Certificate',
  },
  {
    title: 'GOLDEN KEY HONOUR SOCIETY MEMBER',
    organization: 'Golden Key International Honour Society',
    year: 2025,
    description:
      'Recognizes top-performing students within the top 15% in their field. An invitation-only society celebrating academic excellence, leadership, and service.',
    certificateUrl: goldenKeyPDF,
    certificateLabel: 'View Certificate',
  },
];
