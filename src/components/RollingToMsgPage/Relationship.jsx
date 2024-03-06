import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Select from './Select';
import { relationshList } from '../../utils/SelectList';
import { RelationshipContentDiv } from '../../styles/RollingToMsgPage/Relationship.style';

const Relationship = forwardRef(
  (
    {
      isOpenRelationship,
      setIsOpenRelationship,
      relationshipValue,
      onRelationshipValueHandle,
    },
    ref,
  ) => {
    return (
      <RelationshipContentDiv ref={ref}>
        <span>상대와의 관계</span>
        <Select
          SelectList={relationshList}
          isOpen={isOpenRelationship}
          setIsOpen={setIsOpenRelationship}
          value={relationshipValue}
          onChange={onRelationshipValueHandle}
        />
      </RelationshipContentDiv>
    );
  },
);

Relationship.propTypes = {
  isOpenRelationship: PropTypes.bool.isRequired,
  setIsOpenRelationship: PropTypes.func.isRequired,
  relationshipValue: PropTypes.string.isRequired,
  onRelationshipValueHandle: PropTypes.func.isRequired,
};

export default Relationship;
