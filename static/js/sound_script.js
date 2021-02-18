var musicFlg = false

const ongaku = new Ongaq ({
	api_key: "afdd8b1507aa49dc89125afbc1c3767f",
	volume: 100,
	bpm: 130,
	onReady: () => {

		const button = document.getElementById("button")
		button.className = "button start"

		button.onclick = () => {
			if (ongaku.params.isPlaying) {
				ongaku.pause()
				button.className = "button start"
				musicFlg = false
			} else {
				ongaku.start()
				button.className = "button pause"
				musicFlg = true
			}
		}

	}
})

const my_drums = new Part ({
	sound: "small_cube_drums"
})
my_drums.add( new Filter ({
	key: "kick",
	active: beat => beat % 8 === 0
}))
my_drums.add( new Filter ({
	key: "hihat",
	active: beat => beat % 8 === 4
}))
ongaku.add( my_drums )
