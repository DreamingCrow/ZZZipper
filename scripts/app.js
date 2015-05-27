			/*			Tabs			*/
var panel = document.getElementById('panel');
var user = document.getElementById('user');
var settings = document.getElementById('settings');
	// settings.style.minHeight = panel.clientHeight - 230 + "px";
var settingsBtn = document.getElementById('settings-btn');
var settingCloseBtn = document.getElementById('close-btn');
var profile = document.getElementById('profile');
var anotherProfile = document.getElementById('another-profile');
	// anotherProfile.style.minHeight = panel.clientHeight - 230 + "px";
var messages = document.getElementById('messages');
var views = document.getElementById('views');
var photos = document.getElementById('photos');
var likes = document.getElementById('likes');
var pokes = document.getElementById('pokes');
var search = document.getElementById('search');
var searchResults = document.getElementById('search-results');
var help = document.getElementById('help');

var darkBackground = document.getElementById('dark-background');

var allMessages = document.getElementById('all-messages');
var userMessages = document.getElementById('user-messages');

	allMessages.addEventListener('click',function(){
		allMessages.classList.add('invisible');
		userMessages.classList.remove('invisible');
	});

var allInfo = document.getElementById('all-info-btn');
var commonInfo = document.getElementById('common-info-btn');

var profileContentLeft = document.getElementById('profile-content-left');
var profileContentRight = document.getElementById('profile-content-right');
var commonInt = document.getElementById('common-int');

	allInfo.addEventListener('click',function(){
		allInfo.classList.add('uppercase','active');
		commonInfo.classList.remove('uppercase','active');
		profileContentLeft.classList.remove('invisible');
		profileContentRight.classList.remove('invisible');
		commonInt.classList.add('invisible');
	});
	commonInfo.addEventListener('click',function(){
		allInfo.classList.remove('uppercase','active');
		commonInfo.classList.add('uppercase','active');
		profileContentLeft.classList.add('invisible');
		profileContentRight.classList.add('invisible');
		commonInt.classList.remove('invisible');
	});

var tabs = [profile,messages,views,photos,likes,pokes,search,help];
var tabsName = ["profile","messages","views","photos","likes","pokes","search","help"];

// for (var i = 0, j = tabs.length; i < j; i++) {
// 	tabs[i].style.height = panel.clientHeight - 240 + "px";
// };

var content = document.getElementById('content');
	// content.style.height = panel.clientHeight - 80 + "px";

	user.addEventListener('click', function(){
		panel.classList.toggle('not-active');
	});

	settingsBtn.addEventListener('click', function(){
		removeClasses();
		panel.classList.add('not-active');
		settings.classList.toggle('settings-open');
	});

	settingCloseBtn.addEventListener('click', function(){
		settings.classList.toggle('settings-open');
	});

			/*			Buttons			*/
var profileBtn = document.getElementById("profile-btn");
var messagesBtn = document.getElementById("messages-btn");
var viewsBtn = document.getElementById("views-btn");
var photosBtn = document.getElementById("photos-btn");
var likesBtn = document.getElementById('likes-btn');
var pokesBtn = document.getElementById("pokes-btn");
var searchBtn = document.getElementById("search-btn");
var helpBtn = document.getElementById("help-btn");

var buttons = [profileBtn,messagesBtn,viewsBtn,photosBtn,likesBtn,pokesBtn,searchBtn,helpBtn];

for (var i = 0, j= buttons.length; i < j; i++) {
	var k = i;
	(function(k){
		var i = k;
		buttons[i].addEventListener('click', function(){
			toggleClass(this, tabs[i], tabsName[i]);
		});
	})(k);
};


			/*			Hide Buttons			*/
var hideProfileBtn = document.getElementById("hide-profile-btn");
var hideMessagesBtn = document.getElementById("hide-messages-btn");
var hideViewsBtn = document.getElementById("hide-views-btn");
var hidePhotosBtn = document.getElementById("hide-photos-btn");
var hideLikesBtn = document.getElementById("hide-likes-btn");
var hidePokesBtn = document.getElementById("hide-pokes-btn");
var hideSearchBtn = document.getElementById("hide-search-btn");
var hideHelpBtn = document.getElementById("hide-help-btn");
var hideAnotherProfileBtn = document.getElementById("hide-another-profile-btn");

