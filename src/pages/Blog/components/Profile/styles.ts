import styled from "styled-components";

export const ProfileContainer = styled.section`
  padding: 2rem 2.5rem;
  border-radius: 10px;
  margin-top: -5.5rem;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  background: ${(props) => props.theme["base-profile"]};

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }
`;

export const ProfileDetails = styled.div`
  flex: 1;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const ProfileName = styled.h1`
  color: ${(props) => props.theme["base-title"]};
`;

export const ProfileDescription = styled.span`
  margin-top: 0.5rem;
  display: block;
`;

export const ProfileInfo = styled.footer`
  margin-top: 1.5rem;

  ul {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.5rem;

    li {
      color: ${props => props.theme["base-subtitle"]};

      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    svg {
      width: 1.125rem;
      height: 1.125rem;
      color: ${(props) => props.theme["base-label"]};
    }
  }
`;
