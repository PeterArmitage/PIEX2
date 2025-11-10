import { BackgroundBeams } from '@/components/ui/background-beams';
import { Card3D } from '@/components/ui/card-3d';
import InfrastructureProblems from '@/components/infrastructure-problems';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Zap, Droplets, TrendingDown } from 'lucide-react';

export default function Home() {
	return (
		<main className='min-h-screen bg-background'>
			{/* HERO SECTION */}
			<section className='relative h-screen flex items-center justify-center overflow-hidden'>
				<BackgroundBeams className='opacity-40' />
				<div className='relative z-10 text-center px-4'>
					<Badge className='mb-4' variant='outline'>
						PIEX II - Projeto Integrado de Extensão
					</Badge>
					<h1 className='text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600'>
						Quando a Chuva
						<br />
						Revela a Crise
					</h1>
					<p className='text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto'>
						Como a infraestrutura inadequada transforma tempestades em
						emergências nacionais
					</p>
				</div>
			</section>

			{/* STATISTICS SECTION */}
			<section className='py-20 px-4 max-w-7xl mx-auto'>
				<h2 className='text-4xl font-bold text-center mb-12'>
					Os Números Contam a História
				</h2>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
					<Card3D>
						<Card className='p-8 text-center h-full bg-gradient-to-br from-red-500/10 to-red-500/5 border-red-500/20'>
							<Droplets className='w-12 h-12 mx-auto mb-4 text-red-500' />
							<div className='text-5xl font-bold mb-2'>169+</div>
							<div className='text-muted-foreground'>
								Mortes apenas nas enchentes do RS em 2024
							</div>
						</Card>
					</Card3D>

					<Card3D>
						<Card className='p-8 text-center h-full bg-gradient-to-br from-yellow-500/10 to-yellow-500/5 border-yellow-500/20'>
							<Zap className='w-12 h-12 mx-auto mb-4 text-yellow-500' />
							<div className='text-5xl font-bold mb-2'>4M+</div>
							<div className='text-muted-foreground'>
								Domicílios sem energia após tempestade de nov/2023
							</div>
						</Card>
					</Card3D>

					<Card3D>
						<Card className='p-8 text-center h-full bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-blue-500/20'>
							<TrendingDown className='w-12 h-12 mx-auto mb-4 text-blue-500' />
							<div className='text-5xl font-bold mb-2'>R$ 19Bi</div>
							<div className='text-muted-foreground'>
								Prejuízo econômico das enchentes do RS 2024
							</div>
						</Card>
					</Card3D>
				</div>
			</section>

			<Separator className='max-w-7xl mx-auto' />

			{/* PROBLEMS SECTION */}
			<section className='py-20 px-4 max-w-7xl mx-auto'>
				<h2 className='text-4xl font-bold text-center mb-4'>
					A Cascata de Falhas
				</h2>
				<p className='text-center text-muted-foreground mb-12 text-lg'>
					Clique em qualquer card para explorar como as falhas na infraestrutura
					criam desastres
				</p>

				<InfrastructureProblems />
			</section>

			<Separator className='max-w-7xl mx-auto' />

			{/* SOLUTIONS SECTION */}
			<section className='py-20 px-4 max-w-7xl mx-auto'>
				<h2 className='text-4xl font-bold text-center mb-12'>
					Construindo Resiliência
				</h2>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
					<Card className='p-6'>
						<h3 className='text-xl font-semibold mb-3'>Drenagem Moderna</h3>
						<p className='text-muted-foreground'>
							Investir em pavimentos permeáveis e sistemas de drenagem ampliados
							projetados para as realidades das mudanças climáticas
						</p>
					</Card>

					<Card className='p-6'>
						<h3 className='text-xl font-semibold mb-3'>Rede Resiliente</h3>
						<p className='text-muted-foreground'>
							Cabos subterrâneos, tecnologia de rede inteligente e sistemas de
							energia descentralizados
						</p>
					</Card>

					<Card className='p-6'>
						<h3 className='text-xl font-semibold mb-3'>Planejamento Urbano</h3>
						<p className='text-muted-foreground'>
							Áreas verdes que absorvem água, restrição de construção em zonas
							de risco, aplicação de códigos de obra
						</p>
					</Card>

					<Card className='p-6'>
						<h3 className='text-xl font-semibold mb-3'>
							Sistemas de Alerta Precoce
						</h3>
						<p className='text-muted-foreground'>
							Monitoramento meteorológico integrado e sistemas de alerta
							comunitário para prevenir vítimas
						</p>
					</Card>

					<Card className='p-6'>
						<h3 className='text-xl font-semibold mb-3'>
							Preparação Comunitária
						</h3>
						<p className='text-muted-foreground'>
							Programas educacionais, planos de evacuação e distribuição de
							recursos emergenciais
						</p>
					</Card>

					<Card className='p-6'>
						<h3 className='text-xl font-semibold mb-3'>
							Prioridade de Investimento
						</h3>
						<p className='text-muted-foreground'>
							Mudança de reparos reativos para desenvolvimento proativo de
							infraestrutura
						</p>
					</Card>
				</div>
			</section>

			<Separator className='max-w-7xl mx-auto' />

			{/* SDG SECTION */}
			<section className='py-20 px-4 max-w-7xl mx-auto'>
				<h2 className='text-4xl font-bold text-center mb-4'>
					Objetivos de Desenvolvimento Sustentável da ONU
				</h2>
				<p className='text-center text-muted-foreground mb-12'>
					Como enfrentar a infraestrutura impacta diretamente as metas globais
					de sustentabilidade
				</p>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
					<Card className='p-8'>
						<div className='flex items-start gap-4 mb-4'>
							<div className='text-5xl'>🏗️</div>
							<div>
								<h3 className='text-2xl font-bold mb-2'>Infraestrutura</h3>
								<p className='text-sm text-muted-foreground mb-3'>
									Indústria, Inovação e Infraestrutura
								</p>
							</div>
						</div>
						<p className='text-muted-foreground mb-4'>
							Infraestrutura resiliente é a base do desenvolvimento sustentável.
							O desafio do Brasil:
						</p>
						<ul className='space-y-2 text-sm'>
							<li className='flex items-start gap-2'>
								<span className='text-blue-500 mt-1'>•</span>
								<span>
									Modernizar sistemas de drenagem para lidar com extremos
									climáticos
								</span>
							</li>
							<li className='flex items-start gap-2'>
								<span className='text-blue-500 mt-1'>•</span>
								<span>
									Atualizar redes elétricas para resistir a condições
									meteorológicas severas
								</span>
							</li>
							<li className='flex items-start gap-2'>
								<span className='text-blue-500 mt-1'>•</span>
								<span>
									Construir redes de transporte resilientes a inundações
								</span>
							</li>
						</ul>
					</Card>

					<Card className='p-8'>
						<div className='flex items-start gap-4 mb-4'>
							<div className='text-5xl'>🏙️</div>
							<div>
								<h3 className='text-2xl font-bold mb-2'>
									Cidades Sustentáveis
								</h3>
								<p className='text-sm text-muted-foreground mb-3'>
									Cidades e Comunidades Sustentáveis
								</p>
							</div>
						</div>
						<p className='text-muted-foreground mb-4'>
							Áreas urbanas devem ser inclusivas, seguras, resilientes e
							sustentáveis:
						</p>
						<ul className='space-y-2 text-sm'>
							<li className='flex items-start gap-2'>
								<span className='text-green-500 mt-1'>•</span>
								<span>
									Prevenir o deslocamento de mais de 580 mil pessoas por
									enchentes
								</span>
							</li>
							<li className='flex items-start gap-2'>
								<span className='text-green-500 mt-1'>•</span>
								<span>
									Garantir que serviços de emergência alcancem todas as
									comunidades
								</span>
							</li>
							<li className='flex items-start gap-2'>
								<span className='text-green-500 mt-1'>•</span>
								<span>
									Criar espaços verdes que gerenciam naturalmente águas pluviais
								</span>
							</li>
						</ul>
					</Card>

					<Card className='p-8'>
						<div className='flex items-start gap-4 mb-4'>
							<div className='text-5xl'>🌍</div>
							<div>
								<h3 className='text-2xl font-bold mb-2'>Ação Climática</h3>
								<p className='text-sm text-muted-foreground mb-3'>
									Ação Contra a Mudança Global do Clima
								</p>
							</div>
						</div>
						<p className='text-muted-foreground mb-4'>
							Mudanças climáticas tornam eventos extremos duas vezes mais
							prováveis:
						</p>
						<ul className='space-y-2 text-sm'>
							<li className='flex items-start gap-2'>
								<span className='text-purple-500 mt-1'>•</span>
								<span>
									Infraestrutura deve se adaptar a tempestades severas mais
									frequentes
								</span>
							</li>
							<li className='flex items-start gap-2'>
								<span className='text-purple-500 mt-1'>•</span>
								<span>
									Sistemas de alerta precoce salvam vidas durante eventos
									climáticos
								</span>
							</li>
							<li className='flex items-start gap-2'>
								<span className='text-purple-500 mt-1'>•</span>
								<span>
									Design sustentável reduz impacto e pegada de carbono
								</span>
							</li>
						</ul>
					</Card>

					{/* SDG 10 */}
					<Card className='p-8'>
						<div className='flex items-start gap-4 mb-4'>
							<div className='text-5xl'>⚖️</div>
							<div>
								<h3 className='text-2xl font-bold mb-2'>
									Redução das Desigualdades
								</h3>
								<p className='text-sm text-muted-foreground mb-3'>
									Redução das Desigualdades
								</p>
							</div>
						</div>
						<p className='text-muted-foreground mb-4'>
							Falhas na infraestrutura prejudicam desproporcionalmente
							comunidades vulneráveis:
						</p>
						<ul className='space-y-2 text-sm'>
							<li className='flex items-start gap-2'>
								<span className='text-orange-500 mt-1'>•</span>
								<span>
									Áreas de baixa renda enfrentam maior risco de inundação e
									recuperação mais lenta
								</span>
							</li>
							<li className='flex items-start gap-2'>
								<span className='text-orange-500 mt-1'>•</span>
								<span>
									Acesso igualitário a recursos emergenciais e infraestrutura
								</span>
							</li>
							<li className='flex items-start gap-2'>
								<span className='text-orange-500 mt-1'>•</span>
								<span>
									Prevenir perdas econômicas que aprofundam desigualdades
									existentes
								</span>
							</li>
						</ul>
					</Card>
				</div>

				{/* Key Takeaway */}
				<Card className='mt-8 p-8 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20'>
					<h3 className='text-xl font-bold mb-3 text-center'>A Conexão</h3>
					<p className='text-center text-muted-foreground max-w-3xl mx-auto'>
						Investir em infraestrutura resiliente não é apenas sobre prevenir
						enchentes—é sobre criar cidades equitativas e sustentáveis que
						possam resistir aos desafios climáticos enquanto protegem as
						populações mais vulneráveis. Cada real investido em infraestrutura é
						um investimento na conquista de múltiplos ODS simultaneamente.
					</p>
				</Card>
			</section>

			{/* FOOTER */}
			<footer className='py-8 px-4 text-center text-muted-foreground border-t'>
				<p>Criado por Peter Armitage | PIEX II - 2025</p>
				<p className='text-sm mt-2'>
					Análise e Desenvolvimento de Sistemas | UniDomBosco
				</p>
			</footer>
		</main>
	);
}
