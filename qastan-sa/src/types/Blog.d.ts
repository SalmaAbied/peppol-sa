interface BlogPost {
  id: string;
  date: string;
  title: string;
  subtitle: string;
  articleTitle: string;
  articlePartOne: {
    title?: string; 
    content: string;
  };
  articlePartTwo?: {
    title?: string;
    content: string;
  };
  articlePartThree?: {
    title?: string; 
    content: string;
  };
  articlePartFour?: {
    title?: string; 
    content: string;
  };
  articlePartFive?: {
    title?: string; 
    content: string;
  };
  category: string;
  imageUrl: string;
  extraImg?: string;
  extraImg1?: string;
}

interface TranslatedBlogPost {
  nl: BlogPost;
  fr: BlogPost;
}

interface BlogItemProps {
  post: BlogPost;
}

// Contact pagina accordion
interface ItemProps {
  answerID: string;
  questionID: string;
  question: string;
  answer: string;
  isActive: boolean;
  onClick: () => void;
  ariaExpanded: boolean;
  backgroundColor?: string;
}