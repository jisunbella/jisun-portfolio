import { useEffect, useState } from 'react';

export default function useActiveSection() {
  const [activeHash, setActiveHash] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let currentSectionId = '';

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom > window.innerHeight / 2
        ) {
          currentSectionId = `#${section.id}`;
        }
      });

      setActiveHash(currentSectionId);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 초기 호출

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return activeHash;
}
