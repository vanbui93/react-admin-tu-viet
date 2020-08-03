import React from 'react';
import {
    EditController,
    TextInput ,
    SimpleForm,
    DateField,
} from 'react-admin';
import withStyles from '@material-ui/core/styles/withStyles';
import CloseIcon from '@material-ui/icons/Close';
import {IconButton,Typography} from '@material-ui/core';


// import ProductReferenceField from '../products/ProductReferenceField';
// import CustomerReferenceField from '../visitors/CustomerReferenceField';
// import StarRatingField from './StarRatingField';
// import ReviewEditToolbar from './ReviewEditToolbar';

const editStyle = theme => ({
    root: {
        paddingTop: 40,
    },
    title: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '1em',
    },
    form: {
        [theme.breakpoints.up('xs')]: {
            width: 400,
        },
        [theme.breakpoints.down('xs')]: {
            width: '100vw',
            marginTop: -30,
        },
    },
    inlineField: {
        display: 'inline-block',
        width: '50%',
    },
});

const ReviewEdit = ({ classes, onCancel, ...props }) => (
    <EditController {...props}>
        {controllerProps =>
            controllerProps.record ? (
                <div className={classes.root}>
                    <div className={classes.title}>
                        <Typography variant="title">Review detail</Typography>
                        <IconButton onClick={onCancel}>
                            <CloseIcon />
                        </IconButton>
                    </div>
                    <SimpleForm
                        className={classes.form}
                        basePath={controllerProps.basePath}
                        record={controllerProps.record}
                        save={controllerProps.save}
                        version={controllerProps.version}
                        redirect="list"
                        resource="reviews"
                        // toolbar={<ReviewEditToolbar />}
                    >
                        {/* <CustomerReferenceField
                            formClassName={classes.inlineField}
                        /> */}

                        {/* <ProductReferenceField
                            formClassName={classes.inlineField}
                        /> */}
                        <DateField
                            source="date"
                            formClassName={classes.inlineField}
                        />
                        {/* <StarRatingField formClassName={classes.inlineField} /> */}
                        <TextInput multiline source="comment" />
                    </SimpleForm>
                </div>
            ) : null
        }
    </EditController>
);

export default withStyles(editStyle)(ReviewEdit);