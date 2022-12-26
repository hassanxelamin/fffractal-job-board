import React from 'react';
import styled from 'styled-components';
import TypeIt from 'typeit-react';
import { Gradient, GradientTextWrap } from '../../helpers/css-mixins/gradient';

export function TitleSection() {
  return (
    <div className="flex items-center justify-center overflow-hidden h-[603px]">
      <div className="flex flex-col items-center justify-center">
        <div className="text-center text-[92px] font-bold w-[1250px] h-[260px] leading-[40px] mb-[26px]">
          <div>Join startups with the best in &nbsp;</div>
          <TypeTitle
            options={{ speed: 150, loop: true }}
            getBeforeInit={(instance: any) => {
              instance
                .type('Artificial Intelligence', { delay: 2000 })
                .delete(null, { delay: 1000 });
              instance
                .type('Extended Reality', { delay: 2000 })
                .delete(null, { delay: 1000 });
              instance
                .type('Cryptocurrency', { delay: 2000 })
                .delete(null, { delay: 1000 });
              return instance;
            }}
          />
        </div>
      </div>
    </div>
  );
}

const TypeTitle = styled(TypeIt)`
  ${Gradient};
  ${GradientTextWrap}
  font-size: 9.2rem;
`;
