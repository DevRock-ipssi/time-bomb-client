import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// Assets
import cloud1 from '../../assets/img/clouds/cloud1.png';
import cloud2 from '../../assets/img/clouds/cloud2.png';
import cloud3 from '../../assets/img/clouds/cloud3.png';
import cloud4 from '../../assets/img/clouds/cloud4.png';
import cloud5 from '../../assets/img/clouds/cloud5.png';
import joueur8 from '../../assets/img/playeur/joueur-8.jpg';
import bomb from '../../assets/img/bombe.png';
import picture from '../../assets/img/picture.png';

// Material-ui

// Components
import RoomAccessForm from '../../components/forms/RoomAccessForm';

// Styles
import './Home.styles.css';

import $ from 'jquery';

const Home = () => {
	const [ loading, setLoading ] = useState(false);
	const history = useHistory();

	//init room
	const initRoom = () => {
		$('#form_init_room').submit(function(e) {
			e.preventDefault();

			$('#form_init_room_btn').empty();
			$('<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading...').appendTo(
				'#form_init_room_btn'
			);

			$.post({
				url: 'http://127.0.0.1:8080/users/init-room',
				cache: false,
				dataType: 'json',
				ContentType: 'application/json;charset=utf-8',
				data: $(this).serialize(),
				success: function(response) {
					$('#register .modal-body').empty();
					let html =
						"<p style='color:black'>Félicitation " +
						response.info.gameMaster.pseudo +
						" votre partie est crée.</p><p style='color:black'>Invitez vos proches à vous rejoindre en leur communiquant votre pin.<br> PIN: " +
						response.info.pin +
						"</p><br><a href='room.html' class='btn btn-dark'>Accédez à la room</a>";
					$('#register .modal-body').html(html);
					$('#register_btn_close').prop('disabled', true);
					sessionStorage.setItem('room_gameMaster', JSON.stringify(response));
					sessionStorage.setItem('user_id', response.info.gameMaster._id);
					history.push('/room');
				},
				error: function() {
					alert("Une erreur s'est produite");
				}
			});
		});
	};

	//join room
	const joinRoom = () => {
		$('#form_join_room').submit(function(e) {
			e.preventDefault();
			$('#form_join_room_btn').empty();
			$('<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading...').appendTo(
				'#form_join_room_btn'
			);

			$.post({
				url: 'http://127.0.0.1:8080/users/join-room',
				cache: false,
				dataType: 'json',
				ContentType: 'application/json;charset=utf-8',
				data: $(this).serialize(),
				success: function(response) {
					if (response == 'Le pin entré est invalide !') {
						$('#start .modal-body').empty();
						let html = "<p style='color:red'>" + response + '</p>';
						$('#start .modal-body').html(html);
					} else {
						$('#start .modal-body').empty();
						let html =
							"<p style='color:black'>Félicitation " +
							response.userData.pseudo +
							' ' +
							response.message +
							"</p><p style='color:black'>Invitez d'autre personne à vous rejoindre en leur communiquant le pin.<br> PIN : " +
							response.userData.pin +
							"</p><br><a href='room.html' class='btn btn-dark'>Accédez à la room</a>";
						$('#start .modal-body').html(html);
						sessionStorage.setItem('room', JSON.stringify(response));
						sessionStorage.setItem('user_id', response.userJoining._id);
						$('#start_btn_close').prop('disabled', true);
					}
				},
				error: function() {
					alert("Une erreur s'est produite");
				}
			});
		});
	};

	return (
		<main id="home">
			<section className="banner">
				<h1 id="titre">Time Bomb</h1>
				<h2>
					Mariaty Vs<br /> Sherlock
				</h2>
				<a href="#presentation" id="banner_link">
					<span />
				</a>
				<button className="btn btn-danger btn-lg game_start" type="button" data-toggle="modal" data-target="#start">
					Créer une partie
				</button>
				<button
					className="btn btn-primary btn-lg game_register"
					type="button"
					data-toggle="modal"
					data-target="#register"
				>
					Intégrer une partie
				</button>

				<div className="img">
					<img src={picture} alt="jeux" />
				</div>

				<div className="clouds">
					<img src={cloud1} /*style="--i:1;"*/ alt={'cloud'} />
					<img src={cloud2} /*style="--i:2;"*/ alt={'cloud'} />
					<img src={cloud3} /*style="--i:3;"*/ alt={'cloud'} />
					<img src={cloud3} /*style="--i:4;"*/ alt={'cloud'} />
					<img src={cloud5} /*style="--i:5;"*/ alt={'cloud'} />
					<img src={cloud1} /*style="--i:1;"*/ alt={'cloud'} />
					<img src={cloud2} /*style="--i:2;"*/ alt={'cloud'} />
					<img src={cloud3} /*style="--i:3;"*/ alt={'cloud'} />
					<img src={cloud4} /*style="--i:4;"*/ alt={'cloud'} />
					<img src={cloud5} /*style="--i:5;"*/ alt={'cloud'} />
				</div>
			</section>

			<section id="presentation">
				<div className="col-sm-12 col-md-6" data-aos="fade-up" data-aos-easing="ease-in-out">
					<img src={joueur8} alt={'joueur'} />
				</div>

				<p className="col-sm-12 col-md-6" data-aos="fade-up" data-aos-easing="ease-in-out">
					Londres, 1890. Big Ben se tient fièrement au sommet de l’Elizabeth Tower, et le premier son de cette cloche
					retentit, d’écho en écho dans les rues de cette grande cité victorienne. Les passants profitent paisiblement
					des quelques rayons de soleil pour s’y balader nonchalamment. Au milieu des rires embaumant cette scène,
					Sherlock et ses compagnons se tiennent là, immobiles et silencieux. Entre deux tintements, une sonnerie
					s’élève de la cabine téléphonique du coin de la rue. Sherlock décroche le téléphone, le cœur serré. Son visage
					se crispe dès lors qu’il se lance dans une course folle vers l’immense horloge de Londres. Au douzième coup de
					cloche sonnant midi, Moriarty et ses acolytes déclencheront la bombe qui fera exploser Big Ben.
				</p>
			</section>

			<section id="regle">
				<article className="col-sm-12 col-md-6" data-aos="fade-up">
					<h3>Votre objectif</h3>
					<hr />
					<p>
						Moriarty a posé une bombe au cœur de Big Ben qu’il veut faire exploser, tandis que Sherlock se précipite
						pour la désamorcer. Au début de la partie, vous découvrez secrètement à quelle équipe, de Sherlock ou
						Moriarty, vous appartenez, et tentez d’identifier vos partenaires sans vous faire démasquer par vos
						adversaires. Tour à tour, choisissez un câble à couper chez un autre joueur pour, selon votre équipe, tenter
						de désamorcer ou de faire exploser la bombe. L’équipe de Sherlock gagne la partie si elle parvient à
						désamorcer la bombe, tandis que l’équipe de Moriarty gagne la partie si elle parvient à faire exploser la
						bombe qui détruira Big Ben
					</p>
				</article>

				<div className="col-sm-12 col-md-6" data-aos="fade-up">
					<img src={bomb} alt={'bomb'} />
				</div>
			</section>

			{/* <!--FORM--> */}
			{/* Init a room */}
			<RoomAccessForm hidePinInput modalId="register" onSubmitHandler={initRoom} />

			{/* Join a room */}
			<RoomAccessForm modalId="start" onSubmitHandler={joinRoom} />
		</main>
	);
};

export default Home;
