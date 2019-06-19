import PropTypes from 'prop-types';

const employeeShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  isFullTime: PropTypes.bool.isRequired,
});

export default { employeeShape };