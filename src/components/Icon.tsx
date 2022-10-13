import styled from 'styled-components';

interface Props {
  icon: string;
}

const StyledIcon = styled.span<Props>`
  --icon: url(${({ icon }) => icon});
  content: var(--icon);
  width: 3em;
`;

const StyledIconWithMask = styled.span<Props>`
  --size: 1em;
  &::before {
    content: '';
    mask-image: url(${({ icon }) => icon});
    mask-repeat: no-repeat;
    width: var(--size);
    aspect-ratio: 1 / 1;
    display: inline-block;
    overflow: hidden;
    background-color: currentColor;
    mask-size: contain;
    mask-position: center;
  }
`;

interface ComponentProps {
  icon: string;
  mask?: boolean;
  className?: string;
}

export function Icon({ icon, mask, className }: ComponentProps) {
  return mask ? <StyledIconWithMask icon={icon} className={className} /> : <StyledIcon icon={icon} className={className} />;
}
