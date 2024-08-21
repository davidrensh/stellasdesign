import styled from 'styled-components';
import { MenuPopover as FluentMenuPopover } from '@fluentui/react-components';

const StyledMenuPopover = styled(FluentMenuPopover)`
  background-color: #ffffff !important;
  border-radius: 4px !important;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2) !important;
  position: absolute !important;
  top: 0 !important; /* Adjust as needed */
  left: 0 !important;
  transform: none !important;
  margin: 0 !important;
  width: max-content !important;
  border: 1px solid lightgray !important;
`;

export default StyledMenuPopover;
