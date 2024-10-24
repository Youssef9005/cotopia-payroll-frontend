"use client";
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CButton from '../../shared/c-button';
import CInput from '../../shared/c-input';

export default function NewAdvanceForm() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <CButton title='New Advance' className='w-fit' onClick={handleClickOpen} />

            <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
                        event.preventDefault();
                        handleClose();
                    },
                }}
            >
                <div className='bg-[#090909] p-2'>
                    <div className='text-center'>
                        <DialogTitle className='text-white text-lg font-medium'>Send a new advance request</DialogTitle>
                    </div>

                    <DialogContent className='flex flex-col gap-y-5'>
                        <CInput type='text' name='advance-reason' id='advance-reason' label="Advance's Reason" placeholder='The Reason' className='w-96' />
                        <CInput type='number' name='advance-amount' id='advance-amount' label="Advance's amount" placeholder='0' className='w-96' />
                    </DialogContent>

                    <DialogActions className='flex w-full gap-x-2'>
                        <CButton title='Close' className='py-1 bg-red-800/30 flex-1' onClick={handleClose} />
                        <CButton type='submit' title='Send' className='py-1 flex-1' />
                    </DialogActions>
                </div>

            </Dialog>
        </>
    );
}
