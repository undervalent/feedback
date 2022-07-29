import React from "react";
import _ from "lodash";
import { FaComment, FaChevronUp } from "react-icons/fa";
import { generateCommentCount } from "../../lib/utils";
import { useSelectedFeedbackItem } from "../../lib/hooks";
import {
  Wrapper,
  Headline,
  Text,
  Category,
  Comments,
  UpVotes,
  Header,
  ContentWrapper,
} from "./request-item.styles";

interface IProps {
  id: string;
}

export const RequestItem: React.FC<IProps> = ({ id }) => {
  const [{ requestItem, hasUpVoted }, { incrementCount }] =
    useSelectedFeedbackItem(id);
  const { title, category, upvotes, description, comments } = requestItem;
  const commentCount = generateCommentCount(comments);

  const handleUpvoteCLick = () => !hasUpVoted && incrementCount();
  if (!id) return null;
  const iconColor = hasUpVoted ? "var(--light-alpha)" : "var(--primary-bravo)";
  return (
    <Wrapper>
      <ContentWrapper>
        <Header>
          <Headline to={`/feedback/${id}`}>
            <h2>{title}</h2>
          </Headline>
          <Text>{description}</Text>
          <Category>
            <span className="visually-hidden">categorized as</span>
            {_.capitalize(category)}
          </Category>
        </Header>

        <UpVotes
          onClick={handleUpvoteCLick}
          disabled={hasUpVoted}
          aria-label="click to upvote"
        >
          <FaChevronUp color={iconColor} />
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
      </ContentWrapper>
    </Wrapper>
  );
};
