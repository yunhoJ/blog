'use client';

import { useEffect, useRef } from 'react';

type Point = {
	startAngle: number;
	startRadius: number;
	color: string;
	size: number;
	speed: number;
	startDelay: number;
	initialProgress: number;
};

export default function ChristmasTreeCanvas() {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);
	const pointsRef = useRef<Point[]>([]);
	const startTimeRef = useRef<number>(0);
	const rafRef = useRef<number | null>(null);

	const width = 300;
	const height = 400;

	const centerX = 150;
	const baseY = 350;
	const maxHeight = 300;
	const baseRadius = 110;
	const numPoints = 200;

	// 파티클 생성
	useEffect(() => {
		const points: Point[] = [];

		for (let i = 0; i < numPoints; i++) {
			const t = i / numPoints;
			const startAngle = t * Math.PI * 10;

			let hue;
			if (t < 0.2) hue = 120 + (t / 0.2) * 120;
			else if (t < 0.4) hue = 240 + ((t - 0.2) / 0.2) * 60;
			else if (t < 0.6) hue = 300 + ((t - 0.4) / 0.2) * 60;
			else if (t < 0.8) hue = ((t - 0.6) / 0.2) * 30;
			else hue = 30 + ((t - 0.8) / 0.2) * 30;

			points.push({
				startAngle,
				startRadius: baseRadius,
				color: `hsl(${hue % 360}, 100%, ${50 + Math.random() * 20}%)`,
				size: 1 + Math.random() * 5,
				speed: 0.3 + t * 0.4,
				startDelay: t,
				initialProgress: Math.random(),
			});
		}

		pointsRef.current = points;
	}, []);

	// 애니메이션 루프
	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		startTimeRef.current = performance.now();

		const animate = (now: number) => {
			const elapsed = (now - startTimeRef.current) / 1000;

			ctx.clearRect(0, 0, width, height);

			for (const p of pointsRef.current) {
				const t = Math.max(0, elapsed - p.startDelay);
				const progress = (p.initialProgress + (t * p.speed) / 5) % 1;

				const angle = p.startAngle + progress * Math.PI * 10;
				const radius = p.startRadius * (1 - progress * 0.95);
				const y = baseY - maxHeight * progress;
				const x = centerX + radius * Math.cos(angle);

				ctx.beginPath();
				ctx.arc(x, y, p.size, 0, Math.PI * 2);
				ctx.fillStyle = p.color;
				ctx.shadowBlur = p.size * 5;
				ctx.shadowColor = p.color;
				ctx.fill();
			}

			rafRef.current = requestAnimationFrame(animate);
		};

		rafRef.current = requestAnimationFrame(animate);

		return () => {
			if (rafRef.current) cancelAnimationFrame(rafRef.current);
		};
	}, []);

	return (
		<div className="flex flex-col items-center justify-center">
			<div
				className="mb-[-30px] animate-pulse text-4xl"
				style={{ filter: 'drop-shadow(0 0 15px rgba(255,255,0,0.8))' }}
			>
				⭐
			</div>

			<canvas
				ref={canvasRef}
				width={width}
				height={height}
				style={{
					filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))',
				}}
			/>
		</div>
	);
}
