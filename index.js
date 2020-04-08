const themes = ['light', 'dark', 'colourful'];
let index = 0;

const toggle = () => {
	changeTheme();
	// this isnt really relevant to changing themes
	// with css vars, it is just a little sugar
	changeTitle();
}

const changeTheme = () => {
	const body = document.getElementById('body');
	body.classList.remove(themes[index]);
	index = index === themes.length -1 ? 0 : index + 1;
	body.classList.add(themes[index]);
	// selected.set(index);
}

const changeTitle = () => {
	const display = document.getElementById("theme-display");
	display.innerText = themes[index].toUpperCase();
}

//you only need this if you want to save selected theme
// const selected = {
// 	get() {
// 		const theme = localStorage.getItem('selected_theme')
// 		if(theme !== undefined) {
// 			return theme;
// 		} else {
// 			return 0;
// 		}
// 	},
// 	set(value) {
// 		localStorage.setItem('selected_theme', value);
// 	}
// }

if(true) {
	changeTitle();
	// index = selected.get();

}