var hideButtons = [hideProfileBtn,hideMessagesBtn,hideViewsBtn,hidePhotosBtn,hideLikesBtn,hidePokesBtn,hideSearchBtn,hideHelpBtn,hideAnotherProfileBtn];

for (var i = 0, j= hideButtons.length; i < j; i++) {
	var k = i;
	(function(k){
		var i = k;
		hideButtons[i].addEventListener('click', function(){
			toggleClass(buttons[i], tabs[i], tabsName[i]);
		});
	})(k);
};
hideAnotherProfileBtn.addEventListener('click', function(){
	anotherProfile.classList.remove('open');
	removeClasses();
});


var personalLinks = document.getElementById('personalLinks');


			/*			Function Change Button			*/

function toggleClass(btn, tab, tabName){
	if(btn.classList.contains("active")){
		removeClasses();
	} else {
		removeClasses();
		tab.classList.toggle(tabName+'-open');
		btn.classList.toggle('active');
		if (!panel.classList.contains("not-active")){
			panel.classList.add('not-active');
		};
		allMessages.classList.remove('invisible');
		userMessages.classList.add('invisible');
		darkBackground.classList.add('active');
	};
};
function removeClasses(){
	for (var i = 0, j = tabs.length; i < j; i++) {
		tabs[i].classList.remove(tabsName[i]+"-open");
		buttons[i].classList.remove("active");
		panel.classList.remove('not-active');
		anotherProfile.classList.remove('open');
		darkBackground.classList.remove('active');
		settings.classList.remove('settings-open');
		searchResults.classList.remove('active');
	};
};


			/*			Viewes, Likes & Pokes			*/

			/*			Buttons			*/
var whoViewedMeBtn = document.getElementById('who-viewed-me-btn');
var whoIViewedBtn = document.getElementById('who-i-viewed-btn');

var whoLikedMeBtn = document.getElementById('who-liked-me-btn');
var whoILikedBtn = document.getElementById('who-i-liked-btn');

var whoPokedMeBtn = document.getElementById('who-poked-me-btn');
var whoIPokedBtn = document.getElementById('who-i-poked-btn');

			/*			Div`s			*/
var whoViewedMe = document.getElementById('who-viewed-me');
var whoIViewed = document.getElementById('who-i-viewed');

var whoLikedMe = document.getElementById('who-liked-me');
var whoILiked = document.getElementById('who-i-liked');

var whoPokedMe = document.getElementById('who-poked-me');
var whoIPoked = document.getElementById('who-i-poked');


function whoLiked(){
	whoLikedMeBtn.classList.toggle('uppercase');
	whoILikedBtn.classList.toggle('uppercase');

	whoLikedMe.classList.toggle('invisible');
	whoILiked.classList.toggle('invisible');
};

whoLikedMeBtn.addEventListener('click', whoLiked);
whoILikedBtn.addEventListener('click', whoLiked);


function whoPoked(){
	whoPokedMeBtn.classList.toggle('uppercase');
	whoIPokedBtn.classList.toggle('uppercase');

	whoPokedMe.classList.toggle('invisible');
	whoIPoked.classList.toggle('invisible');
};

whoPokedMeBtn.addEventListener('click', whoPoked);
whoIPokedBtn.addEventListener('click', whoPoked);

function whoViewed(){
	whoViewedMeBtn.classList.toggle('uppercase');
	whoIViewedBtn.classList.toggle('uppercase');

	whoViewedMe.classList.toggle('invisible');
	whoIViewed.classList.toggle('invisible');
};

whoViewedMeBtn.addEventListener('click', whoViewed);
whoIViewedBtn.addEventListener('click', whoViewed);


for (var i = 0; i < 40; i++){
	var k = i;
	function anotherUser(k){
		var i = k+1;
		var user = [];
		userName = 'user' + i;
		user[i] = document.getElementById(userName);
		user[i].addEventListener('click', function(){
			removeClasses();
			anotherProfile.classList.add('open');
			panel.classList.add('not-active');
		},false);
		var userPoke = [];
		userPokeName = 'userPoke' + i;
		userPoke[i] = document.getElementById(userPokeName);
		userPoke[i].addEventListener('click', function(){
			removeClasses();
			anotherProfile.classList.add('open');
			panel.classList.add('not-active');
		},false);
		var userView = [];
		userViewName = 'userView' + i;
		userView[i] = document.getElementById(userViewName);
		userView[i].addEventListener('click', function(){
			removeClasses();
			anotherProfile.classList.add('open');
			panel.classList.add('not-active');
		},false);
	};
	anotherUser(k);
};


