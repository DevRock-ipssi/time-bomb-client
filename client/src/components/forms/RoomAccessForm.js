import React from 'react';
import CustomButton from '../CustomButton/CustomButton';

const RoomAccessForm = ({
	pseudoLabelText = 'Pseudo',
	pinLabelText = 'Pin',
	btnSubmitText = 'Valider',
	btnCloseText = 'Fermer',
	onSubmitHandler = (f) => f,
	hidePinInput = false,
    modalId = "#"
}) => {
	return (
		<div
			class="modal fade"
			id={modalId}
			data-backdrop="static"
			data-keyboard="false"
			tabindex="-1"
			role="dialog"
			aria-labelledby="staticBackdropLabel"
			aria-hidden="true"
		>
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-body">
						<form id="form_join_room" onSubmit={onSubmitHandler}>
							<div className="form-group">
								<label htmlFor="pseudo">{pseudoLabelText}</label>
								<input type="text" className="form-control" id="pseudo" name="pseudo" required />
							</div>
							{hidePinInput ? (
								<div className="form-group">
									<label htmlFor="pin">{pinLabelText}</label>
									<input type="text" className="form-control" id="pin" name="pin" required />
								</div>
							) : null}
							<button type="submit" className="btn btn-primary" id="form_join_room_btn">
								{btnSubmitText}
							</button>
							<button type="button" className="btn btn-secondary" data-dismiss="modal" id="start_btn_close">
								{btnCloseText}
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RoomAccessForm;
