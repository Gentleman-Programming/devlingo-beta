import { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

const shakeY = keyframes`
	from,
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
	--x: 0;
	--y: 0;
  &:hover {
    animation: ${shakeY} 1s infinite;
  }

  .pupil {
    transform: translateY(var(--y)) translateX(var(--x));
  }

  .eye-twinkle {
    transform: translateY(calc(var(--y) + 35px)) translateX(calc(var(--x) + 32.6px));
  }
`;

export function Mustachy() {
	const mustachy = useRef<SVGSVGElement>(null);
	const eyeBall = useRef<SVGCircleElement>(null);

	useEffect(() => {
		if (eyeBall.current instanceof SVGCircleElement && mustachy.current instanceof SVGSVGElement) {
			const eyeArea = eyeBall.current.getBoundingClientRect();
			const R = eyeArea.width / 2;
			const centerY = eyeArea.top + R;
			const centerX = eyeArea.left + R;

			const handleMouseMove = (e: MouseEvent) => {
				const x = Math.round((e.clientX - centerX) / 35);
				const y = Math.round((e.clientY - centerY) / 35);

				mustachy.current?.style.setProperty('--x', `${Math.min(30, x)}px`);
				mustachy.current?.style.setProperty('--y', `${y}px`);
			};

			document.body.addEventListener('mousemove', handleMouseMove);

			return () => {
				document.body.removeEventListener('mousemove', handleMouseMove);
			};
		}
	}, []);

	return (
		<StyledMustachy ref={mustachy} width="299" height="190" viewBox="0 0 299 190" fill="none" xmlns="http://www.w3.org/2000/svg">
			<svg width="116" height="116">
				<circle ref={eyeBall} cx="50%" cy="50%" r="58.2802" fill="#fff" />
				<circle className="pupil" cx="50%" cy="50%" r="23.7722" fill="#181818" />
				<path
					className="eye-twinkle"
					d="M54.6179 25.392C51.2618 33.6884 46.9881 30.4718 36.8521 28.4709C26.943 25.8681 25.0135 21.9731 27.9883 14.6195C30.963 7.26595 39.3358 3.7162 46.6894 6.69094C54.0429 9.66569 57.5927 18.0385 54.6179 25.392Z"
					fill="#fff"
				/>
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