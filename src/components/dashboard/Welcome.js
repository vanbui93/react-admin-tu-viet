import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { translate } from 'react-admin';
import compose from 'recompose/compose';

const styles = {
    media: {
        height: '18em',
    },
};

const mediaUrl = `https://marmelab.com/posters/beard-${parseInt(
    Math.random() * 10,
    10
) + 1}.jpeg`;

const Welcome = ({ classes, translate }) => (
    <Card>
        <CardMedia image={mediaUrl} className={classes.media} />
        <CardContent>
            <Typography variant="h4" component="h4">
                Chào mừng đến với trang admin tự chế
            </Typography>
            <Typography component="p">
                Đây là trang thống kê bán hàng
            </Typography>
        </CardContent>
    </Card>
);

const enhance = compose(
    withStyles(styles),
    translate
);

export default enhance(Welcome);
