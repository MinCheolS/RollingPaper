import styled from 'styled-components';

export const CardContainerDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const CardContainerSection = styled.section`
  display: flex;
  flex-direction: ${({ $even }) => ($even ? 'row-reverse' : 'row')};
  padding: ${({ $even }) => ($even ? '60px 192px 60px 0' : '60px 0 60px 60px')};
  gap: ${({ $even }) => ($even ? '0px' : '152px')};
  border-radius: 16px;
  background-color: ${({ theme }) => theme.landingCard};
  .LandingImg {
    height: 204px;
    object-fit: none;
  }
  @media all and (min-width: 768px) and (max-width: 1248px) {
    flex-direction: column;
    padding: 40px 0;
    gap: 36px;
  }
  @media all and (max-width: 768px) {
    flex-direction: column;
    padding: 20px 0;
    gap: 50px;
    overflow: hidden;
  }
`;

export const CardWrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media all and (min-width: 768px) and (max-width: 1248px) {
    padding-left: 40px;
  }
  @media all and (max-width: 768px) {
    padding: 0 24px;
  }
`;

export const CardDescDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  .Title {
    color: ${({ theme }) => theme.text};
    font-size: var(--font24, 2.4rem);
    font-weight: var(--bold, 700);
    line-height: 36px;
    letter-spacing: -0.24px;
  }
  .Description {
    color: ${({ theme }) => theme.subText};
    font-size: var(--font18, 1.8rem);
    font-weight: var(--regular, 700);
    line-height: 28px;
    letter-spacing: -0.18px;
  }
`;

export const CardBadgeDiv = styled.div`
  width: fit-content;
  color: var(--white, #fff);
  font-size: var(--font14, 1.4rem);
  font-weight: var(--bold, 700);
  line-height: 20px;
  letter-spacing: -0.07px;
  padding: 6px 12px;
  border-radius: 50px;
  background: var(--purple600, #9935ff);
`;
