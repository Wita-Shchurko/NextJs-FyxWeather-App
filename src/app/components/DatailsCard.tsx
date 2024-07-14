type Props = {
	title: string,	
	data: number | string,
	unit?: string,
	Icon: React.ComponentType,
};

export const DatailsCard = ({ title, data, unit="", Icon }: Props) => {
	return (
		<div className="bg-white/50 flex p-4 items-center justify-between gap-6 rounded-xl">
			<div className="text-2xl">
				<h3>{title}</h3>

				<h3>{data} {unit}</h3>
			</div>

			<div className="text-4xl">
				<Icon />
			</div>
		</div>
	)
}
