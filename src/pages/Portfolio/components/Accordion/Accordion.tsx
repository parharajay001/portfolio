// example 2
import { useState } from 'react';
import './Accordion.css';
const Accordion = ({
  items,
}: {
  items: { id: string; title: string; content: React.ReactNode }[];
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='accordion'>
      {items.map((item, index: number) => (
        <div key={item.id} className='accordion-item'>
          <div className='accordion-header' onClick={() => handleToggle(index)}>
            {item.title}
          </div>
          <div className={activeIndex === index ? 'accordion-content active' : 'accordion-content'}>
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};
export default Accordion;
