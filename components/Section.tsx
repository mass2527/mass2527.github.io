import {useContext} from 'react';

import {LevelContext} from 'contexts/level';

interface SectionProps {
  children: JSX.Element | JSX.Element[];
}

const Section = ({children}: SectionProps) => {
  const level = useContext(LevelContext);

  return (
    <section>
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
};

export default Section;
