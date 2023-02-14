function getPushpluginAdConfig() {
	const timer_to_be = 2;
	const advert_to_be = '<a href="https://pushplugin.com/?utm_source=wordpress&utm_medium=plugin&utm_campaign=popupPageAd" target="_blank"><img src="https://via.placeholder.com/468x60?text=Sample+Animated+Ad+Here" style="max-width: 100%; margin-top: 20px"></a>';
	const targetClicksCount = 1;
	const adInterval = 200;
	const ad_id = 48249;

	// if last click was more than intervel ago reset clicks count
	if (localStorage.getItem("pushplugin_ad_" + ad_id + "_last_time") == null || new Date().getTime() - localStorage.getItem("pushplugin_ad_" + ad_id + "_last_time") > adInterval * 1000) {
		localStorage.setItem("pushplugin_ad_" + ad_id + "_clicks", 0);
	}

	const currentClicksCount = localStorage.getItem("pushplugin_ad_" + ad_id + "_clicks") || 0;
	if (localStorage.getItem("pushplugin_ad_" + ad_id + "_last_time") == null || currentClicksCount < targetClicksCount) {
		var timer = timer_to_be;
		var advert = advert_to_be;
	}

	onClosePushPluginAd = () => {
		localStorage.setItem("pushplugin_ad_" + ad_id + "_clicks", parseInt(currentClicksCount) + 1);
		localStorage.setItem("pushplugin_ad_" + ad_id + "_last_time", new Date().getTime());
	};

	// Uncomment for AD
	// return {
	// 	timer,
	// 	advert,
	// 	onClosePushPluginAd,
	// };

	// Comment for AD
	return {
		timer: undefined,
		advert: undefined,
		onClosePushPluginAd: undefined,
	};
}

function showAdInThePage() {
	// const wrap = document.querySelector(".wrap");
	// if (wrap) {
	// 	let img = document.createElement("img");
	// 	img.src = "https://via.placeholder.com/468x60?text=AD+HERE";
	// 	img.style.width = "100%";
	// 	img.style.maxWidth = "800px";
	// 	let a = document.createElement("a");
	// 	a.href = "https://pushplugin.com/?utm_source=wordpress&utm_medium=plugin&utm_campaign=pageAd";
	// 	a.target = "_blank";
	// 	a.append(img);
	// 	let div = document.createElement("div");
	// 	div.style.display = "flex";
	// 	div.style.justifyContent = "center";
	// 	div.append(a);
	// 	wrap.parentElement.insertBefore(div, wrap);
	// }
	// SCREEN META LINKS
	// const screenMetaLinks = document.querySelector("#screen-meta-links");
	// if (screenMetaLinks) {
	// 	adblock = `<div id="screen-options-link-wrap" class="hide-if-no-js screen-meta-toggle">
	// 		<button type="button" id="show-settings-link" class="button show-settings" aria-controls="screen-options-wrap" aria-expanded="false">
	// 			<a href="https://pushplugin.com/?utm_source=wordpress&utm_medium=plugin&utm_campaign=pageAd" target="_blank">Push Faster ▶️</a>
	// 		</button>
	// 	</div>`;
	// 	screenMetaLinks.insertAdjacentHTML("afterbegin", adblock);
	// }
}

// showAdInThePage();
