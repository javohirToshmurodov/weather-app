import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 25px;
  box-shadow: inset 16px 16px 16px #362f5b, inset -16px -16px 16px #362f5b;
  border-radius: 28px;
  transition: all 0.3s ease;
  &:hover {
    box-shadow: inset 20px 20px 20px #162f5b, inset -20px -20px 20px #162f5b;
  }
  color: #2ce8cb;
  backdrop-filter: blur(8.3px);
  width: 300px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .degree {
    display: flex;
    gap: 10px;
    font-size: 24px;
    margin-top: -30px;
    .max {
      color: rgba(0, 0, 0, 0.7);
    }
    .min {
      color: rgba(0, 0, 0, 0.3);
    }
  }
  .date {
    margin-top: 30px;
    font-weight: bold;
  }
`;
export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  padding: 20px 0;
`;