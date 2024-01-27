import { ReactNode } from 'react';
import { AutoLinkingProps } from 'types/types';
import { Link } from 'react-router-dom';

const AutoLinkingContent = ({
  contents,
  titles,
  allData,
}: AutoLinkingProps) => {
  let currentIndex = 0;
  const elements: ReactNode[] = [];

  // contents에서 title에 속하는 부분을 찾아서 렌더링
  for (const title of titles) {
    const indexOfTitle = contents.indexOf(title, currentIndex);

    if (indexOfTitle !== -1) {
      // title 이전의 부분을 p 태그로 렌더링
      if (currentIndex < indexOfTitle) {
        const textBeforeTitle = contents.slice(currentIndex, indexOfTitle);
        elements.push(<span key={textBeforeTitle}>{textBeforeTitle}</span>);
      }

      const findId = allData.filter(
        (item) => item.title === title && item.id
      )[0];

      // title을 Link 컴포넌트로 렌더링
      elements.push(
        <Link to={`/${findId.id}`} key={title} className="text-sky-600">
          {title}
        </Link>
      );

      // 다음 탐색을 위해 currentIndex 갱신
      currentIndex = indexOfTitle + title.length;
    }
  }

  // title 이후의 부분을 p 태그로 렌더링
  if (currentIndex < contents.length) {
    const textAfterTitles = contents.slice(currentIndex);
    elements.push(<span key={textAfterTitles}>{textAfterTitles}</span>);
  }

  return elements;
};

export default AutoLinkingContent;
