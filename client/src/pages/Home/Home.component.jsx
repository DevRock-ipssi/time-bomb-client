import React, { useState } from 'react';

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
import { Button } from '@material-ui/core';

// Styles
import './Home.styles.css';
import RoomAccessForm from '../../components/forms/RoomAccessForm';

const Home = () => {
	const [ loading, setLoading ] = useState(false);

	//init room
	const initRoom = (e) => {
		e.preventDefault();
        setLoading(true);
		alert('You clicked !');
	};
    
	//join room
	const joinRoom = (e) => {
		e.preventDefault();
		alert('You clicked !');
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
					Intégrer une partie
				</button>
				<button
					className="btn btn-primary btn-lg game_register"
					type="button"
					data-toggle="modal"
					data-target="#register"
				>
					Créer une partie
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
