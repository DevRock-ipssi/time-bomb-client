import React from 'react';
//Assets
import backCard from '../../assets/img/carte/back.jpg';

// Styles
import './RoomBlue.styles.css';

const RoomBlue = () => {
	return (
		<main id="room_blue">
			<h1 id="titre">Time Bomb</h1>
		{/* 	<a
				tabindex="0"
				class="btn btn-lg btn-danger popover-dismiss"
				role="button"
				data-toggle="popover"
				data-trigger="focus"
				data-content="à définir selon le rôle"
			>
				Votre objectif
			</a> */}
             <Link to="#" className="btn btn-lg btn-primary popover-dismiss">
                    <Typography>Votre objectif</Typography>
                </Link>
			<section id="playeur" class="float-right">
				<h2>Pseudo : Anta</h2>
				<h3>Équipe : Sherlock</h3>
				<h4>Tour N° : 1</h4>
				<h5>Nb. joueurs : 5</h5>
			</section>

			<section id="room_playeur">
				<div id="carte" class="element_center">
					<img src={backCard} alt={"Carte cachée"} class="click" data-img="id_type_carte" />
					<img src={backCard} alt={"Carte cachée"} class="click" data-img="id_type_carte" />
					<img src={backCard} alt={"Carte cachée"} class="click" data-img="id_type_carte" />
					<img src={backCard} alt={"Carte cachée"} class="click" data-img="id_type_carte" />
					<img src={backCard} alt={"Carte cachée"} class="click" data-img="id_type_carte" />
				</div>
			</section>
		</main>
	);
};

export default RoomBlue;
