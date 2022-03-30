import { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

const shakeY = keyframes`
	to {
			transform: rotate(0);
	}

	10%,
	30%,
	50%,
	70%,
	90% {
			transform: rotate(-10deg);
	}

	20%,
	40%,
	60%,
	80% {
			transform: rotate(10deg);
	}
`;

const StyledMustachy = styled.svg`
  margin-top: 30vh;

  &:hover {
    animation: ${shakeY} 1s infinite;
  }
`;

export function Mustachy() {
  const eyeBall = useRef<SVGCircleElement>(null);
  const pupil = useRef<SVGCircleElement>(null);

  useEffect(() => {
    if (eyeBall.current instanceof SVGCircleElement && pupil.current instanceof SVGCircleElement) {
      const eyeArea = eyeBall.current.getBoundingClientRect(),
        pupilArea = pupil.current.getBoundingClientRect(),
        R = eyeArea.width / 2,
        r = pupilArea.width / 2,
        centerX = eyeArea.left + R,
        centerY = eyeArea.top + R;

      const handleMouseMove = (e: MouseEvent) => {
        const x = e.clientX - centerX;
        const y = e.clientY - centerY;
        const theta = Math.atan2(y, x);
        const angle = (theta * 180) / Math.PI + 360;

        pupil.current.style.transform = `translateX(${R - r}px) rotate(${angle - 30}deg)`;
        /* subtract 30degrees to evit the pupil get to close to the border */
        pupil.current.style.transformOrigin = `${r}px center`;
      };

      document.body.addEventListener('mousemove', handleMouseMove);

      return () => {
        document.body.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);

  return (
    <StyledMustachy width="299" height="190" viewBox="0 0 299 190" fill="none" xmlns="http://www.w3.org/2000/svg">
      <svg width="116" height="116">
        <circle ref={eyeBall} cx="50%" cy="50%" r="58.2802" fill="#ffffff" />
        <circle ref={pupil} cx="50%" cy="50%" r="23.7722" fill="#181818" />
      </svg>

      <circle cx="227.875" cy="62.0477" r="61.3476" fill="#F977BC" />
      <circle cx="228.642" cy="61.2809" r="52.9123" fill="#ffffff" />
      <path
        d="M59.5169 112.306C43.3943 127.063 27.2076 132.323 0.88916 118.209C5.77481 145.263 19.176 162.218 31.6687 173.301C70.7539 199.864 120.588 192.977 149.413 156.085C172.375 191.502 243.191 198.88 268.134 173.301C293.078 147.723 295.982 138.868 298.425 118.209C273.399 132.788 258.063 129.534 237.843 110.338C197.507 78.9947 178.806 81.1386 149.413 104.927C116.455 77.2528 96.5624 81.8486 59.5169 112.306Z"
        fill="#EA1889"
      />
    </StyledMustachy>
  );
}