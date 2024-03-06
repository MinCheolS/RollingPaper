import React from 'react';
import PropTypes from 'prop-types';
import ProfileFrame from './ProfileFrame';
import {
  NumOfWritingPeopleDiv,
  EclipseDiv,
} from '../../../styles/RollingPage/RollingHeader.style';

export default function NumOfWritingPeople({ messageCount, threePeople }) {
  return (
    <NumOfWritingPeopleDiv>
      <EclipseDiv>
        {threePeople.map((people, index) => (
          <ProfileFrame
            key={people.id}
            type="image"
            left={`${index * 16}px`}
            profileImgURL={people ? people.profileImageURL : null}
          />
        ))}
        <ProfileFrame
          type="number"
          left="48px"
          number={messageCount > 3 ? messageCount - 3 : 0}
        />
      </EclipseDiv>
      <p>
        <span className="number">{messageCount}</span>
        명이 작성했어요!
      </p>
    </NumOfWritingPeopleDiv>
  );
}
NumOfWritingPeople.propTypes = {
  messageCount: PropTypes.number,
  threePeople: PropTypes.arrayOf(
    PropTypes.shape({
      profileImageURL: PropTypes.string,
    }),
  ),
};

NumOfWritingPeople.defaultProps = {
  messageCount: '',
  threePeople: [],
};
