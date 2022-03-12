import { Styled } from "./styles/CVSection.Styles";

export interface ICVList {
  title: string;
  elements: string[];
}

interface CVListProps {
  listColumns: ICVList[];
}

const CVList: React.FC<CVListProps> = ({ listColumns }) => {
  return (
    <Styled.CVListContainer>
      {listColumns.map((list, index) => (
        <Styled.CVListColumn key={index}>
          <Styled.CVListTitle>{list.title}</Styled.CVListTitle>
          <Styled.CVList>
            {list.elements.map((element, index) => (
              <Styled.CVListElement key={index}>{element}</Styled.CVListElement>
            ))}
          </Styled.CVList>
        </Styled.CVListColumn>
      ))}
    </Styled.CVListContainer>
  );
};

export default CVList;
