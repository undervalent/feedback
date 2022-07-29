import React from "react";
import _ from "lodash";
import { FaComment, FaChevronUp } from "react-icons/fa";

import { ProductRequest } from "../../../../lib/types";
import { Badge } from "./components/badge";

import {
  Wrapper,
  Headline,
  Text,
  Category,
  Comments,
  UpVotes,
  Header,
  ContentWrapper,
  Footer,
} from "./roadmap-item.styles";

interface IProps {
  data: ProductRequest;
  colorBorder?: string;
}

export const RoadMapItem: React.FC<IProps> = ({ data, colorBorder }) => {
  const { title, category, upvotes, description, comments } = data;
  const commentCount = comments ? comments.length : "0";

  const handleUpvoteCLick = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <Wrapper to={`/feedback/${data.id}`}>
      <ContentWrapper colorBorder={colorBorder}>
        <Badge color={colorBorder} />
        <Header>
          <Headline>{title}</Headline>
          <Text>{description}</Text>
          <Category>
            <span className="visually-hidden">categorized as</span>
            {_.capitalize(category)}
          </Category>
        </Header>

        <Footer>
          <UpVotes onClick={handleUpvoteCLick}>
            <FaChevronUp color="var(--primary-bravo)" />
            <span className="visually-hidden">{title} has</span>
            {upvotes}
            <span className="visually-hidden">upvotes</span>
          </UpVotes>

          <Comments>
            <FaComment color="#CDD2EE" />
            <span className="visually-hidden">{title} has</span>
            {commentCount}
            <span className="visually-hidden">comments</span>
          </Comments>
        </Footer>
      </ContentWrapper>
    </Wrapper>
  );
};
