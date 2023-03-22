import {
	Notice,
	Plugin,
} from "obsidian";

export default class CopyCode extends Plugin {

	async onload() {

		this.registerDomEvent(document, "click", (evt: MouseEvent) => {
			const target = evt.target as HTMLElement;
			if (
				target.tagName === "CODE" &&
				target.parentElement?.tagName === "P"
			) {
				console.log("Clicked on code element inside a p element");
				var text = target.innerText;
				// Do something here
				navigator.clipboard.writeText(text).then(
					() => {
						new Notice("已复制到剪切板");
					},
					() => {
						new Notice("复制失败");
					}
				);
			}
		});
	}

	onunload() {}

}
