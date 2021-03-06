import React, { useEffect, useState } from 'react';
import './Reminder.css';

import { useStateValue } from './StateProvider';

import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import Dialog from '@material-ui/core/Dialog';
import {
	DialogContent,
	DialogTitle,
	TextField,
	Tooltip,
} from '@material-ui/core';

import ReminderCard from './ReminderCard';
import { useHistory } from 'react-router-dom';

import ReminderSvg from './ReminderSvg';

const useStyles = makeStyles((theme) => ({
	textField: {
		marginBottom: '20px',
		//   display: 'grid',
		//   placeItems: 'center'
	},
}));

function Reminder() {
	const history = useHistory();

	const classes = useStyles();

	const [{ activeCategory, reminders }, dispatch] = useStateValue();

	const [dialogOpen, setDialogOpen] = useState(false);
	const [activeReminders, setActiveReminders] = useState([]);
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [date, setDate] = useState('');
	const [time, setTime] = useState('');
	const [error, setError] = useState(false);

	useEffect(() => {
		const filterReminders = () => {
			var items = reminders.filter(function (reminder) {
				return reminder.category === activeCategory;
			});

			// console.log(items);

			setActiveReminders(items);
		};

		filterReminders();
	}, [reminders]);

	// console.log(activeReminders);

	// console.log(reminders);

	const handleDialogOpen = () => {
		setDialogOpen(true);
	};

	const handleDialogClose = () => {
		setDialogOpen(false);
	};

	// Date format reminder match
	// console.log(new Date().toLocaleString())

	const handleDateTime = (e) => {
		setError(false);

		const item = e.target.value;

		// 2020-12-12T17:08
		// console.log(item.slice(0, 10));
		// console.log(item.slice(11, 16));

		setDate(item.slice(0, 10));
		setTime(item.slice(11, 16));
	};

	// console.log(Math.floor(Math.random() * 10000) + Math.floor(Math.random() * 1000));

	const handleReminderSubmit = (e) => {
		e.preventDefault();

		var randomId =
			Math.floor(Math.random() * 10000) +
			Math.floor(Math.random() * 1000);

		var tempState = {
			category: activeCategory,
			id: randomId,
			title: title,
			text: description,
			time: time,
			date: date,
		};

		// console.log("Add Reminder >>>", tempState);

		if (title.length == 0 || date.length == 0 || time.length == 0) {
			setError(true);
		} else {
			dispatch({
				type: 'ADD_REMINDER',
				payload: tempState,
			});

			setTitle('');
			setDescription('');
			setDate('');
			setTime('');
			setDialogOpen(false);
		}
	};

	// console.log("Dialog Open >>>>", dialogOpen);

	return (
		<div className='reminder'>
			{activeCategory?.length > 0 ? (
				<div className='reminder__container'>
					<h1>Your Reminders for {activeCategory}</h1>

					<div className='reminder__add' onClick={handleDialogOpen}>
						<AddCircleIcon className='reminder__addIcon' />

						<p className='reminder__addText'>Add new reminder</p>
					</div>

					<Dialog
						open={dialogOpen}
						onClose={handleDialogClose}
						aria-labelledby='form-dialog-title'
					>
						<div className='reminder__dialog'>
							<DialogTitle id='form-dialog-title'>
								Add a Reminder
							</DialogTitle>
							<DialogContent>
								<form onSubmit={handleReminderSubmit}>
									<TextField
										error={
											error
												? title.length > 0
													? false
													: true
												: false
										}
										helperText={
											error
												? title.length > 0
													? null
													: 'please add a title'
												: null
										}
										autoFocus
										margin='dense'
										label='Title'
										type='text'
										fullWidth
										className={classes.textField}
										value={title}
										onChange={(e) => {
											setTitle(e.target.value);
											setError(false);
										}}
									/>

									<TextField
										autoFocus
										margin='dense'
										label='Description'
										type='text'
										fullWidth
										className={classes.textField}
										value={description}
										onChange={(e) =>
											setDescription(e.target.value)
										}
									/>

									<TextField
										error={
											error
												? date.length > 0
													? false
													: true
												: false
										}
										helperText={
											error
												? date.length > 0
													? null
													: 'please select date and time'
												: null
										}
										id='datetime-local'
										label='Set Date and Time'
										type='datetime-local'
										// defaultValue="2017-05-24T10:30"
										className={classes.textField}
										InputLabelProps={{
											shrink: true,
										}}
										onChange={handleDateTime}
									/>

									<div className='reminder__dialogButtons'>
										<button
											style={{
												backgroundColor: '#fe5f55',
											}}
											type='button'
											onClick={handleDialogClose}
										>
											close
										</button>
										<button
											style={{
												backgroundColor: '#17b978',
											}}
											type='submit'
											onClick={handleReminderSubmit}
										>
											add
										</button>
									</div>
								</form>
							</DialogContent>
						</div>
					</Dialog>

					<div
						className={`${
							activeReminders?.length == 0 && 'reminder__noCards'
						} ${'reminder__cards'}`}
					>
						{activeReminders?.map((reminder) => (
							<ReminderCard
								id={reminder.id}
								title={reminder.title}
								text={reminder.text}
								time={reminder.time}
								date={reminder.date}
								openDialog={handleDialogOpen}
								// pass delete
							/>
						))}
					</div>

					<div className='reminder__buttons'>
						<Tooltip title='Go To Categories' placement='right-end'>
							<KeyboardReturnIcon
								style={{ color: '#3a3d44' }}
								className='reminder__buttons--hover'
								onClick={() => history.push('/categories')}
							/>
						</Tooltip>
						<Tooltip
							title='Delete This Category'
							placement='left-end'
						>
							<DeleteIcon
								style={{ color: '#3a3d44' }}
								className='reminder__buttons--hover'
							/>
						</Tooltip>
					</div>
				</div>
			) : (
				<>
					<Tooltip title='Go To Categories' placement='right-end'>
						<KeyboardReturnIcon
							style={{ color: '#3a3d44' }}
							onClick={() => history.push('/categories')}
						/>
					</Tooltip>
					<ReminderSvg />
				</>
			)}
		</div>
	);
}
export default Reminder;
