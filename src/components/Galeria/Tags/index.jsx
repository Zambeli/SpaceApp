import styled from "styled-components";
import tags from "./tags.json";

const TagContainer = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  margin: 0;
  margin-top: 20px;
  padding: 0;
`;

const TagTitulo = styled.h3`
  font-size: 22px;
  font-weight: 400;
  line-height: 29px;
  color: #d9d9d9;
  margin: 0;
`;

const TagButton = styled.button`
  width: 94px;
  height: 50px;
  border-radius: 10px;
  border: 2px solid transparent;
  padding: 10px 8px;
  background: #d9d9d94d;
  color: #fff;
  transition: 0.3s ease;
  box-sizing: border-box;
  margin: 0;
  &:hover {
    border-color: #c98cf1;
  }
`;

const Tags = ({setTag}) => {
  return (
    <TagContainer>
      <TagTitulo>Busque por tags:</TagTitulo>
      {tags.map((tag) => (
        <TagButton onClick={() => setTag(tag.id)} key={tag.id}>{tag.titulo}</TagButton>
      ))}
    </TagContainer>
  );
};

export default Tags;
