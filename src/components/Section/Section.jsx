import PropTypes from 'prop-types';
import { SectionWrapper, Title } from './Section.styled';
function Section({ title, children }) {
  return (
    <SectionWrapper>
      <Title> {title} </Title>
      {children}
    </SectionWrapper>
  );
}
export default Section;
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
};
