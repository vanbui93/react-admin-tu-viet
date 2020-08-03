import React from 'react';
import {
    Datagrid,
    DateField,
    Edit,
    EditButton,
    FormTab,
    NumberInput,
    Pagination,
    ReferenceInput,
    ReferenceManyField,
    SelectInput,
    TabbedForm,
    TextField,
    TextInput,
} from 'react-admin';
import withStyles from '@material-ui/core/styles/withStyles';

import RichTextInput from 'ra-input-rich-text';
// import CustomerReferenceField from '../visitors/CustomerReferenceField';
// import StarRatingField from '../reviews';
import Poster from './Poster';
import { styles as createStyles } from './ProductCreate';


const styles = {
    ...createStyles,
    comment: {
        maxWidth: '20em',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
};

const ProductTitle = ({ record }) => <span>Product #{record.name}</span>;

const ProductEdit = ({ classes, ...props }) => (
    <Edit {...props} title={<ProductTitle />}>
        <TabbedForm>
            <FormTab label="Image">
                <Poster />
                <TextInput source="image" options={{ fullWidth: true }} />
                <TextInput source="thumbnail" options={{ fullWidth: true }} />
            </FormTab>
            <FormTab label="details" path="details">
                <TextInput source="name" />
                <NumberInput source="price" className={classes.price} />
                <NumberInput
                    source="width"
                    className={classes.width}
                    formClassName={classes.widthFormGroup}
                />
                <NumberInput
                    source="height"
                    className={classes.height}
                    formClassName={classes.heightFormGroup}
                />
                <ReferenceInput source="category_id" reference="categories">
                    <SelectInput source="name" />
                </ReferenceInput>
                <NumberInput source="stock" className={classes.stock} />
            </FormTab>
            <FormTab
                label="description"
                path="description"
            >
                <RichTextInput source="description" addLabel={false} />
            </FormTab>
            <FormTab label="reviews" path="reviews">
                {/* Tham chiếu đến table reviews, một sản phẩm có nhiều reviews, và 1 review có 1 id_product */}
                {/* <ReferenceManyField> có thể fetch tất cả những reviews được đánh giá bởi 1 người dùng nhất định*/}
                {/* reference="reviews" => tham chiếu đến bảng reviews, có target="product_id" */}
                <ReferenceManyField 
                    reference="reviews"
                    target="product_id"
                    addLabel={false}
                    pagination={<Pagination />}
                >
                    <Datagrid>
                        <DateField source="date" />
                        {/* <CustomerReferenceField /> */}
                        {/* <StarRatingField /> */}
                        <TextField
                            source="comment"
                            cellClassName={classes.comment}
                        />
                        <TextField source="rating" />
                        <TextField source="status" />
                        <EditButton />
                    </Datagrid>
                </ReferenceManyField>
            </FormTab>
        </TabbedForm>
    </Edit>
);

export default withStyles(styles)(ProductEdit);