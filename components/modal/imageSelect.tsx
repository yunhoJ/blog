'use client';
import { useEffect, useState } from 'react';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '../ui/carousel';
import { postApi } from '@/app/api/services/api';
import Image from 'next/image';
import type { UseEmblaCarouselType } from 'embla-carousel-react';
import { DialogDescription } from '@radix-ui/react-dialog';

type CarouselApi = UseEmblaCarouselType[1];

interface ImageList {
	name: string;
	publicUrl: string;
}
interface ImageSelectProps {
	selectedImageUrl: (url: string) => void;
}

export default function ImageSelect({ selectedImageUrl }: ImageSelectProps) {
	const [imageList, setImageList] = useState<ImageList[]>([]);
	const [api, setApi] = useState<CarouselApi>();
	const [isImageListEmpty, setIsImageListEmpty] = useState(true);
	const [current, setCurrent] = useState(0);

	useEffect(() => {
		const getImageList = async () => {
			const postHash = localStorage.getItem('postHash') as string;
			if (!postHash) {
				return;
			}

			const response = await postApi.getImageList(postHash);
			if (response.imageList.length !== 0) {
				setIsImageListEmpty(false);
			}
			setImageList(response.imageList);
		};
		getImageList();
	}, []);

	// 캐러셀 API 설정 및 현재 슬라이드 추적
	useEffect(() => {
		if (!api) {
			return;
		}

		// 현재 선택된 슬라이드 업데이트
		const updateCurrent = () => {
			const currentIndex = api.selectedScrollSnap();
			setCurrent(currentIndex);

			// 현재 슬라이드의 이미지 URL을 자동으로 선택
			if (imageList[currentIndex]) {
				selectedImageUrl(imageList[currentIndex].publicUrl);
			}
		};

		// 초기 설정
		updateCurrent();

		// 슬라이드 변경 이벤트 리스너 등록
		api.on('select', updateCurrent);

		return () => {
			api.off('select', updateCurrent);
		};
	}, [api, imageList, selectedImageUrl]);

	return (
		<>
			{isImageListEmpty ? (
				<DialogDescription>대표 이미지가 없습니다.</DialogDescription>
			) : (
				<>
					<DialogDescription>대표 이미지 선택</DialogDescription>
					<Carousel setApi={setApi} className="mx-auto max-h-[220px] max-w-sm">
						<CarouselContent>
							{imageList.map((image, index) => (
								<CarouselItem
									key={image.name}
									className={`cursor-pointer transition-opacity ${
										index === current ? 'opacity-100' : 'opacity-50'
									}`}
								>
									<Image
										src={image.publicUrl}
										alt={image.name}
										width={200}
										height={200}
										className="h-full max-h-[200px] w-full rounded-lg object-cover"
									/>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>
				</>
			)}
		</>
	);
}
