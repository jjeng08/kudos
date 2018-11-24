$(function () {

	function getUsers() {
		$.get('/api/users/')
			.then(function (data) {
				for (let i = 0; i < data.length; i++) {
					const name = data[i].username;
					$('#senderList').append(`<option value="${name}">${name}</option>`)
					$('#receiverList').append(`<option value="${name}">${name}</option>`)
				}
			}).catch(function (err) {
				console.log(err);
			})
	}

	getUsers();

	function render() {
		$.get('/api/kudos/')
			.then(function (data) {
				for (let i = 0; i < data.length; i++) {
					$('#kudosDisplay').append(`
				<div class="border border-dark rounded col-md-12 kudoBox">
				<div class="row">
					<div class="col" align="center">
					<h4 >${data[i].title}</h4>
					</div>
				</div>
				<div class="row">
					<div class="col" align="center">
						<h5>To: ${data[i].sender}</h5>
					</div>
					<div class="col" align="center">
						<h5>From: ${data[i].receiver}</h5>
					</div>
				</div>
				<div class="row">
					<div class="col" align="center">
					<div >${data[i].body}</div>
					</div>
				</div>
			</div>`)
				}
			})
	}

	render();

	$('#cancelButton').on('click', closeModal) 
	function closeModal(event) {
		$('.validation').removeClass('show')
	}

	$('#submitButton').on('click', submitKudo)
	function submitKudo(event) {
		event.preventDefault();

		const newKudo = {
			sender: $('#senderList').val(),
			receiver: $('#receiverList').val(),
			title: $('#titleInput').val().trim(),
			body: $('#bodyInput').val().trim(),
		};

		if (newKudo.sender==='Pick!' || newKudo.receiver==='Choose!' || newKudo.title ==="" || newKudo.body ===""){
			$('.validation').addClass('show')
		} else {
		$.post('/api/kudos', newKudo)
			.then(
				$('#inputModal').modal('toggle')
			)
			.then(
				render(),
				$('.validation').removeClass('show')
			)
		}
	}

	$('#topBannerButton').on('click', openModal)
	function openModal(event) {
		event.preventDefault();
		console.log("Here");
		$('#inputModal').addClass("show");
	}
})