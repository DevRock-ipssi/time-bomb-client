import React, { Fragment } from 'react';
//Assets
import backCard from '../../assets/img/carte/back.jpg';

// Styles
import './Room.styles.css';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';

const Room = () => {

	return (
		<Fragment>
			<main id="room" class="room">
				<h1 id="titre">Time Bomb</h1>
                <Link to="#" className="btn btn-lg btn-primary popover-dismiss">
                    <Typography>Votre objectif</Typography>
                </Link>
				{/* <a
					tabindex="0"
					class="btn btn-lg btn-danger popover-dismiss"
					role="button"
					data-toggle="popover"
					data-trigger="focus"
					data-content="Ã  dÃ©finir selon le rÃ´le"
					href="#"
				>
					Votre objectif
				</a> */}
				<section id="playeur" class="float-right">
					<h4 id="pin">{""}</h4>
					<h4 id="player_name">{""}</h4>
					<h4 id="player_team">{""}</h4>
					<h4 id="room_number_rounds">{""}</h4>
					<h4 id="room_number_players">{""}</h4>
				</section>

				<section id="room_playeur">
					<div id="carte" class="element_center">
						<img src={backCard} alt={'Carte cachée'} class="click" data-img="id_type_carte" />
						<img src={backCard} alt={'Carte cachée'} class="click" data-img="id_type_carte" />
						<img src={backCard} alt={'Carte cachée'} class="click" data-img="id_type_carte" />
						<img src={backCard} alt={'Carte cachée'} class="click" data-img="id_type_carte" />
						<img src={backCard} alt={'Carte cachée'} class="click" data-img="id_type_carte" />
					</div>
				</section>
			</main>

			<div
				class="modal fade"
				id="erreur"
				data-backdrop="static"
				data-keyboard="false"
				tabindex="-1"
				role="dialog"
				aria-labelledby="staticBackdropLabel"
				aria-hidden="true"
			>
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-body">
							<div class="modal-footer">
								<button type="button" class="btn btn-secondary" id="close">
									Fermer
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Room;
