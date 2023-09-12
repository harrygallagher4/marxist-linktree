import { createSignal } from "solid-js";

interface props {
	category: String,
}

export const Dropdown = (props) => {
	const [getState, setState] = createSignal(false);

	return <>
	<style>{`
		h2 {
			font-weight: bold;
			font-size:	 20px;
		}
		p {
			padding-left: 20px;
		}
		.dropdown-menu {
			padding: 10px 20px;
			background-color: #222a;
			border-radius: 20px;
		}
		.header {
			display: flex;
			justify-content: space-between;
		}
	`}</style>
	<div  onClick={() => setState(!getState())} class="dropdown-menu">
		<div class="header">
			<h2>{props.category}</h2><h2>{getState() ? "<" : "V"}</h2>
		</div>
		{getState() ? <p>bruh</p> : ''}
	</div>
	</>;
};