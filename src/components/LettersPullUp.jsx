import  React from 'react';
import { motion, useInView } from 'framer-motion';
 
const LettersPullUp = ({text})=>{
  
  const splittedText = text.split('');
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="flex">
      {splittedText.map((current, i) => (
        <motion.span
          key={i}
          ref={ref}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 10 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: i*0.05 }}
          
        >
          {current == ' ' ? <span>&nbsp;</span> : current}
        </motion.span>
      ))}
    </div>
  );
}

export default LettersPullUp