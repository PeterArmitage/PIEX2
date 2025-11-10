'use client';

import React, { useEffect, useId, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { useOutsideClick } from '@/hooks/use-outside-click';

// Icon placeholder - you can replace with actual images or keep emojis
const problemCards = [
	{
		description: 'Infraestrutura Urbana',
		title: 'Sistemas de Drenagem Precários',
		src: 'https://plus.unsplash.com/premium_photo-1678641001041-ffbfb24caa5b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1329',
		ctaText: 'Saiba Mais',
		ctaLink: '#',
		content: () => {
			return (
				<div className='space-y-3'>
					<p>
						A maioria das cidades brasileiras usa sistemas de drenagem
						projetados há mais de 50 anos, incapazes de lidar com padrões
						modernos de chuva e expansão urbana.
					</p>
					<ul className='list-disc pl-5 space-y-2'>
						<li>
							Capacidade de drenagem não acompanhou o desenvolvimento urbano
						</li>
						<li>
							Superfícies impermeáveis aumentaram 300% devido à construção
						</li>
						<li>
							Manutenção regular é negligenciada até que desastres ocorram
						</li>
						<li>
							Mudanças climáticas trazem tempestades mais intensas e frequentes
						</li>
					</ul>
					<p className='font-semibold'>
						Resultado: Enchentes repentinas que paralisam bairros inteiros em
						minutos
					</p>
				</div>
			);
		},
	},
	{
		description: 'Infraestrutura Energética',
		title: 'Rede Elétrica Frágil',
		src: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=500&q=80',
		ctaText: 'Saiba Mais',
		ctaLink: '#',
		content: () => {
			return (
				<div className='space-y-3'>
					<p>
						A infraestrutura elétrica do Brasil entra em colapso sob estresse de
						tempestades, deixando milhões sem energia por períodos prolongados.
					</p>
					<ul className='list-disc pl-5 space-y-2'>
						<li>Cabos expostos vulneráveis a danos climáticos</li>
						<li>
							Galhos de árvores perto de linhas de energia causam falhas em
							cascata
						</li>
						<li>Sistemas subterrâneos inundam facilmente</li>
						<li>
							Sistemas de backup limitados e tempos de resposta lentos para
							reparos
						</li>
					</ul>
					<p className='font-semibold'>
						Resultado: Apagões médios de 48 horas afetando hospitais, empresas e
						residências
					</p>
				</div>
			);
		},
	},
	{
		description: 'Infraestrutura de Transporte',
		title: 'Colapso da Infraestrutura Viária',
		src: 'https://images.unsplash.com/photo-1577896021507-78957e4b77d2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074',
		ctaText: 'Saiba Mais',
		ctaLink: '#',
		content: () => {
			return (
				<div className='space-y-3'>
					<p>
						Manutenção precária e design inadequado fazem com que estradas se
						tornem intransitáveis durante tempestades, paralisando redes de
						transporte.
					</p>
					<ul className='list-disc pl-5 space-y-2'>
						<li>
							Buracos se transformam em crateras perigosas quando inundados
						</li>
						<li>Pontes e viadutos carecem de drenagem adequada</li>
						<li>
							Serviços de emergência não conseguem chegar a áreas afetadas
						</li>
						<li>
							Perdas econômicas por interrupção de comércio e produtividade
						</li>
					</ul>
					<p className='font-semibold'>
						Resultado: Paralisia completa do trânsito, isolando milhares e
						impedindo resposta emergencial
					</p>
				</div>
			);
		},
	},
	{
		description: 'Infraestrutura Social',
		title: 'Comunidades Vulneráveis',
		src: 'https://plus.unsplash.com/premium_photo-1681505195930-388c317b7a76?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1384',
		ctaText: 'Saiba Mais',
		ctaLink: '#',
		content: () => {
			return (
				<div className='space-y-3'>
					<p>
						Comunidades de baixa renda sofrem desproporcionalmente com falhas de
						infraestrutura, enfrentando os maiores riscos e a recuperação mais
						lenta.
					</p>
					<ul className='list-disc pl-5 space-y-2'>
						<li>
							Assentamentos informais construídos em zonas de risco de inundação
						</li>
						<li>
							Falta de recursos emergenciais e infraestrutura de evacuação
						</li>
						<li>
							Acesso limitado a água potável e eletricidade após tempestades
						</li>
						<li>
							Impacto econômico persiste por meses, aprofundando desigualdade
						</li>
					</ul>
					<p className='font-semibold'>
						Resultado: Mortes evitáveis e deslocamento prolongado de famílias
						vulneráveis
					</p>
				</div>
			);
		},
	},
];

export default function InfrastructureProblems() {
	const [active, setActive] = useState<>(null);
	const id = useId();
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		function onKeyDown(event: KeyboardEvent) {
			if (event.key === 'Escape') {
				setActive(false);
			}
		}

		if (active && typeof active === 'object') {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}

		window.addEventListener('keydown', onKeyDown);
		return () => window.removeEventListener('keydown', onKeyDown);
	}, [active]);

	useOutsideClick(ref, () => setActive(null));

	return (
		<>
			<AnimatePresence>
				{active && typeof active === 'object' && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className='fixed inset-0 bg-black/20 h-full w-full z-10'
					/>
				)}
			</AnimatePresence>
			<AnimatePresence>
				{active && typeof active === 'object' ? (
					<div className='fixed inset-0 grid place-items-center z-[100]'>
						<motion.button
							key={`button-${active.title}-${id}`}
							layout
							initial={{
								opacity: 0,
							}}
							animate={{
								opacity: 1,
							}}
							exit={{
								opacity: 0,
								transition: {
									duration: 0.05,
								},
							}}
							className='flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6 z-[110]'
							onClick={() => setActive(null)}
						>
							<CloseIcon />
						</motion.button>
						<motion.div
							layoutId={`card-${active.title}-${id}`}
							ref={ref}
							className='w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden'
						>
							<motion.div layoutId={`image-${active.title}-${id}`}>
								<img
									width={200}
									height={200}
									src={active.src}
									alt={active.title}
									className='w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-center'
								/>
							</motion.div>

							<div>
								<div className='flex justify-between items-start p-4'>
									<div className=''>
										<motion.h3
											layoutId={`title-${active.title}-${id}`}
											className='font-medium text-neutral-700 dark:text-neutral-200 text-base'
										>
											{active.title}
										</motion.h3>
										<motion.p
											layoutId={`description-${active.description}-${id}`}
											className='text-neutral-600 dark:text-neutral-400 text-base'
										>
											{active.description}
										</motion.p>
									</div>
								</div>
								<div className='pt-4 relative px-4'>
									<motion.div
										layout
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
										className='text-neutral-600 text-xs md:text-sm lg:text-base h-60 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]'
									>
										{typeof active.content === 'function'
											? active.content()
											: active.content}
									</motion.div>
								</div>
							</div>
						</motion.div>
					</div>
				) : null}
			</AnimatePresence>
			<ul className='max-w-4xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-start gap-4'>
				{problemCards.map((card) => (
					<motion.div
						layoutId={`card-${card.title}-${id}`}
						key={card.title}
						onClick={() => setActive(card)}
						className='p-4 flex flex-col hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer border border-neutral-200 dark:border-neutral-800'
					>
						<div className='flex gap-4 flex-col w-full'>
							<motion.div layoutId={`image-${card.title}-${id}`}>
								<img
									width={100}
									height={100}
									src={card.src}
									alt={card.title}
									className='h-60 w-full rounded-lg object-cover object-center'
								/>
							</motion.div>
							<div className='flex justify-center items-center flex-col'>
								<motion.h3
									layoutId={`title-${card.title}-${id}`}
									className='font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base'
								>
									{card.title}
								</motion.h3>
								<motion.p
									layoutId={`description-${card.description}-${id}`}
									className='text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base'
								>
									{card.description}
								</motion.p>
							</div>
						</div>
					</motion.div>
				))}
			</ul>
		</>
	);
}

export const CloseIcon = () => {
	return (
		<motion.svg
			initial={{
				opacity: 0,
			}}
			animate={{
				opacity: 1,
			}}
			exit={{
				opacity: 0,
				transition: {
					duration: 0.05,
				},
			}}
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
			className='h-4 w-4 text-black'
		>
			<path stroke='none' d='M0 0h24v24H0z' fill='none' />
			<path d='M18 6l-12 12' />
			<path d='M6 6l12 12' />
		</motion.svg>
	);
};
