//React ---
import React, { useState, Fragment } from 'react';

import { toast } from 'react-toastify';

import axiosInstance from '../../axios';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { S_CustomFormDialog } from './CustomFormDialog.styles';

import { useHistory } from 'react-router-dom';

const CustomFormDialog = ({
	btnTextClose = 'Fermer',
	btnTextSubmit = 'Accéder au jeu',
	dialogTitle = "Création d'une nouvelle partie de jeu",
	openDialogBtnText = 'Créer une partie',
	isCreateGameMode = false
}) => {
	const S = S_CustomFormDialog();

	const [ open, setOpen ] = React.useState(false);
	const [ inputData, setInputData ] = useState({
		pseudo: '',
		pin: ''
	});
	const [ loading, setLoading ] = useState(false);
	const [ roomGameMaster, setRoomGameMaster ] = useState(null);

	const history = useHistory();

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	const handleInputChange = (event) => {
		setInputData({
			...inputData,
			[event.target.name]: event.target.value
		});
	};

	// Init the room
	const handleInitRoom = (e) => {
		e.preventDefault();
		setLoading(true);
		const { pseudo } = inputData;
		axiosInstance
			.post('/users/init-room', { pseudo })
			.then((res) => {
				console.log(res);
				if (res.data) {
					setLoading(false);
					toast.success(`Félicitation ${res.data.info.gameMaster.pseudo} votre salle de jeu a été créée !`);

					setRoomGameMaster(res.data);

					sessionStorage.setItem('room_gameMaster', JSON.stringify(res.data));
					sessionStorage.setItem('user_id', res.data.info.gameMaster._id);

					//history.push('/room');
				} else {
					setLoading(false);
					toast.error("Une erreur s'est produite lors de la communication avec le serveur. Veuillez réessayer !", {
						delay: 8000
					});
				}
			})
			.catch((err) => console.log('ERREUR', err));
	};

	// Join the room
	const handleJoinRoom = (e) => {
		e.preventDefault();
		setLoading(true);
		const { pseudo, pin } = inputData;
		axiosInstance
			.post('/users/join-room', { pseudo, pin })
			.then((res) => {
				console.log(res.data);
				if (res.data) {
					setLoading(false);
					toast.success(`${res.data.message}`);
					setRoomGameMaster(res.data);

					sessionStorage.setItem('room', JSON.stringify(res.data));
					const userData = res.data.userJoining ? res.data.userJoining._id : res.data.userData.user._id;
					sessionStorage.setItem(`user_id_${pseudo}`, userData);

					history.push('/room');
				} else {
					setLoading(false);
					toast.error("Une erreur s'est produite lors de la communication avec le serveur. Veuillez réessayer !", {
						delay: 8000
					});
				}
			})
			.catch((err) => {
				console.log('ERREUR', err);
				//toast.error('Le pin entré est invalide !');
			});
	};

	return (
		<div>
			<Button
				variant="outlined"
				onClick={handleClickOpen}
				className={openDialogBtnText.includes('Créer') ? S.openBtnCreateRound : S.openBtnIntegrateRound}
			>
				{openDialogBtnText}
			</Button>
			<Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
				<DialogTitle id="form-dialog-title">{dialogTitle}</DialogTitle>
				<DialogContent>
					<DialogContentText component="div">
						Pour accéder au jeu, veuillez renseigner les informations ci-dessous !
						{isCreateGameMode && roomGameMaster ? (
							<p>
								<strong>
									Invitez vos proches à vous rejoindre en leur communiquant votre pin.<br />
									PIN pour accéder au jeu: <em>{roomGameMaster.info && roomGameMaster.info.pin}</em>
								</strong>
							</p>
						) : !isCreateGameMode && roomGameMaster ? (
							<p>
								<strong>
									{roomGameMaster && (
										<Fragment>
											{roomGameMaster.message}<br />
											Veuillez créer votre propre partie de jeu et inviter d'autres personnes pour jouer !
										</Fragment>
									)}
									{!roomGameMaster.message ? (
										<Fragment>
											<br />Invitez d'autres personnes à vous rejoindre en leur communiquant le pin ci-dessous:
										</Fragment>
									) : null}
									<em>{roomGameMaster.userData && roomGameMaster.userData.pin}</em>
								</strong>
							</p>
						) : null}
					</DialogContentText>

					<TextField
						id="pseudo"
						name="pseudo"
						autoFocus
						margin="dense"
						label="Votre pseudo dans le jeu"
						type="text"
						fullWidth
						onChange={handleInputChange}
						value={inputData.pseudos}
					/>

					{isCreateGameMode ? null : (
						<TextField
							id="pin"
							name="pin"
							autoFocus={isCreateGameMode}
							margin="dense"
							label="Le Pin pour accéder au jeu"
							type="text"
							fullWidth
							onChange={handleInputChange}
							value={inputData.pin}
						/>
					)}
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="secondary">
						{btnTextClose}
					</Button>
					<Button onClick={isCreateGameMode ? handleInitRoom : handleJoinRoom} color="primary">
						{btnTextSubmit}
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default CustomFormDialog;
