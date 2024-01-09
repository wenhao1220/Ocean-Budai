// 在文檔準備就緒時執行
$(document).ready(function () {
	// 預設城市編號
	let cityNum = 0;

	// 發送 API 請求
	$.ajax({
		url: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-031?Authorization=CWA-26B08A15-19F6-43F1-81C4-864FB996DB62&locationName=%E5%B8%83%E8%A2%8B%E9%8E%AE',
		method: 'GET',
		dataType: 'json',
		success: function (res) {
			console.log('API request success!', res);
			// 取得 API 回傳的資料
			const data = res.records.locations[0].location[cityNum].weatherElement;

			// 取得 12 小時降雨機率資料
			const pop12hData = data.find(item => item.elementName === 'PoP12h').time;

			// 取得平均溫度資料
			const temperatureData = data.find(item => item.elementName === 'T').time;

			// 取得天氣現象資料
			const wxData = data.find(item => item.elementName === 'Wx').time;

			const weatherCondition = wxData[0].elementValue[0].value;

			// 插入一張圖片
			let imageUrl;

			switch (weatherCondition) {
				case '晴天':
					imageUrl = 'weather_icon/晴天.png';
					break;
				case '多雲':
					imageUrl = 'weather_icon/多雲.png';
					break;
				case '陰天':
					imageUrl = 'weather_icon/陰天.png';
					break;
				case '晴時多雲':
					imageUrl = 'weather_icon/晴時多雲.png';
					break;
				case '多雲時晴':
					imageUrl = 'weather_icon/多雲時晴.png';
					break;
				case '多雲時陰':
					imageUrl = 'weather_icon/多雲時陰.png';
					break;
				case '陰時多雲':
					imageUrl = 'weather_icon/陰時多雲.png';
					break;
				case '多雲陣雨':
				case '多雲短暫雨':
				case '多雲短暫陣雨':
				case '午後短暫陣雨':
				case '短暫陣雨':
				case '多雲時晴短暫陣雨':
				case '多雲時晴短暫雨':
				case '晴時多雲短暫陣雨':
				case '晴短暫陣雨':
				case '短暫雨':
					imageUrl = 'weather_icon/多雲陣雨.png';
					break;
				case '多雲時陰短暫雨':
				case '多雲時陰短暫陣雨':
					imageUrl = 'weather_icon/多雲時陰短暫雨.png';
					break;
				case '陰時多雲短暫雨':
				case '陰時多雲短暫陣雨':
					imageUrl = 'weather_icon/陰時多雲短暫雨.png';
					break;
				case '雨天':
				case '晴午後陰短暫雨':
				case '晴午後陰短暫陣雨':
				case '陰短暫雨':
				case '陰短暫陣雨':
				case '陰午後短暫陣雨':
					imageUrl = 'weather_icon/雨天.png';
					break;
				case '多雲時陰有雨':
				case '多雲時陰陣雨':
				case '晴時多雲陣雨':
				case '多雲時晴陣雨':
					imageUrl = 'weather_icon/多雲時陰有雨.png';
					break;
				case '陰時多雲有雨':
				case '陰時多雲有陣雨':
				case '陰時多雲陣雨':
					imageUrl = 'weather_icon/陰時多雲有雨.png';
					break;
				case '陰有雨':
				case '陰有陣雨':
				case '陰雨':
				case '陰陣雨':
				case '陣雨':
				case '午後陣雨':
				case '有雨':
					imageUrl = 'weather_icon/陰有雨.png';
					break;
				case '多雲陣雨或雷雨':
				case '多雲短暫陣雨或雷雨':
				case '多雲短暫雷陣雨':
				case '多雲雷陣雨':
				case '短暫陣雨或雷雨後多雲':
				case '短暫雷陣雨後多雲':
				case '短暫陣雨或雷雨':
				case '晴時多雲短暫陣雨或雷雨':
				case '晴短暫陣雨或雷雨':
				case '多雲時晴短暫陣雨或雷雨':
				case '午後短暫雷陣雨':
					imageUrl = 'weather_icon/多雲陣雨或雷雨.png';
					break;

				default:
					imageUrl = 'weather_icon/多雲.png';
					break;
			}

			// 將圖片添加到 #weekly-weather 元素中
			$('<img />', {
				src: imageUrl,
			}).appendTo('#weekly-weather');

			// 顯示平均溫度
			displayTemperature(temperatureData);

			// 顯示天氣現象
			displayWeatherCondition(wxData);

			// 顯示 12 小時降雨機率
			displayPoP12h(pop12hData);
		},
		error: function (xhr, status, error) {
			console.error('API 請求發生錯誤:', error);
		}
	});

	// 顯示平均溫度
	function displayTemperature(temperatureData) {
		const value = temperatureData[0].elementValue[0].value;

		$('#weekly-weather').append(`
            <div class="temperature">
                <p class="temp">${value}</p>
            </div>
        `);
	}

	// 顯示天氣現象
	function displayWeatherCondition(wxData) {
		const value = wxData[0].elementValue[0].value;

		// 顯示天氣現象
		$('#weekly-weather').append(`
			<div class="weather-condition">
				<p style="font-family: 'Noto Serif JP', sans-serif; font-weight: 500; font-size: 1.3em;">${value}</p>
			</div>
		`);

	}

	// 顯示 12 小時降雨機率
	function displayPoP12h(pop12hData) {
		const value = pop12hData[0].elementValue[0].value;

		$('#weekly-weather').append(`
            <div class="pop12h">
                <p style="font-family: 'Noto Serif JP', sans-serif; font-weight: 500; font-size: 1.3em;">降雨機率: ${value}%</p>
            </div>
        `);
	}
});

/* 上標 */
// 獲取當前頁面的 URL，你可能需要根據實際情況調整
var currentPage = window.location.href;

// 獲取所有的 li 元素
var navItems = document.querySelectorAll('.nav-item');

// 迭代所有 li 元素
navItems.forEach(function (item) {
    // 檢查當前 li 對應的頁面是否與當前頁面相符
    if (item.querySelector('a').href === currentPage) {
        // 如果相符，添加 selected 類別
        item.classList.add('selected');
    }
});