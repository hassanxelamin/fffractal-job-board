import { css } from 'styled-components';

export const Gradient = css`
  @keyframes animatedgradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  background: -webkit-linear-gradient(45deg, #500ffd, #00ff89);

  background: -webkit-linear-gradient(45deg, #680aca, #ff897e);

  background: linear-gradient(
    60deg,
    #f79533,
    #f37055,
    #ef4e7b,
    #a166ab,
    #5073b8,
    #1098ad,
    #07b39b,
    #6fba82
  );

  -webkit-animation: animatedgradient 6s ease infinite alternate;

  animation: animatedgradient 6s ease infinite alternate;

  background-size: 400% 400%;
`;
