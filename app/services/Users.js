angular.module('app')
	.factory('Users', function() {
		var users = [
			{index: 0, name: "Eva", picture: "app/assets/img/profile-pictures/profile_pic1.png"},
			{index: 1, name: "S.E.N. Waweru", picture: "app/assets/img/profile-pictures/profile_pic2.png"},
			{index: 2, name: "Patricia", picture: "app/assets/img/profile-pictures/profile_pic3.png"},
			{index: 3, name: "David", picture: "app/assets/img/profile-pictures/profile_pic4.png"},
			{index: 4, name: "Joseph", picture: "app/assets/img/profile-pictures/profile_pic5.png"},
			{index: 5, name: "Andrew", picture: "app/assets/img/profile-pictures/profile_pic6.png"},
			{index: 6, name: "Dr. Halima", picture: "app/assets/img/profile-pictures/profile_pic7.png"}
		];

		return users;
	});