var carousel = ["movies","television","music","books","sport","athletes","inspirational","restaurants","games","groups"];

for (var i = 0, j = carousel.length; i < j; i++){
	function carouselBtn(k){
		var left = [];
			left[k] = 20;

		var prewBtn = [];
		var userPrewBtn = [];

		var nextBtn = [];
		var userNextBtn = [];

		var carouselDiv = [];
		var userCarouselDiv = [];

		prewBtn[k] = document.getElementById(carousel[k]+'-prew');
		userPrewBtn[k] = document.getElementById('user-' + carousel[k]+'-prew');

		nextBtn[k] = document.getElementById(carousel[k]+'-next');
		userNextBtn[k] = document.getElementById('user-' + carousel[k]+'-next');

		carouselDiv[k] = document.getElementById(carousel[k]+'-div');
		userCarouselDiv[k] = document.getElementById('user-' + carousel[k]+'-div');

		var count = [];
			count[k] = (function(){
				var b = 0;
				var a = carouselDiv[k].childNodes;
				for (var i = 0, j = a.length; i < j; i++) {
					if(a[i].nodeName == "IMG"){
						b++;
					};
				};
				return b;
			})();
			// console.log(count);

		var userCount = [];
			userCount[k] = (function(){
				var b = 0;
				var a = userCarouselDiv[k].childNodes;
				for (var i = 0, j = a.length; i < j; i++) {
					if(a[i].nodeName == "IMG"){
						b++;
					};
				};
				return b;
			})();
			// console.log(userCount);

		carouselPrewBtn(prewBtn[k],carouselDiv[k]);
		carouselNextBtn(nextBtn[k],carouselDiv[k],count[k]);
		carouselPrewBtn(userPrewBtn[k],userCarouselDiv[k]);
		carouselNextBtn(userNextBtn[k],userCarouselDiv[k],userCount[k]);

		function carouselPrewBtn(prewBtn,carouselDiv){
		prewBtn.addEventListener('click', function(){
				if (left[k]<0){
					left[k] += 200;
					var leftI = left[k] + 'px';
					carouselDiv.style.left = leftI;
				};
			});
		};

		function carouselNextBtn(nextBtn,carouselDiv,count){
			nextBtn.addEventListener('click', function(){
				if (left[k]>-(count*75-200)){
					left[k] -= 200;
					var leftI = left[k] + 'px';
					carouselDiv.style.left = leftI;
				};
			});
		};

	};
	carouselBtn(i);
};

			/*			Upgrade Button			*/
var upgrade = document.getElementById("upgrade");
var upgradeCloseBtn = document.getElementById("update-close-btn");
var upgradePhotoBtn = document.getElementById("upgrade-photo-btn");
// var upgradeMainBtn = document.getElementById("upgrade-main-btn");
	upgradeCloseBtn.addEventListener("click",function(){
		upgrade.classList.remove('active');
		if (!photos.classList.contains("photos-open")){
			removeClasses();
		};
	});
	upgradePhotoBtn.addEventListener("click",function(){
		upgrade.classList.add('active');
	});
	// upgradeMainBtn.addEventListener("click",function(){
	// 	upgrade.classList.add('active');
	// 	panel.classList.add('not-active');
	// });


			/*			Back To Search Results			*/
var backToSearch = document.getElementById('back-to-search-btn');
	backToSearch.addEventListener('click',function(){
		removeClasses();
		toggleClass(searchBtn, search, "search")
	});

var searchForm = document.getElementById('search_form');
	searchForm.addEventListener('submit', function(event){
		event.preventDefault();		//del later
		removeClasses();
		searchResults.classList.add('active');
		darkBackground.classList.add('active');
		panel.classList.add('not-active');
	})

// if (typeof personalLinks.style.transform == 'undefined' && panel.offsetWidth < 80) {
// 	personalLinks.style.visibility = "hidden";
// 	alert(panel.offsetWidth);
// };
panel.addEventListener('click',function(){
	setTimeout(function(){
		if (typeof personalLinks.style.transform == 'undefined' && panel.offsetWidth < 80) {
			personalLinks.style.visibility = "hidden";
		} else{
			personalLinks.style.visibility = "visible";
		};
	} ,400)
});

if (typeof personalLinks.style.transform == 'undefined' && panel.offsetWidth < 80) {
	personalLinks.style.visibility = "hidden";
};