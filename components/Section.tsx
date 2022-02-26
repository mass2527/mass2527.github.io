import {LevelContext} from 'contexts/level';
import {useContext} from 'react';

interface SectionProps {
  children: JSX.Element | JSX.Element[];
}

function Section({children}: SectionProps) {
  const level = useContext(LevelContext);

  return (
    <section>
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}

export default Section;
