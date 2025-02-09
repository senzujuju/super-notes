import { useState } from "react"

// неиспользуемая переменная

const b = 1

// компонент с несколькими ошибками
export const TestComponent = (props: object) => {
	// использование any
	const [, setData]: any = useState()

	// неиспользуемый параметр
	const handleClick = (event: string) => {
		console.log("clicked")
	}

	// отсутствует key в map
	return (
		<div>
			{["a", "b", "c"].map((item) => (
				<div>{item}</div>
			))}

			{/* дублирующийся проп */}
			<button onClick={handleClick} {...props}>
				Click me
			</button>
		</div>
	)
}

// экспорт неиспользуемой переменной
export const unusedExport = "test"
