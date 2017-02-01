angular.module('app')
	.factory('Questions', ['Users', function(Users) {
		var questions = [
			{
				index: 0,
				user: Users[0],
				title: "Will insulin make my patient gain weight?",
				content: "All my patients with diabetes should see an opthalmologist yearly for " +
				"a dialeted eye examination- begining at diagnosis in people with type " +
				"diabetes and after 5 years in people with type 1 diabetes after puberty. " +
				"Patients with know eye disease, symptoms of blurred vision in one eye, or " +
				"blind spots may need to see their ophthalmologist more frequently.",
				upvotes: 0,
				votesValue: "upvotes",
				followed: true,
				comments: [
					{
						user: Users[1],
						upvotes: 0,
						votesValue: "upvotes",
						content: "Numbers or tingling in your feet should be " +
						"reported to your doctor at your regular visits."
					},
					{
						user: Users[2],
						upvotes: 0,
						votesValue: "upvotes",
						content: "Numbers or tingling in your feet should be " +
						"reported to your doctor at your regular visits.",
						comments: [
							{
								user: Users[3],
								upvotes: 0,
								votesValue: "upvotes",
								content: "You should check your feet daily for redness, " +
								"caluses, cracks or skin breakdown."
							}
						]
					},
					{
						user: Users[4],
						upvotes: 0,
						votesValue: "upvotes",
						content: "When your blood sugar is low, your body gives out signs " +
						"that you need food. Different people have different symptoms. You " +
						"will learn to know your symptoms."
					}
				]
			},
			{
				index: 1,
				user: Users[5],
				title: "Vegan diet in diabetes treatment?",
				content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do " +
				"eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim " +
				"ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut " +
				"aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit " +
				"in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur " +
				"sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt " +
				"mollit anim id est laborum.",
				upvotes: 0,
				votesValue: "upvotes",
				followed: false,
				comments: [
					{
						user: Users[1],
						upvotes: 0,
						votesValue: "upvotes",
						content: "Numbers or tingling in your feet should be " +
						"reported to your doctor at your regular visits."
					},
					{
						user: Users[3],
						upvotes: 0,
						votesValue: "upvotes",
						content: "Numbers or tingling in your feet should be " +
						"reported to your doctor at your regular visits."
					},
					{
						user: Users[4],
						upvotes: 0,
						votesValue: "upvotes",
						content: "Numbers or tingling in your feet should be " +
						"reported to your doctor at your regular visits."
					},
					{
						user: Users[6],
						upvotes: 0,
						votesValue: "upvotes",
						content: "You should check your feet daily for redness, " +
						"caluses, cracks or skin breakdown."
					},
					{
						user: Users[2],
						upvotes: 0,
						votesValue: "upvotes",
						content: "When your blood sugar is low, your body gives out signs " +
						"that you need food. Different people have different symptoms. You " +
						"will learn to know your symptoms."
					}
				]
			},
			{
				index: 2,
				user: Users[4],
				title: "Vegan diet to stop diabetes progress",
				content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem " +
				"accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab " +
				"illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
				upvotes: 0,
				votesValue: "upvotes",
				followed: true,
				comments: [
					{
						user: Users[6],
						upvotes: 0,
						votesValue: "upvotes",
						content: "Numbers or tingling in your feet should be " +
						"reported to your doctor at your regular visits."
					},
					{
						user: Users[2],
						upvotes: 0,
						votesValue: "upvotes",
						content: "Numbers or tingling in your feet should be " +
						"reported to your doctor at your regular visits."
					},
					{
						user: Users[0],
						upvotes: 0,
						votesValue: "upvotes",
						content: "You should check your feet daily for redness, " +
						"caluses, cracks or skin breakdown."
					},
					{
						user: Users[1],
						upvotes: 0,
						votesValue: "upvotes",
						content: "Numbers or tingling in your feet should be " +
						"reported to your doctor at your regular visits."
					}
				]
			},
			{
				index: 3,
				user: Users[3],
				title: "Vegan diet in diabetes treatment?",
				content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do " +
				"eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim " +
				"ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut " +
				"aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit " +
				"in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur " +
				"sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt " +
				"mollit anim id est laborum.",
				upvotes: 0,
				votesValue: "upvotes",
				followed: true,
				comments: [
					{
						user: Users[1],
						upvotes: 0,
						votesValue: "upvotes",
						content: "Numbers or tingling in your feet should be " +
						"reported to your doctor at your regular visits."
					},
					{
						user: Users[3],
						upvotes: 0,
						votesValue: "upvotes",
						content: "Numbers or tingling in your feet should be " +
						"reported to your doctor at your regular visits."
					},
					{
						user: Users[4],
						upvotes: 0,
						votesValue: "upvotes",
						content: "Numbers or tingling in your feet should be " +
						"reported to your doctor at your regular visits."
					},
					{
						user: Users[6],
						upvotes: 0,
						votesValue: "upvotes",
						content: "You should check your feet daily for redness, " +
						"caluses, cracks or skin breakdown."
					},
					{
						user: Users[2],
						upvotes: 0,
						votesValue: "upvotes",
						content: "When your blood sugar is low, your body gives out signs " +
						"that you need food. Different people have different symptoms. You " +
						"will learn to know your symptoms."
					}
				]
			},
			{
				index: 4,
				user: Users[0],
				title: "Vegan diet in diabetes treatment?",
				content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do " +
				"eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim " +
				"ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut " +
				"aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit " +
				"in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur " +
				"sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt " +
				"mollit anim id est laborum.",
				upvotes: 0,
				votesValue: "upvotes",
				followed: false,
				comments: [
					{
						user: Users[1],
						upvotes: 0,
						votesValue: "upvotes",
						content: "Numbers or tingling in your feet should be " +
						"reported to your doctor at your regular visits."
					},
					{
						user: Users[3],
						upvotes: 0,
						votesValue: "upvotes",
						content: "Numbers or tingling in your feet should be " +
						"reported to your doctor at your regular visits."
					},
					{
						user: Users[4],
						upvotes: 0,
						votesValue: "upvotes",
						content: "Numbers or tingling in your feet should be " +
						"reported to your doctor at your regular visits."
					},
					{
						user: Users[6],
						upvotes: 0,
						votesValue: "upvotes",
						content: "You should check your feet daily for redness, " +
						"caluses, cracks or skin breakdown."
					},
					{
						user: Users[2],
						upvotes: 0,
						votesValue: "upvotes",
						content: "When your blood sugar is low, your body gives out signs " +
						"that you need food. Different people have different symptoms. You " +
						"will learn to know your symptoms."
					}
				]
			},
			{
				index: 5,
				user: Users[2],
				title: "Vegan diet in diabetes treatment?",
				content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do " +
				"eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim " +
				"ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut " +
				"aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit " +
				"in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur " +
				"sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt " +
				"mollit anim id est laborum.",
				upvotes: 0,
				votesValue: "upvotes",
				followed: false,
				comments: [
					{
						user: Users[1],
						upvotes: 0,
						votesValue: "upvotes",
						content: "Numbers or tingling in your feet should be " +
						"reported to your doctor at your regular visits."
					}
				]
			},
			{
				index: 6,
				user: Users[3],
				title: "Vegan diet in diabetes treatment?",
				content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do " +
				"eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim " +
				"ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut " +
				"aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit " +
				"in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur " +
				"sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt " +
				"mollit anim id est laborum.",
				upvotes: 0,
				votesValue: "upvotes",
				followed: false,
				comments: [
					{
						user: Users[1],
						upvotes: 0,
						votesValue: "upvotes",
						content: "Numbers or tingling in your feet should be " +
						"reported to your doctor at your regular visits."
					},
					{
						user: Users[3],
						upvotes: 0,
						votesValue: "upvotes",
						content: "Numbers or tingling in your feet should be " +
						"reported to your doctor at your regular visits."
					}
				]
			},
			{
				index: 7,
				user: Users[4],
				title: "Vegan diet in diabetes treatment?",
				content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do " +
				"eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim " +
				"ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut " +
				"aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit " +
				"in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur " +
				"sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt " +
				"mollit anim id est laborum.",
				upvotes: 0,
				votesValue: "upvotes",
				followed: true,
				comments: [
					{
						user: Users[1],
						upvotes: 0,
						votesValue: "upvotes",
						content: "Numbers or tingling in your feet should be " +
						"reported to your doctor at your regular visits."
					},
					{
						user: Users[3],
						upvotes: 0,
						votesValue: "upvotes",
						content: "Numbers or tingling in your feet should be " +
						"reported to your doctor at your regular visits."
					},
					{
						user: Users[4],
						upvotes: 0,
						votesValue: "upvotes",
						content: "Numbers or tingling in your feet should be " +
						"reported to your doctor at your regular visits."
					},
					{
						user: Users[6],
						upvotes: 0,
						votesValue: "upvotes",
						content: "You should check your feet daily for redness, " +
						"caluses, cracks or skin breakdown."
					}
				]
			},
			{
				index: 8,
				user: Users[6],
				title: "Vegan diet in diabetes treatment?",
				content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do " +
				"eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim " +
				"ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut " +
				"aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit " +
				"in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur " +
				"sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt " +
				"mollit anim id est laborum.",
				upvotes: 0,
				votesValue: "upvotes",
				followed: false,
				comments: [
					{
						user: Users[1],
						upvotes: 0,
						votesValue: "upvotes",
						content: "Numbers or tingling in your feet should be " +
						"reported to your doctor at your regular visits."
					},
					{
						user: Users[3],
						upvotes: 0,
						votesValue: "upvotes",
						content: "Numbers or tingling in your feet should be " +
						"reported to your doctor at your regular visits."
					},
					{
						user: Users[4],
						upvotes: 0,
						votesValue: "upvotes",
						content: "Numbers or tingling in your feet should be " +
						"reported to your doctor at your regular visits."
					}
				]
			}
		];
		return questions;
	}]);
